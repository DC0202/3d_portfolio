import React, { useState, useEffect } from 'react';

const TypewriterText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(1); // Start with 1 to keep "A" visible
  const [reverse, setReverse] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 200); // Shorter delay at the end
    } else if (subIndex === 1 && reverse) { // Change to 1 to keep "A"
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, reverse ? 75 : subIndex === texts[index].length ? 200 : 50); // Increased speed

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span>{"A" + texts[index].substring(0, subIndex)}</span> // Ensure "A" is always shown
  );
};

export default TypewriterText;
