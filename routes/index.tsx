import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Project } from "$fresh/src/dev/deps.ts";
import Axios from "npm:axios";
type personajes={
  results:pj[];
}
type pj={
  name:string;
}

export default async function Home() {
 try {
  

  const data= await Axios.get<personajes>("https://rickandmortyapi.com/api/character");
  return (
  
    <div>
      <h1>Personajes de Rick y Morty</h1>
      <ul>
      {data.data.results.map((ch)=>{return <li>{ch.name}</li>;})}
      </ul>
    </div>
     )
   
  
 } catch (error) {
  return(
    <h1>Error</h1>
  )
 }
}

