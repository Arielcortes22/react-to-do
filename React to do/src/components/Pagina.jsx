import React, { useState, useEffect } from 'react';
import '../Styles/Pag.css';
import LlamadosTareas from '../Services/LlamadosTareas';

function Pagina() {
  const [Tareas, setTareas] = useState("");
  const [MostrarTareas, setMostrarTareas] = useState([]);
  const [editando, setEditando] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  useEffect(() => {
    async function recuperarDatos() {
      const datos = await LlamadosTareas.GetTareas();
      setMostrarTareas(datos);
    }
    recuperarDatos();
  }, []);

  function TareasInput(evento) {
    setTareas(evento.target.value);
  }

  function Agregar() {
    if (editando) {
      console.log(`Editando tarea con id: ${idEditando}`);
      LlamadosTareas.UpdateTareas(idEditando, Tareas)
      setEditando(false);
      setIdEditando(null);
    } else {
      LlamadosTareas.PostTareas(Tareas)
    }
    setTareas("");
    location.reload();
  }

  function Eliminar(id) {
    LlamadosTareas.DeleteTareas(id)
    location.reload();
  }

  function Editar(id) {
    const EditarTarea = MostrarTareas.find((Tarea) => Tarea.id === id);
    if (EditarTarea) {
      setTareas(EditarTarea.Tareas || "");
      setEditando(true);
      setIdEditando(id);
      console.log(`Tarea encontrada: ${EditarTarea.Tareas}`);
    } else {
      console.error('Tarea no encontrada');
    }
  }

  return (
    <div>
      <div className='Tablaon'>
        <h1>Tareas</h1>
        <input value={Tareas} onChange={TareasInput} type="text" />
        <br />
        <button onClick={Agregar}>
          {editando ? "Actualizar" : "Agregar"}
        </button>
      </div>
      <div className='Tareas2'>
        <h2>Tareas</h2>
        <ul>
          {MostrarTareas.map((Tarea, index) => (
            <li key={index}>
              <strong className='Vertarea'><h2>Tarea:</h2>{Tarea.Tareas}</strong>
              <button className='Eliminar' onClick={() => Eliminar(Tarea.id)}>Eliminar</button>
              <button className='Editar' onClick={() => Editar(Tarea.id)}>Editar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Pagina;