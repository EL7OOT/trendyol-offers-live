import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t, isArabic } = useLanguage();

  const footerLinks = [
    { label: t('footer.about'), href: '#' },
    { label: t('footer.howtobuy'), href: '#' },
    { label: t('footer.faq'), href: '#' },
    { label: t('footer.privacy'), href: '#' },
  ];

  return (
    <footer className="bg-[#1F2937] text-white py-12 sm:py-16">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.jpg"
                alt="Trendyol Offers"
                className="h-12 w-auto rounded-lg shadow-md"
              />
            </div>
            <p className="font-arabic-body text-gray-400 text-sm leading-relaxed">
              {t('footer.disclaimer')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-arabic-headline font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="font-cairo text-gray-400 hover:text-[#F27A1A] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-arabic-headline font-bold text-lg mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/966510554765"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#25D366] transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-1.493.821-2.771 2.002-3.682 3.412-1.822 2.998-2.329 6.172-1.563 9.424 1.066 4.413 5.076 7.61 9.399 7.61a9.88 9.88 0 004.391-1.025c1.494-.821 2.771-2.002 3.682-3.412 1.822-2.998 2.328-6.172 1.563-9.424-1.066-4.413-5.076-7.61-9.399-7.61zm8.115 16.566c-1.832 1.283-4.074 1.989-6.514 1.989-5.231 0-9.49-3.436-10.322-8.276-.552-3.431.044-6.789 1.676-9.498.822-1.351 1.957-2.364 3.297-3.055 1.663-.915 3.588-1.425 5.595-1.425 5.231 0 9.49 3.436 10.322 8.276.552 3.431-.044 6.789-1.676 9.498z" />
                </svg>
                <span className="font-cairo">+966 51 055 4765</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-lg">📧</span>
                <span className="font-cairo">support@trendyol-offers.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left ${isArabic ? 'sm:flex-row-reverse' : ''}`}
        >
          <p className="font-cairo text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-[#F27A1A] transition-colors"
              title="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#F27A1A] transition-colors"
              title="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.894 8.221c.004.126.004.253.004.38 0 3.88-2.953 8.36-8.359 8.36-1.66 0-3.204-.486-4.507-1.323.23.027.464.042.7.042 1.378 0 2.647-.47 3.653-1.257-1.287-.024-2.37-.876-2.745-2.048.18.033.365.053.556.053.268 0 .528-.035.78-.103-1.346-.272-2.358-1.46-2.358-2.888v-.037c.397.222.854.356 1.345.371-.79-.528-1.31-1.43-1.31-2.45 0-.539.145-1.044.398-1.48 1.452 1.783 3.625 2.956 6.073 3.081-.05-.214-.076-.437-.076-.662 0-1.605 1.302-2.906 2.906-2.906.837 0 1.592.353 2.123.92.662-.13 1.283-.37 1.843-.7-.217.677-.677 1.244-1.278 1.603.586-.07 1.144-.225 1.664-.456-.387.583-.878 1.094-1.44 1.502z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
