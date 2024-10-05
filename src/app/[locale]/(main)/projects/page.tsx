import ProjectsView from "@/views/projects";

const projects = [
    {
        title: "Marketing product with web3 support",
        image: "/assets/images/projects/crossnetics.png",
        link: "https://crossnetics.io/",
        techstack: [
            {
                title: "Frontend",
                items: [
                    "NextJS", "Tailwind", "Zustand", "MantineUI"
                ],
            },
            {
                title: "Backend",
                items: [
                    "NestJS", "Swagger", "TypeORM", "MySQL", "Docker", "Redis", "ElasticSearch"
                ],
            },
        ],
    },
    {
        title: "CRM system for telecommunications, banking, and crypto trading platforms",
        image: "/assets/images/projects/finbuilder.png",
        link: "https://www.finbuilder.com/",
        techstack: [
            {
                title: "Stack",
                items: [
                    "ReactJS", "ExpressJS", "Docker", "PostgreSQL", "DevExtreme"
                ],
            },
        ],
    },
    {
        title: "System for generating and managing tax exemption certificates",
        image: "/assets/images/projects/xmpt.png",
        link: "https://xmpt.us/",
        techstack: [
            {
                title: "Stack",
                items: [
                    "NextJS", "MaterialUI", "Redux"
                ],
            },
        ],
    },
    {
        title: "System for electric vehicle charging stations",
        image: "/assets/images/projects/evpoint.png",
        link: "https://evpoint.md",
        techstack: [
            {
                title: "Stack",
                items: [
                    "Codeigniter", "MySQL", "jQuery", "Bootstrap"
                ],
            },
        ],
    },
]

export default function ProjectsPage() {
    return <ProjectsView projects={projects} />
}