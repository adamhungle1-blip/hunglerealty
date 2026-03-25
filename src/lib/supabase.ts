import { createClient } from "@supabase/supabase-js";

// Server-side client (uses service_role key — never expose to browser)
export function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase service credentials");
  }

  return createClient(url, key);
}

// Browser-safe client (uses anon key — safe for client components)
export function createBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase public credentials");
  }

  return createClient(url, key);
}
