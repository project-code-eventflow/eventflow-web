import React from 'react';
import { Mail, MapPin, Linkedin, Instagram, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section */}
        <div className="bg-primary-600 rounded-3xl p-8 md:p-16 text-center mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">{t('contact.ctaTitle')}</h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8 relative z-10">
            {t('contact.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="px-8 py-3 bg-white text-primary-700 font-bold rounded-full hover:bg-slate-100 transition-colors">
              {t('contact.btnContact')}
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
              {t('contact.btnDownload')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-1">
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
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t('contact.colPlatform')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">{t('tabs.items.students.title')}</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">{t('tabs.items.clubs.title')}</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">{t('tabs.items.university.title')}</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">{t('tabs.items.companies.title')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('contact.colCorp')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">{t('contact.colContact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('contact.colContact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-primary-500 flex-shrink-0" />
                <span>Teknopark İstanbul, Türkiye</span>
              </li>
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
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-slate-600">
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
        </div>
      </div>
    </footer>
  );
};

export default Contact;