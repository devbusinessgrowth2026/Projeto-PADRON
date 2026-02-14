export interface TestimonialType {
    id: number;
    name: string;
    role: string;
    image: string;
    icon: string;
    stars: number;
    feedback: string;
}

// Fotos exclusivas de CLIENTES (depoimentos) — nenhuma repetida com a seção de equipe (funcionários)
export const testimonialsTwoData: TestimonialType[] = [
    {
        id: 1,
        name: 'João Silva',
        role: 'Proprietário Residencial',
        image: 'https://images.unsplash.com/photo-1528892953191-01fccb3d0e0e?w=200&q=80',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Excelente trabalho na instalação elétrica da minha casa. Profissionais qualificados, pontuais e com preço justo. Recomendo a Padron para todos os serviços elétricos.',
    },
    {
        id: 2,
        name: 'Maria Santos',
        role: 'Gerente Comercial',
        image: 'https://images.unsplash.com/photo-1594746063927-75b1fbfb7592?w=200&q=80',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Instalamos o sistema CFTV e automação na nossa loja. Ficamos muito satisfeitos com a qualidade do serviço e o suporte técnico oferecido. Empresa séria e confiável.',
    },
    {
        id: 3,
        name: 'Carlos Oliveira',
        role: 'Síndico Condominial',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Fizemos o aumento de carga e instalação do padrão LIGHT no nosso prédio. Trabalho impecável, dentro do prazo e com toda documentação necessária. Muito profissional!',
    },
    {
        id: 4,
        name: 'Ana Paula Ferreira',
        role: 'Proprietária Comercial',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'Contratamos a Padron para o padrão LIGHT e CFTV no nosso escritório. Atendimento excelente, orçamento claro e obra entregue no prazo. Super indico!',
    },
    {
        id: 5,
        name: 'Roberto Mendes',
        role: 'Gestor de Facilities',
        image: 'https://images.unsplash.com/photo-1552058544-f2b0849d2b0b?w=200&q=80',
        icon: '/img/testimonial/quote.svg',
        stars: 5,
        feedback: 'A Padron atende nosso condomínio há anos. Automação, CFTV e manutenção elétrica sempre com qualidade e transparência. Parceiros de confiança.',
    },
];