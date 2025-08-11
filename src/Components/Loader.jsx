// src/components/Loader.jsx
import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import { AnimatePresence, motion } from 'framer-motion';
import helloAnimation from '../assets/hello_lottie.json'; 

export default function Loader({ onDone }) {
  const [show, setShow] = useState(true);
  const lottieRef = useRef(null);

  useEffect(() => {
    const anim = lottieRef.current;
    if (!anim) return;
    const handleComplete = () => setShow(false);
    anim.addEventListener('complete', handleComplete);
    return () => anim.removeEventListener('complete', handleComplete);
  }, []);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => onDone?.()}>
      {show && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}   // zoom-out
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
          aria-busy="true"
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={helloAnimation}
            loop={false}
            autoplay
            style={{ width: 240, height: 240 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}