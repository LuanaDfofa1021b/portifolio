import './Projeto.css'

type ProjetoProps={
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Filme(props:ProjetoProps){
    return(
        <div className="filme_content">
            <div className="projeto_filme">
            <img src={props.imagem} alt=""/>
            </div>
            <div className="texto_foto">
                <h1>{props.titulo}</h1>
                <div className="texto_foto"></div>
                    {props.sinopse}
            </div>
        </div>
    )
}