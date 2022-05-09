import React from "react";
import '../styles/Main.css';
import { useSelector } from "react-redux";
import FavFALSO from "../atomic/VerFavFALSO";
import FavVERDAD from "../atomic/FavVERDAD";

const Main = () => {
    const VerFav = useSelector(state => state.verFavoritos);
    return (
        <div>
            {VerFav
            ? <FavVERDAD/>
            :<FavFALSO />
            }
        </div>
    )
    
}

export default Main;
