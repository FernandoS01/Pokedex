import { types } from "./Types";

export function Cards(props) {
  return (
    <div onClick={(e)=>props.event(e)} id={props.id} className="flex flex-col items-center bg-[#f39135] w-4/5 sm:w-1/4 md:w-3/12 lg:w-2/12 rounded-lg overflow-hidden shadow-md gap-3 py-4 shadow-zinc-700 text-center">
      <div id={props.id} className="flex w-11/12 items-center justify-center">
        <h1 id={props.id} className="text-2xl md:text-md w-full bg-white text-black rounded-xl capitalize ">
        {props.name}
        </h1>  
      </div>
      <img id={props.id} className="w-11/12 bg-[#FFFFFB] rounded-md" src={props.picture} alt={props.name} />
      <div id={props.id} className="flex justify-center gap-4">
      {
     types.map((type)=>{
      return <>
        {
          props.type ==type.name ?
          <h2  id={props.id} style={{backgroundColor:type.color}} className='text-sm capitalize p-2 rounded-md text-white'>
        {props.type} </h2>
          :
          null
        }
      </>
     })
    }
    {
    types.map((type)=>{
      return <>
        {
          props.typeSecondary ==type.name ?
          <h2 id={props.id} style={{backgroundColor:type.color}} className='text-sm capitalize p-2 rounded-md text-white'>
        {props.typeSecondary} </h2>
          :
          null
        }
      </>
     })
    }
    </div>
    </div>
  );
}
