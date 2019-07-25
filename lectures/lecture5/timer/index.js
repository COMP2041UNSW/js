
// Write some code 

let startTime = 0;

function tick(event) {
    const output = document.getElementById('timer-output');
    output.innerText = (Date.now() - startTime)/1000;
    
}

function start() {
    startTime = Date.now()
    setInterval(tick, 1000)
}

function heavy() {
    // oh wow real important calculation right 
    // here amiright
    let i = 0;
    while(i < 10000000000) i++;
}

document.getElementById('start').addEventListener('click', start)
document.getElementById('heavy').addEventListener('click', heavy)
