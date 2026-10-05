import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { skillGroups } from "../../data/skills";
import "./Skills.css";

function Skills(){
    return(
        <section className="section skills" id="tecnologias">
            <div className="container">
                <SectionTitle 
                eyebrow="Tecnologias"
                title="Ferramentas que utilizo no desenvolvimento"
                description="Meu foco principal está no desenvolvimento back-end com C# e .NET, complementando por conhecimentos em front-end, banco de dados e ferramentas de desenvolvimento."
                />

                <div className="skills__grid">
                    {skillGroups.map((group) => {
                return  <article 
                        className={`skills__card ${
                            group.featured ? "skills__card--featured" : ""
                        }`}
                        key={group.title}
                        >
                            <h3 className="skills__card-title">{group.title}</h3>

                            <p className="skills__card-description">
                                {group.description}
                            </p>

                            <ul className="skills__list">
                                {group.skills.map((skill) => (
                                    <li className="skills__item" key={skill}>
                                        {skill}
                                    </li>
                            ))}
                            </ul>
                        </article>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;