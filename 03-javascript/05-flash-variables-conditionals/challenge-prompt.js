// declare a variable named farm
var farm


// set that farm variable to be an array with the elements
// Pig, Cow, Chicken, Dog, Horse, Sheep
farm = ["Pig", "Cow", "Chicken", "Dog", "Horse", "Sheep"]


// write an if statement that creates an alert that says "RWAR!" if the first element of farm is not "godzilla"
if (farm[0] === "Godzilla") {
    console.log("RWAR!")
}


// write another if statement that creates an alert "SCREECH!" if the last element of farm is "mothra"
if (farm[5] === "Mothra") {
    console.log("SCREECH")
}


// declare a variable named dog with a value of "Spot"
var Dog = "Spot"

// declare 3 variables cat, car, city without assigning them values
var Cat
var Car
var City

// assign the string "Farley" to cat
Cat = "Farley"

// assign the string "San Francisco" to city
City = "San Francisco"

// assign the string "Prius" to car
Car = "Prius"

// using string concatenation, console log out the sentence 
// "See Spot run!" without explicitly using "Spot" inside the string.
console.log("See " + Dog + " run!")

// using string concatenation, console log out the sentence 
//"I drive Farley around San Francisco in my Prius" without explicityly 
//using "Farley", "San Francisco", and "Prius"
// Remember to use the variables we just declared!
console.log("I drive " + Cat + " around " + City + " in my " + Car)

// declare a variable budget and assign it a value of 5000
var budget = 5000

// declare a variable rentCost and assign it a value of 1500
rentCost = 1500

// declare a variable utilitiesCost and assign it a value of 150
utilitiesCost = 150

// declare a variable foodCost and assign it a value of 250
foodCost = 250

// declare a variable transportationCost and assign it a value of 350
transportationCost = 350

// declare a variable computerCost and assign it a value of 2000
computerCost = 2000

// write an if statement that checks whether the sum of all our costs is within the budget.
// if it is within budget, console log out the total cost, otherwise, create an alert telling
// us the sum of all the costs.
if (budget - (rentCost+utilitiesCost+foodCost+transportationCost+computerCost) < 0 ) {
    console.log(budget - (rentCost+utilitiesCost+foodCost+transportationCost+computerCost))
} else {
    alert(budget - (rentCost+utilitiesCost+foodCost+transportationCost+computerCost))
}


// write an if statement that checks whether the rentCost is larger than 
// the sum of the utilitiesCost, foodCost, and transportationCost
// and if computerCost is greater than the sum of rentCost and utilities cost
// if both those statements are true, then create an alert that says "Computer costs are too high!"
// else, create an alert that says "Rent is too high!"
if (rentCost > (utilitiesCost+foodCost+transportationCost) && computerCost>(rentCost+utilitiesCost)) {
    alert("Computer costs are too high!")
} else {
    alert("Rent is too high!")
}

