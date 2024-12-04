let quotes = [
    {
        id: 0,
        author: 'Albert Einstein',
        quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.'
    },
    {
        id: 1,
        author: 'Isaac Newton',
        quote: 'If I have seen further it is by standing on the shoulders of Giants.'
    },
    {
        id: 2,
        author: 'Marie Curie',
        quote: 'Nothing in life is to be feared, it is only to be understood.'
    },
    {
        id: 3,
        author: 'Mahatma Gandhi',
        quote: 'Be the change that you wish to see in the world.'
    },
    {
        id: 4,
        author: 'Winston Churchill',
        quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.'
    },
    {
        id: 5,
        author: 'Thomas Edison',
        quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.'
    },
    {
        id: 6,
        author: 'Mark Twain',
        quote: 'The secret of getting ahead is getting started.'
    },
    {
        id: 7,
        author: 'Oscar Wilde',
        quote: 'Be yourself; everyone else is already taken.'
    },
    {
        id: 8,
        author: 'Benjamin Franklin',
        quote: 'An investment in knowledge pays the best interest.'
    },
    {
        id: 9,
        author: 'Confucius',
        quote: 'It does not matter how slowly you go as long as you do not stop.'
    },
    {
        id: 10,
        author: 'Aristotle',
        quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.'
    },
    {
        id: 11,
        author: 'Nelson Mandela',
        quote: 'It always seems impossible until it is done.'
    },
    {
        id: 12,
        author: 'Ralph Waldo Emerson',
        quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.'
    },
    {
        id: 13,
        author: 'Steve Jobs',
        quote: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.'
    },
    {
        id: 14,
        author: 'Theodore Roosevelt',
        quote: 'Believe you can and you are halfway there.'
    }
];

let btn = document.getElementById('btn')
let div = document.getElementById('quotations')

btn.addEventListener('click', randomQuote)

function randomQuote(e){
    e.preventDefault()   

    div.innerHTML = ''

    const selectQuote = quotes[Math.floor(Math.random() * quotes.length)]

    
    let quotation = document.createElement('p')
    let author = document.createElement('p')
    let img = document.createElement('img')
    img.setAttribute('src', 'https://cdn.pixabay.com/photo/2022/05/29/05/23/quotation-mark-7228450_1280.png')
    img.setAttribute('class', 'img')
    quotation.setAttribute('class', 'quotation')
    quotation.textContent = selectQuote.quote
    author.textContent = selectQuote.author
    author.setAttribute('class', 'author')
    div.appendChild(img)
    div.appendChild(quotation)
    div.appendChild(author)
    

}