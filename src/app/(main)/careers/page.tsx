import { Career } from "@/types/career"
import CareersView from "@/views/careers"

const careers: Career[] = [
    {
        position: "Fullstack Developer",
        company: "Crossnetics",
        period: {
            start: "June 2024",
            finish: "September 2024",
        },
        description: [
            "Developed a marketing product with web3 support (NestJS, MySQL, Redis, ElasticSearch, NextJS)",
            "Created and integrated new modules, optimized existing solutions",
            "Refactored database operations to simplify the interaction for new developers",
        ]
    },
    {
        position: "Fullstack Developer",
        company: "Oculeus",
        period: {
            start: "Oct 2022",
            finish: "Apr 2024",
        },
        description: [
            "Developed a CRM system for the telecom, banking, and crypto sectors (NodeJS, ExpressJS, PostgreSQL, ReactJS)",
            "Redesigned the CRM chat, improved performance, and added Telegram notifications",
        ]
    },
    {
        position: "Frontend Developer",
        company: "Imentali",
        period: {
            start: "May 2022",
            finish: "Oct 2022",
        },
        description: [
            "Developed a tax exemption certificate generation and management system (ReactJS, MaterialUI)",
            "Fully migrated the project from pure JS to ReactJS",
        ]
    },
    {
        position: "Fullstack Developer",
        company: "Freelance",
        period: {
            start: "May 2021",
            finish: "Apr 2022",
        },
        description: [
            "Development of telegram bots (Laravel, NuxtJS, Redis, MySQL, Supervisor, Nginx)",
            "Created trading scripts in Python",
            "Deployed blockchain networks and built APIs for bots (NodeJS, ExpressJS, Web3, Rest, geth)",
        ]
    },
    {
        position: "Fullstack Developer",
        company: "Ilab",
        period: {
            start: "Nov 2020",
            finish: "Apr 2021",
        },
        description: [
            "Developed software for electric vehicle charging stations (Codeigniter)",
        ]
    },
    {
        position: "Fullstack Developer",
        company: "Cyber Whale",
        period: {
            start: "Jun 2020",
            finish: "Oct 2020",
        },
        description: [
            "Developed a platform for streaming video and audio (Codeigniter)",
        ]
    },
    {
        position: "Fullstack Developer",
        company: "Unifun International",
        period: {
            start: "Apr 2019",
            finish: "Apr 2020",
        },
        description: [
            "Developed a classified ads board (Laravel)",
            "Built an employee management system (ReactJS)",
        ]
    },
]

export default function CareersPage() {
    return <CareersView careers={careers} />
}