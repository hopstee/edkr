import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contacts() {
    return (
        <div className="max-w-[500px] mx-auto space-y-5">
            <h1 className="text-2xl md:text-3xl font-bold text-center">
                Links
            </h1>

            <div className="flex flex-wrap justify-center gap-3">
                <div
                    className="group cursor-pointer common-bg p-1 rounded-xl text-base font-medium text-neutral-600 dark:text-neutral-200">
                    <a href="mailto:hopsteee@gmail.com">
                        <div className=" flex items-center justify-center px-4 py-2 group-hover:bg-neutral-400/15 rounded-lg transition-all">
                            <Mail className="size-5" />
                        </div>
                    </a>
                </div>
                <div
                    className="group cursor-pointer common-bg p-1 rounded-xl text-sm font-medium text-neutral-600 dark:text-neutral-200">
                    <a href="https://t.me/hopstee" target="_blank">
                        <div
                            className="flex items-center justify-center px-4 py-2 group-hover:bg-neutral-400/15 rounded-lg transition-all">
                            <Send className="size-5" />
                        </div>
                    </a>
                </div>
                <div
                    className="group cursor-pointer common-bg p-1 rounded-xl text-sm font-medium text-neutral-600 dark:text-neutral-200">
                    <a href="https://github.com/hopstee" target="_blank">
                        <div
                            className="flex items-center justify-center px-4 py-2 group-hover:bg-neutral-400/15 rounded-lg transition-all">
                            <Github className="size-5" />
                        </div>
                    </a>
                </div>
                <div
                    className="group cursor-pointer common-bg p-1 rounded-xl text-sm font-medium text-neutral-600 dark:text-neutral-200">
                    <a href="https://www.linkedin.com/in/eduard-krivovyashchuk-a182aa197?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank">
                        <div
                            className="flex items-center justify-center px-4 py-2 group-hover:bg-neutral-400/15 rounded-lg transition-all">
                            <Linkedin className="size-5" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}