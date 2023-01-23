
  function myFunction() {
    let userInput = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    message.innerHTML = "Welcome to my page " + userInput.value;
  }


let height = prompt("What is your height?");


switch (height.toLowerCase()) {
  case "50cm":
    console.log("Your height was 50cm. That's too short.");
    break;
    case "60cm":
      console.log("Your height was 60cm. Uhmmm! I'm short of word!.");
    break;
    case "70cm":
      console.log("Your height was 70cm. Uhmmm! Fair enough.");
      break;
    case "80cm":
      console.log("Your height was 80cm. Good to know!");
      break;
    case "110cm":
      console.log("Your height was 110cm. Great! I love that!");
      break;
    case "120cm":
      console.log("Your height was 120cm. Coo!.");
      break;
    case "130cm":
      console.log("Your height was 130cm. Uhmmm! I'm short of word!.");
      break;
    case "140cm":
      console.log("Your height was 140cm. Uhmmm! I'm short of word!.");
      break;
    case "150cm":
      console.log("Your height was 150cm. Uhmmm! I'm short of word!.");
      break;
    case "160cm":
      console.log("Your height was 160cm. Uhmmm! I'm short of word!.");
      break;
    case "165cm":
      console.log("Your height was 165cm. Uhmmm! I'm short of word!.");
      break;
      default:
        console.log("Pretty sure you are too tall. Have you thought about venturing into sport? \\__(_/");
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

// function to submit users input

