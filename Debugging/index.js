// --------------------------------------------- 1 ---------------------------------------------------
// What are the different types of errors in JavaScript? 

// 1. SyntaxError 
// 2. ReferenceError  
// 3. TypeError  
// 4. RangeError  
// 5. EvalError 
// 6. URIError 


// --------------------------------------------- 2 ---------------------------------------------------
//  How can you debug a JavaScript program in the browser? 

// 1. Using console.log() 
// 2. Using debugger Statement 
// 3. Setting Breakpoints 
// 4. Inspecting Variables in DevTools 
// 5. Using Console Commands – like :  console.log(), console.table(), console.error(), console.warn() 
// 6. Checking Network Requests 
// 7. Using the Call Stack 


// --------------------------------------------- 3 ---------------------------------------------------
// What is the use of console.log(), and how can it help in debugging? 

// console.log() is a JavaScript function that prints messages, variables, or objects in the browser’s console. It helps developers see what's happening inside their code.
// How Does It Help in Debugging?
// When our program isn’t working, console.log() helps us.
// 1- Check values of variables at different points in the code.
// 2- See if a function is being called and what it returns.
// 3- Find errors by printing step-by-step execution.
// 4- Understand the flow of execution in loops and conditions.


// --------------------------------------------- 4 ---------------------------------------------------
// Explain the purpose of try...catch in JavaScript. 

// try...catch is a JavaScript error-handling mechanism that allows us to catch and handle errors
// in our code without stopping the entire program.
// Purpose of try...catch:
// 1- Prevents the program from crashing when an error occurs.
// 2- Allows custom error handling (e.g., showing a user-friendly message).
// 3- Used to handle unpredictable issues (e.g., API failures, invalid inputs).


// --------------------------------------------- 5 ---------------------------------------------------
// How do breakpoints help in debugging JavaScript code? 

// A breakpoint is a marker we set in our code where execution pauses so we can inspect variables, 
// check function calls, and step through the program line by line.
//  Why Are Breakpoints Useful?
// 1- Pause Execution – Stops the code at a specific point.
// 2- Inspect Variables – Check values of variables at runtime.
// 3- Step Through Code – Run the code one line at a time to find bugs.
// 4- Avoid Excessive console.log() – Instead of printing values, you can see them directly in DevTools


// --------------------------------------------- 6 ---------------------------------------------------
// What is the difference between throw and console.error()? 


// 1- Execution Behavior:
// throw stops execution unless caught with try...catch.
// console.error() logs an error but does not stop execution.
// 2️- Error Handling:
// throw must be used inside try...catch to prevent crashes.
// console.error() does not require try...catch.
// 3️- Use Case:
// throw is used for critical errors that should halt execution.
// console.error() is used for warnings or debugging messages.
// 4️- Effect on Program:
// throw causes an uncaught error if not handled.
// console.error() just prints an error message in the console.


// --------------------------------------------- 7 ---------------------------------------------------
// Write a program that intentionally throws an error and catches it using try...catch.

function checkAge(age) {
    if (age < 18) {
      throw new Error("You must be at least 18 years old!");
    }
    return "Access granted!";
  }
  try {
    let result = checkAge(16); 
    console.log(result);
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
  console.log("Program continues..."); // This will still run
  

// --------------------------------------------- 8 ---------------------------------------------------
// How can debugger be used in JavaScript?

// The debugger statement pauses JavaScript execution at a specific point, allowing you to inspect variables, step through code, and find errors easily.
// You can insert debugger; anywhere in your code. When JavaScript reaches it, execution pauses (if DevTools is open).
function calculateSum(a, b) {
  let sum = a + b;
  debugger;  // Execution stops here if DevTools is open
  return sum;
}
console.log(calculateSum(5, 3));

// --------------------------------------------- 9 ---------------------------------------------------
// What is stack trace, and how can it help in debugging? 

// A stack trace is a list of function calls that shows the exact execution path when an error occurs. It helps developers identify where the error happened and how the code reached that point.  
// 1- Shows the exact function call path leading to the error.
// 2- Helps locate bugs quickly by pointing to the file and line number.
// 3- Useful for deep function calls when debugging complex applications


// --------------------------------------------- 10 ---------------------------------------------------
// What are some best practices for writing bug-free JavaScript code? 

// 1- Use Descriptive Variable and Function Names
// 2- Declare Variables Properly with let, const, or var
// 3- Avoid Global Variables
// 4- Use Strict Mode ('use strict')
// 5- Write Modular, Reusable Code
// 6- Avoid Using eval()
// 7- Thoroughly Test Your Code
// 8- Use Debugging Tools Effectively
// 9- Handle Errors Properly with try...catch
// 10- Keep Your Code DRY (Don't Repeat Yourself)
// 11- Follow Consistent Code Style and Formatting
// 12- Use Version Control (Git)
// 13- Avoid Magic Numbers and Strings
// 14- Keep Dependencies Updated
// 15- Document Your Code
