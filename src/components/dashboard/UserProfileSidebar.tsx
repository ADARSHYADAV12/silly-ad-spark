import React, { useMemo } from "react";
import { useUser } from "@clerk/clerk-react";

const EMOJIS = [
  "😀", "😎", "🤩", "🦄", "🐸", "🐙", "🐼", "🦊", "🐵", "🐧", "🐶", "🐱", "🦁", "🐯", "🐨", "🐻", "🦉", "🦋", "🍕", "🍔", "🍟", "🍩", "🍦", "🍉", "🍓", "🥑", "🥕", "🌈", "⚡", "✨", "🔥"
];

function getRandomEmoji(seed: string) {
  // Simple seeded random for consistent emoji per user
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const idx = Math.abs(hash) % EMOJIS.length;
  return EMOJIS[idx];
}

export default function UserProfileSidebar() {
  const { user } = useUser();
  const username = user?.username || user?.firstName || user?.emailAddress || "User";
  const emoji = useMemo(() => getRandomEmoji(username), [username]);

  return (
    <div className="p-6 border-b border-teal-100">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-yellow-400 rounded-full flex items-center justify-center text-2xl">
          <span>{emoji}</span>
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-lg">
            {username}
          </p>
          <p className="text-sm text-gray-500">Pro Member</p>
        </div>
      </div>
    </div>
  );
}
