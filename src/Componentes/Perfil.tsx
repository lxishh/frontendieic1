import React from "react";

interface Props{
    nombre:string,
    apellido:string,
    edad?:number
}

export const Perfil = (props:Props) => {
    return (
        <>
            <h1>Hola!</h1>
            <p>Nombre: {props.nombre}</p>
            <p>Apellido: {props.apellido}</p>
        </>
    )
}