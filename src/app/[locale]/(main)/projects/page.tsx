import ProjectsView from "@/views/projects";

const projects = [
    {
        title: "Crossnetics",
        description: "Crossnetics is a marketing product with web3 support.",
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
        title: "Finbuilder",
        description: "CRM system for telecom, banking, and crypto trading platforms.",
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
        title: "XMPT",
        description: "System for generating and managing tax exemption certificates.",
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
        title: "EVPoint",
        description: "System for interaction with charging stations.",
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