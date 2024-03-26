// // Creating Arrays without defining Array length

// let arr = new Array( element0, Element1, element2 );

// let arr1 = Array( element0, element1, element2 );

// let arr2 = [ element0, element1, element2 ];

// // Creating Array with a given size

// let arr3 = new Array(6);

// let arr4 = Array(6);

// let arr5 = [];
// arr.length = 6;

// // Create a variable length Array and add as many elements as you need

// // First method: Initialize an empty Array then add Elements.
// let students = [];
// students[0] = "Eugene Israel";
// students[1] = "Kaluna James";
// students[2] = "Vincent Kipkemei";

// Second method: Add elements to an Array as you create it.
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[1]);
console.log(fruits[2]); 

// Obtaining an Array length

console.log(fruits.length);

// Iterating over Arrays

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach loop
fruits.forEach( function(fruit) {
  console.log(fruit);
});

// forEach loop with Arrow functions
fruits.forEach(fruit => console.log(fruit));

// Array Methods

// push()
let numbers = new Array('1', '2', '3');
numbers.push('4');
console.log(numbers);

// pop()
let last = numbers.pop();
console.log(last);

// concat()
let myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c");
console.log(myArray);

// join()
let students = new Array("John", "Jane", "Joe");
let list = students.join(' - ');
console.log(list);

// sort()
let myArray1 = new Array('West', 'East', 'South');
myArray1.sort();
console.log(myArray1);

// indexOf()
let myArr = new Array("a", "b", "a", "b", "a");
console.log(myArr.indexOf("b"));

// shift()
let first = myArr.shift();
console.log(first);

// reverse()
students.reverse();
console.log(students);

// map()
let a2 = myArr.map(function(item) {
  return item.toUpperCase();
});
console.log(a2);

//filter()
let someArray = new Array("a", "5", 8, "r", 7, "o", 9, "9");
let a3 = someArray.filter(function(item) {
  return typeof item == 'number';
});

console.log(a3);