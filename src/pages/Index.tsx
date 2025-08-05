import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import Rounds from "@/components/Rounds";
import Benefits from "@/components/Benefits";
import Rules from "@/components/Rules";
import Registration from "@/components/Registration";
import InstituteJourney from "@/components/InstituteJourney";
import PastEventGallery from "@/components/PastEventGallery";
import EventCalendarIntegration from "@/components/EventCalendarIntegration";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";
import BackToTop from "@/components/BackToTop";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Scroll to top when component mounts (page loads)
  useScrollToTop();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background m-0 p-0">
      <Header />
      
      {/* Main content */}
      <main className="m-0 p-0">
        <div id="hero">
          <Hero />
        </div>
        <div id="institute-journey">
          <InstituteJourney />
        </div>
        <div id="rounds">
          <Rounds />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <div id="rules">
          <Rules />
        </div>
        <div id="gallery">
          <PastEventGallery />
        </div>
        <div id="calendar">
          <EventCalendarIntegration />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="registration">
          <Registration />
        </div>
      </main>
      
      <Footer />
      <Dock />
      <BackToTop />
    </div>
  );
};

export default Index;
