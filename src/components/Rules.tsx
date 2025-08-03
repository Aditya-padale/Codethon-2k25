import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Users, Monitor, Clock, UserCheck, BookOpen, Trophy, Shield, Star } from "lucide-react";

const Rules = () => {
  const keyRules = [
    {
      category: "Eligibility",
      icon: Users,
      color: "accent-primary",
      rules: [
        "Only B.Tech students graduating in 2026",
        "Individual participation only",
        "All engineering branches eligible"
      ]
    },
    {
      category: "Round Structure",
      icon: Monitor,
      color: "accent-secondary", 
      rules: [
        "Round I: Online MCQ Test (120 qualify)",
        "Round II: Offline Coding (50 qualify)",
        "Round III: Industry Problems by CCTech"
      ]
    },
    {
      category: "Important Rules",
      icon: AlertCircle,
      color: "red-400",
      rules: [
        "Absence in Round I = Elimination",
        "Round II & III conducted offline",
        "Registration deadline: 07 Sep 25"
      ]
    },
    {
      category: "Rewards",
      icon: Trophy,
      color: "yellow-400",
      rules: [
        "Internship cum placement opportunity",
        "Industry mentorship for winners",
        "National-level certificates"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            Competition <span className="font-mono text-accent-primary bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Rules</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Essential guidelines you must follow to participate
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-8" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Clean Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {keyRules.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="bg-card border border-border hover:border-accent-primary/50 transition-colors duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20">
                        <IconComponent className="w-5 h-5 text-accent-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {category.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {category.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent-secondary mt-2 flex-shrink-0" />
                          <span className="text-neutral-300 leading-relaxed font-medium">
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

          {/* Important Notice */}
          <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-2 border-red-500/30">
            <CardContent className="py-8 px-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-red-500/20 border border-red-500/40 flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    ⚠️ Critical Requirements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="text-lg font-semibold text-red-200">
                          Only B.Tech Final Year Students
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="text-lg font-semibold text-red-200">
                          Round I Attendance is Mandatory
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="text-lg font-semibold text-red-200">
                          Individual Participation Only
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="text-lg font-semibold text-red-200">
                          Follow Professional Standards
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competition Flow */}
          <div className="mt-12">
            <div className="text-center mb-16">
              <h3 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
                Competition <span className="font-mono text-accent-primary bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Flow</span>
              </h3>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
                Your journey through the three-round competition process
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-8" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center border-2 border-green-500/30 bg-green-500/5">
                <CardContent className="py-8">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-400">1</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Round I</h4>
                  <p className="text-green-300 font-medium mb-2">Online MCQ</p>
                  <p className="text-sm text-neutral-400">Non-elimination round</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-yellow-500/30 bg-yellow-500/5">
                <CardContent className="py-8">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 border-2 border-yellow-500/40 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-400">2</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Round II</h4>
                  <p className="text-yellow-300 font-medium mb-2">Offline Coding</p>
                  <p className="text-sm text-neutral-400">Elimination round</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-accent-primary/30 bg-accent-primary/5">
                <CardContent className="py-8">
                  <div className="w-12 h-12 rounded-full bg-accent-primary/20 border-2 border-accent-primary/40 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent-primary">3</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Round III</h4>
                  <p className="text-accent-primary font-medium mb-2">Final Assessment</p>
                  <p className="text-sm text-neutral-400">CCTech internship awaits!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;