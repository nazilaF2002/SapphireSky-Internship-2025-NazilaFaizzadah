// --------------------------------- 8 ---------------------------------------
// body mass index BMI calculator

function bmiCalculator(w,h){
    let bmi = w/(h*h);
    if(bmi < 18.5){
        console.log('you are underweight');
    }
    else if ( bmi >= 18.5 && bmi < 25){
        console.log('you have normal weight');
    }
    else if ( bmi >= 25 && bmi < 30){
        console.log('you are overweight');
    }
    else if(bmi >= 30){
        console.log('your are obese');
        
    };
};

bmiCalculator(120,1.70);

// ----------------------------------------- 9 ----------------------------------
// electricity bill calculator 

function billCalculator(units){
    let totalAmout=0;
    if(units>500){
        totalAmout+=(units-500)*1.50;
        units=500;
    }
    if(units>200){
        totalAmout+=(units-200)*1.20;
        units=200;
    }
    if(units>100){
        totalAmout+=(units-100)*0.75;
        units=100;
    }
    if(units<=100){
        totalAmout+=units*0.50;
    }
    return `your total amount is ${totalAmout}` ;
};
console.log(billCalculator(150));


// ----------------------------------------------- 10 ----------------------------------
// password strength checker

function checkPassword(password){
    if(password.length > 8){
       if(password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) ){
        console.log('strong password');
       }
       else{
        console.log('weak password');
       }
    }
    else{
        console.log('your password should be at least 8 characters');
        
    };
};
checkPassword('lfjs3lsjF');