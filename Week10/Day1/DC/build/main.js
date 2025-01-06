"use strict";
const validateUnionType = (value, allowedTypes) => {
    const isValid = allowedTypes.some(type => typeof value === type);
    return isValid;
};
console.log(validateUnionType({ a: 3 }, ['number', 'string', 'object']));
//XP GOLD
//EX1
const processValue = (input) => {
    if (typeof input === 'number') {
        return '$' + input;
    }
    return input.split('').reverse().join('');
};
console.log(processValue(1));
console.log(processValue('Naomie'));
//EX2 
const sumNumbersInArray = (arr) => {
    let result = 0;
    arr.forEach(element => {
        if (typeof element === 'number') {
            result += element;
        }
    });
    return result;
};
console.log(sumNumbersInArray([1, 2, "3", 4, "hello"]));
console.log(sumNumbersInArray([10, "20", 30, "40"]));
const introduceAdvancedUser = (user) => {
    let message = `Hello ${user.name}! You are ${user.age} years old !`;
    if (user.address) {
        return message + `You live in ${user.address}`;
    }
    return message;
};
const Naomie = {
    name: 'Naomie',
    age: 11,
    address: 'Givat Shmoel'
};
const Eliam = {
    name: 'Eliam',
    age: 5
};
console.log(introduceAdvancedUser(Naomie));
console.log(introduceAdvancedUser(Eliam));
//EX4
const welcomeUser = (name, greeting) => {
    if (greeting) {
        return `${greeting} ${name}`;
    }
    return `Hello ${name}`;
};
console.log(welcomeUser('Naomie', 'Heeeellllooooooooooooooooo'));
console.log(welcomeUser('Eliam'));
const mapType = (value) => {
    if (typeof value === 'number') {
        return value ** 2;
    }
    else {
        return value.length;
    }
};
console.log(mapType('hello'));
console.log(mapType(10));
//EX2
function getProperty(obj, key) {
    return obj[key];
}
function multiplyProperty(obj, key, factor) {
    if (key in obj) {
        return obj[key] * factor;
    }
    return undefined;
}
const product = { price: 100, discount: 10 };
const employee = { salary: 5000, bonus: 1000 };
console.log(multiplyProperty(product, "price", 2));
console.log(multiplyProperty(product, "discount", 3));
console.log(multiplyProperty(employee, "salary", 1.1));
console.log(multiplyProperty(employee, "bonus", 1.5));
console.log(multiplyProperty(product, "nonexistent", 5));
