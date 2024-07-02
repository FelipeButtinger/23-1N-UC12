async function fetchPokemon() {/*obtém e armazena o id do pokemon buscado*/ 
    const pokemonId = document.getElementById('pokemon-id').value;

    if (pokemonId) {
        try {
            // essa parte faz a requisição necessária à API do Pokémon para obter dados do Pokémon com o ID fornecido.
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const pokemon = await response.json();

            const pokemonImage = document.getElementById('pokemon-sprite');
            pokemonImage.src = pokemon.sprites.front_default;// essa parte procura o sprite do pokemon, define o link dele e torna visível.
            pokemonImage.style.display = 'block';
            document.getElementById('pokemon-name').innerText = `Nome: ${capitalizeFirstLetter(pokemon.name)}`;//procura o nome e ativa a função de letra maiúscula.
            document.getElementById('pokemon-type').innerText = `Tipos: ${pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join(', ')}`;//procura os tipos e ativa a função de letra maiúscula
            document.getElementById('pokemon-weight').innerText = `Peso: ${pokemon.weight / 10} kg`; // Converting weight to kg

            const pokemonSound = document.getElementById('pokemon-sound');
            const cryUrl = `https://pokemoncries.com/cries/${pokemonId}.mp3`; // o link que armazena os cries

            try {
                const cryResponse = await fetch(cryUrl);
                if (cryResponse.ok) {
                    pokemonSound.src = cryUrl;//procura o cry do pokemon e o toca
                    pokemonSound.play();
                } else {
                    throw new Error('Não encontrado o som desse pokemons.');
                }
            } catch (cryError) {
                console.log('Houve erro ao encontrar o som do Pokémon:', cryError);
            }

        } catch (error) {
            console.error('Erro ao buscar informações do Pokémon:', error);
        }
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);//função que tive que pesquisar para tornar a primeira letra das informações em letra maiúscula
}

let isMusicPlaying = true;//Ativa música


