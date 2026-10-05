# Portfólio — Gabriel Dittrich

Portfólio profissional desenvolvido para apresentar minha trajetória, experiência, tecnologias e projetos na área de desenvolvimento de software.

Meu foco principal é o desenvolvimento back-end com **C#**, **.NET**, **ASP.NET Core**, **APIs REST** e **bancos de dados**, complementado por conhecimentos em **React** e **TypeScript**.

## Status do projeto

Em desenvolvimento.

O portfólio já possui suas principais seções implementadas e está passando pelas etapas finais de revisão, documentação, acessibilidade e preparação para publicação.

## Demonstração

O link do portfólio será adicionado após a publicação.

<!-- Depois da publicação, substitua o texto acima por:
[Acessar portfólio](https://gabrieldittrich.github.io/portfolio-gabriel/)
-->

## Funcionalidades

- Apresentação profissional e objetivo de carreira
- Informações sobre formação e área de atuação
- Tecnologias organizadas por categoria
- Cards de projetos com status e tecnologias utilizadas
- Links para repositórios e demonstrações publicadas
- Seção de experiência profissional
- Links para e-mail, LinkedIn e GitHub
- Visualização do currículo em PDF
- Layout responsivo para diferentes tamanhos de tela
- Navegação acessível por teclado
- Preferência de redução de movimento
- Imagens otimizadas e carregamento tardio

## Tecnologias utilizadas

### Front-end

- React
- TypeScript
- Vite
- HTML5
- CSS3

### Qualidade e desenvolvimento

- ESLint
- Git
- GitHub
- Lighthouse
- Chrome DevTools

## Projetos apresentados

### ServiceDesk Manager

Sistema para gerenciamento de chamados e atendimentos de TI, desenvolvido com arquitetura em camadas, autenticação JWT e controle de acesso por perfil.

Principais tecnologias:

- C#
- .NET 8
- ASP.NET Core
- Entity Framework Core
- SQL Server
- Docker
- JWT
- Swagger

[Ver repositório](https://github.com/GabrielDittrich/servicedesk-manager)

### PetShop Management

Aplicação full stack para gerenciamento de clientes, pets e produtos, integrando uma API desenvolvida em .NET, banco de dados MySQL e interface construída com React.

Principais tecnologias:

- C#
- .NET
- Entity Framework Core
- MySQL
- React
- Docker

[Ver repositório](https://github.com/GabrielDittrich/gerenciamento-petshop)

### Central de Impressão

Aplicação web criada para organizar e imprimir imagens e avisos em diferentes formatos, reduzindo tarefas manuais durante a preparação das páginas.

Principais tecnologias:

- HTML
- CSS
- JavaScript
- LocalStorage

[Ver projeto publicado](https://gabrieldittrich.github.io/central-de-impressao/)

[Ver repositório](https://github.com/GabrielDittrich/central-de-impressao)

## Acessibilidade

O projeto foi desenvolvido considerando boas práticas das **Web Content Accessibility Guidelines — WCAG**, incluindo:

- estrutura semântica com `header`, `main`, `section`, `nav`, `article`, `aside` e `footer`;
- link para pular diretamente ao conteúdo principal;
- navegação por teclado;
- foco visível nos elementos interativos;
- textos alternativos para imagens relevantes;
- imagens decorativas ignoradas por leitores de tela;
- identificação de links que abrem em uma nova aba;
- áreas de interação adequadas para dispositivos móveis;
- contraste entre textos, fundos, bordas e botões;
- suporte à preferência `prefers-reduced-motion`;
- títulos organizados hierarquicamente;
- descrições acessíveis para grupos de links e tecnologias.

A acessibilidade também foi avaliada utilizando o Lighthouse e testes manuais de navegação por teclado.

## Responsividade

O layout foi desenvolvido para funcionar em diferentes tamanhos de tela, incluindo:

- celulares;
- tablets;
- notebooks;
- monitores desktop.

Foram utilizados recursos como CSS Grid, Flexbox, `minmax()`, `clamp()` e media queries.

## Estrutura do projeto

```text
portfolio-gabriel/
├── public/
│   ├── images/
│   │   └── gabriel-dittrich.webp
│   ├── curriculo-gabriel-dittrich.pdf
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── companies/
│   │       └── projects/
│   ├── components/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── ProjectCard/
│   │   └── SectionTitle/
│   ├── data/
│   ├── sections/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Experience/
│   │   ├── Hero/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Como executar o projeto

### Pré-requisitos

Antes de começar, é necessário ter instalado:

- Node.js
- npm
- Git

### Instalação

Clone o repositório:

```bash
git clone https://github.com/GabrielDittrich/portfolio-gabriel.git
```

Entre na pasta:

```bash
cd portfolio-gabriel
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite mostrará no terminal o endereço local da aplicação, normalmente:

```text
http://localhost:5173
```

## Scripts disponíveis

Executar o projeto em desenvolvimento:

```bash
npm run dev
```

Verificar o código com ESLint:

```bash
npm run lint
```

Gerar a versão de produção:

```bash
npm run build
```

Visualizar localmente a versão de produção:

```bash
npm run preview
```

## Verificações realizadas

- Compilação do TypeScript
- Build de produção com Vite
- Verificação com ESLint
- Testes de responsividade pelo Chrome DevTools
- Testes de navegação por teclado
- Avaliação de desempenho e acessibilidade com Lighthouse
- Validação dos links externos
- Verificação do currículo em PDF
- Testes das imagens em diferentes larguras

## Próximas melhorias

- Publicar o portfólio
- Adicionar o endereço publicado ao README
- Adicionar uma captura da página inicial ao README
- Executar o Lighthouse na versão publicada
- Revisar os projetos conforme novas funcionalidades forem desenvolvidas
- Adicionar novas experiências e projetos ao longo da carreira

## Autor

**Gabriel Dittrich**

Desenvolvedor com foco em C#, .NET, ASP.NET Core, APIs REST, SQL e React.

- [GitHub](https://github.com/GabrielDittrich)
- [LinkedIn](https://www.linkedin.com/in/gabriel-dittrich/)
- [Enviar e-mail](mailto:gdittrchcj@gmail.com)