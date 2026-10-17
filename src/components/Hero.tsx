import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { profile } from '../data/profile';

const focusAreas = [
  'Agentic AI & LLM Applications',
  'Python & Full-Stack Engineering',
  'AI Security & Threat Intelligence',
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-[#080B12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F7FB] leading-tight mb-6">
              Building Intelligent Systems.
              <br />
              <span className="text-[#5EE7F5]">Engineering Practical AI.</span>
            </h1>
            
            <p className="text-lg text-[#A2AEC0] mb-8 max-w-xl">
              I'm {profile.name}, a Computer Science and Engineering graduate focused on Agentic AI, Generative AI, Python backend development, and full-stack applications. I enjoy turning complex technical ideas into structured, useful software experiences.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {focusAreas.map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#9B8CFF',
                    backgroundColor: 'rgba(155, 140, 255, 0.1)',
                    border: '1px solid rgba(94, 231, 245, 0.3)',
                    borderRadius: '9999px',
                  }}
                >
                  {area}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#F4F7FB',
                  backgroundColor: '#5EE7F5',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                }}
              >
                Explore My Projects
              </a>
              <button
                onClick={() => window.open(profile.resumePath, '_blank')}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#F4F7FB',
                  backgroundColor: '#121827',
                  border: '1px solid #1E293B',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                }}
              >
                View Resume
              </button>
            </div>

            <div className="flex gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#A2AEC0',
                  backgroundColor: '#121827',
                  border: '1px solid #1E293B',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                }}
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#A2AEC0',
                  backgroundColor: '#121827',
                  border: '1px solid #1E293B',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                }}
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#A2AEC0',
                  backgroundColor: '#121827',
                  border: '1px solid #1E293B',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                }}
                aria-label="Email"
              >
                Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div style={{
              backgroundColor: '#121827',
              border: '1px solid #1E293B',
              borderRadius: '1rem',
              padding: '2rem',
            }}>
              <h3 style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#A2AEC0',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>
                Agentic Workflow Concept
              </h3>
              <div className="space-y-4">
                {[
                  'USER REQUEST',
                  'AI AGENTS',
                  'TOOLS & CONTEXT',
                  'VALIDATION',
                  'STRUCTURED OUTPUT',
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <div style={{
                      width: '2rem',
                      height: '2rem',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: '#F4F7FB',
                      backgroundColor: '#5EE7F5',
                      borderRadius: '9999px',
                    }}>
                      {index + 1}
                    </div>
                    <div style={{
                      flex: 1,
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#F4F7FB',
                      backgroundColor: '#0E1320',
                      border: '1px solid #1E293B',
                      borderRadius: '0.5rem',
                    }}>
                      {step}
                    </div>
                    {index < 4 && (
                      <div style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#5EE7F5',
                      }}>
                        <ArrowDown size={16} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <a
            href="#about"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#A2AEC0',
              cursor: 'pointer',
            }}
          >
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '500',
            }}>
              Scroll to explore
            </span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
