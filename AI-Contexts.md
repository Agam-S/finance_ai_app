# AI Contexts

## AI_Embeddings
- embedding_id (primary key)
- source_type (transaction, message, etc.)
- source_id (reference to the original item)
- embedding_vector (vector representation of the content)
- created_at

## User_Financial_Profiles
- profile_id (primary key)
- user_id (foreign key)
- spending_patterns (JSON - avg spending by category)
- income_patterns (JSON - income sources and frequency)
- financial_health_indicators (JSON - savings rate, debt ratio, etc.)
- common_merchants (JSON - frequently used services/stores)
- recurring_expenses (JSON - subscription amounts and dates)
- last_updated

## AI_Context_Sessions
- session_id (primary key)
- user_id (foreign key)
- start_time
- last_active_time
- context_state (JSON - what the AI currently "knows" in this session)
- referenced_transactions (JSON array of transaction IDs discussed)
- referenced_categories (JSON array of category IDs discussed)
- referenced_insights (JSON array of insight IDs discussed)
- referenced_budgets (JSON array of budget IDs discussed)