import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Award, GraduationCap, Building, Users, Trophy, Star, Sparkles, MapPin, BookOpen, Target, Zap } from "lucide-react";

const InstituteJourney = () => {
  const milestones = [
    { year: "1999", event: "Foundation", detail: "180 Intake - The Beginning", icon: Building, color: "from-blue-500/20 to-blue-600/20", iconColor: "text-blue-400" },
    { year: "2001", event: "CSE Added", detail: "240 Intake - Tech Revolution", icon: GraduationCap, color: "from-purple-500/20 to-purple-600/20", iconColor: "text-purple-400" },
    { year: "2004", event: "Electrical", detail: "300 Intake - Power Engineering", icon: Zap, color: "from-yellow-500/20 to-yellow-600/20", iconColor: "text-yellow-400" },
    { year: "2010", event: "Major Expansion", detail: "540 Intake - Civil & Mechanical", icon: Target, color: "from-green-500/20 to-green-600/20", iconColor: "text-green-400" },
    { year: "2010", event: "ISO 9001:2009", detail: "Quality Certification", icon: Award, color: "from-amber-500/20 to-amber-600/20", iconColor: "text-amber-400" },
    { year: "2011", event: "Growth", detail: "600 Intake - Scaling Excellence", icon: Users, color: "from-cyan-500/20 to-cyan-600/20", iconColor: "text-cyan-400" },
    { year: "2013", event: "Aeronautical", detail: "660 Intake - Sky High Dreams", icon: Star, color: "from-indigo-500/20 to-indigo-600/20", iconColor: "text-indigo-400" },
    { year: "2014", event: "NBA Accreditation", detail: "3 Courses - National Recognition", icon: Trophy, color: "from-orange-500/20 to-orange-600/20", iconColor: "text-orange-400" },
    { year: "2015", event: "NAAC A Grade", detail: "Academic Excellence", icon: Award, color: "from-rose-500/20 to-rose-600/20", iconColor: "text-rose-400" },
    { year: "2017", event: "Autonomous Status", detail: "Independent Excellence", icon: Building, color: "from-emerald-500/20 to-emerald-600/20", iconColor: "text-emerald-400" },
    { year: "2019", event: "NBA Aeronautical", detail: "Food Technology Added", icon: BookOpen, color: "from-teal-500/20 to-teal-600/20", iconColor: "text-teal-400" },
    { year: "2021", event: "Tech Revolution", detail: "AIDS, CSE, IoT, CS, BCT", icon: Sparkles, color: "from-violet-500/20 to-violet-600/20", iconColor: "text-violet-400" },
    { year: "2022", event: "Engineering", detail: "NBA Aeronautical", icon: Trophy, color: "from-pink-500/20 to-pink-600/20", iconColor: "text-pink-400" },
    { year: "2023", event: "NAAC A++", detail: "Pinnacle of Excellence", icon: Award, color: "from-red-500/20 to-red-600/20", iconColor: "text-red-400" }
  ];

  const achievements = [
    { number: "25+", label: "Years of Excellence", icon: Calendar, color: "text-accent-primary" },
    { number: "A++", label: "NAAC Grade", icon: Award, color: "text-accent-secondary" },
    { number: "NBA", label: "Accredited", icon: Trophy, color: "text-accent-primary" },
    { number: "1000+", label: "Students", icon: Users, color: "text-accent-secondary" },
    { number: "8", label: "Departments", icon: Building, color: "text-accent-primary" },
    { number: "100+", label: "Faculty", icon: GraduationCap, color: "text-accent-secondary" }
  ];

  return (
    <section id="institute-journey" className="py-32 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/30 to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-primary/3 to-accent-secondary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Enhanced Header */}
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 border border-accent-primary/20 rounded-full px-4 py-2 text-accent-primary text-sm backdrop-blur-sm mb-6">
            <MapPin className="w-4 h-4" />
            <span>Ashta, Sangli, Maharashtra</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            Institute <span className="font-mono text-accent-primary bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-4xl mx-auto font-light leading-relaxed">
            From humble beginnings to becoming Western Maharashtra's premier engineering institution - 
            A legacy of 25 years in shaping tomorrow's engineers
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-8" />
        </div>

        {/* Enhanced About Section */}
        <div className="mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-3xl blur-2xl opacity-60"></div>
          
          <Card className="relative max-w-6xl mx-auto bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 border border-accent-primary/30 backdrop-blur-sm overflow-hidden">
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
                  <p className="text-lg text-neutral-300 leading-relaxed font-light">
                    The <span className="text-accent-primary font-medium">Annasaheb Dange College of Engineering and Technology (ADCET)</span> stands as a beacon of 
                    excellence in Western Maharashtra, transforming ambitious minds into skilled engineers who drive innovation and progress.
                  </p>
                  <p className="text-neutral-400 leading-relaxed font-light">
                    Since 1999, we've maintained our commitment to academic excellence, research innovation, and holistic development, 
                    earning recognition as an <span className="text-accent-secondary font-medium">Autonomous Institute</span> affiliated with Shivaji University, Kolhapur.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border border-accent-primary/30 rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <Award className="w-8 h-8 text-accent-primary mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-sm font-medium text-accent-primary">NAAC A++</div>
                    <div className="text-xs text-neutral-400 mt-1">Accredited</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 border border-accent-secondary/30 rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <Trophy className="w-8 h-8 text-accent-secondary mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-sm font-medium text-accent-secondary">NBA</div>
                    <div className="text-xs text-neutral-400 mt-1">Accredited</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <Building className="w-8 h-8 text-accent-primary mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-sm font-medium text-accent-primary">Autonomous</div>
                    <div className="text-xs text-neutral-400 mt-1">Institute</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-secondary/20 to-accent-primary/20 border border-accent-secondary/30 rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <Star className="w-8 h-8 text-accent-secondary mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-sm font-medium text-accent-secondary">Premier</div>
                    <div className="text-xs text-neutral-400 mt-1">Institution</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Timeline Section with Visual Timeline */}
        <div className="mb-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 border border-accent-primary/20 rounded-full px-6 py-3 text-accent-primary text-sm backdrop-blur-sm mb-8">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">1999 - 2023 • Journey of Excellence</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <h3 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent">Milestones</span> of Excellence
            </h3>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Every step forward has been a <span className="text-accent-primary font-medium">testament to our unwavering commitment</span> to educational excellence, 
              innovation, and shaping the engineers of tomorrow
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent-primary/60"></div>
                <span>Major Achievements</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent-secondary/60"></div>
                <span>Academic Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
                <span>Excellence Recognition</span>
              </div>
            </div>
          </div>

          {/* Visual Timeline Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary opacity-30 hidden lg:block"></div>
            
            {/* Milestone Cards with Alternating Layout */}
            <div className="space-y-12 lg:space-y-20">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isEven = index % 2 === 0;
                const isAchievement = milestone.icon === Award || milestone.icon === Trophy;
                
                return (
                  <div key={index} className={`group relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-12 gap-8`}>
                    
                    {/* Timeline Dot (Hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${milestone.color} border-4 border-background group-hover:scale-150 transition-all duration-500 shadow-lg`}>
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${milestone.color} blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      </div>
                      
                      {/* Connecting Line Animation */}
                      <div className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'} w-24 h-0.5 bg-gradient-to-r ${milestone.color} opacity-0 group-hover:opacity-100 transition-all duration-500 ${isEven ? '' : 'transform rotate-180'}`}></div>
                    </div>

                    {/* Year Badge */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-3'} order-1`}>
                      <div className="relative group/year">
                        <div className={`absolute inset-0 bg-gradient-to-r ${milestone.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                        <div className={`relative bg-gradient-to-r ${milestone.color} rounded-2xl p-6 border border-neutral-700/50 backdrop-blur-sm group-hover:scale-110 transition-all duration-500 min-w-[120px] text-center`}>
                          <div className="text-3xl font-mono text-white font-bold mb-2 drop-shadow-lg">
                            {milestone.year}
                          </div>
                          <div className="text-xs text-white/80 font-medium">
                            {isAchievement ? '🏆 Achievement' : '📈 Growth'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Milestone Card */}
                    <div className={`${isEven ? 'lg:order-3' : 'lg:order-1'} order-2 flex-1 max-w-md`}>
                      <div className="group/card relative">
                        {/* Enhanced Glow Effect */}
                        <div className={`absolute -inset-2 bg-gradient-to-r ${milestone.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700`}></div>
                        
                        <Card className="relative hover:scale-105 transition-all duration-500 bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 border border-neutral-700/50 backdrop-blur-sm overflow-hidden group-hover:shadow-2xl">
                          {/* Card Accent Border */}
                          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${milestone.color}`}></div>
                          
                          <CardContent className="p-8">
                            {/* Icon and Title Row */}
                            <div className="flex items-start gap-4 mb-6">
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${milestone.color} border border-white/20 flex items-center justify-center group-hover/card:scale-110 group-hover/card:rotate-12 transition-all duration-300 shadow-lg`}>
                                <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                              </div>
                              
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-foreground mb-2 group-hover/card:text-accent-primary transition-colors duration-300">
                                  {milestone.event}
                                </h4>
                                {isAchievement && (
                                  <div className="inline-flex items-center gap-1 bg-accent-primary/20 text-accent-primary px-3 py-1 rounded-full text-xs font-medium border border-accent-primary/30">
                                    <Award className="w-3 h-3" />
                                    Recognition
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            {/* Description */}
                            <p className="text-neutral-400 leading-relaxed font-light mb-4 group-hover/card:text-neutral-300 transition-colors duration-300">
                              {milestone.detail}
                            </p>
                            
                            {/* Impact Metrics */}
                            <div className="flex items-center justify-between pt-4 border-t border-neutral-700/50">
                              <div className="flex items-center gap-2 text-xs text-neutral-500">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${milestone.color}`}></div>
                                <span>Milestone #{index + 1}</span>
                              </div>
                              
                              {milestone.year >= "2020" && (
                                <div className="flex items-center gap-1 text-xs text-accent-secondary">
                                  <Sparkles className="w-3 h-3" />
                                  <span>Recent Achievement</span>
                                </div>
                              )}
                            </div>
                          </CardContent>
                          
                          {/* Hover Effect Border */}
                          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${milestone.color} transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </Card>
                      </div>
                    </div>

                    {/* Spacer for even layout */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-2'} order-3 lg:block hidden flex-1`}></div>
                  </div>
                );
              })}
            </div>

            {/* Timeline Summary Stats */}
            <div className="mt-20 text-center">
              <Card className="max-w-4xl mx-auto bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 border border-accent-primary/30 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"></div>
                
                <CardContent className="py-12 px-8">
                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-light mb-4">
                      <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Journey Impact</span>
                    </h4>
                    <p className="text-neutral-400 font-light">From 180 students to 1000+ • From 1 course to 8 departments • From regional to national recognition</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-light text-accent-primary mb-2 group-hover:scale-110 transition-transform duration-300">14</div>
                      <div className="text-sm text-neutral-400 font-light">Major Milestones</div>
                    </div>
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-light text-accent-secondary mb-2 group-hover:scale-110 transition-transform duration-300">25</div>
                      <div className="text-sm text-neutral-400 font-light">Years Journey</div>
                    </div>
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-light text-accent-primary mb-2 group-hover:scale-110 transition-transform duration-300">5x</div>
                      <div className="text-sm text-neutral-400 font-light">Growth Rate</div>
                    </div>
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-light text-accent-secondary mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                      <div className="text-sm text-neutral-400 font-light">Future Potential</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Enhanced Achievements Section */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-3xl blur-2xl opacity-60"></div>
          
          <Card className="relative max-w-6xl mx-auto bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 border border-accent-primary/30 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary"></div>
            
            <CardContent className="py-16 px-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-light mb-4">
                  Our <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Achievements</span>
                </h3>
                <p className="text-neutral-400 font-light">Numbers that tell our story of excellence</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
                      <div className="mb-4">
                        <IconComponent className={`w-8 h-8 ${achievement.color} mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300`} />
                        <div className={`text-3xl md:text-4xl font-light ${achievement.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                          {achievement.number}
                        </div>
                      </div>
                      <div className="text-sm text-neutral-400 font-light group-hover:text-neutral-300 transition-colors duration-300">
                        {achievement.label}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Call to action */}
              <div className="mt-12 pt-8 border-t border-neutral-700/50">
                <p className="text-lg text-neutral-300 font-light mb-4">
                  Be part of this <span className="text-accent-primary font-medium">legacy of excellence</span>
                </p>
                <div className="flex justify-center gap-4">
                  <span className="bg-gradient-to-r from-accent-primary/20 to-accent-primary/10 text-accent-primary px-6 py-3 rounded-full text-sm font-medium border border-accent-primary/30">
                    🎓 Shaping Engineers
                  </span>
                  <span className="bg-gradient-to-r from-accent-secondary/20 to-accent-secondary/10 text-accent-secondary px-6 py-3 rounded-full text-sm font-medium border border-accent-secondary/30">
                    🚀 Building Future
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

export default InstituteJourney;