for (key in Objects) {
  // executes the body for each key in the function body
}

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert(key); // name, age, isAdmin
  // values for keys
  alert(user[key]); // John, 30, true
}