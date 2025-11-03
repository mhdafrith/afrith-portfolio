import React from "react";
import { motion } from "framer-motion";

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      role: "Junior AI Engineer",
      company: "Recykal",
      duration: "01/03/2025 – 30/09/2025 | Hyderabad",
      details: [
        "Trained Donut (Vision Transformer) with 1,00,000+ documents for both classification and structured key-value extraction, improving accuracy and robustness across diverse document types.",
        "Built and curated ground truth datasets for 10+ document categories, enabling supervised fine-tuning and evaluation of custom models.",
        "Conducted model testing and benchmarking against existing production models, including beta-testing new Llama-based extractor and classifier agents for improved semantic understanding.",
        "Developed a multi-layer extraction pipeline integrating Donut (vision-language), LlamaParse + LLM (semantic parsing), OCR + LLM fallback for low-quality scans, and a validation layer to enforce compliance-ready accuracy.",
        "Optimized workflows to scale document processing to 60K+ files/month with 92% accuracy, achieving a 7x productivity boost while reducing manual errors and turnaround time.",
        "Engineered Python scripts to automatically fetch raw log files from AWS S3, parse metrics (classification latency, extraction time, OCR duration, validation errors, SQL upload status, and file counts), and store insights in structured Pandas DataFrames.",
        "Built dashboards in Looker Studio by connecting Google Sheets (via service account integration) with the processed DataFrames, visualizing real-time error trends, latency distributions, and upload statuses for stakeholder visibility.",
        "Automated daily ingestion pipelines with n8n to fetch logs, transform them, and update dashboards without manual intervention, ensuring continuous monitoring and faster decision-making.",
        "Collaborated with ML and backend teams to integrate the automation system with enterprise workflows, ensuring smooth adoption and scalability of AI-powered document intelligence solutions.",
      ],
      skills: [
        "Donut (Vision Transformer)",
        "LlamaParse",
        "Llama-based Classifier",
        "OCR + LLM",
        "AWS S3",
        "Pandas",
        "n8n Automation",
        "Looker Studio",
        "Data Pipelines",
        "Model Evaluation",
      ],
    },
    {
      role: "Data Scientist Trainee",
      company: "Guvi IITM Pravartak",
      duration: "09/2024 – 02/2025",
      details: [
        "Completed 10+ internal projects in ML, DL, and NLP using Scikit-learn, TensorFlow, and PyTorch under IITM mentorship.",
        "Built Streamlit-based ML apps like term deposit prediction, depression detection, and business insights dashboards.",
        "Integrated MLflow, AWS, and RAG pipelines for model tracking, deployment, and data-driven decision-making.",
      ],
      skills: [
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Streamlit",
        "MLflow",
        "AWS",
        "RAG Pipelines",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 text-center"
      >
        💼 Work Experience
      </motion.h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-white/70">{exp.company} | {exp.duration}</p>

            <ul className="list-disc list-inside mt-4 space-y-2 text-white/80 leading-relaxed">
              {exp.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
