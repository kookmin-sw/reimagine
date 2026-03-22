import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CampaignIntroSection from '../components/CampaignIntroSection';
import FutureVisionSection from '../components/FutureVisionSection';
import TimeFlowSection from '../components/TimeFlowSection';
import VoicesSection from '../components/VoicesSection';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CampaignIntroSection />
      <FutureVisionSection />
      <TimeFlowSection />
      <VoicesSection />
      <CTASection />
    </div>
  );
};

export default Home;