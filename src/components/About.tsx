import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0E1320]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7FB] mb-4">
            Engineering with curiosity. Building with purpose.
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            <div className="space-y-4">
              <p className="text-[#A2AEC0] leading-relaxed">
                I'm a Computer Science and Engineering graduate interested in combining software engineering, language models, AI agents, and cybersecurity to build intelligent systems.
              </p>
              
              <p className="text-[#A2AEC0] leading-relaxed">
                My focus areas include AI application development, multi-agent workflow design, context-aware LLM applications, backend APIs, full-stack development, and security-focused information systems.
              </p>
              
              <ul className="space-y-2 mt-6">
                {[
                  'AI application development',
                  'Multi-agent workflow design',
                  'Context-aware LLM applications',
                  'Backend APIs and full-stack development',
                  'Security-focused information systems',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#A2AEC0]">
                    <span className="text-[#5EE7F5] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#121827] border border-[#1E293B] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#F4F7FB] mb-4">Education</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-[#F4F7FB]">{profile.education.btech.degree}</p>
                  <p className="text-[#A2AEC0]">{profile.education.btech.institution}</p>
                  <p className="text-sm text-[#5EE7F5]">{profile.education.btech.cgpa} • {profile.education.btech.graduation}</p>
                </div>
                
                <div className="pt-4 border-t border-[#1E293B]">
                  <h4 className="text-sm font-medium text-[#F4F7FB] mb-2">Achievements</h4>
                  <ul className="space-y-2">
                    {profile.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm text-[#A2AEC0]">
                        <span className="text-[#9B8CFF]">{achievement.title}</span>
                        {achievement.details && (
                          <span className="ml-2">— {achievement.details}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
