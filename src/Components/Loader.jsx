// src/Components/Loader.jsx
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import helloAnimation from '../assets/hello_lottie.json';

export default function Loader({ onDone, minTime = 0 }) {
  const [open, setOpen] = useState(true);
  const start = useRef(Date.now());

  useEffect(() => {
    document.documentElement.classList.add('overflow-hidden', 'loader-open');
    return () => {
      document.documentElement.classList.remove('overflow-hidden', 'loader-open');
    };
  }, []);

  const handleComplete = () => {
    const elapsed = Date.now() - start.current;
    const wait = Math.max(0, minTime - elapsed);
    setTimeout(() => setOpen(false), wait);
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={onDone}>
      {open && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[9999] grid place-items-center bg-black backdrop-blur-md"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div initial={{ opacity: 1, scale: 1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0.9, scale: 0.9 }}>
            <Lottie animationData={helloAnimation} autoplay loop={false} onComplete={handleComplete} style={{ width: 240, height: 240 }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}