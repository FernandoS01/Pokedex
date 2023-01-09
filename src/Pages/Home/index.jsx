import { useState, useEffect } from "react";
import axios from "axios";
import { Cards } from "./../../Components/Cards";
import "./../../global.css";
import { Navbar } from "./../../Components/Navbar";

export function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [pagination,setPagination] = useState(0)
  const pages = [{
    value: 0,
    id: Math.random(),
    page: 1
  },{
    value: 30,
    id: Math.random(),
    page: 2
  },{
    value: 60,
    id: Math.random(),
    page: 3
  },{
    value: 90,
    id: Math.random(),
    page: 4
  },
  {
    value: 120,
    id: Math.random(),
    page: 5
  },
  {
    value: 150,
    id: Math.random(),
    page: 6
  },]
  
  const getPokemons = () => {
    setPokemons([])
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${pagination}`)
    .then((res)=> res.data.results.forEach((poke)=>{
      axios.get(poke.url).then((res)=>setPokemons((prev)=>[...prev,res.data]))
    }))
  };

  useEffect(() => {
    getPokemons();
  }, [pagination]);

  useEffect(()=>{
    setFiltered(pokemons)
  },[pokemons])

return (
    <>
      <Navbar filter={setFiltered} list={pokemons} />
      <div className="flex mx-auto my-4 justify-center w-5/6 gap-2 md:gap-10">
      {
        pages.map((page)=>{
          return <button onClick={(e)=>setPagination(e.target.value)} key={page.id} className='bg-white px-4 py-2 rounded-md my-2' value={page.value}>{page.page}</button>
        })
      }
      </div>
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
