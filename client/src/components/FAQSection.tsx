import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: t('faq.q1'),
      a: t('faq.a1'),
    },
    {
      q: t('faq.q2'),
      a: t('faq.a2'),
    },
    {
      q: t('faq.q3'),
      a: t('faq.a3'),
    },
    {
      q: t('faq.q4'),
      a: t('faq.a4'),
    },
    {
      q: t('faq.q5'),
      a: t('faq.a5'),
    },
    {
      q: t('faq.q6'),
      a: t('faq.a6'),
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
            {t('faq.title')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F27A1A] to-[#8B5CF6] mx-auto" />
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F9F7F5] transition-colors"
              >
                {/* Question */}
                <h3 className="font-arabic-headline text-lg font-bold text-[#1F2937] text-left flex-1">
                  {faq.q}
                </h3>

                {/* Chevron Icon */}
                <motion.div
                  animate={{ rotate: expandedIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-[#F27A1A]" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {expandedIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-gray-200"
                  >
                    <p className="font-arabic-body text-gray-700 px-6 py-4 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-[#F27A1A]/10 to-[#8B5CF6]/10 rounded-2xl p-8 border border-[#F27A1A]/20">
            <p className="font-arabic-body text-gray-700 mb-4">
              {t('faq.more_questions')}
            </p>
            <a
              href="https://wa.me/966510554765"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white font-cairo font-semibold py-3 px-8 rounded-lg hover:bg-[#20BA58] transition-all duration-300 transform hover:scale-105"
            >
              {t('faq.contact_now')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
