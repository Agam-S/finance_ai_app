// data schema transaction_id (primary key)
// - account_id (foreign key)
// - user_id (foreign key)
// - amount
// - transaction_type (debit, credit)
// - category (foreign key to categories table)
// - description
// - date (timestamp)
// - is_recurring (boolean - to mark if the transaction is recurring)
// - recurrence_pattern (JSON - to store details about the recurrence, e.g., weekly, monthly)
// - subcategory_id (JSON - to store tags associated with the transaction)
// - created_at (timestamp)
// - updated_at (timestamp)
//  status (boolean - to mark if the transaction is active or deleted)


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

        if(!body || !body.user_id || !body.account_id || !body.amount || !body.transaction_type || !body.category || !body.description || !body.date) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const db = admin.firestore();
        
        const transactionRef = db.collection('transactions');
        const newTransaction = {
            user_id: body.user_id,
            account_id: body.account_id,
            amount: body.amount,
            transaction_type: body.transaction_type,
            category: body.category,
            description: body.description,
            date: body.date,
            is_recurring: body.is_recurring || false,
            recurrence_pattern: body.recurrence_pattern || null,
            subcategory_id: body.subcategory_id || null,
            created_at: admin.firestore.FieldValue.serverTimestamp(),
            updated_at: admin.firestore.FieldValue.serverTimestamp(),
            status: true
        };
        const docRef = await transactionRef.add(newTransaction);
        return NextResponse.json({ success: true, message: 'Transaction saved successfully', transaction_id: docRef.id}, { status: 201 });
        
        } catch (error : any) {   
        console.error('Error saving transaction:', error);
        return NextResponse.json(
          { error: 'Failed to save transaction', details: error.message },
          { status: 500 }
        );

    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const user_id = searchParams.get('user_id');
        if (!user_id) {
            return NextResponse.json({ error: 'Missing user_id' }, { status: 400 });
        }

        const db = admin.firestore();
        const transactionsRef = db.collection('transactions').where('user_id', '==', user_id).where('status', '==', true);
        const snapshot = await transactionsRef.get();

        if (snapshot.empty) {
            return NextResponse.json({ message: 'No transactions found' }, { status: 404 });
        }

        const transactions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return NextResponse.json(transactions, { status: 200 });

    } catch (error : any) {
        console.error('Error fetching transactions:', error);
        return NextResponse.json(
          { error: 'Failed to fetch transactions', details: error.message },
          { status: 500 }
        );
    }
}




