//rpc_games function name short for rock,paper,scissors game.
const choice = ['Rock', 'Paper', 'Scissors']; // Stores an array of objects to use in random_choice variable.
let u_input = prompt('Choose Rock, Paper or Scissors');

// If User input is equal to one of the string literals, show "You Chose: xy" If not entered anything show "Choose Again".
if ((u_input === 'Rock') | (u_input === 'rock')) {
    console.log('You Chose Rock');
} else if ((u_input === 'Paper') | (u_input === 'paper')) {
    console.log('You Chose Paper');
} else if ((u_input === 'Scissors') | (u_input === 'scissors')) {
    console.log('You Chose Scissors');
} else {
    console.log("Choose again");
}

const random_choice = choice[Math.floor(Math.random() * choice.length)]; // Calculates the length of the array (3), then randomises each index between 0 and 1. Then is rounded down to the whole number which chooses the word in the array randomly.
console.log("The Computer Chose: " + random_choice); // Just added to show what the "Computer" has chosen.
if ((u_input === 'rock') && (random_choice === 'Scissors')) {
    console.log("Rock Beats Scissors");
} else if ((u_input === 'scissors') && (random_choice === 'Rock')) {
    console.log("Scissors lose to Rock");
} else if ((u_input === 'paper') && (random_choice === 'Rock')) {
    console.log("paper Beats rock");
} else if ((u_input === 'rock') && (random_choice === 'Paper')) {
    console.log("Rock loses to paper");
} else if ((u_input === 'scissors') && (random_choice === 'Paper')) {
    console.log("Scissors beats paper");
} else if ((u_input === 'paper') && (random_choice === 'Scissors')) {
    console.log("Paper loses to Scissors");
} else {
    console.log('draw');
}
