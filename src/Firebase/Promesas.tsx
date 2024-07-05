import { Persona } from "@/Interfaces/interfaces";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

//se deben exportar

//se recibe a la persona
export const registrarPersona = async(persona:Persona) =>{
    const docRef = await addDoc(collection(db, "persona"), persona);
}

export const obtenerPersonas = async() =>{
    const querySnapshot = await getDocs(collection(db, "persona"));
    let personas:Persona[] = []
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        let persona:Persona = {
            apellido:doc.data().apellido,
            nombre:doc.data().nombre,
            correo:doc.data().correo,
            edad:doc.data().edad,
            rut:doc.data().rut,
            fechaNacimiento:doc.data().fechaNacimiento
        }
        personas.push(persona)
});
return personas
}