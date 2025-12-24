import React from 'react';
import { Globe, Unplug, Network } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useLanguage } from '../LanguageContext';

const GlobalVision: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="global" className="py-20 bg-slate-900 text-white relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
         <div className="absolute left-10 top-10 w-96 h-96 bg-primary-500 rounded-full blur-[100px]"></div>
         <div className="absolute right-10 bottom-10 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t('vision.title')}</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            {t('vision.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700">
                  <Unplug className="w-7 h-7 text-red-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t('vision.oldWorld.title')}</h3>
                <p className="text-slate-400">
                  {t('vision.oldWorld.desc')}
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-primary-900/50 flex items-center justify-center border border-primary-500/30 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                  <Network className="w-7 h-7 text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-200">{t('vision.newWorld.title')}</h3>
                <p className="text-slate-300">
                   {t('vision.newWorld.desc')}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                    <div className="flex items-center gap-3">
                        <Globe className="text-primary-400 w-6 h-6" />
                        <span className="font-semibold">{t('vision.cardTitle')}</span>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">{t('vision.liveBadge')}</span>
                </div>
                
                {/* Mock Data Visual */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center text-xs font-bold">TR</div>
                        <div>
                            <p className="text-sm font-medium">İTÜ Blockchain Summit</p>
                            <p className="text-xs text-slate-500">İstanbul, Türkiye</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                        <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center text-xs font-bold">UK</div>
                        <div>
                            <p className="text-sm font-medium">London Tech Week - Students</p>
                            <p className="text-xs text-slate-500">London, UK</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-300 flex items-center justify-center text-xs font-bold">DE</div>
                        <div>
                            <p className="text-sm font-medium">Berlin AI Hackathon</p>
                            <p className="text-xs text-slate-500">Berlin, Germany</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalVision;