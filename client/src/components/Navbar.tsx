import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, isArabic, t } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky
          ? 'bg-white shadow-lg'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="Trendyol Offers"
            className="h-12 w-auto rounded-lg shadow-md"
          />
        </div>

        {/* Desktop Language Toggle */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => setLanguage('ar')}
            className={`px-4 py-2 rounded-lg font-cairo font-semibold transition-all duration-300 ${
              language === 'ar'
                ? 'bg-[#F27A1A] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {t('nav.arabic')}
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded-lg font-poppins font-semibold transition-all duration-300 ${
              language === 'en'
                ? 'bg-[#F27A1A] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            English
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#F27A1A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#F27A1A]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 p-4 flex gap-2">
          <button
            onClick={() => {
              setLanguage('ar');
              setMobileMenuOpen(false);
            }}
            className={`flex-1 px-4 py-2 rounded-lg font-cairo font-semibold transition-all duration-300 ${
              language === 'ar'
                ? 'bg-[#F27A1A] text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {t('nav.arabic')}
          </button>
          <button
            onClick={() => {
              setLanguage('en');
              setMobileMenuOpen(false);
            }}
            className={`flex-1 px-4 py-2 rounded-lg font-poppins font-semibold transition-all duration-300 ${
              language === 'en'
                ? 'bg-[#F27A1A] text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            English
          </button>
        </div>
      )}
    </nav>
  );
};
