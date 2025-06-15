
import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'

// Fetch the key from the Supabase Edge Function
const fetchClerkKey = async () => {
  // Replace with your Vercel/Supabase Edge Function deployment, for local dev use localhost:54321
  const url =
    import.meta.env.DEV
      ? 'http://localhost:54321/functions/v1/get-clerk-key'
      : '/functions/v1/get-clerk-key';
  const resp = await fetch(url);
  const json = await resp.json();
  if (!json.key) throw new Error('Clerk key not found from edge function');
  return json.key;
};

// Main wrapper to delay render until key is loaded
const ClerkProviderWrapper = () => {
  const [clerkKey, setClerkKey] = useState<string | null>(null);

  useEffect(() => {
    fetchClerkKey()
      .then(setClerkKey)
      .catch((e) => {
        // Optional: expose error fallback
        // eslint-disable-next-line no-console
        console.error(e);
      });
  }, []);

  if (!clerkKey) {
    // Optional: a loading spinner here
    return <div className="w-full min-h-screen flex items-center justify-center text-xl">Loading authentication…</div>;
  }

  return (
    <ClerkProvider publishableKey={clerkKey} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProviderWrapper />
  </React.StrictMode>
)
