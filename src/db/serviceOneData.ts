export interface ServiceDataType {
    id: number | string;
    title: string;
    description: string;
    icon: string;
    link: string;
    delay: string;
    active?: boolean;
    image?: string;
    /** Segunda linha no card do menu (ex.: "AUMENTO DE CARGA" sob "PADRÃO LIGHT") */
    subtitle?: string;
}

export const serviceOneData: ServiceDataType[] = [
    {
        id: 1,
        title: "Elétrica & Automação",
        description: "Instalações e manutenções elétricas com automação para residências, prédios e comércios.",
        icon: "/img/service/icon/s-icon-1.svg",
        link: "/service-details",
        delay: '.3'
    },
    {
        id: 2,
        title: "Padrão LIGHT",
        subtitle: "Aumento de Carga",
        description: "Adequação e montagem de padrão LIGHT e projetos de aumento de carga conforme normas da concessionária.",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/service-details",
        delay: '.5',
        active: true
    },
    {
        id: 3,
        title: "CFTV",
        subtitle: "Porteiro Eletrônico",
        description: "Sistemas de CFTV e soluções em porteiro eletrônico e controle de acesso.",
        icon: "/img/service/icon/s-icon-4.svg",
        link: "/service-details",
        delay: '.7'
    },
    {
        id: 4,
        title: "Predial",
        subtitle: "Comercial • Sistema Shopping",
        description: "Sistemas completos para prédios, comércios e shoppings, incluindo automação dedicada.",
        icon: "/img/service/icon/s-icon-8.svg",
        link: "/service-details",
        delay: '.9'
    },
    {
        id: 5,
        title: "Central de Alarme de Incêndio",
        subtitle: "MD5G",
        description: "Projeto e instalação de centrais de alarme de incêndio e MD5G para proteção de pessoas e patrimônio.",
        icon: "/img/service/icon/s-icon-11.svg",
        link: "/service-details",
        delay: '.3'
    },
    {
        id: 6,
        title: "Cozinha Industrial",
        description: "Infraestrutura elétrica e de automação para cozinhas industriais com alto desempenho.",
        icon: "/img/service/icon/s-icon-7.svg",
        link: "/service-details",
        delay: '.5'
    }
];
