-- Enable pgvector extension
create extension if not exists vector;

-- Create KB documents table
create table if not exists kb_documents (
  id uuid primary key default gen_random_uuid(),
  category text not null, -- e.g 'clinic_profile', 'treatments', 'faq'
  content_he text,
  content_ar text,
  embedding vector(1536), -- Assuming OpenAI ada-002 model for embeddings
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Function to match documents
create or replace function match_kb_documents (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id uuid,
  category text,
  content_he text,
  content_ar text,
  similarity float
)
language sql stable
as $$
  select
    kb_documents.id,
    kb_documents.category,
    kb_documents.content_he,
    kb_documents.content_ar,
    1 - (kb_documents.embedding <=> query_embedding) as similarity
  from kb_documents
  where 1 - (kb_documents.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;
