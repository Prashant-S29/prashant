import { useState } from 'react';

const useCopyToClipboard = () => {
  const [isCopied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    if (text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
        })
        .catch((error) => {
          console.error('Failed to copy:', error);
        });
    }
  };

  return { isCopied, copyToClipboard };
};

export default useCopyToClipboard;
