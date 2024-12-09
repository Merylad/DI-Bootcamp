// 🌟 Exercise 1 : Giphy API

// async function getData(){
//     try {
//        let response =  await fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//        let data = await response.json()
//        console.log(data)

//     } catch (err) {
//         console.log(err)
//     }
// }

// getData()

// Exercise 2 : Giphy API

// async function getData(){
//     try {
//        let response =  await fetch('https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//        let data = await response.json()
//        console.log(data)

//     } catch (err) {
//         console.log(err)
//     }
// }

// getData()

// 🌟 Exercise 3 : Async function

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// const myFunc = async() => {
//     try{
//         let response = await fetch("https://www.swapi.tech/api/starships/9/")
//         let data = await response.json()
//         console.log(data)
//     } catch (e) {
//         console.log(e)
//     }
// }
// myFunc()

// 🌟 Exercise 4: Analyze

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

// prediction : calling then resolved after 2 sec 
