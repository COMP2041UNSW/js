
// Write some code 
function sleep(s) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), s)
    })
}

function new_line() {
    const output = document.getElementById('output');
    output.appendChild(document.createElement("br"));
}
async function animate_text(msg) {
    const output = document.getElementById('output');
    for(c of msg) {
        output.innerText += c;
        await sleep(50)
    }
}
async function hack() {
    await animate_text("./hack_into_pentagon.pl");
    new_line()
    await animate_text("...bypass_mainframe");
    new_line()
    await animate_text("...bypass_firewall");
    new_line()
    await animate_text("...download_cat_photo");
    new_line()
    await animate_text("...[Access_Granted]");
}

document.getElementById('hack').addEventListener('click', () => hack())
