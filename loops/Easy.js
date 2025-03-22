// --------------------------------------- 1 ---------------------------------
// print numbers from 1 to 100
let str='';
for(let i=1; i<=100; i++){
    str+= `${i} `;
};
console.log(str);


// ----------------------------------- 2 -------------------------------------
// sum of first N natural Numbers

function sum(number){
    let total=0;
    for(let i=1; i<=number; i++){
        total+=i;
    }
   return total;
}
console.log(sum(3));

// ----------------------------------- 3 -------------------------------------
// Multiplication table
 
function multiplication(n){
    for(let i=1; i<=10; i++){
        console.log(`${i} * ${n} = ${i*n}`);
    }
};
console.log(multiplication(3));

// ------------------------------------- 4 ----------------------------------------
// reverse a Number

function reverseNumber(number){
    let revers=0;
    while(number>0){
        let lastIndex=number%10;
        revers=revers*10+lastIndex;
        number=Math.floor(number/10);
    }
    return revers
};
console.log(reverseNumber(1234));



// ----------------------------------------- 5 --------------------------------------
// count digits in a number

function countDigit(number){
    let count=0;
    while(number>0){
        number=Math.floor(number/10);
        count++;
    }
    return count;
};
console.log(countDigit(12388797));




