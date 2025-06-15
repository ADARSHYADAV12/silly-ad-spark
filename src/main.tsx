import { createRoot } from 'react-dom/client'
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.tsx'
import './index.css'

// Debug: Output all secrets right before using them
console.log("DEBUG: globalThis.__LOVABLE_SECRETS__", (globalThis as any).__LOVABLE_SECRETS__);

// Hardcoded Clerk publishable key (temporary)
const PUBLISHABLE_KEY = "pk_test_HKoQE36HtLF5197bKMEQxNCRg85tBk5mcLUj99nPoxTR";

if (!PUBLISHABLE_KEY) {
  console.error("Clerk Publishable Key is not set.");
  throw new Error("Missing Clerk Publishable Key - Please ensure it is set.");
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <App />
  </ClerkProvider>
);
