import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mmiyyhmbxodfdnuqomyx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1taXl5aG1ieG9kZmRudXFvbXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwNzkwNDksImV4cCI6MjA2MTY1NTA0OX0.KIwuisA_nq1_9ROw88wzMQMa7HQfzPMlrCjCqXdyEDk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
