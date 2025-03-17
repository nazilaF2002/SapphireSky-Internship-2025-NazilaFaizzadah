// ------------------------------------------ 5 -------------------------------
// Triangel Validity

function isTriangel(s1,s2,s3){
    if(s1+s2>s3 && s1+s3>s2 && s2+s3>s1){
        console.log('valid triangel');
    }
    else{
        console.log('invalid triangel');
    }
};
isTriangel(5,4,3);
isTriangel(3,2,1);

// ------------------------------------- 6 -----------------------------------
// speeding ticket calculator

function checkSpeed(speed){
    if(speed <= 60 ){
        console.log('Good job! your speed is normal');
    }
    else if (speed > 60 && speed <=100){
        console.log('your speed is not normal so you should pay fine!');
    }
    else{
        console.log('you are too fast so you should pay double fine!');
    };
};
checkSpeed(55);
checkSpeed(80);
checkSpeed(105);

// ---------------------------------------- 7 ---------------------------------
// ATM Withdrawal

function withdrawal(amount){
    let totalAmout=200000;
    if(amount %10 == 0 && amount <= totalAmout){
        console.log(`you withdrawaled ${amount} successfully!`);
    }
    else if(amount %10 != 0 && amount <= totalAmout){
        console.log('your amount is not valid! it should be a multiple of 10.');
    }
    else{
        console.log('your money is not enough!');
    }
};
withdrawal(300000000000);
withdrawal(30000);
withdrawal(3001);