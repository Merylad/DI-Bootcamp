"use strict";
//EX 1 
const HelloWorld = () => {
    return ('Hello World !');
};
console.log(HelloWorld());
//EX 2
let age = 1;
let name1 = 'John';
console.log(age);
console.log(name1);
let id;
id = 1;
id = 'abc123';
//EX4 
const isPositive = (num) => {
    if (num > 0) {
        return 'positive';
    }
    else if (num == 0) {
        return 'zero';
    }
    return 'negative';
};
console.log(isPositive(0));
console.log(isPositive(5));
console.log(isPositive(-5));
//EX5
const getDetails = (name, age) => {
    return [name, age, `Hello ${name}! You are ${age} years old.`];
};
console.log(getDetails('Alice', 25));
const createPerson = (name, age) => {
    return { name, age };
};
console.log(createPerson('John', 30));
//EX7
// let element = document.getElementById('myinput')
// let inputElement = element as HTMLInputElement
// inputElement.value = 'Hello World!'
// console.log(inputElement)
//EX8
function getAction(role) {
    switch (role) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
}
console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));
console.log(getAction("unknown"));
//EX9
const greetings = (name) => {
    if (name) {
        return `Hello ${name}`;
    }
    return `Hello!`;
};
console.log(greetings());
console.log(greetings('Naomie'));
