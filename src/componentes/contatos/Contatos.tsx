import './Contatos.css'
function Contatos() {
    return (
      <main className="contato">
        <div className="contatos-container">
          <h2>Entre em Contato</h2>
          <p>Envie-nos uma mensagem:</p>
          <form className="contatos-form">
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" placeholder="Seu nome" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Seu email" />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem"></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
    );
  }
  













export default Contatos
