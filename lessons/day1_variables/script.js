// Day 1 - Variables Lesson // This script demonstrates the use of variables in JavaScript // It includes string and number variables, as well as basic operations
let name = "Rocky"; // string variable // use let to allow reassignment
const program = "Per Scholas"; // string variable // use const for variables that won't change
let age = 38; // number variable // use let to allow reassignment
// Increment the age variable by 1 // increment age by 1 // age = age + 1;
age = age + 1; // increment age by 1
// Alternatively, you could use: age += 1; or age++;
console.log("Next year age:", age); // Output the incremented age
console.log("Name:", name); // Output the name
console.log("Program:", program); // Output the program
console.log("Next year I'll be", age); // Output a sentence with the next year's age
alert("Next year age: " + age); // Display an alert with the next year's age
//-------------------------------------------
// Additional variable types demonstration
// Boolean, Float, Undefined, Null
// Declare variables of different types
// Boolean variable
const isStudent = true; // Boolean variable
const score = 96.5; // Float variable
let city; // Undefined variable // its value is undefined // you can assign a value later if needed
const hobby = null; // Null variable
alert(isStudent, score, city, hobby); // Display an alert with the variable values
console.log(isStudent, score, city, hobby); // Log the variable values to the console
// Assign a value to the undefined variable // city // now we assign a value // to the previously undefined variable
city = "Atlanta"; // Assign a value to the previously undefined variable
console.log(city);  // Log the city variable to the console
alert(city); // Display an alert with the city variable
//-------------------------------------------
// const = creating a constant variable (the value cannot be reassigned).
// let = creating a variable that can be reassigned.
// String = A sequence of characters used to represent text. Enclosed in quotes.
// Number = A numeric data type used to represent both integers and floating-point numbers. 
// hobby = The name of the variable.
// null = A special value in JavaScript that means “no value” or “empty on purpose.”
// I know this variable exists, but it doesnt have any value right now - and that’s intentional.
let user = null;  // user is not logged in yet // assign null to user
console.log(user); // null // Log the user variable to the console      
// later, user logs in
user = "Rocky";   // later, user logs in // assign a string value to user
console.log(user); // "Rocky" // Log the user variable to the console
//-------------------------------------------

// A mini challenge
//Exercise 4: Mini Challenge
//Create three variables: country, language, goal.
//                                                Print: "I live in <country>, I speak <language>, and I want to become a <goal>."
const country = "USA"; // string variable
let language = "English"; // string variable
let population = 331000000; // number variable
const goal = "Software Engineer"; // string variable
console.log("I live in " + country + ", I speak " + language + ", and I want to become a " + goal + "."); // Output the sentence // Print the sentence // using \
//  concatenation // combining strings and variables // using + operator // to join them together // to form a complete sentence 
alert("I live in " + country + ", I speak " + language + ", and I want to become a " + goal + "."); // Output the sentence // Print the sentence // using 
population = population + 1000000; // increment population by 1,000,000
console.log("Country:", country); // Output the country
console.log("Language:", language); // Output the language
console.log("Population:", population); // Output the population
console.log("Goal:", goal); // Output the goal
alert("Population after increase: " + population); // Display an alert with the updated population
//-------------------------------------------
// Document Object Model (DOM) Access Examples
// Accessing various elements in the HTML document
// Examples of accessing elements in the DOM
document.getElementById("div");       // gets the <div>
document.querySelector(".info");        // gets the <p>
document.body;                          // gets the <body> element
document.title;                         // gets the title of the page
// Changing content of an element // Example of changing the text content of an element
// Change the text content of the element with id "title" when the button is clicked // Add an event listener to the button
// When the button is clicked, change the text content of the title element
// Add event listener to the button
// When button is clicked, change the title text
// Add event listener to the button
// When button is clicked, change the title text
document.getElementById("changeBtn").addEventListener("click", () => {
  document.getElementById("title").textContent = "DOM Manipulation is Fun!";
});
