import { serialize } from 'cookie';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
    const { username, password } = await req.json();

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        return new Response('Logged in successfully', {
            status: 200,
            headers: {
                'Set-Cookie': serialize('accessToken', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                    maxAge: 3600,
                    path: '/',
                }),
            },
        });
    }

    return new Response('Invalid credentials', { status: 401 });
}