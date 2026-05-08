import React from 'react';
import { motion } from 'framer-motion';
import { useConversion } from '@/hooks/useConversion';

import { useLanguage } from '@/contexts/LanguageContext';

export const WhatsAppButton: React.FC = () => {
  const { openWhatsApp } = useConversion();
  const { t } = useLanguage();

  return (
    <motion.button
      onClick={() => openWhatsApp()}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center group"
    >
      {/* Pulse Animation */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-[#25D366] rounded-full opacity-30"
      />

      {/* WhatsApp Icon */}
      <svg
        className="w-7 h-7 text-white relative z-10"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-1.493.821-2.771 2.002-3.682 3.412-1.822 2.998-2.329 6.172-1.563 9.424 1.066 4.413 5.076 7.61 9.399 7.61a9.88 9.88 0 004.391-1.025c1.494-.821 2.771-2.002 3.682-3.412 1.822-2.998 2.328-6.172 1.563-9.424-1.066-4.413-5.076-7.61-9.399-7.61zm8.115 16.566c-1.832 1.283-4.074 1.989-6.514 1.989-5.231 0-9.49-3.436-10.322-8.276-.552-3.431.044-6.789 1.676-9.498.822-1.351 1.957-2.364 3.297-3.055 1.663-.915 3.588-1.425 5.595-1.425 5.231 0 9.49 3.436 10.322 8.276.552 3.431-.044 6.789-1.676 9.498z" />
      </svg>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {t('whatsapp.button.text')}
      </div>
    </motion.button>
  );
};
