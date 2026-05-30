# Grade 7 Math Practice App - Setup Instructions

## Database Setup (Supabase)

Run the following SQL in your Supabase project's SQL editor:

```sql
-- Create users table
CREATE TABLE IF NOT EXISTS public.users (
  id BIGSERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  email TEXT,
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create progress table
CREATE TABLE IF NOT EXISTS public.progress (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  topic TEXT NOT NULL,
  score INTEGER,
  total_questions INTEGER,
  percentage INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, topic)
);

-- Create indexes for performance
CREATE INDEX idx_users_username ON public.users(username);
CREATE INDEX idx_progress_user_id ON public.progress(user_id);
CREATE INDEX idx_progress_topic ON public.progress(topic);
```

## Environment Variables

Copy `.env.example` to `.env` and fill in:
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_ANON_KEY`: Your Supabase anonymous key (public)
- `GEMINI_API_KEY`: Google Gemini API key for AI tutoring
- `JWT_SECRET`: Random secret key for JWT tokens

## Starting the App

```bash
npm install
npm start
```

Default admin credentials:
- Username: `admin`
- Password: `admin123`

Access at `http://localhost:5000`
