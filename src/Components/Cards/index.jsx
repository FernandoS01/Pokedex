export function Cards(props) {
  return (
    <div className="flex flex-col items-center bg-yellow-600 w-4/5 sm:w-1/4 border border-black rounded-lg overflow-hidden shadow-md gap-3 py-4 shadow-black text-center">
      <div className="flex w-11/12 items-center justify-between">
        <span className="bg-white text-black rounded-full font-bold py-2 px-1">ID:{props.id}</span>
        <h1 className="text-2xl bg-white text-black rounded-xl capitalize w-4/6 ">
        {props.name}
        </h1>
      
      </div>
      <img className="w-11/12 bg-zinc-100 rounded-md" src={props.picture} alt={props.name} />
      <div className="flex justify-center gap-4">
      {
      props.type == 'grass' ?
      <h2 className="text-md bg-[#7AC74C] capitalize p-2 rounded-md text-white">
        Type: {props.type} </h2>
      :
      props.type == 'fire' ?
      <h2 className="text-md  bg-[#EE8130] capitalize p-2 rounded-md text-white">
        Type: {props.type}</h2>
      :
      props.type == 'bug' ?
      <h2 className="text-md  bg-[#A6B91A] capitalize p-2 rounded-md text-white">
        Type: {props.type}</h2>
      :
      props.type == 'electric' ?
      <h2 className="text-md bg-[#F7D02C] capitalize p-2 rounded-md text-white">
        Type: {props.type}</h2>
      :
      props.type == 'water' ?
      <h2 className="text-md bg-[#6390F0] capitalize p-2 rounded-md text-white">
        Type: {props.type}</h2>
      :
      props.type == 'poison' ?
      <h2 className="text-md bg-[#A33EA1] capitalize p-2 rounded-md text-white">
        Type: {props.type}</h2>
      :
      props.type == 'ice' ?
      <h2 className="text-md bg-[#96D9D6] capitalize p-2 rounded-md text-white">
        Type: {props.type}</h2>
      :
      props.type == 'fighting' ?
      <h2 className="text-md bg-[#C22E28] capitalize p-2 rounded-md text-white">
        Type: {props.type}</h2>

      :
      props.type == 'flying' ?
      <h2 className="text-md bg-[#A98FF3] capitalize p-2 rounded-md text-white">
        Type: {props.type}</h2>
      :
      props.type == 'psychic' ?
      <h2 className="text-md bg-[#F95587] capitalize p-2 rounded-md text-white">
        Type: {props.type}</h2>
      :
      props.type == 'rock' ?
      <h2 className="text-md bg-[#B6A136] capitalize p-2 rounded-md text-white">
        Type: {props.type}</h2>
      :
      props.type == 'flying' ?
      <h2 className="text-md bg-[#A98FF3] capitalize p-2 rounded-md text-white">
        Type: {props.type}</h2>
      :
      <h2 className="text-md bg-[#A8A77A] capitalize p-2 rounded-md text-white">
        Type: {props.type}</h2>
    }
    {
     props.typeSecondary == 'grass' ?
     <h2 className="text-md bg-[#7AC74C] capitalize p-2 rounded-md text-white">
       Type: {props.typeSecondary} </h2>
     :
     props.typeSecondary == 'fire' ?
     <h2 className="text-md bg-[#EE8130] capitalize p-2 rounded-md text-white">
       Type: {props.typeSecondary}</h2>
     :
     props.typeSecondary == 'bug' ?
     <h2 className="text-md bg-[#A6B91A] capitalize p-2 rounded-md text-white">
       Type: {props.typeSecondary}</h2>
     :
     props.typeSecondary == 'electric' ?
     <h2 className="text-md bg-[#F7D02C] capitalize p-2 rounded-md text-white">
       Type: {props.typeSecondary}</h2>
     :
     props.typeSecondary == 'water' ?
     <h2 className="text-md bg-[#6390F0] capitalize p-2 rounded-md text-white">
       Type: {props.type}</h2>
     :
     props.typeSecondary == 'poison' ?
     <h2 className="text-md bg-[#A33EA1] capitalize p-2 rounded-md text-white">
       Type: {props.typeSecondary}</h2>
     :
     props.typeSecondary == 'ice' ?
     <h2 className="text-md bg-[#96D9D6] capitalize p-2 rounded-md text-white">
       Type: {props.type}</h2>
     :
     props.typeSecondary == 'fighting' ?
     <h2 className="text-md bg-[#C22E28] capitalize p-2 rounded-md text-white">
       Type: {props.typeSecondary}</h2>
     :
     props.typeSecondary == 'flying' ?
     <h2 className="text-md bg-[#A98FF3] capitalize p-2 rounded-md text-white">
       Type: {props.typeSecondary}</h2>
     :
     props.typeSecondary == 'psychic' ?
     <h2 className="text-md bg-[#F95587] capitalize p-2 rounded-md text-white">
       Type: {props.typeSecondary}</h2>
     :
     props.typeSecondary == 'rock' ?
     <h2 className="text-md bg-[#B6A136] capitalize p-2 rounded-md text-white">
       Type: {props.typeSecondary}</h2>
     :
     props.typeSecondary == 'flying' ?
     <h2 className="text-md bg-[#A98FF3] capitalize p-2 rounded-md text-white">
       Type: {props.typeSecondary}</h2>
     :
     null
    }
    </div>
    </div>
  );
}
