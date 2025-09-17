let elements = ["rock", "paper", "scissors"];
let score = 0;

function guess(userChoice) {
    let random = Math.floor(Math.random() * 3); 
    let computerChoice = elements[random];
    let message = "";

    if (userChoice === computerChoice) {
        message = "🤝 It's a tie! You both chose " + userChoice;
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        score++;
        message = "🎉 You win! " + userChoice + " beats " + computerChoice;
    } 
    else {
        score--;
        message = "💻 Computer wins! " + computerChoice + " beats " + userChoice;
    }

    document.getElementById("message").textContent = message;
    document.getElementById("score").textContent = "Score: " + score;
}

function resetGame() {
    score = 0;
    document.getElementById("message").textContent = "Game reset. Start again!";
    document.getElementById("score").textContent = "Score: 0";
}
