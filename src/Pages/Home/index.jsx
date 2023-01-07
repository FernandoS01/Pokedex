import { useState, useEffect } from "react";
import axios from "axios";
import { Cards } from "./../../Components/Cards";
import "./../../global.css";
import { Navbar } from "./../../Components/Navbar";

export function Home() {
  const [pokemons, setPokemons] = useState([]);

  const [filtered, setFiltered] = useState([]);
  const getPokemons = () => {
  
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then((res)=> res.data.results.forEach((poke)=>{
      axios.get(poke.url).then((res)=>setPokemons((prev)=>[...prev,res.data]))
    }))
  };
  useEffect(() => {
    getPokemons();
  }, []);
  useEffect(()=>{
    setFiltered(pokemons)
  },[pokemons])

return (
    <>
      <Navbar filter={setFiltered} list={pokemons} />
      <div className=" w-full py-10 container flex justify-center flex-wrap gap-4 mx-auto">
        {filtered.length == 0 ? (
          <h1 className="text-white text-lg">Sem resultados...</h1>
        ) : (
          filtered.map((pokemon) => {
            return (
              <Cards
                key={pokemon.id}
                picture={pokemon.sprites.front_default}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                typeSecondary={pokemon?.types[1]?.type.name}
              />
            )
          })
        )}
      </div>
    </>
  );
}
