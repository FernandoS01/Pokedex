import { MagnifyingGlass } from "phosphor-react";

export function Navbar(props) {
  const filterPokemons = (e) => {
   const filtered = props.list.filter((pokemon)=>{
    return pokemon.data.name.includes(e.target.value.toLowerCase())
   })
   props.filter(filtered)
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
      <select className='w-2/4 sm:w-1/6 mx-auto text-center border-none rounded'>
       <option>Name</option>
       <option>Type</option>
      </select>
      
    </div>
  );
}
