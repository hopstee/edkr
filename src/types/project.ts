export type Project = {
    title: string
    image: string
    link: string
    techstack: TechStack[]
}

export type TechStack = {
    title: string
    items: string[]
}