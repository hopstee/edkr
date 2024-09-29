"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 w-full py-5 z-50">
            <div className="p-3 rounded-xl common-bg">
                <div className="flex items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-violet-500 dark:text-yellow-500 text-2xl transition-colors" href="/">
                            <span className="sr-only">Home</span>
                            ✌️ edkr.
                        </a>
                    </div>

                    <div className="hidden md:block transition-all">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link
                                        href="/"
                                        className={twMerge(
                                            "nav-item transition-all hover:bg-neutral-400/15 px-3 py-2 rounded-md",
                                            pathname === '/' && 'common-contrast-bg'
                                        )}
                                    >
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/careers"
                                        className={twMerge(
                                            "nav-item transition-all hover:bg-neutral-400/15 px-3 py-2 rounded-md",
                                            pathname === '/careers' && 'common-contrast-bg'
                                        )}
                                    >
                                        Careers
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/projects"
                                        className={twMerge(
                                            "nav-item transition-all hover:bg-neutral-400/15 px-3 py-2 rounded-md",
                                            pathname === '/projects' && 'common-contrast-bg'
                                        )}
                                    >
                                        Projects
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* <div className="flex items-center gap-4">
                <%- include('../../components/theme-switcher.ejs') %>
            </div> */}
                </div>
            </div>
        </header>
    )
}