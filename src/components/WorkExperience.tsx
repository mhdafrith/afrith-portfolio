// import { Card, CardContent } from "@/components/ui/card";
// import { Briefcase } from "lucide-react";

// const experiences = [
//   {
//     role: "Data Analyst Intern",
//     company: "Recykal",
//     duration: "17/03/2025 – Present",
//     description: [
//       "Trained Donut (Vision Transformer) with 1,00,000+ documents for both classification and structured key-value extraction, improving accuracy and robustness across diverse document types.",
//       "Built and curated ground truth datasets for 10+ document categories, enabling supervised fine-tuning and evaluation of custom models.",
//       "Conducted model testing and benchmarking against existing production models, including beta-testing new Llama-based extractor and classifier agents for improved semantic understanding.",
//       "Developed a multi-layer extraction pipeline integrating Donut (vision-language), LlamaParse + LLM (semantic parsing), OCR + LLM fallback for low-quality scans, and a validation layer to enforce compliance-ready accuracy.",
//       "Optimized workflows to scale document processing to 60K+ files/month with 92% accuracy, achieving a 7x productivity boost while reducing manual errors and turnaround time.",
//       "Engineered Python scripts to automatically fetch raw log files from AWS S3, parse metrics (classification latency, extraction time, OCR duration, validation errors, SQL upload status, and file counts), and store insights in structured Pandas DataFrames.",
//       "Built dashboards in Looker Studio by connecting Google Sheets (via service account integration) with the processed DataFrames, visualizing real-time error trends, latency distributions, and upload statuses for stakeholder visibility.",
//       "Automated daily ingestion pipelines with n8n to fetch logs, transform them, and update dashboards without manual intervention, ensuring continuous monitoring and faster decision-making.",
//       "Collaborated with ML and backend teams to integrate the automation system with enterprise workflows, ensuring smooth adoption and scalability of AI-powered document intelligence solutions.",
//     ],
//   },
//   // other experiences can go here
// ];


// export default function WorkExperience() {
//   return (
//     <section className="py-16 px-6 md:px-12 lg:px-24">
//       <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
//         <Briefcase className="w-8 h-8 text-primary" />
//         Work Experience
//       </h2>
//       <div className="grid gap-6">
//         {experiences.map((exp, i) => (
//           <Card key={i} className="shadow-lg rounded-2xl border border-gray-200">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-semibold">{exp.role}</h3>
//               <p className="text-gray-600">{exp.company} | {exp.duration}</p>
//               <ul className="list-disc ml-5 mt-3 space-y-1 text-gray-700">
//                 {exp.description.map((point, j) => (
//                   <li key={j}>{point}</li>
//                 ))}
//               </ul>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

const WorkExperience: React.FC = () => {
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition"
      >
        <h3 className="text-xl font-semibold">Data Analyst Intern</h3>
        <p className="text-white/70">Recykal | 17/03/2025 – Present</p>

        <ul className="list-disc list-inside mt-4 space-y-2 text-white/80 leading-relaxed">
          <li>
            Trained <strong>Donut (Vision Transformer)</strong> on 100k+
            documents for classification & key-value extraction.
          </li>
          <li>
            Built ground truth datasets for 10+ document categories and
            fine-tuned custom models.
          </li>
          <li>
            Beta-tested new <strong>Llama-based extractor & classifier
            agents</strong>, benchmarking against production models.
          </li>
          <li>
            Scaled pipelines to process <strong>60k+ docs/month with 92%
            accuracy</strong>, reducing errors and boosting productivity 7x.
          </li>
          <li>
            Automated log ingestion from AWS S3 → Pandas → Google Sheets →
            Looker Studio dashboards with <strong>n8n</strong>.
          </li>
        </ul>

        {/* Skills badges */}
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            "Donut (Vision Transformer)",
            "LlamaParse",
            "OCR + LLM",
            "n8n Automation",
            "Looker Studio",
            "AWS S3",
            "Pandas",
            "GenAI Pipelines"
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
