// Your code here!
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	speak() {
		console.log(`${this.name} says hello`);
	}
}

class Cat extends Person {
	constructor(name, age) {
		super(name, age);
	}
	speak() {
		return `${this.name} says meow!`;
	}
}

class Dog extends Person {
	constructor(name, age) {
		super(name, age);
	}
	speak() {
		return `${this.name} says woof!`;
	}
}

class Bird extends Person {
	constructor(name, age) {
		super(name, age);
	}
	speak() {
		return `It's me! ${this.name}, the parrot!`;
	}
	speak() {
		return `${this.name} says squawk!`;
	}
}
