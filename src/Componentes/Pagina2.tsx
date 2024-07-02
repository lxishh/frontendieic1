import React from 'react'

interface Props{
    num1:number,
    num2:number
}

export const Pagina2 = (props:Props) => {
  return (
    <>
        <form>
            <h1>Calculadora</h1>

            <label>Ingrese primer número:</label>
            <input type='number'></input>
        </form>
    </>
  )
}
