// import React from "react";

// const ProjectDemos: React.FC = () => {
//   return (
//     <section
//       id="project-demos"
//       className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-16"
//     >
//       <h2 className="text-4xl font-bold mb-10 text-center">
//         🎥 Project Demo Videos
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
//         {/* ✅ Loom Video 1 */}
//         <div className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
//           <iframe
//             src="https://www.loom.com/embed/67edd2870660465895dce4fde7726eb3"
//             frameBorder="0"
//             allowFullScreen
//             className="rounded-xl w-full aspect-video"
//           ></iframe>
//           <h3 className="mt-3 text-lg font-semibold text-center">
//             Universal Document Classifier & Extractor
//           </h3>
//         </div>

//         {/* ✅ Loom Video 2 */}
//         <div className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
//           <iframe
//             src="https://www.loom.com/embed/5e8a541d0954405f9589c2ae2aedfb3b"
//             frameBorder="0"
//             allowFullScreen
//             className="rounded-xl w-full aspect-video"
//           ></iframe>
//           <h3 className="mt-3 text-lg font-semibold text-center">
//             Document Parsing Automation Workflow
//           </h3>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectDemos;
import React from "react";

interface ProjectDemo {
  title: string;
  videoUrl: string;
}

const projectDemos: ProjectDemo[] = [
  {
    title: "Universal Document Classifier & Extractor SOP",
    videoUrl: "https://www.loom.com/embed/67edd2870660465895dce4fde7726eb3", // Replace with your Loom embed URL
  },
  {
    title: "Universal Document Classifier & Extractor SOP Part-2",
    videoUrl: "https://www.loom.com/embed/5e8a541d0954405f9589c2ae2aedfb3b", // Replace with your Loom embed URL
  },
];

const ProjectDemoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          🎥 Project Demo Videos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
          {projectDemos.map((demo, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg overflow-hidden bg-gray-800 hover:scale-105 transform transition-all duration-300"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={demo.videoUrl}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-5 text-center bg-gray-900">
                <h3 className="text-xl font-semibold">{demo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDemoSection;
