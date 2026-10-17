import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#080B12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7FB] mb-4">
            Technical Skills
          </h2>
          <p className="text-[#A2AEC0] mb-12 max-w-2xl">
            Technologies and concepts I've worked with through projects, coursework, and self-directed learning.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="bg-[#121827] border border-[#1E293B] rounded-xl p-6 hover:border-[#5EE7F5]/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#F4F7FB] mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm text-[#A2AEC0] bg-[#0E1320] border border-[#1E293B] rounded-md hover:border-[#9B8CFF]/50 hover:text-[#9B8CFF] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
