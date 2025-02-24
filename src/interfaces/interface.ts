interface Skill{
    name: string;
    level: number;
}

export interface SkillStack {
    [title: string]: Skill[];
}

export interface NavItemProps{
    title: string;
    href: string;
    subitems?: NavItemProps[];
}