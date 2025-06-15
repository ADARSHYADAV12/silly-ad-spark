
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'

// 1. Prefer the hardcoded key
const HARDCODED_CLERK_KEY = "pk_test_HKoQE36HtLF5197bKMEQxNCRg85tBk5mcLUj99nPoxTR"
// 2. Fallback to ENV variable
const ENV_CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// 3. Use the hardcoded key if it exists, else fallback, else error
const PUBLISHABLE_KEY = HARDCODED_CLERK_KEY || ENV_CLERK_KEY

if (!PUBLISHABLE_KEY) {
  console.error("Missing Clerk Publishable Key. Please ensure that you have either hardcoded it or set it as VITE_CLERK_PUBLISHABLE_KEY in your environment.");
  throw new Error("Missing Clerk Publishable Key");
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <App />
    </ClerkProvider>
  </React.StrictMode>
)
