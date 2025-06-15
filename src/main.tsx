
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.tsx'
import './index.css'

// Access the Clerk publishable key from Supabase secrets via Lovable's environment
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error("Environment variables:", import.meta.env);
  throw new Error("Missing Clerk Publishable Key - Please ensure VITE_CLERK_PUBLISHABLE_KEY is properly set in Supabase secrets");
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <App />
  </ClerkProvider>
);
