let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries = () => groceries.fruits.forEach(element => console.log(element));

displayGroceries()

let cloneGroceries = () => {
    let user = client
    client = 'Betty'
    console.log(user) //This is still John bc it is a string not an object

    let shopping = groceries
    groceries.totalPrice= '35$'
    console.log(shopping.totalPrice) //It is 35$ also bc groceries is an object
    groceries.other.paid = false
    console.log(shopping.other.paid) //same
}
cloneGroceries()