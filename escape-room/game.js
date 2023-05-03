const readline = require("readline-sync");
const name = readline.question("What is your name? ");// Ask for the users name

// Welcome message
console.log(`Welcome to the Escape Room, ${name}!`);

// Initialize variables
let hasKey = false;
let isAlive = true;

// Main game loop
while (isAlive) {
  // Ask the user for their next action
  const action = readline.question(`What would you like to do, ${name}? Type 'find key', 'open door', or 'put hand in hole': `);

  // Respond to the users action
  if (action === "find key") {
    // Check if the key has already been found
    if (hasKey) {
      console.log("You already found the key!");
    } else {
      console.log("You found the key!");
      hasKey = true;
    }
  } else if (action === "open door") {
    // Check if the user has the key to open the door
    if (hasKey) {
      console.log(`Congratulations, ${name}! You escaped the room and won the game!`);
      isAlive = false;
    } else {
      console.log("The door is locked. You need to find the key first.");
    }
  } else if (action === "put hand in hole") {
    console.log("You died. Game over.");
    isAlive = false;
  } else {
    console.log("Invalid action. Please type 'find key', 'open door', or 'put hand in hole'.");
  }
}
