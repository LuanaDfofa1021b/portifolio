import { useState } from "react";
import Projeto from "../projeto/Projeto";
import "./Main.css";

type ProjetoType = {
  id: number;
  titulo: string;
  sinopse: string;
  imagem: string;
};

export default function Main() {
  // Hook
  const [texto, setTexto] = useState("");

  const projeto: ProjetoType[] = [
    {
      id: 1,
      titulo: "Luana Delevatti",
      sinopse:
         "Olá, meu nome é Luana, tenho 17 anos e estou atualmente cursando o último ano do ensino médio no IFMS. Este portfólio será dedicado à apresentação dos meus projetos.",
      imagem: "/euzinha.png",
    },
    {
      id: 2,
      titulo: "Gustavo Baraldi",
      sinopse:
        " Permitam-me apresentar Gustavo Baraldi. Ele é a razão pela qual meu coração bate mais forte e minha vida está cheia de alegria. Gustavo transformou meus dias em uma jornada incrível de amor e felicidade. Estou profundamente grata por tê-lo na minha vida e ansiosa para criar muitas lembranças maravilhosas juntos no futuro",
        imagem: "/namorado.jpg",
    },
    {
        id: 3,
        titulo:"Slinky",
         sinopse:"  O Slinky. Ele não é apenas um cachorro; ele é a razão do meu sorriso todos os dias. Com seus quatro anos de pura alegria e amor, Slinky ilumina cada canto da minha casa e enche meu coração de felicidade. Ele é um membro querido da nossa família, compartilhando conosco momentos de felicidade inigualável.",
         imagem:"/slinky.jpg"

    },
    {
        id:4,
        titulo:"Visita Técnica " ,
        sinopse:"Esta foto incrível foi capturada na frente da usina em Foz do Iguaçu durante um emocionante projeto de dois dias em parceria com o IFMS . O projeto nos proporcionou a oportunidade única de explorar a imponente usina. Esses dois dias foram uma experiência enriquecedora. Esta foto agora se torna um lembrete dessa experiência inesquecível.  ",
        imagem:"/foz.jpg"

    },
    {
        id:5,
        titulo:"Evento",
         sinopse:" Esta foto foi tirada durante o show do Mc WM que ocorreu no Arena Beer de Naviraí. Foi um evento incrível, repleto de energia e música envolvente. Foi definitivamente uma noite para lembrar",
        imagem:"/show.jpg"
    },
    {
        id:6,
        titulo:"Minha Melhor Amiga",
         sinopse:" Essa pessoa da foto é a Vitoria, pe minha melhor amiga a quase 10 anos, nos conhecemos na escola no ensino fundamental e desde aquela epoca nao nos larcamos .",
        imagem:"/se.png"
    },
    {
        id:7,
        titulo:"Minha Prima",
         sinopse:" Esta imagem foi capturada ao lado de minha prima Marcela, com quem compartilhei a jornada da infância.",
         imagem:"/prima.jpg"
    },
    {
        id:8,
        titulo:"Karatê ",
         sinopse:"Esta foto foi tirada em 2016, um ano marcante em minha vida, quando eu estava fazendo karatê.Essa época foi verdadeiramente especial,que me ajudaram a crescer e evoluir como pessoa. .",
        imagem:"/karate3.jpg"
    },
    {
        id:9,
        titulo:"Academia ",
         sinopse:"Esta foto foi tirada na academia, no entanto, faz alguns meses que não tenho aparecido por lá. Estou sentindo falta desses dias de treinamento e espero em breve retomar minha rotina fitness.",
        imagem:"/academia.jpg"
    },
    {
        id:10,
        titulo:"Estágio",
         sinopse:" Essa foi tirada no primeiro dia de estágio no centro de Convivência do Idoso.",
        imagem:"/estagio.jpg"

    }

  ];

  // A FUNÇÃO RECEBE UM ATRIBUTO CHAMADO DE "EVENT"
  function mudaTexto(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setTexto(e.target.value);
  }

  return (
    <>
      <div className="pesquisa">
        <p>Meus  Projetos</p>
        <input className="barrapesquisa" type="text" onChange={mudaTexto} />
        <div>
        
        </div>
      </div>

      <main className="content-main">
      {projeto.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((projeto: ProjetoType)=><Projeto key={projeto.id} titulo= {projeto.titulo} sinopse= {projeto.sinopse} imagem={projeto.imagem}
        />

      )}

    
      </main>
    </>
  )
}