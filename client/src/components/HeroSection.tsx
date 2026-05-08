import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useConversion } from '@/hooks/useConversion';

export const HeroSection: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const { copyToClipboard, copyAndRedirect } = useConversion();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 1 second on first visit
    const hasSeenPopup = sessionStorage.getItem('popupShown');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('popupShown', 'true');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen pt-24 pb-12 overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663029472410/jUFtjsnTPf5NSpAXsQahkD/hero-background-f5F8s5BcmVJN9k3hhRi3KU.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`flex flex-col ${isArabic ? 'lg:text-right' : 'lg:text-left'}`}
            >
              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="font-arabic-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-6 leading-tight"
              >
                {t('hero.title')}
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="font-arabic-body text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed"
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className={`flex flex-col sm:flex-row gap-4 mb-8 ${isArabic ? 'sm:flex-row-reverse' : ''}`}
              >
                <button
                  onClick={() => copyAndRedirect()}
                  className="btn-primary w-full sm:w-auto text-center"
                >
                  {t('hero.cta.shop')}
                </button>
                <button
                  onClick={() => copyToClipboard()}
                  className="btn-secondary w-full sm:w-auto text-center"
                >
                  {t('hero.cta.copy')}
                </button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                variants={itemVariants}
                className={`flex flex-wrap gap-4 ${isArabic ? 'justify-end' : 'justify-start'}`}
              >
                {[
                  { icon: '🔒', text: t('hero.trust.secure') },
                  { icon: '📅', text: t('hero.trust.daily') },
                  { icon: '⚡', text: t('hero.trust.support') },
                ].map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow-md"
                  >
                    <span className="text-xl">{badge.icon}</span>
                    <span className="font-cairo text-sm font-semibold text-gray-700">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual - Mobile Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex justify-center items-center"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029472410/jUFtjsnTPf5NSpAXsQahkD/mobile-mockup-4wgXwGGTEubCz7cxihYika.webp"
                alt="Trendyol Mobile App"
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-10 text-5xl opacity-20"
        >
          🎁
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-10 text-5xl opacity-20"
        >
          🛍️
        </motion.div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F27A1A]/10 to-[#8B5CF6]/10" />

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl z-20"
            >
              ×
            </button>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="text-6xl text-center mb-4">🎟️</div>

              {/* Title */}
              <h2 className="font-arabic-headline text-2xl font-bold text-center text-[#1F2937] mb-6">
                {t('popup.title')}
              </h2>

              {/* Coupon Code Display */}
              <div className="bg-gradient-to-r from-[#F27A1A] to-[#8B5CF6] rounded-xl p-6 mb-6 text-center">
                <p className="text-white/80 font-cairo text-sm mb-2">
                  {t('coupon.label')}
                </p>
                <p className="text-white font-poppins font-bold text-4xl tracking-widest">
                  ALAMLFW
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => {
                  setShowPopup(false);
                  copyAndRedirect();
                }}
                className="btn-primary w-full text-center"
              >
                {t('popup.button')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
