import React from 'react'

interface Props{
    permiso1:string,
    permiso2:string
}

export const Permiso = (props:Props) => {
  return (
    <>
        <ul>
            <li>permiso1: {props.permiso1}</li>
            <li>permiso2: {props.permiso2}</li>
        </ul>
    </>
  )
}