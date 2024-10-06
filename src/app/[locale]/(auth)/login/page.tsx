'use client'

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
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface formSchema {
    username: string;
    password: string;
}

const Login = () => {
    const router = useRouter();

    const t = useTranslations('auth.login')

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

        if (res.ok) {
            router.push('/dashboard');
        } else {
            form.setError('root', { message: 'Invalid credentials' });
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 p-5 rounded-xl bg-timberwolf-light dark:bg-eerie-mid-light border-2 border-timberwolf-dark dark:border-eerie-light'>
                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('username')}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='admin'
                                    {...field}
                                />
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
                            <FormLabel>{t('password')}</FormLabel>
                            <FormControl>
                                <Input placeholder='1234' {...field} type='password' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {form.formState.errors && <FormMessage>{form.formState.errors.root?.message}</FormMessage>}
                <Button
                    type='submit'
                    className='w-full bg-ochre dark:hover:bg-ochre-dark hover:bg-ochre-light'
                    disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                    {t('buttons.login')}
                </Button>
            </form>
        </Form>
    );
};

export default Login;