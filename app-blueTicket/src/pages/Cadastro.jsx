import axios, { formToJSON } from 'axios'
import { useEffect, useState } from "react"
import { json } from 'react-router-dom';

const Cadastro = () => {

    const [cadastrarEvent, setCadastrarEvent] = useState([])


    const cadastrarEvento = async (e) => {
        e.preventDefault()

        const nome = e.target.nome.value;
        const local = e.target.local.value;
        const descricao = e.target.descricao.value;
        const preco = parseFloat(e.target.preco.value);
        const foto = e.target.foto.value;

        const jsonData = {
            nome,
            local,
            descricao,
            preco,
            foto
        };
        const url = 'http://localhost:8000/eventos/cadastrar'
        try {
            const resposta = await axios.post(url, jsonData)
            console.log(resposta)

            if (resposta.status === 201) {
                alert('Cadastrado com sucesso!'); 
            } else {
                alert('Erro ao cadastrar o evento.'); 
            }

            setCadastrarEvent(resposta.data)
        } catch (error) {
        console.error("Erro ao cadastrar evento:", error);
        alert('Erro ao cadastrar o evento, tente novamente.'); 
    }
        
    }


    return (
        <div>
            <h1>Página de Cadastro</h1>
            <form onSubmit={cadastrarEvento}>

                Nome: <input type="text" name="nome" id='nome' />
                <br />
                Local: <input type="text" name="local" id='local' />
                <br />
                Descrição: <input type="text" name="descricao" id='descricao' />
                <br />
                Preço: <input type="number" name="preco" id='preco' />
                <br />
                Foto: <input type="text" name="foto" id='foto' />
                <br />

                <button type="submit">Cadastrar evento</button>

            </form>


        </div>
    );
};

export default Cadastro;