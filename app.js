
function guessMyage() {
  let answer;

  while(answer != 35) {
      answer = prompt("Guess my age between 15-45", "35");

      if(answer !=35){
          alert("Sorry! You can do better");
      }else {
          alert("Great! You got it");
          document.write("You guessed my age");
      }
  }
}

let height = prompt("What is your height?");


switch (height.toLowerCase()) {
  case "50cm":
    alert("Your height was 50cm. That's too short.");
    break;
      default:
      alert("Pretty sure you are too tall. Have you thought about venturing into sport? \\__(_/");
}

let user = prompt("What is your name?");
console.log("The user's name is " + user);


let place = prompt("Where are you from?");
console.log("I'm from Mexico" + place);

let travel = prompt("Have you been to Dubai?");
console.log("No! I haven't" + travel);

let friend = prompt("Who is your best friend?");
console.log("My best friend is Folusho! She is tall and beautiful" + friend);

let work = prompt("Are you open to job?");
console.log("Yes! I'm currently job hunting" + work);

alert("Cool! " + user + ". You're from " + place + ". What a beautiful place! " + "Uhmm! " + friend + ". Sounds like you got yourself a beautiful friend too. " + work + ". I might have something for you, click here to check");



let userPoints = 0;

alert("Welcome to my guessing game!");


console.log(user);
// ensure the user actually use their name
while (!player) {
  user = prompt("I really need your name, please give it.");
}

// 
if (user == "Ben.");{
alert("Ugh, I knew it was you Ben.");
}

alert("Hello there" + "! I'm so glad you decided to visit my website!");



// while loops
let question = prompt("What is my favourite sport?").toLowerCase();

let attempts = 3

// adding number of attempts
while(question != "rubgy" && attempts > 0) {
  console.log(attempts + "more attempts")
  question = prompt("Nope, try again." + attempts + "attempts left");
  attempts--;
}

let food = prompt("What is my favourite food?").toLowerCase();

let attemptsPizza = 3

while(food != "pizza" && attemptsPizza > 0) {
  console.log(attemptsPizza + "more attempts")
  food = prompt("Nope, try again." + attemptsPizza + "attempts left");
  attemptsPizza--;
}


let music = prompt("What is my favourite music?").toLowerCase;

let attemptsBlues = 3

while(music != "blues" && attemptsBlues > 0) {
  console.log(attemptsBlues + "more attempts")
  music = prompt("Nope, try again." + attempts + "attempts left");
  attemptsBlues--;
}


let colourQuestion = prompt("What is my favourite colour?.").toLowerCase();

let colourILike = ("Green", "Pink", "Red", "Blue");

for (let i = 0; i < colourILike.length; i++) {
  if (colourQuestion == colourILike[i]) {
    alert("Yes I love " + colourQuestion + "!");
    userPoints++;
  }
}



let countryQuestion = prompt("Can you guess my country?.").toLowerCase();

let myCountry = ("Nigeria");

for (let i = 0; i < myCountry.length; i++) {
  if (colourQuestion == colourILike[i]) {
    alert("Great! " + colourQuestion + "my country" );
    userPoints++;
  }
}


let musicQuestion = confirm("Do you love me?");

if (musicQuestion == true) {
alert("I know.");
userPoints++;
} else {
  alert("Aww");
}

alert("Well done " + user + "! You scored " + userPoints + "/2");


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
let continents = ["Africa", "Europe", "Asia", "Oceania", "North America", "South America", "Antartica" ]

console.log(continents)

// for loops
// loops through the continents array and shows each items 1 at a time
for (let i = 0; i < continents.length; i++) {
  console.log(i + ": " + continents[i]);
}

let number = 5

while(number < 3) {
  console.log(number);
  number++;
}











