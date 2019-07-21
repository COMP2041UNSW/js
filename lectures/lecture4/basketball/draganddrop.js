const HOOP_OFFSET_MAX_Y = 161;
const HOOP_OFFSET_MIN_Y = 148;
const HOOP_OFFSET_MAX_X = 227;
const HOOP_OFFSET_MIN_X = 73;

const ball = document.querySelector('#ball');
const hoop = document.querySelector('#hoop');
const scoreboard = document.querySelector('#scoreboard');
let animationSpeed = 3;
hoop.style.animationDuration = animationSpeed + 's';

let cursorInBallOffsetX = 0;
let cursorInBallOffsetY = 0;
let goalScored = false;
let numGoals = 0;

const onMouseMove = (event) => {
    event.preventDefault();

    const hoopRect = hoop.getBoundingClientRect();

    if (event.clientX > hoopRect.left + HOOP_OFFSET_MIN_X
        && event.clientX < hoopRect.left + HOOP_OFFSET_MAX_X
        && event.clientY > hoopRect.top + HOOP_OFFSET_MIN_Y
        && event.clientY < hoopRect.top + HOOP_OFFSET_MAX_Y) {
        if (!goalScored) {
            numGoals += 1;
            goalScored = true;
            scoreboard.textContent = "Score is " + numGoals;
        }
    } else {
        goalScored = false;
    }

    ball.style.left = event.clientX - cursorInBallOffsetX + "px";
    ball.style.top = event.clientY - cursorInBallOffsetY + "px";
}

ball.addEventListener('mousedown', (event) => {
    const ballRect = ball.getBoundingClientRect();
    cursorInBallOffsetX = event.clientX - ballRect.left;
    cursorInBallOffsetY = event.clientY - ballRect.top;

    document.addEventListener('mousemove', onMouseMove);
});

ball.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove);

});

window.setInterval(() => {
    animationSpeed *= 0.9;
    hoop.style.animationDuration = animationSpeed + 's';
}, 2000);
