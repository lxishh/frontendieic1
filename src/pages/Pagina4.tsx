import { obtenerPersonas } from '@/Firebase/Promesas'
import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'

//useEffect es un listener
// este listener le puedes definir que escuchar, una variable x ejemplo
// [] sin nada dentro = load

export const Pagina4 = () => {
    useEffect(()=>{
        obtenerPersonas().then((personas)=>{
            console.log(personas)
        }).catch((e)=>{
            alert("No se logran cargar los datos")
            console.log(e)
        })
    },[])
  return (
    <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Rut</th>
                    <th>Correo</th>
                    <th>Fecha Nacimiento</th>
                    <th>Edad</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    </>
  )
}

export default Pagina4
