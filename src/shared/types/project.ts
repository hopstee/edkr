export type Project = {
    title: string
    description: string
    image: string
    link: string
    techstack: TechStack[]
}

export type TechStack = {
    title: string
    items: string[]
}