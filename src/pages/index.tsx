import { Perfil } from "@/Componentes/Perfil";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <Link href={"/Pagina1"}>Pagina 1</Link>
        <Link href={"/Pagina2"}>Pagina 2</Link>
        <Link href={"/Pagina3"}>Registrar</Link>
        <Link href={"/Pagina4"}>Datos</Link>
      </nav>
      <Perfil nombre="Joselito" apellido="Vaca" edad={20}/>
      <Perfil nombre="Pablo" apellido="Marmol" edad={15}/>
    </>
  )
}