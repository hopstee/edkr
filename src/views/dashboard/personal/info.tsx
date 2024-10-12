'use client'

import { DashboardCard, DashboardCardContent, DashboardCardHeader } from "@/components/dashboard/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { PencilIcon, Plus, User2Icon } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";

function getImageData(event: ChangeEvent<HTMLInputElement>) {
    // FileList is immutable, so we need to create a new one
    const dataTransfer = new DataTransfer();

    // Add newly uploaded images
    Array.from(event.target.files!).forEach((image) =>
        dataTransfer.items.add(image)
    );

    const files = dataTransfer.files;
    const displayUrl = URL.createObjectURL(event.target.files![0]);

    return { files, displayUrl };
}

export default function PersonalInfo() {
    const [preview, setPreview] = useState<string | undefined>();

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <DashboardCard>
            <DashboardCardHeader>
                Personal Info
            </DashboardCardHeader>
            <DashboardCardContent>
                <div className='flex flex-col items-center gap-4 w-full'>
                    <div className='relative flex flex-1 items-center gap-4'>
                        <Avatar className='w-48 h-48'>
                            <AvatarImage src={preview} />
                            <AvatarFallback className='bg-main dark:bg-alter'>
                                <User2Icon className='w-8 h-8' />
                            </AvatarFallback>
                        </Avatar>
                        <Button
                            size='icon'
                            className={cn(
                                "rounded-full p-1 absolute bottom-2 right-2 bg-main-mid-light dark:bg-alter-mid-light hover:bg-main-dark dark:hover:bg-alter-light",
                                "border-2 border-main-dark dark:border-alter-light"
                            )}
                            onClick={e => {
                                e.preventDefault()
                                inputRef.current?.click()
                            }}
                        >
                            {preview ? <PencilIcon className='w-4 h-4 text-alter-dark dark:text-main-dark' /> : <Plus className='w-4 h-4 text-alter-dark dark:text-main-dark' />}
                        </Button>
                        <Input
                            ref={inputRef}
                            type='file'
                            className='hidden'
                            onChange={(event) => {
                                const { displayUrl } = getImageData(event)
                                setPreview(displayUrl);
                            }}
                            accept='image/*'
                        />
                    </div>
                    <Input
                        type='text'
                        placeholder='Title'
                    />
                    <Textarea
                        placeholder='Description'
                    />
                    <Button
                        type='submit'
                        variant='secondary'
                        className='w-full bg-moonstone hover:bg-moonstone-light rounded-xl'
                    >
                        Save
                    </Button>
                </div>
            </DashboardCardContent>
        </DashboardCard >
    )
}