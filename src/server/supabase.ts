import { SupabaseClient, createClient } from "@supabase/supabase-js";

const client: SupabaseClient = createClient(
  "https://ufkfbuxhycgtxbbwqsai.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVma2ZidXhoeWNndHhiYndxc2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwMjg4NDIsImV4cCI6MjAxNjYwNDg0Mn0.nzSHpR1Jxlz0K4zZJ37r3XRldyAX_EIJZZHr-YRzzyI"
);
export default client;
