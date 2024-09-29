import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
    return (
        <div
            className="grid grid-cols-[repeat(auto-fill,minmax(100%,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            <div className="flex flex-col common-bg rounded-xl overflow-hidden">
                <div className="w-full">
                    <img src="/images/projects/crossnetics.png" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-3 rounded-b-xl">
                    <div>
                        <h3 className="text-lg font-semibold">
                            Marketing product with web3 support
                        </h3>
                        <div className="text-sm mt-3">
                            <h4 className="font-semibold">Frontend:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        NextJS
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        Tailwind
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        Zustand
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        MantineUI
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm mt-3">
                            <h4 className="font-semibold">Backend:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        NestJS
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        Swagger
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        TypeORM
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        MySQL
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        Docker
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        Redis
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        ElasticSearch
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="https://crossnetics.io/" target="_blank"
                        className="bg-blue-400/20 text-blue-500 hover:underline px-3 py-1 flex items-center justify-end mt-3 ml-auto w-fit rounded-full text-sm">
                        https://crossnetics.io/
                        <ArrowUpRight className="size-4 ml-1" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col common-bg rounded-xl overflow-hidden">
                <div className="">
                    <img src="/images/projects/finbuilder.png" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-3 rounded-b-xl">
                    <div>
                        <h3 className="text-lg font-semibold">
                            CRM system for telecommunications, banking, and crypto trading platforms
                        </h3>
                        <div className="text-sm mt-3">
                            <h4 className="font-semibold">Stack:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        ReactJS
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        ExpressJS
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        Docker
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        PostgreSQL
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        DevExtreme
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="https://www.finbuilder.com/" target="_blank"
                        className="bg-blue-400/20 text-blue-500 hover:underline px-3 py-1 flex items-center justify-end mt-3 ml-auto w-fit rounded-full text-sm">
                        https://www.finbuilder.com/
                        <ArrowUpRight className="size-4 ml-1" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col common-bg rounded-xl overflow-hidden">
                <div className="">
                    <img src="/images/projects/xmpt.png" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-3 rounded-b-xl">
                    <div>
                        <h3 className="text-lg font-semibold">
                            System for generating and managing tax exemption certificates.
                        </h3>
                        <div className="text-sm mt-3">
                            <h4 className="font-semibold">Stack:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        NextJS
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        MaterialUI
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        Redux
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="https://xmpt.us/" target="_blank"
                        className="bg-blue-400/20 text-blue-500 hover:underline px-3 py-1 flex items-center justify-end mt-3 ml-auto w-fit rounded-full text-sm">
                        https://xmpt.us/
                        <ArrowUpRight className="size-4 ml-1" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col common-bg rounded-xl overflow-hidden">
                <div className="">
                    <img src="/images/projects/evpoint.png" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-3 rounded-b-xl">
                    <div>
                        <h3 className="text-lg font-semibold">
                            System for electric vehicle charging stations.
                        </h3>
                        <div className="text-sm mt-3">
                            <h4 className="font-semibold">Stack:</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        Codeigniter
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        MySQL
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        jQuery
                                    </p>
                                </div>
                                <div className="common-contrast-bg px-3 py-1 rounded-full w-fit">
                                    <p className="text-xs font-normal text-neutral-600 dark:text-neutral-200">
                                        Bootstrap
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="https://evpoint.md" target="_blank" className="bg-blue-400/20 text-blue-500 hover:underline px-3 py-1 flex items-center justify-end mt-3 ml-auto w-fit rounded-full text-sm">
                        https://evpoint.md
                        <ArrowUpRight className="size-4 ml-1" />
                    </a>
                </div>
            </div>
        </div>
    )
}