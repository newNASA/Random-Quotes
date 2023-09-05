// Selecting HTML elements
let h2 = document.querySelector('h2');
let p = document.querySelector('p');
let bottomButton = document.querySelector('bottombutton');

// Quotes collection
let quotes = {
    '#1': 'Hayotda faqat go\'liblar yutadi',
    '#2': 'Nobody believes you, you lose again and again and again, the lights cut off, but you still revive at your dreams, it\'s not over until I win',
    '#3': 'Unutma seni katta ishlar kutmoqda',
    '#4': 'Birovning izidan yurma',
    '#5': 'Muvafaqqiyat doim ham kelavermaydi'
};

// Function to get key by value from the quotes object
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

// Get current quote
let pContent = p.textContent;
let key = getKeyByValue(quotes, pContent);


function bottomButtonClicked() {
    // Generate random index
    function getRandomIndex(arrayLength) {
        return Math.floor(Math.random() * arrayLength);
    }
    
    // Random quote
    let keys = Object.keys(quotes);
    let randomIndex = getRandomIndex(keys.length);
    let randomKey = keys[randomIndex];
    let randomElement = quotes[randomKey];

    // Update HTML with random quote
    h2.textContent = `Quote ${randomKey}`;
    p.textContent = randomElement;
}

bottomButton.addEventListener('click', bottomButtonClicked)