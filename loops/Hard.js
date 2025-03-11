// using readline for taking input from user in the terminal
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// ----------------------------------- 11 ------------------------------
// armstrong number

function armstrongChecker(number){
    let total=0;
    let originalNum=number;
    let digitCount=number.toString().length;
    while(number>0){
        let lastNumber=Math.floor(number%10);
        total+=(Math.pow(lastNumber,digitCount));
        number=Math.floor(number/10);
    };
    if(total === originalNum){
        return true;
    }
    else{
        return false;
    }; 
};
console.log(armstrongChecker(153));
console.log(armstrongChecker(123));

// ----------------------------------------------- 12 -------------------------------------------
// Collatz Sequence (Hailstone Numbers)

function collatz(number){
    let count=0;
    while(number > 1){
        if(number%2 === 0){
            number=number/2;
            count++;
        }
        else{
            number=number*3+1;
            count++;
        };
    };
    return count;
};
console.log(collatz(6));
console.log(collatz(10));

// ------------------------------------- 13 --------------------------------------
//  Find GCD (Greatest Common Divisor) 

function findGCD(num1,num2){
    let greatestNumber = num1 > num2 ? num1 : num2;
    let smallestNumber = num1 < num2 ? num1 : num2;    
     while(greatestNumber%smallestNumber !== 0){
         remainder=greatestNumber%smallestNumber;
         greatestNumber=smallestNumber;
         smallestNumber=remainder;
     }
     return remainder;
};
console.log('GCD IS : ',findGCD(18,48));


// --------------------------------------- 14 -------------------------------------
/*
 Pattern Printing - Pyramid 
Write a program that prints this pattern for N = 5: 
markdown 
CopyEdit 
        *   
       ***   
      *****   
     ******* 
*/

function makePyramid(n){
    for(let i=1; i<n; i++){
        let line='';
        for(let j=1; j<=n-i; j++){
            line+=' ';
        };
        for(let k=1; k<= 2*i-1; k++){
            line+='*'
        };
        console.log(line);
        ;
    };
};
makePyramid(5);

// ------------------------------------------- 15 -------------------------------------------
// Number Guessing Game 
/*
- The program randomly selects a number between 1 and 100. 
- The user must guess the number. 
- The program gives hints like "Too High" or "Too Low".
- The loop continues until the user guesses correctly. 
*/
let random= Math.floor(Math.random()*100+1);
console.log('random number',random);
console.log('guess the number between 1-100');
function guessNumber(){
  rl.question('Enter the number : ',function(num){
     num=parseInt(num);
     while(num !== random){
        if(num>random){
            console.log('Too high');
        }
        else if(num<random){
            console.log('Too low');
        }
        return guessNumber();
     }
     console.log('congrats you guessed correctly ');
     rl.close();
  });
};
guessNumber();




