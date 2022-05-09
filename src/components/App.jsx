import '../styles/App.css';
import React, { useEffect } from 'react';
import Nav from './Nav';
import Main from './Main';
import { useDispatch, useSelector } from 'react-redux';
import { extraerPokemon } from '../actions/type';
import SpinnerLoader from './loader';
import Busqueda from '../atomic/Busqueda';
import BusquedaEncontrada from '../atomic/BusquedaEncontrada';


function App() {
  const dispatch = useDispatch();
  const load = useSelector(state => state.loader);
  const numeroBusqueda = useSelector(state => state.mostrarBusqueda);
  const pokemonBuscado = useSelector(state => state.ListBuscado); 
  
  const numBusqueda = pokemonBuscado.length   
  const condicion = () => {
    if (numBusqueda>0) {
      return (<BusquedaEncontrada/>)
    }else{
      return (<Busqueda />)
    }
  }
  return (
    useEffect(() => {
      dispatch(extraerPokemon());
    },),

    <div className="App">

      {load &&<SpinnerLoader />}
      <Nav />
      {
          numeroBusqueda 
            ? condicion()
            : <Main /> 
      }
      
      
    </div>
  )
    
}

export default App;
