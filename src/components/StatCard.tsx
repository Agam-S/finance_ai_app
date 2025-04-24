'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string | number;
  isPositive?: boolean;
  icon: string;
  color?: string;
}

export default function StatCard({ 
  title, 
  value, 
  change, 
  isPositive = true, 
  icon,
  color = 'indigo'
}: StatCardProps) {
  const colorClasses = {
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  };

  return (
    <Card className="h-full">
      <div className="flex items-center">
        <div className={`flex-shrink-0 rounded-md p-3 ${colorClasses[color as keyof typeof colorClasses]}`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{title}</dt>
            <dd>
              <div className="text-lg font-medium text-gray-900 dark:text-white">{value}</div>
            </dd>
            {change !== undefined && (
              <dd className="flex items-center text-sm">
                <motion.span 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
                >
                  {isPositive ? '↑' : '↓'} {change}
                </motion.span>
                <span className="ml-1 text-gray-500 dark:text-gray-400">from last period</span>
              </dd>
            )}
          </dl>
        </div>
      </div>
    </Card>
  );
}
