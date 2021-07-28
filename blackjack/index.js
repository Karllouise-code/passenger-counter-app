//* 1st
/* let firstCard = 1
let secondCard = 11
let sum = firstCard + secondCard

if (sum < 21) {
    console.log('Do you want to draw a new card? 🃏')
} else if (sum === 21) {
    console.log("Wohooo!, You've got a blackjack! 🎉")
} else {
    console.log("You're out of the game! 😭")
} */

//* 2nd
/* let age = 10

if (age < 21) {
    console.log('You can not enter the club!😢')
} else {
    console.log('Welcome!!!🎇')
}
 */

//* 3rd
/* let age = 100

if (age < 100) {
    console.log('Not eligible!')
} else if (age === 100) {
    console.log('Here is your birthday card from the King!')
} else {
    console.log('Not elegible, you have already gotten one')
} */

//* 4th
/* let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

console.log(sum)

if (sum <= 20) {
    console.log('Do you want to draw a new card? 🙂')
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

//* CASH OUT!
console.log(hasBlackJack)
console.log(`Life: ${isAlive}`) */

//* 5th
/* console.log(4 === 3) //* false
console.log(5 > 2) //* true
console.log(12 > 12) //* false
console.log(3 < 0) //* false
console.log(3 >= 3) //* true
console.log(11 <= 11) //* true
console.log(3 <= 2) //* false */

//* 6th
/* let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string
let message = ''
// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    message = 'Do you want to draw a new card? 🙂'
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}

// 3. Log it out!
console.log(`Life: ${isAlive}`)
console.log(message)*/

//* 7th
/* const messageEl = document.getElementById('message-el')
console.log('🚀 ~ file: index.js ~ line 92 ~ messageEl', messageEl)

function startGame() {
    let firstCard = 10
    let secondCard = 4
    let sum = firstCard + secondCard
    let hasBlackJack = false
    let isAlive = true
    let message = ''

    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
} */

//* 8th
/* const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')

function startGame() {
    let firstCard = 18
    let secondCard = 4
    let sum = firstCard + secondCard
    let hasBlackJack = false
    let isAlive = true
    let message = ''

    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    sumEl.textContent = `Sum: ${sum}`
    messageEl.textContent = message
}
 */

//* 9th
const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')

function startGame() {
    let firstCard = 18
    let secondCard = 4
    let sum = firstCard + secondCard
    let hasBlackJack = false
    let isAlive = true
    let message = ''

    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    cardEl.textContent = `Cards: ${firstCard} ${secondCard}`
    sumEl.textContent = `Sum: ${sum}`
    messageEl.textContent = message
}
