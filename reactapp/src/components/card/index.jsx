import './style.css'
export function Card({name, time}){
    return (
        <div className="card">
            Funcionário: <strong>{name}</strong>
           <p> <small> Hora {time}</small></p>
        </div>
    )
}