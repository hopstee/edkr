import { serialize } from 'cookie';

export async function POST() {
    return new Response('Logged out successfully', {
        status: 200,
        headers: {
            'Set-Cookie': serialize('accessToken', '', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 3600 * 24,
                path: '/',
            }),
        },
    });
}