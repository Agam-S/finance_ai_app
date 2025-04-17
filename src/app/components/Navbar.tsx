'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Transactions', href: '/transactions', icon: '💸' },
  { name: 'Budget', href: '/budget', icon: '💰' },
  { name: 'Reports', href: '/reports', icon: '📈' },
  { name: 'Settings', href: '/settings', icon: '⚙️' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                  className="w-8 h-8 mr-2 text-indigo-600"
                >
                  💹
                </motion.div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">FinanceAI</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-700"
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>Ask AI</span>
              </button>
            </div>
            <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
              <button
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                <span className="sr-only">View notifications</span>
                <span className="h-6 w-6 flex items-center justify-center">🔔</span>
              </button>

              <div className="ml-3 relative">
                <div>
                  <button
                    className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700"
                  >
                    <span className="sr-only">Open user menu</span>
                    <span className="h-8 w-8 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                      👤
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="sm:hidden overflow-hidden"
      >
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600"
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <span className="h-10 w-10 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                👤
              </span>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800 dark:text-white">User</div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">user@example.com</div>
            </div>
            <button
              className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white"
            >
              <span className="sr-only">View notifications</span>
              <span className="h-6 w-6 flex items-center justify-center">🔔</span>
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
