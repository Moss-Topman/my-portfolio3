"use client";
import { useEffect, useState } from 'react';

export default function CSSBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-40">
      <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-br from-purple-400/10 to-pink-400/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl animate-pulse-slower"></div>
    </div>
  );
}