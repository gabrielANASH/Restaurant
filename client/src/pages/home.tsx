import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import SignatureDishes from "@/components/signature-dishes";
import MenuSection from "@/components/menu-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="font-sans bg-soft-ivory text-gray-800">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SignatureDishes />
        <MenuSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
