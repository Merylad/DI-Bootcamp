// Exercise 1 : Menu

// const menu = [
//     {
//       type : "starter",
//       name : "Houmous with Pita"
//     },
//     {
//       type : "starter",
//       name : "Vegetable Soup with Houmous peas"
//     },
//     {
//       type : "dessert",
//       name : "Chocolate Cake"
//     }
//   ]

// let dessert = menu.some(food => food.type == 'dessert')
// console.log(dessert)

// let starter = menu.every(food => food.type =='starter')
// console.log(starter)

// let main = menu.some(food => food.type == 'main course')
// if (main == false){
//     menu.push({type : 'main course', name : 'Salmon Pasta'})
// }
// console.log(menu)

// const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

// menu.forEach(food =>{
//     let isVeggie = vegetarian.some(veg => food.name.toLowerCase().includes(veg))
//     food['vegeterian'] = isVeggie
// }
// )

// console.log(menu)

// Exercise 2 : Chop into chunks

// function string_chop(string, num){
//     let myArr = []
    
//     for (let i =0; i<string.length; i+=num){
//         myArr.push(string.slice(i, i +num))
        
//     }
//     return myArr
// }

// str = 'developers'
// console.log(string_chop(str,2))

// Exercise 3 : You said string ?

// function search_word(str, word){
//     num = str.split(' ').filter(w => w == word).length
//     return `${word} was found ${num} times `
// }
// console.log(search_word('hello hello how are you', 'hello')); 

// Exercise 4 : Reverse Array

function reverseArray (arr){
    let newArr = []
    for (let i = arr.length-1; i >=0; i-=1){
        newArr.push(arr[i])
    }
    return newArr
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]))