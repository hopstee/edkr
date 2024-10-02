'use client'

import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from 'react-hook-form';

interface formSchema {
    username: string;
    password: string;
}

const Login = () => {
    const router = useRouter();

    const form = useForm<formSchema>()

    const onSubmit = async (values: formSchema) => {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: values.username,
                password: values.password,
            }),
        });
        console.log(res);

        if (res.ok) {
            router.push('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 p-5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'>
                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder='admin' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder='1234' {...field} type='password' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' className='w-full'>Submit</Button>
            </form>
        </Form>
    );
};

export default Login;