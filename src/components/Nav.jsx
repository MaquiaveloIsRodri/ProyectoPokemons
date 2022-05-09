import React from "react";
import { useDispatch } from "react-redux";
import { VerFavoritos, FalseFavoritos, NumeroBusqueda, PokemonBuscado } from "../actions/type";
import '../styles/Nav.css';


const Nav = () => {
    const dispatch = useDispatch();
    const falFavorite = () => {
        dispatch(FalseFavoritos());
    }
    const trueFavorite =()=> {
        dispatch(VerFavoritos())
    }
    const change= (event)=>{
        dispatch(NumeroBusqueda(event.target.value));
        dispatch(PokemonBuscado(event.target.value));
    }
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand iconNat" ></a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a 
                                className="nav-link active" 
                                aria-current="page"
                                onClick={()=>{falFavorite()}}
                                >Home</a>
                            </li>
                            <li className="nav-item">
                                <a 
                                className="nav-link" 
                                onClick={() => { trueFavorite()}}
                                >Favoritos</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Buscar" 
                                aria-label="Search"
                                onChange={change}
                            />
                               
                        </form>
                    </div>
                </div>
            </nav>
        
    )
}

export default Nav;