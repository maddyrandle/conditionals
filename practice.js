var age = 29;
var username = "Maddy";

if (age >= 21) {
    console.log("Welcome to the website")
} else if (age < 2) {
    console.log("How are you even on this device?")
} else {
    console.log("Come back when you're 21!")
}

if (username === "Oscar") {
    console.log("Hello, Oscar!")
} else {
    console.log(`Nice to meet you, ${username}!`)
}

// Logical Operators with Conditionals

var password = "";

if (password.length >= 8 && password.includes("#")) {
    console.log(`Got it. Your password is ${password}`)
}