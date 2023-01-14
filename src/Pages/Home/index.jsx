import { useState, useEffect } from "react";
import ReactDOM  from "react-dom";

import axios from "axios";
import { Cards } from "./../../Components/Cards";
import "./../../global.css";
import { Navbar } from "./../../Components/Navbar";
import { pages } from "./Pagination";

import Pokeball from './../../Assets/Pokeball.png'
import Wobbufet from './../../Assets/Wobbufet.png'
import { Modal } from "../../Components/Modal";

export function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [pagination,setPagination] = useState(0)
  const [isLoading,setIsLoading] = useState(true)
  const [modalIsOpen,setModalIsOpen] = useState(false)
  const [modalData,setModalData] = useState(0)

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

  const addModal = (e) => {
    const modal = filtered.filter((pokemon)=>{
      return pokemon.id == e.target.id
    })
    setModalData(modal)
    
    setModalIsOpen(true)
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
     <div>
     {
      modalIsOpen ?
        ReactDOM.createPortal(<Modal modalData={modalData} setModalIsOpen={setModalIsOpen}/>,document.getElementById('modal'))
      :
    <>
     
      <div className=" w-full py-10 container flex justify-center flex-wrap gap-6 mx-auto">
        {
        isLoading ? 
        <div className="flex flex-col justify-center items-center">
          <img id='pokeball' src={Pokeball} className='w-1/4' alt='pokeball' />
          <h1 className="text-2xl">Carregando...</h1>
        </div>
          :
        filtered.length == 0 ? (
          <div className="flex flex-col justify-center items-center">
          <img className="w-1/2" src={Wobbufet} alt='wobbufet' />
          <h1 className="text-white text-2xl">Sem resultados...</h1>
          </div>
        ) : (
          filtered.map((pokemon) => {
            return (
              <Cards
                event={addModal}
                onClick={(e)=>console.log(e.target)}
                key={pokemon.id}
                id={pokemon.id}
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
      }
    </div>
    </>
  );
}
