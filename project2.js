// Array of quotes
const quotes = [
    "Here's a famous quote from the movie!",
    "Another memorable line from the franchise.",
    "Yet another iconic quote!",
    "A great quote for movie buffs."
];

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').textContent = quotes[randomIndex];
}

// Trivia Quiz
const correctAnswer = "2000";

function checkAnswer(answer) {
    const resultElement = document.getElementById('quiz-result');
    if (answer === correctAnswer) {
        resultElement.textContent = "Correct! Great job!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
}
