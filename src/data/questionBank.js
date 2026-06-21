// Data bank containing 20 high-quality, professional questions and answers for each role and difficulty combination.
export const questionBank = {
  python: {
    beginner: [
      {
        id: "py_b1",
        question: "What are the built-in data types in Python?",
        answer: "Python has several built-in data types:\n- Numeric: int, float, complex\n- Sequence: list, tuple, range, str\n- Mapping: dict\n- Set: set, frozenset\n- Boolean: bool\n- Binary: bytes, bytearray, memoryview\n- NoneType: None"
      },
      {
        id: "py_b2",
        question: "What is the difference between a list and a tuple in Python?",
        answer: "The main differences are:\n1. Mutability: Lists are mutable (can be changed after creation), whereas tuples are immutable (cannot be modified).\n2. Syntax: Lists use square brackets `[]`, while tuples use parentheses `()`.\n3. Performance: Tuples are generally faster and consume slightly less memory than lists.\n4. Usage: Lists are typically used for homogeneous data that may change; tuples are used for heterogeneous data that should remain constant."
      },
      {
        id: "py_b3",
        question: "How do you explain Python's PEP 8?",
        answer: "PEP 8 is Python's style guide. It stands for Python Enhancement Proposal 8. It provides guidelines and best practices on how to write Python code to maximize its readability and consistency. Key rules include using 4 spaces for indentation, limiting line lengths to 79 characters, using snake_case for functions/variables, and CamelCase for classes."
      },
      {
        id: "py_b4",
        question: "What is a lambda function in Python?",
        answer: "A lambda function is an anonymous, inline function defined with the `lambda` keyword. It can take any number of arguments but can only have a single expression, which is evaluated and returned. Syntax: `lambda arguments: expression`. Example: `add = lambda x, y: x + y`."
      },
      {
        id: "py_b5",
        question: "What is the difference between '/' and '//' operators in Python?",
        answer: "`/` is the float division operator, which returns a float (e.g., `5 / 2` returns `2.5`). `//` is the floor division operator, which divides the numbers and rounds down to the nearest integer (e.g., `5 // 2` returns `2`)."
      },
      {
        id: "py_b6",
        question: "What is a list comprehension and how do you write one?",
        answer: "A list comprehension is a concise way to create lists in Python. It is faster and more readable than standard loops. Syntax: `[expression for item in iterable if condition]`. Example: `squares = [x**2 for x in range(5)]` yields `[0, 1, 4, 9, 16]`."
      },
      {
        id: "py_b7",
        question: "What is the purpose of the 'self' keyword in Python classes?",
        answer: "`self` represents the specific instance of the class. It allows instance methods to access and modify the attributes and methods of that specific object. It must be explicitly passed as the first parameter of instance methods, though Python binds it automatically when the method is called."
      },
      {
        id: "py_b8",
        question: "Explain the difference between 'append()' and 'extend()' methods of a list.",
        answer: "- `append(item)` adds its argument as a single element to the end of the list. If you append a list, it adds the nested list.\n- `extend(iterable)` iterates over its argument and adds each element to the list, flattening the input collection by one level."
      },
      {
        id: "py_b9",
        question: "How do you handle exceptions in Python?",
        answer: "Exceptions are handled using the `try-except` block. You place code that might raise an exception in the `try` block, and handle the error in the `except` block. You can also use `else` (runs if no exception occurs) and `finally` (always runs, typically for cleanup)."
      },
      {
        id: "py_b10",
        question: "What is the difference between 'is' and '==' in Python?",
        answer: "- `==` compares the *values* of two objects to check if they are equal.\n- `is` compares the *identities* of two objects to check if they point to the exact same memory address (same object in memory)."
      },
      {
        id: "py_b11",
        question: "What are local and global variables in Python?",
        answer: "- **Local variables** are defined inside a function and can only be accessed within that function.\n- **Global variables** are defined outside any function and can be accessed throughout the entire module. To modify a global variable inside a function, you must use the `global` keyword."
      },
      {
        id: "py_b12",
        question: "What is the use of the 'pass' statement in Python?",
        answer: "`pass` is a null statement. It is used as a placeholder in empty functions, classes, or loops where statement syntax is required but no action is needed yet. It prevents compilation errors."
      },
      {
        id: "py_b13",
        question: "How do you open and close files in Python safely?",
        answer: "The safest and recommended way is using the `with` statement (context manager). It automatically handles closing the file even if exceptions occur. Example:\n```python\nwith open('file.txt', 'r') as file:\n    content = file.read()\n```"
      },
      {
        id: "py_b14",
        question: "What is a dictionary in Python?",
        answer: "A dictionary is an unordered, mutable collection of key-value pairs. Keys must be unique and hashable (immutable, like strings, numbers, or tuples). Values can be of any type. Dicts use curly braces `{}` and colons, e.g., `{'name': 'Rashid', 'age': 25}`."
      },
      {
        id: "py_b15",
        question: "How do you comment code in Python?",
        answer: "Single-line comments start with a hash symbol `#`. For multi-line comments, Python does not have a specific multi-line comment token; instead, developers use multi-line strings (triple quotes `\"\"\"`) that are left unassigned, which act as comments/docstrings."
      },
      {
        id: "py_b16",
        question: "What is a set in Python?",
        answer: "A set is an unordered, mutable collection of unique and hashable elements. It does not allow duplicate values. Sets support mathematical operations like union, intersection, difference, and symmetric difference. Created using `set()` or `{val1, val2}`."
      },
      {
        id: "py_b17",
        question: "What does the 'range()' function do?",
        answer: "`range()` generates a sequence of numbers. It is commonly used in loops. Syntax is `range(start, stop, step)`. The `stop` value is exclusive. Example: `list(range(1, 5))` returns `[1, 2, 3, 4]`."
      },
      {
        id: "py_b18",
        question: "How do you convert a string to an integer in Python?",
        answer: "You can convert a string to an integer using the `int()` constructor. Example: `num = int('123')`. It raises a `ValueError` if the string does not represent a valid integer."
      },
      {
        id: "py_b19",
        question: "What is the difference between break and continue statements?",
        answer: "- `break` terminates the loop execution immediately and moves control to the statement after the loop.\n- `continue` skips the rest of the current iteration and jumps to the next iteration of the loop."
      },
      {
        id: "py_b20",
        question: "What are modules and packages in Python?",
        answer: "- A **module** is a single Python file containing variables, functions, or classes that can be imported and reused.\n- A **package** is a directory containing multiple modules and an `__init__.py` file (in older Python versions, optional now) to organize modules hierarchically."
      }
    ],
    intermediate: [
      {
        id: "py_i1",
        question: "What are decorators in Python and how do you write one?",
        answer: "A decorator is a design pattern that allows modifying or extending the behavior of a function or class without permanently changing its source code. Decorators are functions that take another function as an argument, wrap it with extra functionality, and return the wrapper. Example:\n```python\ndef my_decorator(func):\n    def wrapper(*args, **kwargs):\n        print('Before call')\n        result = func(*args, **kwargs)\n        print('After call')\n        return result\n    return wrapper\n```"
      },
      {
        id: "py_i2",
        question: "Explain the difference between generators and iterators.",
        answer: "- An **iterator** is an object that implements the iterator protocol, which consists of `__iter__()` and `__next__()` methods.\n- A **generator** is a simpler way to create iterators using functions that yield values using the `yield` keyword instead of returning them. Every generator is an iterator, but not every iterator is a generator."
      },
      {
        id: "py_i3",
        question: "What is the difference between deepcopy and shallowcopy?",
        answer: "- A **shallow copy** (`copy.copy()`) creates a new collection object, but populates it with references to the child objects in the original. Changes to nested objects affect both copies.\n- A **deep copy** (`copy.deepcopy()`) recursively copies the collection and all nested objects. The new object is fully independent of the original."
      },
      {
        id: "py_i4",
        question: "What is the Global Interpreter Lock (GIL) and how does it affect concurrency?",
        answer: "The GIL is a mutex in CPython that allows only one thread to execute Python bytecodes at a time. This prevents race conditions in memory management. Because of the GIL, CPU-bound Python programs do not get speedups from multi-threading. For CPU-bound tasks, developers use `multiprocessing` instead of `threading`."
      },
      {
        id: "py_i5",
        question: "What are *args and **kwargs in function definitions?",
        answer: "- `*args` allows a function to accept any number of positional arguments, which are packed into a tuple.\n- `**kwargs` allows a function to accept any number of keyword arguments, which are packed into a dictionary.\nThis makes functions highly flexible and dynamic."
      },
      {
        id: "py_i6",
        question: "How does memory management work in Python?",
        answer: "Memory management in CPython is handled via:\n1. **Reference Counting**: Python tracks the number of references to each object. When reference count drops to zero, memory is freed immediately.\n2. **Garbage Collection (Generational GC)**: A cyclic garbage collector detects and cleans reference cycles (objects referencing each other but isolated from the program root)."
      },
      {
        id: "py_i7",
        question: "What are context managers and how do you write a custom one?",
        answer: "Context managers manage resources (like files or database connections), ensuring they are acquired and released properly. They are used with the `with` statement. You can create a custom context manager by:\n1. Defining a class with `__enter__()` and `__exit__()` methods.\n2. Writing a generator function decorated with `@contextlib.contextmanager`."
      },
      {
        id: "py_i8",
        question: "What are Dunder (double underscore) methods?",
        answer: "Dunder methods (also called magic methods) are special methods with double leading and trailing underscores (e.g., `__init__`, `__str__`, `__add__`). They allow custom classes to hook into Python's built-in behaviors, such as operator overloading, formatting, and object lifecycle operations."
      },
      {
        id: "py_i9",
        question: "Explain the difference between multithreading and multiprocessing in Python.",
        answer: "- **Multithreading** shares the same memory space. It is lightweight but limited by the GIL, making it suitable for I/O-bound tasks (network calls, file reading).\n- **Multiprocessing** spawns separate processes, each with its own memory space and Python interpreter. It avoids GIL restrictions, making it suitable for CPU-bound computations."
      },
      {
        id: "py_i10",
        question: "How do you implement abstract classes in Python?",
        answer: "Abstract classes are created using the `abc` module. You subclass `ABC` and decorate abstract methods with `@abstractmethod`. Classes with abstract methods cannot be instantiated directly; subclasses must implement all abstract methods before instantiation. Example:\n```python\nfrom abc import ABC, abstractmethod\nclass Animal(ABC):\n    @abstractmethod\n    def make_sound(self):\n        pass\n```"
      },
      {
        id: "py_i11",
        question: "What is the difference between classmethod and staticmethod?",
        answer: "- `@classmethod` takes the class itself (`cls`) as the first argument. It can access and modify class-level state.\n- `@staticmethod` takes no implicit first argument (neither `self` nor `cls`). It behaves like a plain function inside the class namespace, used for utility functions related to the class."
      },
      {
        id: "py_i12",
        question: "What is Method Resolution Order (MRO) in Python?",
        answer: "MRO is the order in which Python searches for inherited methods in multiple inheritance. Python uses the **C3 Linearization** algorithm to determine this order. You can inspect a class's MRO using the `__mro__` attribute or the `mro()` method."
      },
      {
        id: "py_i13",
        question: "What are property decorators in Python?",
        answer: "The `@property` decorator allows you to define a class method that can be accessed like an attribute. You can define getters, setters, and deleters. Example:\n```python\nclass User:\n    @property\n    def email(self):\n        return self._email\n    @email.setter\n    def email(self, val):\n        self._email = val\n```"
      },
      {
        id: "py_i14",
        question: "What is the difference between '__str__' and '__repr__'?",
        answer: "- `__str__` is intended to provide a readable, user-friendly string representation of an object (for `print()` and `str()`).\n- `__repr__` is intended to provide an unambiguous representation, ideally looking like valid Python code to recreate the object (for debugging and logging)."
      },
      {
        id: "py_i15",
        question: "Explain variable scope lookup in Python (LEGB rule).",
        answer: "Python searches for names in variables in four scopes sequentially (LEGB):\n1. **Local (L)**: Defined inside the current function.\n2. **Enclosing (E)**: In enclosing/outer functions (nested functions).\n3. **Global (G)**: At the module level.\n4. **Built-in (B)**: Names pre-loaded into Python (e.g., `len`, `int`)."
      },
      {
        id: "py_i16",
        question: "What is monkey patching in Python?",
        answer: "Monkey patching is the dynamic modification of a class or module at runtime, usually to patch bugs or mock behaviors in testing. For example, replacing a network requests method with a dummy local function in test suites."
      },
      {
        id: "py_i17",
        question: "How do you run unit tests in Python?",
        answer: "You can write unit tests using the built-in `unittest` module or third-party frameworks like `pytest`. In `unittest`, you subclass `unittest.TestCase` and write methods starting with `test_`. Run them using the CLI command `python -m unittest test_file.py`."
      },
      {
        id: "py_i18",
        question: "What is serialization/deserialization and how do you do it in Python?",
        answer: "Serialization converts Python objects into byte streams or strings for storage or transfer; deserialization does the opposite. In Python:\n- For JSON: use the `json` module (`json.dumps()`, `json.loads()`).\n- For Python-specific binary format: use the `pickle` module (`pickle.dumps()`, `pickle.loads()`)."
      },
      {
        id: "py_i19",
        question: "What is the purpose of 'sys.argv'?",
        answer: "`sys.argv` is a list in the `sys` module containing command-line arguments passed to the script. `sys.argv[0]` is the script name, and subsequent indices contain the arguments as strings."
      },
      {
        id: "py_i20",
        question: "What are namespaces in Python?",
        answer: "A namespace is a container (or map) mapping names (variables, functions, classes) to their corresponding objects. Python maintains namespaces using dictionaries. Examples include the global namespace of a module, local namespace of a function, and built-in namespace."
      }
    ],
    advanced: [
      {
        id: "py_a1",
        question: "What are metaclasses and how do they work in Python?",
        answer: "A metaclass is a class whose instances are classes. Just as a class defines the behavior of its instances (objects), a metaclass defines the behavior of classes (creation, modifications). By default, Python uses `type` as the metaclass. You can create a custom metaclass by inheriting from `type` and overriding `__new__` or `__init__` methods to customize class creation dynamically."
      },
      {
        id: "py_a2",
        question: "Explain the descriptor protocol and its use cases.",
        answer: "Descriptors are Python objects that implement the descriptor protocol: `__get__()`, `__set__()`, or `__delete__()` methods. When a class attribute has one of these methods, lookup behavior is overridden. Properties, class methods, static methods, and ORM fields are all implemented behind the scenes using descriptors."
      },
      {
        id: "py_a3",
        question: "Explain asyncio, event loops, and coroutines in Python.",
        answer: "`asyncio` is a library to write concurrent code using the `async/await` syntax. \n- **Coroutines**: Functions declared with `async def`. When called, they return a coroutine object instead of executing immediately.\n- **Event Loop**: The orchestrator that executes delayed tasks, manages I/O events, and switches execution context between active coroutines when they await I/O operations."
      },
      {
        id: "py_a4",
        question: "How do you profile memory and execution time in Python?",
        answer: "For execution time profiling:\n- `timeit`: For small code snippets.\n- `cProfile`: Built-in deterministic CPU profiler.\nFor memory profiling:\n- `tracemalloc`: Built-in module to track memory allocations.\n- `memory_profiler`: External package for line-by-line memory usage analysis."
      },
      {
        id: "py_a5",
        question: "Explain the GIL's implementation details. Can it be bypassed or removed?",
        answer: "The GIL protects CPython's reference counting from concurrent modifications. It can be bypassed by using multiprocessing, writing C extensions that explicitly release the GIL via `Py_BEGIN_ALLOW_THREADS`, or using alternative implementations like Jython or IronPython. Python 3.13 introduces experimental PEP 703 (free-threaded Python) which allows disabling the GIL entirely."
      },
      {
        id: "py_a6",
        question: "What are weak references (`weakref` module) and when should you use them?",
        answer: "Weak references let you reference an object without increasing its reference count. This is useful for implementing caches, lookup tables, or observer patterns where you want to allow objects to be garbage collected even if they are still tracked in the cache, preventing memory leaks."
      },
      {
        id: "py_a7",
        question: "How does Python handle garbage collection for cyclic references?",
        answer: "Python uses a generational cyclic garbage collector that runs periodically. It inspects objects tracked in three generations (Gen 0, 1, 2) and searches for container objects (lists, dicts, custom objects) that reference each other. It uses a graph-based cycle detection algorithm to identify isolated cycles and clean them up."
      },
      {
        id: "py_a8",
        question: "Explain the difference between `__new__` and `__init__` in object creation.",
        answer: "- `__new__` is the actual constructor. It is a static method responsible for *creating* and returning a new instance of the class. It is called before `__init__`.\n- `__init__` is the initializer. It receives the instance created by `__new__` and is responsible for *populating* its attributes. It returns nothing."
      },
      {
        id: "py_a9",
        question: "How do you optimize critical loops in Python (without rewriting in C)?",
        answer: "Optimization techniques include:\n1. Using local variables instead of global lookups.\n2. Built-in map, filter, or list comprehensions (which run in C internally).\n3. Using `itertools` for efficient iteration.\n4. Utilizing Just-In-Time (JIT) compilers like PyPy or Numba (`@jit`)."
      },
      {
        id: "py_a10",
        question: "What are ContextVars and why are they needed in concurrent programming?",
        answer: "`contextvars` module allows declaring context-local variables (similar to thread-local variables, but suited for async tasks). Without ContextVars, concurrent coroutines running on the same thread could overwrite thread-local variables, causing state bleed between concurrent user requests."
      },
      {
        id: "py_a11",
        question: "Explain Python Frame objects and how they can be used for debugging.",
        answer: "Frame objects represent the execution frames of Python code. They contain information about the call stack, including local variables, global variables, and instruction pointers. Developers can access frames using `sys._getframe()` to inspect calling scopes, implement advanced debuggers, or perform custom tracing."
      },
      {
        id: "py_a12",
        question: "What is duck typing and how is it formalised in modern Python?",
        answer: "Duck typing relies on an object's runtime behavior rather than its inheritance hierarchy ('if it walks like a duck...'). Modern Python formalizes this via:\n1. **Protocols (PEP 544)** in the `typing` module for static structural typing.\n2. **Abstract Base Classes (ABCs)** for runtime structural verification via `isinstance()` check overrides."
      },
      {
        id: "py_a13",
        question: "How do you write custom decorators that accept arguments?",
        answer: "To create a decorator that takes arguments, you need three nested functions:\n1. The outer function takes the decorator arguments.\n2. The middle function takes the target function.\n3. The inner function handles execution logic (`*args, **kwargs`).\nExample:\n```python\ndef repeat(num):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(num): func(*args, **kwargs)\n        return wrapper\n    return decorator\n```"
      },
      {
        id: "py_a14",
        question: "Explain the difference between namespace packages and regular packages.",
        answer: "- **Regular packages** are single directories containing code and historically require an `__init__.py` file.\n- **Namespace packages** (PEP 420) allow distributing a single Python package across multiple separate directories or zip files, without needing `__init__.py`. This is useful for large sub-divided library suites."
      },
      {
        id: "py_a15",
        question: "How does the 'slots' attribute work and what are its pros and cons?",
        answer: "`__slots__` tells Python not to use a dynamic dictionary (`__dict__`) for storing object attributes. Instead, it allocates space for a fixed set of attributes.\n- **Pros**: Drastically reduces memory consumption and speeds up attribute access.\n- **Cons**: Prevents adding new attributes dynamically at runtime and complicates multiple inheritance."
      },
      {
        id: "py_a16",
        question: "What is Cython and how does it compare to standard Python?",
        answer: "Cython is a superset of Python that supports calling C functions and declaring C types on variables and class attributes. It compiles Python code directly into C/C++ extensions, yielding near-native execution speed for CPU-bound computations."
      },
      {
        id: "py_a17",
        question: "Explain the socket programming model in Python.",
        answer: "Python's `socket` module wraps BSD sockets. The server model uses `socket()`, `bind()` to a port, `listen()` for incoming connections, and a blocking `accept()` loop. Clients connect using `connect()` and communicate via `send()` and `recv()`. Async models use `selectors` or `asyncio` to avoid blocking."
      },
      {
        id: "py_a18",
        question: "How do you achieve thread safety in Python?",
        answer: "Thread safety is achieved using synchronization primitives from the `threading` module, such as `Lock` (mutex), `RLock` (reentrant lock), `Semaphore`, and thread-safe data structures like `queue.Queue`. Although the GIL prevents concurrent bytecode execution, threads can still context-switch mid-operation."
      },
      {
        id: "py_a19",
        question: "What is meta-programming and how is it used in web frameworks?",
        answer: "Metaprogramming is writing code that manipulates code (e.g. dynamically creating classes or intercepting imports). Frameworks like Django or Flask use metaclasses and decorators to inspect model attributes, register API routes automatically, and build database queries dynamically from class definitions."
      },
      {
        id: "py_a20",
        question: "What are descriptor lookup priority rules in Python?",
        answer: "When accessing `obj.attr`, Python searches in this order:\n1. A **data descriptor** (defines both `__get__` and `__set__`) in the class hierarchy.\n2. The object's instance dictionary `obj.__dict__`.\n3. A **non-data descriptor** (defines only `__get__`) in the class hierarchy.\n4. Class attributes or base class attributes.\n5. Custom `__getattr__` method if defined."
      }
    ]
  },
  "data-science": {
    beginner: [
      {
        id: "ds_b1",
        question: "What is the difference between supervised and unsupervised learning?",
        answer: "- **Supervised learning**: The model is trained on labeled data (input-output pairs). The goal is to predict the label for new data (e.g., Regression, Classification).\n- **Unsupervised learning**: The model is trained on unlabeled data. The goal is to find hidden patterns or structures (e.g., Clustering, Dimensionality reduction)."
      },
      {
        id: "ds_b2",
        question: "Explain the Bias-Variance tradeoff.",
        answer: "- **Bias** is error introduced by approximating a complex real-world problem with a simple model (leads to underfitting).\n- **Variance** is error from sensitivity to fluctuations in the training set (leads to overfitting).\n- **Tradeoff**: Minimizing bias increases variance, and vice versa. An optimal model balances both to minimize total generalization error."
      },
      {
        id: "ds_b3",
        question: "What is overfitting and how can you prevent it?",
        answer: "Overfitting occurs when a model learns the noise and details of the training data too well, failing to generalize to unseen data.\nPrevention techniques:\n- Collect more training data\n- Simplify the model (fewer parameters/features)\n- Use regularization (L1/L2)\n- Apply cross-validation\n- Use dropout (in neural networks) or pruning (in decision trees)"
      },
      {
        id: "ds_b4",
        question: "What are the common metrics to evaluate a classification model?",
        answer: "Common metrics include:\n- **Accuracy**: Fraction of correct predictions.\n- **Precision**: True Positives divided by total predicted positives. (Relevance of positive predictions).\n- **Recall (Sensitivity)**: True Positives divided by actual positives. (Completeness).\n- **F1-Score**: Harmonic mean of Precision and Recall.\n- **ROC-AUC**: Tradeoff between True Positive Rate and False Positive Rate."
      },
      {
        id: "ds_b5",
        question: "What is the Central Limit Theorem (CLT) and why is it important?",
        answer: "The CLT states that the distribution of sample means approaches a normal (Gaussian) distribution as the sample size becomes large (typically n >= 30), regardless of the shape of the population distribution. It is crucial because it allows us to perform statistical hypothesis testing and construct confidence intervals."
      },
      {
        id: "ds_b6",
        question: "How do you handle missing values in a dataset?",
        answer: "Missing values can be handled by:\n1. **Deletion**: Drop rows or columns with missing values (if sparse).\n2. **Imputation**: Fill with mean, median, mode, or constant values.\n3. **Predictive Imputation**: Predict missing values using algorithms like KNN or linear regression.\n4. **Flagging**: Add a binary indicator column showing that the data was missing."
      },
      {
        id: "ds_b7",
        question: "What is feature scaling and why is it necessary?",
        answer: "Feature scaling standardizes the range of independent variables (e.g., normalization to [0,1] or standardization to mean=0, std=1). It is necessary because distance-based algorithms (like KNN, SVM, K-Means) and gradient descent-based algorithms converge much faster and perform accurately when features are on the same scale."
      },
      {
        id: "ds_b8",
        question: "What is the difference between covariance and correlation?",
        answer: "- **Covariance** indicates the direction of the linear relationship between two variables (positive or negative), but its magnitude is dependent on the scale of the variables.\n- **Correlation** is the standardized version of covariance, bounded between -1 and +1, showing both the direction and strength of the linear relationship."
      },
      {
        id: "ds_b9",
        question: "Explain univariate, bivariate, and multivariate analysis.",
        answer: "- **Univariate**: Analysis of a single variable (e.g., histograms, boxplots).\n- **Bivariate**: Analysis of the relationship between two variables (e.g., scatterplots, correlation).\n- **Multivariate**: Analysis of the relationships between three or more variables simultaneously."
      },
      {
        id: "ds_b10",
        question: "What is a confusion matrix?",
        answer: "A confusion matrix is a table summarizing the performance of a classification model. It cross-tabulates predicted vs actual classes, displaying:\n- **True Positives (TP)**: Correct positive predictions.\n- **True Negatives (TN)**: Correct negative predictions.\n- **False Positives (FP)**: Type I error (incorrect positive).\n- **False Negatives (FN)**: Type II error (incorrect negative)."
      },
      {
        id: "ds_b11",
        question: "What is data normalization vs standardization?",
        answer: "- **Normalization (Min-Max Scaling)**: Scales data to a fixed range, usually [0, 1]. Useful when you know the bounding limits.\n- **Standardization (Z-score normalization)**: Rescales data to have a mean of 0 and standard deviation of 1. Better for normal distributions and handling outliers."
      },
      {
        id: "ds_b12",
        question: "Explain the difference between classification and regression.",
        answer: "- **Classification** predicts discrete, categorical labels or classes (e.g., Spam vs Not Spam, disease diagnosis).\n- **Regression** predicts continuous, numerical values (e.g., house prices, temperature forecast)."
      },
      {
        id: "ds_b13",
        question: "What is an outlier and how can you detect them?",
        answer: "An outlier is an observation that lies an abnormal distance from other values in the dataset. Detection methods include:\n- **Visual**: Box plots, scatter plots.\n- **Statistical**: Z-score (values > 3 standard deviations from mean) and IQR (values outside 1.5 * IQR from the 1st/3rd quartiles)."
      },
      {
        id: "ds_b14",
        question: "What is cross-validation and why is it used?",
        answer: "Cross-validation is a resampling technique where the data is divided into multiple folds. The model is trained on some folds and tested on the remaining fold recursively. The most common is K-Fold CV. It provides a more reliable estimate of model performance and guards against overfitting."
      },
      {
        id: "ds_b15",
        question: "What are categorical variables and how do you encode them?",
        answer: "Categorical variables represent qualitative descriptions. They can be nominal (no order, e.g., colors) or ordinal (ordered, e.g., ratings). Encoding methods:\n- **One-Hot Encoding**: Creates dummy binary columns for nominal variables.\n- **Label Encoding**: Assigns integers to ordinal levels based on ranking."
      },
      {
        id: "ds_b16",
        question: "What is linear regression and what are its key assumptions?",
        answer: "Linear regression models the linear relationship between a dependent variable and one or more independent variables. Assumptions:\n1. Linearity\n2. Independence of residuals\n3. Homoscedasticity (constant variance of errors)\n4. Normality of error terms"
      },
      {
        id: "ds_b17",
        question: "Explain the difference between list and numpy array in Pandas/Python.",
        answer: "Numpy arrays are homogeneous (all elements of the same type), memory-efficient, and support vectorized operations (mathematical calculations on the whole array without loop overhead). Python lists are heterogeneous and do not support fast vector math."
      },
      {
        id: "ds_b18",
        question: "What is SQL and why is it important for Data Science?",
        answer: "Structured Query Language (SQL) is the standard language for managing and querying data held in relational databases. Data Scientists spend a significant amount of time retrieving, filtering, and joining data stored in relational databases using SQL."
      },
      {
        id: "ds_b19",
        question: "What is exploratory data analysis (EDA)?",
        answer: "EDA is the crucial first step in data analysis, where datasets are explored visually and statistically to summarize their main characteristics, detect patterns, identify anomalies, and formulate hypotheses for predictive modeling."
      },
      {
        id: "ds_b20",
        question: "Explain precision and recall using an example.",
        answer: "Imagine a model predicting fraud:\n- **Precision** is: of all transactions flagged as fraud, how many were *actually* fraud? High precision means low false alarm rate.\n- **Recall** is: of all actual fraud transactions, how many did the model *catch*? High recall means low escape rate of fraudulent transactions."
      }
    ],
    intermediate: [
      {
        id: "ds_i1",
        question: "How do Logistic Regression and Linear Regression differ?",
        answer: "- **Linear Regression** predicts continuous values and maps inputs to a straight line: $Y = mx + c$. It is used for regression tasks.\n- **Logistic Regression** predicts probabilities (between 0 and 1) mapping inputs to a Sigmoid curve: $P = 1 / (1 + e^{-y})$. It is used for binary classification tasks."
      },
      {
        id: "ds_i2",
        question: "Explain Random Forest and how it works.",
        answer: "Random Forest is an ensemble learning method that builds multiple decision trees during training. For classification, it outputs the majority vote of the trees; for regression, the average prediction. It uses **bagging** (bootstrap aggregating) to train individual trees on random subsets of data and restricts features considered at each split, reducing variance and overfitting."
      },
      {
        id: "ds_i3",
        question: "What is Principal Component Analysis (PCA) and how does it work?",
        answer: "PCA is an unsupervised dimensionality reduction technique. It projects high-dimensional data onto a lower-dimensional space while retaining as much variance as possible. It works by finding orthogonal directions (principal components) along which the variance of the data is maximized, which corresponds to finding the eigenvectors of the covariance matrix."
      },
      {
        id: "ds_i4",
        question: "Explain A/B Testing and how you evaluate its significance.",
        answer: "A/B testing is a statistical methodology comparing two versions (A and B) of a variable (like web pages) to determine which performs better. You randomly assign users to each group, measure conversions, and evaluate the statistical significance using a hypothesis test (like a t-test or Z-test) to calculate the p-value. If p-value < alpha (usually 0.05), you reject the null hypothesis."
      },
      {
        id: "ds_i5",
        question: "What is Gradient Descent and what are its variants?",
        answer: "Gradient Descent is an optimization algorithm used to minimize a model's cost function by iteratively moving in the direction of the steepest descent (negative gradient).\nVariants:\n- **Batch Gradient Descent**: Computes gradient using the entire dataset (slow).\n- **Stochastic Gradient Descent (SGD)**: Computes gradient for a single random sample (fast, but noisy).\n- **Mini-Batch Gradient Descent**: Computes gradient on small batches (balances speed and stability)."
      },
      {
        id: "ds_i6",
        question: "Explain L1 (Lasso) and L2 (Ridge) regularization.",
        answer: "Both add a penalty term to the loss function to prevent overfitting:\n- **L1 Regularization (Lasso)** adds the absolute values of the coefficients as penalty. It can shrink coefficients to exactly zero, performing automatic feature selection.\n- **L2 Regularization (Ridge)** adds the squared magnitude of coefficients as penalty. It shrinks coefficients close to zero but keeps all features."
      },
      {
        id: "ds_i7",
        question: "What is the difference between K-Means and KNN?",
        answer: "- **K-Means** is an *unsupervised* clustering algorithm that groups unlabeled data points into K clusters based on centroid distances.\n- **K-Nearest Neighbors (KNN)** is a *supervised* classification/regression algorithm that classifies a new data point based on the majority class of its K closest labeled neighbors."
      },
      {
        id: "ds_i8",
        question: "What is an ROC curve and what does AUC represent?",
        answer: "- **ROC Curve** (Receiver Operating Characteristic) plots the True Positive Rate (Sensitivity) vs False Positive Rate (1-Specificity) at various classification thresholds.\n- **AUC** (Area Under the Curve) measures the overall ability of a model to distinguish between classes. An AUC of 1.0 represents a perfect classifier, and 0.5 represents random guessing."
      },
      {
        id: "ds_i9",
        question: "How do you handle class imbalance in a dataset?",
        answer: "Class imbalance can be handled via:\n1. **Resampling**: Undersampling the majority class or oversampling the minority class (e.g., using SMOTE).\n2. **Algorithmic Adjustments**: Using class weights in loss functions.\n3. **Evaluation Metrics**: Using F1-Score, Precision-Recall AUC instead of Accuracy.\n4. **Ensemble Methods**: Balanced Random Forest."
      },
      {
        id: "ds_i10",
        question: "What is multicollinearity and how do you diagnose it?",
        answer: "Multicollinearity occurs when independent variables in a regression model are highly correlated, making coefficient estimates unstable. It is diagnosed using the **Variance Inflation Factor (VIF)**. A VIF value > 5 or 10 indicates high multicollinearity, which can be resolved by removing highly correlated features or using PCA."
      },
      {
        id: "ds_i11",
        question: "Explain the difference between Type I and Type II errors.",
        answer: "- **Type I error (False Positive)**: Rejecting the null hypothesis when it is actually true (e.g., diagnosing a healthy person with a disease).\n- **Type II error (False Negative)**: Failing to reject the null hypothesis when it is actually false (e.g., failing to diagnose a sick person)."
      },
      {
        id: "ds_i12",
        question: "What is feature engineering? Provide some examples.",
        answer: "Feature engineering is the process of using domain knowledge to create new features or transform existing ones to improve machine learning performance. Examples: extracting hour from timestamps, binning continuous variables, log-transforming skewed features, combining variables (e.g. income/family size)."
      },
      {
        id: "ds_i13",
        question: "What is a Support Vector Machine (SVM) and the kernel trick?",
        answer: "SVM finds a hyperplane in an N-dimensional space that maximizes the margin between classes. The **kernel trick** allows SVM to classify non-linearly separable data by mapping low-dimensional inputs to a higher-dimensional space where they become linearly separable, without explicitly computing the coordinates in that space."
      },
      {
        id: "ds_i14",
        question: "What are SQL window functions and how do they differ from GROUP BY?",
        answer: "Window functions (e.g., `ROW_NUMBER()`, `RANK()`, `SUM() OVER()`) perform calculations across a set of rows related to the current row. Unlike `GROUP BY`, which collapses rows into a single summary row, window functions perform calculations while keeping all original rows in the output."
      },
      {
        id: "ds_i15",
        question: "Explain K-Fold Cross-Validation.",
        answer: "In K-Fold CV, the dataset is randomly partitioned into K equal-sized subsets (folds). The model is trained K times: each time using K-1 folds for training and the remaining 1 fold as a validation set. The final metric is the average of the validation scores across all K trials, providing a generalized performance metric."
      },
      {
        id: "ds_i16",
        question: "What are hyperparameter tuning techniques?",
        answer: "Hyperparameters are settings configured before training. Tuning techniques include:\n- **Grid Search**: Exhaustive search over a manually specified subset of parameters (slow, thorough).\n- **Random Search**: Randomly samples hyperparameter combinations from distributions (faster, often as good).\n- **Bayesian Optimization**: Uses probability to model the objective function and target optimal settings sequentially."
      },
      {
        id: "ds_i17",
        question: "Explain ensemble learning: Bagging vs Boosting.",
        answer: "- **Bagging (Bootstrap Aggregating)**: Trains multiple models in parallel on random subsets of the data (with replacement) and averages predictions (e.g., Random Forest). Reducer of variance.\n- **Boosting**: Trains models sequentially where each new model focuses on correcting the errors made by previous models (e.g., Gradient Boosting, AdaBoost). Reducer of bias."
      },
      {
        id: "ds_i18",
        question: "What is TF-IDF in Natural Language Processing (NLP)?",
        answer: "TF-IDF (Term Frequency-Inverse Document Frequency) is a numerical statistic reflecting how important a word is to a document in a collection. It multiplies Term Frequency (how often a word appears in a doc) by Inverse Document Frequency (penalizes words appearing in almost all documents like 'the', 'is'), highlighting descriptive words."
      },
      {
        id: "ds_i19",
        question: "What is homoscedasticity and why is it important?",
        answer: "Homoscedasticity means the residuals (errors) of a regression model have a constant variance across all levels of the independent variables. If the variance is non-constant (heteroscedasticity), standard errors of coefficients become biased, invalidating confidence intervals and p-values."
      },
      {
        id: "ds_i20",
        question: "What is stationary data in Time Series and why is it required?",
        answer: "A stationary time series is one whose statistical properties (mean, variance, autocorrelation) do not change over time. Most forecasting models (like ARIMA) require stationarity because it ensures that the patterns observed in historical data will remain consistent in future predictions."
      }
    ],
    advanced: [
      {
        id: "ds_a1",
        question: "Explain XGBoost internals and what makes it perform so well.",
        answer: "XGBoost (Extreme Gradient Boosting) is an optimized implementation of gradient boosted trees. Internally, it:\n1. Adds L1 and L2 regularization to the objective function to penalize model complexity.\n2. Uses a second-order Taylor expansion of the loss function, utilizing both gradients and Hessians for optimization.\n3. Applies a weighted quantile sketch to find optimal splits in sorted data.\n4. Implements column block structures for parallel CPU threads, out-of-core computing, and cache-aware access."
      },
      {
        id: "ds_a2",
        question: "How does backpropagation work in neural networks?",
        answer: "Backpropagation is the algorithm used to compute the gradients of the loss function with respect to the network's weights. It operates in two phases: \n1. **Forward pass**: Inputs propagate forward to compute predictions and loss.\n2. **Backward pass**: Applying the **Chain Rule of calculus**, the error gradient is propagated backward from the output layer to the input layer, updating weights using an optimization algorithm (e.g., Gradient Descent)."
      },
      {
        id: "ds_a3",
        question: "What is SHAP (SHapley Additive exPlanations) and how does it explain models?",
        answer: "SHAP is a game-theory-based framework to explain predictions of machine learning models. It calculates Shapley values, which represent the average marginal contribution of a feature across all possible combinations of features. SHAP guarantees local accuracy, missingness, and consistency, making it a gold standard for model explainability."
      },
      {
        id: "ds_a4",
        question: "Explain the vanishing and exploding gradient problems and how to mitigate them.",
        answer: "In deep networks, gradients are multiplied recursively through layers. If gradients are < 1, they shrink exponentially (vanishing), stopping training in early layers. If > 1, they grow exponentially (exploding), destabilizing training.\nMitigations:\n- **Vanishing**: Use ReLU/Leaky ReLU activations, residual connections (ResNets), Batch Normalization.\n- **Exploding**: Gradient clipping, weight initialization techniques (He, Xavier), LSTM/GRU for sequence models."
      },
      {
        id: "ds_a5",
        question: "Explain the difference between Collaborative Filtering and Content-Based Filtering.",
        answer: "- **Collaborative Filtering**: Recommends items based on user similarities (e.g. 'users who liked A also liked B'). Uses matrix factorization (SVD) or user/item-based similarities without needing item metadata.\n- **Content-Based Filtering**: Recommends items similar to those a user liked in the past based on item attributes (e.g. genre, director, keywords) using text embeddings or classification."
      },
      {
        id: "ds_a6",
        question: "What is A/B testing selection bias, and how do you handle sample ratio mismatch (SRM)?",
        answer: "Selection bias occurs when test groups are not truly randomized. SRM is a statistical check (using Chi-Square Goodness-of-Fit) to verify if the actual allocation ratio matches the expected ratio (e.g., 50/50). A significant SRM (p < 0.001) indicates execution errors like bucketing bugs or tracking issues, which invalidate the test results."
      },
      {
        id: "ds_a7",
        question: "How do transformer architectures utilize attention mechanisms?",
        answer: "Transformers discard recurrence and rely entirely on **Self-Attention**. For each token, the model computes Query (Q), Key (K), and Value (V) vectors. The attention score is calculated as $\\text{Softmax}(QK^T / \\sqrt{d_k})V$. This allows the model to compute context representations by weighting the importance of all other tokens in the sequence simultaneously, enabling parallel training."
      },
      {
        id: "ds_a8",
        question: "What is model drift and how do you detect and handle it?",
        answer: "Model drift occurs when a model's performance degrades in production over time. It can be:\n- **Concept Drift**: The statistical relationship between features and target changes.\n- **Data Drift**: The distribution of input features changes.\nDetection: Monitor performance metrics, or run Kolmogorov-Smirnov (KS) tests or PSI (Population Stability Index) checks. Remediation: Retrain model on recent data, adjust features, or rebuild the pipeline."
      },
      {
        id: "ds_a9",
        question: "Explain vector embeddings and how vector databases retrieve them.",
        answer: "Vector embeddings are low-dimensional, dense representations of unstructured data (text, images) that capture semantic meaning. Vector databases (like Pinecone) index these vectors using algorithms like HNSW (Hierarchical Navigable Small World) or IVF (Inverted File Index) and retrieve nearest neighbors using distance metrics like Cosine Similarity or Euclidean Distance at scale."
      },
      {
        id: "ds_a10",
        question: "What is the Kuhn-Tucker (KKT) conditions in optimization?",
        answer: "KKT conditions are first-derivative tests for a solution in non-linear programming to be optimal, subject to inequality constraints. They generalize Lagrange multipliers which only support equality constraints. Support Vector Machines utilize KKT conditions to solve dual optimization problems analytically."
      },
      {
        id: "ds_a11",
        question: "Explain the bias-variance decomposition mathematically.",
        answer: "Total expected prediction error can be decomposed as:\n$\\text{Expected Error} = \\text{Bias}^2 + \\text{Variance} + \\text{Irreducible Error}$\nWhere:\n- $\\text{Bias}^2 = (E[\\hat{f}(x)] - f(x))^2$ measures how far predictions are from ground truth.\n- $\\text{Variance} = E[(\\hat{f}(x) - E[\\hat{f}(x)])^2]$ measures variance of predictions.\n- $\\text{Irreducible Error} = \\sigma^2$ is noise in the true relationship."
      },
      {
        id: "ds_a12",
        question: "What are Markov Chains and how are they used in MCMC methods?",
        answer: "A Markov Chain is a stochastic model describing a sequence of possible events where the probability of each event depends only on the state attained in the previous event. Markov Chain Monte Carlo (MCMC) algorithms use these chains to sample from complex, high-dimensional probability distributions (like Bayesian posteriors) by constructing a chain whose stationary distribution matches the target distribution."
      },
      {
        id: "ds_a13",
        question: "Explain PCA's connection with Eigenvalues and Singular Value Decomposition (SVD).",
        answer: "PCA finds principal components by calculating the eigenvectors of the data covariance matrix. SVD generalizes this by factoring the raw data matrix $X$ directly into $U \\Sigma V^T$. The columns of $V$ are the eigenvectors of $X^T X$ (principal components), and singular values in $\\Sigma$ are proportional to the square roots of the eigenvalues, allowing PCA computations without forming the covariance matrix."
      },
      {
        id: "ds_a14",
        question: "Explain the EM (Expectation-Maximization) algorithm and its application in GMM.",
        answer: "EM is an iterative optimization method for finding maximum likelihood estimates of parameters in models with latent variables. In Gaussian Mixture Models (GMM):\n- **E-step**: Calculates the probability (responsibilities) that each data point belongs to each cluster.\n- **M-step**: Updates the mean, covariance, and mixing weights of each cluster to maximize the likelihood of the data."
      },
      {
        id: "ds_a15",
        question: "What is the difference between PySpark's DataFrame and Pandas DataFrame?",
        answer: "- **Pandas** operates on a single machine in-memory, processing operations eagerly.\n- **PySpark** runs on top of Apache Spark, distributing data across a cluster. It uses lazy evaluation, compiling transformations into a Directed Acyclic Graph (DAG) optimized by the Catalyst Optimizer, executing only when an action (e.g., `.show()`, `.collect()`) is called."
      },
      {
        id: "ds_a16",
        question: "Explain Kalman filters and their typical use cases.",
        answer: "A Kalman filter is an algorithm that estimates the true state of a dynamic system from a series of noisy measurements over time. It operates recursively in two steps: a predict step (estimates state and uncertainty) and an update step (incorporates noisy observation with a weighted average). Commonly used in navigation, object tracking, and time series smoothing."
      },
      {
        id: "ds_a17",
        question: "How do you calculate sample size for an A/B test?",
        answer: "Sample size calculation requires:\n1. **Significance Level (alpha)**: Usually 5% (probability of Type I error).\n2. **Statistical Power (1-beta)**: Usually 80% (probability of detecting an effect).\n3. **Minimum Detectable Effect (MDE)**: Smallest change you want to detect.\n4. **Baseline Conversion Rate**.\nCalculated using power analysis formula: $N = \\frac{16 \\sigma^2}{\\delta^2}$ (approximate formula for 80% power at 5% alpha, where $\\delta$ is MDE)."
      },
      {
        id: "ds_a18",
        question: "What is the curse of dimensionality and how does it affect distance metrics?",
        answer: "As dimensions increase, the volume of space grows exponentially, making data points extremely sparse. Consequently, the distance between any two points converges to a constant value, causing distance-based metrics (like Euclidean distance in KNN or K-Means) to lose discriminative power."
      },
      {
        id: "ds_a19",
        question: "Explain the difference between L1 and L2 regularization from a geometric perspective.",
        answer: "L1 regularization constraints coefficients within a diamond-shaped region ($|w_1| + |w_2| \\le C$). The contours of the loss function are likely to hit the corners of the diamond, setting coefficients to exactly 0. L2 constraints coefficients within a circular region ($w_1^2 + w_2^2 \\le C$). Loss contours touch the circle Tangentially, shrinking values but rarely reaching exactly 0."
      },
      {
        id: "ds_a20",
        question: "What is causal inference and how does it differ from correlation?",
        answer: "Causal inference attempts to establish a cause-and-effect relationship, answering what happens to Y if we manipulate X. Correlation only measures association. Causal inference utilizes techniques like Randomized Controlled Trials (RCTs), Propensity Score Matching, Difference-in-Differences, and Instrumental Variables to control for confounding variables and isolate true causal effects."
      }
    ]
  },
  mern: {
    beginner: [
      {
        id: "me_b1",
        question: "What does the MERN stack stand for?",
        answer: "MERN stands for:\n- **M**ongoDB: Document-based NoSQL database.\n- **E**xpress.js: Minimalist web application framework for Node.js.\n- **R**eact.js: Frontend JavaScript library for building user interfaces.\n- **N**ode.js: JavaScript runtime environment executing code outside the browser."
      },
      {
        id: "me_b2",
        question: "What is the difference between state and props in React?",
        answer: "- **State** is a local, mutable data storage managed internally within a component. Changes to state trigger component re-rendering.\n- **Props** (short for properties) are read-only, immutable configuration parameters passed down from a parent component to a child component."
      },
      {
        id: "me_b3",
        question: "What is Express middleware?",
        answer: "Middleware functions are functions that have access to the Request object (`req`), Response object (`res`), and the `next` middleware function in the application’s request-response cycle. They can execute code, modify request/response objects, end the cycle, or call the next middleware using `next()`."
      },
      {
        id: "me_b4",
        question: "How does MongoDB store data?",
        answer: "MongoDB is a document-oriented NoSQL database. It stores data records as BSON (Binary JSON) documents. Documents are grouped into collections, which are equivalent to tables in relational databases."
      },
      {
        id: "me_b5",
        question: "What is Node.js and why is it single-threaded?",
        answer: "Node.js is an open-source, cross-platform JavaScript runtime. It is single-threaded to avoid memory overhead and context switching associated with multi-threaded servers. It handles concurrent connections efficiently using an **Event Loop** and non-blocking asynchronous I/O operations."
      },
      {
        id: "me_b6",
        question: "What is JSX in React?",
        answer: "JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows writing HTML-like structures directly inside JavaScript code, which Vite or Babel compiles into standard React elements (`React.createElement` calls)."
      },
      {
        id: "me_b7",
        question: "Explain the purpose of React's 'useEffect' hook.",
        answer: "`useEffect` allows performing side effects in functional components. Side effects include data fetching, manual DOM manipulations, subscriptions, and timers. It runs after rendering, and its execution can be controlled using a dependency array."
      },
      {
        id: "me_b8",
        question: "What is Mongoose and how does it relate to MongoDB?",
        answer: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model application data, handles validation, and manages relationships between documents, acting as an abstraction layer over MongoDB driver."
      },
      {
        id: "me_b9",
        question: "What is the Virtual DOM in React?",
        answer: "The Virtual DOM is a lightweight, in-memory representation of the actual DOM. When a component's state changes, React updates the Virtual DOM, performs a 'diffing' process to find changes, and updates only the modified elements in the real DOM (reconciliation), ensuring high performance."
      },
      {
        id: "me_b10",
        question: "What is the purpose of 'package.json' in a Node.js project?",
        answer: "`package.json` is the manifest file of a Node.js project. It contains metadata about the project (name, version), scripts to run tasks (dev, build), and lists the project's dependencies and devDependencies."
      },
      {
        id: "me_b11",
        question: "How do you handle CORS issues in Express?",
        answer: "CORS (Cross-Origin Resource Sharing) issues are resolved by using the `cors` middleware in Express. You install it via npm and use it as `app.use(cors())` to allow requests from other origins, or configure it with specific allowed origins and headers."
      },
      {
        id: "me_b12",
        question: "What is the difference between 'npm install' and 'npm install --save-dev'?",
        answer: "- `npm install` (or `-S`) installs dependencies needed for the application to *run* in production (listed under `dependencies`).\n- `npm install --save-dev` (or `-D`) installs libraries only needed during *development* and testing, like compilers or linters (listed under `devDependencies`)."
      },
      {
        id: "me_b13",
        question: "What is React Router?",
        answer: "React Router is a standard library for routing in React. It enables navigation among views of various components in a single-page application, updating the browser URL and keeping the UI in sync without page reloads."
      },
      {
        id: "me_b14",
        question: "How do you create a basic Express server?",
        answer: "```javascript\nimport express from 'express';\nconst app = express();\napp.get('/', (req, res) => res.send('Hello World'));\napp.listen(3000, () => print('Server running on 3000'));\n```"
      },
      {
        id: "me_b15",
        question: "What is the difference between MongoDB and SQL databases?",
        answer: "- **MongoDB**: NoSQL, document-based, schema-less (dynamic schemas), stores BSON documents, scales horizontally using sharding.\n- **SQL Databases**: Relational, structured tables with fixed schemas, uses SQL, scales vertically, supports ACID transactions natively out-of-the-box."
      },
      {
        id: "me_b16",
        question: "What are React Hooks?",
        answer: "React Hooks are built-in functions (introduced in React 16.8) that allow functional components to use state, lifecycle methods, and other React features without writing class components. Common hooks: `useState`, `useEffect`, `useContext`."
      },
      {
        id: "me_b17",
        question: "Explain the difference between GET and POST HTTP requests.",
        answer: "- **GET**: Retrieves data from a server. Parameters are sent in the URL query string. It should be idempotent (not modify server state).\n- **POST**: Submits data to the server to create a resource. Parameters are sent in the request body. It is non-idempotent."
      },
      {
        id: "me_b18",
        question: "What is 'dotenv' and why is it used?",
        answer: "`dotenv` is a module that loads environment variables from a `.env` file into `process.env`. It keeps sensitive configurations like API keys, database credentials, and ports out of the source code repository."
      },
      {
        id: "me_b19",
        question: "What is the event handling pattern in React?",
        answer: "React handles events using camelCase naming convention (e.g., `onClick` instead of `onclick`). You pass a function reference as the handler rather than a string. Example: `<button onClick={handleClick}>Click</button>`."
      },
      {
        id: "me_b20",
        question: "How do you handle JSON request bodies in Express?",
        answer: "In modern Express, you use the built-in JSON parsing middleware: `app.use(express.json())`. This parses incoming JSON payloads and attaches them to `req.body`."
      }
    ],
    intermediate: [
      {
        id: "me_i1",
        question: "Explain JWT authentication in the MERN stack.",
        answer: "JWT (JSON Web Token) authentication works as follows:\n1. User logs in by sending credentials to the server.\n2. Server verifies credentials and signs a token with a secret key, returning it to the client.\n3. Client stores token (usually in LocalStorage or HttpOnly cookies) and sends it in the `Authorization: Bearer <token>` header for protected routes.\n4. Express middleware verifies the token signature and allows access if valid."
      },
      {
        id: "me_i2",
        question: "What is React's Context API and when should you use it?",
        answer: "Context API provides a way to pass data through the component tree without manually passing props down at every level (avoiding 'props drilling'). It should be used for global state like current user, UI themes, or language preferences."
      },
      {
        id: "me_i3",
        question: "Explain MongoDB aggregation pipelines.",
        answer: "An aggregation pipeline processes documents in stages, transforming them into aggregated results. It consists of multiple stages, such as:\n- `$match`: Filters documents (similar to WHERE).\n- `$group`: Groups documents by key to calculate metrics like sum or average.\n- `$project`: Reshapes fields.\n- `$lookup`: Performs left outer joins with other collections."
      },
      {
        id: "me_i4",
        question: "What is the difference between useMemo and useCallback hooks in React?",
        answer: "- `useMemo` memoizes the *result* of an expensive calculation, re-evaluating it only when dependencies change.\n- `useCallback` memoizes the *function instance* itself, preventing unnecessary recreation of callback functions on re-renders (crucial when passing callbacks to optimized child components)."
      },
      {
        id: "me_i5",
        question: "How does Mongoose population work and what are its performance impacts?",
        answer: "Mongoose `populate()` dynamically replaces specified paths (references) in a document with actual documents from another collection. Under the hood, Mongoose performs a separate query for each population path, meaning it is not a native database join. Over-population can lead to N+1 query problems and degrade API performance."
      },
      {
        id: "me_i6",
        question: "Explain custom middleware in Express.",
        answer: "Custom middleware are functions declared with `(req, res, next)`. For example, an authentication middleware:\n```javascript\nconst protect = (req, res, next) => {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ msg: 'No token' });\n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();\n  } catch (err) { res.status(401).json({ msg: 'Invalid' }); }\n};\n```"
      },
      {
        id: "me_i7",
        question: "What are custom React hooks and why would you create one?",
        answer: "A custom hook is a JavaScript function whose name starts with `use` and can call other hooks. They are used to extract and share stateful logic between components without code duplication. For example, a `useFetch` hook to handle API fetch state (data, loading, error)."
      },
      {
        id: "me_i8",
        question: "How does the Node.js event loop work?",
        answer: "The event loop executes asynchronous code by offloading I/O operations to the system kernel or thread pool (libuv). When async operations complete, their callbacks are placed in queues. The event loop continuously processes these queues in phases: Timers, Pending Callbacks, Idle/Prepare, Poll (I/O), Check (setImmediate), and Close Callbacks."
      },
      {
        id: "me_i9",
        question: "What are database indexes in MongoDB and why are they important?",
        answer: "Indexes are special data structures that store a small fraction of the collection's data in an easy-to-traverse form (B-Trees). They are important because they prevent MongoDB from doing full-collection scans (`COLLSCAN`), which significantly speeds up search queries."
      },
      {
        id: "me_i10",
        question: "What is Redux and how does it compare to Context API?",
        answer: "- **Redux**: A global state management library featuring a single source of truth (Store), unidirectional data flow (Actions -> Reducers -> Store), middleware support, and dev tools. Best for complex, high-frequency state updates.\n- **Context API**: Built-in React feature, easy to set up. However, state changes cause all consuming components to re-render, making it less efficient for complex or frequently changing state."
      },
      {
        id: "me_i11",
        question: "What is the difference between PUT and PATCH methods?",
        answer: "- **PUT**: Used to *replace* an entire resource. You send the full representation of the resource. If fields are omitted, they are deleted or set to defaults.\n- **PATCH**: Used to *update* parts of a resource. You only send the fields you want to modify."
      },
      {
        id: "me_i12",
        question: "How do you handle file uploads in a MERN stack?",
        answer: "File uploads are handled on the Express server using a middleware like `multer`. Multer parses `multipart/form-data` request bodies, extracts files, and stores them locally or uploads them to cloud storage (e.g., AWS S3), attaching file metadata to the `req.file` object."
      },
      {
        id: "me_i13",
        question: "What is the difference between absolute and relative path imports in React?",
        answer: "- **Relative**: Imports files using relative paths like `../../components/Button`. Hard to maintain if files move.\n- **Absolute**: Uses aliasing configured in Vite/webpack (e.g., `@/components/Button`), which maps directly to the `src` folder, making imports cleaner and relocatable."
      },
      {
        id: "me_i14",
        question: "Explain error handling middleware in Express.",
        answer: "Express error-handling middleware is defined with four arguments instead of three: `(err, req, res, next)`. When an error is thrown or passed using `next(error)`, Express bypasses normal route handlers and routes execution to this middleware, which can format and send a clean error response."
      },
      {
        id: "me_i15",
        question: "What are Mongoose validation schemas?",
        answer: "Mongoose schemas allow defining data rules (types, required fields, custom validators, regular expressions, enum constraints) on fields. Mongoose validates documents against these rules before saving them to MongoDB, throwing a ValidationError if violated."
      },
      {
        id: "me_i16",
        question: "How do you optimize React rendering performance?",
        answer: "Optimization techniques include:\n1. Splitting code using `React.lazy` and `Suspense`.\n2. Memoizing functional components using `React.memo`.\n3. Using `useMemo` and `useCallback` to prevent redundant calculations and function reinstantiations.\n4. Virtualizing large lists using libraries like `react-window`."
      },
      {
        id: "me_i17",
        question: "What is the difference between MongoDB Embed vs Reference documents?",
        answer: "- **Embed (Denormalization)**: Sub-documents are nested inside a parent document. Great for 1-to-1 or 1-to-few relationships. Fast read performance (single query).\n- **Reference (Normalization)**: Documents reference other documents by `ObjectId`. Better for 1-to-many or many-to-many relationships, avoiding the 16MB document size limit in MongoDB."
      },
      {
        id: "me_i18",
        question: "What are React portals?",
        answer: "Portals allow rendering child components into a DOM node that exists outside the DOM hierarchy of the parent component. This is useful for UI elements like modals, tooltips, and dropdowns that require bypassing parent CSS styles like `overflow: hidden` or absolute positioning."
      },
      {
        id: "me_i19",
        question: "How do you secure Express applications?",
        answer: "Express can be secured by:\n1. Using `helmet` middleware to set secure HTTP response headers.\n2. Implementing rate-limiting to prevent brute force/DDoS attacks.\n3. Sanitizing inputs to prevent SQL Injection and NoSQL Injection.\n4. Preventing Cross-Site Scripting (XSS) by filtering user input."
      },
      {
        id: "me_i20",
        question: "What are Controlled vs Uncontrolled components in React?",
        answer: "- **Controlled**: Component state controls form elements. Input values are bound to React state, and changes are handled via event callbacks (`onChange`).\n- **Uncontrolled**: Form data is handled by the DOM itself. Access values using React refs (`useRef`), which is useful for integrating non-React libraries or simple forms."
      }
    ],
    advanced: [
      {
        id: "me_a1",
        question: "Explain database transactions in MongoDB. When and how should you use them?",
        answer: "MongoDB supports multi-document ACID transactions within sessions. Transactions ensure that multiple write operations either succeed completely or roll back together. They should be used for operations requiring integrity across multiple collections (e.g., transfers, order processing). Example:\n```javascript\nconst session = await mongoose.startSession();\nsession.startTransaction();\ntry {\n  await Account.updateOne({ _id: A }, { $dec: balance }, { session });\n  await Account.updateOne({ _id: B }, { $inc: balance }, { session });\n  await session.commitTransaction();\n} catch (err) {\n  await session.abortTransaction();\n} finally { session.endSession(); }\n```"
      },
      {
        id: "me_a2",
        question: "What are React Server Components (RSC) and how do they differ from Client Components?",
        answer: "React Server Components are rendered exclusively on the server, producing a serialized JSON stream sent to the browser. They do not ship their component logic or dependency code to the client bundle, reducing download size.\n- **Server Components**: Run on the server, can access databases directly, do not support client-side interactive state (`useState`, `useEffect`) or browser APIs.\n- **Client Components**: Declared with `'use client'`. Hydrate in the browser and support state, effects, and client interactions."
      },
      {
        id: "me_a3",
        question: "Explain Node.js streams and when you would use them.",
        answer: "Streams are unix-like pipes that handle reading/writing data incrementally in chunks, rather than loading the entire file into memory (buffer). Types: Readable, Writable, Duplex, Transform. They are essential for memory-efficient handling of large datasets, like streaming videos, processing large CSV files, or writing loggers."
      },
      {
        id: "me_a4",
        question: "What is database replication vs sharding in MongoDB?",
        answer: "- **Replication (Replica Sets)**: Copies data across multiple servers (Primary and Secondaries) to ensure high availability, redundancy, and failover support.\n- **Sharding**: Distributes data across multiple machines horizontally based on a shard key. Used to handle datasets larger than the storage capacity of a single server."
      },
      {
        id: "me_a5",
        question: "How do you implement Real-Time functionality in MERN using WebSockets?",
        answer: "Real-time communication is established by creating a persistent bi-directional connection using WebSockets (typically via `socket.io`). You attach the WebSocket server to the Express HTTP instance, listen for event connections on Node, and emit events to specific client rooms. Clients establish connection via the socket client library to listen and emit events."
      },
      {
        id: "me_a6",
        question: "Explain Redis caching in Express and how to handle cache invalidation.",
        answer: "Redis is an in-memory key-value store. In Express, you write a middleware that checks if a request's cache key exists in Redis. If yes, it returns the cached JSON immediately. If not, it forwards to the database query, caches the result in Redis with a Time-To-Live (TTL), and returns it. Invalidation is handled by deleting/updating cache keys when write operations (`POST`, `PUT`, `DELETE`) occur."
      },
      {
        id: "me_a7",
        question: "What is Server-Side Rendering (SSR) vs static generation (SSG) in React?",
        answer: "- **SSR**: HTML is generated on the server for *every* request, allowing search engine crawlers to parse fully rendered pages while offering faster initial load times.\n- **SSG**: HTML is generated *once* at build time, producing static files that can be cached on CDNs, offering extremely fast page speeds but less dynamic capability."
      },
      {
        id: "me_a8",
        question: "Explain Node.js clustering and how it achieves horizontal scaling on a single machine.",
        answer: "Node.js runs on a single thread. The `cluster` module allows spawning a master process that forks worker processes (typically matching CPU cores). The master process acts as a load balancer, routing incoming TCP connections to worker processes using a round-robin scheduling algorithm, utilizing all CPU cores."
      },
      {
        id: "me_a9",
        question: "How do you detect and fix memory leaks in React and Node.js?",
        answer: "- **React**: Avoid leaks by cleaning up timers, API calls, and event listeners in `useEffect` cleanup functions. Detect leaks using Chrome DevTools Memory Panel.\n- **Node.js**: Avoid global variables, circular references, and unclosed streams. Profile leaks using `node --inspect`, capturing heap snapshots at different times using Chrome DevTools, and analyzing memory consumption growth."
      },
      {
        id: "me_a10",
        question: "Explain the security vulnerabilities OWASP Top 10 and how to prevent them in Node/Express.",
        answer: "Key mitigations in Node include:\n- **NoSQL Injection**: Avoid passing raw user objects to queries; use Mongoose schemas and query sanitizers.\n- **Broken Authentication**: Hash passwords using bcrypt (high salt rounds), enforce strong passwords, use secure HTTPOnly cookies.\n- **Cross-Site Scripting (XSS)**: Escape output data, use Helmet middleware to restrict CSP headers.\n- **Broken Object Level Authorization (BOLA)**: Always check if `req.user.id` matches the owner ID of the requested resource."
      },
      {
        id: "me_a11",
        question: "How does the React reconciliation algorithm (Fiber) work?",
        answer: "React Fiber is a rewrite of the core reconciliation algorithm. It changes reconciliation from synchronous recursive rendering to cooperative scheduling. Fiber breaks rendering work into incremental units (Fibers) and processes them in two phases: a Render phase (asynchronous, interruptible, builds virtual DOM) and a Commit phase (synchronous, updates actual DOM), preventing UI blocking."
      },
      {
        id: "me_a12",
        question: "Explain Mongoose middlewares (pre and post hooks) and their advanced uses.",
        answer: "Mongoose supports pre/post hooks for operations like `save`, `validate`, `find`, `remove`. A common advanced use is password hashing: a `pre('save')` hook intercepts the user document, checks if the password is modified, hashes it with bcrypt, and stores the hash before persisting the document."
      },
      {
        id: "me_a13",
        question: "How do you design a database schema for a multi-tenant MERN application?",
        answer: "Two main approaches:\n1. **Shared Database, Shared Collection (Logical Isolation)**: All tenants share collections. Documents include a `tenantId` field. Queries must enforce filter on `tenantId` via global middleware.\n2. **Shared Database, Separate Collections/Schemas (Physical Isolation)**: Tenants have separate databases or collections. Middleware determines connection URI at runtime based on request host or token headers."
      },
      {
        id: "me_a14",
        question: "What is GraphQL and how does it compare to REST in MERN stacks?",
        answer: "- **GraphQL**: Clients query exactly what fields they need using a single endpoint. Avoids over-fetching/under-fetching. Schema-first design.\n- **REST**: Clients call multiple resources across multiple endpoints. Simpler to cache (using standard HTTP caching), but requires coordination of payload formats, leading to multiple round-trips."
      },
      {
        id: "me_a15",
        question: "How do you handle background jobs and message queues in Node.js?",
        answer: "Background tasks are offloaded from the main HTTP thread to workers using queue libraries like `BullMQ` or `Kue` backed by Redis. Express routes publish jobs to the Redis queue, and dedicated worker processes consume jobs asynchronously, handling retries, delays, and monitoring."
      },
      {
        id: "me_a16",
        question: "Explain hydration in Next.js/React SSR.",
        answer: "Hydration is the process of attaching event listeners to the static HTML structure sent by the server. React compares the static HTML structure with the virtual DOM built on the client. If they match, React binds the event handlers to make the page interactive, without rebuilding the actual DOM nodes."
      },
      {
        id: "me_a17",
        question: "What is database indexing strategy? Compound and partial indexes in MongoDB.",
        answer: "- **Compound Index**: Indexes multiple fields (e.g. `{ lastName: 1, age: -1 }`). The field order matters (ESR rule: Equality, Sort, Range).\n- **Partial Index**: Indexes only documents matching a specific filter expression (e.g. only index documents with `rating: { $gt: 4 }`), saving memory and index maintenance costs."
      },
      {
        id: "me_a18",
        question: "Explain the difference between event-driven architecture and microservices in Node.js.",
        answer: "- **Microservices**: Breaking application into small, independent services communicating via HTTP/gRPC.\n- **Event-Driven Architecture**: Services communicate asynchronously by publishing events to a central broker (like Kafka or RabbitMQ) without waiting for responses. Reduces temporal coupling and increases system resilience."
      },
      {
        id: "me_a19",
        question: "What is custom webpack or Vite optimization for production React apps?",
        answer: "Optimizations include: code splitting via dynamic imports, asset compression (Gzip/Brotli), sourcemap disabling, vendor chunking (splitting node_modules into a separate bundle), tree-shaking unused exports, and minification using ESBuild or Terser."
      },
      {
        id: "me_a20",
        question: "Explain distributed transactions and the SAGA pattern.",
        answer: "In microservices, local transactions cannot span multiple databases. The SAGA pattern handles transactions via a sequence of local transactions: each service executes a local transaction and publishes an event. If a step fails, the saga coordinates compensatory transactions in reverse order to undo changes and restore consistency."
      }
    ]
  },
  frontend: {
    beginner: [
      {
        id: "fe_b1",
        question: "What is HTML Semantic markup and why is it important?",
        answer: "Semantic markup uses tags that describe their meaning (e.g., `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`) instead of generic division tags like `<div>` or `<span>`. It is important for:\n1. Accessibility (screen readers understand page structure).\n2. SEO (search engines can index content hierarchy).\n3. Code readability and maintainability."
      },
      {
        id: "fe_b2",
        question: "Explain the CSS Box Model.",
        answer: "The CSS Box Model is the foundation of layout design. Every element is represented as a rectangular box consisting of:\n1. **Content**: The text/images of the element.\n2. **Padding**: Transparent area surrounding content (inside border).\n3. **Border**: Edge surrounding padding.\n4. **Margin**: Space outside the border separating the element from neighbors.\nChanging `box-sizing: border-box` includes padding and borders in the element's total width/height."
      },
      {
        id: "fe_b3",
        question: "What is the difference between relative, absolute, fixed, and sticky positioning?",
        answer: "- **relative**: Positioned relative to its normal document flow position.\n- **absolute**: Positioned relative to its nearest positioned ancestor (non-static).\n- **fixed**: Positioned relative to the viewport (always stays in the same place even when scrolling).\n- **sticky**: Alternates between relative and fixed depending on scroll position."
      },
      {
        id: "fe_b4",
        question: "What is the difference between local storage, session storage, and cookies?",
        answer: "- **LocalStorage**: Stores key-value pairs persistently (survives tab/browser closures) with a limit of ~5-10MB. Accessible client-side only.\n- **SessionStorage**: Similar to LocalStorage, but cleared when the tab/window is closed.\n- **Cookies**: Small data strings (~4KB) sent back and forth between client and server on every HTTP request. Used for authentication."
      },
      {
        id: "fe_b5",
        question: "What is JavaScript Event Delegation?",
        answer: "Event delegation is a design pattern where you attach a single event listener to a parent element rather than attaching individual listeners to each child. It utilizes **event bubbling** (events bubble up from target through ancestors), allowing dynamic additions of child nodes without needing to attach new listeners."
      },
      {
        id: "fe_b6",
        question: "Explain the difference between let, const, and var.",
        answer: "- `var`: Function-scoped, hoisted (accessible before initialization, initialized to undefined), can be redeclared and reassigned.\n- `let`: Block-scoped, not hoisted (temporal dead zone), cannot be redeclared but can be reassigned.\n- `const`: Block-scoped, not hoisted, cannot be redeclared or reassigned (immutable reference, but objects can still be modified)."
      },
      {
        id: "fe_b7",
        question: "What is a responsive design and how do you achieve it?",
        answer: "Responsive design makes web pages render well on all devices and screen sizes. It is achieved using:\n- CSS Media Queries\n- Fluid layouts (percentages, auto margins)\n- Flexible layouts: Flexbox and Grid\n- Relative units (rem, em, vw, vh) instead of absolute pixels\n- Responsive images (`srcset` or `object-fit`)"
      },
      {
        id: "fe_b8",
        question: "What are CSS pseudo-classes and pseudo-elements?",
        answer: "- **Pseudo-class**: Selects elements in a specific state (e.g., `:hover`, `:focus`, `:active`, `:nth-child()`).\n- **Pseudo-element**: Styles specific parts of an element (e.g., `::before` or `::after` to insert content, `::first-letter`)."
      },
      {
        id: "fe_b9",
        question: "What is the difference between display: none and visibility: hidden?",
        answer: "- `display: none` removes the element from the document layout flow entirely. It takes up no space.\n- `visibility: hidden` hides the element, but it still occupies its original space in the document layout."
      },
      {
        id: "fe_b10",
        question: "Explain CSS Flexbox layout.",
        answer: "Flexbox (Flexible Box Layout) is a 1-dimensional layout model for arranging items in rows or columns. It dynamically distributes space and aligns items inside a container. Key properties: `display: flex`, `flex-direction`, `justify-content` (main axis alignment), and `align-items` (cross axis alignment)."
      },
      {
        id: "fe_b11",
        question: "What is a Promise in JavaScript?",
        answer: "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It has three states:\n1. **Pending**: Initial state, neither fulfilled nor rejected.\n2. **Fulfilled**: Operation completed successfully.\n3. **Rejected**: Operation failed."
      },
      {
        id: "fe_b12",
        question: "Explain CSS Grid layout.",
        answer: "CSS Grid is a 2-dimensional layout system that allows alignment of elements in rows and columns simultaneously. Key properties: `display: grid`, `grid-template-columns`, `grid-template-rows`, `gap`, and `grid-area`."
      },
      {
        id: "fe_b13",
        question: "What is the difference between client-side rendering (CSR) and server-side rendering (SSR)?",
        answer: "- **CSR**: The browser downloads a minimal HTML shell and a large JS bundle, which executes and builds the DOM dynamically. Slow initial load, fast transitions.\n- **SSR**: The server generates the full HTML for a page on each request and sends it to the browser. Fast initial paint, good for SEO."
      },
      {
        id: "fe_b14",
        question: "How do you fetch data from an API in JavaScript?",
        answer: "Data is typically fetched using the `fetch()` API, which returns a promise, or using third-party libraries like Axios. Example:\n```javascript\nfetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => print(data));\n```"
      },
      {
        id: "fe_b15",
        question: "Explain the difference between == and === in JavaScript.",
        answer: "- `==` compares value equality after performing type coercion (e.g., `'5' == 5` is true).\n- `===` performs strict comparison, checking both value equality and type equality without coercion (e.g., `'5' === 5` is false)."
      },
      {
        id: "fe_b16",
        question: "What is web accessibility (a11y) and how do you support it?",
        answer: "Web accessibility ensures websites can be used by everyone, including people with disabilities. Support includes:\n- Using semantic HTML tags\n- Providing image alt text\n- Enforcing high color contrast\n- Designing key-accessible navigations\n- Using ARIA attributes for dynamic components"
      },
      {
        id: "fe_b17",
        question: "What is the viewport meta tag and why is it needed?",
        answer: "The viewport meta tag `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` instructs mobile browsers to set the width of the page to match the screen width of the device, preventing browsers from rendering mobile pages in a zoomed-out desktop layout."
      },
      {
        id: "fe_b18",
        question: "What is ES6? Name three key features.",
        answer: "ES6 (ECMAScript 2015) is a major update to the JavaScript standard. Three key features are:\n1. Arrow functions (`() => {}`).\n2. Template literals (string interpolation with backticks).\n3. Destructuring assignments (arrays and objects)."
      },
      {
        id: "fe_b19",
        question: "What is DOM manipulation and how do you do it?",
        answer: "DOM manipulation is updating the page HTML structure, text, and styles dynamically using JS APIs. Common methods: `document.getElementById()`, `querySelector()`, `createElement()`, `appendChild()`, and updating `element.innerHTML`."
      },
      {
        id: "fe_b20",
        question: "What are CSS media queries?",
        answer: "Media queries are conditional CSS rules that apply specific styles when criteria match viewport conditions. Example:\n```css\n@media (max-width: 768px) {\n  .sidebar { display: none; }\n}\n```"
      }
    ],
    intermediate: [
      {
        id: "fe_i1",
        question: "What is a closure in JavaScript?",
        answer: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In other words, a closure gives an inner function access to the outer function’s scope even after the outer function has finished executing."
      },
      {
        id: "fe_i2",
        question: "Explain prototypal inheritance in JavaScript.",
        answer: "In JavaScript, objects have a link to a prototype object (accessible via `__proto__` or `Object.getPrototypeOf`). When trying to access an attribute on an object, JavaScript searches the object itself first; if not found, it traverses up the prototype chain until it finds the property or reaches `null`. This is how objects inherit methods."
      },
      {
        id: "fe_i3",
        question: "What is the difference between debounce and throttle?",
        answer: "- **Debounce**: Delays executing a function until a certain amount of idle time has passed since the last call. (e.g., autocomplete search query input).\n- **Throttle**: Enforces a maximum number of times a function can be called over a given time interval (e.g., scroll handler execution limit)."
      },
      {
        id: "fe_i4",
        question: "Explain the event loop in client-side JavaScript.",
        answer: "Client-side JavaScript is single-threaded. It processes task execution sequentially. The event loop coordinates this execution:\n1. Executes code in the **Call Stack**.\n2. When call stack is empty, it processes **Microtasks** (Promise callbacks, MutationObserver).\n3. When microtasks are clear, it processes **Macrotasks** (setTimeout, event callbacks, I/O).\n4. Renders layout updates to the viewport."
      },
      {
        id: "fe_i5",
        question: "What is the Critical Rendering Path (CRP)?",
        answer: "CRP is the sequence of steps the browser takes to convert HTML, CSS, and JS into pixels on the screen:\n1. Build DOM (Document Object Model) from HTML.\n2. Build CSSOM (CSS Object Model) from CSS.\n3. Combine DOM and CSSOM to build Render Tree.\n4. Layout (calculate positions and dimensions of nodes).\n5. Paint (draw elements onto the screen)."
      },
      {
        id: "fe_i6",
        question: "How do async and defer attributes affect script loading?",
        answer: "By default, scripts block HTML parsing while downloading and executing.\n- `async`: Downloads script in parallel and executes it *immediately* when download completes, blocking HTML parsing mid-way.\n- `defer`: Downloads script in parallel and executes it *only after* HTML parsing is fully complete. Maintains execution order."
      },
      {
        id: "fe_i7",
        question: "What are CSS Preprocessors and what are their benefits?",
        answer: "CSS Preprocessors (like SASS/SCSS) extend CSS capability with scripting features. Benefits include: variables (though CSS variables exist now), nesting rules, mixins (reusable rule sets), functions, imports (modular files), and mathematical calculations, compileable to standard CSS."
      },
      {
        id: "fe_i8",
        question: "Explain CORS (Cross-Origin Resource Sharing).",
        answer: "CORS is a security mechanism enforced by browsers. It prevents a web page from making AJAX requests to a different domain than the one that served it, unless the receiving server responds with headers like `Access-Control-Allow-Origin` authorizing access."
      },
      {
        id: "fe_i9",
        question: "What is state management and why is it needed in SPAs?",
        answer: "State management is the practice of storing and updating the data representing the application UI. It is needed in Single Page Applications (SPAs) to coordinate sharing state across multiple non-nested components, manage complex user workflows, and persist state across page transitions."
      },
      {
        id: "fe_i10",
        question: "What is the difference between Virtual DOM and Shadow DOM?",
        answer: "- **Virtual DOM**: An in-memory cache used by libraries like React to optimize DOM updates by diffing changes before updating the real DOM.\n- **Shadow DOM**: A browser-native technology that allows isolating DOM structure, styling, and behavior (encapsulation), commonly used in Web Components."
      },
      {
        id: "fe_i11",
        question: "How do you optimize website performance and image assets?",
        answer: "Optimizations include:\n- Lazy loading images (`loading=\"lazy\"`).\n- Converting images to modern formats like WebP or AVIF.\n- Using responsive images with `srcset`.\n- Minifying and bundling CSS/JS.\n- Implementing caching headers.\n- Utilizing CDNs to distribute assets."
      },
      {
        id: "fe_i12",
        question: "What is the 'this' keyword in JavaScript and how is it determined?",
        answer: "`this` refers to the context in which a function is executed. It is determined by:\n1. **Default binding**: global object (window) or `undefined` in strict mode.\n2. **Implicit binding**: the object calling the method (e.g. `obj.func()`).\n3. **Explicit binding**: using `.call()`, `.apply()`, or `.bind()`.\n4. **New binding**: the newly created instance of a class/constructor.\n5. **Arrow functions**: lexical scope (inherits `this` from outer context)."
      },
      {
        id: "fe_i13",
        question: "Explain the Intersection Observer API.",
        answer: "Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or the top-level viewport. Use cases include lazy loading images, implementing infinite scroll, or triggering animations when elements become visible."
      },
      {
        id: "fe_i14",
        question: "What is Web Accessibility compliance (WCAG)?",
        answer: "Web Content Accessibility Guidelines (WCAG) define technical standards for making web content accessible. It focuses on four principles (POUR):\n- **P**erceivable: Content must be visible to all.\n- **O**perable: Interface must be keyboard navigable.\n- **U**nderstandable: Instructions must be clear.\n- **R**obust: Compatible with screen readers."
      },
      {
        id: "fe_i15",
        question: "Explain the difference between SVG and Canvas.",
        answer: "- **SVG**: Vector-based XML format. Elements are part of the DOM, searchable, and can be styled with CSS. Best for logos, icons, and low-complexity graphics.\n- **Canvas**: Raster-based pixel drawing API. Single HTML node. Best for high-performance interactive graphics, charts, and game loops."
      },
      {
        id: "fe_i16",
        question: "What is CSS-in-JS and what are its pros and cons?",
        answer: "CSS-in-JS (like Styled Components) is a styling technique where CSS is written using JavaScript.\n- **Pros**: Scoped styles (no class name collisions), dynamic styling based on props, code splitting, easier deletion of unused styles.\n- **Cons**: Runtime overhead (parsing CSS in JS), larger bundle size, caching difficulties."
      },
      {
        id: "fe_i17",
        question: "Explain Single Page Application (SPA) routing.",
        answer: "SPA routing manages navigation entirely in the browser without reloading the page. It intercepts link click events, updates the browser URL path using the HTML5 **History API** (`history.pushState`), and updates the DOM to show the component associated with the new route."
      },
      {
        id: "fe_i18",
        question: "What is Tree Shaking?",
        answer: "Tree shaking is a term for dead-code elimination. Modern bundlers (like Vite/Rollup or Webpack) analyze ES6 static module imports (`import` and `export`) to detect and remove unused exports from the final production bundle, reducing file size."
      },
      {
        id: "fe_i19",
        question: "Explain CSS Specificity rules.",
        answer: "Specificity is a weight applied to a given CSS declaration. Determined by four categories:\n1. **Inline styles**: `style=\"...\"` (highest weight).\n2. **IDs**: `#id`.\n3. **Classes, attributes, pseudo-classes**: `.class`, `[type]`, `:hover`.\n4. **Elements and pseudo-elements**: `div`, `::before`.\n`!important` overrides specificity entirely."
      },
      {
        id: "fe_i20",
        question: "Explain JavaScript closures and how they can cause memory leaks.",
        answer: "A closure keeps a reference to its outer lexical scope variables. If a closure retains reference to large objects (like DOM elements or huge arrays) that are no longer needed, they cannot be garbage collected, creating a memory leak unless variables in the closure scope are cleared."
      }
    ],
    advanced: [
      {
        id: "fe_a1",
        question: "What are Core Web Vitals and how do you optimize them?",
        answer: "Core Web Vitals are three performance metrics prioritized by Google:\n1. **Largest Contentful Paint (LCP)**: Measures loading performance. Optimize by using server compression, caching, optimizing images, and preloading hero assets.\n2. **Interaction to Next Paint (INP)**: Measures responsiveness to user input. Optimize by breaking up long tasks, avoiding layout thrashing, and keeping handlers lightweight.\n3. **Cumulative Layout Shift (CLS)**: Measures visual stability. Optimize by setting explicit dimensions on images/video and avoiding dynamic element insertions above active content."
      },
      {
        id: "fe_a2",
        question: "Explain Service Workers and how they enable Offline-First PWA capabilities.",
        answer: "Service Workers are event-driven background scripts that run in a separate thread from the page. They intercept network requests, cache assets locally using the Cache Storage API, and manage push notifications. They enable Progressive Web Apps (PWAs) to load instantly offline by serving cached assets instead of requesting from the network."
      },
      {
        id: "fe_a3",
        question: "What is the difference between layout thrashing and reflow? How do you prevent them?",
        answer: "- **Reflow**: Browser recalculates layouts. Happens when styles change.\n- **Layout Thrashing**: Occurs when code reads a layout property (e.g. `element.offsetHeight`) and immediately writes a layout style (e.g. `element.style.height = ...`) in a loop. Force-synchronizing layout.\n- **Prevention**: Batch DOM reads and writes separately, or use `requestAnimationFrame()` to queue updates."
      },
      {
        id: "fe_a4",
        question: "Explain Web Workers and when they should be used.",
        answer: "Web Workers run scripts in a separate background thread, fully isolated from the main thread. They do not have access to the DOM. They should be used for CPU-intensive calculations (such as parsing large JSON files, image processing, or data computations) to prevent blocking the main thread and keeping the UI responsive."
      },
      {
        id: "fe_a5",
        question: "Explain code-splitting patterns and dynamic imports in bundlers.",
        answer: "Code-splitting divides code into chunks that are loaded on-demand. In React/Vite, it is achieved using dynamic imports `import('./component')` which returns a promise. In React, it's combined with `React.lazy` and `<Suspense>`. The bundler recognizes this syntax and compiles the imported code into a separate chunk loaded asynchronously."
      },
      {
        id: "fe_a6",
        question: "What is the difference between shadow DOM, open and closed modes?",
        answer: "Shadow DOM encapsulates components. When creating a shadow root using `element.attachShadow({ mode: '...' })`:\n- **open**: The shadow root is accessible from external JS via `element.shadowRoot`.\n- **closed**: The shadow root is inaccessible from outside, returning `null`. Prevents external CSS or JS inspection entirely."
      },
      {
        id: "fe_a7",
        question: "Explain Client-Side Security vulnerabilities (XSS, CSRF) and prevention.",
        answer: "- **XSS (Cross-Site Scripting)**: Injecting malicious JS into a site. Prevent by escaping user input, sanitizing rich HTML, and setting Content Security Policy (CSP) headers.\n- **CSRF (Cross-Site Request Forgery)**: Unauthorized actions performed by authenticated users. Prevent by using Anti-CSRF tokens, SameSite attribute on cookies, and avoiding storing JWTs in standard cookies."
      },
      {
        id: "fe_a8",
        question: "Explain hydration mismatch errors in SSR and how to debug them.",
        answer: "Hydration mismatch happens when the pre-rendered HTML from the server does not match the virtual DOM built by React on the client during hydration. Causes: accessing browser-only APIs (like `window`) or random values in render, or incorrect nesting (e.g. `<p>` containing a `<div>`). Debug by comparing the SSR HTML with the client render and wrapping browser checks in `useEffect`."
      },
      {
        id: "fe_a9",
        question: "What is Module Federation and how does it relate to Micro-Frontends?",
        answer: "Module Federation is a webpack/bundler feature allowing an application to dynamically load compiled code from another application at runtime. It forms the technical backbone of Micro-Frontends, enabling independent teams to deploy different parts of a website without rebuilding the main shell."
      },
      {
        id: "fe_a10",
        question: "How does the V8 JS engine compile and execute code?",
        answer: "V8 parses JS code into an Abstract Syntax Tree (AST). The **Ignition** interpreter compiles the AST into bytecode. As code runs, the **Sparkplug** compiler compiles active functions to machine code. A JIT optimizing compiler (**Maglev** or **Turbofan**) monitors code execution and compiles hot functions into highly optimized machine code, de-optimizing back if type feedback assumptions change."
      },
      {
        id: "fe_a11",
        question: "What are CSS Houdini APIs and what do they enable?",
        answer: "CSS Houdini is a set of low-level APIs that expose the browser's CSS engine. They enable developers to write custom paint functions, layout algorithms, and worklet scripts that hook into the rendering process directly, executing custom styles at layout/paint stages."
      },
      {
        id: "fe_a12",
        question: "How do you implement micro-animations that are performance optimized?",
        answer: "Optimized animations must only trigger properties that bypass layout and paint calculations, executing directly in the compositing layer. Use `transform` (translate, scale, rotate) and `opacity` properties. Avoid animating layout properties like `width`, `height`, `margin`, or `top/left`."
      },
      {
        id: "fe_a13",
        question: "What is dynamic bundling and asset optimization in Vite?",
        answer: "Vite uses ES modules during development for instant starts. For production, it uses Rollup to perform tree shaking, code splitting, dependency pre-bundling, CSS code extraction, and asset hash naming, generating optimized assets for CDNs."
      },
      {
        id: "fe_a14",
        question: "What is the difference between HTTP/1.1, HTTP/2, and HTTP/3 optimizations?",
        answer: "- **HTTP/1.1**: Requires domain sharding, concatenation, and image sprites to bypass parallel connection limits.\n- **HTTP/2**: Introduces multiplexing (parallel requests on one TCP connection), binary framing, and header compression (HPACK). Bypasses need for concatenation.\n- **HTTP/3**: Replaces TCP with **QUIC** (UDP-based), solving Head-of-Line blocking (packet loss only blocks one stream, not all)."
      },
      {
        id: "fe_a15",
        question: "Explain custom state management engines like Jotai, Recoil, or Zustand.",
        answer: "Traditional Redux uses a single store with dispatch loops. Modern libraries use:\n- **Zustand**: A simple store based on publish-subscribe pattern, resolving selector re-renders.\n- **Jotai/Recoil (Atomic State)**: Defines small, independent pieces of state called 'atoms'. Components subscribe directly to atoms, creating a dependency graph and preventing re-renders of unrelated components."
      },
      {
        id: "fe_a16",
        question: "Explain the WebRTC model and client-side implementation details.",
        answer: "WebRTC allows peer-to-peer real-time communication of audio, video, and data. Client workflow:\n1. Access media using `navigator.mediaDevices.getUserMedia()`.\n2. Create an `RTCPeerConnection`.\n3. Exchange SDP offers/answers and ICE candidate network details using a custom signaling channel (WebSocket).\n4. Establish direct P2P connection."
      },
      {
        id: "fe_a17",
        question: "What is CSS Containment (`contain` property) and how does it optimize rendering?",
        answer: "The `contain` property tells the browser that an element's DOM subtree is independent of the rest of the page. By setting `contain: content` or `layout`, the browser can limit style recalculations, layout, and paint computations strictly within that container when changes occur, avoiding full-page reflows."
      },
      {
        id: "fe_a18",
        question: "What is AST (Abstract Syntax Tree) and how is it used in compilers like Babel/Babel-ESLint?",
        answer: "AST is a tree-like representation of source code structure. Compilers read JS source code, parse it into an AST, traverse and modify the tree nodes (e.g. translating ES6 code to ES5), and compile the tree back into JS code. Linters use AST to analyze code rules."
      },
      {
        id: "fe_a19",
        question: "What is WebGL and how is it utilized in high-performance web interfaces?",
        answer: "WebGL is a JavaScript API for rendering high-performance 2D and 3D graphics in a `<canvas>` without plugins, compiling shaders directly to the client GPU. Libraries like Three.js wrap WebGL, allowing developers to create immersive 3D interfaces and animations."
      },
      {
        id: "fe_a20",
        question: "Explain Content Security Policy (CSP) and how to configure it.",
        answer: "CSP is an HTTP response header that restricts resources (scripts, images, styles) a browser is allowed to load for a given page. It mitigates XSS by preventing inline scripts and enforcing allowed domains. Example:\n`Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.google.com`."
      }
    ]
  },
  backend: {
    beginner: [
      {
        id: "be_b1",
        question: "What are the common HTTP status codes and what do they mean?",
        answer: "HTTP status codes are categorized as:\n- **1xx**: Informational.\n- **2xx**: Success (e.g., 200 OK, 201 Created).\n- **3xx**: Redirection (e.g., 301 Moved Permanently, 302 Found).\n- **4xx**: Client Errors (e.g., 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found).\n- **5xx**: Server Errors (e.g., 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)."
      },
      {
        id: "be_b2",
        question: "Explain the difference between SQL and NoSQL databases.",
        answer: "- **SQL (Relational)**: Structured data in tables. Uses schemas and SQL. Supports ACID. Scales vertically (e.g., PostgreSQL, MySQL).\n- **NoSQL (Non-Relational)**: Flexible schemas. Formats include document, key-value, graph, column. Scalable horizontally (e.g., MongoDB, Redis, Cassandra)."
      },
      {
        id: "be_b3",
        question: "What is REST and what are its core constraints?",
        answer: "REST (Representational State Transfer) is an architectural style for APIs. Core constraints:\n1. Client-Server separation.\n2. Statelessness (no client context on server).\n3. Cacheability.\n4. Uniform Interface (URIs, HTTP methods).\n5. Layered System."
      },
      {
        id: "be_b4",
        question: "Explain MVC architecture in backend development.",
        answer: "MVC (Model-View-Controller) is a design pattern:\n- **Model**: Manages data logic and interacts with databases.\n- **View**: Handles UI output formatting.\n- **Controller**: Intercepts requests, manipulates models, and renders views. In modern APIs, the View is often bypassed, returning raw JSON instead."
      },
      {
        id: "be_b5",
        question: "What is authentication vs authorization?",
        answer: "- **Authentication (AuthN)**: Verifying *who* a user is (e.g., log in with username/password).\n- **Authorization (AuthZ)**: Verifying *what* permissions the authenticated user has (e.g., checking if they are an admin or user)."
      },
      {
        id: "be_b6",
        question: "What are environment variables and why should you use them?",
        answer: "Environment variables are key-value pairs stored outside the application code, managed by the host OS. They are used to separate configuration parameters (like DB secrets, API keys, ports) from the source code, preventing security leaks."
      },
      {
        id: "be_b7",
        question: "What is API Rate Limiting and why is it needed?",
        answer: "Rate limiting restricts the number of requests a client can make to a server in a given timeframe. It is needed to protect backend resources from brute force attacks, scraping, and service denial (DDoS)."
      },
      {
        id: "be_b8",
        question: "What is CORS (Cross-Origin Resource Sharing)?",
        answer: "CORS is a browser-enforced security mechanism. It prevents a web page from making requests to an API at a different domain than the page itself, unless the API explicitly responds with headers authorizing requests from that origin."
      },
      {
        id: "be_b9",
        question: "Explain the purpose of API versioning.",
        answer: "API versioning ensures backward compatibility. When breaking changes are introduced, versioning (e.g., `/api/v1/users` vs `/api/v2/users`) allows existing client applications to continue working without crash failures."
      },
      {
        id: "be_b10",
        question: "What is hashing and how does it differ from encryption?",
        answer: "- **Hashing**: One-way transformation (cannot be decrypted). Used for passwords (e.g., bcrypt, SHA-256).\n- **Encryption**: Two-way transformation (can be decrypted using a key). Used for transferring data securely."
      },
      {
        id: "be_b11",
        question: "Explain the HTTP protocol and its stateless nature.",
        answer: "HTTP (Hypertext Transfer Protocol) is an application-level protocol for transmitting data. It is stateless because each request is executed independently, without the server retaining any context about previous requests from that client."
      },
      {
        id: "be_b12",
        question: "What is a JSON Web Token (JWT)?",
        answer: "A JWT is a compact, URL-safe string format for transmitting information securely between parties as a JSON object. It consists of three parts: Header, Payload, and Signature, used widely for stateless user authentication."
      },
      {
        id: "be_b13",
        question: "What is the difference between relational database tables and NoSQL collections?",
        answer: "- Relational tables enforce strict schemas (rows and columns) and use keys to link data.\n- NoSQL collections store documents (like BSON in MongoDB) containing nested variables and dynamic schemas."
      },
      {
        id: "be_b14",
        question: "Explain standard Logging in backend applications.",
        answer: "Logging is recording server events and errors to console or files. It is crucial for debugging and tracking performance in production. Standard log levels: DEBUG, INFO, WARN, ERROR, FATAL."
      },
      {
        id: "be_b15",
        question: "What is an ORM in backend development?",
        answer: "An Object-Relational Mapper (ORM) is a library that allows developers to query and manipulate databases using object-oriented code instead of writing raw SQL queries. Examples: Sequelize, Prisma, Hibernate."
      },
      {
        id: "be_b16",
        question: "What is the difference between session-based and token-based authentication?",
        answer: "- **Session-based**: Server stores session state in memory/DB and sends a Session ID cookie to client. Stateful.\n- **Token-based (JWT)**: Server signs a token containing user details and sends it to the client. The server does not store session state. Stateless."
      },
      {
        id: "be_b17",
        question: "What is a query parameter vs a route parameter in an API?",
        answer: "- **Route parameter**: Identifies a specific resource in the URL path, e.g. `/users/:id`.\n- **Query parameter**: Filters or sorts resources in URL query strings, e.g. `/users?sort=desc`."
      },
      {
        id: "be_b18",
        question: "What is password salting?",
        answer: "Salting is adding a random string of characters (salt) to a password before hashing it. This ensures that identical passwords produce unique hashes, preventing attacks using pre-computed hash tables (Rainbow Tables)."
      },
      {
        id: "be_b19",
        question: "Explain Git workflows (commit, push, merge).",
        answer: "Git is a version control system. Developers branch out to work on features, commit changes locally, push branches to remote repositories, and merge branches into main branches via Pull Requests after review."
      },
      {
        id: "be_b20",
        question: "What is a API Gateway?",
        answer: "An API Gateway is a server that acts as an entry point for APIs, routing client requests, enforcing rate limits, handling authentication, and collecting metrics before routing to backend microservices."
      }
    ],
    intermediate: [
      {
        id: "be_i1",
        question: "What are database migrations and why are they important?",
        answer: "Migrations are version control for databases. They are scripts that define incremental changes to schemas (e.g. creating tables, adding columns). They ensure schema consistency across development, staging, and production environments."
      },
      {
        id: "be_i2",
        question: "Explain database indexing and its cost.",
        answer: "Database indexes speed up read queries by creating a quick lookup tree (like B-Tree). However, they come at the cost of write performance (each insert/update requires updating indexes) and storage space."
      },
      {
        id: "be_i3",
        question: "What is Redis and how does caching work?",
        answer: "Redis is an in-memory key-value database. Caching works by checking Redis first; if key is found (cache hit), return it. If not (cache miss), query DB, store in Redis with an expiration time, and return result."
      },
      {
        id: "be_i4",
        question: "Explain Message Queues (e.g. RabbitMQ, BullMQ).",
        answer: "Message queues allow asynchronous inter-service communication. You publish jobs/messages to a queue, and workers consume them asynchronously, decoupling heavy tasks (like email sending or video transcoding) from API threads."
      },
      {
        id: "be_i5",
        question: "What is Docker and what are containers?",
        answer: "Docker is a containerization platform. Containers packages an application with all its dependencies, libraries, and configurations into a single image that runs consistently across any operating system."
      },
      {
        id: "be_i6",
        question: "Explain SQL Joins (INNER, LEFT, RIGHT, FULL).",
        answer: "- **INNER**: Returns records with matching values in both tables.\n- **LEFT**: Returns all records from left table and matching from right.\n- **RIGHT**: Returns all records from right table and matching from left.\n- **FULL**: Returns all records when there is a match in either table."
      },
      {
        id: "be_i7",
        question: "What is database normalization?",
        answer: "Normalization is structuring a relational database to reduce data redundancy and improve integrity. Standard forms range from 1NF (atomic values), 2NF (remove partial dependencies), to 3NF (remove transitive dependencies)."
      },
      {
        id: "be_i8",
        question: "Explain connection pooling in database clients.",
        answer: "Opening database connections is resource-intensive. Connection pooling maintains a cache of active database connections that are reused across queries, reducing latency and saving server resources."
      },
      {
        id: "be_i9",
        question: "What is CORS preflight request (OPTIONS)?",
        answer: "When making complex cross-origin requests (e.g. using custom headers or JSON payloads), the browser automatically sends an HTTP `OPTIONS` request (preflight) to verify if the server permits the actual request method."
      },
      {
        id: "be_i10",
        question: "Explain SQL Transactions and ACID properties.",
        answer: "Transactions execute multiple queries as a single unit. ACID properties are:\n- **Atomicity**: All operations succeed or roll back.\n- **Consistency**: Database schema rules are maintained.\n- **Isolation**: Concurrent transactions do not bleed state.\n- **Durability**: Successful writes survive crashes."
      },
      {
        id: "be_i11",
        question: "What is the N+1 query problem and how do you resolve it?",
        answer: "Occurs when code executes one query to get a list of records, and then runs separate queries for each record to fetch related data. Resolved using **Eager Loading** (joining tables or populated references in a single query)."
      },
      {
        id: "be_i12",
        question: "Explain API rate limiting algorithms.",
        answer: "Common algorithms include:\n- **Token Bucket**: Fixed capacity bucket accumulating tokens; requests consume tokens.\n- **Fixed Window**: Counters reset every fixed interval.\n- **Sliding Window Log**: Stores timestamps of requests in a sorted set."
      },
      {
        id: "be_i13",
        question: "What is a reverse proxy (e.g. Nginx)?",
        answer: "A reverse proxy sits in front of backend servers, routing client requests, handling SSL termination, serving static files, compression, and load-balancing traffic across servers."
      },
      {
        id: "be_i14",
        question: "Explain the difference between Monolith and Microservices.",
        answer: "- **Monolith**: A single, unified codebase running as one service. Easy to build, hard to scale.\n- **Microservices**: Application divided into independent services communicating via network protocols. Scalable but complex."
      },
      {
        id: "be_i15",
        question: "How do you implement OAuth2 flow in a backend API?",
        answer: "OAuth2 enables third-party authorization. The client redirects the user to the provider, which returns an authorization code. The client sends this code to the backend, which exchanges it with the provider for an access token."
      },
      {
        id: "be_i16",
        question: "What is database replication (Master-Slave)?",
        answer: "Replication copies data from a master node to slave nodes. Writes are sent to the master; reads can be distributed to slave nodes, improving read scaling and data redundancy."
      },
      {
        id: "be_i17",
        question: "Explain WebSockets vs Server-Sent Events (SSE).",
        answer: "- **WebSockets**: Bi-directional, persistent connection over a single TCP socket. Suitable for real-time chat.\n- **SSE**: Uni-directional client stream from server over HTTP. Suitable for live dashboards."
      },
      {
        id: "be_i18",
        question: "How do you write unit and integration tests in the backend?",
        answer: "- **Unit tests**: Test isolated functions (mocking database calls).\n- **Integration tests**: Test API routes and database integrity using test databases (e.g., using Supertest, Mocha, Jest)."
      },
      {
        id: "be_i19",
        question: "What is database deadlock and how do you prevent it?",
        answer: "A deadlock occurs when two transactions lock resources needed by each other, blocking progress. Prevented by locking resources in the same order, keeping transactions small, and setting lock timeouts."
      },
      {
        id: "be_i20",
        question: "What is Graceful Shutdown in backend servers?",
        answer: "Graceful shutdown is stopping a server cleanly: stopping acceptance of new requests, completing pending requests, closing database connections, and exiting process cleanly."
      }
    ],
    advanced: [
      {
        id: "be_a1",
        question: "Explain the CAP Theorem and its implications in distributed systems.",
        answer: "The CAP Theorem states that a distributed system can guarantee at most two out of three characteristics:\n1. **Consistency**: Every read receives the most recent write or an error.\n2. **Availability**: Every request receives a non-error response.\n3. **Partition Tolerance**: System continues to operate despite network partition errors.\nSince networks will experience partitions, system design forces choosing CP (Consistency) or AP (Availability)."
      },
      {
        id: "be_a2",
        question: "Explain Database Partitioning and Sharding.",
        answer: "- **Horizontal Partitioning**: Splitting rows of a table across multiple database engines based on a partition key (e.g., tenant ID).\n- **Sharding**: A type of horizontal partitioning where partitions (shards) reside on separate server nodes, allowing databases to scale beyond the limits of a single machine."
      },
      {
        id: "be_a3",
        question: "What are Distributed Transactions and how does the Saga Pattern solve them?",
        answer: "In microservices, transactions span multiple databases, making standard commits impossible. The Saga Pattern coordinates a sequence of local transactions: each service executes a local transaction. If a step fails, compensation transactions are executed in reverse order to roll back mutations."
      },
      {
        id: "be_a4",
        question: "Explain gRPC and Protocol Buffers.",
        answer: "gRPC is a high-performance RPC framework developed by Google. It communicates over HTTP/2 and serializes data using Protocol Buffers (proto files) into lightweight binary payloads, offering faster speeds and strict typing compared to REST/JSON."
      },
      {
        id: "be_a5",
        question: "What are cache invalidation strategies and how do you handle cache stampede?",
        answer: "Strategies include Write-Through, Write-Behind, and Cache-Aside. A **Cache Stampede** happens when a cached hot key expires, and thousands of concurrent requests attempt to query the database simultaneously. Prevented by locking access, background cache refilling before expiration, or using probabilistic early expiration."
      },
      {
        id: "be_a6",
        question: "Explain CQRS (Command Query Responsibility Segregation).",
        answer: "CQRS is a pattern that segregates read operations (Queries) from write operations (Commands). They can use separate data models or databases (e.g., a relational database for writes, and a document store for reads) to optimize performance, scalability, and security."
      },
      {
        id: "be_a7",
        question: "How do you achieve Zero-Downtime deployments?",
        answer: "Achieved via:\n- **Blue-Green Deployments**: Maintain two identical environments. Deploy to Green, test, and switch load balancer router to Green.\n- **Rolling Updates**: Deploy new versions to a subset of servers gradually.\n- **Canary Deployments**: Route a small percentage of user traffic to the new version before rolling out globally."
      },
      {
        id: "be_a8",
        question: "Explain SQL isolation levels and their concurrency issues.",
        answer: "Four standard isolation levels:\n1. **Read Uncommitted**: Can read uncommitted writes (Dirty Reads).\n2. **Read Committed**: Only reads committed data. Prevents dirty reads, but allows Non-Repeatable Reads.\n3. **Repeatable Read**: Guarantees identical reads in a transaction. Prevents non-repeatable reads, allows Phantom Reads.\n4. **Serializable**: Full lock ordering. Prevents all anomalies (slowest)."
      },
      {
        id: "be_a9",
        question: "Explain the Event Sourcing pattern.",
        answer: "Event sourcing is persisting the state of a business entity as a sequence of state-changing events (e.g., transactional log). Current state is reconstructed by replaying events from the beginning, providing a perfect audit trail and supporting analytical projections."
      },
      {
        id: "be_a10",
        question: "What is database connection starvation and how do you diagnose it?",
        answer: "Starvation occurs when all connections in a pool are exhausted, blocking incoming requests. Diagnosed by checking pool wait queues and API timeouts. Causes: slow database queries, connection leaks (not closing connections), or mismatched pool sizes."
      },
      {
        id: "be_a11",
        question: "Explain the difference between message brokers and event streaming (e.g. RabbitMQ vs Kafka).",
        answer: "- **RabbitMQ (Message Broker)**: Smart broker, dumb consumer. Deletes messages once consumed/acknowledged. Routes messages using exchanges.\n- **Kafka (Event Stream)**: Dumb broker, smart consumer. Persists messages as an append-only log. Consumers track their own offsets, allowing replaying of streams."
      },
      {
        id: "be_a12",
        question: "How do you implement end-to-end encryption in a backend system?",
        answer: "E2EE requires encrypting payloads on the client device using the receiver's public key. The backend server acts only as a transit router, storing and forwarding encrypted payloads, and cannot decrypt them because the private keys reside exclusively on client devices."
      },
      {
        id: "be_a13",
        question: "What is the Circuit Breaker pattern in microservices?",
        answer: "A circuit breaker prevents cascade failures in microservices. It wraps calls to external services. If the external service fails repeatedly, the breaker 'trips' (opens), immediately returning fallback errors without hitting the service, allowing it to recover."
      },
      {
        id: "be_a14",
        question: "Explain distributed locks in Redis (Redlock algorithm).",
        answer: "A distributed lock coordinates mutual exclusion across multiple server nodes. The **Redlock** algorithm acquires locks by sending SETNX queries to multiple independent Redis instances. If it succeeds in acquiring locks from a majority of nodes before timeout, the lock is acquired."
      },
      {
        id: "be_a15",
        question: "What are vector databases and how are they used in backend LLM pipelines?",
        answer: "Vector databases index high-dimensional embeddings. Backend pipelines convert user queries to embeddings, query vector databases (e.g. Pinecone) using cosine similarity to retrieve relevant text chunks, and pass them as context to LLMs (RAG pipeline)."
      },
      {
        id: "be_a16",
        question: "Explain the design of a highly scalable notifications service.",
        answer: "Requires: An API gateway for requests, a message queue (Kafka) to process tasks, worker instances sending alerts (push, SMS, email), rate-limiters for carriers, a cache for templates, and a dead-letter-queue to manage failed notifications."
      },
      {
        id: "be_a17",
        question: "What are WebSockets scale limits and how do you handle them?",
        answer: "WebSockets maintain open TCP connections, draining server memory. To scale, you load-balance connections across multiple nodes using round-robin with sticky sessions. A Redis Pub/Sub adapter is used to share messages across WebSocket nodes."
      },
      {
        id: "be_a18",
        question: "How do you run server profiling and memory heap analysis in Node?",
        answer: "Profile using `node --prof` to analyze tick logs, or connect Chrome DevTools using `node --inspect`. Capture heap snapshots to analyze allocations and memory leaks using heapdiff utilities under load."
      },
      {
        id: "be_a19",
        question: "What is database connection pooling size mathematical estimation?",
        answer: "Optimal pool size can be estimated using: $\\text{Pool Size} = ((\\text{Core Count} \\times 2) + \\text{Spindle Count})$. A pool size too large causes context switching overhead on the database engine, whereas too small causes request starvation."
      },
      {
        id: "be_a20",
        question: "Explain JWT revocation strategies.",
        answer: "JWTs are stateless, making revocation difficult. Strategies include:\n1. Short expiry times combined with Refresh Tokens stored in DB.\n2. **Blocklisting**: Store revoked JTI (token identifiers) in Redis until expiration.\n3. **Rotation**: Invalidate refresh tokens on use to detect reuse."
      }
    ]
  },
  "ai-ml": {
    beginner: [
      {
        id: "ai_b1",
        question: "What is the difference between supervised and unsupervised learning?",
        answer: "- **Supervised**: The model learns from labeled training data (e.g., linear regression, classification).\n- **Unsupervised**: The model finds patterns and associations in unlabeled data (e.g., K-means clustering, PCA)."
      },
      {
        id: "ai_b2",
        question: "What is a neural network activation function and why is it needed?",
        answer: "An activation function (like Sigmoid, Tanh, or ReLU) is a mathematical formula applied to a node's output. It is needed to introduce **non-linearity** into the network, enabling it to learn complex, non-linear relationships rather than just acting as a simple linear regression model."
      },
      {
        id: "ai_b3",
        question: "What is the difference between overfitting and underfitting?",
        answer: "- **Overfitting**: Model learns the training data too well, including its noise, failing to generalize to new data. High variance, low bias.\n- **Underfitting**: Model is too simple to capture patterns in data. High bias, low variance."
      },
      {
        id: "ai_b4",
        question: "Explain the purpose of loss functions.",
        answer: "A loss function measures the difference between the model's predictions and actual targets. The optimization algorithm uses the loss value as feedback to update model weights, aiming to minimize the loss."
      },
      {
        id: "ai_b5",
        question: "Explain Gradient Descent in simple terms.",
        answer: "Gradient Descent is an optimization algorithm that minimizes the loss function. It works by calculating the gradient (slope) of the loss curve at the current weights and updating weights in the opposite direction (downhill) to find the minimum."
      },
      {
        id: "ai_b6",
        question: "What are train, validation, and test datasets?",
        answer: "- **Train**: Data used to fit the model's parameters.\n- **Validation**: Data used to tune hyperparameters and monitor overfitting.\n- **Test**: Independent data used only to evaluate final model performance."
      },
      {
        id: "ai_b7",
        question: "What is the difference between L1 and L2 regularization?",
        answer: "- **L1 (Lasso)** adds the sum of absolute values of weights to the loss. It can shrink weights to zero, acting as feature selector.\n- **L2 (Ridge)** adds the sum of squared weights. It shrinks weights close to zero but keeps all features."
      },
      {
        id: "ai_b8",
        question: "What is the Sigmoid activation function and its range?",
        answer: "The Sigmoid function maps any input to a value between 0 and 1, representing a probability. Formula: $\\sigma(x) = 1 / (1 + e^{-x})$."
      },
      {
        id: "ai_b9",
        question: "What is the ReLU activation function and its pros?",
        answer: "ReLU (Rectified Linear Unit) is $f(x) = \\max(0, x)$. Pros: computationally efficient to calculate and reduces the vanishing gradient problem compared to Sigmoid."
      },
      {
        id: "ai_b10",
        question: "Explain Bias-Variance tradeoff.",
        answer: "It is the conflict between modeling complexity and generalization. Minimizing bias (simplifying assumptions) increases variance (over-sensitivity to data), and vice-versa. Optimal models balance both."
      },
      {
        id: "ai_b11",
        question: "What is standard deviation and variance?",
        answer: "- **Variance**: Average squared difference of data points from the mean.\n- **Standard Deviation**: Square root of variance, measuring dispersion in the same units as the data."
      },
      {
        id: "ai_b12",
        question: "Explain Precision, Recall, and F1-score.",
        answer: "- **Precision**: TP / (TP + FP). (Accuracy of positive predictions).\n- **Recall**: TP / (TP + FN). (Ability to find all positive instances).\n- **F1-score**: Harmonic mean of Precision and Recall."
      },
      {
        id: "ai_b13",
        question: "What is a decision tree?",
        answer: "A decision tree is a flowchart-like model that splits data into branches based on feature conditions, reaching decisions (leaf nodes) representing classification classes or regression values."
      },
      {
        id: "ai_b14",
        question: "What is the difference between standard scaling and normalization?",
        answer: "- **Standard Scaling**: Centers data to mean 0 and standard deviation 1.\n- **Normalization**: Rescales data to a range (usually 0 to 1)."
      },
      {
        id: "ai_b15",
        question: "What is linear regression?",
        answer: "Linear regression is a supervised algorithm modeling the linear relationship between a continuous target variable and one or more input features."
      },
      {
        id: "ai_b16",
        question: "What is tokenization in NLP?",
        answer: "Tokenization is the process of breaking text down into smaller units, such as words, subwords, or characters, which can be encoded into numbers for models to process."
      },
      {
        id: "ai_b17",
        question: "What is clustering?",
        answer: "Clustering is an unsupervised learning task of grouping data points into clusters so that points in the same cluster are more similar to each other than to those in other clusters."
      },
      {
        id: "ai_b18",
        question: "What is cross-validation?",
        answer: "Cross-validation is a technique to assess model generalization by partitioning data into subsets (folds), training on some, and validating on others recursively."
      },
      {
        id: "ai_b19",
        question: "What is K-Nearest Neighbors (KNN)?",
        answer: "KNN is a simple, instance-based algorithm that classifies a new data point based on the majority class of its K nearest neighbors in the feature space."
      },
      {
        id: "ai_b20",
        question: "What is Pandas in Python and why is it used?",
        answer: "Pandas is a data analysis library providing DataFrames (table structures) that allow cleaning, manipulation, filtering, and analysis of structured data."
      }
    ],
    intermediate: [
      {
        id: "ai_i1",
        question: "Explain the difference between Random Forest and Gradient Boosting.",
        answer: "- **Random Forest** uses **bagging**. It trains multiple decision trees in parallel on bootstrapped data subsets and averages predictions. Reduces variance.\n- **Gradient Boosting** uses **boosting**. It trains decision trees sequentially, where each new tree is trained to correct the residual errors of the previous trees. Reduces bias."
      },
      {
        id: "ai_i2",
        question: "How does backpropagation work in a neural network?",
        answer: "Backpropagation calculates gradients of the loss function with respect to weights using the **Chain Rule of calculus**. The errors propagate backward from output to input layers, allowing optimization algorithms (like Adam) to update weights."
      },
      {
        id: "ai_i3",
        question: "What are Convolutional Neural Networks (CNNs) and their typical use cases?",
        answer: "CNNs are deep neural networks designed to process grid-like topology, such as images. They use convolution layers to extract spatial features (edges, shapes) automatically. Typical use cases: image classification, object detection, and segmentation."
      },
      {
        id: "ai_i4",
        question: "What are Recurrent Neural Networks (RNNs) and how do LSTMs improve them?",
        answer: "RNNs process sequential data by maintaining a hidden state (memory) over steps. However, they suffer from vanishing gradients over long sequences. LSTMs (Long Short-Term Memory) improve them by introducing **gates** (input, forget, output gates) that control the flow of information, maintaining long-term memory."
      },
      {
        id: "ai_i5",
        question: "Explain the ROC-AUC evaluation metric.",
        answer: "The ROC curve plots the True Positive Rate vs False Positive Rate at different classification thresholds. The AUC (Area Under the Curve) measures the probability that the model ranks a random positive instance higher than a random negative one. AUC ranges from 0.5 (random) to 1.0 (perfect)."
      },
      {
        id: "ai_i6",
        question: "What are embeddings in NLP?",
        answer: "Embeddings are dense, low-dimensional vector representations of words or sentences that capture semantic meaning. Words with similar meanings (e.g., 'king' and 'queen') are mapped to close vectors in the embedding space."
      },
      {
        id: "ai_i7",
        question: "What is Transfer Learning and when is it used?",
        answer: "Transfer learning is using a pre-trained model on a large dataset (e.g., ImageNet or BERT) as a starting point for a new, related task with limited data. It saves time and computation while improving accuracy."
      },
      {
        id: "ai_i8",
        question: "What are optimization algorithms like Adam and SGD?",
        answer: "- **SGD (Stochastic Gradient Descent)** updates weights using gradients from small batches.\n- **Adam (Adaptive Moment Estimation)** computes adaptive learning rates for each parameter by maintaining exponential moving averages of both the gradients (first moment) and squared gradients (second moment)."
      },
      {
        id: "ai_i9",
        question: "What is Hyperparameter Tuning and what are the techniques?",
        answer: "Hyperparameters are model configurations set before training. Tuning techniques:\n- **Grid Search**: Exhaustive search over a grid of parameters.\n- **Random Search**: Randomly samples parameter configurations.\n- **Bayesian Optimization**: Uses probability to model optimal configurations sequentially."
      },
      {
        id: "ai_i10",
        question: "Explain Principal Component Analysis (PCA) algorithm.",
        answer: "PCA is a dimensionality reduction technique. It projects high-dimensional data onto orthogonal directions (principal components) along which the variance of the data is maximized, reducing features while maintaining variance."
      },
      {
        id: "ai_i11",
        question: "Explain the difference between L1 and L2 regularization geometrically.",
        answer: "L1 constraints weights inside a diamond-shaped boundary, whose corners lie on the axes, making it likely for optimization contours to hit them, forcing weights to 0. L2 constraints weights inside a spherical boundary, shrinking weights but rarely making them exactly 0."
      },
      {
        id: "ai_i12",
        question: "What is the difference between PyTorch and TensorFlow?",
        answer: "- **PyTorch**: Uses dynamic computation graphs, making debugging and writing custom architectures intuitive. Pythonic.\n- **TensorFlow**: Historically static graphs (now supports eager execution), offering robust deployment tools (TF Serving, TF Lite) for production pipelines."
      },
      {
        id: "ai_i13",
        question: "What is class imbalance and how do you handle it?",
        answer: "Class imbalance occurs when one class dominates the dataset. Handled by:\n- Resampling (SMOTE oversampling or undersampling).\n- Class weighting in loss functions.\n- Evaluating using F1-score/Precision-Recall AUC instead of accuracy."
      },
      {
        id: "ai_i14",
        question: "Explain Support Vector Machines (SVM) and the Kernel Trick.",
        answer: "SVM finds a decision boundary (hyperplane) that maximizes the margin between classes. The **Kernel Trick** projects data to high-dimensional space to make it linearly separable, without computing the high-dimensional coordinates."
      },
      {
        id: "ai_i15",
        question: "Explain the K-Means clustering algorithm.",
        answer: "K-Means divides data into K clusters. It initializes K centroids, assigns each point to the nearest centroid, recalculates centroids as the mean of assigned points, and repeats until centroids stabilize."
      },
      {
        id: "ai_i16",
        question: "What is feature engineering? Provide two examples.",
        answer: "Creating new features or transforming existing ones to improve model learning. Examples: extracting day of week from dates, log-transforming highly skewed features."
      },
      {
        id: "ai_i17",
        question: "What is a confusion matrix?",
        answer: "A confusion matrix is a table summarizing classification predictions vs actual targets, showing True Positives, True Negatives, False Positives (Type I error), and False Negatives (Type II error)."
      },
      {
        id: "ai_i18",
        question: "Explain the difference between generative and discriminative models.",
        answer: "- **Generative**: Models joint probability $P(X, Y)$ and can generate new samples (e.g., Naive Bayes, GANs).\n- **Discriminative**: Models conditional probability $P(Y|X)$ to classify inputs (e.g., Logistic Regression, SVM)."
      },
      {
        id: "ai_i19",
        question: "What is the purpose of Batch Normalization?",
        answer: "Batch Normalization normalizes the activations of intermediate layers in a batch. It accelerates training, stabilizes learning rates, and acts as a mild regularizer, mitigating vanishing gradients."
      },
      {
        id: "ai_i20",
        question: "Explain Word2Vec and its models.",
        answer: "Word2Vec is a neural network model to learn word embeddings. It has two architectures:\n1. **CBOW (Continuous Bag of Words)**: Predicts a target word from context words.\n2. **Skip-gram**: Predicts context words from a target word."
      }
    ],
    advanced: [
      {
        id: "ai_a1",
        question: "Explain the Transformer architecture and the Self-Attention mechanism.",
        answer: "Transformers replace recurrent structures with **Self-Attention**. For each token, the model projects input vectors into Query (Q), Key (K), and Value (V) matrices. The attention scores are calculated as:\n$\\text{Attention}(Q,K,V) = \\text{Softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$\nThis measures the semantic relationship between all tokens in a sequence simultaneously, allowing massive parallelization during training."
      },
      {
        id: "ai_a2",
        question: "What are parameter-efficient fine-tuning (PEFT) methods like LoRA and QLoRA?",
        answer: "- **LoRA (Low-Rank Adaptation)** freezes the original pre-trained LLM weights and adds trainable rank decomposition matrices to attention layers, reducing trainable parameters by 99%.\n- **QLoRA** extends LoRA by quantizing the base model to 4-bit NormalFloat (NF4) and using Double Quantization and Paged Optimizers, allowing fine-tuning of large models on consumer GPUs."
      },
      {
        id: "ai_a3",
        question: "Explain Retrieval-Augmented Generation (RAG) and its key components.",
        answer: "RAG combines LLMs with external knowledge retrieval. Components:\n1. **Ingestion**: Documents are chunked, vectorized using embedding models, and stored in a vector database.\n2. **Retrieval**: User query is embedded, and the vector DB retrieves semantically similar document chunks.\n3. **Generation**: Retrieved chunks are injected into the LLM prompt as context, enabling the model to generate accurate answers and reducing hallucinations."
      },
      {
        id: "ai_a4",
        question: "Explain model quantization, pruning, and distillation.",
        answer: "- **Quantization**: Converts model weights from float32 to float16, int8, or int4, reducing memory and speeding up inference.\n- **Pruning**: Removes unimportant weights (near 0 values) from the network, making it sparse.\n- **Distillation**: Trains a smaller 'student' model to mimic the outputs (logits) of a large pre-trained 'teacher' model, transferring knowledge."
      },
      {
        id: "ai_a5",
        question: "Explain RLHF (Reinforcement Learning from Human Feedback) and DPO (Direct Preference Optimization).",
        answer: "- **RLHF**: Aligns LLMs with human preferences. It trains a reward model on human comparisons, and then optimizes the LLM policy using Reinforcement Learning (PPO) against this reward model.\n- **DPO**: Bypasses training a separate reward model. It optimizes the LLM directly on preference pairs (chosen/rejected prompts) using a binary cross-entropy loss, simplifying the alignment pipeline."
      },
      {
        id: "ai_a6",
        question: "What are Diffusion Models and how do they generate images?",
        answer: "Diffusion models generate data by reversing a noise process. During training, noise is added incrementally to an image (forward process) until it becomes pure noise, and a neural network (typically a U-Net) is trained to predict and subtract the noise at each step (reverse process). Once trained, the model can generate clean images starting from random noise."
      },
      {
        id: "ai_a7",
        question: "Explain generative adversarial networks (GANs) and their optimization challenges.",
        answer: "GANs consist of two networks: a **Generator** (creates fake samples) and a **Discriminator** (distinguishes real vs fake). They are trained in a minimax game. Challenges include: Mode Collapse (generator outputs the same limited samples), Vanishing Gradients (discriminator becomes too good), and training instability."
      },
      {
        id: "ai_a8",
        question: "What is the difference between contrastive learning and generative modeling? Explain CLIP.",
        answer: "- **Generative Modeling**: Learns to reconstruct or generate data samples.\n- **Contrastive Learning**: Learns representations by bringing positive pairs closer and pushing negative pairs apart in embedding space.\n- **CLIP (Contrastive Language-Image Pre-training)**: Trains an image encoder and text encoder jointly on pairs of images and descriptions to maximize cosine similarity of matching pairs, enabling zero-shot classification."
      },
      {
        id: "ai_a9",
        question: "What are vector databases and how do index algorithms like HNSW work?",
        answer: "Vector databases store and query embeddings. **HNSW (Hierarchical Navigable Small World)** is a graph-based indexing algorithm. It builds a multi-layer graph structure where upper layers have sparse connections for fast routing, and lower layers have dense connections for precision. Search traverses top-down using greedy search, yielding search results in logarithmic time."
      },
      {
        id: "ai_a10",
        question: "Explain deep reinforcement learning algorithms (DQN vs PPO).",
        answer: "- **DQN (Deep Q-Network)**: Value-based, off-policy algorithm. Uses a neural network to estimate Q-values (expected future rewards) and learns from a replay buffer. Limited to discrete action spaces.\n- **PPO (Proximal Policy Optimization)**: Policy-gradient, on-policy algorithm. Directly optimizes the action policy while using a clipping objective to prevent destabilizing policy updates, suitable for continuous spaces."
      },
      {
        id: "ai_a11",
        question: "What is the math behind LLM token generation (Softmax temperature, Top-P, Top-K)?",
        answer: "LLMs output raw logits for each vocabulary token. They are adjusted via:\n- **Temperature ($T$)**: Scaled logits: $z_i / T$. Lowering $T$ makes the distribution sharper (more deterministic); raising $T$ flattens it (more creative).\n- **Top-K**: Restricts sampling to the $K$ highest-probability tokens.\n- **Top-P (Nucleus)**: Restricts sampling to the smallest subset of tokens whose cumulative probability exceeds $P$."
      },
      {
        id: "ai_a12",
        question: "What are Graph Neural Networks (GNNs) and their message-passing framework?",
        answer: "GNNs process graph-structured data (nodes and edges). The message-passing framework works in three phases:\n1. **Message**: Nodes generate messages based on their features.\n2. **Aggregation**: Nodes collect messages from neighbors (using permutation-invariant operators like Sum, Mean).\n3. **Update**: Nodes update their own feature vectors using aggregated messages."
      },
      {
        id: "ai_a13",
        question: "Explain the concept of Neural Architecture Search (NAS).",
        answer: "NAS is a technique to automate the design of neural networks. It uses search algorithms (Reinforcement Learning, Evolutionary Algorithms, or Differentiable Search) to explore a predefined search space of network operations and connections, optimization structures, and parameters, finding the highest-performing architecture."
      },
      {
        id: "ai_a14",
        question: "What are Variational Autoencoders (VAEs) and the Reparameterization Trick?",
        answer: "VAEs are generative models mapping inputs to a latent distribution (mean $\\mu$ and variance $\\sigma$). The **Reparameterization Trick** is required to allow backpropagation through the stochastic bottleneck. Instead of sampling directly from $\\mathcal{N}(\\mu, \\sigma^2)$, it samples standard noise $\\epsilon \\sim \\mathcal{N}(0, I)$ and calculates latent variable $z = \\mu + \\sigma \\odot \epsilon$, making object creation differentiable."
      },
      {
        id: "ai_a15",
        question: "Explain AI Model Drift and PSI (Population Stability Index).",
        answer: "Model drift is performance degradation due to changes in production data. PSI measures changes in distribution between reference data (training) and target data (production). A PSI value < 0.1 indicates stability, 0.1 to 0.25 moderate shift, and > 0.25 a significant shift requiring model retraining."
      },
      {
        id: "ai_a16",
        question: "What are the optimization problems of Deep Learning: Saddle Points and Local Minima?",
        answer: "In high-dimensional loss landscapes, true local minima are rare. The main optimization challenges are **Saddle Points** (where slope is 0, but some directions go up and others go down). Standard gradient descent slows down at saddle points. Mitigated using optimizers with momentum (like Adam) which carry velocity through flat regions."
      },
      {
        id: "ai_a17",
        question: "Explain distributed training: Data Parallelism (DP) vs Model Parallelism (MP).",
        answer: "- **Data Parallelism (DP)**: Model is replicated across all GPUs. Each GPU processes a different batch slice, and gradients are averaged across nodes using AllReduce before updates.\n- **Model Parallelism (MP)**: Model layers are split across multiple GPUs (Tensor or Pipeline Parallelism) because the model is too large to fit in a single GPU's memory."
      },
      {
        id: "ai_a18",
        question: "Explain the mathematics of Generative Adversarial Networks (Wasserstein GAN).",
        answer: "Standard GANs minimize Jensen-Shannon divergence, which causes vanishing gradients. WGAN uses **Earth Mover's (Wasserstein) Distance** to measure divergence, which provides smooth gradients everywhere. It optimizes a Critic (instead of Discriminator) using Kantorovich-Rubinstein duality, enforcing 1-Lipschitz continuity via Gradient Penalty."
      },
      {
        id: "ai_a19",
        question: "Explain how to evaluate generative text models (Perplexity, BLEU, ROUGE).",
        answer: "- **Perplexity**: Exponential of cross-entropy loss, measuring how well the model predicts the test set (lower is better).\n- **BLEU**: Measures n-gram precision overlap against references, typically used for translation.\n- **ROUGE**: Measures n-gram recall overlap against references, typically used for summarization."
      },
      {
        id: "ai_a20",
        question: "Explain the difference between FlashAttention and standard attention.",
        answer: "Standard attention has $O(N^2)$ memory and time complexity, bottlenecked by GPU High Bandwidth Memory (HBM) read/writes. **FlashAttention** reorganizes the attention calculation to work in blocks using GPU SRAM. It utilizes online softmax calculations to compute attention without writing the intermediate $N \\times N$ attention matrix back to HBM, speeding up training by 2-4x."
      }
    ]
  }
};
