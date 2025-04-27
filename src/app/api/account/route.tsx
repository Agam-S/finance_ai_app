//dbs schema
// - account_id (primary key)
// - user_id (foreign key)
// - name (e.g., "Main Checking", "Savings")
// - type (checking, savings, credit card)
// - current_balance
// - currency
// - is_active
// - created_at (timestamp)
// - updated_at (timestamp)

import { NextResponse } from 'next/server';
import admin  from '@/lib/util/firebase-admin';
import { authCheck } from '@/app/api/authCheck';


export async function POST(request: Request) {
    const authResponse = await authCheck(request);
    if (authResponse.status !== 200) {
        return authResponse; 
    }
    try {
        const body = await request.json();
        if(!body || !body.user_id || !body.name || !body.type || !body.current_balance || !body.currency) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        const db = admin.firestore();
        
        const accountRef = db.collection('accounts');
        const newAccount = {
            user_id: body.user_id,
            name: body.name,
            type: body.type,
            current_balance: body.current_balance,
            currency: body.currency,
            is_active: body.is_active || true,
            created_at: admin.firestore.FieldValue.serverTimestamp(),
            updated_at: admin.firestore.FieldValue.serverTimestamp()
        };
        const docRef = await accountRef.add(newAccount);
        return NextResponse.json({ success: true, message: 'Account saved successfully', account_id: docRef.id}, { status: 201 });
        
        } catch (error : any) {   
        console.error('Error saving account:', error);
        return NextResponse.json(
          { error: 'Failed to save account', details: error.message },
          { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    const authResponse = await authCheck(request);
    if (authResponse.status !== 200) {
        return authResponse; 
    }
    try {
        const db = admin.firestore();
        const accountRef = db.collection('accounts');
        const snapshot = await accountRef.get();
        const accounts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return NextResponse.json({ success: true, accounts }, { status: 200 });
        
    } catch (error : any) {   
        console.error('Error fetching accounts:', error);
        return NextResponse.json(
          { error: 'Failed to fetch accounts', details: error.message },
          { status: 500 }
        );
    }
}