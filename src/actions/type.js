import Pokemons from "../Api/Pokemons";
import { Set_Pokemon, FAVORITE_POKEMON, CLICK_FAVORITE, LOADER, VER_FAVORITOS, FALSE_FAVORITE, NUMERO_BUSQUEDA, SET_POKEMON_BUSCADO } from "./Acreditar";
import React from "react";

const SetPokemon = (payload) => ({
    type: Set_Pokemon,
    payload
    
})
//agrega A la lista de favoritos
export const FavoritePokemon = (payload) => ({
    type: FAVORITE_POKEMON,
    payload
})
//NUMERO DE BUSQUEDA
export const NumeroBusqueda=(payload)=>({
    type:NUMERO_BUSQUEDA,
    payload
})
export const VerFavoritos=()=>({
    type: VER_FAVORITOS
})
export const FalseFavoritos = () =>({
    type: FALSE_FAVORITE
})
//busqueda pokemon
export const PokemonBuscado = (payload) => ({
    type: SET_POKEMON_BUSCADO,
    payload
})

    
//estado de la estrellita
export const ClickFavorite = (payload) => ({
    type: CLICK_FAVORITE,
    payload
})
//spinner de carga
const Loader = () => ({
    type: LOADER
})
//Exportador de la informacion de los pokemones y de Redux things
export const extraerPokemon = () => async(dispatch) => {
   try{
       const pokemones=await Pokemons();
       dispatch(SetPokemon(pokemones));
       dispatch(Loader())
   }
   catch(error){
       console.log(error);
   }

}