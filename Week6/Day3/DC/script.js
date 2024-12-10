async function getCurrencies() {
    try {
        let response = await fetch ('https://v6.exchangerate-api.com/v6/e479bfb30b0273fd98d5adaf/codes')
        if(response.ok){
            let data = await response.json()
            return data.supported_codes
        } else {
            throw new Error ('Error')
        }
        
        
    }catch (e) {
        console.log(e)
    }
    
}

getCurrencies()

const currencyFromSelect = document.getElementById('currencyFrom');
const currencyToSelect = document.getElementById('currencyTo');

async function populateCurrencySelect(selectElement) {

    const supportedCodes = await getCurrencies()

    
    supportedCodes.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency[0]; 
        option.text = `${currency[0]} - ${currency[1]}`; 
        selectElement.appendChild(option);
    });
}


populateCurrencySelect(currencyFromSelect);
populateCurrencySelect(currencyToSelect);

const myForm = document.getElementById('form')

myForm.addEventListener('submit', currencyConvert)

async function currencyConvert (e) {
    e.preventDefault()
    const data = new FormData (myForm)
    const from = data.get('currencyFrom')
    const to = data.get('currencyTo')
    const amount = data.get('amount')

    const rate = await getRate (from, to)
    
    const convertAmount = amount * rate

    const divResult = document.getElementById('result')
    divResult.textContent = `${convertAmount} ${to}`

}

async function getRate (from, to){
    try{
        const response = await fetch (`https://v6.exchangerate-api.com/v6/e479bfb30b0273fd98d5adaf/pair/${from}/${to}`)
        if (response.ok){
            const data = await response.json()
            const rate = data.conversion_rate
            return rate
        }else {
            throw new Error ('An error has occured')
        }
    }catch (e) {
        console.log(e)
    }
}

const switchBtn = document.getElementById('switchBtn')
switchBtn.addEventListener('click', switchCurrency )

async function switchCurrency (e) {
    e.preventDefault()
    const data = new FormData (myForm)
    const to = data.get('currencyFrom')
    const from = data.get('currencyTo')
    const amount = data.get('amount')

    const rate = await getRate (from, to)
    
    const convertAmount = amount * rate

    const divResult = document.getElementById('result')
    divResult.textContent = `${convertAmount} ${to}`
}