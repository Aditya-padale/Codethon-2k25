import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Award, Trophy, Star, Sparkles, MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InstituteJourney = () => {
  const navigate = useNavigate();

  return (
    <section id="institute-journey" className="py-32 relative overflow-hidden">
      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(249, 115, 22, 0.4); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl animate-pulse animate-float" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl animate-pulse animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-primary/3 to-accent-secondary/3 rounded-full blur-3xl animate-glow-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Enhanced Header
        <div className="text-center mb-24 animate-slide-up">
          <button 
            onClick={() => window.open('https://maps.google.com/?q=Annasaheb+Dange+College+of+Engineering+and+Technology+Ashta+Sangli+Maharashtra', '_blank')}
            className="relative inline-block p-[1px] rounded-full mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary hover:scale-105 transition-all duration-300 group"
          >
            <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 text-accent-primary text-sm group-hover:bg-background/90 group-hover:text-accent-primary/90 transition-all duration-300">
              <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Ashta, Sangli, Maharashtra</span>
              <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </button> */}
          {/* <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            About <span className="font-mono bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">ADCET</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            From humble beginnings to becoming Western Maharashtra's premier engineering institution - 
            A legacy of 25 years in shaping tomorrow's engineers
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-8" /> */}
        {/* </div> */}

        {/* Enhanced About Section */}
        <div className="mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-3xl blur-2xl opacity-50 dark:opacity-60"></div>
          
          <Card className="relative max-w-6xl mx-auto bg-card/98 border border-accent-primary/30 backdrop-blur-sm overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"></div>
            
            <CardHeader className="text-center pt-12 pb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30">
                  <Building className="w-8 h-8 text-accent-primary" />
                </div>
                <CardTitle className="text-3xl font-light">
                  About <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent font-medium">ADCET</span>
                </CardTitle>
                <div className="p-3 rounded-full bg-gradient-to-r from-accent-secondary/20 to-accent-primary/20 border border-accent-secondary/30">
                  <Sparkles className="w-8 h-8 text-accent-secondary" />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="px-12 pb-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-foreground/90 leading-relaxed font-light">
                    The <span className="text-accent-primary font-medium">Annasaheb Dange College of Engineering and Technology (ADCET)</span> stands as a beacon of 
                    excellence in Western Maharashtra, transforming ambitious minds into skilled engineers who drive innovation and progress.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    Since 1999, we've maintained our commitment to academic excellence, research innovation, and holistic development, 
                    earning recognition as an <span className="text-accent-secondary font-medium">Autonomous Institute</span> affiliated with Shivaji University, Kolhapur.
                  </p>
                  
                  {/* More Info Button */}
                  <div className="pt-6">
                    <button
                      onClick={() => navigate('/college-info')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-full hover:scale-105 transition-all duration-300 group font-medium"
                    >
                      <span>More College Info</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-accent-primary/30 to-accent-primary/20 dark:from-accent-primary/20 dark:to-accent-primary/10 border border-accent-primary/40 dark:border-accent-primary/30 rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300 shadow-md">
                    <Award className="w-8 h-8 text-accent-primary mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-sm font-medium text-accent-primary">NAAC A++</div>
                    <div className="text-xs text-muted-foreground mt-1">Accredited</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-secondary/30 to-accent-secondary/20 dark:from-accent-secondary/20 dark:to-accent-secondary/10 border border-accent-secondary/40 dark:border-accent-secondary/30 rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300 shadow-md">
                    <Trophy className="w-8 h-8 text-accent-secondary mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-sm font-medium text-accent-secondary">NBA</div>
                    <div className="text-xs text-muted-foreground mt-1">Accredited</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-primary/25 to-accent-secondary/25 dark:from-accent-primary/20 dark:to-accent-secondary/20 border border-accent-primary/40 dark:border-accent-primary/30 rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300 shadow-md">
                    <Building className="w-8 h-8 text-accent-primary mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-sm font-medium text-accent-primary">Autonomous</div>
                    <div className="text-xs text-muted-foreground mt-1">Institute</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-secondary/25 to-accent-primary/25 dark:from-accent-secondary/20 dark:to-accent-primary/20 border border-accent-secondary/40 dark:border-accent-secondary/30 rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300 shadow-md">
                    <Star className="w-8 h-8 text-accent-secondary mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-sm font-medium text-accent-secondary">Premier</div>
                    <div className="text-xs text-muted-foreground mt-1">Institution</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstituteJourney;
