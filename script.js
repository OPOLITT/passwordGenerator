const result = document.querySelector('.result-area');
const button = document.querySelector('.result-btn');
const lowerLetters = document.getElementById('lower')
const upperLetters = document.getElementById('upper')
const numberLetters = document.getElementById('number')
const symbolLetters = document.getElementById('symbols')
const lenghtLetter = document.getElementById('lenght')
const generate = document.querySelector('.generate')

// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol
// }

// generate.addEventListener('click', () => {
//     const lenght = +lenghtLetter.value;
//     const hasLower = lowerLetters.checked;
//     const hasUpper = upperLetters.checked;
//     const hasNumber = numberLetters.checked;
//     const hasSymbol = symbolLetters.checked;

//     result.innerText = generatePassword(
//         hasLower,
//         hasUpper,
//         hasNumber,
//         hasSymbol,
//         lenght
//     )

// });

// function generatePassword(lower, upper, number, symbol, length) {
//     let generatedPassword = '';
//     const typesCount = lower + upper + number + symbol;
//     const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

//     // Doesn't have a selected type
//     if (typesCount === 0) {
//         return '';
//     }

//     // create a loop
//     for (let i = 0; i < length; i += typesCount) {
//         typesArr.forEach(type => {
//             const funcName = Object.keys(type)[0];
//             generatedPassword += randomFunc[funcName]();
//         });
//     }

//     const finalPassword = generatedPassword.slice(0, length);

//     return finalPassword;
// }
// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//     return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//     const symbols = '!@#$%^&*(){}[]=<>/,.'
//     return symbols[Math.floor(Math.random() * symbols.length)];
// }

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const symbols = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}



generate.addEventListener('click', () => {

    let typesCount = lowerLetters.checked + upperLetters.checked + numberLetters.checked + symbolLetters.
        checked;

    let lenght = +lenghtLetter.value
    let mass = []

    let lenghtLetters = Math.ceil(lenght / lower.length)
    let lenghtNumbers = Math.ceil(lenght / numbers.length)
    let lenghtSymbols = Math.ceil(lenght / symbols.length)
    console.log(lenghtLetters, lenghtNumbers, lenghtSymbols);


    if (typesCount === 0) {
        alert('Choose a properties')
        return
    } else

        if (lowerLetters.checked) {
            for (let i = 0; i < lenghtLetters; i++) {
                mass = mass.concat(lower)
            }
        }
    if (upperLetters.checked) {
        for (let i = 0; i < lenghtLetters; i++) {
            mass = mass.concat(upper)
        }
    }
    if (numberLetters.checked) {
        for (let i = 0; i < lenghtNumbers; i++) {
            mass = mass.concat(numbers)
        }
    }
    if (symbolLetters.checked) {
        for (let i = 0; i < lenghtSymbols; i++) {
            mass = mass.concat(symbols)
        }
    }

    console.log(mass);

    shuffle(mass)

    let resultPassword = ''
    for (let i = 0; i < lenght; i++) {
        resultPassword += mass[i]
    }

    result.innerText = resultPassword

});