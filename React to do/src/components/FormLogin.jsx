import React, { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import llamados from '../services/llamados';
import Swal from 'sweetalert2'


function FormLogin() {

  const [nombreUsuario,SetNombreUsuario]=useState()
  const [passwordUsuario,SetPasswordUsuario]=useState()
  const [usuarios,SetUsuarios]=useState()


  const navigate = useNavigate()

     useEffect(() => {
   
       async function fetchDataUsers() {
   
     
         const datos = await llamados.GetUsers()
         
         SetUsuarios(datos)
         
    
       };
   
       fetchDataUsers();
   
   
     }, []); 




  function nombre(evento) {

    SetNombreUsuario(evento.target.value)
    console.log(nombreUsuario);
    
    
  }

  function password(evento) {

    SetPasswordUsuario(evento.target.value)
    console.log(passwordUsuario);
    
    
  }

  async function validar() {
    const encontrado = usuarios.find(usuario => usuario.nombre === nombreUsuario && usuario.password === passwordUsuario);

    if (!encontrado) {
      console.log("Usuario o contraseña incorrectos");
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o contraseña incorrectos',
      });
    } else {
      await Swal.fire({
        title: 'Inicio de sesión exitoso',
        text: 'Redirigiendo...',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        willClose: () => {
          navigate('/Pag');
        }
      });
    }
  }



  
  return (
    <div>
      <div className='Login'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label> <br />
        <Form.Control value={nombreUsuario} onChange={nombre}  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
    
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label> <br />
        <Form.Control value={passwordUsuario} onChange={password} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
    <Button onClick={validar} variant="primary">
        Iniciar 
      </Button> <br />
      <Link to="/Registrer">No tienes una cuenta? Regístrate aquí</Link> <br />
      </div>

      


    </div>
  )
}

export default FormLogin