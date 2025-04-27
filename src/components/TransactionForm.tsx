'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';

interface TransactionFormProps {
  onSubmit: (data: any) => void;
  onCancel?: () => void;
  accounts: { id: string; name: string }[]
}

export default function TransactionForm({ onSubmit, onCancel, accounts }: TransactionFormProps) {
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    account_id: '',
    date: new Date().toISOString().split('T')[0],
    type: 'expense'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const categories = [
    'Food & Dining',
    'Shopping',
    'Housing',
    'Transportation',
    'Entertainment',
    'Health & Fitness',
    'Personal Care',
    'Education',
    'Travel',
    'Gifts & Donations',
    'Bills & Utilities',
    'Income',
    'Other'
  ];

  return (
    <Card title="Add Transaction" icon="💸" className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Type
            </label>
            <div className="flex rounded-md shadow-sm">
              <Button
                type="button"
                variant={formData.type === 'expense' ? 'danger' : 'secondary'}
                className="w-full rounded-r-none"
                onClick={() => setFormData(prev => ({ ...prev, type: 'expense' }))}
              >
                Expense
              </Button>
              <Button
                type="button"
                variant={formData.type === 'income' ? 'success' : 'secondary'}
                className="w-full rounded-l-none"
                onClick={() => setFormData(prev => ({ ...prev, type: 'income' }))}
              >
                Income
              </Button>
            </div>
          </div>
        </div>

        <Input
          label="Amount"
          id="amount"
          name="amount"
          type="number"
          step="0.01"
          required
          placeholder="0.00"
          leftIcon="$"
          value={formData.amount}
          onChange={handleChange}
          fullWidth
        />

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            <option value="" disabled>Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <Input
          label="Description"
          id="description"
          name="description"
          type="text"
          placeholder="What was this for?"
          value={formData.description}
          onChange={handleChange}
          fullWidth
        />

        <div>
          <label htmlFor="account_id" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Account
          </label>
          <select
            id="account_id"
            name="account_id"
            required
            value={formData.account_id}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            {accounts.map((account:any) => (
              <option key={account.id} value={account.id}>
                {account.name}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Date"
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          fullWidth
        />

        <div className="flex justify-end space-x-3 pt-4">
          {onCancel && (
            <Button type="button" variant="secondary" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button 
            type="submit" 
            variant="primary"
            icon={<span>💾</span>}
          >
            Save Transaction
          </Button>
        </div>
      </form>
    </Card>
  );
}
