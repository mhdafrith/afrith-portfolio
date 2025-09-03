import React from 'react';
import { motion } from 'framer-motion';

interface Education {
  id: number;
  years: string;
  degree: string;
  institution: string;
  grade: string;
}

const EducationTimeline: React.FC = () => {
  const educationData: Education[] = [
    {
      id: 1,
      years: "Jul 2024 – Mar 2025",
      degree: "Advanced Programming & Master Data Science",
      institution: "IIT-M GUVI, Chennai",
      grade: ""
    },
    {
      id: 2,
      years: "2023 – 2025",
      degree: "MBA in Healthcare & Hospital Management",
      institution: "SRM Institute of Science and Technology, Chennai",
      grade: ""
    },
    {
      id: 3,
      years: "2017 – 2023",
      degree: "Bachelor of Optometry",
      institution: "Vasan Institute of Ophthalmology and Research, Chennai",
      grade: ""
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-heading text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          🎓 Education
        </motion.h2>
        
        <div className="relative pl-10">
          {/* Timeline line */}
          <div className="timeline-line absolute left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-purple-600 opacity-30 rounded"></div>
          
          {/* Timeline items */}
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-5 w-4 h-4 rounded-full bg-white border border-white/40" style={{
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)'
              }}></div>
              
              <div className="glow-card p-6 border border-white/10 bg-white/5 rounded-xl shadow-lg">
                <span className="text-indigo-300 block text-sm mb-1">{item.years}</span>
                <h3 className="text-xl font-semibold text-white mb-1">{item.degree}</h3>
                <p className="text-white/80 text-sm mb-1">{item.institution}</p>
                <p className="text-white/50 text-sm">{item.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
