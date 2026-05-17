const input = document.querySelector('#pokemon-search');
const button = document.querySelector('#search-btn');
const result = document.querySelector('#result');
const loading = document.querySelector('#loading');
const error = document.querySelector('#error');

button.addEventListener('click', async function(){
    hideAll();
    const name = input.value.trim().toLowerCase();
    if(!name){
        error.textContent = "Please enter a Pokémon name.";
        error.hidden = false;
        return;
    };

    button.disabled = true;
    button.textContent = 'Searching...';
    loading.hidden = false;

    try{
        const pokemon = await getPokemon(name);
        displayPokemon(pokemon);
    }
    finally{
        button.disabled = false;
        button.textContent = 'Search';
        loading.hidden = true;
    }
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') button.click();
});

async function getPokemon(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            if (response.status === 404) 
                return { error: "Pokémon not found" };
            else if (response.status >= 500)   
                return { error: "Server Error." };
            else                                
                return { error: "Something went wrong. Please try again."}
        }
        return {data: await response.json()};
    }
    catch(err){
        console.log("Fetch failed:", err);
        return { error: "Network error." };
    }
}

function displayPokemon(pokemon) {
    if(pokemon.error){
        error.textContent = pokemon.error;
        error.hidden = false;
        return;
    }

    const p = pokemon.data;
    result.hidden = false;
    result.innerHTML = `
        ${p.sprites.front_default ? `<img src="${p.sprites.front_default}" alt="${p.name}">` : ''}
        <h2>${p.name}</h2>
        <p>HP: ${p.stats[0].base_stat}</p>
        <p>Attack: ${p.stats[1].base_stat}</p>
        <p>Defense: ${p.stats[2].base_stat}</p>
    `
}

function hideAll() {
  loading.hidden = true;
  error.hidden = true;
  error.textContent = '';
  result.hidden = true;
  result.innerHTML = '';
}