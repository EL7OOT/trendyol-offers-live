import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Gift, Zap, Headphones, Shield } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Gift,
      title: t('whychooseus.card1.title'),
      description: t('whychooseus.card1.desc'),
      color: 'from-[#F27A1A]',
    },
    {
      icon: Zap,
      title: t('whychooseus.card2.title'),
      description: t('whychooseus.card2.desc'),
      color: 'from-[#8B5CF6]',
    },
    {
      icon: Headphones,
      title: t('whychooseus.card3.title'),
      description: t('whychooseus.card3.desc'),
      color: 'from-[#F27A1A]',
    },
    {
      icon: Shield,
      title: t('whychooseus.card4.title'),
      description: t('whychooseus.card4.desc'),
      color: 'from-[#8B5CF6]',
    },
  ];

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

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-arabic-headline text-4xl sm:text-5xl font-bold text-[#1F2937] mb-4">
            {t('whychooseus.title')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F27A1A] to-[#8B5CF6] mx-auto" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-white to-[#F9F7F5] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} to-[#8B5CF6] rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-arabic-headline text-2xl font-bold text-[#1F2937] mb-3">
                  {feature.title}
                </h3>
                <p className="font-arabic-body text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
