const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Pineapple");
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango", "Pineapple"]

//pop()
fruits.pop();
console.log(fruits); // Output: ["Banana", "Orange", "Apple"]

//unshift()
fruits.unshift("Pineapple");
console.log(fruits); // Output: ["Pineapple", "Banana", "Orange", "Apple", "Mango"]

//shift()
fruits.shift();
console.log(fruits);