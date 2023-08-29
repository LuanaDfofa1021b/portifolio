import './Header.css'
function Header(){
    return(
        <header>
            <div className="logo"></div>
           <nav>
           <ul>
            <li><a href='#'>Pagina Inicial</a></li>
            <li><a href='#'>Sobre</a></li>
            <li><a href='#'>Noticia</a></li>
            <li><a href='#'>Contato</a></li>
           </ul>
           </nav>
        </header>

    )
}
export default Header