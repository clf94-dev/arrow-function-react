import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [6, 1, 15, 35, 9];

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map(x => {
  return x * 2;
});
console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
const newBelowNumbers = numbers.filter(num => {
  return num < 10;
});

console.log(newBelowNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
var newAccumNumber = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
});

console.log(newAccumNumber);

////Find - find the first item that matches from an array.
const newFirstNumber = numbers.find(num => {
  return num > 10;
});
console.log(newFirstNumber);

////FindIndex - find the index of the first item that matches.
const newFirstNumberIndex = numbers.findIndex(num => {
  return num > 10;
});

console.log(newFirstNumberIndex);
