import Todo from "./todo.js";

const todo1 = new Todo("Buy milk", true);
const todo2 = new Todo("Buy coffee");

console.log(todo1.id);          // 1
console.log(todo1.text);        // Buy milk
console.log(todo1.completed);   // true

console.log(todo2.id);          // 2
console.log(todo2.text);        // Buy coffee
console.log(todo2.completed);   // false