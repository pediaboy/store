import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  borderColor: string;
  glowColor: string;
}

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Membangun website modern, responsif, dan berkinerja tinggi dengan teknologi terkini.',
      features: ['Landing Page', 'Web Application', 'E-Commerce', 'CMS Development'],
      gradient: 'from-purple-500 to-violet-600',
      borderColor: 'rgba(168,85,247,0.2)',
      glowColor: 'rgba(168,85,247,0.15)'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: 'Coding',
      description: 'Solusi pemrograman custom untuk kebutuhan spesifik bisnis Anda.',
      features: ['Custom Script', 'API Integration', 'Automation', 'Bug Fixing'],
      gradient: 'from-cyan-500 to-blue-600',
      borderColor: 'rgba(6,182,212,0.2)',
      glowColor: 'rgba(6,182,212,0.15)'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Web Design',
      description: 'Desain UI/UX yang menarik, modern, dan user-friendly untuk brand Anda.',
      features: ['UI/UX Design', 'Prototyping', 'Brand Identity', 'Responsive Design'],
      gradient: 'from-pink-500 to-rose-600',
      borderColor: 'rgba(236,72,153,0.2)',
      glowColor: 'rgba(236,72,153,0.15)'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: 'Bot WhatsApp',
      description: 'Bot WhatsApp otomatis untuk meningkatkan efisiensi komunikasi bisnis Anda.',
      features: ['Auto Reply', 'Broadcast System', 'Order Management', 'Customer Service Bot'],
      gradient: 'from-green-500 to-emerald-600',
      borderColor: 'rgba(34,197,94,0.2)',
      glowColor: 'rgba(34,197,94,0.15)'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'VPN Premium',
      description: 'Layanan VPN premium dengan kecepatan tinggi dan keamanan terjamin.',
      features: ['High Speed Server', 'Global Locations', 'No Log Policy', '24/7 Support'],
      gradient: 'from-amber-500 to-orange-600',
      borderColor: 'rgba(245,158,11,0.2)',
      glowColor: 'rgba(245,158,11,0.15)'
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)',
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
          <span className="font-mono text-xs text-neon-cyan/60 tracking-widest uppercase">
            &lt;services&gt;
          </span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mt-4 mx-auto" />
          <p className="font-inter text-white/40 text-sm md:text-base mt-6 max-w-xl mx-auto">
            Layanan profesional yang dirancang untuk membantu bisnis dan kebutuhan digital Anda
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="service-card group rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: 'rgba(10,10,31,0.6)',
                border: `1px solid ${service.borderColor}`,
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{
                boxShadow: `0 0 40px ${service.glowColor}, 0 20px 60px rgba(0,0,0,0.3)`
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${service.glowColor}, transparent 70%)`
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white bg-gradient-to-br ${service.gradient}`}
                  style={{
                    boxShadow: `0 0 20px ${service.glowColor}`
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-lg font-semibold text-white/90 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-sm text-white/40 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="font-inter text-xs text-white/50">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow link */}
                <div className="mt-6 flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors duration-300">
                  <span className="font-inter text-xs font-medium">Learn more</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
