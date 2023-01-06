import React, { useEffect, useState } from 'react'

const fetchPokemons = (nextPageURL) => {
    //"https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20",
    return fetch(nextPageURL)
    .then(res => res.json())
    .then(json =>{
        return json;
    })
    .catch(err => {
        console.log(err)
    })
} 

const PokemonPaginatedList = ({clickHandler}) => {
    const [pokemonList, setPokemonList] = useState([])
    const [nextPageURL, setNextPageURL] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')

    const fetchNextPokemons = async () => {
        const nextPokemons = await fetchPokemons(nextPageURL);
        if (nextPokemons === undefined) return;
        setPokemonList([
            ...pokemonList,
            ...nextPokemons.results
        ])
        if (nextPokemons.next === undefined) return;
        setNextPageURL(nextPokemons.next);
    }

    useEffect(() => {
        fetchNextPokemons()
    }, [])

    

    return (
        <div>
            <h2>Pokemon List</h2>
            {pokemonList.map(pokemon => (
                <p onClick={() => clickHandler(pokemon.name)}>{pokemon.name}</p>
            ))}
            <button onClick={fetchNextPokemons}> Load next 20</button>
            
        </div>
    )
}

export default PokemonPaginatedList