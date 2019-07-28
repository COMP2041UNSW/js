
// Write some code 

// return a promise that resolve after 
// s milliseconds
function wait(s) {
    return new Promise((resolve) => {
        setTimeout(resolve, s)
    })
}

function hack() {
    const output = document.getElementById("output")
    wait(500)
        .then(() => {
            output.innerText += 'h'
            return wait(500);
        })
        .then(() => {
            output.innerText += 'a'
            return wait(500);
        })
        .then(() => {
            output.innerText += 'c'
            return wait(500);
        })
        .then(() => {
            output.innerText += 'k'
            return wait(500);
        })
}

document.getElementById('hack').addEventListener('click', hack)
