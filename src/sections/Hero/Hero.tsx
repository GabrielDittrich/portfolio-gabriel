import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">Olá, eu sou</p>

          <h1 className="hero__title">Gabriel Dittrich</h1>

          <h2 className="hero__subtitle">Desenvolvedor .NET</h2>

          <p className="hero__description">
            Desenvolvo aplicações com C#, ASP.NET Core, APIs REST, SQL e React,
            transformando necessidades reais em soluções práticas.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#projetos">
              Ver projetos
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

        <div className="hero__photo-wrapper">
          <img
            className="hero__photo"
            src={`${import.meta.env.BASE_URL}images/gabriel-dittrich.webp`}
            alt="Foto de Gabriel Dittrich"
            width="640"
            height="800"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
