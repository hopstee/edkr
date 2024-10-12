import { DashboardCard, DashboardCardContent, DashboardCardHeader } from "@/components/dashboard/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const contacts = [
    { icon: Send, placeholder: 'Telegram' },
    { icon: Github, placeholder: 'Github' },
    { icon: Linkedin, placeholder: 'LinkedIn' },
    { icon: Mail, placeholder: 'Email' },
]

export default function PersonalContacts() {
    return (
        <DashboardCard>
            <DashboardCardHeader>
                Contacts
            </DashboardCardHeader>
            <DashboardCardContent>
                <div className='flex flex-col gap-4 max-w-[500px] mx-auto'>
                    {contacts.map((contact, index) => (
                        <div
                            className={cn(
                                'flex w-full bg-main dark:bg-alter text-sm rounded-xl overflow-hidden',
                                'border-2 focus-within:border-main-dark',
                            )}
                            key={index}
                        >
                            <div className='h-10 w-10 pl-2 flex items-center justify-center'>
                                <contact.icon className='w-4 h-4 text-alter-dark dark:text-main-dark' />
                            </div>
                            <Input
                                type='text'
                                placeholder={contact.placeholder}
                                className='border-none focus-visible:border-none'
                            />
                        </div>
                    ))}

                    <Button
                        type='submit'
                        variant='secondary'
                        className='w-full bg-moonstone hover:bg-moonstone-light rounded-xl'
                    >
                        Save
                    </Button>
                </div>
            </DashboardCardContent>
        </DashboardCard>
    )
}