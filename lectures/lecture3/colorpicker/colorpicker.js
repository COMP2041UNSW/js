let NUM_SQUARES = 16;
for (let i = 0; i < NUM_SQUARES; ++i) {
    let newSquare = document.createElement('div');
    document.body.appendChild(newSquare);
}

// Assigning each square a color
let squares = document.getElementsByTagName('div');
let colors = [
    'red', 'blue', 'orange', 'lightgreen',
    'green', 'pink', 'purple', 'yellow',
    'black', 'lightblue', 'red', 'green', 'pink',
];

Array.from(squares).forEach((square, i) => {
    square.style.backgroundColor = colors[i];
});

let label = document.getElementById('color-label');

document.addEventListener('mousemove', (event) => {
    let currentSquare = event.target;
    label.textContent = 'Color is ' + currentSquare.style.backgroundColor;
});
