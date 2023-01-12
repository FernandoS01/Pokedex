import { useState, useEffect } from "react";
import axios from "axios";
import { Cards } from "./../../Components/Cards";
import "./../../global.css";
import { Navbar } from "./../../Components/Navbar";
import { pages } from "./Pagination";

export function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [pagination,setPagination] = useState(0)
  const [isLoading,setIsLoading] = useState(true)

  const getPokemons = () => {
    setPokemons([])
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${pagination}`)
    .then((res)=> res.data.results.forEach((poke)=>{
      axios.get(poke.url).then((res)=>{
        setPokemons((prev)=>[...prev,res.data])
        setIsLoading(false)
      })
    }))
  };

  const handlePagination = (e)=>{
  setPagination(e.target.value)  
}


  useEffect(() => {
    getPokemons();
  }, [pagination]);

  useEffect(()=>{
    setFiltered(pokemons)
  },[pokemons])


return (
    <>
      <Navbar filter={setFiltered} list={pokemons} />
     
      <div className=" w-full py-10 container flex justify-center flex-wrap gap-6 mx-auto">
        {
        isLoading ? 
          <h1>Carregando...</h1>
        :
        filtered.length == 0 ? (
          <h1 className="text-white text-lg">Sem resultados...</h1>
        ) : (
          filtered.map((pokemon) => {
            return (
              <Cards
                key={pokemon.id}
                picture={pokemon.sprites.front_default}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                typeSecondary={pokemon?.types[1]?.type.name}
              />
            )
          })
        )}
      </div>
      <div className="flex mx-auto my-4 justify-center w-5/6 gap-2 md:gap-10">
      {
        pages.map((page)=>{

        return page.value == pagination ?
          <button onClick={(e)=>handlePagination(e)} key={page.id} className='bg-white opacity-50 px-4 py-2 rounded-md my-2' value={page.value}>{page.page}</button>
        :
        <button onClick={(e)=>handlePagination(e)} key={page.id} className='bg-white opacity-100 px-4 py-2 rounded-md my-2' value={page.value}>{page.page}</button>
        })
      }
      </div>
    </>
  );
}
