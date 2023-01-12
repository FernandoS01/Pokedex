import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import { MagnifyingGlass } from "phosphor-react";

export function Navbar(props) { 
  const [api,setApi] = useState([])
  const getPokemons = ()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=210&offset=0}`)
    .then((res)=> res.data.results.forEach((poke)=>{
      axios.get(poke.url).then((res)=>{
        setApi((prev)=>[...prev,res.data])
      })
    }))
  }
  const filterPokemons = (e)=>{
    if(e.target.value != '') {
    const filtered = api.filter((pokemon)=>{
      return pokemon.name.includes(e.target.value.toLowerCase())
    })
    props.filter(filtered)
  }else {
    props.filter(props.list)
  }
  }

  useEffect(()=>{
    getPokemons()
    
  },[])
  return (
    <div className="w-full py-4 bg-[#F71E1E] flex justify-center items-center gap-4 flex-col">
     <div className='w-4/5 sm:w-2/4 px-10 flex x items-center relative'>
      <input
        placeholder="Busque um  Pokemon!"
        onChange={(e)=>{filterPokemons(e)}}
        type="text"
        className="w-full rounded py-2 px-4"
      />
      <MagnifyingGlass size={28} className="text-red-500 absolute right-3"  />
    </div>
      <select className='w-2/4 sm:w-1/6 mx-auto text-center border-none rounded'>
       <option>Name</option>
       <option>Type</option>
      </select>
      
    </div>
  );
}
