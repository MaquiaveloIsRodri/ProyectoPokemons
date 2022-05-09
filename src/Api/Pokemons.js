import axios from "axios";

const URL = "https://pokeapi.co/api/v2";

const instance = axios.create({
    baseURL: URL
});

const Pokemons=()=>instance.get('/pokemon?limit=150')
.then(res=>{
    const NamePokemon = res.data.results;
    return Promise.all(NamePokemon.map(pokemon => axios.get(pokemon.url)))
})
.then(response => {
    const img = response.map((pokemon) => {
        const data = pokemon.data
        return data;
    }    
)
return img;
}
);

export default Pokemons;