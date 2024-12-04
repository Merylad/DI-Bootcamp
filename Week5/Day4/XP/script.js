// 🌟 Exercise 1 : HTML Form

//The data will appear in the URL
// http://127.0.0.1:5501/Week5/Day4/XP/GET?fname=John&comment=This+is+a+comment+%21

// 🌟 Exercise 2 : HTML Form #2

// The data sent to the server with POST is stored in the request body of the HTTP request:
//http://127.0.0.1:5501/Week5/Day4/XP/POST?fname=John&comment=This+is+a+comment

// 🌟 Exercise 3 : JSON Mario

const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

const JSONmarioGame = JSON.stringify(marioGame, null, 2)
// debugger
// JSONmarioGame
// : 
// "{\n  \"detail\": \"An amazing game!\",\n  \"characters\": {\n    \"mario\": {\n      \"description\": \"Small and jumpy. L
console.log(JSONmarioGame)

// {
//     "detail": "An amazing game!",
//     "characters": {
//       "mario": {
//         "description": "Small and jumpy. Likes princesses.",
//         "height": 10,
//         "weight": 3,
//         "speed": 12
//       },
//       "bowser": {
//         "description": "Big and green, Hates princesses.",
//         "height": 16,
//         "weight": 6,
//         "speed": 4
//       },
//       "princessPeach": {
//         "description": "Beautiful princess.",
//         "height": 12,
//         "weight": 2,
//         "speed": 2
//       }
//     }
//   }

// Everything is transformed into a JSON string

