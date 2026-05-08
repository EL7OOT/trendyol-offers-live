import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useConversion } from '@/hooks/useConversion';
import { MessageCircle, Zap } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const { copyAndRedirect, openWhatsApp } = useConversion();

  return (
    <section
      className="relative py-20 sm:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663029472410/jUFtjsnTPf5NSpAXsQahkD/final-cta-background-VY7mVvMFYWyf9mfahrLQsz.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Main Heading */}
          <h2 className="font-arabic-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {t('finalcta.title')}
          </h2>

          {/* Subtitle */}
          <p className="font-arabic-body text-lg sm:text-xl text-white/90 mb-12 leading-relaxed drop-shadow-md">
            {t('finalcta.subtitle')}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`flex flex-col sm:flex-row gap-4 mb-12 justify-center ${isArabic ? 'sm:flex-row-reverse' : ''}`}
          >
            <button
              onClick={() => copyAndRedirect()}
              className="btn-primary px-8 sm:px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              {t('finalcta.btn.shop')}
            </button>
            <button
              onClick={() => openWhatsApp()}
              className="bg-[#25D366] text-white font-cairo font-semibold py-4 px-8 sm:px-12 rounded-lg hover:bg-[#20BA58] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              {t('finalcta.btn.whatsapp')}
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`flex flex-wrap gap-4 justify-center ${isArabic ? 'flex-row-reverse' : ''}`}
          >
            {[
              { icon: '🔒', text: t('finalcta.trust.secure') },
              { icon: '⚡', text: t('finalcta.trust.support') },
              { icon: '🎁', text: t('finalcta.trust.offers') },
            ].map((indicator, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all"
              >
                <p className="font-cairo font-semibold text-white flex items-center gap-2">
                  <span className="text-xl">{indicator.icon}</span>
                  {indicator.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Animated Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 right-10 text-6xl opacity-30"
      >
        🎁
      </motion.div>
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 left-10 text-6xl opacity-30"
      >
        🛍️
      </motion.div>
    </section>
  );
};
