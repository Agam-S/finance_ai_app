'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/util/firebase-config';
import { useRouter } from 'next/navigation';


export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        router.push('/dashboard'); // Redirect if authenticated
      } else {
        setIsAuthenticated(false);
      }
    });
    
    return () => unsubscribe(); // Cleanup listener on unmount
  }, [router]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    
    try {
      await sendPasswordResetEmail(auth, email);
      setStatus('success');
    } catch (err: any) {
      setError(err.message || 'Failed to send password reset email');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      >
        <div className="p-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Reset your password
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
              Enter your email and we'll send you instructions to reset your password
            </p>
          </motion.div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800 dark:text-green-300">Email sent</h3>
                  <div className="mt-2 text-sm text-green-700 dark:text-green-200">
                    <p>Check your email for a link to reset your password.</p>
                  </div>
                  <div className="mt-4">
                    <Link href="/login" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                      Return to login page →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-200 rounded-lg"
                >
                  {error}
                </motion.div>
              )}

              <motion.form variants={itemVariants} onSubmit={handleResetPassword} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : 'Reset Password'}
                  </motion.button>
                </div>
              </motion.form>
            </>
          )}

          {status !== 'success' && (
            <motion.div variants={itemVariants} className="mt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Remember your password?{' '}
                <Link href="/login" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                  Sign in
                </Link>
              </p>
            </motion.div>
          )}
        </div>
        
        <motion.div 
          variants={fadeIn}
          className="px-8 py-6 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600"
        >
          <div className="flex items-center justify-center">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Need help?{' '}
              <Link href="/support" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                Contact support
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}