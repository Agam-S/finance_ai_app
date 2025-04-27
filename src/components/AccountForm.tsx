'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';


interface AccountFormProps {
  onSubmit: (data: any) => void;
  onCancel?: () => void;
}

export default function AccountForm({ onSubmit, onCancel }: AccountFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'checking',
    current_balance: '',
    currency: 'USD',
    is_active: true
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const accountTypes = [
    'Checking',
    'Savings',
    'Credit Card',
    'Cash',
    'Investment',
    'Loan',
    'Other'
  ];

  const currencies = [
    'USD',
    'EUR',
    'GBP',
    'JPY',
    'CAD',
    'AUD',
    'CHF',
    'CNY',
    'INR'
  ];
  
  return (
    <Card title="Add Account" icon="🏦" className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Account Name"
          id="name"
          name="name"
          type="text"
          required
          placeholder="e.g., My Checking Account"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Account Type
          </label>
          <select
            id="type"
            name="type"
            required
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            <option value="" disabled>Select account type</option>
            {accountTypes.map(type => (
              <option key={type} value={type.toLowerCase()}>{type}</option>
            ))}
          </select>
        </div>

        <Input
          label="Current Balance"
          id="current_balance"
          name="current_balance"
          type="number"
          step="0.01"
          required
          placeholder="0.00"
          leftIcon="$"
          value={formData.current_balance}
          onChange={handleChange}
          fullWidth
        />

        <div>
          <label htmlFor="currency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            required
            value={formData.currency}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center">
          <input
            id="is_active"
            name="is_active"
            type="checkbox"
            checked={formData.is_active}
            onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="is_active" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            Active Account
          </label>
        </div>

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
            Save Account
          </Button>
        </div>
      </form>
    </Card>
  );
}