import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CouponSection } from "@/components/CouponSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { InstallmentSection } from "@/components/InstallmentSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { WhatsAppCommunitySection } from "@/components/WhatsAppCommunitySection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Coupon Section */}
        <CouponSection />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Installment Payment Section */}
        <InstallmentSection />

        {/* Reviews */}
        <ReviewsSection />

        {/* WhatsApp Community Section */}
        <WhatsAppCommunitySection />

        {/* Final CTA */}
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
