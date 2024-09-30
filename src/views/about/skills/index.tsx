import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

interface SkillItem {
    type: 'image' | 'text';
    src?: string;
    alt?: string;
    text?: string;
}

interface SkillCategoryProps {
    title: string;
    items: SkillItem[];
}

const SkillCategoryWidget: React.FC<SkillCategoryProps> = ({ title, items }) => {
    return (
        <div className='common-bg rounded-xl h-full'>
            <div className='p-3 border-b border-neutral-300 dark:border-neutral-600'>
                <h6>{title}</h6>
            </div>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] p-5 gap-5'>
                {items.map((item, index) => (
                    <div key={index}>
                        <div className='flex flex-col items-center bg-neutral-100 dark:bg-neutral-700 rounded-lg p-3'>
                            <Image src={item.src!} alt={item.alt!} width={32} height={32} className='mb-2' />
                            <span className='text-xs font-medium text-neutral-700 dark:text-neutral-300 text-center'>{item.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            items: [
                { type: "image", src: "/icons/langs/js.svg", alt: "js", text: "JavaScript" },
                { type: "image", src: "/icons/langs/ts.svg", alt: "ts", text: "TypeScript" },
                { type: "image", src: "/icons/langs/php.svg", alt: "php", text: "PHP" },
                { type: "image", src: "/icons/langs/python.svg", alt: "python", text: "Python" },
                { type: "image", src: "/icons/langs/go.svg", alt: "go", text: "Go" },
            ],
        },
        {
            title: "Front-end",
            items: [
                { type: "image", src: "/icons/frontend/reactjs.svg", alt: "react", text: "React" },
                { type: "image", src: "/icons/frontend/nextjs.svg", alt: "nextjs", text: "NextJS" },
                { type: "image", src: "/icons/frontend/html.svg", alt: "html", text: "Html" },
                { type: "image", src: "/icons/frontend/css.svg", alt: "css", text: "Css" },
            ],
        },
        {
            title: "Back-end",
            items: [
                { type: "image", src: "/icons/backend/nodejs.svg", alt: "nodejs", text: "Node.js" },
                { type: "image", src: "/icons/backend/nestjs.svg", alt: "nestjs", text: "NestJS" },
                { type: "image", src: "/icons/backend/laravel.svg", alt: "laravel", text: "Laravel" },
            ],
        },
        {
            title: "Databases",
            items: [
                { type: "image", src: "/icons/db/mysql.svg", alt: "MySQL", text: "MySQL" },
                { type: "image", src: "/icons/db/mongodb.svg", alt: "MongoDB", text: "MongoDB" },
                { type: "image", src: "/icons/db/postgresql.svg", alt: "PostgreSQL", text: "PostgreSQL" },
                { type: "image", src: "/icons/db/redis.svg", alt: "redis", text: "Redis" },
                { type: "image", src: "/icons/db/elasticsearch.svg", alt: "elasticsearch", text: "Elasticsearch" },
            ],
        },
        {
            title: "UI",
            items: [
                { type: "image", src: "/icons/ui/radixui.svg", alt: "radixui", text: "RadixUI" },
                { type: "image", src: "/icons/ui/shadcnui.svg", alt: "shadcnui", text: "ShadcnUI" },
                { type: "image", src: "/icons/ui/tailwind.svg", alt: "tailwind", text: "Tailwind" },
                { type: "image", src: "/icons/ui/bootstrap.svg", alt: "bootstrap", text: "Bootstrap" },
                { type: "image", src: "/icons/ui/materialui.svg", alt: "materialui", text: "MaterialUI" },
            ],
        },
        {
            title: "Tools",
            items: [
                { type: "image", src: "/icons/tools/homebrew.svg", alt: "homebrew", text: "Homebrew" },
                { type: "image", src: "/icons/tools/jira.svg", alt: "jira", text: "Jira" },
                { type: "image", src: "/icons/tools/npm.svg", alt: "npm", text: "npm" },
                { type: "image", src: "/icons/tools/postman.svg", alt: "postman", text: "Postman" },
                { type: "image", src: "/icons/tools/slack.svg", alt: "slack", text: "Slack" },
                { type: "image", src: "/icons/tools/vscode.svg", alt: "vscode", text: "VS Code" },
            ],
        },
        {
            title: "DevOps",
            items: [
                { type: "image", src: "/icons/devops/git.svg", alt: "git", text: "Git" },
                { type: "image", src: "/icons/devops/github.svg", alt: "github", text: "GitHub" },
                { type: "image", src: "/icons/devops/gitlab.svg", alt: "gitlab", text: "GitLab" },
                { type: "image", src: "/icons/devops/docker.svg", alt: "docker", text: "Docker" },
                { type: "image", src: "/icons/devops/bitbucket.svg", alt: "bitbucket", text: "Bitbucket" },
                { type: "image", src: "/icons/devops/linux.svg", alt: "linux", text: "Linux" },
            ],
        },
    ];

    return (
        <div>
            <h1 className='text-2xl md:text-3xl font-bold text-center'>
                Stack
            </h1>
            <div className='w-full mt-5'>
                <Carousel
                    className='h-full'
                >
                    <CarouselContent className='h-full'>
                        {skillCategories.map((category, index) => (
                            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                                <SkillCategoryWidget
                                    title={category.title}
                                    items={category.items as SkillItem[]}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}