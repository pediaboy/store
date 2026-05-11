import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing...');

  const statusTexts = [
    'Initializing system...',
    'Loading assets...',
    'Compiling modules...',
    'Rendering shaders...',
    'Building interface...',
    'Almost ready...',
    'Welcome!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        const textIndex = Math.min(Math.floor(newProgress / 16), statusTexts.length - 1);
        setStatusText(statusTexts[textIndex]);
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{ background: '#050510' }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
              animation: 'pulse-neon 2s ease-in-out infinite'
            }}
          />
        </div>

        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          className="relative mb-12"
        >
          <div className="w-24 h-24 rounded-2xl border-2 border-neon-purple/50 flex items-center justify-center relative"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(6,182,212,0.1))',
              boxShadow: '0 0 30px rgba(168,85,247,0.3), 0 0 60px rgba(168,85,247,0.1)'
            }}
          >
            <span className="font-orbitron text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              T
            </span>
            {/* Rotating border */}
            <div
              className="absolute inset-[-3px] rounded-2xl"
              style={{
                background: 'conic-gradient(from 0deg, #a855f7, #06b6d4, #ec4899, #a855f7)',
                animation: 'rotate-slow 3s linear infinite',
                zIndex: -1,
                opacity: 0.6
              }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-orbitron text-xl md:text-2xl font-bold text-white mb-2 tracking-wider"
        >
          THIRAFI THARIQ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-mono text-sm text-neon-purple/70 mb-10"
        >
          &lt;loading portfolio /&gt;
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-64 md:w-80 relative"
        >
          <div className="h-1 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full rounded-full loading-bar"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between mt-3">
            <span className="font-mono text-xs text-white/30">{statusText}</span>
            <span className="font-mono text-xs text-neon-purple">{Math.round(progress)}%</span>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 flex gap-1"
        >
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              className="w-1.5 h-1.5 rounded-full bg-neon-purple"
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
