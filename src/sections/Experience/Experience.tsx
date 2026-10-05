import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { experiences } from "../../data/experiences";
import "./Experience.css";

function Experience() {
  return (
    <section className="section experience" id="experiencia">
      <div className="container">
        <SectionTitle
          eyebrow="Experiência"
          title="Vivência profissional em tecnologia"
          description="Experiência prática com suporte técnico, sistemas, infraestrutura e desenvolvimento de soluções para necessidades operacionais."
        />

        <div className="experience__list">
          {experiences.map((experience) => (
            <article className="experience__item" key={experience.id}>
              <div className="experience__summary">
                <div className="experience__company">
                  <span>{experience.period}</span>

                  {experience.current && (
                    <span className="experience__current">Atual</span>
                  )}
                </div>

                <h3>{experience.role}</h3>

                <p className="experience__company-name">{experience.company}</p>

                {experience.logo && (
                  <img
                    className="experience__logo"
                    src={experience.logo}
                    alt=""
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>

              <div className="experience__content">
                <p>{experience.description}</p>

                <ul>
                  {experience.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
