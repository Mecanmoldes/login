import React, { useState } from "react"
import Imagen from "../assets/imagen1.jpg"
import ImagenP from "../assets/imagen2.png"

import appFirebase from "../credenciales"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
const auth = getAuth(appFirebase)

const Login = () => {

  const [registrando, setRegistrando]= useState(false)

  const functAutentication = async (e) => {
    e.preventDefault();
    const correo= e.target.email.value;
    const contraseña = e.target.password.value;
    
    if(registrando){
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña)
      } catch (error) {
        alert("Asegurese que la contraseña contenga mas de 8 caracteres")
      }
    }
    else{
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña)
      } catch (error) {
        alert("El correo o la contraseña son incorrectos")
      }
      
    }

  }

  return (
        <div className='container'>
          <h4 className="titulo-principal">MECANMOLDES</h4> 
          <div className="row">
            <div className="col-md-4">
              <div className="padre">
                <div className="card card-body shadow-lg">
                  <img src={ImagenP} alt="" className="estilo-profile" />
                  <form onSubmit={functAutentication}>
                    <input type="text" placeholder="Ingresa tu Email:" className="cajatexto" id="email" />
                    <input type="password" placeholder="Ingresa tu Contraseña" className="cajatexto" id="password" />
                    <button className='btnform'>{registrando ? "Registrate" : "Inicia Sesión"}</button>
                  </form>
                  <h4 className="texto">
                    {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
                    <button className="btnswitch" onClick={() => setRegistrando(!registrando)}>
                      {registrando ? "Iniciar Sesión" : "Registrate"}
                    </button>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <img src={Imagen} alt="" className="tamaño-imagen" />
            </div>
          </div>
        </div>
      );
    }
    
    export default Login;
    