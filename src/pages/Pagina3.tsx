import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


//Definir tipo de dato
//Si se coloca "?" significa que es opcional
interface Persona{
    nombre:string,
    apellido:string,
    rut:string,
    fechaNacimiento:string,
    edad:number,
    correo:string
}

//Definir dato con el que inician las variables
const initialState:Persona = {
    nombre:"",
    apellido:"",
    correo:"",
    edad:0,
    rut:"",
    fechaNacimiento:""
}

export const Pagina3 = () => {

    //hook de useState
    const [persona, setPersona] = useState<Persona>(initialState)

    //interactua con el (e)onChange y el useState
    const handlePersona = (name:string, value:string) =>{
        
    // "..." ¿cuál es el input que modificaste? 
    // [name] buscar la clave
    // "value" es lo ingresado por el usuario
    //recupera los valores actuales y luego identifica cuál se quiere modificar
    //"desarma" el diccionario para recuperar individual
        setPersona({...persona, [name]:value})
    }

    //el "name" debe coincidir con el que se utilizo arriba.
    //se usa el onChange para recuperar el valor y pasarselo a la funcion de handlePersona
  return (
    <>
        <Form>
            <Form.Group>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type='text' placeholder='Ingrese nombre'
                name='nombre' onChange={(e)=>{handlePersona(e.currentTarget.name, e.currentTarget.value)}}/>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Apellido:</Form.Label>
                <Form.Control type='text' placeholder='Ingrese apellido'
                name='apellido' onChange={(e)=>{handlePersona(e.currentTarget.name, e.currentTarget.value)}}/>
                <Form.Text></Form.Text>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Rut:</Form.Label>
                <Form.Control type='text' placeholder='Ingrese rut'
                name='rut' onChange={(e)=>{handlePersona(e.currentTarget.name, e.currentTarget.value)}}/>
                <Form.Text></Form.Text>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Correo:</Form.Label>
                <Form.Control type='email' placeholder='Ingrese correo'
                name='correo' onChange={(e)=>{handlePersona(e.currentTarget.name, e.currentTarget.value)}}/>
                <Form.Text></Form.Text>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Fecha Nacimiento:</Form.Label>
                <Form.Control type='date' placeholder='Ingrese fecha nacimiento'
                name='fechaNacimiento' onChange={(e)=>{handlePersona(e.currentTarget.name, e.currentTarget.value)}}/>
                <Form.Text></Form.Text>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Edad:</Form.Label>
                <Form.Control type='number' placeholder='Ingrese edad'
                name='edad' onChange={(e)=>{handlePersona(e.currentTarget.name, e.currentTarget.value)}}/>
                <Form.Text></Form.Text>
            </Form.Group>

            <Button type='button' variant='primary'>Registrar</Button>
        </Form>
    </>
  )
}

export default Pagina3
