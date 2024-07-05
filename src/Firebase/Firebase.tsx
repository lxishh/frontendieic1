// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./credenciales";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//debe estar el import de "firebaseConfig"
//para esto se debe borrar una letra de la const app y luego tabulear

//importar firestore

//exportar la const db