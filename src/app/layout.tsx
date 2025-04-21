'use client';
import './globals.css';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>FinanceAI Tracker</title>
        <meta name="description" content="Track your finances with AI assistance." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
      </head>
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
         <Footer />
        </div>
      </body>
    </html>
  );
}
