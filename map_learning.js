const personMap = new Map();
personMap.set("name", "Alice");
personMap.set("age", 30);
personMap.set("hobbies", ["reading", "hiking", "coding"]);

console.log(personMap.get("name")); // Output: Alice
console.log(personMap.has("age")); // true

personMap.delete("hobbies");
console.log(personMap.size) // Output: 2


// define a function tp create a new user object

function createUser(name, email, age) {
  return { name, email, age };
}

// create a map to store users

const usersMap = new Map();

// Add some users to the map
usersMap.set(123, createUser("Tyson", "tyson56@gmail.com", 24));
usersMap.set(456, createUser("Ben", "ben5@gmail.com", 21));
usersMap.set(789, createUser("Jeffry", "jeffry78@gmail.com", 19));

// Function to retrieve a user by ID
function getUserById(userID) {
  if(usersMap.has(userID)) {
    return usersMap.get(userID);
  } else{
    return null; // User not found
  }
}

// Example usage
const user1 = getUserById(123);
console.log(user1); // Output: { name: "Alice", email: "alice@example.com", age: 30 }
const unknownUser = getUserById(999);
console.log(unknownUser); // Output: null

// define a product object with basic properties
function Product(id, name, price) {
  this.id = id;
  this.name  = name;
  this.price = price;
  // you can add other properties like description, image URL, e.t.c
}

// Function to create a customizable item object for the cart.
function createCartItem(product, quantity, selectedOptions = {}) {
  return {
    product,
    quantity,
    selectedOptions, // Object containing selected options (e.g size, color)
    getSubtotal() {
      // calcukates subtotal based on price , quantity, and any other parameter affecting price
      // (Implementation depends on your pricing logic for options)
      let subtotal = this.quantity * this.product.price;
      // Add logic to calculate price adjustments based on selectedOptions
      return subtotal;
    },
  };
}

// Create a map to represent a shopping map
const shoppingCart = new Map();

// Example products
const product1 = new Product( 123, "T-shirt", 20);
const product2 = new Product(456, "Mug", 15);

// Add products to the cart with customizable options
shoppingCart.set(product1.id, createCartItem(product1, 2, { size: "large", color: "blue" })); 
shoppingCart.set(product2.id, createCartItem(product2, 1, { design: "Funny Cat" }));

// Function to get the total cart price (assuming all subtotals are calculated)
function getCartTotal() {
 let total = 0;
 for (const cartItem of shoppingCart.values()) {
  total += cartItem.getSubtotal();
 }
 return total;
}

// Example usage
console.log(shoppingCart); // Output: Map with product IDs as keys and cart item objects as values
const cartTotal = getCartTotal();
console.log(`Cart total $${cartTotal}`);


// Caching Data for Performance Optimization:

// Create a map to store cached data

const cacheMap = new Map();
// function to retrieve data from cache or to fetch from source if not cached

function getData(dataIdentifier, fetchDataFn) {
  if (cacheMap.has(dataIdentifier)) {
    console.log(`Data retrieved from cache for: ${dataIdentifier}`);
    return cacheMap.get(dataIdentifier); // Return cached data
  } else {
    console.log(`Data fetched from source for ${dataIdentifier}`);
    const data = fetchDataFn; // Fetch data from source
    cacheMap.set(dataIdentifier, data); // Cache the fetched data
    return data;
  }
}

// Example usage
function fetchDataFromSource(dataIdentifier) {
  // Simulate fetching data from a source
  const data = { someData: "This data was fetched fromthe source" };
  return data;
}

// Retrieve data from the same Identifier multiple times 
const data1 = getData("user-preferences", fetchDataFromSource());
const data2 = getData("user-preferences", fetchDataFromSource());

console.log(data1); // Output: Data retrieved from cache for: user-preferences
console.log(data2); // Output: Data retrieved from cache for: user-preferences (uses cached data)