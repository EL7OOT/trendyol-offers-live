import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isArabic: boolean;
  isEnglish: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Flat translation object structure
const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.language': { ar: 'اللغة', en: 'Language' },
  'nav.arabic': { ar: 'العربية', en: 'Arabic' },
  'nav.english': { ar: 'English', en: 'English' },
  
  // Hero Section
  'hero.title': { ar: 'وفّر أكتر مع أفضل أسعار وعروض Trendyol 🔥', en: 'Save More with Best Prices & Offers on Trendyol 🔥' },
  'hero.subtitle': { ar: 'ادخل من خلال رابطنا واستخدم كود الخصم واستمتع بأفضل العروض.', en: 'Enter through our link, use our discount code, and enjoy the best offers.' },
  'hero.cta.shop': { ar: 'ابدأ التسوق الآن 🔥', en: 'Start Shopping Now 🔥' },
  'hero.cta.copy': { ar: 'نسخ كود الخصم 🎟️', en: 'Copy Discount Code 🎟️' },
  'hero.trust.secure': { ar: 'دفع آمن', en: 'Secure Payment' },
  'hero.trust.daily': { ar: 'عروض يومية', en: 'Daily Offers' },
  'hero.trust.support': { ar: 'دعم سريع', en: 'Fast Support' },
  
  // Popup Modal
  'popup.title': { ar: 'انسخ كود الخصم قبل ما تبدأ التسوق 🔥', en: 'Copy Discount Code Before Shopping 🔥' },
  'popup.button': { ar: 'نسخ الكود وابدأ التسوق', en: 'Copy Code & Start Shopping' },
  
  // Coupon Section
  'coupon.label': { ar: 'كود خصم حصري', en: 'Exclusive Discount Code' },
  'coupon.description': { ar: 'استخدم الكود عند إتمام الطلب للحصول على أفضل الأسعار', en: 'Use the code at checkout to get the best prices' },
  'coupon.btn.copy': { ar: 'نسخ الكود', en: 'Copy Code' },
  'coupon.btn.shop': { ar: 'ابدأ التسوق الآن', en: 'Start Shopping' },
  'coupon.badge.exclusive': { ar: 'حصري لمتابعينا', en: 'Exclusive for Followers' },
  'coupon.badge.easy': { ar: 'سهل الاستخدام', en: 'Easy to Use' },
  'coupon.badge.updated': { ar: 'عروض متجددة', en: 'Updated Offers' },
  
  // How It Works
  'howitworks.title': { ar: 'اطلب في أقل من دقيقة 🚀', en: 'Order in Less Than a Minute 🚀' },
  'howitworks.step1.title': { ar: 'انسخ كود الخصم', en: 'Copy Discount Code' },
  'howitworks.step1.desc': { ar: 'اضغط على زر نسخ الكود للحصول على الخصم الخاص.', en: 'Click the copy button to get your discount code.' },
  'howitworks.step2.title': { ar: 'افتح Trendyol', en: 'Open Trendyol' },
  'howitworks.step2.desc': { ar: 'ادخل من خلال رابطنا الرسمي واختر المنتجات اللي تعجبك.', en: 'Enter through our official link and choose your products.' },
  'howitworks.step3.title': { ar: 'أكمل الطلب', en: 'Complete Order' },
  'howitworks.step3.desc': { ar: 'أضف المنتجات للسلة واستخدم الكود أثناء الدفع.', en: 'Add products to cart and use the code at checkout.' },
  'howitworks.cta': { ar: 'ابدأ التسوق الآن 🔥', en: 'Start Shopping Now 🔥' },
  
  // Reviews Section
  'reviews.title': { ar: 'آراء العملاء 💜', en: 'Customer Reviews 💜' },
  'reviews.stat.rating': { ar: '⭐ 4.9/5 تقييم العملاء', en: '⭐ 4.9/5 Customer Rating' },
  'reviews.stat.orders': { ar: '+500 طلب مكتمل', en: '+500 Completed Orders' },
  'reviews.stat.happy': { ar: '+300 عميل سعيد', en: '+300 Happy Customers' },
  'reviews.stat.support': { ar: '⚡ دعم سريع', en: '⚡ Fast Support' },
  'reviews.review1': { ar: 'الطلب وصل بسرعة والكود اشتغل فعلًا 🔥', en: 'Order arrived quickly and the code worked perfectly 🔥' },
  'reviews.review2': { ar: 'أول مرة أطلب من Trendyol وكانت سهلة جدًا.', en: 'First time ordering from Trendyol and it was very easy.' },
  'reviews.review3': { ar: 'الأسعار كانت أقل من الأبلكيشن نفسه بسبب الكوبون 👌', en: 'Prices were lower than the app itself because of the coupon 👌' },
  'reviews.review4': { ar: 'الدعم ساعدني أكمل الطلب خطوة بخطوة.', en: 'Support helped me complete the order step by step.' },
  
  // Final CTA
  'finalcta.title': { ar: 'مستني ايه؟ وفّر أكتر مع عروض Trendyol الحصرية 🔥', en: 'What Are You Waiting For? Save More with Exclusive Trendyol Offers 🔥' },
  'finalcta.subtitle': { ar: 'العروض والكوبونات متاحة لفترة محدودة، ابدأ التسوق الآن بسهولة وأمان من خلال رابطنا.', en: 'Offers and coupons are available for a limited time. Start shopping now safely through our link.' },
  'finalcta.btn.shop': { ar: 'ابدأ التسوق الآن 🚀', en: 'Start Shopping Now 🚀' },
  'finalcta.btn.whatsapp': { ar: 'تواصل معنا على واتساب', en: 'Contact Us on WhatsApp' },
  'finalcta.trust.secure': { ar: '🔒 دفع آمن', en: '🔒 Secure Payment' },
  'finalcta.trust.support': { ar: '⚡ دعم سريع', en: '⚡ Fast Support' },
  'finalcta.trust.offers': { ar: '🎁 عروض يومية', en: '🎁 Daily Offers' },
  
  // Footer
  'footer.disclaimer': { ar: 'هذا الموقع غير تابع رسميًا لـ Trendyol', en: 'This website is not officially affiliated with Trendyol' },
  'footer.about': { ar: 'عنّا', en: 'About Us' },
  'footer.howtobuy': { ar: 'كيفية الطلب', en: 'How to Order' },
  'footer.faq': { ar: 'الأسئلة الشائعة', en: 'FAQ' },
  'footer.privacy': { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
  'footer.copyright': { ar: '© 2024 Trendyol Offers. جميع الحقوق محفوظة.', en: '© 2024 Trendyol Offers. All rights reserved.' },
  
  // About Us Section
  'about.title': { ar: 'عن Trendyol Offers', en: 'About Trendyol Offers' },
  'about.content': { ar: 'يساعدك Trendyol Offers على التسوق بسهولة من Trendyol باستخدام أكواد خصم حصرية وروابط موثوقة مباشرة.\nهدفنا هو جعل التسوق الإلكتروني أسهل وأسرع وأكثر اقتصادية لمستخدمي اللغة العربية.', en: 'Trendyol Offers helps users shop easily from Trendyol using exclusive coupon codes and direct trusted links.\nOur goal is to make online shopping simpler, faster, and more affordable for Arabic users.' },
  'about.team': { ar: 'فريق Trendyol Offers', en: 'Trendyol Offers Team' },
  
  // Why Choose Us
  'whychooseus.title': { ar: 'لماذا تختار Trendyol Offers؟', en: 'Why Choose Trendyol Offers?' },
  'whychooseus.card1.title': { ar: 'أكواد خصم حصرية', en: 'Exclusive Coupons' },
  'whychooseus.card1.desc': { ar: 'احصل على أفضل الأكواد والعروض الحصرية', en: 'Get the best exclusive codes and offers' },
  'whychooseus.card2.title': { ar: 'تسوق سهل', en: 'Easy Shopping' },
  'whychooseus.card2.desc': { ar: 'عملية بسيطة وسريعة من البداية للنهاية', en: 'Simple and fast process from start to finish' },
  'whychooseus.card3.title': { ar: 'دعم سريع', en: 'Fast Support' },
  'whychooseus.card3.desc': { ar: 'فريق دعم جاهز لمساعدتك في أي وقت', en: 'Support team ready to help you anytime' },
  'whychooseus.card4.title': { ar: 'روابط موثوقة', en: 'Trusted Links' },
  'whychooseus.card4.desc': { ar: 'روابط آمنة وموثوقة مباشرة من Trendyol', en: 'Safe and trusted links directly from Trendyol' },
  
  // FAQ Section
  'faq.title': { ar: 'الأسئلة الشائعة', en: 'Frequently Asked Questions' },
  'faq.q1': { ar: 'كيف أستخدم كود الخصم؟', en: 'How do I use the discount code?' },
  'faq.a1': { ar: 'انسخ كود الخصم قبل التسوق والصقه عند الدفع على Trendyol.', en: 'Copy the coupon code before shopping and paste it during checkout on Trendyol.' },
  'faq.q2': { ar: 'هل أدفع رسوم إضافية عند الطلب من خلال رابطك؟', en: 'Do I pay extra when ordering through your link?' },
  'faq.a2': { ar: 'لا، تدفع السعر العادي وأحياناً أقل باستخدام كود الخصم.', en: 'No, you pay the normal price and sometimes even less using the coupon code.' },
  'faq.q3': { ar: 'كيف يمكنني التواصل مع الدعم؟', en: 'How can I contact support?' },
  'faq.a3': { ar: 'يمكنك التواصل معنا في أي وقت عبر WhatsApp للحصول على المساعدة.', en: 'You can contact us anytime through WhatsApp for help with your order.' },
  'faq.q4': { ar: 'هل Trendyol Offers تابعة رسمياً لـ Trendyol؟', en: 'Is Trendyol Offers officially affiliated with Trendyol?' },
  'faq.a4': { ar: 'لا، هذه منصة ترويجية مستقلة تساعد المستخدمين على اكتشاف العروض والخصومات.', en: 'No, this is an independent promotional platform helping users discover offers and discounts.' },
  'faq.q5': { ar: 'هل أحتاج بطاقة فيزا للطلب؟', en: 'Do I need a Visa card to order?' },
  'faq.a5': { ar: 'نعم، Trendyol حالياً يتطلب الدفع عبر الإنترنت باستخدام Visa أو بطاقات أخرى مدعومة.', en: 'Yes, Trendyol currently requires online payment using Visa or other supported cards.' },
  'faq.q6': { ar: 'هل الكوبون سيعمل دائماً؟', en: 'Will the coupon always work?' },
  'faq.a6': { ar: 'قد تتغير الكوبونات حسب العروض الحالية وأهلية المنتجات.', en: 'Coupons may change depending on current offers and product eligibility.' },
  
  // Installment Payment Section
  'installment.title': { ar: 'خيارات دفع مرنة وتقسيط مريح 💳', en: 'Flexible Payment & Installment Options 💳' },
  'installment.subtitle': { ar: 'استمتع بالتسوق الآن وادفع بسهولة من خلال خدمات التقسيط المتاحة.', en: 'Shop now and pay easily using available installment services.' },
  'installment.tamara.title': { ar: 'ادفع على دفعات مع تمارا', en: 'Pay in installments with Tamara' },
  'installment.tabby.title': { ar: 'قسط مشترياتك بسهولة مع تابي', en: 'Split your payments easily with Tabby' },
  'installment.badge1': { ar: 'بدون فوائد', en: 'Interest-free' },
  'installment.badge2': { ar: 'موافقة سريعة', en: 'Fast approval' },
  'installment.badge3': { ar: 'دفع آمن', en: 'Secure payment' },
  
  // WhatsApp Community Section
  'whatsapp.community.title': { ar: 'انضم إلى قناتنا ليصلك كل جديد 🔥', en: 'Join Our Channel For The Latest Updates 🔥' },
  'whatsapp.community.subtitle': { ar: 'ادخل قناة الواتساب الخاصة بنا واحصل على أحدث عروض Trendyol والكوبونات الحصرية أول بأول.', en: 'Join our WhatsApp channel to receive the latest Trendyol offers and exclusive coupons instantly.' },
  'whatsapp.community.members': { ar: '+1000 عضو نشط', en: '+1000 Active Members' },
  'whatsapp.community.btn': { ar: 'انضم الآن على واتساب', en: 'Join WhatsApp Community' },
  'whatsapp.community.feature1': { ar: 'عروض حصرية', en: 'Exclusive Offers' },
  'whatsapp.community.feature2': { ar: 'تنبيهات فورية', en: 'Instant Alerts' },
  'whatsapp.community.feature3': { ar: 'كوبونات يومية', en: 'Daily Coupons' },
  'whatsapp.community.feature4': { ar: 'دعم ومساعدة', en: 'Fast Support' },
  
  // Notifications
  'notification.copied': { ar: 'تم نسخ الكود بنجاح! ✓', en: 'Code copied successfully! ✓' },
  'notification.error': { ar: 'حدث خطأ ما. حاول مرة أخرى.', en: 'Something went wrong. Please try again.' },

  // Additional Missing Translations
  'reviews.verified': { ar: 'عميل موثوق', en: 'Verified Customer' },
  'whatsapp.button.text': { ar: 'تواصل معنا', en: 'Contact Us' },
  'footer.quick_links': { ar: 'روابط سريعة', en: 'Quick Links' },
  'footer.contact_us': { ar: 'تواصل معنا', en: 'Contact Us' },
  'about.stats.orders': { ar: 'طلب مكتمل', en: 'Completed Orders' },
  'about.stats.happy': { ar: 'عميل سعيد', en: 'Happy Customers' },
  'about.stats.rating': { ar: 'تقييم', en: 'Rating' },
  'faq.more_questions': { ar: 'هل لديك سؤال آخر؟ تواصل معنا عبر WhatsApp', en: 'Have another question? Contact us via WhatsApp' },
  'faq.contact_now': { ar: '📱 تواصل معنا الآن', en: '📱 Contact Us Now' },
  'installment.tamara.desc1': { ar: 'ادفع على دفعات بدون فوائد', en: 'Pay in installments without interest' },
  'installment.tamara.desc2': { ar: 'موافقة فورية وسهلة', en: 'Instant and easy approval' },
  'installment.tamara.desc3': { ar: 'دفع آمن وموثوق', en: 'Safe and reliable payment' },
  'installment.tamara.cta': { ar: 'ابدأ الآن مع تمارا', en: 'Start now with Tamara' },
  'installment.tabby.desc1': { ar: 'قسط مشترياتك بسهولة', en: 'Split your payments easily' },
  'installment.tabby.desc2': { ar: 'بدون رسوم إضافية', en: 'No extra fees' },
  'installment.tabby.desc3': { ar: 'دفع آمن وسريع', en: 'Safe and fast payment' },
  'installment.tabby.cta': { ar: 'ابدأ الآن مع تابي', en: 'Start now with Tabby' },
  'whatsapp.community.badge': { ar: '✓ آمن وسهل الاستخدام • لا تحتاج لأي بيانات', en: '✓ Safe and easy to use • No data required' },
  'whatsapp.community.footer': { ar: '✓ انضم الآن واحصل على أحدث العروض والكوبونات أول بأول', en: '✓ Join now and get the latest offers and coupons instantly' },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem('language') as Language | null;
    const browserLanguage = navigator.language.startsWith('ar') ? 'ar' : 'en';
    const initialLanguage = savedLanguage || browserLanguage;
    
    setLanguageState(initialLanguage);
    document.documentElement.lang = initialLanguage;
    document.documentElement.dir = initialLanguage === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key: string): string => {
    // Direct lookup in flat translation object
    const translation = translations[key];
    
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    
    return translation[language] || translation.en || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isArabic: language === 'ar',
    isEnglish: language === 'en',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
