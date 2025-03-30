// ---------------------------------------- 1 ------------------------------------------
// What are the four pillars of Object-Oriented Programming? 

// The four pillars of Object-Oriented Programming (OOP) are Encapsulation,
//  Inheritance, Polymorphism, and Abstraction.


// ---------------------------------------- 2 ------------------------------------------
// Define and provide an example of encapsulation in JavaScript. 

// Encapsulation is the concept of restricting direct access to an object's data and only 
// allowing controlled access through methods. It helps protect data integrity and promotes
//  modularity in Object-Oriented Programming (OOP)
class BankAccount {
    #balance; 
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Creating an instance
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log(account.getBalance());

// ---------------------------------------- 3 ------------------------------------------
//  How do JavaScript classes differ from traditional classes in languages like Java or C++? 

// JavaScript classes differ from traditional classes in Java or C++ in the following ways:
// 1- Prototype-Based vs. Class-Based
// JavaScript uses prototype-based inheritance, meaning objects inherit directly from other objects.
// Java and C++ use class-based inheritance, where classes define blueprints for objects.

// 2- Dynamic Nature
// JavaScript classes are syntactic sugar over prototypes and can be modified at runtime.
// Java and C++ classes are strictly defined at compile time and cannot be altered dynamically.

// 3- No Strong Typing:JavaScript is dynamically typed, meaning variables and class properties do not have fixed types.
// Java and C++ are statically typed, meaning variable types must be explicitly declared.

// 4- Constructor Functions vs. Class Constructors
// In JavaScript, classes are essentially constructor functions with a more readable syntax.
// In Java and C++, classes have strict constructor rules and overloading support.

// 5- Encapsulation Differences
// JavaScript uses # (private fields) for encapsulation (introduced in ES6).
// Java and C++ use private, protected, and public access modifiers.


// ---------------------------------------- 4 ------------------------------------------
// 4. Write a class Car with properties brand, model, and a method displayInfo(). 

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    displayInfo() {
        console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
    }
}
const myCar = new Car("Toyota", "Corolla");
myCar.displayInfo(); 

// ---------------------------------------- 5 ------------------------------------------
// 5. Explain prototype-based inheritance in JavaScript. 

// Prototype-based inheritance is a mechanism in JavaScript where objects inherit properties and methods
// from other objects through a prototype chain. Instead of defining a class blueprint like in Java or
// C++, JavaScript allows objects to directly inherit from other objects.
// 1- Every JavaScript object has an internal link (__proto__) to another object called its prototype.
// 2- If a property or method is not found in an object, JavaScript automatically looks for it in the prototype.
// 3- This chain continues until it reaches Object.prototype, which is the base of all objects in JavaScript


// ---------------------------------------- 6 ------------------------------------------
// 6. How do you create a private property in a JavaScript class? 

// In JavaScript, private properties are defined using the # symbol. These properties can only 
// be accessed within the class and are not accessible from outside.


// ---------------------------------------- 7 ------------------------------------------
// 7. What is method overriding, and how can it be implemented in JavaScript? 

// Method overriding is a concept in Object-Oriented Programming (OOP) where a child class provides a different implementation of a method that is already defined in the parent class. The overridden method in the child class has the same name and parameters as the one in the parent class, but with a new behavior.
// How to Implement Method Overriding in JavaScript?
// In JavaScript, method overriding is implemented by defining a subclass (child class) that extends a superclass (parent class) and redefining the method inside the child class.
// Parent class
class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}
// Child class overriding the method
class Dog extends Animal {
    makeSound() {
        console.log("Dog barks: Woof! Woof!");
    }
}
// Creating instances
const animal = new Animal();
animal.makeSound(); 
const dog = new Dog();
dog.makeSound(); 


// ---------------------------------------- 8 ------------------------------------------
// 8. Write an example demonstrating polymorphism in JavaScript. 

// Polymorphism is a core concept of Object-Oriented Programming (OOP) where multiple classes can have methods with the same name but different behaviors. This allows objects of different types to be treated uniformly while still executing their specific implementation.
// Example: Polymorphism with Method Overriding
// Parent class
class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}
// Child classes with different implementations of makeSound()
class Dog extends Animal {
    makeSound() {
        console.log("Dog barks: Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat meows: Meow! Meow!");
    }
}
class Cow extends Animal {
    makeSound() {
        console.log("Cow moos: Moo! Moo!");
    }
}
// Function that takes any Animal object and calls makeSound()
function animalSound(animal) {
    animal.makeSound(); 
}
// Creating instances
const dog2 = new Dog();
const cat = new Cat();
const cow = new Cow();
// Using polymorphism
animalSound(dog2); 
animalSound(cat); 
animalSound(cow); 


// ---------------------------------------- 9 ------------------------------------------
//  What is the purpose of super() in JavaScript classes? 

// In JavaScript, super() is used in subclasses (child classes) to call the constructor
//  or methods of their parent class (superclass). It allows the child class to inherit
//  properties and methods from the parent class, and it's required to be called in the
//  constructor of a subclass before using this (the child class's instance)


// ---------------------------------------- 10 ------------------------------------------
// Explain the difference between composition and inheritance.

// Difference Between Composition and Inheritance
// In Object-Oriented Programming (OOP), composition and inheritance are two common ways to reuse code
//  and structure classes. While both concepts aim to promote code reuse, they do so in fundamentally 
// different ways. Here’s a detailed explanation of both
// Inheritance
// Inheritance is a mechanism where a child class inherits properties and behaviors (methods) from a parent class. This allows the child class to reuse code from the parent class and extend or modify its behavior.
// Key idea: "Is-a" relationship. A class inherits from another because it is a type of the parent class.
// Composition
// Composition involves creating classes that contain instances of other classes (objects). Instead of inheriting from a parent class, a class uses objects from other classes to achieve functionality.
// Key idea: "Has-a" relationship. A class contains objects of other classes because it has those objects..












