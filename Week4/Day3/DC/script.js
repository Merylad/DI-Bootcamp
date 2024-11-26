const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];

colors = ['red', 'yellow', 'blue', 'brown', 'lightblue', 'white', 'grey', 'green']
let mySection = document.getElementsByClassName('listPlanets')[0]

// for (let i in planets){
//     let newPlanet = document.createElement('div') 
//     newPlanet.setAttribute('class','planet')
//     newPlanet.style.backgroundColor = `${colors[i]}`;
//     newPlanet.textContent = planets[i]
//     mySection.appendChild(newPlanet)
// }

const planetsWithMoons = [
    { name: "Mercury", moons: 0 },
    { name: "Venus", moons: 0 },
    { name: "Earth", moons: 1 },
    { name: "Mars", moons: 2 },
    { name: "Jupiter", moons: 79 },
    { name: "Saturn", moons: 83 },
    { name: "Uranus", moons: 27 },
    { name: "Neptune", moons: 14 },
];

for (let i in planetsWithMoons){
    let newPlanet = document.createElement('div') 
    newPlanet.setAttribute('class','planet')
    newPlanet.style.backgroundColor = `${colors[i]}`;
    newPlanet.textContent = planetsWithMoons[i].name

    for (let j = 0; j<planetsWithMoons[i].moons;j++ ){
        let newMoon = document.createElement('div') 
        newMoon.setAttribute('class', 'moon')
        newMoon.style.left = `${j*10}px`
        newPlanet.appendChild(newMoon)

        
    }

    mySection.appendChild(newPlanet)
}