import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  const stats = [
    { value: '50+', label: 'Projects Done' },
    { value: '30+', label: 'Happy Clients' },
    { value: '2+', label: 'Years Experience' },
    { value: '99%', label: 'Satisfaction' },
  ];

  const skills = [
    { name: 'HTML / CSS', level: 95 },
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'React / Next.js', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Bot Development', level: 92 },
    { name: 'UI/UX Design', level: 87 },
    { name: 'VPN & Networking', level: 90 },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-neon-purple/60 tracking-widest uppercase">
            &lt;about&gt;
          </span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(168,85,247,0.05), rgba(6,182,212,0.03))',
                border: '1px solid rgba(168,85,247,0.1)',
                boxShadow: '0 0 40px rgba(168,85,247,0.05)'
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-neon-purple/20 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-neon-cyan/20 rounded-br-2xl" />

              <p className="font-inter text-white/60 leading-relaxed text-sm md:text-base mb-6">
                Hi! Saya <span className="text-neon-purple font-semibold">Thirafi Thariq Al Idris</span>, seorang developer dan desainer yang passionate dalam menciptakan solusi digital yang inovatif dan fungsional.
              </p>
              <p className="font-inter text-white/60 leading-relaxed text-sm md:text-base mb-6">
                Dengan pengalaman dalam pengembangan web, bot WhatsApp, dan layanan VPN premium, saya berkomitmen untuk memberikan hasil terbaik di setiap proyek. Saya percaya bahwa teknologi yang baik harus tidak hanya fungsional, tetapi juga memiliki desain yang menarik.
              </p>
              <p className="font-inter text-white/60 leading-relaxed text-sm md:text-base">
                Setiap baris kode yang saya tulis, setiap desain yang saya buat, dan setiap layanan yang saya sediakan adalah refleksi dari dedikasi saya terhadap kualitas dan kepuasan klien.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 rounded-xl"
                  style={{
                    background: 'rgba(168,85,247,0.03)',
                    border: '1px solid rgba(168,85,247,0.08)'
                  }}
                >
                  <div className="font-orbitron text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="font-inter text-xs text-white/30 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-orbitron text-lg font-semibold text-white/80 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: 'rgba(168,85,247,0.1)',
                  border: '1px solid rgba(168,85,247,0.2)'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
              </span>
              Tech Stack & Skills
            </h3>

            <div className="space-y-5">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-inter text-sm text-white/60">{skill.name}</span>
                    <span className="font-mono text-xs text-neon-purple">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.8 + i * 0.08, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, #a855f7, ${skill.level > 90 ? '#06b6d4' : '#7c3aed'})`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
