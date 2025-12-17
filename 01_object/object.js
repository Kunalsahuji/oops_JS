// Objects : A javaScript object is an entity having state and behavior (properties and method). 
//or An object is a collection of related data and functions stored as key–value pairs.
const students = {
    name: "Kunal Sahu",
    age: 25,
    city: "Bhopal",
    isMarried: false,
    skills: ["JavaScript", "React", "Node.js"],
    greet: function () {
        console.log("Hello, " + this.name);
    }
}
console.log(students.name) //output: Kunal Sahu - Accessing property using dot notation
console.log(students["age"]) // output: 25 - Accessing property using bracket notation
students.greet() // output: Hello, Kunal Sahu - Calling method of object
let string = JSON.stringify(students) // Converting object to JSON string
console.log(string) // Output: {"name":"Kunal Sahu","age":25,"city":"Bhopal","isMarried":false,"skills":["JavaScript","React","Node.js"],"greet":function () { console.log("Hello, " + this.name); } }
let obj = JSON.parse(string) // Converting JSON string back to object
console.log(obj) // Output: { name: 'Kunal Sahu', age: 25, city: 'Bhopal', isMarried: false, skills: [ 'JavaScript', 'React', 'Node.js' ], greet: [Function: greet] }