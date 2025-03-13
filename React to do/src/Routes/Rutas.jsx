import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Registrer from '../Pages/Registrer';
import Pag from '../Pages/Pag';

function Rutas() {
  return (
    <div>
      <Router>
        <Routes>
      
                        

                           
                            <Route path="/Login" element={<Login/>}/>   
                            <Route path="/Registrer" element={<Registrer/>}/>   
                            <Route path="/Pag" element={<Pag/>}/>   
                               


                      
                            
        </Routes>
      </Router>



    </div>
  )
}

export default Rutas