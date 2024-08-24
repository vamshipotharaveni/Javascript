const boxes = document.querySelectorAll('.box');
const resetButton = document.querySelector('.reset-button');
const bulbButton = document.querySelector('.bulb-button');
let isXTurn = true;

// Toggle Light/Dark Mode
bulbButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    document.querySelector('.first-container').classList.toggle('light-mode');
    document.querySelector('.first-container').classList.toggle('dark-mode');
});

// Place 'X' or 'O'
boxes.forEach(box => {
    box.addEventListener('click', function() {
        if (this.textContent === '') {
            this.textContent = isXTurn ? 'X' : 'O';
            isXTurn = !isXTurn;
            checkWinner();
        }
    });
});

// Reset Game
resetButton.addEventListener('click', () => {
    boxes.forEach(box => box.textContent = '');
    isXTurn = true;
});

// Check Winner
function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
            alert(`Player ${boxes[a].textContent} wins!`);
            resetGame();
        }
    });

    // Check for Draw
    if ([...boxes].every(box => box.textContent !== '')) {
        alert("It's a draw!");
        resetGame();
    }
}

// Reset the game after a win or draw
function resetGame() {
    boxes.forEach(box => box.textContent = '');
    isXTurn = true;
}

// Initialize with light mode
document.body.classList.add('light-mode');
document.querySelector('.first-container').classList.add('light-mode');
