'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import StatCard from '@/components/StatCard';
import Button from '@/components/Button';
import TransactionForm from '@/components/TransactionForm';
import { useUserAuth } from "@/lib/hooks/useUserAuth";

export default function Dashboard() {

const { user, loading } = useUserAuth('/login'); 


  const [showTransactionForm, setShowTransactionForm] = useState(false);

  const handleAddTransaction = (data: any) => {
    console.log('Transaction added:', data);
    setShowTransactionForm(false);
    // call api to save transaction
    // reset form or show success message   
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
      
    if (!user) {
        return <div className="flex items-center justify-center h-screen">Redirecting...</div>;
    }


    if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Your financial overview and insights
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button 
            onClick={() => setShowTransactionForm(!showTransactionForm)}
            icon={<span>{showTransactionForm ? '✕' : '+'}</span>}
          >
            {showTransactionForm ? 'Cancel' : 'Add Transaction'}
          </Button>
        </div>
      </div>

      {showTransactionForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-6"
        >
          <TransactionForm 
            onSubmit={handleAddTransaction} 
            onCancel={() => setShowTransactionForm(false)} 
          />
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        <StatCard
          title="Total Balance"
          value="$12,560.80"
          change="8.2%"
          isPositive={true}
          icon="💰"
          color="indigo"
        />
        <StatCard
          title="Monthly Income"
          value="$4,200.00"
          change="5.1%"
          isPositive={true}
          icon="💵"
          color="green"
        />
        <StatCard
          title="Monthly Expenses"
          value="$2,340.50"
          change="12.3%"
          isPositive={false}
          icon="💸"
          color="red"
        />
        <StatCard
          title="Savings Rate"
          value="44.3%"
          change="3.2%"
          isPositive={true}
          icon="📈"
          color="blue"
        />
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card title="AI Insights" icon="🤖" className="lg:col-span-2">
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
            <h3 className="font-medium text-indigo-800 dark:text-indigo-200">Financial Summary</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              You spent 30% more on food this month compared to your average. Your overall spending is within budget, but you might want to watch your dining expenses.
            </p>
          </div>
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <h3 className="font-medium text-green-800 dark:text-green-200">Suggestions</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Consider cutting entertainment by $100 to increase your savings rate by 5%. Based on your spending patterns, you could save $150 monthly by consolidating your subscription services.
            </p>
          </div>
        </Card>

        <Card title="Recent Transactions" icon="📝">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {[
              { id: 1, desc: 'Grocery Shopping', amount: -120.50, category: 'Food & Dining', date: '2025-04-12' },
              { id: 2, desc: 'Salary Deposit', amount: 4200.00, category: 'Income', date: '2025-04-01' },
              { id: 3, desc: 'Electric Bill', amount: -85.20, category: 'Bills & Utilities', date: '2025-04-05' },
              { id: 4, desc: 'Movie Tickets', amount: -32.00, category: 'Entertainment', date: '2025-04-08' },
            ].map((transaction) => (
              <div key={transaction.id} className="py-3 flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{transaction.desc}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{transaction.category} • {transaction.date}</p>
                </div>
                <div className={`text-sm font-medium ${transaction.amount > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button variant="secondary" size="sm" className="w-full">
              View All Transactions
            </Button>
          </div>
        </Card>

        <Card title="Upcoming Bills" icon="📅">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {[
              { id: 1, desc: 'Rent', amount: 1200.00, dueDate: '2025-05-01', status: 'upcoming' },
              { id: 2, desc: 'Internet', amount: 65.00, dueDate: '2025-04-20', status: 'upcoming' },
              { id: 3, desc: 'Phone Bill', amount: 45.00, dueDate: '2025-04-22', status: 'upcoming' },
              { id: 4, desc: 'Streaming Services', amount: 25.00, dueDate: '2025-04-18', status: 'upcoming' },
            ].map((bill) => (
              <div key={bill.id} className="py-3 flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{bill.desc}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Due on {bill.dueDate}</p>
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  ${bill.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button variant="secondary" size="sm" className="w-full">
              Manage Bills
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
