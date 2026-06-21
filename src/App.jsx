import { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import {
  Sparkles,
  Moon,
  Sun,
  Copy,
  Download,
  Check,
  ChevronDown,
  ChevronUp,
  Terminal,
  HelpCircle,
  ArrowUpRight,
  Star,
  Send,
  BookOpen,
  Lightbulb,
  AlertCircle
} from 'lucide-react';
import { questionBank } from './data/questionBank';

// Labels mapping
const ROLE_LABELS = {
  python: "Python Developer",
  "data-science": "Data Scientist",
  mern: "MERN Developer",
  frontend: "Frontend Developer",
  backend: "Backend Developer",
  "ai-ml": "AI/ML Engineer"
};

const DIFFICULTY_LABELS = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced"
};

// Common English stopwords to ignore during keyword matching
const STOPWORDS = new Set([
  'a','an','the','is','are','was','were','be','been','being','have','has','had',
  'do','does','did','will','would','could','should','may','might','shall','can',
  'to','of','in','on','at','for','with','about','from','into','by','as','or',
  'and','but','if','then','than','that','this','it','its','we','you','they',
  'their','there','what','which','who','when','where','how','not','no','more',
  'also','all','some','any','each','both','between','through','after','before',
  'up','out','use','using','used','allow','allows','provide','provides','make'
]);

// ─── Evaluation Engine ────────────────────────────────────────────────────────
function extractKeywords(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOPWORDS.has(w));
}

function evaluateUserAnswer(userText, modelAnswer) {
  if (!userText || userText.trim().length < 5) {
    return null;
  }

  const modelKeywords = extractKeywords(modelAnswer);
  const userKeywords  = new Set(extractKeywords(userText));

  // Deduplicate model keywords
  const uniqueModelKeywords = [...new Set(modelKeywords)];

  const covered  = uniqueModelKeywords.filter(k => userKeywords.has(k));
  const missing  = uniqueModelKeywords.filter(k => !userKeywords.has(k)).slice(0, 10);

  const score = uniqueModelKeywords.length > 0
    ? Math.round((covered.length / uniqueModelKeywords.length) * 100)
    : 0;

  // Map score → stars (1–5)
  let stars;
  if      (score >= 80) stars = 5;
  else if (score >= 60) stars = 4;
  else if (score >= 40) stars = 3;
  else if (score >= 20) stars = 2;
  else                  stars = 1;

  // Short feedback sentence
  let feedback;
  if      (stars === 5) feedback = "Excellent! Your answer covers almost all key concepts.";
  else if (stars === 4) feedback = "Great job! A few more details would make it perfect.";
  else if (stars === 3) feedback = "Good start! Try adding more technical depth.";
  else if (stars === 2) feedback = "You've got the basics. Review the key concepts below.";
  else                  feedback = "Needs work. Study the sample answer and try again.";

  return { score, stars, covered: covered.slice(0, 15), missing, feedback };
}

// ─── Star Rating Component ────────────────────────────────────────────────────
function StarRating({ value, onChange, readonly = false }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="star-rating" aria-label={`Rating: ${value} of 5 stars`}>
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          type="button"
          className={`star-btn ${star <= (hovered || value) ? 'active' : ''}`}
          onClick={() => !readonly && onChange(star)}
          onMouseEnter={() => !readonly && setHovered(star)}
          onMouseLeave={() => !readonly && setHovered(0)}
          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
          disabled={readonly}
        >
          <Star size={22} fill={star <= (hovered || value) ? 'currentColor' : 'none'} />
        </button>
      ))}
      <span className="star-label">{value}/5</span>
    </div>
  );
}

// ─── Evaluation Result Card ───────────────────────────────────────────────────
function EvaluationResult({ result, manualStars, onStarChange }) {
  if (!result) return null;

  const scoreColor =
    result.score >= 70 ? 'eval-good' :
    result.score >= 40 ? 'eval-medium' : 'eval-poor';

  return (
    <div className={`eval-card ${scoreColor}`}>
      {/* Score row */}
      <div className="eval-header">
        <div className="eval-score-block">
          <span className="eval-score-number">{result.score}%</span>
          <span className="eval-score-label">Concept Match</span>
        </div>
        <div className="eval-stars-block">
          <span className="eval-stars-label">Your Rating</span>
          <StarRating value={manualStars} onChange={onStarChange} />
        </div>
      </div>

      {/* Feedback sentence */}
      <p className="eval-feedback">
        <AlertCircle size={14} style={{ flexShrink: 0 }} />
        {result.feedback}
      </p>

      {/* Covered concepts */}
      {result.covered.length > 0 && (
        <div className="eval-section">
          <p className="eval-section-title covered">
            <BookOpen size={14} /> Concepts Covered
          </p>
          <div className="eval-tags">
            {result.covered.map(k => (
              <span key={k} className="eval-tag covered">{k}</span>
            ))}
          </div>
        </div>
      )}

      {/* Missing concepts */}
      {result.missing.length > 0 && (
        <div className="eval-section">
          <p className="eval-section-title missing">
            <Lightbulb size={14} /> Recommended Additions
          </p>
          <div className="eval-tags">
            {result.missing.map(k => (
              <span key={k} className="eval-tag missing">{k}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
function App() {
  const creatorEmail = "mhmdrshid9@gmail.com";

  const [role, setRole]                   = useState('python');
  const [difficulty, setDifficulty]       = useState('intermediate');
  const [questionCount, setQuestionCount] = useState(5);
  const [generatedQuestions, setGeneratedQuestions] = useState([]);
  const [expandedAnswers, setExpandedAnswers]       = useState({});

  // Per-question user answers
  const [userAnswers, setUserAnswers]   = useState({});   // { id: string }
  // Per-question evaluation results
  const [evaluations, setEvaluations]   = useState({});   // { id: { score, stars, covered, missing, feedback } }
  // Per-question manual star override
  const [manualStars, setManualStars]   = useState({});   // { id: number }

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [toast, setToast] = useState({ show: false, message: '' });

  // Apply dark class
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const showToastMessage = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  // ── Generate ──────────────────────────────────────────────────────────────
  const handleGenerateQuestions = (e) => {
    if (e) e.preventDefault();
    const pool = questionBank[role]?.[difficulty] || [];
    if (!pool.length) { showToastMessage("No questions for this selection."); return; }
    const selected = [...pool].sort(() => 0.5 - Math.random()).slice(0, Math.min(questionCount, pool.length));
    setGeneratedQuestions(selected);
    setExpandedAnswers({});
    setUserAnswers({});
    setEvaluations({});
    setManualStars({});
    showToastMessage(`Generated ${selected.length} questions!`);
  };

  // ── Toggle sample answer ──────────────────────────────────────────────────
  const toggleAnswer = (id) =>
    setExpandedAnswers(prev => ({ ...prev, [id]: !prev[id] }));

  const toggleAllAnswers = (showAll) => {
    const next = {};
    if (showAll) generatedQuestions.forEach(q => { next[q.id] = true; });
    setExpandedAnswers(next);
  };

  // ── User answer change ────────────────────────────────────────────────────
  const handleUserAnswerChange = (id, value) =>
    setUserAnswers(prev => ({ ...prev, [id]: value }));

  // ── Evaluate ──────────────────────────────────────────────────────────────
  const handleEvaluate = (q) => {
    const userText = userAnswers[q.id] || '';
    if (userText.trim().length < 10) {
      showToastMessage("Please write at least a sentence before evaluating.");
      return;
    }
    const result = evaluateUserAnswer(userText, q.answer);
    setEvaluations(prev => ({ ...prev, [q.id]: result }));
    setManualStars(prev => ({ ...prev, [q.id]: result.stars }));
  };

  const handleManualStarChange = (id, stars) =>
    setManualStars(prev => ({ ...prev, [id]: stars }));

  // ── Copy to clipboard ─────────────────────────────────────────────────────
  const handleCopyQuestions = () => {
    if (!generatedQuestions.length) return;
    let text = `### Interview Practice: ${ROLE_LABELS[role]} (${DIFFICULTY_LABELS[difficulty]})\n`;
    text += `Candidate: Mohammed Rashid PK | ${creatorEmail}\n`;
    text += `Built for Digital Heroes (https://digitalheroesco.com)\n\n`;

    generatedQuestions.forEach((q, idx) => {
      text += `${idx + 1}. Q: ${q.question}\n`;
      text += `   Sample Answer: ${q.answer.replace(/\n/g, '\n   ')}\n`;
      const ua = userAnswers[q.id];
      if (ua) {
        text += `   My Answer: ${ua}\n`;
        const ev = evaluations[q.id];
        const stars = manualStars[q.id];
        if (ev) text += `   Score: ${ev.score}% | Rating: ${stars}/5 ⭐\n`;
      }
      text += '\n';
    });

    navigator.clipboard.writeText(text)
      .then(() => showToastMessage("Copied with answers & ratings!"))
      .catch(() => showToastMessage("Failed to copy."));
  };

  // ── Download PDF ──────────────────────────────────────────────────────────
  const handleDownloadPDF = () => {
    if (!generatedQuestions.length) return;
    const doc = new jsPDF();
    const pageH = 280;
    let y = 22;

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(79, 70, 229);
    doc.text("Interview Practice Report", 20, y); y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`Candidate: Mohammed Rashid PK (${creatorEmail})`, 20, y); y += 5;
    doc.text("Built for Digital Heroes - https://digitalheroesco.com", 20, y); y += 5;

    doc.setDrawColor(226, 232, 240);
    doc.line(20, y, 190, y); y += 7;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(`Role: ${ROLE_LABELS[role]}   |   Difficulty: ${DIFFICULTY_LABELS[difficulty]}   |   Questions: ${generatedQuestions.length}`, 20, y);
    y += 5; doc.line(20, y, 190, y); y += 10;

    generatedQuestions.forEach((q, index) => {
      // Page break guard
      const needsBreak = () => { if (y > pageH - 15) { doc.addPage(); y = 20; } };

      // Question
      needsBreak();
      doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(79, 70, 229);
      doc.text(`Q${index + 1}:`, 20, y);
      doc.setTextColor(15, 23, 42);
      const qLines = doc.splitTextToSize(q.question, 155);
      qLines.forEach(line => { needsBreak(); doc.text(line, 30, y); y += 5.5; });
      y += 2;

      // Sample Answer
      needsBreak();
      doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.setTextColor(71, 85, 105);
      doc.text("Sample Answer:", 30, y); y += 5;
      doc.setFont("helvetica", "normal");
      const aLines = doc.splitTextToSize(q.answer, 155);
      aLines.forEach(line => { needsBreak(); doc.text(line, 30, y); y += 5; });
      y += 2;

      // User Answer + Rating
      const ua = userAnswers[q.id];
      if (ua) {
        needsBreak();
        doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.setTextColor(16, 185, 129);
        doc.text("My Answer:", 30, y); y += 5;
        doc.setFont("helvetica", "normal"); doc.setTextColor(71, 85, 105);
        const uLines = doc.splitTextToSize(ua, 155);
        uLines.forEach(line => { needsBreak(); doc.text(line, 30, y); y += 5; });

        const ev = evaluations[q.id];
        const stars = manualStars[q.id];
        if (ev) {
          needsBreak();
          doc.setFont("helvetica", "bold"); doc.setTextColor(79, 70, 229);
          doc.text(`Score: ${ev.score}%   Rating: ${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}   ${ev.feedback}`, 30, y);
          y += 5;
        }
      }

      y += 8;
      needsBreak();
      doc.setDrawColor(226, 232, 240);
      doc.line(20, y, 190, y);
      y += 8;
    });

    doc.save(`Interview_Practice_${role}_${difficulty}.pdf`);
    showToastMessage("PDF downloaded with ratings!");
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo-section">
            <span className="logo-icon"><Terminal size={32} strokeWidth={2.5} /></span>
            <span className="logo-text">Digital Interview Gen</span>
          </div>
          <div className="header-right">
            <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer" className="digital-heroes-btn">
              Built for Digital Heroes <ArrowUpRight size={16} />
            </a>
            <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle-btn" aria-label="Toggle theme">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="creator-badge">
              <span className="creator-name">Mohammed Rashid PK</span>
              <span className="creator-email">{creatorEmail}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container main-layout">

        {/* Sidebar */}
        <aside className="control-panel">
          <h2 className="panel-title">
            <Sparkles size={20} className="logo-icon" /> Generator Options
          </h2>
          <form onSubmit={handleGenerateQuestions}>
            <div className="form-group">
              <label htmlFor="role-select" className="form-label">Target Role</label>
              <select id="role-select" value={role} onChange={e => setRole(e.target.value)} className="form-select">
                {Object.entries(ROLE_LABELS).map(([val, label]) => (
                  <option key={val} value={val}>{label}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Difficulty Level</label>
              <div className="options-grid">
                {Object.entries(DIFFICULTY_LABELS).map(([val, label]) => (
                  <label key={val} className={`option-card ${difficulty === val ? 'selected' : ''}`}>
                    <input type="radio" name="difficulty" value={val} checked={difficulty === val} onChange={() => setDifficulty(val)} />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Number of Questions</label>
              <div className="options-grid">
                {[5, 10, 20].map(num => (
                  <label key={num} className={`option-card ${questionCount === num ? 'selected' : ''}`}>
                    <input type="radio" name="questionCount" value={num} checked={questionCount === num} onChange={() => setQuestionCount(num)} />
                    {num} Questions
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="generate-btn">
              Generate Interview Questions
            </button>
          </form>

          {/* Progress summary when there are evaluations */}
          {generatedQuestions.length > 0 && Object.keys(evaluations).length > 0 && (
            <div className="progress-summary">
              <p className="progress-title">📊 Session Summary</p>
              <div className="progress-stats">
                <div className="progress-stat">
                  <span className="progress-stat-number">{Object.keys(evaluations).length}</span>
                  <span className="progress-stat-label">Evaluated</span>
                </div>
                <div className="progress-stat">
                  <span className="progress-stat-number">
                    {Math.round(
                      Object.values(evaluations).reduce((acc, e) => acc + e.score, 0) /
                      Object.values(evaluations).length
                    )}%
                  </span>
                  <span className="progress-stat-label">Avg Score</span>
                </div>
                <div className="progress-stat">
                  <span className="progress-stat-number">
                    {(
                      Object.values(manualStars).reduce((acc, s) => acc + s, 0) /
                      Object.values(manualStars).length
                    ).toFixed(1)}⭐
                  </span>
                  <span className="progress-stat-label">Avg Rating</span>
                </div>
              </div>
            </div>
          )}
        </aside>

        {/* Questions Content Area */}
        <section className="content-panel">
          {generatedQuestions.length === 0 ? (
            <div className="intro-hero">
              <div className="intro-icon"><HelpCircle size={44} /></div>
              <h1 className="intro-title">Ready to Practice?</h1>
              <p className="intro-desc">
                Select your role, difficulty, and question count — then generate your mock interview.
                Type your answers and get instant AI-powered concept-matching scores.
              </p>
            </div>
          ) : (
            <>
              {/* Action Header */}
              <div className="action-header">
                <div className="results-meta">
                  <span className="results-badge">{ROLE_LABELS[role]}</span>
                  <span className="results-title">{DIFFICULTY_LABELS[difficulty]} (x{generatedQuestions.length})</span>
                </div>
                <div className="action-buttons">
                  <button onClick={() => toggleAllAnswers(true)} className="action-btn">Reveal Answers</button>
                  <button onClick={() => toggleAllAnswers(false)} className="action-btn">Hide Answers</button>
                  <button onClick={handleCopyQuestions} className="action-btn">
                    <Copy size={16} /> Copy All
                  </button>
                  <button onClick={handleDownloadPDF} className="action-btn primary">
                    <Download size={16} /> Download PDF
                  </button>
                </div>
              </div>

              {/* Question Cards */}
              <div className="questions-list">
                {generatedQuestions.map((q, index) => {
                  const isExpanded = !!expandedAnswers[q.id];
                  const userText   = userAnswers[q.id] || '';
                  const evalResult = evaluations[q.id];
                  const stars      = manualStars[q.id] || 0;

                  return (
                    <article key={q.id} className="question-card" style={{ animationDelay: `${index * 0.05}s` }}>
                      {/* Card header */}
                      <div className="card-header">
                        <span className="q-number">Question {index + 1}</span>
                        <div className="badge-group">
                          {evalResult && (
                            <span className={`score-badge ${evalResult.score >= 70 ? 'score-good' : evalResult.score >= 40 ? 'score-medium' : 'score-poor'}`}>
                              {evalResult.score}% match
                            </span>
                          )}
                          <span className={`badge difficulty-${difficulty}`}>{DIFFICULTY_LABELS[difficulty]}</span>
                        </div>
                      </div>

                      {/* Question text */}
                      <h3 className="question-text">{q.question}</h3>

                      {/* ── User Answer textarea ── */}
                      <div className="user-answer-section">
                        <label htmlFor={`answer-${q.id}`} className="user-answer-label">
                          ✍️ Your Answer
                        </label>
                        <textarea
                          id={`answer-${q.id}`}
                          className="user-answer-textarea"
                          value={userText}
                          onChange={e => handleUserAnswerChange(q.id, e.target.value)}
                          placeholder="Type your answer here… Be as detailed as you can."
                          rows={5}
                        />
                        <div className="user-answer-actions">
                          <button
                            type="button"
                            className="evaluate-btn"
                            onClick={() => handleEvaluate(q)}
                            disabled={userText.trim().length < 10}
                          >
                            <Send size={15} /> Evaluate My Answer
                          </button>
                          <span className="char-count">{userText.length} chars</span>
                        </div>
                      </div>

                      {/* ── Evaluation Result ── */}
                      {evalResult && (
                        <EvaluationResult
                          result={evalResult}
                          manualStars={stars}
                          onStarChange={s => handleManualStarChange(q.id, s)}
                        />
                      )}

                      {/* ── Sample Answer Toggle ── */}
                      <div className="sample-answer-row">
                        <button onClick={() => toggleAnswer(q.id)} className="toggle-answer-btn" aria-expanded={isExpanded}>
                          {isExpanded ? (<>Hide Sample Answer <ChevronUp size={16} /></>) : (<>Show Sample Answer <ChevronDown size={16} /></>)}
                        </button>
                      </div>

                      <div className={`answer-container ${isExpanded ? 'expanded' : ''}`}>
                        <div className="answer-box">{q.answer}</div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Interview Question Generator. Created by <strong>Mohammed Rashid PK</strong>.</p>
          <div className="footer-links">
            <a href={`mailto:${creatorEmail}`} className="footer-link">Contact</a>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer" className="footer-link">Digital Heroes</a>
          </div>
        </div>
      </footer>

      {/* Toast */}
      <div className={`toast ${toast.show ? 'show' : ''}`}>
        <Check size={18} /> {toast.message}
      </div>
    </>
  );
}

export default App;
