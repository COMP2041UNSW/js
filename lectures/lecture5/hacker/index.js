
// Write some code 

function hack() {
    const output = document.getElementById('output');
    const text = 'Hacking into pentagon';
    
    output.innerText += text[0]
    setTimeout(() => {
        output.innerText += text[1]
        setTimeout(() => {
            output.innerText += text[2]
            
        }, 100)
    },100)
}

document.getElementById('hack').addEventListener('click', hack)
