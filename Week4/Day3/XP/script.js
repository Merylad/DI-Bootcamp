// 🌟 Exercise 1 : Find the numbers divisible by 23

// function displayNumbersDivisible(divisor) {
//     let numbers = []
//     for(let i = 0; i<501; i++){
//         if(i%divisor == 0){
//             numbers.push(i)
//         }
//     }
//     return numbers
// }

// num = displayNumbersDivisible(23)
// console.log(num)

// let sum = 0
// for(let n of num) {
//     sum+=n
// }

// console.log(sum)


// 🌟 Exercise 2 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList= ['banana', 'orange', 'apple']

function myBill(){
    let total = 0
    for(let item of shoppingList) {
        for (let x in stock){
            if (item == x){
                total +=prices[item]
                stock[item] -=1
            }
        }
    }
}

myBill()

// Exercise 3 : What’s in my wallet ?

function changeEnough(itemPrice, amountOfChange){
    let change = [0.25,0.10,0.05,0.01]
    let amount = 0
    for (let i in amountOfChange){
        amount += amountOfChange[i]*change[i]
    }
    if (itemPrice<= amount) {
        return true
    } else {
        return false
    }
}

// console.log(changeEnough(0.75, [0,0,20,5]))

// 🌟 Exercise 4 : Vacations Costs

function hotelCost(){
    while (true) {
        userAnswer = prompt ('How many nights would you like to stay in the hotel ?')
        let nights = parseInt(userAnswer) 

        if (!isNaN(nights) && nights>0){
            let cost = parseInt(userAnswer) * 140
            alert(`This will cost you ${cost}`)
            return cost
        } else {
            alert ('Incorrect answer')
        }
    }
}

// hotelCost()

function planeRideCost() {
    while (true) {
        userAnswer = prompt ('Enter a destination').toLowerCase()
        let destination = parseInt(userAnswer) 

        if (isNaN(destination) && userAnswer != ''){
            let price = 0
            if (userAnswer === 'london'){
                price = 183
            } else if (userAnswer === 'paris'){
                price = 220
            } else {
                price = 300
            }
            alert(`This will cost ${price}$`)
            return price
        } else {
            alert ('Incorrect answer')
        }
    }
}

// planeRideCost() 

function rentalCarCost() {
    while (true) {
        userAnswer = prompt ('How many days would you like to rent the car ?')
        let days = parseInt(userAnswer) 
        let cost = 0

        if (!isNaN(days) && days>0){
            if (days>10){
                cost = 40 * days * 0.95
            } else {
                cost = 40 * days
            }
            
            alert(`This will cost you ${cost}`)
            return cost
        } else {
            alert ('Incorrect answer')
        }
    }
}

// rentalCarCost() 

function totalVacationCost() {
    hotelPrice = hotelCost ()
    planePrice = planeRideCost ()
    carPrice = rentalCarCost()
    total = hotelPrice + planePrice + carPrice

    alert (`Total price of your vacations : ${total}$`)

    return total
}

// totalVacationCost()



