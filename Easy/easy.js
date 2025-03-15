// ------------------------------------------ 1 -----------------------------------
// Day of the Week 

const days=(n)=> {
    switch(n){
        case 1:
            console.log('Saturday');
        break; 
        case 2:
            console.log('Sunday');
        break;
        case 3:
            console.log('Monday');
        break;
        case 4:
            console.log('Tuesday');
        break;
        case 5:
            console.log('Wednesday');
        break;
        case 6:
            console.log('Thursday');
        break;
        case 7:
            console.log('Friday');
        break;
        default:
            console.log('invalid number please enter a number in range of (1-7)');
    }
};
days(7);

// ------------------------------------------ 2 -----------------------------------
// Simple Calculator

const calculator=(n1,n2,operand)=>{
   let result=0;
    switch(operand){
        case '+':
           result=n1+n2;
        break;
        case '-':
            result=n1-n2;
        break;
        case '*':
            result=n1*n2;
        break;
        case '/':
            result=n1/n2;
        break;
        default:
            result = 'invalid operand or order you can do this calculations ( +,-,*,/) by this order (num1,num2,operand)'
    };
    return result;
};
console.log(calculator(2,3,'-'));


// ------------------------------------------ 3 -----------------------------------
// Traffic Light System 
const trafficLight=(color)=>{
     switch(color.toLowerCase()){
         case 'red':
           console.log('Stop');
         break;
         case 'yellow':
            console.log('Stop');
         break;
         case 'green':
            console.log('Stop');
         break;
         default:
            console.log('invalid color');
     };
 };
 trafficLight("Red")


// ------------------------------------------ 4 -----------------------------------
// Month Name and Days 
const months=(n)=> {
    switch(n){
        case 1:
            console.log('the month is January that has 31 days');
        break; 
        case 2:
            console.log('the month is February that has 28 days');
        break;
        case 3:
            console.log('the month is March that has 31 days');
        break;
        case 4:
            console.log('the month is April that has 30 days');
        break;
        case 5:
            console.log('the month is May that has 31 days');
        break;
        case 6:
            console.log('the month is June that has 30 days');
        break;
        case 7:
            console.log('the month is July that has 31 days');
        break;
        case 8:
            console.log('the month is August that has 31 days');
        break;
        case 9:
            console.log('the month is September that has 30 days');
        break;
        case 10:
            console.log('the month is October that has 31 days');
        break;
        case 11:
            console.log('the month is November that has 31 days');
        break;
        case 12:
            console.log('the month is December that has 31 days');
        break;
        default:
            console.log('invalid number please enter a number in range of (1-12)');
    }
};
months(3);

// ------------------------------------------ 5 -----------------------------------
// Check for Vowel or Consonant 

const checkVowel=(letter)=>{
    switch(letter.toLowerCase()){
        case 'a':
        case 'e':
        case 'i':
        case 'o': 
        case 'u':
            console.log('vowel');
            break;      
        default:
           console.log('Consonant');
    };
};
checkVowel('b')

