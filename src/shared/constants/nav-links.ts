import { Hammer } from "lucide-react";

import { BriefcaseBusiness, User } from "lucide-react";

export const links = [
    {
        href: '/',
        path: '',
        label: 'home',
        icon: User,
    },
    {
        href: '/experience',
        path: 'experience',
        label: 'experience',
        icon: BriefcaseBusiness,
    },
    {
        href: '/projects',
        path: 'projects',
        label: 'projects',
        icon: Hammer,
    },
]