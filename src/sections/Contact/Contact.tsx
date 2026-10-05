import "./Contact.css";

function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container contact__container">
        <div className="contact__content">
          <p className="contact__eyebrow">Contato</p>

          <h2>Vamos conversar?</h2>

          <p>
            Estou aberto a oportunidades para contribuir com projetos de
            software e continuar evoluindo profissionalmente, principalmente com
            C#, .NET, APIs REST, SQL e React.
          </p>
        </div>

        <div className="contact__actions">
          <a
            className="button button--primary"
            href="mailto:gdittrchcj@gmail.com"
          >
            Enviar e-mail
          </a>

          <a
            className="button button--secondary"
            href="https://www.linkedin.com/in/gabriel-dittrich/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span className="sr-only">, abre em uma nova aba</span>
          </a>

          <a
            className="button button--secondary"
            href="https://github.com/GabrielDittrich"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span className="sr-only">, abre em uma nova aba</span>
          </a>
          
          <a
            className="button button--secondary"
            href={`${import.meta.env.BASE_URL}curriculo-gabriel-dittrich.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Ver currículo
            <span className="sr-only">, abre em uma nova aba</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
