import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects, type Project } from '../data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-20 bg-[#0E1320]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7FB] mb-4">
              Selected Projects
            </h2>
            <p className="text-[#A2AEC0] mb-12 max-w-2xl">
              Practical explorations across AI engineering, software automation, and cybersecurity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#121827] border border-[#1E293B] rounded-xl p-6 hover:border-[#5EE7F5]/50 transition-all cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-medium text-[#5EE7F5] uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold text-[#F4F7FB] mt-2 group-hover:text-[#5EE7F5] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowRight className="text-[#A2AEC0] group-hover:text-[#5EE7F5] group-hover:translate-x-1 transition-all" size={20} />
                  </div>
                  
                  <p className="text-[#A2AEC0] text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologyStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-[#A2AEC0] bg-[#0E1320] border border-[#1E293B] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologyStack.length > 4 && (
                      <span className="px-2 py-1 text-xs text-[#A2AEC0]">
                        +{project.technologyStack.length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080B12]/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#121827] border border-[#1E293B] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-[#A2AEC0] hover:text-[#F4F7FB] hover:bg-[#0E1320] rounded-lg transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            <span className="text-sm font-medium text-[#5EE7F5] uppercase tracking-wider">
              {selectedProject.category}
            </span>
            <h2 className="text-3xl font-bold text-[#F4F7FB] mt-2 mb-4">
              {selectedProject.title}
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#F4F7FB] mb-2">Overview</h3>
                  <p className="text-[#A2AEC0]">{selectedProject.overview}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#F4F7FB] mb-2">Problem</h3>
                  <p className="text-[#A2AEC0]">{selectedProject.problem}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#F4F7FB] mb-2">Intended Users</h3>
                  <p className="text-[#A2AEC0]">{selectedProject.intendedUsers}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#F4F7FB] mb-2">Architecture</h3>
                  <p className="text-[#A2AEC0]">{selectedProject.architecture}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#F4F7FB] mb-2">Technology Decisions</h3>
                  <p className="text-[#A2AEC0]">{selectedProject.technologyDecisions}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#F4F7FB] mb-2">Implemented Features</h3>
                  <ul className="list-disc list-inside text-[#A2AEC0] space-y-1">
                    {selectedProject.implementedFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#F4F7FB] mb-2">Challenges</h3>
                  <p className="text-[#A2AEC0]">{selectedProject.challenges}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#F4F7FB] mb-2">Testing & Validation</h3>
                  <p className="text-[#A2AEC0]">{selectedProject.testing}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#F4F7FB] mb-2">Future Improvements</h3>
                  <ul className="list-disc list-inside text-[#A2AEC0] space-y-1">
                    {selectedProject.futureImprovements.map((improvement, index) => (
                      <li key={index}>{improvement}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#F4F7FB] mb-2">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologyStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm text-[#A2AEC0] bg-[#0E1320] border border-[#1E293B] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
