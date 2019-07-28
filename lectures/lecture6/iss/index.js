// Write some code

const BASE_URL = 'https://api.wheretheiss.at/v1';

function getISS() {
  const output = document.getElementById('output');
  const locationUri = `${BASE_URL}/satellites/25544`;

  fetch(locationUri)
    .then(r => r.json())
    .then(r => {
      const { latitude, longitude } = r;
      const coUri = `${BASE_URL}/coordinates/${latitude},${longitude}`;
      return fetch(coUri);
    })
    .then(r => r.json())
    .then(r => {
      output.innerText = `ISS is at ${r.country_code}`;
    })
    .catch(err => {
      output.innerText = `Error: ${err.message}`;
    });
}

document.getElementById('getiss').addEventListener('click', getISS);
