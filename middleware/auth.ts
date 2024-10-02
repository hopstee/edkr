// middleware/auth.js
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('accessToken');

    if (!token?.value) {
        return NextResponse.redirect(new URL('/', req.url));
    }
    try {
        jwt.verify(token.value, process.env.JWT_SECRET as string);
        return NextResponse.next();
    } catch (error) {
        console.log(error);
        return NextResponse.redirect(new URL('/', req.url));
    }
}

export const config = {
    matcher: ['/dashboard/:path*'],
};