import centralDeImpressaoImage from "../assets/images/projects/central-de-impressao.webp";
import petshopManagementImage from "../assets/images/projects/petshop-management.webp";
import { type Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "servicedesk-manager",
    title: "ServiceDesk Manager",
    description:
      "Sistema para gerenciamento de chamados e atendimentos de TI, com autenticação JWT, controle de acesso por perfil, categorias, técnicos responsáveis e acompanhamento do status dos chamados.",
    status: "Em desenvolvimento",
    technologies: [
      "C#",
      ".NET 8",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Docker",
      "JWT",
      "Swagger",
    ],
    featured: true,
    visibility: "public",
    repositoryUrl: "https://github.com/GabrielDittrich/servicedesk-manager",
  },
  {
    id: "petshop-management",
    title: "PetShop Management",
    description:
      "Aplicação full stack para gerenciamento das operações de um pet shop, integrando uma API desenvolvida em .NET, banco de dados MySQL e interface construída com React.",
    status: "Em aprimoramento",
    technologies: [
      "C#",
      ".NET",
      "Entity Framework Core",
      "MySQL",
      "React",
      "Docker",
    ],
    visibility: "public",
    repositoryUrl: "https://github.com/GabrielDittrich/gerenciamento-petshop",
    image: petshopManagementImage,
    imageAlt:
      "Tela de apresentação do PetShop Manager com informações sobre clientes, pets e produtos",
    imageFit: "cover",
  },
  {
    id: "central-de-impressao",
    title: "Central de Impressão",
    description:
      "Aplicação web para organizar e imprimir imagens e avisos em diferentes formatos, reduzindo tarefas manuais durante a preparação das páginas.",
    status: "Concluído",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    visibility: "public",
    repositoryUrl: "https://github.com/GabrielDittrich/central-de-impressao",
    demoUrl: "https://gabrieldittrich.github.io/central-de-impressao/",
    image: centralDeImpressaoImage,
    imageAlt:
      "Tela inicial da Central de Impressão com seleção de modelo, prévia da imagem e botão de imprimir",
    imageFit: "contain",
  },
];
