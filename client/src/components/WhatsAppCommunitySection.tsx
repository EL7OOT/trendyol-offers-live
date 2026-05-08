import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useConversion } from '@/hooks/useConversion';
import { MessageCircle, Users, Bell, Gift, Zap } from 'lucide-react';

export const WhatsAppCommunitySection: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const { openWhatsAppCommunity } = useConversion();

  const features = [
    {
      icon: Gift,
      label: t('whatsapp.community.feature1'),
    },
    {
      icon: Bell,
      label: t('whatsapp.community.feature2'),
    },
    {
      icon: Zap,
      label: t('whatsapp.community.feature3'),
    },
    {
      icon: Users,
      label: t('whatsapp.community.feature4'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F0FDF4] to-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex justify-center ${isArabic ? 'lg:order-2' : ''}`}
          >
            <div className="relative w-full max-w-sm">
              {/* Floating WhatsApp Icons */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg"
              >
                <MessageCircle className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-8 -right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg"
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#25D366] to-[#20BA58] rounded-3xl p-8 shadow-2xl text-white">
                <div className="text-center mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block"
                  >
                    <MessageCircle className="w-16 h-16 text-white mb-4 mx-auto" />
                  </motion.div>
                  <h3 className="font-arabic-headline text-2xl font-bold mb-2">
                    {t('whatsapp.community.title')}
                  </h3>
                  <p className="font-cairo text-sm text-white/90">
                    {t('whatsapp.community.members')}
                  </p>
                </div>

                <button
                  onClick={() => openWhatsAppCommunity()}
                  className="w-full bg-white text-[#25D366] font-cairo font-bold py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg mb-4"
                >
                  {t('whatsapp.community.btn')}
                </button>

                <p className="font-cairo text-xs text-white/80 text-center">
                  ✓ آمن وسهل الاستخدام • لا تحتاج لأي بيانات
                </p>
              </div>
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
              {t('whatsapp.community.title')}
            </h2>

            {/* Divider */}
            <div className={`w-16 h-1 bg-gradient-to-r from-[#25D366] to-[#F27A1A] mb-8 ${isArabic ? 'ml-auto' : ''}`} />

            {/* Subtitle */}
            <p className="font-arabic-body text-lg text-gray-700 leading-relaxed mb-8">
              {t('whatsapp.community.subtitle')}
            </p>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-[#25D366]/10 to-[#F27A1A]/10 rounded-xl p-4 border border-[#25D366]/20"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-[#25D366]" />
                      <p className="font-cairo text-sm font-semibold text-[#1F2937]">
                        {feature.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openWhatsAppCommunity()}
              className="bg-gradient-to-r from-[#25D366] to-[#20BA58] text-white font-cairo font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 text-lg w-full sm:w-auto"
            >
              {t('whatsapp.community.btn')} 🔥
            </motion.button>

            {/* Trust Info */}
            <p className="font-cairo text-sm text-gray-600 mt-6">
              ✓ انضم الآن واحصل على أحدث العروض والكوبونات أول بأول
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
