const charSection = document.getElementById('charSection')
const btnSearch =  document.getElementById('btnSearch')




async function getStarWarsChar (){
    loading()

    const randomNum = Math.floor(Math.random() * 83) + 1
    try {
        const response = await fetch (`https://www.swapi.tech/api/people/${randomNum}`)
        if(response.ok){
            const data = await response.json()
            writeTheChar(data)
            return data
        }else {
            throw new Error ('OOOPS something wrong happened')
        }
        
    }catch(e) {
        handleError()
    }
    
}

async function writeTheChar(data) {
    const {name, height, gender, birth_year, homeworld} = data.result.properties
    const planet = await getHomeworld(homeworld)

    let nameP = document.createElement('p')
    nameP.className = 'nameChar'
    let heightP = document.createElement('p')
    let genderP = document.createElement('p')
    let birthYearP = document.createElement('p')
    let homeworldP = document.createElement('p')

    nameP.textContent = name
    heightP.textContent = `Height : ${height}`
    genderP.textContent = `Gender : ${gender}`
    birthYearP.textContent = `Birth Year : ${birth_year}`
    homeworldP.textContent = `Home World : ${planet}`

    charSection.innerHTML = ''
    charSection.appendChild(nameP)
    charSection.appendChild(heightP)
    charSection.appendChild(genderP)
    charSection.appendChild(birthYearP)
    charSection.appendChild(homeworldP)

}

async function getHomeworld(planet){
    try {
        const response = await fetch (planet)
        if (response.ok){
            const data = await response.json()
            const planet = data.result.properties.name
            return planet
        }
    } catch (e) {
        console.log ('in the homeworld catch ', e)
    }
}

btnSearch.addEventListener ('click', getStarWarsChar )

function handleError () {

    let p = document.createElement('p')
    p.textContent = 'OOOOPS This character does not exist'
    p.className='loadingDiv'
    charSection.innerHTML = ''
    charSection.appendChild(p)
}

function loading () {
    charSection.innerHTML = ''
    let loadingDiv = document.createElement('div')
    let div = document.createElement('div')
    div.className = "fa-3x"
    let i = document.createElement('i')
    i.className = 'fa-solid fa-spinner fa-spin-pulse fa-2xl'
    let p = document.createElement('p')
    p.textContent = 'Loading...'
    div.appendChild(i)
    loadingDiv.appendChild(div)
    loadingDiv.appendChild(p)
    loadingDiv.className = 'loadingDiv'
    charSection.appendChild(loadingDiv)
}

