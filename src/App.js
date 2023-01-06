import './App.css';
import { useCallback, useEffect, useState } from 'react';
import AbilitiesTable from './components/AbilitiesTable';
import ApperanceGrid from './components/ApperanceGrid';
import Types from './components/Types';
import PokemonPaginatedList from './views/PokemonPaginatedList';
import { useStateValue } from './context/StateProvider';

function App() {
  const [pokemon, setPokemon] = useState()
  const [evolutionLine, setEvolutionLine] = useState([])
  const [searchPokemonName, setSearchPokemonName] = useState('')
  const [{user}, dispatch] = useStateValue()
  const [loading, setLoading ]= useState(false)

  useEffect(()=> {
    dispatch({
      type: 'SET_USER',
      user: {
        name: 'Bruno',
        id: 1
      }
    })
  }, [])
  console.log(user)
  
  
  const searchPokemon = async (name = searchPokemonName) => {
    if(!name || name === "") {
      alert("Please type something first")
      return
    }
    setLoading(true)
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      setPokemon(json)
    })
    .catch(err => {
      console.log(err)
      alert(`Pokemon ${searchPokemonName} doesn't exists`)})
    setLoading(false)

  }
  const submitHandler = (e) =>{
    e.preventDefault();
    searchPokemon();
    

  }

  useEffect(() => {
    if(pokemon){

      fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
      .then(res => res.json())
      .then((json => {
        fetch(json.evolution_chain.url)
        .then(res => res.json())
        .then((json2 => {
          //Get first pokemon in evolution line
          const evolutions = [json2.chain.species.name]
          //Get next evolution if it has one, can have more than 1
          
          let nextChain = json2.chain.evolves_to
          while(nextChain.length !== 0){
            for(let evolve of nextChain){
              evolutions.push(evolve.species.name)
            }
            nextChain = nextChain[0]?.evolves_to
            
          }
          
          setEvolutionLine(evolutions)
        }))
        .catch(err => {
          console.log(err)
          alert('noEvolutionLine')
        })
      }))
      .catch(err => console.log(err))
      
    }
  }, [pokemon])

  const cickEvolutionHandler = useCallback((name) => {
    setSearchPokemonName(name)
    searchPokemon(name)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  console.log("DEBUG", pokemon)
  return (
    <div className="App">
      <header className="App__conatiner">
        <div style={{marginBottom: '50px', borderBottom: '2px solid white', width: '100%', display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flexWrap: 'wrap'}}>
        <h1>
          Pokemon
        </h1>
        <h2>Evolution Line</h2>
        <div className='App__EvolutionConatiner'>
          {evolutionLine.length > 0 && evolutionLine.map(evoltuion => (
            <p onClick={()=>cickEvolutionHandler(evoltuion)}>{evoltuion}</p>
            ))}
        </div>
        <form onSubmit={submitHandler}>

        <input 
          type='text'
          name='pokemonName'
          value={searchPokemonName}
          onChange={(e) => setSearchPokemonName(e.target.value)} />
          <button type='submit'>Search</button>
        </form>

        <p>{pokemon?.name}</p>
          {pokemon ? 
            <>
              <h3>Avg Stats: {((pokemon.stats?.reduce((a,b) => a+b.base_stat,0))/pokemon.stats?.length).toFixed(2)}</h3>
              <h3>Highest stat: {pokemon.stats?.reduce((max, stat) => max.base_stat > stat.base_stat ? max.stat.name : stat.stat.name)} {Math.max.apply(Math, pokemon.stats?.map(stat => stat.base_stat))}</h3>
              <Types types={pokemon.types} />
              <AbilitiesTable abilities={pokemon.abilities}/>
              <ApperanceGrid sprites={pokemon.sprites }/>
            </>
            : !loading ? <p>Search by name!</p> :<p>loading...</p>
          }
          </div>
          <PokemonPaginatedList clickHandler={cickEvolutionHandler}/>
      </header>
    </div>
  );
}

export default App;
