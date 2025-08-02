import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Users, Monitor, Clock, UserCheck, BookOpen, Trophy } from "lucide-react";

const Rules = () => {
  const keyRules = [
    {
      category: "Eligibility",
      icon: Users,
      color: "accent-primary",
      rules: [
        "Only B.Tech final year students",
        "Individual participation only"
      ]
    },
    {
      category: "Format",
      icon: Monitor,
      color: "accent-secondary", 
      rules: [
        "Round I: Online MCQ (Non-elimination)",
        "Round II: Offline Coding (Elimination)",
        "Round III: Final Assessment"
      ]
    },
    {
      category: "Important",
      icon: AlertCircle,
      color: "red-400",
      rules: [
        "Absence in Round I = Disqualification",
        "All Round I participants advance",
        "Industry-level problems from CCTech"
      ]
    },
    {
      category: "Rewards",
      icon: Trophy,
      color: "yellow-400",
      rules: [
        "Winners get CCTech internship",
        "Professional certification"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Competition <span className="font-mono text-accent-primary">Rules</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto font-light">
            Essential guidelines for a fair and professional competition
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {keyRules.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="bg-card/60 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors`}>
                        <IconComponent className={`w-5 h-5 text-${category.color}`} />
                      </div>
                      <CardTitle className="text-lg font-medium text-foreground">
                        {category.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {category.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-accent-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-300 font-light leading-relaxed">
                            {rule}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Code of Conduct - Enhanced */}
          <Card className="bg-gradient-to-br from-accent-secondary/10 via-accent-primary/10 to-purple-500/10 border-accent-secondary/30 backdrop-blur-sm">
            <CardContent className="py-10 px-8">
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-accent-secondary/20">
                    <BookOpen className="w-7 h-7 text-accent-secondary" />
                  </div>
                  <h3 className="text-2xl font-medium text-foreground">Code of Conduct</h3>
                </div>
                <p className="text-neutral-300 mb-8 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                  Uphold the highest standards of integrity, professionalism, and sportsmanship throughout the competition.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-accent-secondary/10 border border-accent-secondary/20">
                    <CheckCircle className="w-5 h-5 text-accent-secondary" />
                    <span className="text-accent-secondary font-medium">Fair Play</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20">
                    <Monitor className="w-5 h-5 text-accent-primary" />
                    <span className="text-accent-primary font-medium">Professional Environment</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-accent-secondary/10 border border-accent-secondary/20">
                    <Users className="w-5 h-5 text-accent-secondary" />
                    <span className="text-accent-secondary font-medium">Industry Standards</span>
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

export default Rules;