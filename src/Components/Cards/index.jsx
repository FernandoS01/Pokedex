import { types } from "./Types";

export function Cards(props) {
  return (
    <div className="flex flex-col items-center bg-[#FFC145] w-4/5 sm:w-2/12 rounded-lg overflow-hidden shadow-md gap-3 py-4 shadow-zinc-700 text-center">
      <div className="flex w-11/12 items-center justify-center">
        <h1 className="text-2xl md:text-md w-full bg-white text-black rounded-xl capitalize ">
        {props.name}
        </h1>  
      </div>
      <img className="w-11/12 bg-[#FFFFFB] rounded-md" src={props.picture} alt={props.name} />
      <div className="flex justify-center gap-4">
      {
     types.map((type)=>{
      return <>
        {
          props.type ==type.name ?
          <h2 style={{backgroundColor:type.color}} className='text-md capitalize p-2 rounded-md text-white'>
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
          <h2 style={{backgroundColor:type.color}} className='text-md capitalize p-2 rounded-md text-white'>
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
