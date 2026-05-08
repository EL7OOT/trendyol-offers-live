import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, CreditCard } from 'lucide-react';

export const InstallmentSection: React.FC = () => {
  const { t, isArabic } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const badges = [
    t('installment.badge1'),
    t('installment.badge2'),
    t('installment.badge3'),
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FFFBF7] to-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#F27A1A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#8B5CF6]/3 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-arabic-headline text-4xl sm:text-5xl font-bold text-[#1F2937] mb-4">
            {t('installment.title')}
          </h2>
          <p className="font-arabic-body text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {t('installment.subtitle')}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F27A1A] to-[#FF8C42] mx-auto rounded-full" />
        </motion.div>

        {/* Payment Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Tamara Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(242, 122, 26, 0.08)' }}
            className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-[#F27A1A]/8 overflow-hidden group"
          >
            {/* Card accent border top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F27A1A] to-transparent" />

            {/* Logo Section */}
            <div className="flex items-center gap-6 mb-8">
              <img src="/tamara-logo.svg" alt="Tamara" className="w-32 sm:w-40 h-auto object-contain flex-shrink-0" />
            </div>

            {/* Description */}
            <p className="font-arabic-body text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              {t('installment.tamara.title')}
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#F27A1A] flex-shrink-0 mt-0.5" />
                <span className="font-cairo text-sm text-gray-600">ادفع على دفعات بدون فوائد</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#F27A1A] flex-shrink-0 mt-0.5" />
                <span className="font-cairo text-sm text-gray-600">موافقة فورية وسهلة</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#F27A1A] flex-shrink-0 mt-0.5" />
                <span className="font-cairo text-sm text-gray-600">دفع آمن وموثوق</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                const copyAndRedirect = async () => {
                  try {
                    await navigator.clipboard.writeText('ALAMLFW');
                    setTimeout(() => {
                      window.open('https://ty.gl/lskrjljpg2ev7', '_blank');
                    }, 500);
                  } catch (error) {
                    console.error('Failed to copy:', error);
                    window.open('https://ty.gl/lskrjljpg2ev7', '_blank');
                  }
                };
                copyAndRedirect();
              }}
              className="w-full bg-gradient-to-r from-[#F27A1A] to-[#FF8C42] text-white font-cairo font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-base"
            >
              ابدأ الآن مع تمارا
            </button>
          </motion.div>

          {/* Tabby Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(139, 92, 246, 0.08)' }}
            className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-[#8B5CF6]/8 overflow-hidden group"
          >
            {/* Card accent border top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F27A1A] to-transparent" />

            {/* Logo Section */}
            <div className="flex items-center gap-6 mb-8">
              <img src="/tabby-logo.svg" alt="Tabby" className="w-32 sm:w-40 h-auto object-contain flex-shrink-0" />
            </div>

            {/* Description */}
            <p className="font-arabic-body text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              {t('installment.tabby.title')}
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#F27A1A] flex-shrink-0 mt-0.5" />
                <span className="font-cairo text-sm text-gray-600">قسط مشترياتك بسهولة</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#F27A1A] flex-shrink-0 mt-0.5" />
                <span className="font-cairo text-sm text-gray-600">بدون رسوم إضافية</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#F27A1A] flex-shrink-0 mt-0.5" />
                <span className="font-cairo text-sm text-gray-600">دفع آمن وسريع</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                const copyAndRedirect = async () => {
                  try {
                    await navigator.clipboard.writeText('ALAMLFW');
                    setTimeout(() => {
                      window.open('https://ty.gl/lskrjljpg2ev7', '_blank');
                    }, 500);
                  } catch (error) {
                    console.error('Failed to copy:', error);
                    window.open('https://ty.gl/lskrjljpg2ev7', '_blank');
                  }
                };
                copyAndRedirect();
              }}
              className="w-full bg-gradient-to-r from-[#F27A1A] to-[#FF8C42] text-white font-cairo font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-base"
            >
              ابدأ الآن مع تابي
            </button>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-[#FFFBF7] rounded-full px-6 py-3 shadow-sm border border-[#F27A1A]/10 hover:shadow-md transition-all duration-300"
            >
              <p className="font-cairo text-sm sm:text-base font-semibold text-[#F27A1A] flex items-center gap-2">
                <span className="text-lg">✓</span> {badge}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
