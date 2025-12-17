# 🔥 OOPs in JavaScript – Complete Notes/pdf with Practical Examples

## 📌 What is OOP?

**Object-Oriented Programming (OOP)** is a programming paradigm based on **objects**, which contain:

- **Properties** (data)
- **Methods** (functions)

### Why OOP?

OOP helps in:

- Code reusability
- Better structure
- Easy maintenance
- Real-world modeling

---

## 1️⃣ Object

### 📖 Definition

An **object** is a collection of related data and functions stored as key–value pairs.

### ✅ Example

```js
const user = {
  name: "Kunal",
  role: "Full Stack Developer",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};

user.greet();

```

---


## 2️⃣ Class

📖 Definition
A class is a blueprint for creating objects.

✅ Example
```js
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

const user1 = new User("Kunal", "Developer");
user1.greet();
```

---

## 3️⃣ Constructor

📖 Definition
A constructor is a special method that runs automatically when an object is created.

✅ Example
```js
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
}

const car1 = new Car("BMW", 220);

```

---

## 4️⃣ Encapsulation

📖 Definition
Encapsulation means binding data and methods together and restricting direct access to data.

✅ Example
```js
class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(5000);
console.log(acc.getBalance());
```

✔ Data hiding
✔ Access via methods only

---

## 5️⃣ Abstraction

📖 Definition
Abstraction means hiding internal implementation details and exposing only necessary functionality.

✅ Example
```js
class Payment {
  pay() {
    console.log("Processing payment...");
  }
}

class UPI extends Payment {
  pay() {
    console.log("Paid using UPI");
  }
}

const payment = new UPI();
payment.pay();
```

✔ User does not care how it works
✔ User only cares what it does


---

## 6️⃣ Inheritance

📖 Definition
Inheritance allows one class to reuse properties and methods of another class.

✅ Example
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("Walking...");
  }
}

class Developer extends Person {
  code() {
    console.log("Coding...");
  }
}

const dev = new Developer("Kunal");
dev.walk();
dev.code();
```

---

## 7️⃣ Polymorphism

📖 Definition
Polymorphism means same method name but different behavior.

✅ Example
```js
class Shape {
  area() {
    return 0;
  }
}

class Square extends Shape {
  area() {
    return 5 * 5;
  }
}

class Circle extends Shape {
  area() {
    return 3.14 * 5 * 5;
  }
}

const shapes = [new Square(), new Circle()];
shapes.forEach(shape => console.log(shape.area()));
```

---

## 8️⃣ this Keyword

📖 Definition
this refers to the current object.

✅ Example
```js
class User {
  constructor(name) {
    this.name = name;
  }

  show() {
    console.log(this.name);
  }
}
```

---


## 9️⃣ Static Methods

📖 Definition
Static methods belong to the class, not to objects created from the class.

✅ Example
```js
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtils.add(5, 3));
```

🔁 Real-World Example (Mini Project)
User Management System
```js
class User {
  constructor(username) {
    this.username = username;
  }

  login() {
    console.log(`${this.username} logged in`);
  }
}

class Admin extends User {
  deleteUser(user) {
    console.log(`${user.username} deleted`);
  }
}

const admin = new Admin("Admin1");
const user = new User("Kunal");

admin.login();
admin.deleteUser(user);
```

---

## 📁 Recommended Folder Structure

```vbnet
oops-js/
│
├── 01_object/
│   └── object.js
│
├── 02_class/
│   └── class.js
│
├── 03_constructor/
│   └── constructor.js
│
├── 04_encapsulation/
│   └── encapsulation.js
│
├── 05_abstraction/
│   └── abstraction.js
│
├── 06_inheritance/
│   └── inheritance.js
│
├── 07_polymorphism/
│   └── polymorphism.js
│
├── 08_static/
│   └── static.js
│
├── 09_real_world_examples/
│   └── user-management.js
│
├── NOTES.md
└── README.md
```

## 📌 Notes for Interview Preparation

- OOP improves scalability and maintainability

- JavaScript uses prototype-based inheritance

- class is syntactic sugar over prototypes

- Private fields use #

- Polymorphism is achieved using method overriding

---

## 🚀 Author
Kunal Sahu
Full Stack Developer | MERN | JavaScript

---

## 🙌 Connect with Me

- 🔗 [LinkedIn](https://www.linkedin.com/in/kunalsahuji)
- 💼 [GitHub](https://github.com/Kunalsahuji)
- 🌍 [Portfolio](https://kunalsahuji.github.io)
- 📧 [kunal@gmail.com](mailto:kunal@gmail.com)

---

## 📄 License

MIT License © 2025 [Kunal Sahuji](https://github.com/Kunalsahuji)

