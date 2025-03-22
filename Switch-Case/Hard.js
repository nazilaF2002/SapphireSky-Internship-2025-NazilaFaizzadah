// ------------------------------------------------ 11 ---------------------------------------------
// Roman Numeral Converter 
//  Take an integer (1-10) as input. 
//  Use switch to print the corresponding Roman numeral. 
function convertToRoman(num) {
    switch (num) {
        case 1: return "I";
        case 2: return "II";
        case 3: return "III";
        case 4: return "IV";
        case 5: return "V";
        case 6: return "VI";
        case 7: return "VII";
        case 8: return "VIII";
        case 9: return "IX";
        case 10: return "X";
        default: return "number should be between 1-10";
    }
}
console.log(convertToRoman(5)); 
console.log(convertToRoman(9)); 

// ------------------------------------------------ 12 ---------------------------------------------
//  Zodiac Sign Finder 
//  Take a birth month and day. 
//  Use switch to determine the person's zodiac sign.
function getZodiacSign(month, day) {
    switch (month) {
        case 1:
            return (day <= 19) ? "Capricorn" : "Aquarius";
        case 2:
            return (day <= 18) ? "Aquarius" : "Pisces";
        case 3:
            return (day <= 20) ? "Pisces" : "Aries";
        case 4:
            return (day <= 19) ? "Aries" : "Taurus";
        case 5:
            return (day <= 20) ? "Taurus" : "Gemini";
        case 6:
            return (day <= 20) ? "Gemini" : "Cancer";
        case 7:
            return (day <= 22) ? "Cancer" : "Leo";
        case 8:
            return (day <= 22) ? "Leo" : "Virgo";
        case 9:
            return (day <= 22) ? "Virgo" : "Libra";
        case 10:
            return (day <= 22) ? "Libra" : "Scorpio";
        case 11:
            return (day <= 21) ? "Scorpio" : "Sagittarius";
        case 12:
            return (day <= 21) ? "Sagittarius" : "Capricorn";
        default:
            return "Invalid month!";
    }
}
console.log(getZodiacSign(3, 15)); 
console.log(getZodiacSign(7, 25));  
console.log(getZodiacSign(12, 5));
// ------------------------------------------------ 13 ---------------------------------------------
// Discount System Based on Membership 
//  Input membership type ("Gold", "Silver", "Bronze"). 
//  Use switch to apply different discount rates on a purchase.
function applyDiscount(membershipType, purchaseAmount) {
    let discount = 0;

    switch (membershipType) {
        case "Gold":
            discount = 0.20; // 20% discount
            break;
        case "Silver":
            discount = 0.10; // 10% discount
            break;
        case "Bronze":
            discount = 0.05; // 5% discount
            break;
        default:
            return "Invalid membership type!";
    }
    let discountedPrice = purchaseAmount - (purchaseAmount * discount);
    return `Your discount is ${discount * 100}%. The total after discount is $${discountedPrice.toFixed(2)}.`;
}
console.log(applyDiscount("Gold", 100));  
console.log(applyDiscount("Silver", 200)); 
console.log(applyDiscount("Bronze", 50));  
console.log(applyDiscount("Platinum", 150)); 

// ------------------------------------------------ 14 ---------------------------------------------
// Automated Toll Booth System 
//  Take a vehicle type ("Car", "Truck", "Bike") as input. 
//  Use switch to determine the toll fee.
function calculateTollFee(vehicle) {
    switch (vehicle.toLowerCase()) {
      case "car":
        return "$5";
      case "truck":
        return "$10";
      case "bike":
        return "$2";
    };
  };
  console.log(calculateTollFee("Car"));   
  console.log(calculateTollFee("Truck")); 
  console.log(calculateTollFee("Bike"));  
  console.log(calculateTollFee("Bus"));

// ------------------------------------------------ 15 ---------------------------------------------
// Music Playlist Controller 
//  Take a command ("Play", "Pause", "Next", "Previous"). 
//  Use switch to perform the correct action. 

function musicPlaylistController(command) {
    switch (command) {
        case "Play":
            return "Music is playing.";
        case "Pause":
            return "Music is paused.";
        case "Next":
            return "Playing next song.";
        case "Previous":
            return "Playing previous song.";
        default:
            return "Invalid command!";
    }
}

console.log(musicPlaylistController("Play"));     
console.log(musicPlaylistController("Pause"));     
console.log(musicPlaylistController("Next"));      
console.log(musicPlaylistController("Previous")); 
console.log(musicPlaylistController("Stop"));    

