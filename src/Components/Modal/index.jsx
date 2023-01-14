import { types } from "../Cards/Types"

export const Modal = (props) =>{
    console.log(props.modalData)
    return (
        <div className="w-full text-center bg-blue-400  absolute top-0 px-10 ">
            <div className="flex justify-around">
                <>
                    <h1 className="text-black">name:{props.modalData[0].name}</h1>
                    <h1>Nº{props.modalData[0].id}</h1>
                </>
                <button onClick={()=>props.setModalIsOpen(false)}>Sair</button>
            </div>

            {
                types.map((type)=>{
                  return props.modalData[0].types[0].type.name == type.name?
                  <h2 className='text-center text-lg capitalize' style={{backgroundColor:type.color}}>{type.name}</h2>
                  :
                    null
                })
            }
            {
                types.map((type)=>{
                  return props.modalData[0].types[1]?.type.name == type.name?
                  <h2 className='text-center text-lg capitalize' style={{backgroundColor:type.color}}>{type.name}</h2>
                  :
                    null
                })
            }
            <div className="flex flex-wrap gap-10 mx-auto w-4/5">
                <div className='w-full md:w-2/5'>
                    <h2>Versão Padrão</h2>
                    <img className='w-full bg-white rounded' src={props.modalData[0].sprites.front_default} />
                </div>
                <div className='w-full md:w-2/5'>
                    <h2>Versão Shiny</h2>
                    <img className='w-full bg-white rounded' src={props.modalData[0].sprites.front_shiny} />
                </div>
            </div>
            <fieldset className="border-black border-2 border-solid p-4 rounded">
                <legend>Habilidades</legend>
            <div className="flex overflow-hidden flex-wrap gap-2">
            {
                props.modalData[0].moves.map((move)=>{
                    return <p className="px-2 bg-zinc-500 rounded text-sm text-white">{move.move.name}</p>
                })
            }
            </div>
            </fieldset>
            
        </div>
    )
}