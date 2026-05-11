import { useCallback } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

const COUPON_CODE = 'ALAMLFW';
const AFFILIATE_LINK = 'https://ty.gl/5hyfobztm2xbr';
const WHATSAPP_LINK = 'https://wa.me/966510554765';
const WHATSAPP_COMMUNITY_LINK = 'https://chat.whatsapp.com/GTJW19b5FmL3W6nzV0LIV6?mode=gi_t';

/**
 * Fallback copy method for browsers that don't support navigator.clipboard
 */
const fallbackCopy = (text: string): boolean => {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch (error) {
    console.error('Fallback copy failed:', error);
    return false;
  }
};

export const useConversion = () => {
  const { t } = useLanguage();

  /**
   * Copy text to clipboard with fallback support for mobile browsers
   */
  const copyToClipboard = useCallback(
    async (text: string = COUPON_CODE): Promise<boolean> => {
      try {
        // Try modern clipboard API first
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
          toast.success(t('notification.copied'));
          return true;
        } else {
          // Fallback for non-secure contexts or older browsers
          const success = fallbackCopy(text);
          if (success) {
            toast.success(t('notification.copied'));
            return true;
          } else {
            console.warn('Copy failed - clipboard not available');
            return false;
          }
        }
      } catch (error) {
        console.error('Copy error:', error);
        // Try fallback if modern API fails
        const fallbackSuccess = fallbackCopy(text);
        if (fallbackSuccess) {
          toast.success(t('notification.copied'));
          return true;
        }
        return false;
      }
    },
    [t]
  );

  /**
   * Copy coupon code and redirect to affiliate link
   */
  const copyAndRedirect = useCallback(async () => {
    try {
      const copied = await copyToClipboard(COUPON_CODE);
      if (copied) {
        // Delay to allow toast to display
        setTimeout(() => {
          window.open(AFFILIATE_LINK, '_blank');
        }, 600);
      } else {
        // Even if copy fails, still redirect
        window.open(AFFILIATE_LINK, '_blank');
      }
    } catch (error) {
      console.error('Copy and redirect error:', error);
      // Fallback: just redirect
      window.open(AFFILIATE_LINK, '_blank');
    }
  }, [copyToClipboard]);

  /**
   * Open WhatsApp direct message
   */
  const openWhatsApp = useCallback(() => {
    try {
      window.open(WHATSAPP_LINK, '_blank');
    } catch (error) {
      console.error('WhatsApp open error:', error);
    }
  }, []);

  /**
   * Open WhatsApp community/group
   */
  const openWhatsAppCommunity = useCallback(() => {
    try {
      window.open(WHATSAPP_COMMUNITY_LINK, '_blank');
    } catch (error) {
      console.error('WhatsApp community open error:', error);
    }
  }, []);

  /**
   * Open Trendyol affiliate link
   */
  const openTrendyol = useCallback(() => {
    try {
      window.open(AFFILIATE_LINK, '_blank');
    } catch (error) {
      console.error('Trendyol open error:', error);
    }
  }, []);

  return {
    copyToClipboard,
    copyAndRedirect,
    openWhatsApp,
    openWhatsAppCommunity,
    openTrendyol,
    COUPON_CODE,
    AFFILIATE_LINK,
    WHATSAPP_LINK,
    WHATSAPP_COMMUNITY_LINK,
  };
};
