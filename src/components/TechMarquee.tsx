import React from "react";

const techStackRow1 = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Generative AI", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Agentic AI", logo: "https://cdn.prod.website-files.com/636e9a9a8d334e3450b08cc9/6729351a084bd3a38cf6d8d2_Agentic%20vendors.webp" },
  { name: "Vision Language Model", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Prompt Engineering", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "LangChain", logo: "https://images.seeklogo.com/logo-png/61/1/langchain-icon-logo-png_seeklogo-611655.png" },
  { name: "Groq", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnze6t-thGVKlIKNKF9zeiTfaoxLdYdVzX0g&s" },
  { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
];

const techStackRow2 = [
  { name: "Streamlit", logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
  { name: "MLflow", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8SRrObIPS4q8a_QXyw7WfDDeOMJf0KGnyUg&s" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "NLP", logo: "https://static.thenounproject.com/png/nlp-icon-6950731-512.png" },
  { name: "Looker Studio", logo: "https://www.svgrepo.com/show/354012/looker-icon.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Agentic RAG", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "LLMs", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "n8n Automation", logo: "https://n8n.io/favicon-32x32.png" },
  { name: "OCR", logo: "https://www.shutterstock.com/image-vector/general-ocr-icon-optical-character-260nw-2662505669.jpg" },
];

const TechMarquee: React.FC = () => {
  const renderMarqueeItems = (items: Array<{ name: string; logo: string }>) =>
    items.map((tech, index) => (
      <span
        key={index}
        className="tech-badge-premium mx-5 flex items-center text-white text-sm min-w-fit animate-fadeInFloat"
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        <img
          src={tech.logo}
          alt={tech.name}
          className="w-6 h-6 mr-2 object-contain"
          onError={(e) => ((e.currentTarget.style.display = "none"))}
        />
        {tech.name}
      </span>
    ));

  return (
    <section className="py-20 bg-dark-100/30 relative max-w-screen-xl mx-auto px-10 overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-radial-glow-premium opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Row 1 - Scroll Right */}
      <div className="relative overflow-hidden">
        <div className="animate-scroll-right flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow1)}
          {renderMarqueeItems(techStackRow1)}
        </div>
      </div>

      {/* Row 2 - Scroll Left */}
      <div className="relative overflow-hidden mt-10">
        <div className="animate-scroll-left flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow2)}
          {renderMarqueeItems(techStackRow2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
