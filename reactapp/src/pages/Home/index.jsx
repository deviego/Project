import { Card } from '../../components/card'
import './style.css' 

export function Home() {
  let officialName = '';
  function handleNameChange(name){
    officialName = name;
  }
  return (
    <div className='container'>
    <h1>Ponto do funcionário</h1>
    <h1>{officialName}</h1>
      <input type="text" placeholder="Digite um nome" onChange={e => handleNameChange(e.target.value)} />
      <button type="Button">Adicionar</button>

      <Card name='Rodrigo' time='10:45:16'></Card> 
      <Card name='Paulo' time='11:00:10'></Card> 
      <Card name='Diego' time='12:23:12'></Card> 
    </div>
    
  )  
}


