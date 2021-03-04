const axios = require('axios');


const pokemon = process.argv[2]

console.log(pokemon)

// const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon

const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`


async function getPokemon() {
    try{
         const response = await axios.get(url);
         console.log(response)
    }catch(e){
        console.error(e.response.data)
    } 
}

getPokemon()