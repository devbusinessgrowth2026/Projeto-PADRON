export interface ServiceDataType {
    id: number | string;
    title: string;
    description: string;
    icon: string;
    link: string;
    delay: string;
    active?:boolean;
    image?:string;
}

export const serviceOneData: ServiceDataType[] = [
    {
        id: 1,
        title: "Elétrica & Automação",
        description: "Instalações e manutenções elétricas com automação para residências, prédios e comércios.",
        icon: "/img/service/icon/s-icon-1.svg",
        link: "/service-details",
        delay:'.3'
    },
    {
        id: 2,
        title: "Padrão LIGHT",
        description: "Adequação e montagem de padrão LIGHT conforme normas da concessionária.",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/service-details",
        delay:'.5',
        active:true
    },
    {
        id: 3,
        title: "Aumento de Carga",
        description: "Projetos de aumento de carga com segurança e documentação conforme exigências técnicas.",
        icon: "/img/service/icon/s-icon-3.svg",
        link: "/service-details",
        delay:'.7'
    },
    {
        id: 4,
        title: "CFTV",
        description: "Sistemas de CFTV para monitoramento interno e externo em ambientes residenciais e comerciais.",
        icon: "/img/service/icon/s-icon-4.svg",
        link: "/service-details",
        delay:'.9'
    },
    {
        id: 5,
        title: "Porteiro Eletrônico",
        description: "Soluções em porteiro eletrônico e controle de acesso para condomínios e empresas.",
        icon: "/img/service/icon/s-icon-10.svg",
        link: "/service-details",
        delay:'.3'
    },
    {
        id: 6,
        title: "Central de Alarme de Incêndio",
        description: "Projeto e instalação de centrais de alarme de incêndio para proteção de pessoas e patrimônio.",
        icon: "/img/service/icon/s-icon-11.svg",
        link: "/service-details",
        delay:'.5'
    },
    {
        id: 7,
        title: "Cozinha Industrial",
        description: "Infraestrutura elétrica e de automação para cozinhas industriais com alto desempenho.",
        icon: "/img/service/icon/s-icon-1.svg",
        link: "/service-details",
        delay:'.7'
    },
    {
        id: 8,
        title: "Sistemas Predial, Comercial e Shopping",
        description: "Sistemas completos para prédios, comércios e shoppings, incluindo MD5G e automação dedicada.",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/service-details",
        delay:'.9'
    }
];
