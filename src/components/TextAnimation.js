// src/TextAnimation.js
import React, { useState, useEffect } from "react";

const TextAnimation = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    "Hello, World!",
    "Welcome to React",
    "Tailwind CSS is Awesome",
    "Text Animation Example",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="text-animation-container">
      <span className="animated-text">{texts[index]}</span>
    </div>
  );
};

export default TextAnimation;
