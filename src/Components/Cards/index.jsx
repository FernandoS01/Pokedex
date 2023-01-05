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
      <h2 className="text-lg w-11/12 bg-yellow-100 capitalize p-2 rounded-md text-black">
        Type: {props.type} - {props.typeSecondary}
      </h2>
    </div>
  );
}
