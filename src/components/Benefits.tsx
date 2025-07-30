import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Briefcase, Building, Award, Zap, TrendingUp, Users, Target, Sparkles, Gift } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: "Internship Opportunity",
      description: "Winner receives guaranteed internship from industry partner",
      gradient: "from-blue-500/20 to-blue-600/10",
      iconColor: "text-blue-400"
    },
    {
      icon: Building,
      title: "Industry Exposure", 
      description: "Real-world insights and professional networking opportunities",
      gradient: "from-purple-500/20 to-purple-600/10",
      iconColor: "text-purple-400"
    },
    {
      icon: Award,
      title: "National Recognition",
      description: "Pan-India acknowledgment for coding excellence",
      gradient: "from-amber-500/20 to-amber-600/10", 
      iconColor: "text-amber-400"
    },
    {
      icon: Star,
      title: "Certification",
      description: "National level participation certificate for portfolio",
      gradient: "from-green-500/20 to-green-600/10",
      iconColor: "text-green-400"
    },
    {
      icon: Zap,
      title: "Skill Enhancement",
      description: "Advanced problem-solving and algorithmic thinking",
      gradient: "from-orange-500/20 to-orange-600/10",
      iconColor: "text-orange-400"
    },
    {
      icon: Users,
      title: "Network Building",
      description: "Connect with peers and industry professionals",
      gradient: "from-pink-500/20 to-pink-600/10",
      iconColor: "text-pink-400"
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Competitive programming experience for resume",
      gradient: "from-cyan-500/20 to-cyan-600/10",
      iconColor: "text-cyan-400"
    },
    {
      icon: Target,
      title: "Personal Growth", 
      description: "Challenge yourself and achieve new milestones",
      gradient: "from-indigo-500/20 to-indigo-600/10",
      iconColor: "text-indigo-400"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-transparent to-neutral-900/40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 border border-accent-secondary/20 rounded-full px-4 py-2 text-accent-secondary text-sm backdrop-blur-sm mb-6">
            <Gift className="w-4 h-4" />
            <span>Rewards & Benefits</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            Why <span className="font-mono text-accent-secondary bg-gradient-to-r from-accent-secondary to-accent-primary bg-clip-text text-transparent">Participate</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Unlock amazing opportunities and accelerate your career in technology
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-secondary to-transparent mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={benefit.title} className="group relative">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                <Card className="relative hover:scale-105 transition-all duration-500 bg-neutral-900/60 border-neutral-700/50 backdrop-blur-sm h-full group-hover:border-accent-primary/30 hover:shadow-2xl">
                  <CardHeader className="text-center pb-4 relative">
                    {/* Icon with enhanced styling */}
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${benefit.gradient} border border-neutral-600/50 flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative group-hover:border-accent-primary/30`}>
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${benefit.gradient} blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300`} />
                      <IconComponent className={`w-7 h-7 ${benefit.iconColor} relative z-10 group-hover:rotate-12 transition-transform duration-300`} />
                    </div>
                    
                    <CardTitle className="text-lg font-medium text-foreground group-hover:text-accent-primary transition-colors duration-300 mb-2">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </CardContent>
                  
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </Card>
              </div>
            );
          })}
        </div>

        {/* Enhanced Highlight Section */}
        <div className="text-center">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
            
            <Card className="relative max-w-5xl mx-auto bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 border border-accent-primary/30 backdrop-blur-sm group-hover:border-accent-primary/50 transition-all duration-500">
              <CardContent className="py-16 px-8">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="p-3 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30">
                    <Star className="w-8 h-8 text-accent-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light text-foreground">
                    <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">National Platform</span>
                  </h3>
                  <div className="p-3 rounded-full bg-gradient-to-r from-accent-secondary/20 to-accent-primary/20 border border-accent-secondary/30">
                    <Sparkles className="w-8 h-8 text-accent-secondary" />
                  </div>
                </div>
                
                <p className="text-xl text-neutral-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                  Showcase your skills on a national stage and accelerate your career in technology with industry recognition
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                  <div className="flex flex-col items-center gap-3 group/item hover:scale-105 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-accent-primary/20 to-accent-primary/10 border border-accent-primary/30 group-hover/item:border-accent-primary/50 transition-colors duration-300">
                      <Award className="w-6 h-6 text-accent-primary" />
                    </div>
                    <span className="text-neutral-300 font-medium">National Competition</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3 group/item hover:scale-105 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-accent-secondary/20 to-accent-secondary/10 border border-accent-secondary/30 group-hover/item:border-accent-secondary/50 transition-colors duration-300">
                      <Building className="w-6 h-6 text-accent-secondary" />
                    </div>
                    <span className="text-neutral-300 font-medium">Industry Partners</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3 group/item hover:scale-105 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 group-hover/item:border-accent-primary/50 transition-colors duration-300">
                      <Briefcase className="w-6 h-6 text-accent-primary" />
                    </div>
                    <span className="text-neutral-300 font-medium">Career Growth</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;