import Hero from '@/components/Hero';
import NaturalBrainSection from '@/components/NaturalBrainSection';
import IngredientsSection from '@/components/IngredientsSection';
import DosageSection from '@/components/DosageSection';
import BrainNutritionSection from '@/components/BrainNutritionSection';
import SharperHumanLongerSection from '@/components/SharperHumanLongerSection';
import WhosThisForSection from '@/components/WhosThisForSection';
import CoffeeTwoSection from '@/components/CoffeeTwoSection';
import SynergisticBenefitsSection from '@/components/SynergisticBenefitsSection';
import ConsumptionSection from '@/components/ConsumptionSection';
import ReviewsSection from '@/components/ReviewsSection';
import QualityStandardsSection from '@/components/QualityStandardsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <NaturalBrainSection />
      <IngredientsSection />
      <DosageSection />
      <BrainNutritionSection />
      <WhosThisForSection />
      <CoffeeTwoSection />
      <SharperHumanLongerSection />
      <SynergisticBenefitsSection />
      <ConsumptionSection />
      <ReviewsSection />
      <QualityStandardsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
