import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [displayedName, setDisplayedName] = useState('');
  const [displayedRole, setDisplayedRole] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [nameComplete, setNameComplete] = useState(false);

  const fullName = 'Thirafi Thariq Al Idris';
  const roles = ['Web Developer', 'Web Designer', 'Bot Developer', 'VPN Provider'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect for name
  useEffect(() => {
    if (displayedName.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(fullName.slice(0, displayedName.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setNameComplete(true);
    }
  }, [displayedName]);

  // Typing effect for roles
  useEffect(() => {
    if (!nameComplete) return;

    const currentRole = roles[currentRoleIndex];

    if (!isDeleting) {
      if (displayedRole.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsDeleting(true), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedRole.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedRole(displayedRole.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [displayedRole, nameComplete, isDeleting, currentRoleIndex]);

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)',
            animation: 'pulse-neon 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(168,85,247,0.1)',
            border: '1px solid rgba(168,85,247,0.2)'
          }}
        >
          <span className="w-2 h-2 rounded-full bg-neon-purple" style={{ animation: 'pulse-neon 2s ease-in-out infinite' }} />
          <span className="font-mono text-xs text-neon-purple/80">Available for hire</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-orbitron text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            {displayedName}
          </span>
          <span className={`text-neon-purple ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
            |
          </span>
        </motion.h1>

        {/* Role with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="h-10 md:h-12 mb-8"
        >
          <span className="font-inter text-lg md:text-2xl text-neon-cyan/80 font-light">
            {nameComplete && (
              <>
                <span className="text-white/30">I'm a </span>
                <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent font-medium">
                  {displayedRole}
                </span>
                <span className={`text-neon-cyan ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                  |
                </span>
              </>
            )}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="font-inter text-white/40 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Crafting digital experiences with clean code and creative design.
          Specializing in web development, bot creation, and premium VPN services.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('services')}
            className="px-8 py-3.5 rounded-xl font-inter text-sm font-semibold text-white relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
              boxShadow: '0 0 20px rgba(168,85,247,0.3)'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('contact')}
            className="px-8 py-3.5 rounded-xl font-inter text-sm font-medium text-white/80"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 rounded-full bg-neon-purple"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
