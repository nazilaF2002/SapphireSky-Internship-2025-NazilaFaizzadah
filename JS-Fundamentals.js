// ----------------------------------------- 1 ---------------------------------------------
// what is the difference between var,let and const in JS?

/* var doesn't have scope ,let and const are deffined in JS6 
and both of them have scopte but the difference is here 
 that we can change the value of let but not const.*/

// ----------------------------------------- 2 ---------------------------------------------
// write a function to check if a number is even or odd 

function odd_or_even(number){
    if(number%2 == 0){
        console.log('the number is even');
    }
    else{
        console.log('the number is odd');
    }
}
//  calling function in both types
odd_or_even(5);
odd_or_even(6);

// ----------------------------------------- 3 ---------------------------------------------
// explain the difference between == and === in JS.
// both of them check equality but the difference is here that === check data type as well

// ----------------------------------------- 4 ---------------------------------------------
// write a programe that takes user input and prints whether it is a positive ,negative or zero.
function checkNumbers(number){
    if(number > 0){
        console.log('the number is positive');
    }
    else if(number < 0){
        console.log('the number is negative');
    }
    else{
        console.log('the number is zero');
    }
}
// calling the function in three types
checkNumbers(3)
checkNumbers(0)
checkNumbers(-2)

// ----------------------------------------- 5 ---------------------------------------------
// what are JS closure? provide an example.

/*
 it mean that when we have two functions that one function is defined inside of another function 
 the inner function has access to the outer funtion variable 
 EX: function outer(){
      let x=5;
      return funtion inner(){
       log(x)
      }
    }
this is just one jusage of that but it has different usages and I need your help for better understanding

*/



// ----------------------------------------- 6 ---------------------------------------------
// write a function that calculates the factorial of a given number.

function findFactorial(number){
    let factorial=1;
    for(let i=1; i<=number; i++){
      factorial*=i;
    }
    return factorial;
}
console.log(findFactorial(5));

// ----------------------------------------- 7 ---------------------------------------------
// how does this keyword work in JS? provide an example.

/* overall I think this,point for that methode or variable that is defined in that scope or class but when 
  I searched about that I found that it had four main rules but I got confuse and need your help for 
  better understanding */

// ----------------------------------------- 8 ---------------------------------------------
// explain the concept of hoisting in JS.

/* 
 it mean that functions and variable transfer virtually to the top of our file and we are able to use them
 befor define them but it is not the same for all the functions and variable it mean if we log a variable with
 var befor its definition it will return undefined but it our variable was defined with const and let it will
 returnand error also the same for our different kind of functions if it be function decleration it will work
 correctlybut if we use arrow function or function expression it wont work and will return undefined if we
 defined it with varand an error if we defined it with let or const.
*/

// ----------------------------------------- 9 ---------------------------------------------
// write a functin to find the sum of all numbers in an array.

function sumNumbers(arr){
    let sum=0;
 for(let i=0; i < arr.length ; i++ ){
    sum+=arr[i];
 }
 return sum;
};
console.log(sumNumbers([1,2,3]));

// ----------------------------------------- 10 ---------------------------------------------
// what are arrow functions in JS ,and how are they different from regular functions?

/* 
arrow functions are new that had defined in JS6 they are shorter and don't have function keyword
in the we define them in a variable the is our function name and call our functin by that variable name
we use and arrow sing in them and if our body function be short like one line of code there is no need for {}
brakets 
EX: const sum= (num1,num2) => return num1+num2;
  console.log(sum(5,6));
*/
