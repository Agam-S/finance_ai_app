'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  icon?: string;
  animate?: boolean;
}

export default function Card({ title, children, className = '', icon, animate = true }: CardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={animate ? "hidden" : "visible"}
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.4 }}
      className={`bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg ${className}`}
    >
      {title && (
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            {icon && <span className="mr-2 text-xl">{icon}</span>}
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{title}</h3>
          </div>
        </div>
      )}
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </motion.div>
  );
}
