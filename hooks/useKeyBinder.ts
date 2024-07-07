import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useKeyBinder = ({ keys }: { keys: { key: string; targetUrl: string; ctrl?: boolean }[] }) => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      keys.forEach((binding) => {
        // Ignoring case sensitivity
        const normalizedKey = event.key.toLowerCase();
        const isCtrlKey = binding.ctrl ? event.ctrlKey : true;

        if (normalizedKey === binding.key.toLowerCase() && isCtrlKey) {
          // Prevent default browser behavior
          event.preventDefault();
          // Use next/router to navigate
          router.push(binding.targetUrl);
        }
      });
    };

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [keys, router]);
};

export default useKeyBinder;
