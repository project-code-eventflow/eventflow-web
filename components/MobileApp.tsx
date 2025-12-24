import React from 'react';
import { Apple, Play, QrCode, Ticket, Calendar, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const MobileApp: React.FC = React.memo(() => {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.7, delay: 0.2 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.7, delay: 0.3 }
  };

  return (
    <section id="mobile" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <motion.div {...fadeInUp}>
            <motion.div 
              {...fadeInUp}
              className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-primary-400 text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              {t('mobile.badge')}
            </motion.div>
            
            <motion.h2 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight"
            >
              {t('mobile.titleLine1')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
                {t('mobile.titleLine2')}
              </span>
            </motion.h2>
            
            <motion.p 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg"
            >
              {t('mobile.desc')}
            </motion.p>

            <motion.div 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 mb-10"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col gap-2"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-primary-400 mb-2">
                  <QrCode size={20} />
                </div>
                <h4 className="font-semibold text-white">{t('mobile.fastLogin.title')}</h4>
                <p className="text-sm text-slate-500">{t('mobile.fastLogin.desc')}</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col gap-2"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-primary-400 mb-2">
                  <Bell size={20} />
                </div>
                <h4 className="font-semibold text-white">{t('mobile.notifications.title')}</h4>
                <p className="text-sm text-slate-500">{t('mobile.notifications.desc')}</p>
              </motion.div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a 
                href="/download/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all font-semibold"
              >
                <Apple size={24} className="fill-current" />
                <div className="text-left">
                  <div className="text-[10px] leading-none uppercase tracking-wider opacity-60">Download on the</div>
                  <div className="text-base leading-tight font-bold">App Store</div>
                </div>
              </motion.a>
              
              <motion.a 
                href="/download/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-6 py-3.5 bg-slate-800 border border-slate-700 text-white rounded-xl hover:bg-slate-700 transition-all font-semibold"
              >
                <Play size={24} className="fill-current" />
                <div className="text-left">
                  <div className="text-[10px] leading-none uppercase tracking-wider opacity-60">Get it on</div>
                  <div className="text-base leading-tight font-bold">Google Play</div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visual Side (Phone Mockups) */}
          <motion.div 
            {...slideInRight}
            className="relative h-[600px] flex items-center justify-center lg:justify-end"
          >
            {/* Phone 1 */}
            <div className="absolute left-1/2 lg:left-auto lg:right-40 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:translate-x-0 w-[280px] h-[560px] bg-slate-900 rounded-[3rem] phone-border z-10 overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition-all duration-500 shadow-2xl border border-slate-700/50">
              <div className="relative w-full h-full bg-slate-800/80 backdrop-blur-sm">
                {/* Status Bar */}
                <div className="absolute top-0 w-full h-6 bg-slate-900/50 z-20"></div>
                {/* Content Placeholder */}
                <div className="p-4 pt-12">
                   <div className="flex justify-between items-center mb-6">
                     <div className="w-8 h-8 rounded-full bg-slate-700 animate-pulse"></div>
                     <div className="w-20 h-4 rounded bg-slate-700 animate-pulse"></div>
                   </div>
                   <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-primary-600 to-purple-600 mb-4 p-4 flex flex-col justify-between shadow-lg">
                      <div className="w-16 h-4 bg-white/20 rounded"></div>
                      <div className="w-32 h-6 bg-white/40 rounded"></div>
                   </div>
                   <div className="space-y-3">
                      <div className="w-full h-20 rounded-xl bg-slate-700/50 flex items-center p-3 gap-3">
                         <div className="w-12 h-12 rounded-lg bg-slate-600"></div>
                         <div className="flex-1">
                            <div className="w-24 h-4 bg-slate-600 rounded mb-2"></div>
                            <div className="w-16 h-3 bg-slate-700 rounded"></div>
                         </div>
                      </div>
                      <div className="w-full h-20 rounded-xl bg-slate-700/50 flex items-center p-3 gap-3">
                         <div className="w-12 h-12 rounded-lg bg-slate-600"></div>
                         <div className="flex-1">
                            <div className="w-24 h-4 bg-slate-600 rounded mb-2"></div>
                            <div className="w-16 h-3 bg-slate-700 rounded"></div>
                         </div>
                      </div>
                      <div className="w-full h-20 rounded-xl bg-slate-700/50 flex items-center p-3 gap-3">
                         <div className="w-12 h-12 rounded-lg bg-slate-600"></div>
                         <div className="flex-1">
                            <div className="w-24 h-4 bg-slate-600 rounded mb-2"></div>
                            <div className="w-16 h-3 bg-slate-700 rounded"></div>
                         </div>
                      </div>
                   </div>
                </div>
                {/* Bottom Nav */}
                <div className="absolute bottom-0 w-full h-16 bg-slate-900 border-t border-slate-800 flex justify-around items-center px-4">
                   <div className="text-primary-500"><Calendar size={20} /></div>
                   <div className="text-slate-600"><Ticket size={20} /></div>
                   <div className="text-slate-600"><Bell size={20} /></div>
                </div>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="absolute left-1/2 lg:left-auto lg:right-0 top-1/2 -translate-y-1/2 -translate-x-[30%] lg:translate-x-12 w-[280px] h-[560px] bg-slate-900 rounded-[3rem] phone-border z-0 overflow-hidden transform rotate-[6deg] opacity-60 scale-95 border border-slate-700/50">
               <div className="relative w-full h-full bg-slate-800 p-6 flex flex-col items-center justify-center">
                  <div className="w-48 h-48 bg-white rounded-2xl p-2 mb-6">
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                       <QrCode size={80} className="text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-6 bg-slate-700 rounded mx-auto mb-3"></div>
                    <div className="w-24 h-4 bg-slate-700/50 rounded mx-auto"></div>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
});

MobileApp.displayName = 'MobileApp';

export default MobileApp;