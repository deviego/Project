import React, { useState } from "react";
import { Card } from "../../components/card";
import "./style.css";

export function Home() {
  const [officialName, setOfficialName] = useState();
  const [officials, setOfficials] = useState([])
  function handleAddOfficial(){
    const newOfficial = {
      name:officialName,
      time:new Date().toLocaleString("pt-br", {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
      })
    };

    setOfficials(prevState => [...prevState, newOfficial])
  }

  return (
    <div className="container">
      <h1>Ponto do funcionário</h1>

      <input
        type="text"
        placeholder="Digite um nome"
        onChange={(e) => setOfficialName(e.target.value)}
      />
      <button type="Button"
      onClick={handleAddOfficial}
      >Adicionar</button>
      {
       officials.map(official =>(
       <Card
       key={official.time}
        name={official.name}
       time={official.time}>

       </Card>))
       
       }
     
      
    </div>
  );
}
