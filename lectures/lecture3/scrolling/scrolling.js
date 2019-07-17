let secondSquare = document.querySelector('.second');
let button = document.getElementById('btn');

button.addEventListener('click', () => {
    let rect = secondSquare.getBoundingClientRect();

    window.scrollTo({
        top: rect.top,
        left: rect.left,
        behavior: 'smooth',
    });
});