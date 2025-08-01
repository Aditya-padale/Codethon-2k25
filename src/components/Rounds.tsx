import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Sword, Crown, Monitor, Code2, Trophy, ChevronRight, Zap } from "lucide-react";

const Rounds = () => {
  const rounds = [
    {
      title: "Training Ground",
      icon: Brain,
      description: "Build your foundation",
      features: [
        "Online MCQ Test",
        "Basic C++ concepts", 
        "Non-elimination round"
      ],
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Battle Arena", 
      icon: Sword,
      description: "Prove your skills",
      features: [
        "Offline coding at campus",
        "DSA and problem-solving",
        "Qualifying round"
      ],
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-400", 
      borderColor: "border-purple-500/30"
    },
    {
      title: "Victory Quest",
      icon: Crown,
      description: "Claim your victory", 
      features: [
        "Final coding round",
        "Industry problems",
        "Internship opportunity"
      ],
      color: "from-amber-500/20 to-amber-600/20",
      iconColor: "text-amber-400",
      borderColor: "border-amber-500/30"
    }
  ];

  return (
    <section className="py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-transparent" />
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 border border-accent-primary/20 rounded-full px-4 py-2 text-accent-primary text-sm backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4" />
            <span>Competition Structure</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            Competition <span className="font-mono text-accent-primary bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Rounds</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Three carefully crafted stages designed to test and enhance your coding abilities
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {rounds.map((round, index) => {
            const IconComponent = round.icon;
            return (
              <div key={round.title} className="group relative">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${round.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                <Card className={`relative hover:scale-105 transition-all duration-500 bg-card/80 border ${round.borderColor} backdrop-blur-sm h-full overflow-hidden group-hover:shadow-2xl`}>
                  {/* Card header with improved styling */}
                  <CardHeader className="text-center pb-6 relative">
                    {/* Round number badge */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                    
                    {/* Icon with enhanced styling */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${round.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative`}>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${round.color} blur-md opacity-50`} />
                      <IconComponent className={`w-8 h-8 ${round.iconColor} relative z-10 group-hover:rotate-12 transition-transform duration-300`} />
                    </div>
                    
                    <CardTitle className="text-2xl font-medium text-foreground mb-3 group-hover:text-accent-primary transition-colors duration-300">
                      {round.title}
                    </CardTitle>
                    <p className="text-neutral-400 font-light text-lg">
                      {round.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 pt-0">
                    {round.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-200">
                        <div className="flex-shrink-0">
                          <ChevronRight className="w-4 h-4 text-accent-secondary group-hover/item:text-accent-primary transition-colors duration-200" />
                        </div>
                        <p className="text-neutral-300 font-light group-hover/item:text-neutral-200 transition-colors duration-200">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${round.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </Card>
              </div>
            );
          })}
        </div>

        {/* Enhanced Process Flow */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-medium text-foreground mb-8">Competition Journey</h3>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-3 text-neutral-300 group hover:text-accent-primary transition-colors duration-300">
                <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Monitor className="w-6 h-6" />
                </div>
                <span className="font-medium">Online Test</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-px bg-gradient-to-r from-accent-primary to-accent-secondary" />
                <ChevronRight className="w-5 h-5 text-accent-primary animate-pulse" />
                <div className="w-12 h-px bg-gradient-to-r from-accent-primary to-accent-secondary" />
              </div>
              
              <div className="flex items-center gap-3 text-neutral-300 group hover:text-accent-secondary transition-colors duration-300">
                <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30 group-hover:bg-purple-500/30 transition-colors duration-300">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="font-medium">Campus Coding</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-px bg-gradient-to-r from-accent-secondary to-accent-primary" />
                <ChevronRight className="w-5 h-5 text-accent-secondary animate-pulse" style={{animationDelay: '1s'}} />
                <div className="w-12 h-px bg-gradient-to-r from-accent-secondary to-accent-primary" />
              </div>
              
              <div className="flex items-center gap-3 text-neutral-300 group hover:text-amber-400 transition-colors duration-300">
                <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/30 group-hover:bg-amber-500/30 transition-colors duration-300">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="font-medium">Final Victory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rounds;