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

-- Create indexes
CREATE INDEX idx_users_username ON public.users(username);
CREATE INDEX idx_progress_user_id ON public.progress(user_id);
CREATE INDEX idx_progress_topic ON public.progress(topic);
