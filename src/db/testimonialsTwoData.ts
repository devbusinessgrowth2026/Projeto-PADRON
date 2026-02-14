export interface TestimonialType {
    id: number;
    name: string;
    role: string;
    image: string;
    icon: string;
    stars: number;
    feedback: string;
}

export const testimonialsTwoData:TestimonialType[] = [
    {
        id: 1,
        name: 'João Silva',
        role: 'Proprietário Residencial',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
        icon: '/img/testimonial/icon.png',
        stars: 5,
        feedback: 'Excelente trabalho na instalação elétrica da minha casa. Profissionais qualificados, pontuais e com preço justo. Recomendo a DRONELÉTRICA para todos os serviços elétricos.',
    },
    {
        id: 2,
        name: 'Maria Santos',
        role: 'Gerente Comercial',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
        icon: '/img/testimonial/icon.png',
        stars: 5,
        feedback: 'Instalamos o sistema CFTV e automação na nossa loja. Ficamos muito satisfeitos com a qualidade do serviço e o suporte técnico oferecido. Empresa séria e confiável.',
    },
    {
        id: 3,
        name: 'Carlos Oliveira',
        role: 'Síndico Condominial',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
        icon: '/img/testimonial/icon.png',
        stars: 5,
        feedback: 'Fizemos o aumento de carga e instalação do padrão LIGHT no nosso prédio. Trabalho impecável, dentro do prazo e com toda documentação necessária. Muito profissional!',
    },
];