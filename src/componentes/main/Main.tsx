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
         "Olá, meu nome é Luana, tenho 17 anos e estou atualmente cursando o último ano do ensino médio no IFMS. Este portfólio será dedicado à apresentação da minha vida.",
      imagem: "/euzinha.png",
    },
    {
      id: 2,
      titulo: "Minha vida",
      sinopse:
        " Gustavo Baraldi. Ele é a razão pela qual meu coração bate mais forte e minha vida está cheia de alegria. Gustavo transformou meus dias em uma jornada incrível de amor e felicidade. Estou profundamente grata por tê-lo na minha vida e ansiosa para criar muitas lembranças maravilhosas juntos no futuro.",
        imagem: "/namorado.jpg",
    },
    {
        id: 3,
        titulo:"Slinky",
         sinopse:"Ele não é apenas um cachorro, ele é a razão do meu sorriso todos os dias. Com seus quatro anos de pura alegria e amor, Slinky ilumina cada canto da minha casa e enche meu coração de felicidade. Ele é um membro querido da nossa família, compartilhando conosco momentos de felicidades.",
         imagem:"/slinky.jpg"

    },
    {
        id:4,
        titulo:"Visita Técnica " ,
        sinopse:"Esta foto incrível foi capturada na frente da usina em Foz do Iguaçu durante um projeto de dois dias em parceria com o IFMS . O projeto nos proporcionou a oportunidade única de explorar a imponente usina. Esses dois dias foram um conjunto de conhecimento. Esta foto agora se torna um lembrete dessa experiência inesquecível.",
        imagem:"/foz.jpg"

    },
    {
        id:5,
        titulo:"Evento",
         sinopse:" Esta foto foi tirada no casameneto da mãe da Vitória, foi um momento muito emocionante",
        imagem:"/euluana.png"
    },
    {
        id:6,
        titulo:"Melhor Amiga",
         sinopse:" Essa pessoa da foto é a Vitoria, minha melhor amiga a quase 10 anos, nos conhecemos na escola no ensino fundamental e desde aquela epoca não nos largamos.",
        imagem:"/se.png"
    },
    {
        id:7,
        titulo:"Minha Prima",
         sinopse:" Esta pessoa da foto é minha prima chamada Marcela, nos dias de hoje não somos muito proximas mas considero ela como uma irmã.",
         imagem:"/prima.jpg"
    },
    {
        id:8,
        titulo:"Karatê ",
         sinopse:"Esta foto foi tirada em 2016, um ano marcante em minha vida, quando eu estava fazendo karatê.Essa época foi verdadeiramente especial,que me ajudaram a crescer e evoluir como pessoa.",
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
         sinopse:" Essa foto foi tirada no primeiro dia de estágio no centro de Convivência do Idoso Maria do Céu.",
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
        <p>O texto digitado é: {texto}</p>
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