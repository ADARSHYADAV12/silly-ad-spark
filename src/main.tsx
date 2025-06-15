
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.tsx'
import './index.css'

// For Lovable with Supabase integration, we need to access the secret from the environment
// The secret should be available as a regular environment variable
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 
                        (globalThis as any).__LOVABLE_SECRETS__?.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error("Environment variables:", import.meta.env);
  console.error("Available secrets:", (globalThis as any).__LOVABLE_SECRETS__);
  throw new Error("Missing Clerk Publishable Key - Please ensure VITE_CLERK_PUBLISHABLE_KEY is properly set in Supabase secrets");
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <App />
  </ClerkProvider>
);
