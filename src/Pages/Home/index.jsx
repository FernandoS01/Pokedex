import { useState, useEffect } from "react";
import axios from "axios";
import { Cards } from "./../../Components/Cards";
import "./../../global.css";
import { Navbar } from "./../../Components/Navbar";

export function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const getPokemons = () => {
    const endpoints = [];
    for (let i = 1; i <= 30; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
     const response = axios.all(
      endpoints.forEach((endpoint) => {
        axios
          .get(endpoint)
          .then((res) => setPokemons((prev) => [...prev, res]))
          .catch((e)=>console.log(e)); 
      })
    );
    
  };
  useEffect(() => {
    getPokemons();
    console.log(filtered);
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
                key={pokemon.data.id}
                picture={pokemon.data.sprites.front_default}
                id={pokemon.data.id}
                name={pokemon.data.name}
                type={pokemon.data.types[0].type.name}
                typeSecondary={pokemon?.data?.types[1]?.type.name}
              />
            );
          })
        )}
      </div>
    </>
  );
}
