import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import siteConfig from "@/lib/siteConfig";

const HeroSection: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">
      {/* Premium corner light effects */}
      <div className="corner-light-premium"></div>
      <div className="corner-light-premium" style={{ right: 0, left: 'auto', transform: 'rotate(90deg)' }}></div>

      {/* Light rays */}
      <div className="light-ray-premium opacity-30" style={{ top: '10%', left: '-10%', width: '80%', transform: 'rotate(25deg)' }}></div>
      <div className="light-ray-premium opacity-20" style={{ top: '30%', left: '-5%', width: '60%', transform: 'rotate(15deg)' }}></div>
      <div className="light-ray-premium opacity-10" style={{ top: '60%', left: '-15%', width: '70%', transform: 'rotate(-10deg)' }}></div>

      {/* Central premium glow effect */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-radial-glow-premium opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-glow-pulse"></div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center space-y-6">
        {/* 👤 Profile Picture */}
        <motion.img
          src="/avatar.jpg"
          alt={siteConfig.name}
          className="w-36 h-36 rounded-full border-4 border-white/10 shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Hero Heading */}
        <motion.h1 
          className="text-5xl md:text-6xl font-bold italic text-white text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm {siteConfig.name}
        </motion.h1>

        {/* Emoji Line */}
        <motion.p 
          className="text-3xl text-white/80 text-center mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          💻 🎸 ☕️ 🧠 ❤️
        </motion.p>

        {/* Tagline */}
        <motion.p 
          className="text-lg text-white/60 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          25 | Data Science | Artificial Intelligence | Data Analyst
        </motion.p>

        {/* Contact */}
        <motion.p 
          className="text-xl md:text-2xl font-light italic text-white/80 mt-4 leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Let’s connect:{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline text-blue-400 hover:text-blue-600">
            {siteConfig.email}
          </a>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a 
            href="#projects" 
            className="cta-button-premium group inline-flex items-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
