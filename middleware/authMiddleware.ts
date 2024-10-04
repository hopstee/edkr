import * as jose from 'jose';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { CustomMiddleware } from './chain';

export function withAuthMiddleware(middleware: CustomMiddleware) {
    return async (request: NextRequest, event: NextFetchEvent) => {
        const token = request.cookies.get('accessToken');
        const protectedPath = request.url.includes('/dashboard')

        if (protectedPath) {
            if (!token?.value) {
                return NextResponse.redirect(new URL('/login', request.url));
            }

            const decode = await jose.jwtVerify(token?.value as string, new TextEncoder().encode(process.env.JWT_SECRET));

            if (decode) {
                return middleware(request, event, NextResponse.next());
            }

            return NextResponse.redirect(new URL('/login', request.url));
        }

        if (!token?.value && protectedPath) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        return middleware(request, event, NextResponse.next());
    }
}