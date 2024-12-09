// 🌟 Exercise 1 : Comparison

function compareToTen (num) {
    return new Promise ((resolve, reject) =>{
        if (num <=10){
            resolve('The number is less then 10')
        } else{
            reject ('The number is bigger then 10')
        }
    })
}

// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// 🌟 Exercise 2 : Promises

// let myPromise = new Promise ((resolve)=>{
//     setTimeout ( () => {
//         resolve ('Success message')
//     },4000
        
//     )
// })

// myPromise .then (result => console.log(result))


// 🌟 Exercise 3 : Resolve & Reject

let myPromise = Promise.resolve (3)
myPromise.then(result =>console.log(result))

let myPromise2 = Promise.reject('Booooo!')
myPromise2.catch(result =>console.log(result))


