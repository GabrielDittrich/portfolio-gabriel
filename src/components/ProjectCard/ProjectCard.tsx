import type { Project, ProjectStatus } from "../../types/project";
import "./ProjectCard.css";

const statusClassNames: Record<ProjectStatus, string> = {
  "Em desenvolvimento": "project-card__status--development",
  "Em aprimoramento": "project-card__status--review",
  Concluído: "project-card__status--completed",
};

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const hasActions = Boolean(project.repositoryUrl || project.demoUrl);
  const isInternal = project.visibility === "internal";

  return (
    <article
      className={`project-card ${
        project.featured ? "project-card--featured" : ""
      }`}
    >
      {project.image && (
        <div
          className={`project-card__media ${
            project.imageFit === "contain"
              ? "project-card__media--contain"
              : ""
          }`}
        >
          <img
            className="project-card__image"
            src={project.image}
            alt={project.imageAlt ?? ""}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__header">
          <span
            className={`project-card__status ${
              statusClassNames[project.status]
            }`}
          >
            {project.status}
          </span>

          {project.featured && (
            <span className="project-card__featured">
              Projeto principal
            </span>
          )}
        </div>

        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {project.description}
        </p>

        <ul
          className="project-card__technologies"
          aria-label={`Tecnologias utilizadas no projeto ${project.title}`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {hasActions && (
          <div
            className="project-card__actions"
            role="group"
            aria-label={`Links do projeto ${project.title}`}
          >
            {project.demoUrl && (
              <a
                className="project-card__link project-card__link--primary"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ver projeto

                <span className="sr-only">
                  {" "}
                  {project.title}, abre em uma nova aba
                </span>

                <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.repositoryUrl && (
              <a
                className={`project-card__link ${
                  project.demoUrl
                    ? "project-card__link--secondary"
                    : "project-card__link--primary"
                }`}
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ver repositório

                <span className="sr-only">
                  {" "}
                  do projeto {project.title} no GitHub, abre em uma nova aba
                </span>

                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}

        {isInternal && !hasActions && (
          <p className="project-card__availability">
            Projeto interno — código não disponível publicamente
          </p>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;