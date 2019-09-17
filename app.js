const pokemonName = document.getElementById("pokemon-name");
const pokemonHeight = document.getElementById("pokemon-height");
pokemonName.innerText = "El nombre de mi pokemon es: ";

const pokemonApiUrl1 = "https://pokeapi.co/api/v2/";

let getPokemonData = async () => {
    const response = await fetch(`${pokemonApiUrl1}pokemon/1/`);
    const pokemon = await response.json();
    console.log(pokemon);
    pokemonName.innerText=pokemon.name;
    const {name, height} = pokemon;
    pokemonName.innerText = name;
    pokemonHeight.innerText = `La altura es: ${height}`;
}

getPokemonData();