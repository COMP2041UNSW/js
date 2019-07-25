
// Write some code 

function getPokemon() {
    const pokemon = document.getElementById('pokemon').value;
	// What happens if the user data is bad?
	const id_url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    
    const id = -1;
    const detail_url = `https://pokeapi.co/api/v2/characteristic/${id}`;
    
    // promises this time!
    const p = new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1000);
    })

    get_pokemon_by_name()
     .then((id) => get_pokemon_char_by_id());
     .then(() => console.log('hello'));

}

document
    .getElementById('getpokemon')
    .addEventListener('click', getPokemon)
