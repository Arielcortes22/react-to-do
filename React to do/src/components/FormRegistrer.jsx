import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import llamados from '../services/llamados';


function FormRegistrer() {

  const [nombreUsuario,SetNombreUsuario]= useState ()
  const [passwordUsuario,SetPasswordUsuario] = useState()

  function nombre(evento) {
    SetNombreUsuario(evento.target.value)
    console.log(nombreUsuario);
  }

  function Contraseña(evento) {
    SetPasswordUsuario(evento.target.value)
    console.log(passwordUsuario);
    
  }


function Enviardatos() {
  console.log("click");
  
  llamados.PostUsers(nombreUsuario,passwordUsuario)
}




  return (
    <div>

      <div className='data'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label> <br />
        <Form.Control value={nombreUsuario} onChange={nombre}  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
    
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label> <br />
        <Form.Control value={passwordUsuario} onChange={Contraseña} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Link to="/Login"> <Button  onClick={Enviardatos} variant="primary">
        Registrarse
      </Button>
      </Link>
      </div>

    </div>
  )
}

export default FormRegistrer