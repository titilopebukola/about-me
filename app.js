function guessMyage() {
  let answer;

  while (answer != 35) {
    answer = prompt("Guess my age between 15-45", "35");

    if (answer != 35) {
      alert("Sorry! You can do better");
    } else {
      alert("Great! You got it");
      document.write("You guessed my age");
    }
  }
}

function questionHeight() {
  let height = prompt("What is your height?");

  switch (height.toLowerCase()) {
    case "50cm":
      alert("Your height was 50cm. That's too short.");
      break;
    default:
      alert(
        "Pretty sure you are too tall. Have you thought about venturing into sport?"
      );
  }
}

function questionName() {
  let user = prompt("What is your name?");
  console.log("The user's name is " + user);
}

function questionPlace() {
  let place = prompt("Where are you from?");
  console.log("I'm from Mexico" + place);

  alert(
    "Cool! " + user + ". You're from " + place + ". What a beautiful place! "
  );
}

function questionMusic() {
  let music = prompt("What is my favourite music?").toLowerCase;

  let attemptsBlues = 3;

  while (music != "blues" && attemptsBlues > 0) {
    console.log(attemptsBlues + "more attempts");
    music = prompt("Nope, try again." + attemptsBlues + "attempts left");
    attemptsBlues--;
  }
}

function questionCar() {
  let car = prompt("Which car do I drive?").toLowerCase;

  let attemptsBMW = 3;

  while (car != "bmw" && attemptsBMW > 0) {
    console.log(attemptsBlues + "more attempts");
    car = prompt("Nope, try again." + attemptsBMW + "attempts left");
    attemptsBMW--;
  }
}

function questionFood() {
  let food = prompt("What is my favourite food?").toLowerCase();

  let attemptsPizza = 3;

  while (food != "pizza" && attemptsPizza > 0) {
    console.log(attemptsPizza + "more attempts");
    food = prompt("Nope, try again." + attemptsPizza + "attempts left");
    attemptsPizza--;
  }
}

function questionChildren() {
  let children = prompt("How many children do I have?").toLowerCase;

  let attempts2 = 3;

  while (children != "2" && attempts2 > 0) {
    console.log(attempts2 + "more attempts");
    children = prompt("Nope, try again." + attempts2 + "attempts left");
    attempts2--;
  }
}

function questionBoardgame() {
  let boardgame = prompt("What is my favourite boardgame?").toLowerCase;

  let attemptsChess = 3;

  while (boardgame != "chess" && attemptsChess > 0) {
    console.log(attemptsChess + "more attempts");
    boardgame = prompt("Nope, try again." + attemptsChess + "attempts left");
    attemptsChess--;
  }
}

function questionMusic1() {
  let musicQuestion = confirm("🎵 Do you love me?🎵");

  if (musicQuestion == true) {
    alert("I know.");
    userPoints++;
  } else {
    alert("Awww 😔");
  }

  alert("Well done " + user + "! You scored " + userPoints + "/2");
}

var enterButton = document.getElementById("enterButton");
var againButton = document.getElementById("againButton");
var output = document.getElementById("outputText");

var randomNumber = Math.ceil(Math.random() * 100);

function checkNumber() {
  var input = document.getElementById("userInput").Value;
  if (input == randomNumber) {
    output.innerHTML = "You guessed right " + ", " + ", it was " + randomNumber;
    output.style.color = "green";
  } else if (input > randomNumber && input < 100) {
    output.style.color = "You guessed too high";
  } else if (input < randomNumber && input > 1) {
    output.innerHTML = "You guessed too low";
  } else if (input < 1) {
    output.innerHTML = "Higher, it has to be between 1 and 100";
  } else if (isNaN(input)) {
    output.innerHTML = "That's not a number!";
  } else {
    output.innerHTML = "Lower, it has to be between 1 and 100";
  }
}
enterButton.addEventListener("click", checkNumber);
againButton.addEventListener("click", function () {
  location.reload();
});

let userPoints = 0;

alert("Welcome to my guessing game!");

console.log(user);
// ensure the user actually use their name
while (!player) {
  user = prompt("I really need your name, please give it.");
}

//
if (user == "Ben.");
{
  alert("Ugh, I knew it was you Ben.");
}

alert("Hello there" + "! I'm so glad you decided to visit my website!");

// while loops
function questionSport() {
  let question = prompt("What is my favourite sport?").toLowerCase();

  let attempts = 3;

  // adding number of attempts
  while (question != "rubgy" && attempts > 0) {
    console.log(attempts + "more attempts");
    question = prompt("Nope, try again." + attempts + "attempts left");
    attempts--;
  }
}

function questionColour() {
  let colourQuestion = prompt("What is my favourite colour?.").toLowerCase();

  let colourILike = ("Green", "Pink", "Red", "Blue");

  for (let i = 0; i < colourILike.length; i++) {
    if (colourQuestion == colourILike[i]) {
      alert("Yes I love " + colourQuestion + "!");
      userPoints++;
    }
  }
}

function questionCountry() {
  let countryQuestion = prompt("Can you guess my country?.").toLowerCase();

  let myCountry = "Nigeria";

  for (let i = 0; i < myCountry.length; i++) {
    if (colourQuestion == colourILike[i]) {
      alert("Great! " + colourQuestion + "my country");
      userPoints++;
    }
  }
}

function questionFood1() {
  let foodQuestion = prompt("What is one my favourite foods?.").toLowerCase();

  let foodsILike = ["dumplings", "popcorn", "pizza", "pasta"];

  for (let i = 0; i < foodsILike.length; i++) {
    if (foodQuestion == foodsILike[i]) {
      alert("Yes I love " + foodQuestion + "!");
      userPoints++;
    }
  }
}

// arrays
// in array the first item is index 0, follow by 1

// let myArray = ["Titi", 30, "Pink"]

// console.log(myArray[2])
// this will return "Pink"

// example 2

// this will return ["Top", 23, "Red"], "Pink"

// comparison operators

// == euqual to
// <= less than or equal to
// >= greater than or equal to
// === strictly equal to (value and varriable type)
// !== not equal to
// !== strictly not equal to (not same value and variable type)

// Logical Operators

// && and
// || or
//  !a not

// array
let continents = [
  "Africa",
  "Europe",
  "Asia",
  "Oceania",
  "North America",
  "South America",
  "Antartica",
];

console.log(continents);

// for loops
// loops through the continents array and shows each items 1 at a time
for (let i = 0; i < continents.length; i++) {
  console.log(i + ": " + continents[i]);
}

let number = 5;

while (number < 3) {
  console.log(number);
  number++;
}

questionHeight();
questionName();
questionPlace();
questionMusic();
questionCar();
questionFood();
questionChildren();
questionBoardgame();
questionMusic1();
checkNumber();
questionSport();
questionColour();
questionCountry();
questionFood1();
