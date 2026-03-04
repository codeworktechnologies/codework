"use client";

import { useEffect, useState } from "react";

const PHRASES = ["Smart Technology", "Scalable Products", "Reliable Delivery"];

export default function TypingHeadline() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIndex];
    const speed = deleting ? 45 : 80;

    const timer = setTimeout(() => {
      if (!deleting && text.length < phrase.length) {
        setText(phrase.slice(0, text.length + 1));
      } else if (deleting && text.length > 0) {
        setText(phrase.slice(0, text.length - 1));
      } else if (!deleting && text.length === phrase.length) {
        setTimeout(() => setDeleting(true), 650);
      } else if (deleting && text.length === 0) {
        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, phraseIndex, deleting]);

  return (
    <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
      {text}
      <span className="ml-1 inline-block h-8 w-[2px] animate-pulse bg-current align-middle" aria-hidden="true" />
    </span>
  );
}
