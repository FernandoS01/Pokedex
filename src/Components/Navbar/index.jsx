import { useRef } from 'react'
import axios from 'axios'

import { MagnifyingGlass, RedditLogo } from "phosphor-react";

export function Navbar(props) {
  const selectRef = useRef()

  const filterPokemons = (e) => {
  if(selectRef.current.value == 'Name'){  
  //   const filtered = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
  //   .then((res)=>{
  //     return res.data
  //   })
  //  console.log(filtered)  
   const filtered = props.list.filter((pokemon)=>{
    return pokemon.name.includes(e.target.value.toLowerCase())
  })
  props.filter(filtered)
}
  if(selectRef.current.value == 'Type'){
    const filtered = props.list.filter((pokemon)=>{
      return pokemon.types[0].type.name.includes(e.target.value.toLowerCase())
     })
     props.filter(filtered)
  }
  };

  return (
    <div className="w-full py-4 bg-red-600 flex justify-center items-center gap-4 flex-col">
     <div className='w-4/5 sm:w-2/4 px-2 flex x items-center relative'>
      <input
        placeholder="Busque um  Pokemon!"
        onChange={(e)=>{filterPokemons(e)}}
        type="text"
        className="w-full rounded py-2 px-4"
      />
      <MagnifyingGlass size={28} className="text-red-500 absolute right-3"  />
    </div>
      <select ref={selectRef} className='w-2/4 sm:w-1/6 mx-auto text-center border-none rounded'>
       <option>Name</option>
       <option>Type</option>
      </select>
      
    </div>
  );
}
