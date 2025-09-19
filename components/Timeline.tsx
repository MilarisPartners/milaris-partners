"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface TimelineStep {
  title: string;
  description: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface TimelineProps {
  steps: TimelineStep[];
  title: string;
  subtitle: string;
  legend: {
    steps: string;
    duration: string;
  };
}

export default function Timeline({ steps, title, subtitle, legend }: TimelineProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 font-bold text-[#0b062b] mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {subtitle}
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-full"></div>
              <span className="text-gray-600">{legend.steps}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0001ff]" />
              <span className="text-gray-600">{legend.duration}</span>
            </div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Version Desktop (hidden on mobile) */}
          <div className="hidden lg:block relative">
            {/* Trait vertical continu avec gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-[calc(100%-4.5rem)] bg-gradient-to-b from-[#0001ff]/20 via-[#3E8BFF]/30 to-[#0001ff]/20"></div>
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-12 mb-16 relative ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <motion.div 
                      className={`p-8 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-2xl font-bold text-[#0b062b] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[#0001ff]/10 rounded-full ${
                        index % 2 === 0 ? "float-right" : ""
                      }`}>
                        <Clock className="w-4 h-4 text-[#0001ff]" />
                        <span className="text-[#0001ff] font-semibold text-sm">{step.duration}</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Numéro d'étape */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-[#0001ff] font-bold text-sm">{index + 1}</span>
                    </div>
                  </motion.div>
                  
                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>

          {/* Version Mobile (visible on mobile only) */}
          <div className="lg:hidden">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Trait vertical pour mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-[calc(100%+1rem)] bg-gradient-to-b from-[#0001ff]/30 to-[#3E8BFF]/30"></div>
                  )}
                  
                  <div className="flex items-start gap-4">
                    {/* Icône avec numéro */}
                    <motion.div 
                      className="relative z-10 flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0001ff] to-[#3E8BFF] rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {/* Numéro d'étape */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                        <span className="text-[#0001ff] font-bold text-xs">{index + 1}</span>
                      </div>
                    </motion.div>
                    
                    {/* Contenu */}
                    <div className="flex-1 pb-6">
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                      >
                        <h3 className="text-lg font-bold text-[#0b062b] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                          {step.description}
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0001ff]/10 rounded-full">
                          <Clock className="w-3.5 h-3.5 text-[#0001ff]" />
                          <span className="text-[#0001ff] font-semibold text-xs">{step.duration}</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 