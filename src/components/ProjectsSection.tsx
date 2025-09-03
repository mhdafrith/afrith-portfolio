import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Predicting Depression with Deep Learning",
      description: "Binary classification model with 91% accuracy, deployed via Streamlit.",
      techStack: ["TensorFlow", "Streamlit", "Keras"],
      url: "https://drpvau5tc5o6dhruzza62m.streamlit.app/"
    },
    {
      id: 2,
      title: "Redbus Scraping + Streamlit Filtering",
      description: "Scraped 5,000+ listings using Selenium. Built interactive Streamlit dashboard.",
      techStack: ["Selenium", "Web Scraping", "Streamlit"],
      url: "https://github.com/mhdafrith/Redbus-Data-Scraping-with-Selenium-Dynamic-Filtering-using-Streamlit"
    },
    {
      id: 3,
      title: "FAANG Stock Price Predictor",
      description: "Built ML pipeline using regression + MLflow for tracking performance.",
      techStack: ["Python", "MLflow", "Scikit-learn"],
      url: "https://github.com/mhdafrith/FAANG-tastic-Insights-Predict-Stock-Prices-with-Regression-and-MLflow"
    },
    {
      id: 4,
      title: "My Zoom – BERT Feedback Validator",
      description: "BERT-based NLP pipeline for validating contextual feedback with 91.2% accuracy.",
      techStack: ["Hugging Face", "Transformers", "PyTorch"],
      url: "hhttps://github.com/mhdafrith/My-Zoom-A-Transformer-Based-Model-for-Contextual-Feedback-Validation"
    },
    {
      id: 5,
      title: "Customer Conversion Analysis",
      description: "Clickstream analysis to understand online shopping behavior.",
      techStack: ["EDA", "Pandas", "Matplotlib"],
      url: "https://github.com/mhdafrith/Customer-Conversion-Analysis-for-Online-Shopping-Using-Clickstream-Data"
    },
    {
      id: 6,
      title: "Interactive Dashboard – Elbrit Pharma",
      description: "Business insights dashboard for decision-making using sales data.",
      techStack: ["Power BI", "Data Analysis", "Dashboarding"],
      url: "https://github.com/mhdafrith/-Interactive-Business-Insights-Dashboard-for-Data-Driven-Decision-Making-"
    },
    {
      id: 7,
      title: "Intelligent Document Automation System",
      description: "End-to-end document automation with Donut (Vision Transformer), LlamaParse, OCR+LLM fallback, and validation layers. Trained Donut on 100K docs, built ground truth for 10+ doc types, tested beta LLaMA extractor agents. Scaled to 60K+ docs/month with 92% accuracy, reducing errors and enabling compliance-ready insights.",
      techStack: ["Donut", "Vision Transformer", "LlamaParse", "OCR", "LLM", "GenAI Pipelines"],
      url: "https://github.com/mhdafrith"
    },
    {
      id: 8,
      title: "Log Analytics Data Pipeline & Dashboard",
      description: "Built a Python + Pandas pipeline to extract insights from S3 log files (classification latency, validation errors, SQL upload status). Automated ingestion with n8n, stored insights in Google Sheets, and built Looker Studio dashboards for monitoring 60K+ docs/month in real time.",
      techStack: ["Python", "Pandas", "AWS S3", "n8n", "Google Sheets API", "Looker Studio"],
      url: "https://github.com/mhdafrith"
    },
    {
      id: 9,
      title: "Agentic RAG Chatbot – Research + Live News",
      description: "Developed RAG chatbot using Streamlit, FAISS vector DB, and HuggingFace embeddings. Integrated Groq LLaMA3-70B + CrewAI agents to combine semantic search over 100+ arXiv papers with real-time news responses, reducing query time by ~60% and boosting engagement by ~40%.",
      techStack: ["Python", "Streamlit", "LangChain", "FAISS", "Groq API", "CrewAI", "HuggingFace"],
      url: "https://github.com/mhdafrith/-Agentic-RAG-Chatbot-for-Research-Papers-Live-News"
    },
    {
      id: 10,
      title: "Chicago Crime Analyzer – Geospatial & Trend Insights",
      description: "Processed 2M+ crime records with Python + SQL for ETL, built Power BI dashboards with heatmaps, trends, and arrest analytics. Delivered policy insights for crime-prone zones, improving intervention planning by 20% in pilot testing.",
      techStack: ["Python", "SQL", "Power BI", "ETL", "Crime Analytics"],
      url: "https://github.com/mhdafrith/chicago_crime_analyser"
    },
    {
    id: 11,
    title: "DataSpark – Illuminating Insights for Global Electronics",
    description: "End-to-end data pipeline with Python + SQL for multi-source integration. Built Power BI dashboards on store performance, customer segmentation, and pricing strategies. Identified 15%+ growth opportunities through store-level targeting and product mix optimization.",
    techStack: ["SQL", "Python", "Power BI", "ETL", "Data Cleaning", "Retail Analytics"],
    url: "https://github.com/mhdafrith/DataSpark-Illuminating-Insights-for-Global-Electronics"
    },
    {
  id: 12,
  title: "Predicting Term Deposit Subscription: A Streamlit-based ML App",
  description: "Developed and deployed an ML app using Logistic Regression, Random Forest, and XGBoost on Portuguese bank marketing data (45K+ records). Achieved AUC score of 0.93, boosting targeted marketing efficiency by ~35%. Deployed via Streamlit on AWS EC2 for real-time client scoring.",
  techStack: ["Python", "EDA", "Feature Engineering", "Classification", "LogReg", "Random Forest", "XGBoost", "Streamlit", "AWS EC2", "Pandas"],
  url: "https://github.com/mhdafrith/Final_project"
}


  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="corner-light-premium top-0 right-0 opacity-50"></div>
      <div className="light-ray-premium opacity-20" style={{ top: '30%', right: '-20%', width: '70%', transform: 'rotate(165deg)' }}></div>
      <div className="light-ray-premium opacity-15" style={{ top: '60%', right: '-10%', width: '50%', transform: 'rotate(150deg)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading-premium relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlowCard 
                intensity={index % 3 === 0 ? 'high' : index % 2 === 0 ? 'medium' : 'low'}
                className="group h-full"
                hoverScale={1.03}
              >
                <div className="p-6 h-full flex flex-col relative z-10">
                  <div className="absolute -inset-x-4 -inset-y-4 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-2xl transition-opacity"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white via-white/20 to-transparent transition-all duration-500"></div>
                  
                  <h3 className="text-2xl font-bold italic mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-full text-white/60 group-hover:text-white/90 group-hover:border-white/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.url} 
                    className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white group-hover:text-white/90 transition-colors relative mt-auto"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
