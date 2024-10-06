import * as jose from 'jose';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { CustomMiddleware } from './chain';

export function withAuthMiddleware(middleware: CustomMiddleware) {
    return async (request: NextRequest, event: NextFetchEvent) => {
        const token = request.cookies.get('accessToken');
        const protectedPath = request.url.includes('/dashboard')
        const authPath = request.url.includes('/login')

        if (!token?.value && protectedPath) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        if (protectedPath) {
            try {
                await jose.jwtVerify(token?.value as string, new TextEncoder().encode(process.env.JWT_SECRET));
                return middleware(request, event, NextResponse.next());
            } catch (error) {
                console.log(error)
                const response = NextResponse.redirect(new URL('/login', request.url));

                response.cookies.delete('accessToken')

                return response;
            }
        }

        if (token?.value && authPath) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }

        return middleware(request, event, NextResponse.next());
    }
}