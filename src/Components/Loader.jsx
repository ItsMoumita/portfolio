// src/Components/Loader.jsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import helloAnimation from '../assets/hello_lottie.json';

export default function Loader({ onDone, minTime = 800 }) {
  const start = useRef(Date.now());

  // Lock scroll while loader visible
  useEffect(() => {
    document.documentElement.classList.add('overflow-hidden');
    return () => document.documentElement.classList.remove('overflow-hidden');
  }, []);

  // Lottie complete -> wait minTime -> tell parent to unmount
  const handleComplete = () => {
    const elapsed = Date.now() - start.current;
    const wait = Math.max(0, minTime - elapsed);
    setTimeout(onDone, wait);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] grid place-items-center bg-black/70 backdrop-blur-md"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}         // bigger zoom-out so it's obvious
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: '50% 50%', willChange: 'transform, opacity' }}
    >
      <Lottie
        animationData={helloAnimation}
        autoplay
        loop={false}
        onComplete={handleComplete}
        style={{ width: 240, height: 240 }}
      />
    </motion.div>
  );
}