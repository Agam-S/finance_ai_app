# Core Tables

## Users Table
- user_id (primary key)
- email
- name
- created_at
- preferences (JSON - could store UI preferences, currency, etc.)
- last_login (timestamp)
- is_active (boolean - to mark if the user is active or deactivated)
- is_verified (boolean - to mark if the user has verified their email)
- password_hash (hashed password for security)
- profile_picture (URL to the user's profile picture)

## Accounts

- account_id (primary key)
- user_id (foreign key)
- name (e.g., "Main Checking", "Savings")
- type (checking, savings, credit card)
- current_balance
- currency
- is_active
- created_at (timestamp)
- updated_at (timestamp)


## Transactions
- transaction_id (primary key)
- account_id (foreign key)
- user_id (foreign key)
- amount
- transaction_type (debit, credit)
- category (foreign key to categories table)
- description
- date (timestamp)
- is_recurring (boolean - to mark if the transaction is recurring)
- recurrence_pattern (JSON - to store details about the recurrence, e.g., weekly, monthly)
- subcategory_id (JSON - to store tags associated with the transaction)
- created_at (timestamp)

## Categories
- category_id (primary key)
- name (e.g., "Groceries", "Utilities")
- type (income, expense)
- icon (URL to the icon)
- color (hex code for the category color)
- created_at (timestamp)
- custom (boolean - to mark if the category is user-defined or system-defined)

## Subcategories
- subcategory_id (primary key)
- category_id (foreign key)
- name (e.g., "Groceries - Fruits", "Groceries - Vegetables")
- created_at (timestamp)

## Budgets
- budget_id (primary key)
- user_id (foreign key)
- category_id (foreign key)
- amount
- start_date (timestamp)
- end_date (timestamp)
- is_active (boolean - to mark if the budget is active or completed)
- period (monthly, weekly, yearly)
- created_at (timestamp)
- updated_at (timestamp)

# AI Features Tables

## AI Insights
- insight_id (primary key)
- user_id (foreign key)
- account_id (foreign key)
- type (e.g., spending trend, savings goal, suggestion)
- content (text - the actual insight or suggestion)
- related_data (JSON - could include related transactions, categories, etc.)
- data_generated
- is_dismissed (boolean - to mark if the user has dismissed the insight)
- priority (low, medium, high - to mark the importance of the insight)
- created_at (timestamp)
- updated_at (timestamp)

## AI Conversations
- conversation_id (primary key)
- user_id (foreign key)
- start_time (timestamp)
- last_interaction_time (timestamp)
- is_active (boolean - to mark if the conversation is ongoing or completed)
- context (JSON - to store the context of the conversation, e.g., user preferences, previous interactions)
- created_at (timestamp)
- updated_at (timestamp)


## AI Messages
- message_id (primary key)
- conversation_id (foreign key)
- sender (user, AI)
- content (text - the actual message content)
- timestamp (timestamp - when the message was sent)
- is_read (boolean - to mark if the message has been read by the user)
- related_data (JSON - to store related transactions, categories, etc.)
- created_at (timestamp)
- updated_at (timestamp)

## Saving Goals
- goal_id (primary key)
- user_id (foreign key)
- name (e.g., "Vacation", "Emergency Fund")
- target_amount
- current_amount
- start_date (timestamp - when the goal was created)
- due_date (timestamp - when the goal should be achieved)
- is_active (boolean - to mark if the goal is active or completed)
- category_id (foreign key - to link the goal to a specific category)
- status (e.g., "in progress", "achieved", "failed")
- ai_suggestion (JSON - to store AI-generated suggestions related to the goal)
- created_at (timestamp)
- updated_at (timestamp)

# Addional Tables

## Notifications
- notification_id (primary key)
- user_id (foreign key)
- type (e.g., transaction alert, budget alert, AI insight)
- content (text - the actual notification content)
- is_read (boolean - to mark if the notification has been read by the user)
- created_at (timestamp)
- updated_at (timestamp)

## Transaction Tags
- tag_id (primary key)
- user_id (foreign key)
- transaction_id (foreign key)
- name (e.g., "Business", "Personal")
- created_at (timestamp)
- updated_at (timestamp)

## Activity Log
- log_id (primary key)
- user_id (foreign key)
- action (e.g., login, logout, transaction added)
- description (text - details about the action)
- timestamp (timestamp - when the action occurred)
- ip_address (string - to store the IP address of the user)
- device_info (JSON - to store details about the device used for the action)
- created_at (timestamp)
- updated_at (timestamp)
