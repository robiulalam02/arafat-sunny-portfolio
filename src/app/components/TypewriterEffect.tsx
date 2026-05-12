"use client";

import { useState, useEffect } from "react";

export default function TypewriterEffect({
  words,
  delay = 100,
}: {
  words: string[];
  delay?: number;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1));
          if (currentText === word) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? delay / 2 : delay,
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, words, currentWordIndex, delay]);

  return (
    <span className="inline-block text-purple-600 dark:text-purple-400 font-mono">
      {currentText}
      <span className="animate-pulse border-r-2 border-purple-600 dark:border-purple-400 ml-[2px] h-full inline-block align-middle -translate-y-[2px]"></span>
    </span>
  );
}