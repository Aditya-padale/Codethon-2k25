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
          <div className="relative inline-block p-[1px] rounded-full mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary">
            <div className="inline-flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 text-accent-primary text-sm">
              <Zap className="w-5 h-5" />
              <span className="font-medium">Competition Structure</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            Competition <span className="font-mono text-accent-primary bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Rounds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
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
                
                <Card className={`relative hover:scale-105 transition-all duration-500 bg-card/80 border ${round.borderColor} backdrop-blur-sm h-full group-hover:shadow-2xl`}>
                  {/* Card header with improved styling */}
                  <CardHeader className="text-center pb-6 relative">
                    {/* Round number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg z-10">
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
                    <p className="text-muted-foreground font-light text-lg">
                      {round.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 pt-0">
                    {round.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-200">
                        <div className="flex-shrink-0">
                          <ChevronRight className="w-4 h-4 text-accent-secondary group-hover/item:text-accent-primary transition-colors duration-200" />
                        </div>
                        <p className="text-muted-foreground font-light group-hover/item:text-foreground/90 transition-colors duration-200">
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
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-3xl blur-2xl opacity-50 dark:opacity-60 group-hover:opacity-75 dark:group-hover:opacity-100 transition-all duration-500" />
            
            <Card className="relative max-w-5xl mx-auto bg-card/95 border border-accent-primary/30 backdrop-blur-sm group-hover:border-accent-primary/50 transition-all duration-500 overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"></div>
              
              <CardContent className="py-12 px-8">
                <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="p-3 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30">
                    <Trophy className="w-8 h-8 text-accent-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light text-foreground">Competition <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent font-medium">Journey</span></h3>
                  <div className="p-3 rounded-full bg-gradient-to-r from-accent-secondary/20 to-accent-primary/20 border border-accent-secondary/30">
                    <Zap className="w-8 h-8 text-accent-secondary" />
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                  Your path to success through three carefully designed stages
                </p>
                
                <div className="flex items-center justify-center flex-wrap gap-6 md:gap-12">
                  {/* Online Test */}
                  <div className="flex flex-col items-center group/item hover:scale-105 transition-all duration-300">
                    <div className="relative mb-4">
                      <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 group-hover/item:border-blue-400/50 group-hover/item:bg-blue-500/30 transition-all duration-300">
                        <Monitor className="w-8 h-8 text-blue-400 group-hover/item:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <span className="text-foreground/90 font-medium group-hover/item:text-blue-400 transition-colors duration-300">Online Test</span>
                    <span className="text-xs text-muted-foreground/80 mt-1">MCQ Round</span>
                  </div>
                  
                  {/* Arrow 1 */}
                  <div className="hidden md:flex items-center gap-3">
                    <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    <ChevronRight className="w-6 h-6 text-accent-primary animate-pulse" />
                    <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  </div>
                  
                  {/* Campus Coding */}
                  <div className="flex flex-col items-center group/item hover:scale-105 transition-all duration-300">
                    <div className="relative mb-4">
                      <div className="absolute -inset-2 bg-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 group-hover/item:border-purple-400/50 group-hover/item:bg-purple-500/30 transition-all duration-300">
                        <Code2 className="w-8 h-8 text-purple-400 group-hover/item:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <span className="text-foreground/90 font-medium group-hover/item:text-purple-400 transition-colors duration-300">Campus Coding</span>
                    <span className="text-xs text-muted-foreground/80 mt-1">DSA Challenge</span>
                  </div>
                  
                  {/* Arrow 2 */}
                  <div className="hidden md:flex items-center gap-3">
                    <div className="w-16 h-px bg-gradient-to-r from-purple-400 to-amber-400"></div>
                    <ChevronRight className="w-6 h-6 text-accent-secondary animate-pulse" style={{animationDelay: '1s'}} />
                    <div className="w-16 h-px bg-gradient-to-r from-purple-400 to-amber-400"></div>
                  </div>
                  
                  {/* Final Victory */}
                  <div className="flex flex-col items-center group/item hover:scale-105 transition-all duration-300">
                    <div className="relative mb-4">
                      <div className="absolute -inset-2 bg-amber-500/20 rounded-2xl blur-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 group-hover/item:border-amber-400/50 group-hover/item:bg-amber-500/30 transition-all duration-300">
                        <Trophy className="w-8 h-8 text-amber-400 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300" />
                      </div>
                    </div>
                    <span className="text-foreground/90 font-medium group-hover/item:text-amber-400 transition-colors duration-300">Final Victory</span>
                    <span className="text-xs text-muted-foreground/80 mt-1">Win Internship</span>
                  </div>
                </div>
                
                {/* Bottom accent */}
                <div className="pt-8 mt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground font-light">
                    Progress through each stage to unlock amazing opportunities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rounds;