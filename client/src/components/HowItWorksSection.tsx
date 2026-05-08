import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useConversion } from '@/hooks/useConversion';
import { Copy, ShoppingBag, CreditCard, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const { copyAndRedirect } = useConversion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const steps = [
    {
      icon: Copy,
      title: t('howitworks.step1.title'),
      description: t('howitworks.step1.desc'),
      number: '1',
    },
    {
      icon: ShoppingBag,
      title: t('howitworks.step2.title'),
      description: t('howitworks.step2.desc'),
      number: '2',
    },
    {
      icon: CreditCard,
      title: t('howitworks.step3.title'),
      description: t('howitworks.step3.desc'),
      number: '3',
    },
  ];

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
            {t('howitworks.title')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F27A1A] to-[#8B5CF6] mx-auto" />
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative"
              >
                {/* Card */}
                <div className="bg-gradient-to-br from-white to-[#F9F7F5] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#F27A1A] to-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 pt-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F27A1A]/20 to-[#8B5CF6]/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#F27A1A]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-arabic-headline text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-arabic-body text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-[#F27A1A]" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={() => copyAndRedirect()}
            className="btn-primary px-8 sm:px-12 py-4 text-lg font-semibold"
          >
            {t('howitworks.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
