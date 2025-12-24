import React, { useState, useMemo } from 'react';
import { Users, Tent, Building2, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { StakeholderContent } from '../types';
import SectionTitle from './SectionTitle';
import { useLanguage } from '../LanguageContext';

const StakeholderTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'clubs' | 'university' | 'companies'>('students');
  const { t, language } = useLanguage();

  const getImagePath = (stakeholderId: string): string => {
    if (stakeholderId === 'students') {
      return '/images/for_students.png';
    }
    const langPrefix = language === 'tr' ? 'tr' : 'en';
    const imageMap: Record<string, string> = {
      'clubs': `${langPrefix}_club_management.png`,
      'university': `${langPrefix}_university_management.png`,
      'companies': `${langPrefix}_companies_management.png`
    };
    return `/images/${imageMap[stakeholderId]}`;
  };

  const stakeholders: StakeholderContent[] = useMemo(() => [
    {
      id: 'students',
      title: t('tabs.items.students.title'),
      icon: Users,
      benefit: t('tabs.items.students.benefit'),
      description: t('tabs.items.students.desc'),
      features: t('tabs.items.students.features'),
      image: getImagePath('students')
    },
    {
      id: 'clubs',
      title: t('tabs.items.clubs.title'),
      icon: Tent,
      benefit: t('tabs.items.clubs.benefit'),
      description: t('tabs.items.clubs.desc'),
      features: t('tabs.items.clubs.features'),
      image: getImagePath('clubs')
    },
    {
      id: 'university',
      title: t('tabs.items.university.title'),
      icon: Building2,
      benefit: t('tabs.items.university.benefit'),
      description: t('tabs.items.university.desc'),
      features: t('tabs.items.university.features'),
      image: getImagePath('university')
    },
    {
      id: 'companies',
      title: t('tabs.items.companies.title'),
      icon: Briefcase,
      benefit: t('tabs.items.companies.benefit'),
      description: t('tabs.items.companies.desc'),
      features: t('tabs.items.companies.features'),
      image: getImagePath('companies')
    }
  ], [t, language]);

  const activeContent = stakeholders.find(s => s.id === activeTab) || stakeholders[0];

  return (
    <section id="stakeholders" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={t('tabs.heading')}
          subtitle={t('tabs.subheading')}
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {stakeholders.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center px-6 py-4 rounded-xl transition-all duration-300 border ${
                  isActive
                    ? 'bg-primary-600 text-white border-primary-600 shadow-lg scale-105'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-5 h-5 mr-2 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span className="font-semibold text-sm md:text-base">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-50 rounded-3xl p-6 md:p-12 border border-slate-200 shadow-sm transition-all duration-500 ease-in-out">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
                {activeContent.benefit}
              </div>
              <h3 className="text-3xl font-bold text-slate-900">{activeContent.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {activeContent.description}
              </p>
              
              <ul className="space-y-4 mt-6">
                {activeContent.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <a href="#contact" className="inline-flex items-center text-primary-600 font-bold hover:text-primary-800 transition-colors">
                  {t('tabs.learnMore')} <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={activeContent.image} 
                  alt={activeContent.title} 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-6 left-6 z-20 text-white max-w-xs">
                  <p className="text-sm font-medium opacity-90">The Uniflow</p>
                  <p className="text-xl font-bold">{activeContent.benefit}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholderTabs;