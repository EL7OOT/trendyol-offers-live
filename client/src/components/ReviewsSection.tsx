import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

export const ReviewsSection: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    direction: isArabic ? 'rtl' : 'ltr'
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = () => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };
  
  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const stats = [
    { icon: '⭐', text: t('reviews.stat.rating') },
    { icon: '📦', text: t('reviews.stat.orders') },
    { icon: '😊', text: t('reviews.stat.happy') },
    { icon: '⚡', text: t('reviews.stat.support') },
  ];

  const reviews = [
    {
      name: 'فاطمة أحمد',
      nameEn: 'Fatima Ahmed',
      avatar: '👩',
      stars: 5,
      text: t('reviews.review1'),
    },
    {
      name: 'سارة محمد',
      nameEn: 'Sarah Mohammed',
      avatar: '👩‍🦰',
      stars: 5,
      text: t('reviews.review2'),
    },
    {
      name: 'مريم علي',
      nameEn: 'Maryam Ali',
      avatar: '👱‍♀️',
      stars: 5,
      text: t('reviews.review3'),
    },
    {
      name: 'نور الدين',
      nameEn: 'Nour Al-Din',
      avatar: '👨',
      stars: 5,
      text: t('reviews.review4'),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F9F7F5] to-white">
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
            {t('reviews.title')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F27A1A] to-[#8B5CF6] mx-auto" />
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="font-cairo text-sm sm:text-base font-semibold text-gray-700">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative w-full px-4 sm:px-0">
          {/* Carousel Container */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {reviews.map((review, idx) => (
                <div 
                  key={idx} 
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg h-full flex flex-col"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array(review.stars)
                        .fill(null)
                        .map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#F27A1A] text-[#F27A1A]" />
                        ))}
                    </div>

                    {/* Review Text */}
                    <p className="font-arabic-body text-sm sm:text-base text-gray-700 mb-6 leading-relaxed flex-grow">
                      "{review.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div className="text-2xl sm:text-3xl flex-shrink-0">{review.avatar}</div>
                      <div className="min-w-0 flex-1">
                        <p className="font-cairo font-semibold text-gray-800 text-sm sm:text-base">
                          {isArabic ? review.name : review.nameEn}
                        </p>
                        <p className="text-xs text-gray-500">عميل موثوق</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Mobile positioned differently */}
          <div className="flex justify-center gap-4 mt-8 sm:absolute sm:top-1/2 sm:left-0 sm:right-0 sm:mt-0 sm:-translate-y-1/2 sm:justify-between sm:px-0">
            <button
              onClick={() => scrollPrev()}
              type="button"
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:bg-gray-50 active:scale-95 z-10"
              aria-label="Previous review"
            >
              <ChevronLeft className={`w-6 h-6 text-[#F27A1A] ${isArabic ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={() => scrollNext()}
              type="button"
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:bg-gray-50 active:scale-95 z-10"
              aria-label="Next review"
            >
              <ChevronRight className={`w-6 h-6 text-[#F27A1A] ${isArabic ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
