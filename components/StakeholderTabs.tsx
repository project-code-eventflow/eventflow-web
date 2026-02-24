import React, { useState, useMemo, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Users, Tent, Building2, Briefcase, CheckCircle2, ArrowRight, BarChart3, Zap, Globe, Target, Shield, TrendingUp, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { useLanguage } from '../LanguageContext';

export type TabType = 'students' | 'clubs' | 'university' | 'companies';

export interface StakeholderTabsRef {
  switchTab: (tab: TabType) => void;
}

interface VisualHighlight {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

interface MockRow {
  label: string;
  meta: string;
  color: string;
}

interface StakeholderVisual {
  gradient: string;
  highlights: VisualHighlight[];
  mockRows: MockRow[];
}

const visuals: Record<TabType, StakeholderVisual> = {
  students: {
    gradient: 'linear-gradient(135deg, #34D1BF 0%, #1a6663 100%)',
    highlights: [
      { icon: Zap,      value: '1 tık',  label: 'Kayıt ol' },
      { icon: Calendar, value: '50+',    label: 'Etkinlik / hafta' },
      { icon: Target,   value: 'Akıllı', label: 'Kişiselleştirilmiş' },
    ],
    mockRows: [
      { label: 'IEEE Hackathon',  meta: 'Cum Mar 7  ·  142 kayıtlı', color: '#34D1BF' },
      { label: 'Yapay Zeka Tech Talk', meta: 'Cmt Mar 8  ·  89 kayıtlı', color: '#818CF8' },
      { label: 'ACM Workshop',    meta: 'Paz Mar 9  ·  60 kayıtlı',  color: '#FB923C' },
    ],
  },
  clubs: {
    gradient: 'linear-gradient(135deg, #818CF8 0%, #2BAAA0 100%)',
    highlights: [
      { icon: Users,      value: '142',  label: 'Üye' },
      { icon: TrendingUp, value: '+%12', label: 'Aylık büyüme' },
      { icon: BarChart3,  value: '8',    label: 'Etkinlik / ay' },
    ],
    mockRows: [
      { label: 'Toplam Üye',         meta: '142 aktif  ·  ↑ %12 bu ay',          color: '#818CF8' },
      { label: 'Kayıt Oranı',        meta: 'Ort. %87  ·  Kampüsün en iyi 5 kulübü', color: '#34D1BF' },
      { label: 'Sponsorluk Teklifleri', meta: '3 aktif anlaşma  ·  2 beklemede',  color: '#FB923C' },
    ],
  },
  university: {
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #2BAAA0 100%)',
    highlights: [
      { icon: Tent,  value: '48',    label: 'Aktif kulüp' },
      { icon: Users, value: '8,4B',  label: 'Erişilen öğrenci' },
      { icon: Globe, value: '234',   label: 'Etkinlik / dönem' },
    ],
    mockRows: [
      { label: 'Aktif Kulüpler',       meta: '48 kulüp  ·  %100 uyumlu',         color: '#60A5FA' },
      { label: 'Öğrenci Katılımı',     meta: '8.400 öğrenci  ·  ↑ %23',          color: '#34D1BF' },
      { label: 'Etkinlik Uyumu',       meta: '234 etkinlik  ·  0 ihlal',          color: '#4ADE80' },
    ],
  },
  companies: {
    gradient: 'linear-gradient(135deg, #FB923C 0%, #2BAAA0 100%)',
    highlights: [
      { icon: Target,     value: '12,5B', label: 'Erişilen öğrenci' },
      { icon: TrendingUp, value: '%24',   label: 'Dönüşüm oranı' },
      { icon: Shield,     value: '3,2×',  label: 'Ort. ROI' },
    ],
    mockRows: [
      { label: 'Hedef Segment',    meta: 'Müh. & BM  ·  3. ve 4. sınıf öğrenciler', color: '#FB923C' },
      { label: 'Kampanya Erişimi', meta: '12.500 öğrenci  ·  18 üniversite',         color: '#34D1BF' },
      { label: 'ROI Skoru',        meta: 'Ort. 3,2× geri dönüş  ·  Doğrulanmış veri', color: '#4ADE80' },
    ],
  },
};

const StakeholderTabs = forwardRef<StakeholderTabsRef>((props, ref) => {
  const [activeTab, setActiveTab] = useState<TabType>('students');
  const { t } = useLanguage();

  useImperativeHandle(ref, () => ({
    switchTab: (tab: TabType) => {
      setActiveTab(tab);
    },
  }));

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#stakeholders')) {
        const hashParts = hash.split('?');
        if (hashParts.length > 1) {
          const params = new URLSearchParams(hashParts[1]);
          const tabParam = params.get('tab');
          if (tabParam && ['students', 'clubs', 'university', 'companies'].includes(tabParam)) {
            setActiveTab(tabParam as TabType);
          }
        }
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const stakeholders = useMemo(() => [
    {
      id: 'students' as TabType,
      title: t('tabs.items.students.title'),
      icon: Users,
      benefit: t('tabs.items.students.benefit'),
      description: t('tabs.items.students.desc'),
      features: t('tabs.items.students.features'),
    },
    {
      id: 'clubs' as TabType,
      title: t('tabs.items.clubs.title'),
      icon: Tent,
      benefit: t('tabs.items.clubs.benefit'),
      description: t('tabs.items.clubs.desc'),
      features: t('tabs.items.clubs.features'),
    },
    {
      id: 'university' as TabType,
      title: t('tabs.items.university.title'),
      icon: Building2,
      benefit: t('tabs.items.university.benefit'),
      description: t('tabs.items.university.desc'),
      features: t('tabs.items.university.features'),
    },
    {
      id: 'companies' as TabType,
      title: t('tabs.items.companies.title'),
      icon: Briefcase,
      benefit: t('tabs.items.companies.benefit'),
      description: t('tabs.items.companies.desc'),
      features: t('tabs.items.companies.features'),
    },
  ], [t]);

  const activeContent = stakeholders.find(s => s.id === activeTab) ?? stakeholders[0];
  const activeVisual = visuals[activeTab];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 },
  };

  return (
    <section id="stakeholders" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp}>
          <SectionTitle
            title={t('tabs.heading')}
            subtitle={t('tabs.subheading')}
          />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
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
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-50 rounded-3xl p-6 md:p-12 border border-slate-200 shadow-sm"
        >
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
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="inline-flex items-center text-primary-600 font-bold hover:text-primary-800 transition-colors"
                >
                  {t('tabs.learnMore')} <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Visual Panel */}
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">

                {/* Gradient header with icon + stat pills */}
                <div
                  className="relative p-8 flex flex-col items-center overflow-hidden"
                  style={{ background: activeVisual.gradient }}
                >
                  {/* Decorative blobs */}
                  <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                    style={{ background: 'rgba(255,255,255,0.12)', transform: 'translate(35%, -35%)' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-32 h-32 rounded-full pointer-events-none"
                    style={{ background: 'rgba(255,255,255,0.10)', transform: 'translate(-35%, 35%)' }}
                  />

                  {/* Icon badge */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 border border-white/30 backdrop-blur-sm"
                    style={{ background: 'rgba(255,255,255,0.18)' }}
                  >
                    {React.createElement(activeContent.icon, { className: 'w-10 h-10 text-white' })}
                  </div>

                  <p className="text-white font-bold text-xl mb-0.5 tracking-tight">{activeContent.title}</p>
                  <p className="text-white/75 text-sm font-medium mb-6">{activeContent.benefit}</p>

                  {/* Stat pills */}
                  <div className="grid grid-cols-3 gap-3 w-full">
                    {activeVisual.highlights.map((h, idx) => {
                      const HIcon = h.icon;
                      return (
                        <div
                          key={idx}
                          className="rounded-xl p-3 text-center"
                          style={{ background: 'rgba(255,255,255,0.16)' }}
                        >
                          <HIcon className="w-4 h-4 text-white/80 mx-auto mb-1" />
                          <p className="text-white font-bold text-base leading-none mb-1">{h.value}</p>
                          <p className="text-white/65 text-xs leading-tight">{h.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Mock data rows */}
                <div className="bg-white p-5 space-y-3">
                  {activeVisual.mockRows.map((row, idx) => (
                    <motion.div
                      key={`${activeTab}-${idx}`}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.08 }}
                      className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100"
                    >
                      <div
                        className="w-1.5 h-10 rounded-full flex-shrink-0"
                        style={{ background: row.color }}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-800 truncate">{row.label}</p>
                        <p className="text-xs text-slate-500 mt-0.5 truncate">{row.meta}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
});

StakeholderTabs.displayName = 'StakeholderTabs';

export default StakeholderTabs;
