import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const token = request.cookies.get('accessToken');

    if (token?.value) {
        return new Response('Logged in successfully', {
            status: 200
        })
    }

    return new Response('Invalid credentials', { status: 401 });
}