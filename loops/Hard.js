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

function Collatz(number){
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
console.log(Collatz(6));
console.log(Collatz(10));

// ------------------------------------- 13 --------------------------------------
// convert decimal to binary



