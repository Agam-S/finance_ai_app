// a middleware to check if the user is authenticated
// and if the user is not authenticated, redirect to the login page


import { NextResponse } from 'next/server';
import admin from '@/lib/util/firebase-admin';


export async function authCheck(request: Request) {
    try {
        const token = request.headers.get('Authorization')?.split(' ')[1];
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });            
        }

        const decodedToken = await admin.auth().verifyIdToken(token);
        if (!decodedToken) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });               
        }

        return NextResponse.next();
    }
    catch (error) {
        console.error('Error verifying token:', error);
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });           
    }
}
