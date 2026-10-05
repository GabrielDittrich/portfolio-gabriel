import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
            <div className="container footer__container">
                <p>
                    © {currentYear} Gabriel Dittrich. Desenvolvido com React e TypeScript.
                </p>

                <a href="#inicio">Voltar ao início</a>
            </div>
        </footer>
    );
}

export default Footer;