import "./Header.css";

function Header() {
    return(
        <header className="header">
            <div className="container header__container">
                <a className="header__logo" href="#inicio" aria-label="Ir para o início">
                    <span className="header__logo-text">
                    G<span>D</span>
                    </span>
                </a>

                <nav className="header__nav" aria-label="Navegação principal">
                    <ul className="header__menu">
                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>

                        <li>
                            <a href="#tecnologias">Tecnologias</a>
                        </li>

                        <li>
                            <a href="#projetos">Projetos</a>
                        </li>

                        <li>
                            <a href="#experiencia">Experiência</a>
                        </li>

                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;