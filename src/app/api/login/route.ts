import { serialize } from 'cookie';
import * as jose from 'jose';

export async function POST(request: Request) {
    const { username, password } = await request.json();

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        const token = await new jose.SignJWT({ username })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('5h')
            .sign(new TextEncoder().encode(process.env.JWT_SECRET as string));

        return new Response('Logged in successfully', {
            status: 200,
            headers: {
                'Set-Cookie': serialize('accessToken', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                    maxAge: 3600 * 24,
                    path: '/',
                }),
            },
        });
    }

    return new Response('Invalid credentials', { status: 401 });
}