//import { useParams } from "react-router-dom"
import axios from 'axios'
//lib que permite fazer chamadas http
import { useEffect, useState } from "react"



function ListEvent() {

    const [listarEventos, setListarEventos] = useState([])
    //useState([]) = pq vou receber uma lista e quero manipula-la

    const listarTdEventos = async() => {
        const url = 'http://localhost:8000/eventos/listar'
        const resposta = await axios.get(url)
        console.log(resposta)
        setListarEventos(resposta.data)
    }

    useEffect(() => {
        listarTdEventos()
    }, [])
    //useEffect para renderizar
    
    return(
        <div>
        <h1>Lista de Eventos</h1>

        {/* Verifica se há eventos cadastrados */}
        {listarEventos.length === 0 ? (
            <p>Nenhum evento cadastrado.</p>
        ) : (
            listarEventos.map((evento) => (
                <div key={evento.id} style={{ marginBottom: '20px' }}>
                    <h2>{evento.nome}</h2>
                    <img src={evento.foto} width={100} alt={`Poster do evento ${evento.nome}`} />
                </div>
            ))
        )}
    </div>
    )
}
export default ListEvent;