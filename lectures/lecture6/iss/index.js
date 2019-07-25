
// Write some code 

const base = "https://api.wheretheiss.at/v1";

function getISS() {
    const output = document.getElementById('output');
    const locationUri = `${base}/satellites/25544`;

    fetch(locationUri)

        .then(r => r.json())
        .then(r => {
            const {latitude, longitude} = r;
            const coUri = `${base}/coordinates/${latitude},${longitude}`;
            return fetch(coUri)
        })
        .then(r => r.json())
        .then(r => {
            output.innerText = `ISS is at ${r.country_code}`;
        })
    
}

document
    .getElementById('getiss')
    .addEventListener('click', getISS)