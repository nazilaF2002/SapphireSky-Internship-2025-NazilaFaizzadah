// ---------------------------------  1 -----------------------------------
// Convert Celsius to Fahrenheit 
// F=(C×9/5)+32
function celsiusToFahrenheit(celsius){
  let F=celsius*(9/5)+32;
  console.log(F);
};
celsiusToFahrenheit(25);

// --------------------------------- 2 --------------------------------------
//  Find the Maximum of Three Numbers 
function maxOfThree(a,b,c){
    let maxNumber;
    if(a>b && a>c){
        maxNumber=a;
    }
    else if(b>a && b>c){
        maxNumber=b;
    }
    else{
        maxNumber=c;
    };
    return maxNumber;
};
console.log('max number is ',maxOfThree(15,8,9));

// ------------------------------------------- 3 ----------------------------------
// Check Even or Odd 
function isEven(number){
    if(number%2 === 0){
        return true;
    }
    else{
        return false;
    };
};
console.log('is even : ',isEven(5));

// ------------------------------------------ 4 --------------------------------------
// Count Vowels in a String 

function countVowels(str){
    let count=0;
    for(let i=0; i<str.length; i++){
        let char = str[i].toLowerCase();
        if(char == 'a' || char== 'e' || char == 'i' || char == 'o' || char == 'u'){
            count++
        };
    };
    return count;
};
console.log(countVowels('elaajls'));

// ------------------------------------------ 5 --------------------------------------
// Reverse a String 

function reverseString(str){
    let revers='';
    let originalStr=str;
    for(let i=str.length-1; i>=0; i--){
      revers+=str[i];
    };
    return `reverse of ${originalStr} is ${revers}`;
};
console.log(reverseString('hello'));

