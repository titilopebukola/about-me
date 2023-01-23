"use strict";
  function myFunction() {
    let userInput = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    message.innerHTML = "Welcome to my page " + userInput.value;
  }


let height = prompt("What is your height?");


switch (height.toLowerCase()) {
  case "50cm":
    alert("Your height was 50cm. That's too short.");
    break;
    case "60cm":
      alert("Your height was 60cm. Uhmmm! I'm short of word!.");
    break;
    case "70cm":
      alert("Your height was 70cm. Uhmmm! Fair enough.");
      break;
    case "80cm":
      alert("Your height was 80cm. Good to know!");
      break;
    case "110cm":
      alert("Your height was 110cm. Great! I love that!");
      break;
    case "120cm":
      alert("Your height was 120cm. Coo!.");
      break;
    case "130cm":
      alert("Your height was 130cm. Uhmmm! I'm short of word!.");
      break;
    case "140cm":
      alert("Your height was 140cm. Uhmmm! I'm short of word!.");
      break;
    case "150cm":
      alert("Your height was 150cm. Uhmmm! I'm short of word!.");
      break;
    case "160cm":
      alert("Your height was 160cm. Uhmmm! I'm short of word!.");
      break;
    case "165cm":
      alert("Your height was 165cm. Uhmmm! I'm short of word!.");
      break;
      default:
      alert("Pretty sure you are too tall. Have you thought about venturing into sport? \\__(_/");
}

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

// arrays
// in array the first item is index 0, follow by 1
let myArray = ["Titi", 30, "Pink"]

console.log(myArray[2])
// this will return "Pink"

let myArray = ["Titi", 30, "Pink", ["Top", 23, "Red"]]

let output = myArray[3][2];
console.log(output);
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

