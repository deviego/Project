import './style.css'
export function Card({name, time}){
    return (
        <div className="card">
            <p> Funcionário: <strong>{name}</strong></p>
           <p> <small> Hora: {time}</small></p>
        </div>
    )
}