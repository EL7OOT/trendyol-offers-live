import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t, isArabic } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F9F7F5] to-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex justify-center ${isArabic ? 'lg:order-2' : ''}`}
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F27A1A]/20 to-[#8B5CF6]/20 rounded-3xl blur-3xl" />
              <img
                src="/logo.jpg"
                alt="Trendyol Offers Logo"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${isArabic ? 'lg:order-1 lg:text-right' : 'lg:text-left'}`}
          >
            {/* Title */}
            <h2 className="font-arabic-headline text-4xl sm:text-5xl font-bold text-[#1F2937] mb-6">
              {t('about.title')}
            </h2>

            {/* Divider */}
            <div className={`w-16 h-1 bg-gradient-to-r from-[#F27A1A] to-[#8B5CF6] mb-8 ${isArabic ? 'ml-auto' : ''}`} />

            {/* Content */}
            <p className="font-arabic-body text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
              {t('about.content')}
            </p>

            {/* Team Info */}
            <div className="bg-gradient-to-r from-[#F27A1A]/10 to-[#8B5CF6]/10 rounded-xl p-6 border border-[#F27A1A]/20">
              <p className="font-cairo text-sm text-gray-600 mb-2">👥 {t('about.team')}</p>
              <p className="font-arabic-headline text-2xl font-bold text-[#1F2937]">
                {t('about.team')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: '+500', label: 'طلب مكتمل', labelEn: 'Orders' },
                { number: '+300', label: 'عميل سعيد', labelEn: 'Customers' },
                { number: '4.9/5', label: 'تقييم', labelEn: 'Rating' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg p-4 shadow-md text-center"
                >
                  <p className="font-arabic-headline text-2xl font-bold text-[#F27A1A] mb-1">
                    {stat.number}
                  </p>
                  <p className="font-cairo text-xs sm:text-sm text-gray-600">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
