import { initialStatePersona } from "@/EstadosIniciales/Persona";
import { registrarPersona } from "@/Firebase/Promesas";
import { Persona } from "@/Interfaces/interfaces";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//aquí antes estaba la interfaz pero se movio y ahora se IMPORTO

//aquí antes estaba el initialState pero se movio y ahora se IMPORTO

export const Pagina3 = () => {
  //hook de useState
  const [persona, setPersona] = useState<Persona>(initialStatePersona);

  //interactua con el (e)onChange y el useState

  // "..." ¿cuál es el input que modificaste?
  // [name] buscar la clave
  // "value" es lo ingresado por el usuario
  //recupera los valores actuales y luego identifica cuál se quiere modificar
  //"desarma" el diccionario para recuperar individual
  const handlePersona = (name: string, value: string) => {
    setPersona({ ...persona, [name]: value });
  };

  const handleRegistrar = () => {
    registrarPersona(persona)
      .then(() => {
        alert("Registrado con exito!");
      })
      .catch((e) => {
        alert("Algo ocurrio");
        console.log(e);
      });
  };

  //el "name" debe coincidir con el que se utilizo arriba.
  //se usa el onChange para recuperar el valor y pasarselo a la funcion de handlePersona
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese nombre"
            name="nombre"
            onChange={(e) => {
              handlePersona(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Apellido:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese apellido"
            name="apellido"
            onChange={(e) => {
              handlePersona(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Rut:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese rut"
            name="rut"
            onChange={(e) => {
              handlePersona(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Correo:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese correo"
            name="correo"
            onChange={(e) => {
              handlePersona(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Fecha Nacimiento:</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ingrese fecha nacimiento"
            name="fechaNacimiento"
            onChange={(e) => {
              handlePersona(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Edad:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese edad"
            name="edad"
            onChange={(e) => {
              handlePersona(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Button type="button" variant="primary" onClick={handleRegistrar}>
          Registrar
        </Button>
      </Form>
    </>
  );
};

export default Pagina3;
