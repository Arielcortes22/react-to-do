import React, { useState , useEffect} from 'react'
import '../Styles/Pag.css'
import LlamadosTareas from '../Services/LlamadosTareas';



function Pagina() {

const [Tareas,setTareas]=useState()
const [MostrarTareas,setMostrarTareas]=useState([])

useEffect(() => {
  async  function recuperarDatos() {
      const datos= await LlamadosTareas.GetTareas()
      setMostrarTareas(datos)
  }
  recuperarDatos()
}, []);

  
function TareasInput(evento) {
  
  setTareas(evento.target.value)
}

function Agregar() {
  LlamadosTareas.PostTareas(Tareas)
  location.reload()
  
}
function Eliminar(id) {
  LlamadosTareas.DeleteTareas(id)
  location.reload()
  
 
  
}
   


  return (
 


   <div >
  <div className='Tablaon'>
    <h1>Tareas</h1>
    <input value={Tareas} onChange={TareasInput} type="text" />
    <br />
    <button onClick={Agregar}>Agregar</button>
  </div>
  <div>
 <h2>Tareas</h2>
 <ul>
 {MostrarTareas.map((Tareas, index) => (
          <li key={index}>
            <strong className='Vertarea'><h2>Tarea:</h2>{Tareas.Tareas}</strong>
           <button className='Eliminar' onClick={e=> Eliminar(Tareas.id)}>Eliminar</button>
          </li>
        ))}
 </ul>
  </div>
    
   
    </div>
 
  )
}

export default Pagina