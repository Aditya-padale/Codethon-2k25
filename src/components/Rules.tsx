import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Users, Monitor, Clock, UserCheck } from "lucide-react";

const Rules = () => {
  const eligibilityRules = [
    {
      icon: Users,
      text: "Only B.Tech final year students are eligible",
      important: true
    },
    {
      icon: UserCheck,
      text: "Individual participation only"
    },
    {
      icon: Monitor,
      text: "Round I online, Rounds II & III offline"
    },
    {
      icon: CheckCircle,
      text: "Round I: MCQ-based assessment"
    },
    {
      icon: AlertCircle,
      text: "Round I is non-elimination"
    },
    {
      icon: Clock,
      text: "Absence in Round I leads to disqualification"
    },
    {
      icon: CheckCircle,
      text: "All Round I participants advance to Round II"
    },
    {
      icon: Monitor,
      text: "Round II: Coding challenge"
    },
    {
      icon: AlertCircle,
      text: "Round II is elimination round"
    },
    {
      icon: CheckCircle,
      text: "Round III: Final coding assessment"
    },
    {
      icon: Users,
      text: "Industry-level problems from CCTech"
    },
    {
      icon: CheckCircle,
      text: "Winners receive internship from CCTech"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Competition <span className="font-mono text-accent-primary">Rules</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto font-light">
            Guidelines for fair and professional competition
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 border-border backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-medium text-center text-foreground flex items-center justify-center gap-3">
                <AlertCircle className="w-6 h-6 text-accent-primary" />
                Eligibility & Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {eligibilityRules.map((rule, index) => {
                const IconComponent = rule.icon;
                return (
                  <div 
                    key={index} 
                    className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-muted/50 ${
                      rule.important ? 'bg-accent-primary/5 border border-accent-primary/20' : ''
                    }`}
                  >
                    <div className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      rule.important 
                        ? 'text-accent-primary' 
                        : IconComponent === CheckCircle 
                          ? 'text-accent-secondary' 
                          : IconComponent === AlertCircle 
                            ? 'text-accent-primary'
                            : 'text-neutral-400'
                    }`}>
                      <IconComponent className="w-full h-full" />
                    </div>
                    <p className={`text-sm leading-relaxed font-light ${
                      rule.important ? 'text-foreground font-medium' : 'text-neutral-300'
                    }`}>
                      {rule.text}
                    </p>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Notice */}
          <Card className="mt-8 bg-gradient-to-r from-accent-secondary/10 to-accent-primary/10 border-accent-secondary/20 backdrop-blur-sm">
            <CardContent className="py-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-accent-secondary" />
                  <h3 className="text-lg font-medium text-foreground">Code of Conduct</h3>
                </div>
                <p className="text-neutral-400 mb-6 font-light max-w-xl mx-auto">
                  Maintain the highest standards of integrity, professionalism, and sportsmanship throughout the competition.
                </p>
                <div className="flex flex-wrap justify-center gap-8 text-sm">
                  <span className="flex items-center gap-2 text-accent-secondary">
                    <CheckCircle className="w-4 h-4" />
                    Fair Play
                  </span>
                  <span className="flex items-center gap-2 text-accent-primary">
                    <Monitor className="w-4 h-4" />
                    Professional Environment
                  </span>
                  <span className="flex items-center gap-2 text-accent-secondary">
                    <Users className="w-4 h-4" />
                    Industry Standards
                  </span>
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