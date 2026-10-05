import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./About.css";

function About(){
    return(
        <section className="section about" id="sobre">
            <div className="container">
                <SectionTitle
                eyebrow="Sobre mim"
                title="Desenvolvimento aliado à experiência prática"
                description="Minha trajetória combina formação em desenvolvimento de software com experiência profissional em suporte e infraestrutura."
                />

                <div className="about__content">
                  <div className="about__text">
                    <p>
                      Sou formado em Análise e Desenvolvimento de Sistemas e atualmente
                      curso Engenharia de Software. Meu foco é o desenvolvimento
                      back-end com C# e .NET, além da construção de interfaces com React.
                    </p>
                    
                    <p>
                      Trabalho em ambiente de CPD, prestando suporte a usuários,
                      sistemas, computadores, redes e equipamentos. Essa experiência
                      fortaleceu minha capacidade de investigar problemas e desenvolver
                      soluções práticas para necessidades reais.
                    </p>
                    
                    <p>
                      Em meus projetos, busco aprofundar conhecimentos em APIs REST,
                      banco de dados, autenticação, arquitetura de aplicação e
                      desenvolvimento full stack.
                    </p>
                  </div>
                    
                  <aside
                    className="about__details"
                    aria-label="Informações profissionais"
                  >
                    <div>
                      <span>Localização</span>
                      <strong>Curitiba, Paraná</strong>
                    </div>
                    
                    <div>
                      <span>Foco</span>
                      <strong>Desenvolvimento Back-end .NET</strong>
                    </div>
                    
                    <div className="about__education">
                      <span className="about__info-label">Formação</span>
                    
                      <div className="about__education-item">
                        <strong>Engenharia de Software</strong>
                        <span className="education-status education-status--progress">
                          Cursando
                        </span>
                      </div>
                    
                      <div className="about__education-item">
                        <strong>Análise e Desenvolvimento de Sistemas</strong>
                        <span className="education-status education-status--completed">
                          Concluído
                        </span>
                      </div>
                    </div>
                  </aside>
                </div>
            </div>
        </section>
    );
}

export default About;