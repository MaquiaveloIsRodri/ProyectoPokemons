import { useDispatch, useSelector } from "react-redux";
import React from "react";
import '../styles/Main.css';
import { useMediaQuery } from 'react-responsive'
import { ClickFavorite, FavoritePokemon } from "../actions/type";

const FavFALSO = () => {
    const state = useSelector(state => state.list);
    const dispatch = useDispatch();
    const Favorite = (item) => {
        dispatch(ClickFavorite(item))
    }
    const Tablet = useMediaQuery({ query: '(max-width: 700px)' })
    const Demas = useMediaQuery({ query: '(max-width: 10000px)' })  
    return (
        <div>
        { Tablet && 
                <div className="row row-cols-2 gy-1 gx-1">
                    {state.map((item, index) => {
                        const CreateFavorite = (pay) => {
                            dispatch(FavoritePokemon(pay))
                            console.log(pay)
                        }

                        return (
                            <div className="col" key={index}>
                                <div className="card">
                                    <img src={item.sprites.front_default} className="card-img-top" alt="..." />
                                    <span
                                        onClick={() => {
                                            Favorite(item.id)
                                            item.favorite
                                                ? CreateFavorite(item)
                                                : CreateFavorite(item)

                                        }}
                                        className={item.favorite
                                            ? "card-favorite"
                                            : "favorite"}
                                    ></span>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        {item.types.map((ability, index) =>
                                            <span key={index} className="btn btn-primary">{ability.type.name}</span>)
                                        }
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
        }
            {Demas &&
                <div className="row row-cols-3 gy-2 gx-2">

                    {state.map((item, index) => {
                        const CreateFavorite = (pay) => {
                            dispatch(FavoritePokemon(pay))
                            console.log(pay)
                        }

                        return (
                            <div className="col" key={index}>
                                <div className="card">
                                    <img src={item.sprites.front_default} className="card-img-top" alt="..." />
                                    <span
                                        onClick={() => {
                                            Favorite(item.id)
                                            item.favorite
                                                ? CreateFavorite(item)
                                                : CreateFavorite(item)

                                        }}
                                        className={item.favorite
                                            ? "card-favorite"
                                            : "favorite"}
                                    ></span>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        {item.types.map((ability, index) =>
                                            <span key={index} className="btn btn-primary">{ability.type.name}</span>)
                                        }
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            }
        
        </div>
    )
}
export default FavFALSO;