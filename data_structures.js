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

// // Second method: Add elements to an Array as you create it.
// let fruits = ["Apple", "Mango", "Banana"];
// console.log(fruits[1]);
// console.log(fruits[2]); 

// // Obtaining an Array length

// console.log(fruits.length);

// // Iterating over Arrays

// // for loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // forEach loop
// fruits.forEach( function(fruit) {
//   console.log(fruit);
// });

// // forEach loop with Arrow functions
// fruits.forEach(fruit => console.log(fruit));

// // Array Methods

// // push()
// let numbers = new Array('1', '2', '3');
// numbers.push('4');
// console.log(numbers);

// // pop()
// let last = numbers.pop();
// console.log(last);

// // concat()
// let myArray = new Array("1", "2", "3");
// myArray = myArray.concat("a", "b", "c");
// console.log(myArray);

// // join()
// let students = new Array("John", "Jane", "Joe");
// let list = students.join(' - ');
// console.log(list);

// // sort()
// let myArray1 = new Array('West', 'East', 'South');
// myArray1.sort();
// console.log(myArray1);

// // indexOf()
// let myArr = new Array("a", "b", "a", "b", "a");
// console.log(myArr.indexOf("b"));

// // shift()
// let first = myArr.shift();
// console.log(first);

// // reverse()
// students.reverse();
// console.log(students);

// // map()
// let a2 = myArr.map(function(item) {
//   return item.toUpperCase();
// });
// console.log(a2);

// //filter()
// let someArray = new Array("a", "5", 8, "r", 7, "o", 9, "9");
// let a3 = someArray.filter(function(item) {
//   return typeof item == 'number';
// });

// console.log(a3);

// Real World Examples

// Shopping cart

const cart = []; // Empty cart Array 

function addToCart(productID, quantity) {
  const item = {
    id: productID,
    qty: quantity,
    // you can add other properties like price and product name
  };
  cart.push(item);
}

function removeFromCart(productID) {
  // loop through the cart and remove the product with the matching ID
  for(let i = cart.length - 1; i >= 0; i--) {
    if (cart[i].id === productID) {
      cart.splice(i, 1);
    }
  }
}

addToCart(123, 2); // Add to cart product 123 with a quantity of 2
addToCart(456, 1); // Add to cart product 456 with a quantity of 1

console.log(cart); // Output: [{ id: 123, qty: 2 }, { id: 456, qty: 1 }]


// To Do List

// 2. To-Do List:

// A to-do list application might use an array to store task objects. Each object could have properties like title, description, and a completion flag (boolean).

const toDoList = [];

function addTask(title, description) {
  const addTask = {
    title,
    description,
    completed: false,
  };
  toDoList.push(addTask);
}

function markTaskComplete(taskIndex) {
  toDoList[taskIndex].completed = true;
}

addTask("Buy Groceries", "Bread, Milk, Eggs");
addTask("Finish coding project", "complete unit tests");

markTaskComplete(0); // Mark the first task (index 0) complete

console.log(toDoList);
// Output: [
//   { title: "Buy groceries", description: "...", completed: true },
//   { title: "Finish coding project", description: "...", completed: false }
// ]

// 3. Social Media Timeline:

// A social media platform might use an array to store posts in a user's timeline. Each post could be an object containing the content, timestamp, and author information.

const timeLine = [];

function addPost (content, auther) {
  const post = {
    content,
    auther,
    timestamp: new Date(),
  };
  timeLine.push(post);
}

function displayPost(post) {
  const formattedDate = post.timestamp.toLocaleDateString(); // Get user-friendly date
  console.log(`${post.author} - ${formattedDate}`);
  console.log(post.content);
  console.log("-------"); // Separator between posts
}

addPost("You are handsome, Tyson.", "Kevin");
addPost("Thank you, Kevin. I have to look good for the girls.", "Tyson");

// Loop through the timeline and display posts (assuming a displayPost function)
for (const post of timeLine) {
  displayPost(post);
}