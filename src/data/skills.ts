import { type SkillGroup } from "../types/skills";

export const skillGroups: SkillGroup[] = [
    {
        title: "Back-end",
        description: 
        "Tecnologias que utilizo para desenvolver APIs, regras de negócio e acesso a dados.",
        featured: true,
        skills: [
            "C#",
            ".NET 8",
            "ASP.NET Core",
            "Entity Framework Core",
            "APIs REST",
            "JWT",
        ],
    },
    {
        title: "Front-end",
        description:
        "Tecnologias utilizadas na construção de interfaces responsivas e integração com APIs",
        featured: false,
        skills: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Bootstrap",
        ],
    },
    {
        title: "Banco de dados e ferramentas",
        description: 
        "Bancos, ferramentas e ambiente que utilizo durante o desenvolvimento.",
        featured: false,
        skills: [
            "SQL",
            "MySQL",
            "SQL Server",
            "SQLite",
            "Docker",
            "Git",
            "GitHub",
            "Swagger",
        ],
    },
];