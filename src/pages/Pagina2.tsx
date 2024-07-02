import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Pagina2 = () => {
  const [nombre, setNombre] = useState("Joselito")
  const [apellido, setApellido] = useState("Vaca")


  const [eNombre, setENombre] = useState("")
  const validarNombre = (valor:string) =>{
    if(valor.length<4){
        setENombre("Debes ingresar 4 caracteres")
    }else{
        setENombre("")
    }
    setNombre(valor)
  }


  return (
    <>
    <h1>Registro</h1>
    <h2>Bienvenido {nombre} {apellido}</h2>
    

    <Form>
        <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control 
                type='text' 
                placeholder='Ingrese su nombre'
                onChange={(e)=>validarNombre(e.currentTarget.value)}
            /> 
            <Form.Text>
                {eNombre}
            </Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Apellido:</Form.Label>
            <Form.Control 
                type='text' 
                placeholder='Ingrese su apellido'
                onChange={(e)=>setApellido(e.currentTarget.value)}
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>Primer número:</Form.Label>
            <Form.Control
                type='number'
                placeholder='Ingrese un número'
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Segundo número:</Form.Label>
            <Form.Control
                type='number'
                placeholder='Ingrese otro número'
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Resultado:</Form.Label>
            <Form.Control
                type='number'
            />
        </Form.Group>
        <Button type='button' variant='success'>Registrar</Button>
    </Form>
    </>
  )
}

export default Pagina2