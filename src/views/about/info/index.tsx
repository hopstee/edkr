import { InfoIcon, MapPin } from "lucide-react";
import Image from "next/image";

export default function Info() {
    return (
        <div className="flex items-center max-md:flex-col max-md:space-y-8 md:space-x-16 max-w-[800px] mx-auto">
            <div className="flex flex-col items-center">
                <div className="relative size-32 md:size-64">
                    <Image
                        src="/images/photo-1.jpg"
                        alt="Edik Krivovyaschuk photo"
                        fill
                        className="rounded-full object-cover object-center"
                    />
                    <div className="absolute -top-5 md:top-3 right-0 translate-x-1/4">
                        <div className="common-bg common-border py-2 px-2 rounded-xl text-sm max-w-[150px] text-center">
                            👨‍💻 work hard
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center mt-5">
                    <div className="relative flex items-center common-bg p-1 rounded-full w-fit">
                        <div className="p-1 common-contrast-bg rounded-full">
                            <InfoIcon className="size-5" />
                        </div>
                        <div className="mx-1 md:mx-3">
                            <p className="text-xs font-thin text-neutral-600 dark:text-neutral-200">
                                Open for work and cooperation
                            </p>
                        </div>
                        <div className="absolute top-0 right-0">
                            <span className="relative flex h-3 w-3">
                                <span
                                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                        </div>
                    </div>

                    <div className="relative flex items-center common-bg p-1 rounded-full w-fit">
                        <div className="p-1 common-contrast-bg rounded-full">
                            <MapPin className="size-5" />
                        </div>
                        <div className="mx-3">
                            <p className="text-xs font-thin text-neutral-600 dark:text-neutral-200">
                                Remote
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-bold text-center">
                    👋 Hey, I'm Edik
                </h1>
                <div className="flex space-x-5 mt-3 justify-center">
                    <div className="common-bg px-3 py-1 mt-2 rounded-full w-fit">
                        <p className="text-xs font-thin text-neutral-600 dark:text-neutral-200">
                            Back-end
                        </p>
                    </div>
                    <div className="common-bg px-3 py-1 mt-2 rounded-full w-fit">
                        <p className="text-xs font-thin text-neutral-600 dark:text-neutral-200">
                            Front-end
                        </p>
                    </div>
                </div>
                <p className="mt-5 text-sm md:text-base font-light leading-6 text-center">
                    Experienced fullstack developer with over 5 years of experience in building products using modern
                    technologies (NextJS, NodeJS, PostgreSQL, Blockchain, etc.). I have a proven ability to quickly
                    master new fields, including blockchain and frontend development. Effective both as an individual
                    contributor and a team member.
                </p>
            </div>
        </div>
    )
}