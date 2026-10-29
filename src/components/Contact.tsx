import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0E1320]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7FB] mb-4">
            Let's build something meaningful.
          </h2>
          <p className="text-[#A2AEC0] mb-12 max-w-2xl">
            I'm interested in opportunities where I can contribute to AI-powered applications, intelligent automation, backend engineering, and security-focused software.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-[#121827] border border-[#1E293B] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#F4F7FB] mb-4">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#A2AEC0] mb-1">Email</p>
                    <div className="flex items-center gap-2">
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-[#F4F7FB] hover:text-[#5EE7F5] transition-colors"
                      >
                        {profile.email}
                      </a>
                      <button
                        onClick={copyEmail}
                        className="p-1.5 text-[#A2AEC0] hover:text-[#F4F7FB] hover:bg-[#0E1320] rounded transition-colors"
                        aria-label="Copy email"
                      >
                        {emailCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-[#A2AEC0] mb-1">Location</p>
                    <p className="text-[#F4F7FB]">{profile.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex-1 px-6 py-3 text-sm font-medium text-[#F4F7FB] bg-[#5EE7F5] rounded-lg hover:bg-[#5EE7F5]/90 transition-colors text-center"
                >
                  Email Me
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 text-sm font-medium text-[#F4F7FB] bg-[#121827] border border-[#1E293B] rounded-lg hover:border-[#5EE7F5]/50 transition-colors text-center"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 text-sm font-medium text-[#F4F7FB] bg-[#121827] border border-[#1E293B] rounded-lg hover:border-[#5EE7F5]/50 transition-colors text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="bg-[#121827] border border-[#1E293B] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F4F7FB] mb-4">Areas of Interest</h3>
              <ul className="space-y-3">
                {[
                  'Agentic AI Engineering',
                  'Generative AI Engineering',
                  'LLM Application Development',
                  'RAG Engineering',
                  'Python Backend Development',
                  'Full-Stack Development',
                  'AI Automation',
                  'AI Security Engineering',
                  'SOC Analysis and Cybersecurity',
                ].map((interest, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#A2AEC0]">
                    <span className="text-[#9B8CFF] mt-1">•</span>
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
