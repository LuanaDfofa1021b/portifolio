import { useState } from "react";
import './Contatos.css'
function Contatos() {
const [nome, setNome] = useState("");
function mudaNome(e: React.ChangeEvent<HTMLInputElement>) {
  setNome(e.target.value);
}
const [email, setEmail] = useState("");
function mudaEmail(e: React.ChangeEvent<HTMLInputElement>) {
  setEmail(e.target.value);
}
const [mensagem, setMensagem] = useState("");
function mudaMensagem(e: React.ChangeEvent<HTMLTextAreaElement>) {
  setMensagem(e.target.value);
}

    return (
      <main className="contato">
        <div className="contatos-container">
          <h2>Entre em Contato</h2>
          <p>Envie-nos uma mensagem:</p>
          <form className="contatos-form">
            <div className="form-group">
              <label htmlFor="nome">Nome: {nome}</label>
              <input type="text" id="nome" name="nome" placeholder="Seu nome"  onChange={mudaNome} required/>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email:{email}</label>
              <input type="email" id="email" name="email" placeholder="Seu email"  onChange={mudaEmail} required/>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem:{mensagem}</label>
              <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem"  onChange={mudaMensagem} required></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
      
    );
  }
  


export default Contatos
