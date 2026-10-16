// Function to add two numbers
// Add
function add(a, b) {
    return a + b
}

// Subtract
function subtract(a, b) {
  return a - b;
}

module.exports = {
    add,
    subtract
}

const {add, subtract} = require("./Math")

const addResults = add(10, 20);
const subtractResults = subtract(10, 20);