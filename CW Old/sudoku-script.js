
document.addEventListener('DOMContentLoaded', function () {
    generateSudoku();
});

function generateSudoku() {
    const grid = document.getElementById('sudoku-grid');

    for (let i = 0; i < 9; i++) {
        const row = grid.insertRow(i);

        for (let j = 0; j < 9; j++) {
            const cell = row.insertCell(j);
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.addEventListener('input', validateInput);
            cell.appendChild(input);

            if (Math.random() < 0.5) {
                const randomNumber = Math.floor(Math.random() * 9) + 1;
                input.value = randomNumber;
                input.disabled = true;
            }
        }
    }
}

function validateInput(event) {
    const inputValue = event.target.value;

    if (!/^[1-9]$/.test(inputValue)) {
        event.target.value = '';
    }

    if (isGameComplete()) {
        alert('Congratulations! You solved the puzzle.');
    }
}

function isGameComplete() {
    // Implement your logic to check if the game is complete
    return false;
}
