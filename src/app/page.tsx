'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
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

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // FAQ data
  const faqs = [
    {
      question: "How does the AI help with my finances?",
      answer: "Our AI analyzes your spending patterns, identifies trends, and provides personalized insights. It can suggest budget adjustments, detect unusual spending, and recommend ways to reach your savings goals faster."
    },
    {
      question: "Can I import my bank transactions?",
      answer: "Yes! You can easily import transactions via CSV files from most banking institutions, and our AI will automatically categorize them for you."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-level encryption to protect your data, and we never share your information with third parties."
    },
    {
      question: "How much does FinanceAI cost?",
      answer: "FinanceAI offers a free plan with core features. Premium plans with advanced AI insights and unlimited transaction history start at just $4.99/month."
    }
  ];

  // Features data
  const features = [
    {
      icon: "📊",
      title: "Smart Insights",
      description: "Get AI-generated summaries and actionable suggestions based on your spending patterns."
    },
    {
      icon: "📈",
      title: "Visual Analytics",
      description: "Track your finances with beautiful charts showing spending, income, and savings trends."
    },
    {
      icon: "🤖",
      title: "Budget AI",
      description: "Let our AI create personalized budget plans that adapt to your goals and lifestyle."
    },
    {
      icon: "📱",
      title: "Ask Anything",
      description: "Use our conversational interface to get instant answers about your finances."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      {/* Header/Navigation */}
      

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
            >
              <span className="block">Take control of your</span>
              <span className="block text-indigo-600 dark:text-indigo-400">finances with AI</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-500 dark:text-gray-300 max-w-lg"
            >
              Smart insights, personalized budgets, and AI-powered suggestions to help you save more and spend wisely.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link href="/signup" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get Started Free
              </Link>
              <Link href="#demo" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
                See Demo
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative h-64 sm:h-80 lg:h-96"
          >
            <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl overflow-hidden shadow-lg">
              <div className="absolute top-4 left-4 right-4 h-8 bg-white dark:bg-gray-800 rounded flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-16 left-4 right-4 bottom-4 bg-white dark:bg-gray-800 rounded shadow-sm p-4">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="col-span-2 h-1/2 bg-indigo-50 dark:bg-indigo-900/20 rounded p-2">
                    <div className="h-4 w-1/3 bg-indigo-200 dark:bg-indigo-700 rounded mb-2"></div>
                    <div className="grid grid-cols-4 gap-2 h-1/2">
                      <div className="bg-green-100 dark:bg-green-900/20 rounded"></div>
                      <div className="bg-blue-100 dark:bg-blue-900/20 rounded"></div>
                      <div className="bg-purple-100 dark:bg-purple-900/20 rounded"></div>
                      <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded p-2">
                    <div className="h-3 w-2/3 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded p-2">
                    <div className="h-3 w-2/3 bg-indigo-200 dark:bg-indigo-700 rounded mb-2"></div>
                    <div className="h-12 bg-indigo-100 dark:bg-indigo-800/30 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-indigo-600 dark:bg-indigo-900"
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-extrabold text-white">85%</p>
              <p className="mt-2 text-xl text-indigo-100">of users save more</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-white">$320</p>
              <p className="mt-2 text-xl text-indigo-100">avg. monthly savings</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-white">42%</p>
              <p className="mt-2 text-xl text-indigo-100">reduction in impulse spending</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-white">25K+</p>
              <p className="mt-2 text-xl text-indigo-100">happy users</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">Features</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight">Smart finance management</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">Everything you need to understand your spending habits and reach your financial goals.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 relative overflow-hidden"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-300">{feature.description}</p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-20"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">How It Works</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight">Simple as 1-2-3</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">Getting started with FinanceAI is easy and takes less than 5 minutes.</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-50 dark:bg-gray-900 px-4 text-sm text-gray-500 dark:text-gray-400">Get Started</span>
          </div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              1
            </div>
            <div className="ml-16">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Create a free account</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">Sign up in seconds and link your first bank account or upload a transaction CSV.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              2
            </div>
            <div className="ml-16">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Import your transactions</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">Our AI automatically categorizes your spending and builds your financial profile.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              3
            </div>
            <div className="ml-16">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Get AI-powered insights</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">Receive personalized suggestions and start tracking your progress toward financial goals.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">See It In Action</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight">AI-Powered Finance</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">Watch how FinanceAI helps you understand and improve your finances.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative rounded-xl overflow-hidden shadow-2xl mx-auto max-w-4xl"
        >
          <div className="aspect-w-16 aspect-h-9 bg-indigo-100 dark:bg-indigo-900/30">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mx-auto shadow-lg">
                  <div className="w-6 h-6 text-indigo-600 dark:text-indigo-400">▶</div>
                </div>
                <p className="mt-4 text-lg font-medium text-indigo-800 dark:text-indigo-200">Watch Demo Video</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="text-indigo-600 dark:text-indigo-400 text-xl mb-3">💬</div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Ask Anything</h3>
            <p className="text-gray-500 dark:text-gray-300">
              "How much did I spend on food last month?"
            </p>
            <p className="mt-2 text-gray-500 dark:text-gray-300">
              "What can I cut to save $200 more?"
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="text-indigo-600 dark:text-indigo-400 text-xl mb-3">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Smart Analysis</h3>
            <p className="text-gray-500 dark:text-gray-300">
              "You spent 30% more on food this month compared to your average."
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="text-indigo-600 dark:text-indigo-400 text-xl mb-3">💡</div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">AI Suggestions</h3>
            <p className="text-gray-500 dark:text-gray-300">
              "Reduce eating out by 15% to hit your savings goal 2 months early."
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">FAQ</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight">Common Questions</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
                <span>{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-500 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-indigo-600 dark:bg-indigo-900 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-12 md:py-16 md:px-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to take control of your finances?</span>
                <span className="block text-indigo-200">Join thousands of happy users today.</span>
              </h2>
              <p className="mt-4 max-w-lg text-lg text-indigo-100">
                Start for free—no credit card required. Upgrade to premium features anytime.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                  Get started free
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link href="#demo" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}