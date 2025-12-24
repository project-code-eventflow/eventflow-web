import React from 'react';
import { Globe, Unplug, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { useLanguage } from '../LanguageContext';

const GlobalVision: React.FC = React.memo(() => {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: '-100px' },
    transition: { staggerChildren: 0.2 }
  };

  const staggerItem = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section id="global" className="py-20 bg-slate-900 text-white relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
         <div className="absolute left-10 top-10 w-96 h-96 bg-primary-500 rounded-full blur-[100px]"></div>
         <div className="absolute right-10 bottom-10 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t('vision.title')}</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            {t('vision.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...staggerContainer} className="space-y-12">
            <motion.div {...staggerItem} className="flex gap-6">
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
            </motion.div>

            <motion.div {...staggerItem} className="flex gap-6">
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
            </motion.div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                    <div className="flex items-center gap-3">
                        <Globe className="text-primary-400 w-6 h-6" />
                        <span className="font-semibold">{t('vision.cardTitle')}</span>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">{t('vision.liveBadge')}</span>
                </div>
                
                {/* Mock Data Visual */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                  className="space-y-4"
                >
                    {[
                      { flag: 'TR', title: 'İTÜ Blockchain Summit', location: 'İstanbul, Türkiye', color: 'blue' },
                      { flag: 'UK', title: 'London Tech Week - Students', location: 'London, UK', color: 'red' },
                      { flag: 'DE', title: 'Berlin AI Hackathon', location: 'Berlin, Germany', color: 'yellow' }
                    ].map((item, idx) => {
                      const colorClasses: Record<string, { bg: string; text: string }> = {
                        blue: { bg: 'bg-blue-500/20', text: 'text-blue-300' },
                        red: { bg: 'bg-red-500/20', text: 'text-red-300' },
                        yellow: { bg: 'bg-yellow-500/20', text: 'text-yellow-300' }
                      };
                      const colors = colorClasses[item.color];
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50"
                        >
                          <div className={`w-10 h-10 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center text-xs font-bold`}>
                            {item.flag}
                          </div>
                          <div>
                              <p className="text-sm font-medium">{item.title}</p>
                              <p className="text-xs text-slate-500">{item.location}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

GlobalVision.displayName = 'GlobalVision';

export default GlobalVision;