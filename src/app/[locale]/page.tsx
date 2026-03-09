import { Hero } from '@/components/home/hero';
import { About } from '@/components/home/about';
import { Diagnostic } from '@/components/home/diagnostic';
import { Treatments } from '@/components/home/treatments';
import { Team } from '@/components/home/team';
import { Cases } from '@/components/home/cases';
import { Faq } from '@/components/home/faq';
import { BookingSection } from '@/components/home/booking-section';
import { FinalCta } from '@/components/home/cta';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <About />
      <Diagnostic />
      <Treatments />
      <Team />
      <Cases />
      <Faq />
      <BookingSection />
      <FinalCta />
    </div>
  );
}
