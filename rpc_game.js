const choice = ['Rock', 'Paper', 'Scissors']; // Stores an array of objects to use in random_choice variable.
let u_input = prompt('Choose Rock, Paper or Scissors');
let u_input_c = u_input[0].toUpperCase() + u_input.slice(1); // Capitalisation regardless if user entered lower or uppercase word.

// If User input is equal to one of the string literals, show "You Chose: xy" If not entered anything show "Choose Again".
if (u_input_c === 'Rock') {
    console.log('You Chose Rock');
} else if (u_input_c === 'Paper') {
    console.log('You Chose Paper');
} else if (u_input_c === 'Scissors') {
    console.log('You Chose Scissors');
} else {
    console.log("Choose again");
}

const random_choice = choice[Math.floor(Math.random() * choice.length)]; // Calculates the length of the array (3), then randomises each index between 0 and 1. Then is rounded down to the whole number which chooses the word in the array randomly.
console.log("The Computer Chose: " + random_choice); // Just added to show what the "Computer" has chosen.
if ((u_input_c === 'Rock') && (random_choice === 'Scissors')) {
    console.log("Rock Beats Scissors");
} else if ((u_input_c === 'Scissors') && (random_choice === 'Rock')) {
    console.log("Scissors lose to Rock");
} else if ((u_input_c === 'Paper') && (random_choice === 'Rock')) {
    console.log("paper Beats rock");
} else if ((u_input_c === 'Rock') && (random_choice === 'Paper')) {
    console.log("Rock loses to paper");
} else if ((u_input_c === 'Scissors') && (random_choice === 'Paper')) {
    console.log("Scissors beats paper");
} else if ((u_input_c === 'Paper') && (random_choice === 'Scissors')) {
    console.log("Paper loses to Scissors");
} else {
    console.log('draw');
}
