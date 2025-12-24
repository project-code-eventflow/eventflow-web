import React from 'react';
import { ArrowRight, Globe2, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-primary-100 text-primary-700 text-sm font-semibold mb-8 fade-in-up shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
          {t('hero.badge')}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1] fade-in-up" style={{ animationDelay: '0.1s' }}>
          {t('hero.titleLine1')} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">
            {t('hero.titleLine2')}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="#stakeholders" className="group w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-full shadow-lg hover:bg-slate-800 hover:scale-105 transition-all flex items-center justify-center">
            {t('hero.ctaPrimary')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#global" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold border border-slate-200 rounded-full shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center">
            {t('hero.ctaSecondary')}
          </a>
        </div>

        {/* Features Highlights with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:shadow-md transition-all">
            <div className="p-3 bg-blue-50 rounded-xl mb-4 text-primary-600 transform group-hover:scale-110 transition-transform">
              <Globe2 className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{t('hero.features.global.title')}</h3>
            <p className="text-sm text-slate-500 mt-2 text-center">{t('hero.features.global.desc')}</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:shadow-md transition-all">
            <div className="p-3 bg-blue-50 rounded-xl mb-4 text-primary-600">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{t('hero.features.secure.title')}</h3>
            <p className="text-sm text-slate-500 mt-2 text-center">{t('hero.features.secure.desc')}</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:shadow-md transition-all">
            <div className="p-3 bg-blue-50 rounded-xl mb-4 text-primary-600">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{t('hero.features.data.title')}</h3>
            <p className="text-sm text-slate-500 mt-2 text-center">{t('hero.features.data.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;