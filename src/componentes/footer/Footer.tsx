import './Footer.css'
function Footer(){
return(
    <footer>
      <nav className="nav1">
        <div className="icones">
          <div className="whatsapp"></div>
          <div className="instagram"></div>
          <div className="facebook"></div>
        </div>
        <ul className="topicos"><a className="topo">INÍCIO</a>
          <li className="lista">
            <a className="text2" href="#">Home</a>
          </li>
          <li className="lista">
            <a className="text2">Produtos</a>
          </li>
        </ul>
        <ul className="topicos"><a className="topo">SOBRE</a>
          <li className="lista">
            <a className="text2" href="#">Informações</a>
          </li>
          <li className="lista">
            <a className="text2">contato</a>
          </li>
        </ul>
        <ul className="contatos"><a className="topo">INFORMAÇÕES</a>
          <li className="padrao">
            <a className="text" href="#">LD@contato.com</a>
          </li>
          <li className="padrao">
            <a className="text">(67)99628-4278</a>
          </li>
        </ul>
        
      </nav>
      <div className="marcaDagua">&copy; 2023 LD</div>
    </footer>
  )
}

export default Footer