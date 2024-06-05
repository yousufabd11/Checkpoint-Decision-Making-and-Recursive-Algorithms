// Ticket Pricing

// Prompt the user to enter their age
let age = parseInt(prompt("Enter your age:"));



// Determine the price of the ticket based on the age
let ticketPrice;

if (age <= 12) {
    ticketPrice = 10;
} else if (age >= 13 && age <= 17) {
    ticketPrice = 15;
} else {
    ticketPrice = 20;
}

// Display the ticket price
alert("The price of the movie ticket is $" + ticketPrice + ".");
//Ticket Pricing//


// Weather Clothing Adviser Program

// Prompt the user to enter the current temperature
let temperature = parseFloat(prompt("Enter the current temperature (in degrees):"));

// Prompt the user to indicate whether it is raining or not
let isRaining = prompt("Is it raining? (yes/no):").trim().toLowerCase();

// Advise the user on what clothing to wear based on the temperature and rain
let clothingAdvice;

if (temperature < 0) {
    clothingAdvice = "Wear a heavy coat, scarf, gloves, and warm hat.";
} else if (temperature < 10) {
    clothingAdvice = "Wear a coat, scarf, and hat.";
} else if (temperature < 20) {
    clothingAdvice = "Wear a light jacket or sweater.";
} else {
    clothingAdvice = "Wear light clothing such as a t-shirt and shorts.";
}

if (isRaining === 'yes') {
    clothingAdvice += " Don't forget to take an umbrella or a raincoat.";
}

// Display the clothing advice
alert(clothingAdvice);
//Wheather Clothing Adviser//


//Palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Define the recursive function to check palindrome
    function checkPalindrome(s, left, right) {
        // Base case: If left index crosses right, it's a palindrome
        if (left >= right) {
            return true;
        }
        // If characters at left and right do not match, it's not a palindrome
        if (s[left] !== s[right]) {
            return false;
        }
        // Move towards the middle
        return checkPalindrome(s, left + 1, right - 1);
    }

    // Initial call to the recursive function
    return checkPalindrome(str, 0, str.length - 1);
}

// Test the function
let testString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(testString)); // Output: true
//Palindrome Checker//


//Power Function
function power(base, n) {
    // Base case
    if (n === 0) {
        return 1;
    }
    // If exponent is negative, calculate the power of the positive exponent and take reciprocal
    if (n < 0) {
        return 1 / power(base, -n);
    }
    // Recursive case: multiply base with the result of power(base, exponent - 1)
    return base * power(base, n - 1);
}

// Test the function
let base = 2;
let n = 3;
console.log(power(base, n));



