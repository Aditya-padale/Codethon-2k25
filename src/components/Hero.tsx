import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, Code, ArrowRight, Sparkles, Cpu, Terminal, ChevronDown } from "lucide-react";
import LogoImage from "@/img/logo.png";
import RightLogoImage from "@/img/right logo.png";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#institute-journey');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Consistent Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neutral-800/30 rounded-full blur-2xl" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent-primary/30 rounded-full animate-float" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent-secondary/40 rounded-full animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-accent-primary/20 rounded-full animate-float" style={{animationDelay: '4s'}} />
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-accent-secondary/30 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-60 left-1/3 w-1 h-1 bg-accent-primary/40 rounded-full animate-float" style={{animationDelay: '3s'}} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Custom Header Design */}
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="relative group">
              {/* Background container with gradient */}
              <div className="relative bg-gradient-to-r from-neutral-900/95 via-neutral-800/95 to-neutral-900/95 backdrop-blur-sm border border-neutral-700/50 rounded-xl px-8 py-6 hover:border-accent-primary/30 transition-all duration-300 overflow-hidden">
                
                {/* Top and bottom accent lines */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary"></div>

                {/* Main content - centered layout */}
                <div className="relative z-10 flex items-center justify-center gap-8">
                  
                  {/* Logo */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-xl"></div>
                    <div className="relative w-24 h-24 bg-white/95 rounded-full p-3 border-2 border-accent-primary/40 hover:border-accent-primary/70 transition-all duration-300 shadow-lg">
                      <img 
                        src={LogoImage} 
                        alt="ADCET Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* College Information - Centered */}
                  <div className="text-center flex-1">
                    <h3 className="text-red-400 text-base font-medium mb-1">
                      Sant Dnyaneshwar Shikshan Sanstha's
                    </h3>
                    <h2 className="text-red-500 text-lg font-bold mb-2">
                      Annasaheb Dange College of Engineering and Technology (ADCET), Ashta
                    </h2>
                    <p className="text-neutral-300 text-sm mb-1 leading-relaxed">
                      An Empowered Autonomous Institute, affiliated to Shivaji University, Kolhapur
                    </p>
                    <p className="text-neutral-300 text-sm mb-1">
                      Approved by AICTE, New Delhi & Govt. of Maharashtra
                    </p>
                    <div className="flex justify-center items-center gap-4 mt-2">
                      <p className="text-neutral-400 text-xs">
                        Accredited by NAAC 'A+' Grade, Bangalore
                      </p>
                      <span className="text-neutral-600">•</span>
                      <p className="text-accent-secondary text-xs font-medium">
                        Eligible Programs Accredited by NBA, New Delhi
                      </p>
                    </div>
                  </div>

                  {/* Empty Right Section */}
                  <div className="relative flex-shrink-0 w-16">
                    {/* Empty space for balance */}
                  </div>
                </div>

                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-3 left-3 w-1 h-1 bg-accent-primary rounded-full"></div>
                  <div className="absolute top-6 right-6 w-1 h-1 bg-accent-secondary rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-accent-primary rounded-full"></div>
                  <div className="absolute bottom-3 right-3 w-1 h-1 bg-accent-secondary rounded-full"></div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
          {/* Main Title */}
          <div className="space-y-6 relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent" />
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none">
              <span className="block font-mono text-accent-primary relative">
                <span className="relative z-10">Codathon</span>
                <div className="absolute inset-0 blur-2xl bg-accent-primary/20 scale-110" />
              </span>
              <span className="block text-7xl md:text-9xl font-mono text-accent-secondary mt-2 relative">
                <span className="relative z-10">2k25</span>
                <div className="absolute inset-0 blur-2xl bg-accent-secondary/20 scale-110" />
              </span>
            </h1>
            
            {/* Code-themed decorations */}
            <div className="absolute -right-10 top-10 opacity-30 hidden lg:block">
              <Cpu className="w-8 h-8 text-accent-primary animate-pulse" />
            </div>
            <div className="absolute -left-10 bottom-10 opacity-30 hidden lg:block">
              <Terminal className="w-6 h-6 text-accent-secondary animate-bounce" style={{animationDelay: '2s'}} />
            </div>
          </div>

          {/* Tagline */}
          <div className="relative">
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent font-medium">Unleash Your Inner Coder:</span>
              <br className="hidden md:inline" />
              <span className="text-neutral-400"> Compete, Create, Conquer</span>
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-accent-secondary to-transparent" />
          </div>
          
          {/* College Info */}
          <div className="space-y-4 pt-8 relative">
            <div className="bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 max-w-2xl mx-auto">
              <h2 className="text-lg md:text-xl font-medium text-foreground mb-2">
                Annasaheb Dange College of Engineering and Technology
              </h2>
              <p className="text-neutral-400 text-sm flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse" />
                Ashta • An Autonomous Institute
                <span className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-neutral-900/60 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 hover:border-accent-primary/30 transition-all duration-300 hover:transform hover:scale-105">
                <Calendar className="w-8 h-8 text-accent-primary mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-3xl font-light text-foreground mb-1">3</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Rounds</div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary/10 to-accent-primary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-neutral-900/60 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 hover:border-accent-secondary/30 transition-all duration-300 hover:transform hover:scale-105">
                <Code className="w-8 h-8 text-accent-secondary mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-2xl font-light text-foreground mb-1">C • Python • Java</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Languages</div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-neutral-900/60 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 hover:border-accent-primary/30 transition-all duration-300 hover:transform hover:scale-105">
                <Trophy className="w-8 h-8 text-accent-primary mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-3xl font-light text-foreground mb-1">Winner</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Internship</div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary/10 to-accent-primary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-neutral-900/60 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 hover:border-accent-secondary/30 transition-all duration-300 hover:transform hover:scale-105">
                <Users className="w-8 h-8 text-accent-secondary mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-3xl font-light text-foreground mb-1">B.Tech</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium">Final Year</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-20">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-70" />
              <Button 
                variant="default" 
                size="lg" 
                className="relative px-10 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-medium text-lg rounded-xl transition-all duration-300 group-hover:scale-105 shadow-xl"
                onClick={() => window.open('https://unstop.com/p/code-marathon-2k24-annasaheb-dange-college-of-engineering-and-technology-1151369', '_blank')}
              >
                Register Now
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            <div className="relative group">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-4 bg-transparent border-2 border-neutral-600 hover:border-accent-primary/50 text-neutral-200 hover:text-white font-medium text-lg rounded-xl transition-all duration-300 group-hover:scale-105 backdrop-blur-sm hover:bg-accent-primary/5"
                onClick={scrollToNextSection}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-accent-primary/30 to-transparent animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-px h-24 bg-gradient-to-b from-transparent via-accent-secondary/30 to-transparent animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-accent-primary/20 to-transparent animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-accent-secondary/20 to-transparent animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNextSection}
          className="flex flex-col items-center gap-2 text-neutral-400 hover:text-accent-primary transition-colors duration-300 group"
        >
          <span className="text-sm font-light">Explore</span>
          <div className="p-2 rounded-full border border-neutral-600 group-hover:border-accent-primary/50 transition-colors duration-300">
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;