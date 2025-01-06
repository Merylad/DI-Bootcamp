const validateUnionType = (value: any, allowedTypes: string[]): boolean => {
    const isValid = allowedTypes.some(type => typeof value === type)
    return isValid
}

console.log(validateUnionType({a:3}, ['number', 'string', 'object']))



//XP GOLD

//EX1
const processValue = (input : string | number) : string => {
    if (typeof input ==='number') {
        return '$' + input
    }
    return input.split('').reverse().join('')
} 

console.log(processValue(1))
console.log(processValue('Naomie'))

//EX2 
const sumNumbersInArray = (arr :( number | string) []) : number => {
    let result : number = 0
    arr.forEach(element => {
        if (typeof element === 'number') {
            result += element
        }
    });
    return result
}
console.log(sumNumbersInArray([1, 2, "3", 4, "hello"]))
console.log(sumNumbersInArray([10, "20", 30, "40"])); 

//EX3

type AdvancedUser = {
    name : string
    age : number 
    address ? : string
}

const introduceAdvancedUser = (user : AdvancedUser) : string => {
    let message = `Hello ${user.name}! You are ${user.age} years old !`
    if (user.address) {
        return message + `You live in ${user.address}`
    }
    return message
}

const Naomie = {
    name : 'Naomie',
    age : 11,
    address : 'Givat Shmoel'
}

const Eliam = {
    name : 'Eliam',
    age : 5
}
console.log(introduceAdvancedUser(Naomie))
console.log(introduceAdvancedUser(Eliam))

//EX4

const welcomeUser = (name : string, greeting ? :string) : string => {
    if (greeting) {
        return `${greeting} ${name}`
    }
    return `Hello ${name}`
}

console.log(welcomeUser('Naomie', 'Heeeellllooooooooooooooooo'))
console.log(welcomeUser('Eliam'))

//XP NINJA

//EX1
type NumStr = number | string

const mapType = (value :NumStr) : number => {
    if (typeof value === 'number') {
        return value **2
    } else {
        return value.length
    }
       
}

console.log(mapType('hello'))
console.log(mapType(10))

//EX2

function getProperty(obj: { [key: string]: any }, key: keyof typeof obj) {
    return obj[key];
  }

//EX3

interface HasNumericProperty {
    [key: string]: number; 
  }

  function multiplyProperty(
    obj: HasNumericProperty, 
    key: string, 
    factor: number
  ): number | undefined {
    if (key in obj ) {
      return obj[key] * factor;
    }
    return undefined; 
  }

const product : HasNumericProperty = { price: 100, discount: 10 };
const employee : HasNumericProperty = { salary: 5000, bonus: 1000 };

console.log(multiplyProperty(product, "price", 2));   
console.log(multiplyProperty(product, "discount", 3)); 
console.log(multiplyProperty(employee, "salary", 1.1));  
console.log(multiplyProperty(employee, "bonus", 1.5));   


console.log(multiplyProperty(product, "nonexistent", 5)); 