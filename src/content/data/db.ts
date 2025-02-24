import type {SkillStack, NavItemProps} from '../../interfaces/interface';

export const stacks: SkillStack = {
    "Visualización y Manipulación de Datos": [
        { name: "SQL", level: 70 },
        { name: "Pandas / GeoPandas", level: 60 },
        { name: "Tableau", level: 60 },
        { name: "Power BI", level: 50 },
        { name: "Power Query", level: 40 },
    ],
    "Backend": [
        { name: "FastAPI", level: 50 },
        { name: "Django", level: 50 },
        { name: "NodeJS", level: 40 },
        { name: "PHP (Scriptacase)", level: 40 },
    ],
    "Frontend": [
        { name: "JavaScript", level: 50 },
        { name: "AstroJS", level: 45 },
        { name: "React", level: 40 },
        { name: "TailwindCSS", level: 30 },
    ],
    "Base de Datos": [
        { name: "PostgreSQL / PostGIS", level: 60 },
        { name: "MySQL", level: 50 },
        { name: "SQL Server", level: 40 },
        { name: "MongoDB", level: 30 },
    ],
    "Devops": [
        { name: "Terraform", level: 40 },
        { name: "Docker", level: 30 },
    ]
};


export const navItems: NavItemProps[] = [
    { title: 'Sobre Mí', href: '/' },
    //{ title: 'Experiencia Laboral', href: '/experiencia' },
    {
      title: 'Proyectos', 
      href: '/proyectos',
      subitems: [
        { title: 'Web Scraping', href: '/proyectos/web-scraping' },
        { title: 'Diccionario', href: '/proyectos/diccionario' },
        { title: 'ComidAS', href: '/proyectos/comidas' },
      ]
    },
];