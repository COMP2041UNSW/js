
// Write some code 

function getPokemon() {
    const output = document.getElementById('output');
    const pokemon = document.getElementById('pokemon').value;
	// What happens if the user data is bad?
	const id_url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    
    const id = -1;
    const detail_url = `https://pokeapi.co/api/v2/characteristic/${id}`;

    let j = null;
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", id_url, true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                    j = JSON.parse(xhr.responseTesxt);
                    console.log(j.izd);
            }
        }
    };

    // j is null
    xhr.send(null);
}

document.getElementById('getpokemon').addEventListener('click', getPokemon)
