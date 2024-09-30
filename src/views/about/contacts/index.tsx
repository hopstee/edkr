import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

const contacts = [
    {
        link: "mailto:hopsteee@gmail.com",
        icon: Mail
    },
    {
        link: "https://t.me/hopstee",
        icon: Send
    },
    {
        link: "https://github.com/hopstee",
        icon: Github
    },
    {
        link: "https://www.linkedin.com/in/eduard-krivovyashchuk-a182aa197?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        icon: Linkedin
    },
]

export default function Contacts() {
    return (
        <div className="max-w-[500px] mx-auto space-y-5">
            <div className="flex flex-wrap justify-center gap-3">
                {contacts.map((link, index) => (
                    <Link
                        key={index}
                        href={link.link}
                        target="_blank"
                    >
                        <Button
                            size='icon'
                            className="rounded-xl common-bg hover:bg-neutral-400/15 text-neutral-600 dark:text-neutral-200"
                        >
                            <link.icon className="size-4" />
                        </Button>
                    </Link>
                ))}
            </div >
        </div >
    )
}