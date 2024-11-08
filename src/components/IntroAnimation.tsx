import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < 2) {
        setStep(step + 1);
      } else {
        setShowIntro(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [step]);

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {step === 0 && (
          <motion.h1
            className="text-6xl gradient-text glitch"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            Welcome to Developer's Den
          </motion.h1>
        )}
        {step === 1 && (
          <motion.div
            className="text-4xl text-[#00e1ff] glitch"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            IT'S PRAGYAN'S ASSISTANT
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-5xl gradient-text">{'< />'}</span>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}