import {array} from './data.js'

function averageAge (data) {
    let totalAges = 0
    for (let person of data){
        
        totalAges += person.age
    }
    return totalAges / data.length
}

console.log(averageAge(array))   /32.333333333333336