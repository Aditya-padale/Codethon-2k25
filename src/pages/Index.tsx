import Hero from "@/components/Hero";
import Rounds from "@/components/Rounds";
import Benefits from "@/components/Benefits";
import Rules from "@/components/Rules";
import Registration from "@/components/Registration";
import InstituteJourney from "@/components/InstituteJourney";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main content */}
      <main>
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
        <div id="registration">
          <Registration />
        </div>
      </main>
      
      <Footer />
      <Dock />
    </div>
  );
};

export default Index;
