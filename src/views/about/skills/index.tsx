import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

const skillCategories = [
    {
        title: "Languages",
        items: [
            { type: "image", src: "/assets/icons/langs/js.svg", alt: "js", text: "JavaScript" },
            { type: "image", src: "/assets/icons/langs/ts.svg", alt: "ts", text: "TypeScript" },
            { type: "image", src: "/assets/icons/langs/php.svg", alt: "php", text: "PHP" },
            { type: "image", src: "/assets/icons/langs/python.svg", alt: "python", text: "Python" },
            { type: "image", src: "/assets/icons/langs/go.svg", alt: "go", text: "Go" },
        ],
    },
    {
        title: "Front-end",
        items: [
            { type: "image", src: "/assets/icons/frontend/reactjs.svg", alt: "react", text: "React" },
            { type: "image", src: "/assets/icons/frontend/nextjs-light.svg", darkSrc: "/assets/icons/frontend/nextjs-dark.svg", alt: "nextjs", text: "NextJS" },
            { type: "image", src: "/assets/icons/frontend/html.svg", alt: "html", text: "Html" },
            { type: "image", src: "/assets/icons/frontend/css.svg", alt: "css", text: "Css" },
        ],
    },
    {
        title: "Back-end",
        items: [
            { type: "image", src: "/assets/icons/backend/nodejs.svg", alt: "nodejs", text: "Node.js" },
            { type: "image", src: "/assets/icons/backend/nestjs.svg", alt: "nestjs", text: "NestJS" },
            { type: "image", src: "/assets/icons/backend/laravel.svg", alt: "laravel", text: "Laravel" },
        ],
    },
    {
        title: "Databases",
        items: [
            { type: "image", src: "/assets/icons/db/mysql.svg", alt: "MySQL", text: "MySQL" },
            { type: "image", src: "/assets/icons/db/mongodb.svg", alt: "MongoDB", text: "MongoDB" },
            { type: "image", src: "/assets/icons/db/postgresql.svg", alt: "PostgreSQL", text: "PostgreSQL" },
            { type: "image", src: "/assets/icons/db/redis.svg", alt: "redis", text: "Redis" },
            { type: "image", src: "/assets/icons/db/elasticsearch.svg", alt: "elasticsearch", text: "Elasticsearch" },
        ],
    },
    {
        title: "UI",
        items: [
            { type: "image", src: "/assets/icons/ui/radixui-light.svg", darkSrc: "/assets/icons/ui/radixui-dark.svg", alt: "radixui", text: "RadixUI" },
            { type: "image", src: "/assets/icons/ui/shadcnui-light.svg", darkSrc: "/assets/icons/ui/shadcnui-dark.svg", alt: "shadcnui", text: "ShadcnUI" },
            { type: "image", src: "/assets/icons/ui/tailwind.svg", alt: "tailwind", text: "Tailwind" },
            { type: "image", src: "/assets/icons/ui/bootstrap-light.svg", darkSrc: "/assets/icons/ui/bootstrap-dark.svg", alt: "bootstrap", text: "Bootstrap" },
            { type: "image", src: "/assets/icons/ui/materialui.svg", alt: "materialui", text: "MaterialUI" },
        ],
    },
    {
        title: "Tools",
        items: [
            { type: "image", src: "/assets/icons/tools/homebrew.svg", alt: "homebrew", text: "Homebrew" },
            { type: "image", src: "/assets/icons/tools/jira-light.svg", darkSrc: "/assets/icons/tools/jira-dark.svg", alt: "jira", text: "Jira" },
            { type: "image", src: "/assets/icons/tools/npm.svg", alt: "npm", text: "npm" },
            { type: "image", src: "/assets/icons/tools/postman.svg", alt: "postman", text: "Postman" },
            { type: "image", src: "/assets/icons/tools/slack.svg", alt: "slack", text: "Slack" },
            { type: "image", src: "/assets/icons/tools/vscode.svg", alt: "vscode", text: "VS Code" },
        ],
    },
    {
        title: "DevOps",
        items: [
            { type: "image", src: "/assets/icons/devops/git.svg", alt: "git", text: "Git" },
            { type: "image", src: "/assets/icons/devops/github-light.svg", darkSrc: "/assets/icons/devops/github-dark.svg", alt: "github", text: "GitHub" },
            { type: "image", src: "/assets/icons/devops/gitlab.svg", alt: "gitlab", text: "GitLab" },
            { type: "image", src: "/assets/icons/devops/docker.svg", alt: "docker", text: "Docker" },
            { type: "image", src: "/assets/icons/devops/bitbucket.svg", alt: "bitbucket", text: "Bitbucket" },
            { type: "image", src: "/assets/icons/devops/linux.svg", alt: "linux", text: "Linux" },
        ],
    },
];

interface SkillItem {
    type: 'image' | 'text';
    src: string;
    alt: string;
    text: string;
    darkSrc?: string;
}

interface SkillCategoryProps {
    title: string;
    items: SkillItem[];
}

const SkillCategoryWidget: React.FC<SkillCategoryProps> = ({ title, items }) => {
    return (
        <div className={cn(
            'backdrop-blur-md',
            'bg-timberwolf-dark/60 dark:bg-eerie-light/60 border-4 border-timberwolf-dark dark:border-eerie-light',
            'rounded-xl h-full cursor-grab active:cursor-grabbing active:rotate-2 active:scale-95 transition-all duration-300 select-none',
        )}>
            <div className='p-3 border-b-4 border-timberwolf-dark dark:border-eerie-light'>
                <h6>{title}</h6>
            </div>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] p-5 gap-5 min-w-[300px]'>
                {items.map((item, index) => (
                    <div key={index}>
                        <div className='flex flex-col items-center rounded-lg p-3'>
                            {item.darkSrc ? (
                                <>
                                    <Image src={item.src} alt={item.alt} width={32} height={32} className='mb-2 dark:hidden' />
                                    <Image src={item.darkSrc} alt={item.alt} width={32} height={32} className='mb-2 hidden dark:block' />
                                </>
                            ) : (
                                <Image src={item.src} alt={item.alt} width={32} height={32} className='mb-2' />
                            )}
                            <span className='text-xs font-medium text-neutral-700 dark:text-neutral-300 text-center'>{item.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Skills() {
    const t = useTranslations('about.skills')

    return (
        <div>
            <h1 className='text-2xl md:text-3xl font-bold text-center'>
                {t('title')}
            </h1>
            <div className='mt-5'>
                <Carousel
                    className='h-full w-full mx-auto'
                >
                    <CarouselContent className='-ml-5'>
                        {skillCategories.map((category, index) => (
                            <CarouselItem
                                key={index}
                                className='basis-full md:basis-1/2 lg:basis-1/3 pl-5'
                            >
                                <SkillCategoryWidget
                                    title={category.title}
                                    items={category.items as SkillItem[]}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious
                        className={cn(
                            'absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 md:-translate-x-1/2 border-4',
                            'bg-timberwolf hover:bg-timberwolf-dark border-timberwolf-dark text-eerie/60',
                            'dark:bg-eerie dark:hover:bg-eerie-light dark:border-eerie-light dark:text-timberwolf/70',
                        )}
                    />
                    <CarouselNext
                        className={cn(
                            'absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 md:translate-x-1/2 border-4',
                            'bg-timberwolf hover:bg-timberwolf-dark border-timberwolf-dark text-eerie/60',
                            'dark:bg-eerie dark:hover:bg-eerie-light dark:border-eerie-light dark:text-timberwolf/70',
                        )}
                    />
                </Carousel>
            </div>
        </div>
    )
}