import * as jose from 'jose';
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const token = request.cookies.get('accessToken');

    if (token?.value) {
        try {
            await jose.jwtVerify(token?.value as string, new TextEncoder().encode(process.env.JWT_SECRET));
            return new Response('Logged in successfully', {
                status: 200
            })
        } catch (error) {
            console.log(error)
            return new Response('Invalid credentials', { status: 401 });
        }
    }

    return new Response('Invalid credentials', { status: 401 });
}