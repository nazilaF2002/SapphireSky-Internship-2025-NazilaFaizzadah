// using readline for getting input from terminal
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ------------------------------------------------ 6 ---------------------------------------------
// Student Grade System
//  Take a student's score (0-100).
//  Use switch to assign a letter grade (A, B, C, D, F).

function gradeStudents(score) {
    let isScoreAvailble = score > 100 || score < 0 ? false : true;
    let grade = '';
    switch (isScoreAvailble) {
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80:
            grade = 'B';
            break;
        case score >= 70:
            grade = 'C';
            break;
        case score >= 60:
            grade = 'D';
            break;
        case score >= 50:
            grade = 'F';
            break;
        default:
            grade = 'failed';
    };
    return grade;
};
console.log(gradeStudents(100));

// ------------------------------------------------ 7 ---------------------------------------------
//  Currency Converter
//  Take a currency code ("USD", "EUR", "INR", "JPY").
//  Use switch to print the conversion rate relative to a base currency (e.g., USD).

function currencyConventor(amount, code) {
    let x = (amount, code) ? true : false;
    let afg = 0;
    switch (x) {
        case code == 'USD':
            afg = `${amount * 70} Afg`;
            break;
        case code == 'EUR':
            afg == `${amount * 76} Afg`;
            break;
        case code == 'INR':
            afg = `${amount * 0.8.toFixed(2)} Afg`;
            break;
        case code == 'JPY':
            afg = `${(amount * 0.47).toFixed(2)} Afg`;
            break;
    };
    return afg;
};
console.log(currencyConventor(5,'INR'));
console.log(currencyConventor(5,'JPY'));

// ------------------------------------------------ 8 ---------------------------------------------
// Menu-Based ATM System 
// Display a menu with options: 
// 1 → Check Balance 
// 2 → Withdraw Money 
// 3 → Deposit Money 
// 4 → Exit
let totalAmount = 20000;
function atmSystem() {
    console.log('\nATM Menu');
    console.log('1 - Check Balance');
    console.log('2 - Withdraw Money');
    console.log('3 - Deposit Money');
    console.log('4 - Exit');
    rl.question('Choose your option: ', (option) => {
        switch (option) {
            case '1':
                console.log(`Your total balance is: ${totalAmount} AFG`);
                atmSystem();
                break;
            case '2':
                rl.question('Enter amount to withdraw: ', (withdrawAmount) => {
                    withdrawAmount = Number(withdrawAmount);
                    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
                        console.log('Invalid amount. Please enter a valid number.');
                    } else if (withdrawAmount > totalAmount) {
                        console.log('Insufficient funds!');
                    } else {
                        totalAmount -= withdrawAmount;
                        console.log(`You withdrew ${withdrawAmount} AFG. Your remaining balance is ${totalAmount} AFG.`);
                    }
                    atmSystem();
                });
                break;
            case '3':
                rl.question('Enter amount to deposit: ', (depositAmount) => {
                    depositAmount = Number(depositAmount);
                    if (isNaN(depositAmount) || depositAmount <= 0) {
                        console.log('Invalid amount. Please enter a valid number.');
                    } else {
                        totalAmount += depositAmount;
                        console.log(`You deposited ${depositAmount} AFG. Your new balance is ${totalAmount} AFG.`);
                    }
                    atmSystem();
                });
                break;
            case '4':
                console.log('Exiting... Thank you for using our ATM!');
                rl.close();
                break;
            default:
                console.log('Invalid option. Please choose a valid option.');
                atmSystem();
                break;
        }
    });
}
// atmSystem();

// ------------------------------------------------ 9 ---------------------------------------------
// Determine Season by Month 
// Take an integer (1-12) as input. 
//  Use switch to print the corresponding season: 
//  12, 1, 2 → Winter 
//  3, 4, 5 → Spring 
//  6, 7, 8 → Summer 
//  9, 10, 11 → Fall 

function seasons() {
    rl.question('Enter the month (1-12): ', (month) => {
        let season = '';
        switch (month) {
            case '12': 
            case '1': 
            case '2':
                season = 'Winter';
                break;
            case '3': 
            case '4': 
            case '5':
                season = 'Spring';
                break;
            case '6': 
            case '7': 
            case '8':
                season = 'Summer';
                break;
            case '9': 
            case '10': 
            case '11':
                season = 'Fall';
                break;
            default:
                season = 'Invalid number. Please enter a number between 1 and 12.';
        }

        console.log(`Season: ${season}`);
        rl.close(); 
    });
}
// seasons();

// ------------------------------------------------ 10 ---------------------------------------------
// Rock, Paper, Scissors Game 
//  The user inputs "rock", "paper", or "scissors". 
//  The computer randomly selects one. 
//  Use switch to determine the winner.

function game() {
    let items = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * items.length);
    let randomItem = items[randomIndex];
    rl.question('Enter rock, paper, or scissors: ', (item) => {
        let winner = '';
        switch (item.toLowerCase()) {
            case 'rock':
                winner = (randomItem === 'paper') ? 'Random item is paper, so you lose!' :
                    (randomItem === 'scissors') ? 'Random item is scissors, so you win!' :
                        'It\'s a tie!';
                break;
            case 'scissors':
                winner = (randomItem === 'rock') ? 'Random item is rock, so you lose!' :
                    (randomItem === 'paper') ? 'Random item is paper, so you win!' :
                        'It\'s a tie!';
                break;
            case 'paper':
                winner = (randomItem === 'scissors') ? 'Random item is scissors, so you lose!' :
                    (randomItem === 'rock') ? 'Random item is rock, so you win!' :
                        'It\'s a tie!';
                break;
            default:
                winner = 'Invalid item! Please enter rock, paper, or scissors.';
          }
        console.log(`Computer chose: ${randomItem}`);
        console.log(winner);

        rl.close();
       
    });
};
game();