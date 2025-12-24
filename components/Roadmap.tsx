import React from 'react';
import SectionTitle from './SectionTitle';
import { RoadmapItem } from '../types';
import { useLanguage } from '../LanguageContext';

const Roadmap: React.FC = () => {
  const { t } = useLanguage();
  
  const roadmapData: RoadmapItem[] = t('roadmap.phases');

  return (
    <section id="roadmap" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={t('roadmap.heading')}
          subtitle={t('roadmap.subheading')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary-50 rounded-full blur-2xl"></div>
              
              <div className="text-sm font-bold text-primary-600 mb-2 uppercase tracking-wide">{item.phase}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-slate-500 text-sm mb-6 italic">{item.timeline}</p>
              
              <ul className="space-y-3">
                {item.items.map((subItem, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;