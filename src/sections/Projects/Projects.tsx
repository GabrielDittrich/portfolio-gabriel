import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { projects } from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="section projects" id="projetos">
      <div className="container">
        <SectionTitle
          eyebrow="Projetos"
          title="Soluções que desenvolvi"
          description="Projetos pessoais, acadêmicos e soluções práticas que demonstram meus conhecimentos em desenvolvimento de software"
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
