import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contacts = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      label: 'Website',
      value: 'pediaboy.biz.id',
      href: 'https://pediaboy.biz.id',
      color: '#a855f7'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      label: 'Email',
      value: 'thirafi@pediaboy.biz.id',
      href: 'mailto:thirafi@pediaboy.biz.id',
      color: '#06b6d4'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Instagram',
      value: '@elthoriqqqq_',
      href: 'https://instagram.com/elthoriqqqq_',
      color: '#ec4899'
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-neon-pink/60 tracking-widest uppercase">
            &lt;contact&gt;
          </span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full mt-4 mx-auto" />
          <p className="font-inter text-white/40 text-sm md:text-base mt-6 max-w-xl mx-auto">
            Tertarik dengan layanan saya? Jangan ragu untuk menghubungi!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact cards */}
          <div className="space-y-4">
            {contacts.map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: 8 }}
                className="flex items-center gap-5 p-5 rounded-xl group cursor-pointer"
                style={{
                  background: 'rgba(10,10,31,0.4)',
                  border: `1px solid ${contact.color}15`
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    background: `${contact.color}10`,
                    border: `1px solid ${contact.color}20`,
                    color: contact.color
                  }}
                >
                  {contact.icon}
                </div>
                <div>
                  <div className="font-inter text-xs text-white/30 mb-1">{contact.label}</div>
                  <div className="font-inter text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                    {contact.value}
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="ml-auto text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-300"
                >
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </div>

          {/* CTA / Message area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.05), rgba(236,72,153,0.03))',
              border: '1px solid rgba(168,85,247,0.1)'
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)'
              }}
            />

            <h3 className="font-orbitron text-xl font-bold text-white/90 mb-4">
              Let's Work Together
            </h3>
            <p className="font-inter text-sm text-white/40 leading-relaxed mb-8">
              Punya proyek yang ingin diwujudkan? Saya siap membantu Anda dengan solusi digital terbaik. Hubungi saya dan mari diskusikan kebutuhan Anda!
            </p>

            <div className="space-y-3 mb-8">
              {['Fast Response', 'Best Quality', 'Affordable Price'].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(34,197,94,0.1)',
                      border: '1px solid rgba(34,197,94,0.2)'
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="font-inter text-sm text-white/50">{item}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="https://instagram.com/elthoriqqqq_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(168,85,247,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-inter text-sm font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                boxShadow: '0 0 20px rgba(168,85,247,0.3)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Chat via Instagram
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
