import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useConversion } from '@/hooks/useConversion';
import { Copy, ShoppingBag } from 'lucide-react';

export const CouponSection: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const { copyToClipboard, copyAndRedirect } = useConversion();

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#F9F7F5]">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          {/* Coupon Card */}
          <div className="relative bg-white rounded-2xl p-8 sm:p-10 shadow-xl border-2 border-dashed border-[#F27A1A] overflow-hidden glow-orange">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663029472410/jUFtjsnTPf5NSpAXsQahkD/coupon-pattern-fbDkWqEpQ96HfSCoqHZkXy.webp)',
                backgroundSize: 'cover',
              }}
            />

            <div className="relative z-10">
              {/* Top Section */}
              <div className="text-center mb-8">
                <p className="font-cairo text-sm font-semibold text-[#F27A1A] mb-2 uppercase tracking-wide">
                  {t('coupon.label')}
                </p>
                <h2 className="font-arabic-headline text-3xl sm:text-5xl font-bold text-[#1F2937] mb-4">
                  ALAMLFW
                </h2>
                <p className="font-arabic-body text-gray-600 text-base sm:text-lg">
                  {t('coupon.description')}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#F27A1A] to-transparent mb-8" />

              {/* Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 mb-8 ${isArabic ? 'sm:flex-row-reverse' : ''}`}>
                <button
                  onClick={() => copyToClipboard()}
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <Copy className="w-5 h-5" />
                  {t('coupon.btn.copy')}
                </button>
                <button
                  onClick={() => copyAndRedirect()}
                  className="flex-1 btn-secondary flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {t('coupon.btn.shop')}
                </button>
              </div>

              {/* Right Side Badges */}
              <div className={`flex flex-wrap gap-3 ${isArabic ? 'justify-end' : 'justify-start'}`}>
                {[
                  { icon: '⭐', text: t('coupon.badge.exclusive') },
                  { icon: '✨', text: t('coupon.badge.easy') },
                  { icon: '🎁', text: t('coupon.badge.updated') },
                ].map((badge, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#F27A1A]/10 to-[#8B5CF6]/10 px-3 py-2 rounded-lg border border-[#F27A1A]/20"
                  >
                    <span className="text-lg">{badge.icon}</span>
                    <span className="font-cairo text-xs sm:text-sm font-semibold text-gray-700">
                      {badge.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
