import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokemonApi = () => {
    const btnStyle={
        backgroundColor: 'green'
    }

    const [pokemon, setPokemon] = useState([]);

    const findPokemon = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
        .then(response => response.json())
        .then(response => {setPokemon(response.results)})
        .catch(err => {console.log(err)
        })
    }

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1200")
            .then(response => {setPokemon(response.data.results)})
            .catch(err => {console.log(err)
        })
    }, [])
    return(
        <>
            <h1>Pokemon from the API!</h1>
            <button onClick={findPokemon} style= {btnStyle}>Fetch Pokemon</button>
            {
                pokemon.map((item, i) => {
                    return <div key= {i}>
                        <h4>{item.name}</h4>
                    </div>
                })
            }
        </>
    )
}
export default PokemonApi;