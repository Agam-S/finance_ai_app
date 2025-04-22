# FinanceAI Style Guide

This document defines the visual language, components, and design patterns for the FinanceAI application.

## Typography

### Primary Font: Lora (Google Fonts)
- Import in your layout file:
  ```html
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
  ```

### Font Hierarchy
- **Headings**: Lora Bold/ExtraBold
  - H1: 3rem/48px (font-extrabold)
  - H2: 2.25rem/36px (font-bold)
  - H3: 1.5rem/24px (font-semibold)
  - H4: 1.25rem/20px (font-medium)
  
- **Body Text**: Lora Regular
  - Large: 1.125rem/18px 
  - Regular: 1rem/16px
  - Small: 0.875rem/14px
  - Extra Small: 0.75rem/12px

### Font Usage in Tailwind Config
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'serif'],
      },
    },
  },
}
```

## Color Palette

### Primary Colors
- **Indigo**: Primary brand color
  - Primary: `#4F46E5` (indigo-600)
  - Hover: `#4338CA` (indigo-700)
  - Light: `#E0E7FF` (indigo-100)
  - Dark: `#3730A3` (indigo-800)
  - Super Light: `#EEF2FF` (indigo-50)

### Neutral Colors
- **Gray**:
  - Darkest: `#111827` (gray-900)
  - Dark: `#1F2937` (gray-800)
  - Medium: `#6B7280` (gray-500)
  - Light: `#E5E7EB` (gray-200)
  - Lightest: `#F9FAFB` (gray-50)
  - White: `#FFFFFF`

### Accent Colors
- **Green**: Success, positive trends
  - Primary: `#10B981` (green-500)
  - Light: `#D1FAE5` (green-100)
  
- **Red**: Warnings, negative trends
  - Primary: `#EF4444` (red-500)
  - Light: `#FEE2E2` (red-100)
  
- **Yellow**: Caution, pending actions
  - Primary: `#F59E0B` (yellow-500)
  - Light: `#FEF3C7` (yellow-100)
  
- **Blue**: Information, insights
  - Primary: `#3B82F6` (blue-500)
  - Light: `#DBEAFE` (blue-100)

### Dark Mode Variants
- **Background**:
  - Primary: `#111827` (gray-900)
  - Secondary: `#1F2937` (gray-800)
  - Tertiary: `#374151` (gray-700)
  
- **Text**:
  - Primary: `#F9FAFB` (gray-50)
  - Secondary: `#E5E7EB` (gray-200)
  - Tertiary: `#9CA3AF` (gray-400)

## Gradients

### Primary Gradients
- **Light Mode Background**: `bg-gradient-to-b from-white to-indigo-50`
- **Dark Mode Background**: `bg-gradient-to-b from-gray-900 to-indigo-950`
- **Card Highlight**: `bg-gradient-to-tr from-indigo-500 to-purple-500`
- **Success Gradient**: `bg-gradient-to-r from-green-400 to-emerald-500`
- **Warning Gradient**: `bg-gradient-to-r from-yellow-400 to-orange-500`

## Border Radius

- **Extra Small**: `rounded-sm` (0.125rem)
- **Small**: `rounded` (0.25rem)
- **Medium**: `rounded-md` (0.375rem)
- **Large**: `rounded-lg` (0.5rem)
- **Extra Large**: `rounded-xl` (0.75rem)
- **2XL**: `rounded-2xl` (1rem)
- **3XL**: `rounded-3xl` (1.5rem)
- **Full**: `rounded-full` (9999px)

## Shadows

- **Small**: `shadow-sm`
- **Medium**: `shadow`
- **Large**: `shadow-md`
- **Extra Large**: `shadow-lg`
- **2XL**: `shadow-xl`
- **3XL**: `shadow-2xl`

## Spacing

- Use Tailwind's built-in spacing scale: 
  - 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96

### Common Layout Spacing
- **Page Padding**: 
  - Mobile: `px-4 py-6`
  - Tablet: `px-6 py-8`
  - Desktop: `px-8 py-12`
  
- **Section Spacing**: 
  - `py-12` (mobile)
  - `py-16` (tablet)
  - `py-20` (desktop)
  
- **Card Padding**:
  - `p-4` (mobile)
  - `p-6` (tablet)
  - `p-8` (desktop)

## Animations

### Framer Motion Variants

#### Container Variants
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
```

#### Item Variants
```javascript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

#### Fade In
```javascript
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};
```

#### Scale On Hover
```javascript
const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 }
};
```

## Component Styling

### Buttons

#### Primary Button
```jsx
<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
  Button Text
</button>
```

#### Secondary Button
```jsx
<button className="px-4 py-2 bg-white hover:bg-gray-50 text-indigo-600 font-medium rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
  Button Text
</button>
```

#### Tertiary/Text Button
```jsx
<button className="text-indigo-600 hover:text-indigo-500 font-medium focus:outline-none transition-colors">
  Button Text
</button>
```

#### Disabled Button
```jsx
<button disabled className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm opacity-50 cursor-not-allowed">
  Button Text
</button>
```

### Form Controls

#### Text Input
```jsx
<input
  type="text"
  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
  placeholder="Placeholder"
/>
```

#### Select
```jsx
<select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

#### Checkbox
```jsx
<div className="flex items-center">
  <input
    type="checkbox"
    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
  />
  <label className="ml-2 text-gray-700 dark:text-gray-300">
    Checkbox label
  </label>
</div>
```

#### Radio Button
```jsx
<div className="flex items-center">
  <input
    type="radio"
    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
  />
  <label className="ml-2 text-gray-700 dark:text-gray-300">
    Radio label
  </label>
</div>
```

### Cards

#### Basic Card
```jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
  Card content
</div>
```

#### Interactive Card
```jsx
<motion.div
  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300"
>
  Card content
</motion.div>
```

#### Highlighted Card
```jsx
<div className="bg-indigo-600 text-white rounded-lg shadow-lg p-6">
  Card content
</div>
```

### Data Visualization (Charts)

#### Chart Container
```jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Chart Title</h3>
  <div className="h-60">
    {/* Chart component goes here */}
  </div>
</div>
```

#### Chart Colors
- Primary Data: `#4F46E5` (indigo-600)
- Secondary Data: `#10B981` (green-500)
- Tertiary Data: `#F59E0B` (yellow-500)
- Negative Data: `#EF4444` (red-500)

### Loading States

#### Button Loading
```jsx
<button disabled className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm flex items-center justify-center">
  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>
```

#### Content Loading Skeleton
```jsx
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2.5"></div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2.5"></div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
</div>
```

## Icons

### Common UI Icons

#### Heroicons (recommended)
Use the Heroicons library for consistent styling

```jsx
// Example: Using Heroicons in React
import { ChevronDownIcon } from '@heroicons/react/solid'

function Example() {
  return (
    <button>
      Options
      <ChevronDownIcon className="h-5 w-5 ml-2" />
    </button>
  )
}
```

### Feature Icons
- Smart Insights: 📊
- Visual Analytics: 📈
- Budget AI: 🤖
- Ask Anything: 📱

## Breakpoints

- **Small**: `sm` (640px)
- **Medium**: `md` (768px)
- **Large**: `lg` (1024px)
- **Extra Large**: `xl` (1280px)
- **2XL**: `2xl` (1536px)

## Responsive Layout

### Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  Content
</div>
```

### Responsive Grid
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>
```

### Responsive Flex
```jsx
<div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Dark Mode

Enable dark mode by adding the `dark` class to the HTML element or using Tailwind's dark mode strategy.

All component examples in this guide include dark mode variants using `dark:` prefixed classes.

## Accessibility

- **Contrast ratios**: Maintain WCAG AA compliance for text contrast
- **Focus states**: Ensure all interactive elements have visible focus states
- **Screen readers**: Include appropriate ARIA attributes where needed
- **Keyboard navigation**: Ensure all interactive elements are keyboard accessible

## Page Layout Templates

### Standard Page Layout
```jsx
<div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
  {/* Header/Navigation */}
  <header className="bg-white dark:bg-gray-800 shadow-sm">
    {/* Header content */}
  </header>
  
  {/* Main content */}
  <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    {/* Page content */}
  </main>
  
  {/* Footer */}
  <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    {/* Footer content */}
  </footer>
</div>
```

### Dashboard Layout
```jsx
<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
  {/* Sidebar */}
  <aside className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-md">
    {/* Sidebar content */}
  </aside>
  
  {/* Main content */}
  <div className="ml-64">
    {/* Header */}
    <header className="bg-white dark:bg-gray-800 shadow-sm h-16 flex items-center px-8">
      {/* Header content */}
    </header>
    
    {/* Page content */}
    <main className="py-8 px-8">
      {/* Dashboard content */}
    </main>
  </div>
</div>
```