const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

let usernames = []
gameInfo.forEach(info => {
    usernames.push(info.username + '!')
})
console.log(usernames)

let winners = []
gameInfo.forEach(info =>{
    if (info.score > 5){
        winners.push(info.username)
    }
})
console.log(winners)

let totalScore = gameInfo.reduce((acc,value) => acc + value.score,0)
console.log(totalScore)