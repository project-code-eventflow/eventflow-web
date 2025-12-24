import React from 'react';
import { Mail, Linkedin, Instagram, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = React.memo(() => {
  const { t, language } = useLanguage();

  const handlePlatformLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, tab: 'students' | 'clubs' | 'university' | 'companies') => {
    e.preventDefault();
    // Scroll to stakeholders section
    const stakeholdersElement = document.getElementById('stakeholders');
    if (stakeholdersElement) {
      stakeholdersElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Set tab via URL parameter
      setTimeout(() => {
        window.history.replaceState(null, '', `#stakeholders?tab=${tab}`);
        // Trigger hashchange to update tab
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }, 100);
    }
  };

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
    transition: { staggerChildren: 0.1 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4 }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section */}
        <motion.div 
          {...fadeInUp}
          className="bg-primary-600 rounded-3xl p-8 md:p-16 text-center mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">{t('contact.ctaTitle')}</h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8 relative z-10">
            {t('contact.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a 
              href="https://wa.me/905014887066" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-primary-700 font-bold rounded-full hover:bg-slate-100 transition-colors text-center"
            >
              {t('contact.btnContact')}
            </a>
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12"
        >
          <motion.div variants={staggerItem} className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/favicon/android-chrome-192x192.png" 
                alt="The Uniflow Logo" 
                className="h-10 w-10"
              />
              <h3 className="text-2xl font-bold text-white">The Uniflow</h3>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              {t('contact.footerDesc')}
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/company/the-uniflow/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={language === 'tr' ? 'https://www.instagram.com/theuniflow.tr/' : 'https://www.instagram.com/the.uniflow/'} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/905014887066" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold mb-4">{t('contact.colPlatform')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#stakeholders" onClick={(e) => handlePlatformLinkClick(e, 'students')} className="hover:text-primary-400 transition-colors">{t('tabs.items.students.title')}</a></li>
              <li><a href="#stakeholders" onClick={(e) => handlePlatformLinkClick(e, 'clubs')} className="hover:text-primary-400 transition-colors">{t('tabs.items.clubs.title')}</a></li>
              <li><a href="#stakeholders" onClick={(e) => handlePlatformLinkClick(e, 'university')} className="hover:text-primary-400 transition-colors">{t('tabs.items.university.title')}</a></li>
              <li><a href="#stakeholders" onClick={(e) => handlePlatformLinkClick(e, 'companies')} className="hover:text-primary-400 transition-colors">{t('tabs.items.companies.title')}</a></li>
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold mb-4">{t('contact.colCorp')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.linkedin.com/company/the-uniflow/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Hakkımızda</a></li>
              <li><a href="https://www.linkedin.com/company/the-uniflow/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Kariyer</a></li>
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold mb-4">{t('contact.colContact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary-500 flex-shrink-0" />
                <a href="mailto:support@theuniflow.com" className="hover:text-primary-400 transition-colors">
                  support@theuniflow.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary-500 flex-shrink-0" />
                <a href="https://wa.me/905014887066" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  +90 501 488 70 66
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="pt-8 text-center text-sm text-slate-600"
        >
          <p>&copy; {new Date().getFullYear()} The Uniflow {t('contact.rights')}</p>
          <p className="mt-2">
            Developed by{' '}
            <a 
              href="https://errnify.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
            >
              Errnify
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
});

Contact.displayName = 'Contact';

export default Contact;