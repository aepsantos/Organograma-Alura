import './Form.css'
import CampoTexto from '../CampoTexto/index'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'




const Form = () => {
    const times = [
        'Programação',
        'Pront-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return(
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço de imagem"/>
                <ListaSuspensa label="Time" itens={times}/>
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Form