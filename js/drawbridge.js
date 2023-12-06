function checkAnswer() {
    var userAnswer = document.getElementById('answer').value;
    var correctAnswer = 3; // The correct answer to the puzzle

    if (userAnswer == correctAnswer) {
        document.getElementById('result').textContent = 'Bravo to you. You continue with your search for more answers.';
    } else {
        document.getElementById('result').textContent = 'The wolves get closer. You try again. ';
    }
}
