import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#080B12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7FB] mb-4">
            Education & Achievements
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#F4F7FB] mb-4">Education</h3>
              
              <div className="bg-[#121827] border border-[#1E293B] rounded-xl p-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-[#F4F7FB]">{profile.education.btech.degree}</p>
                    <p className="text-[#A2AEC0]">{profile.education.btech.institution}</p>
                    <p className="text-sm text-[#5EE7F5] mt-1">{profile.education.btech.cgpa} • {profile.education.btech.graduation}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#1E293B]">
                    <p className="font-medium text-[#F4F7FB]">Pre-University Course</p>
                    <p className="text-[#A2AEC0]">{profile.education.preUniversity.course} • {profile.education.preUniversity.institution}</p>
                    <p className="text-sm text-[#5EE7F5] mt-1">{profile.education.preUniversity.cgpa} • {profile.education.preUniversity.completion}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#1E293B]">
                    <p className="font-medium text-[#F4F7FB]">Secondary School Certificate</p>
                    <p className="text-sm text-[#5EE7F5] mt-1">{profile.education.secondary.cgpa} • {profile.education.secondary.completion}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#F4F7FB] mb-4">Achievements</h3>
              
              <div className="space-y-4">
                {profile.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-[#121827] border border-[#1E293B] rounded-xl p-6 hover:border-[#9B8CFF]/30 transition-colors"
                  >
                    <h4 className="font-medium text-[#F4F7FB] mb-2">{achievement.title}</h4>
                    {achievement.details && (
                      <p className="text-[#A2AEC0] text-sm">{achievement.details}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
