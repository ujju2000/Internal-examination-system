const dbmsQuestions = [
    {
      question: "What is a DBMS?",
      choices: [
        "a) Database Management System",
        "b) Data Backup and Management System",
        "c) Data Business Management System",
        "d) Database Maintenance System"
      ],
      answer: "a"
    },
    {
      question: "Which of the following is not a type of database model?",
      choices: ["a) Relational model", "b) Hierarchical model", "c) Network model", "d) Flat model"],
      answer: "d"
    },
    {
      question: "What is the primary key in a relational database?",
      choices: [
        "a) A key that uniquely identifies each record in a table",
        "b) A key that is used to order records in a table",
        "c) A key that is used to join multiple tables",
        "d) A key that is used to index records in a table"
      ],
      answer: "a"
    },
    {
      question: "Which SQL keyword is used to retrieve data from a database?",
      choices: ["a) SELECT", "b) INSERT", "c) DELETE", "d) UPDATE"],
      answer: "a"
    },
    {
      question: "Which type of join returns only the matching records from both tables?",
      choices: ["a) INNER JOIN", "b) LEFT JOIN", "c) RIGHT JOIN", "d) FULL JOIN"],
      answer: "a"
    },
    {
      question: "What is the purpose of the GROUP BY clause in SQL?",
      choices: [
        "a) It is used to filter records based on a condition.",
        "b) It is used to sort records in ascending order.",
        "c) It is used to perform calculations on numeric columns.",
        "d) It is used to group records based on a column."
      ],
      answer: "d"
    },
    {
      question: "Which of the following is not a transaction property of ACID?",
      choices: [
        "a) Atomicity",
        "b) Consistency",
        "c) Isolation",
        "d) Durability"
      ],
      answer: "b"
    },
    {
      question: "What is the purpose of an index in a database?",
      choices: [
        "a) It is used to optimize database performance.",
        "b) It is used to create backup copies of data.",
        "c) It is used to enforce data integrity constraints.",
        "d) It is used to define relationships between tables."
      ],
      answer: "a"
    },
    {
      question: "What is the purpose of a foreign key in a relational database?",
      choices: [
        "a) It is used to uniquely identify records in a table.",
        "b) It is used to establish relationships between tables.",
        "c) It is used to store large binary data.",
        "d) It is used to define primary key constraints."
      ],
      answer: "b"
    },
    {
      question: "What is the purpose of the COMMIT statement in SQL?",
      choices: [
        "a) It is used to add new records to a table.",
        "b) It is used to delete records from a table.",
        "c) It is used to save changes permanently to a database.",
        "d) It is used to roll back changes made in a transaction."
      ],
      answer: "c"
    }
  ];

  
  const cppQuestions = [
    {
      question: "What is the output of the following code snippet?",
      choices: ["a) Hello", "b) World", "c) Hello World", "d) Compilation error"],
      answer: "c"
    },
    {
      question: "Which of the following is the correct syntax to declare a class in C++?",
      choices: ["a) class MyClass", "b) MyClass class", "c) class = MyClass", "d) MyClass()"],
      answer: "a"
    },
    {
      question: "What is the default access specifier for members of a class in C++?",
      choices: ["a) public", "b) private", "c) protected", "d) It depends on the member"],
      answer: "b"
    },
    {
      question: "Which keyword is used to allocate memory for dynamic objects in C++?",
      choices: ["a) new", "b) malloc", "c) alloc", "d) allocate"],
      answer: "a"
    },
    {
      question: "Which of the following is not a valid storage class in C++?",
      choices: ["a) auto", "b) static", "c) register", "d) constant"],
      answer: "d"
    },
    {
      question: "What is the purpose of the 'this' pointer in C++?",
      choices: [
        "a) It refers to the current object.",
        "b) It points to the base class in a derived class.",
        "c) It holds the memory address of a variable.",
        "d) It is used to access static members."
      ],
      answer: "a"
    },
    {
      question: "Which of the following is the correct way to define a constructor in C++?",
      choices: [
        "a) void constructor()",
        "b) MyClass constructor()",
        "c) constructor()",
        "d) MyClass()",
      ],
      answer: "d"
    },
    {
      question: "What is the purpose of the 'virtual' keyword in C++?",
      choices: [
        "a) It defines a base class for inheritance.",
        "b) It declares a variable with variable-length.",
        "c) It specifies that a function can be overridden in derived classes.",
        "d) It specifies a constant value."
      ],
      answer: "c"
    },
    {
      question: "What is the result of the following expression: 5 / 2?",
      choices: ["a) 2.5", "b) 2", "c) 2.0", "d) 2.5 (rounded down)"],
      answer: "b"
    },
    {
      question: "What is the purpose of the 'try-catch' block in C++?",
      choices: [
        "a) It is used to handle exceptions.",
        "b) It is used to define a loop.",
        "c) It is used to declare variables.",
        "d) It is used to include header files."
      ],
      answer: "a"
    }
  ];
  
  const cQuestions = [
    {
      question: "What is the output of the following code snippet?",
      choices: ["a) Hello", "b) World", "c) Hello World", "d) Compilation error"],
      answer: "c"
    },
    {
      question: "Which of the following is not a valid data type in C?",
      choices: ["a) int", "b) float", "c) char", "d) boolean"],
      answer: "d"
    },
    {
      question: "What is the size of the 'int' data type in C?",
      choices: ["a) 2 bytes", "b) 4 bytes", "c) 8 bytes", "d) It varies depending on the system"],
      answer: "b"
    },
    {
      question: "What is the correct way to declare a variable in C?",
      choices: ["a) variable int;", "b) int = variable;", "c) int variable;", "d) int; variable;"],
      answer: "c"
    },
    {
      question: "What is the purpose of the 'scanf' function in C?",
      choices: [
        "a) It prints formatted output to the console.",
        "b) It reads input from the user.",
        "c) It performs arithmetic calculations.",
        "d) It executes a block of code repeatedly."
      ],
      answer: "b"
    },
    {
      question: "Which symbol is used for single-line comments in C?",
      choices: ["a) //", "b) /*", "c) */", "d) #"],
      answer: "a"
    },
    {
      question: "What is the result of the following expression: 10 % 3?",
      choices: ["a) 3", "b) 1", "c) 0", "d) 10"],
      answer: "b"
    },
    {
      question: "What is the purpose of the 'sizeof' operator in C?",
      choices: [
        "a) It returns the size of a variable or data type in bytes.",
        "b) It performs a logical NOT operation.",
        "c) It checks if two values are equal.",
        "d) It converts a value to another data type."
      ],
      answer: "a"
    },
    {
      question: "Which of the following is not a valid loop construct in C?",
      choices: ["a) for", "b) while", "c) do-while", "d) foreach"],
      answer: "d"
    },
    {
      question: "What is the purpose of the 'break' statement in C?",
      choices: [
        "a) It terminates the program execution.",
        "b) It skips the current iteration of a loop.",
        "c) It transfers control to a labeled statement.",
        "d) It outputs a message to the console."
      ],
      answer: "b"
    }
  ];

  
  const javaQuestions = [
    {
      question: "What is the output of the following code snippet?",
      choices: ["a) 5", "b) 6", "c) 4", "d) Compilation error"],
      answer: "b"
    },
    {
      question: "Which of the following is not a primitive data type in Java?",
      choices: ["a) int", "b) boolean", "c) float", "d) String"],
      answer: "d"
    },
    {
      question: "What is the correct way to declare a constant variable in Java?",
      choices: [
        "a) final int MAX_VALUE = 100;",
        "b) const int MAX_VALUE = 100;",
        "c) static final int MAX_VALUE = 100;",
        "d) constant int MAX_VALUE = 100;"
      ],
      answer: "a"
    },
    {
      question: "What is the result of the following code snippet?",
      choices: ["a) true", "b) false", "c) It will not compile", "d) It will throw an exception"],
      answer: "a"
    },
    {
      question: "What is the purpose of the `finally` block in a try-catch-finally statement?",
      choices: [
        "a) It is executed only if an exception is thrown.",
        "b) It is executed regardless of whether an exception is thrown or not.",
        "c) It is executed before the catch block.",
        "d) It is executed after the catch block."
      ],
      answer: "b"
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      choices: ["a) extends", "b) implements", "c) inherits", "d) extends/implements"],
      answer: "a"
    },
    {
      question: "What is the correct syntax for creating an array in Java?",
      choices: [
        "a) int[] arr = new int[5];",
        "b) int arr = new int[5];",
        "c) int[] arr = new int[] {1, 2, 3, 4, 5};",
        "d) int arr[] = new int[5];"
      ],
      answer: "a"
    },
    {
      question: "What is the default value of an uninitialized variable of type `int` in Java?",
      choices: ["a) 0", "b) 1", "c) -1", "d) null"],
      answer: "a"
    },
    {
      question: "What is the purpose of the `static` keyword in Java?",
      choices: [
        "a) It is used to create an object of a class.",
        "b) It is used to make a variable or method belong to the class, rather than an instance of the class.",
        "c) It is used to restrict access to a class or method.",
        "d) It is used to indicate that a class cannot be extended."
      ],
      answer: "b"
    },
    {
      question: "Which of the following is not a valid access modifier in Java?",
      choices: ["a) public", "b) private", "c) protected", "d) global"],
      answer: "d"
    }
  ];
  

export {dbmsQuestions, cppQuestions, cQuestions,javaQuestions};
