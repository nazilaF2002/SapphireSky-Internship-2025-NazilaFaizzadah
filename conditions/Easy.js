// ---------------------------------------- 1 ---------------------------------------
// Check odd or even

function oddOrEven(number){
 if(number%2 == 0){
    console.log('the number is even');
 }
 else{
    console.log('the number is odd');
 }
};
oddOrEven(25);
oddOrEven(250);

// ---------------------------------------------- 2 ----------------------------------
// Grade calculator

function gradeCalculator(grade){
    if (grade >= 90 && grade <= 100){
        console.log('grade A');
    }
    else if(grade >= 80 && grade <=89){
        console.log('grade B');
    }
    else if(grade >= 70 && grade <=79){
        console.log('grade C');
    }
    else if(grade >= 60 && grade <=69){
        console.log('grade D');
    }
    else if(grade < 60){
        console.log('grade F');
    }
    else{
        console.log('your number should be in range of (1-100)');
    }
};

oddOrEven(90);
oddOrEven(150);

// ------------------------------------------ 3 ----------------------------------
// Minimum of two numbers

function findMinimum(num1,num2){
    if(num1<num2){
        console.log(`number ${num1} is smaller than number ${num2}`);
    }
    else if(num2<num1){
        console.log(`number ${num2} is smaller than number ${num1}`);
    }
    else{
        console.log('both numbers are equal');
    }
};
findMinimum(2,3);
findMinimum(5,1);
findMinimum(6,6);

// --------------------------------------------------- 4 ----------------------------------
// Leap Year checker

function leapYear(year){
    if (year % 4 == 0 && year%100 != 0 || year % 100 == 0 && year % 400 == 0){
        console.log('this is a leap year');
    }
    else{
        console.log('thia is not a leap year');
    }
};
 leapYear(2024);
 leapYear(2100);


