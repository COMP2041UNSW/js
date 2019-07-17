let square = document.getElementById('square');

let moveSquare = (leftMovement, topMovement) => {
    let currentLeftPos = parseInt(square.style.left, 10);
    square.style.left = currentLeftPos + leftMovement + "px";

    let currentTopPos = parseInt(square.style.top, 10);
    square.style.top = currentTopPos + topMovement + "px";
}

let handler = (event) => {
    switch (event.key) {
        case "ArrowDown":
            moveSquare(0, 1); break;
        case "ArrowUp":
            moveSquare(0, -1); break;
        case "ArrowLeft":
            moveSquare(-1, 0); break;
        case "ArrowRight":
            moveSquare(1, 0);; break;
    }
}

document.addEventListener('keydown', handler);
