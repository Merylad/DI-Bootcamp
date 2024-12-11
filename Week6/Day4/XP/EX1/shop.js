const {products} = require('./product.js')

const searchProduct = (productName) => {
    let prod = products.find(product => product.name === productName)
    return prod
}

const TV = searchProduct('computer')

for (let [key, value] of Object.entries(TV)){
    console.log(`${key}: ${value}`);
}