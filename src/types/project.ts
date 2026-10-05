export type ProjectStatus =
    | "Em desenvolvimento"
    | "Em aprimoramento"
    | "Concluído";

export type ProjectVisibility = "public" | "internal";

export type ProjectImageFit = "cover" | "contain";

export type Project = {
    id: string;
    title: string;
    description: string;
    status: ProjectStatus;
    technologies: string[];
    featured?: boolean;
    visibility?: ProjectVisibility;
    repositoryUrl?: string;
    demoUrl?: string;
    image?: string;
    imageAlt?: string;
    imageFit?: ProjectImageFit;
};