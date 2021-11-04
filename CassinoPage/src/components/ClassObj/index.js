import { Component } from 'react';
import listaGames from './ListaGames';
import './style.scss';

export default class Games extends Component {
    constructor() {
        super();
        this.state = {
            listaGames: games,
        }
    }

    render() {

        const removeGame = (idGame) => {

            const lista = this.state.listaGames.filter(({ id }) => {
                return id !== idGame;
            })
            this.setState({
                listaGames: games,
            })
        }
        
        const recover=()=>{
            this.setState({
                listaGames: games,
            })
        }

        return (
            <>
                <button onClick={recover()}>
                    recover
                </button>
                <button onClick={reload()}>
                    recover
                </button>

                <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
                    {this.state.listaGames.map(({ id, img, nome }) => {
                        return (
                            <div onClick={() => removeGame(id)}>
                                <img src={img}></img>
                                <h2>{nome}</h2>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}