"use client";

import { useState } from "react";

export default function ShareProjectButton({ title }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        return;
      }
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button type="button" className="button-secondary mt-3 w-full" onClick={handleShare}>
      {copied ? "Link Copied" : "Share Project"}
    </button>
  );
}
