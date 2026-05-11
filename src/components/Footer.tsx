import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-neon-purple/30 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(6,182,212,0.1))'
              }}
            >
              <span className="font-orbitron text-sm font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                T
              </span>
            </div>
            <span className="font-inter text-sm text-white/30">
              © {new Date().getFullYear()} Thirafi Thariq Al Idris
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://pediaboy.biz.id"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white/30 hover:text-neon-purple transition-colors duration-300"
              style={{
                background: 'rgba(168,85,247,0.05)',
                border: '1px solid rgba(168,85,247,0.1)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://instagram.com/elthoriqqqq_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white/30 hover:text-neon-pink transition-colors duration-300"
              style={{
                background: 'rgba(236,72,153,0.05)',
                border: '1px solid rgba(236,72,153,0.1)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </motion.a>
          </div>

          {/* Made with */}
          <div className="font-mono text-xs text-white/15">
            Made with <span className="text-neon-purple">♥</span> & code
          </div>
        </div>
      </div>
    </footer>
  );
}
