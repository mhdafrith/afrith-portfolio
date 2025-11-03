import React from "react";
import {
  Terminal,
  Cpu,
  Cloud,
  ServerCrash,
  Paintbrush,
  Github,
  Layers,
  Database,
  Code2,
  Container,
} from "lucide-react";

const techStackRow1 = [
  { name: "Python", icon: <Terminal size={16} className="mr-2" /> },
  { name: "FastAPI", icon: <Database size={16} className="mr-2" /> },
  { name: "Generative AI", icon: <Database size={16} className="mr-2" /> },
  { name: "Agentic AI", icon: <Cpu size={16} className="mr-2" /> },
  { name: "Vision Language Model", icon: <Cpu size={16} className="mr-2" /> },
  { name: "Prompt Engineering", icon: <Cpu size={16} className="mr-2" /> },
  { name: "LangChain", icon: <Code2 size={16} className="mr-2" /> },
  { name: "Groq", icon: <Cloud size={16} className="mr-2" /> },
  { name: "Hugging Face", icon: <Github size={16} className="mr-2" /> },
  { name: "Selenium", icon: <ServerCrash size={16} className="mr-2" /> },
];

const techStackRow2 = [
  { name: "Streamlit", icon: <Layers size={16} className="mr-2" /> },
  { name: "MLflow", icon: <Cpu size={16} className="mr-2" /> },
  { name: "SQL", icon: <Database size={16} className="mr-2" /> },
  { name: "NLP", icon: <Paintbrush size={16} className="mr-2" /> },
  { name: "Looker Studio", icon: <Paintbrush size={16} className="mr-2" /> },
  { name: "AWS", icon: <Cloud size={16} className="mr-2" /> },
  { name: "Agentic RAG", icon: <Container size={16} className="mr-2" /> },
  { name: "LLMs", icon: <Code2 size={16} className="mr-2" /> },
  { name: "n8n Automation", icon: <Code2 size={16} className="mr-2" /> },
  { name: "OCR", icon: <Code2 size={16} className="mr-2" /> },
];

const TechMarquee: React.FC = () => {
  const renderMarqueeItems = (
    items: Array<{ name: string; icon: React.ReactNode }>
  ) => {
    return items.map((tech, index) => (
      <span
        key={index}
        className="tech-badge-premium mx-5 flex items-center text-white text-sm min-w-fit px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
      >
        {tech.icon}
        {tech.name}
      </span>
    ));
  };

  return (
    <section className="py-20 bg-dark-100/30 relative max-w-screen-xl mx-auto px-10 overflow-hidden">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-radial-glow-premium opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Top row - scrolling right */}
      <div className="relative overflow-hidden">
        <div className="animate-scroll-right flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow1)}
        </div>
      </div>

      {/* Bottom row - scrolling left */}
      <div className="relative overflow-hidden mt-10">
        <div className="animate-scroll-left flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
