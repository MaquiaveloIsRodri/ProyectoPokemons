import { Set_Pokemon, FAVORITE_POKEMON, CLICK_FAVORITE, LOADER, VER_FAVORITOS, FALSE_FAVORITE, NUMERO_BUSQUEDA, SET_POKEMON_BUSCADO }  from "../actions/Acreditar"
const initialState = {
    list: [],
    listaFavoritos: [],
    ListBuscado: [],
    loader:true,
    verFavoritos:false,
    PalabraBusqueda:"",
    mostrarBusqueda:false

}

const PokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case Set_Pokemon:
            return {...state, list : action.payload}

        case FAVORITE_POKEMON:
            const Lista = [...state.list]
            const favoritos = Lista.filter(pokemon => pokemon.favorite === true); 
            return {...state, listaFavoritos: favoritos}

        case CLICK_FAVORITE:
            const newList = [...state.list]
            const pokemon =newList.findIndex(pokemon => pokemon.id === action.payload)
            if(pokemon !== -1){
                const newList = [...state.list]
                newList[pokemon].favorite = !newList[pokemon].favorite
                console.log(newList[pokemon].favorite)
                return { ...state, list: newList }
            }
        case SET_POKEMON_BUSCADO:
            const ListaBuscado = [...state.list]
            const buscado = ListaBuscado.filter(pokemon => pokemon.name.includes(state.PalabraBusqueda));
            return {...state, ListBuscado: buscado}


        case NUMERO_BUSQUEDA: 
            if (action.payload.length >0){
                return { ...state, PalabraBusqueda:action.payload,mostrarBusqueda:true}
            }else{
                return {...state,mostrarBusqueda:false}
            }

        case VER_FAVORITOS:
            return {...state, verFavoritos: true}
        
        
        case FALSE_FAVORITE:
            return {...state, verFavoritos: false}

        case LOADER:
            return { ...state,loader:state.loader=false }  
        default:
            return {...state}
    }
}

export default PokemonReducer