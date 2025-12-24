import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { RoadmapItem } from '../types';
import { useLanguage } from '../LanguageContext';

const Roadmap: React.FC = React.memo(() => {
  const { t } = useLanguage();
  
  const roadmapData: RoadmapItem[] = t('roadmap.phases');

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="roadmap" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp}>
          <SectionTitle 
            title={t('roadmap.heading')}
            subtitle={t('roadmap.subheading')}
          />
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {roadmapData.map((roadmapItem, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary-50 rounded-full blur-2xl"></div>
              
              <div className="text-sm font-bold text-primary-600 mb-2 uppercase tracking-wide">{roadmapItem.phase}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{roadmapItem.title}</h3>
              <p className="text-slate-500 text-sm mb-6 italic">{roadmapItem.timeline}</p>
              
              <ul className="space-y-3">
                {roadmapItem.items.map((subItem, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    {subItem}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Roadmap.displayName = 'Roadmap';

export default Roadmap;