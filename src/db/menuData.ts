type MenuLink = {
  title: string;
  link: string;
};

export type MegaMenuDataType = {
  image: string;
  title: string;
  links: MenuLink[];
};

export type SubMenuDataType = {
  title: string;
  link: string;
  submenu?: MenuLink[];
};

export type MenuItemDataType = {
  title: string;
  link: string;
  megamenu?: MegaMenuDataType[];
  submenu?: SubMenuDataType[];
};


export const menuData: MenuItemDataType[] = [
  {
    title: 'Início',
    link: '/',
  },
  {
    title: 'Sobre',
    link: '/about',
  },
  {
    title: 'Serviços',
    link: '/service',
    submenu: [
      { title: 'Serviços', link: '/service' },
      { title: 'Carrossel de serviços', link: '/service-carousel' },
      { title: 'Detalhes do serviço', link: '/service-details' },
    ],
  },
  {
    title: 'Páginas',
    link: '#',
    submenu: [
      {
        title: 'Projetos',
        link: '/project',
        submenu: [
          { title: 'Projetos', link: '/project' },
          { title: 'Carrossel de projetos', link: '/project-carousel' },
          { title: 'Detalhes do projeto', link: '/project-details' },
        ],
      },
      {
        title: 'Equipe',
        link: '/team',
        submenu: [
          { title: 'Nossa equipe', link: '/team' },
          { title: 'Carrossel da equipe', link: '/team-carousel' },
          { title: 'Detalhes da equipe', link: '/team-details' },
        ],
      },
      { title: 'Planos', link: '/pricing' },
      { title: 'FAQ', link: '/faq' },
      { title: 'Página 404', link: '/404' },
    ],
  },
  {
    title: 'Blog',
    link: '/news',
    submenu: [
      { title: 'Blog em grade', link: '/news' },
      { title: 'Blog padrão', link: '/news-standard' },
      { title: 'Detalhes do blog', link: '/news-details' },
    ],
  },
  {
    title: 'Contato',
    link: '/contact',
  },
];
