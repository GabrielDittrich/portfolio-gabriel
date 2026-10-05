import type { Experience } from "../types/experience";
import atacadao from "../assets/images/companies/atacadao.png"

export const experiences: Experience[] = [
    {
        id: "atacadao-cpd",
        company: "Atacadão",
        role: "Atuação em CPD e suporte técnico",
        period: "Outubro de 2025",
        description:
            "Atuação no suporte a usuários, sistemas e equipamentos em um ambiente operacional de varejo, investigando problemas e buscando soluções práticas para manter os serviços em funcionamento.",
        activities: [
            "Suporte técnico a usuários e sistemas internos",
            "Diagnóstico e manutenção de computadores e periféricos",
            "Acompanhamento de servidores e serviços locais",
            "Suporte a PDVs, impressoras, balanças e equipamentos",
            "Configuração básica de rede e estações de trabalho",
            "Desenvolvimento de ferramentas internas para apoiar rotinas operacionais"
        ],
        current: true,
        logo: atacadao,
        logoAlt: "Logo do Atacadão",
        },
];