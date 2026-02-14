export interface BlogPostDataType {
    id: number;
    date: {
        day: string;
        month: string;
        year:string
    };
    image: string;
    author: string;
    category: string;
    title: string;
    link: string;
    delay: string;
    description: string;
}


export const blogPostsThreeData:BlogPostDataType[] = [
    {
        id:1,
        date: { day: '17', month: 'Fev', year:'2025' },
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        author: 'DRONELÉTRICA',
        category: 'Elétrica',
        title: 'Como escolher o padrão LIGHT ideal para sua residência',
        link: '/news-details',
        description:'',
        delay:'.3'
    },
    {
        id:2,
        date: { day: '20', month: 'Mai', year:'2025' },
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80',
        author: 'DRONELÉTRICA',
        category: 'Automação',
        title: 'Vantagens da automação residencial e comercial',
        link: '/news-details',
        description:'',
        delay:'.3'
    },
    {
        id:3,
        date: { day: '10', month: 'Fev', year:'2025' },
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
        author: 'DRONELÉTRICA',
        category: 'CFTV',
        title: 'Sistemas de CFTV: segurança e monitoramento eficiente',
        link: '/news-details',
        description:'',
        delay:'.3'
    },
    {
        id:4,
        date: { day: '20', month: 'Mai', year:'2025' },
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        author: 'DRONELÉTRICA',
        category: 'Segurança',
        title: 'Centrais de alarme de incêndio: importância e normas',
        link: '/news-details',
        description:'',
        delay:'.3'
    },
    {
        id:5,
        date: { day: '10', month: 'Fev', year:'2025' },
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',
        author: 'DRONELÉTRICA',
        category: 'Elétrica',
        title: 'Aumento de carga elétrica: quando e como fazer',
        link: '/news-details',
        description:'',
        delay:'.3'
    },
    {
        id:6,
        date: { day: '20', month: 'Mai', year:'2025' },
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80',
        author: 'DRONELÉTRICA',
        category: 'Dicas',
        title: 'Manutenção preventiva em instalações elétricas',
        link: '/news-details',
        description:'',
        delay:'.3'
    },
];