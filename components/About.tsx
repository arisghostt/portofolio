'use client';

import { motion } from 'framer-motion';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const stats = [
  { icon: Code, label: 'Projects Completed', value: '15' },
  { icon: Coffee, label: 'Cups of Coffee', value: '100+' },
  { icon: Lightbulb, label: 'Ideas Implemented', value: '10+' },
  { icon: Users, label: 'Happy Clients', value: '10+' },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full p-1">
                <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                  <img
                    src="C:/Users/infinity/OneDrive/Desktop/portfolio/public/images\perso.png"
                    alt="Aristide NKWEPO TEUMI"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Creative and results-driven Web Developer with 4 years of experience in 
              building dynamic websites and multimedia applications. Passionate about both the visual aesthetics and functional performance of web interfaces, I bring a deep enthusiasm for crafting user-centric 
              digital experiences that are both engaging and technically sound.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My expertise spans modern web technologies including React, Node.js, WordPress, Python, and diverse database systems. 
              I thrive in transforming ideas into scalable solutions, from initial concept through deployment, with a strong emphasis on clean, maintainable code and staying ahead of industry best practices. My work is driven by curiosity, a commitment to continuous learning, 
              and a keen eye for visual and interactive design.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-slate-700/50 rounded-lg backdrop-blur-sm"
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}