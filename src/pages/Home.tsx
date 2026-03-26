import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CampaignIntroSection from '../components/CampaignIntroSection';
import FutureVisionSection from '../components/FutureVisionSection';
import TimeFlowSection from '../components/TimeFlowSection';
import VoicesSection from '../components/VoicesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const scrollToSectionWithOffset = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  const header = document.querySelector('header');

  if (!element) {
    return;
  }

  const headerOffset = header instanceof HTMLElement ? header.offsetHeight : 108;
  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top, behavior: 'smooth' });
};

type FadeInSectionProps = {
  children: React.ReactNode;
  delayMs?: number;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const node = ref.current;

    if (!node || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(36px)',
        filter: isVisible ? 'blur(0px)' : 'blur(8px)',
        transition: `opacity 800ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 950ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, filter 950ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
        willChange: 'opacity, transform, filter'
      }}
    >
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSectionWithOffset(sectionId);
      }, 100);
    }
  }, [location.hash]);

  return (
    <div>
      <Header />
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <div id="intro" className="h-0" aria-hidden="true" />
      <FadeInSection delayMs={40}>
        <CampaignIntroSection />
      </FadeInSection>
      <FadeInSection delayMs={60}>
        <FutureVisionSection />
      </FadeInSection>
      <FadeInSection delayMs={80}>
        <TimeFlowSection />
      </FadeInSection>
      <FadeInSection delayMs={100}>
        <VoicesSection />
      </FadeInSection>
      <FadeInSection delayMs={120}>
        <CTASection />
      </FadeInSection>
      <Footer />
    </div>
  );
};

export default Home;
