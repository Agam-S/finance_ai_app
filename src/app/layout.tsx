'use client';
import './globals.css';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
         {/* Main content area */}
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <motion.main 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
          >
            {children}
          </motion.main>
          <footer className="bg-white shadow-inner dark:bg-gray-800 mt-auto">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} FinanceAI Tracker. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
