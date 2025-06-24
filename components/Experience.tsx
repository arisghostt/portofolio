'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Web Developper',
    company: 'Plateforme de Diagnostic Medicale de Douala(PDMD)',
    location: 'Permenant',
    period: '2023 - Present',
    description: [
      'Developed responsive web applications using WordPress and Odoo',
      'Built RESTful APIs and integrated third-party services',
      'Collaborated with clients to deliver custom solutions',
      'Implemented modern development practices and testing',
    ],
  },
  {
    title: 'Software Developper',
    company: 'Ets NDE',
    location: 'Remote',
    period: '2022 - 2023',
    description: [
      'Created dynamic websites using modern JavaScript frameworks',
      'Worked with databases including MongoDB and PostgreSQL',
      'Optimized applications for performance and SEO',
      'Participated in code reviews and agile development processes',
    ],
  },
  {
    title: 'Mobile & Web Developper ',
    company: 'OVERBRAND',
    location: 'Remote',
    period: '2021 - 2022',
    description: [
      'Mastered fundamental programming concepts and web technologies',
      'Built personal projects to demonstrate skills and knowledge',
      'Contributed to open-source projects and community initiatives',
      'Continuously learned new technologies and best practices',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-400/30 hidden md:block"></div>
            
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900 hidden md:block"></div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-purple-300 font-semibold">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <Calendar size={14} className="mr-1" />
                        {experience.period}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.2 + itemIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                        className="text-gray-300 flex items-start"
                      >
                        <span className="text-purple-400 mr-2 mt-1.5 text-xs">▶</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}