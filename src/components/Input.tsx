'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, fullWidth = false, leftIcon, rightIcon, className = '', ...props }, ref) => {
    return (
      <div className={`${fullWidth ? 'w-full' : ''} mb-4`}>
        {label && (
          <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {label}
          </label>
        )}
        <div className="relative rounded-md shadow-sm">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">{leftIcon}</span>
            </div>
          )}
          <input
            ref={ref}
            className={`
              block w-full rounded-md border-gray-300 shadow-sm 
              focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
              ${leftIcon ? 'pl-10' : ''}
              ${rightIcon ? 'pr-10' : ''}
              ${error ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : ''}
              ${className}
              dark:bg-gray-800 dark:border-gray-700 dark:text-white
            `}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-description` : undefined}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">{rightIcon}</span>
            </div>
          )}
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400" id={`${props.id}-error`}>
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400" id={`${props.id}-description`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
