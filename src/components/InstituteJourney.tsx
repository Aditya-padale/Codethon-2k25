import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Award, GraduationCap, Building, Users, Trophy, Star, Sparkles, MapPin, BookOpen, Target, Zap, Rocket, Code, Cpu, ArrowRight, TrendingUp } from "lucide-react";

const InstituteJourney = () => {
  // Organized milestones in proper chronological order with better data structure
  const milestones = [
    { 
      year: "1999", 
      event: "Foundation Established", 
      detail: "ADCET founded with 180 student intake - The Beginning of Excellence", 
      icon: Building, 
      category: "establishment",
      students: "180",
      highlight: "Genesis"
    },
    { 
      year: "2001", 
      event: "Computer Science Department", 
      detail: "CSE Department added - 240 total intake - Tech Revolution begins", 
      icon: Code, 
      category: "expansion",
      students: "240",
      highlight: "Tech Era"
    },
    { 
      year: "2004", 
      event: "Electrical Engineering", 
      detail: "Electrical Department launched - 300 total intake - Power Engineering", 
      icon: Zap, 
      category: "expansion",
      students: "300",
      highlight: "Power Up"
    },
    { 
      year: "2010", 
      event: "Major Infrastructure Expansion", 
      detail: "Civil & Mechanical Departments added - 540 total intake", 
      icon: Target, 
      category: "expansion",
      students: "540",
      highlight: "Growth"
    },
    { 
      year: "2010", 
      event: "ISO 9001:2008 Certification", 
      detail: "International Quality Management System Certification", 
      icon: Award, 
      category: "achievement",
      students: "540",
      highlight: "Quality"
    },
    { 
      year: "2011", 
      event: "Continued Growth", 
      detail: "Student intake increased to 600 - Scaling Excellence", 
      icon: Users, 
      category: "expansion",
      students: "600",
      highlight: "Scale"
    },
    { 
      year: "2013", 
      event: "Aeronautical Engineering", 
      detail: "Aeronautical Department launched - 660 total intake - Sky High Dreams", 
      icon: Rocket, 
      category: "expansion",
      students: "660",
      highlight: "Sky High"
    },
    { 
      year: "2014", 
      event: "NBA Accreditation", 
      detail: "First NBA Accreditation for 3 Engineering Programs - National Recognition", 
      icon: Trophy, 
      category: "achievement",
      students: "660",
      highlight: "Recognition"
    },
    { 
      year: "2015", 
      event: "NAAC A Grade", 
      detail: "First NAAC Accreditation with A Grade - Academic Excellence", 
      icon: Award, 
      category: "achievement",
      students: "660",
      highlight: "Excellence"
    },
    { 
      year: "2017", 
      event: "Autonomous Status", 
      detail: "Achieved Autonomous Status - Independent Academic Excellence", 
      icon: Star, 
      category: "achievement",
      students: "720",
      highlight: "Autonomy"
    },
    { 
      year: "2019", 
      event: "Food Technology & NBA Extension", 
      detail: "Food Technology Department added & NBA Accreditation for Aeronautical", 
      icon: BookOpen, 
      category: "expansion",
      students: "780",
      highlight: "Innovation"
    },
    { 
      year: "2021", 
      event: "Technology Revolution", 
      detail: "AI&DS, CSE, IoT, Computer Science & BCT Departments - Future Ready", 
      icon: Cpu, 
      category: "expansion",
      students: "1000",
      highlight: "Future"
    },
    { 
      year: "2022", 
      event: "Engineering Excellence", 
      detail: "Enhanced NBA Accreditation for Aeronautical Engineering", 
      icon: Trophy, 
      category: "achievement",
      students: "1100",
      highlight: "Enhanced"
    },
    { 
      year: "2023", 
      event: "NAAC A++ Grade", 
      detail: "Highest NAAC A++ Grade Achieved - Pinnacle of Excellence", 
      icon: Award, 
      category: "achievement",
      students: "1200+",
      highlight: "Pinnacle"
    }
  ];

  const achievements = [
    { number: "26+", label: "Years of Excellence", icon: Calendar, color: "text-accent-primary" },
    { number: "A++", label: "NAAC Grade", icon: Award, color: "text-accent-secondary" },
    { number: "NBA", label: "Accredited Programs", icon: Trophy, color: "text-accent-primary" },
    { number: "1200+", label: "Current Students", icon: Users, color: "text-accent-secondary" },
    { number: "10+", label: "Departments", icon: Building, color: "text-accent-primary" },
    { number: "150+", label: "Expert Faculty", icon: GraduationCap, color: "text-accent-secondary" }
  ];

  return (
    <section id="institute-journey" className="py-32 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-primary/3 to-accent-secondary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Enhanced Header */}
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
          </button>
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            Institute <span className="font-mono bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Journey</span>
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
          
          <Card className="relative max-w-6xl mx-auto bg-card/90 border border-accent-primary/30 backdrop-blur-sm overflow-hidden">
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

        {/* Modern Vertical Timeline Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="relative inline-block p-[1px] rounded-full mb-8 bg-gradient-to-r from-accent-primary to-accent-secondary">
              <div className="inline-flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 text-accent-primary text-sm">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Growth Timeline • 1999 - 2025</span>
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
            </div>
            <h3 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              Journey of <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent">Excellence</span>
            </h3>
            <p className="text-xl text-neutral-400 max-w-4xl mx-auto font-light leading-relaxed mb-12">
              From <span className="text-accent-primary font-medium">180 students to 1200+</span> • 
              A testament to <span className="text-accent-secondary font-medium">continuous innovation and growth</span>
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-6xl mx-auto relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary h-full rounded-full opacity-30"></div>
            
            {/* Animated Progress Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary h-full rounded-full animate-pulse shadow-lg shadow-accent-primary/50"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={index} className="relative group">
                    {/* Central Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                      <div className="relative">
                        {/* Pulsing Ring Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/30 to-accent-secondary/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-accent-primary/40 to-accent-secondary/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Main Node */}
                        <div className="relative w-16 h-16 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full border-4 border-background shadow-2xl flex items-center justify-center group-hover:scale-125 transition-all duration-500 z-10">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Year Badge */}
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold text-sm px-3 py-1 rounded-lg shadow-lg">
                            {milestone.year}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`flex ${isLeft ? 'justify-start pr-8' : 'justify-end pl-8'} items-center min-h-[200px]`}>
                      <div className={`w-full max-w-md ${isLeft ? 'mr-16' : 'ml-16'}`}>
                        <Card className={`relative bg-card/95 border backdrop-blur-sm overflow-hidden group-hover:scale-105 transition-all duration-500 ${
                          milestone.category === 'achievement' 
                            ? 'border-amber-500/30 shadow-lg shadow-amber-500/10' 
                            : 'border-blue-500/30 shadow-lg shadow-blue-500/10'
                        }`}>
                          {/* Top Gradient Bar */}
                          <div className={`h-1 ${
                            milestone.category === 'achievement' 
                              ? 'bg-gradient-to-r from-amber-500 to-yellow-500' 
                              : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          }`} />
                          
                          <CardContent className="p-6">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                    milestone.category === 'achievement' 
                                      ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30' 
                                      : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30'
                                  }`}>
                                    <IconComponent className={`w-5 h-5 ${
                                      milestone.category === 'achievement' ? 'text-amber-400' : 'text-blue-400'
                                    }`} />
                                  </div>
                                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                                    milestone.category === 'achievement' 
                                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                  }`}>
                                    {milestone.category === 'achievement' ? '🏆 Achievement' : '📈 Expansion'}
                                  </div>
                                </div>
                                
                                <h4 className="text-lg font-semibold text-black mb-2">
                                  {milestone.event}
                                </h4>
                                
                                <p className="flex items-center gap-2 text-accent-primary text-sm leading-relaxed">
                                  {milestone.detail}
                                </p>
                              </div>
                            </div>

                            {/* Stats Section */}
                            <div className="flex items-center justify-between pt-4 border-t border-neutral-700/50">
                              <div className="flex items-center gap-4">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-accent-primary">
                                    {milestone.students}
                                  </div>
                                  <div className="text-xs text-neutral-400">Students</div>
                                </div>
                                
                                <div className="w-px h-8 bg-neutral-700"></div>
                                
                                <div className="text-center">
                                  <div className={`text-sm font-medium ${
                                    milestone.category === 'achievement' ? 'text-amber-400' : 'text-blue-400'
                                  }`}>
                                    {milestone.highlight}
                                  </div>
                                  <div className="text-xs text-neutral-400">Era</div>
                                </div>
                              </div>
                              
                              <ArrowRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                                isLeft ? 'rotate-0' : 'rotate-180'
                              } ${milestone.category === 'achievement' ? 'text-amber-400' : 'text-blue-400'}`} />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Future Milestone */}
            <div className="relative group mt-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full animate-pulse"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-primary/30 to-accent-secondary/30 rounded-full border-4 border-dashed border-accent-primary/50 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-accent-primary animate-pulse" />
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-accent-primary/30 to-accent-secondary/30 text-accent-primary font-bold text-sm px-3 py-1 rounded-lg border border-accent-primary/30">
                      2025+
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center items-center min-h-[150px]">
                <Card className="relative bg-card/50 border border-accent-primary/20 backdrop-blur-sm max-w-md">
                  <div className="h-1 bg-gradient-to-r from-accent-primary/50 to-accent-secondary/50" />
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-accent-primary mb-2">
                      Future Awaits
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      The journey continues with endless possibilities for innovation, growth, and excellence in engineering education.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Timeline Summary with Growth Metrics */}
        <div className="mb-32">
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-3xl blur-3xl"></div>
              
              <Card className="relative max-w-7xl mx-auto bg-card/95 border border-accent-primary/30 backdrop-blur-sm overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"></div>
                
                <CardContent className="py-16 px-12">
                  <div className="text-center mb-12">
                    <h4 className="text-3xl md:text-4xl font-light mb-6">
                      <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Growth Trajectory</span>
                    </h4>
                    <p className="text-xl text-neutral-300 font-light max-w-4xl mx-auto leading-relaxed">
                      A visual representation of our <span className="text-accent-primary font-medium">exponential growth</span> and commitment to excellence
                    </p>
                  </div>
                  
                  {/* Growth Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="relative mb-4">
                        <div className="absolute -inset-2 bg-accent-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border border-accent-primary/30 rounded-2xl flex items-center justify-center">
                          <Building className="w-8 h-8 text-accent-primary" />
                        </div>
                      </div>
                      <div className="text-4xl font-light text-accent-primary mb-2 group-hover:scale-110 transition-transform duration-300">26</div>
                      <div className="text-sm text-neutral-400 font-light">Years of Excellence</div>
                    </div>
                    
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="relative mb-4">
                        <div className="absolute -inset-2 bg-accent-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 border border-accent-secondary/30 rounded-2xl flex items-center justify-center">
                          <TrendingUp className="w-8 h-8 text-accent-secondary" />
                        </div>
                      </div>
                      <div className="text-4xl font-light text-accent-secondary mb-2 group-hover:scale-110 transition-transform duration-300">7x</div>
                      <div className="text-sm text-neutral-400 font-light">Student Growth</div>
                    </div>
                    
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="relative mb-4">
                        <div className="absolute -inset-2 bg-accent-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border border-accent-primary/30 rounded-2xl flex items-center justify-center">
                          <Award className="w-8 h-8 text-accent-primary" />
                        </div>
                      </div>
                      <div className="text-4xl font-light text-accent-primary mb-2 group-hover:scale-110 transition-transform duration-300">14</div>
                      <div className="text-sm text-neutral-400 font-light">Major Milestones</div>
                    </div>
                    
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="relative mb-4">
                        <div className="absolute -inset-2 bg-accent-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 border border-accent-secondary/30 rounded-2xl flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-accent-secondary animate-pulse" />
                        </div>
                      </div>
                      <div className="text-4xl font-light text-accent-secondary mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                      <div className="text-sm text-neutral-400 font-light">Future Potential</div>
                    </div>
                  </div>

                  {/* Student Growth Visualization */}
                  <div className="max-w-4xl mx-auto">
                    <h5 className="text-xl font-light text-center mb-8 text-neutral-200">
                      Student Growth Over Time
                    </h5>
                    <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
                      {[
                        { year: '1999', students: 180, percentage: 15 },
                        { year: '2001', students: 240, percentage: 20 },
                        { year: '2004', students: 300, percentage: 25 },
                        { year: '2010', students: 540, percentage: 45 },
                        { year: '2015', students: 660, percentage: 55 },
                        { year: '2021', students: 1000, percentage: 83 },
                        { year: '2023+', students: '1200+', percentage: 100 }
                      ].map((data, index) => (
                        <div key={index} className="text-center group">
                          <div className="relative mb-3">
                            <div className="w-full bg-neutral-800 rounded-full h-2 mb-2">
                              <div 
                                className="bg-gradient-to-r from-accent-primary to-accent-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${data.percentage}%` }}
                              ></div>
                            </div>
                            <div className="text-accent-primary font-bold text-sm">
                              {data.students}
                            </div>
                          </div>
                          <div className="text-xs text-neutral-400">
                            {data.year}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Enhanced Achievements Section */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-3xl blur-3xl"></div>
          
          <Card className="relative max-w-7xl mx-auto bg-card/95 border border-accent-primary/30 backdrop-blur-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary"></div>
            
            <CardContent className="py-20 px-12">
              <div className="text-center mb-16">
                <div className="relative inline-block mb-8">
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-3xl blur-2xl"></div>
                  <h3 className="relative text-4xl md:text-5xl font-light mb-6">
                    Our <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Legacy</span>
                  </h3>
                </div>
                <p className="text-xl text-neutral-300 font-light max-w-3xl mx-auto leading-relaxed">
                  Numbers that define our journey of <span className="text-accent-primary font-medium">excellence and innovation</span>
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center group hover:scale-110 transition-all duration-500">
                      <div className="relative mb-6">
                        {/* Icon glow effect */}
                        <div className={`absolute -inset-2 ${achievement.color === 'text-accent-primary' ? 'bg-accent-primary/20' : 'bg-accent-secondary/20'} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        
                        <div className={`relative w-16 h-16 mx-auto mb-4 rounded-2xl ${achievement.color === 'text-accent-primary' ? 'bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border-accent-primary/30' : 'bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 border-accent-secondary/30'} border flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                          <IconComponent className={`w-8 h-8 ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        
                        <div className={`text-4xl md:text-5xl font-light ${achievement.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
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
              
              {/* Enhanced Call to action */}
              <div className="pt-12 border-t border-neutral-700/50">
                <p className="text-2xl text-neutral-200 font-light mb-6">
                  Be part of this <span className="text-accent-primary font-medium">extraordinary legacy</span>
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-primary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-r from-accent-primary/20 to-accent-primary/10 text-accent-primary px-8 py-4 rounded-2xl text-lg font-medium border border-accent-primary/30 group-hover:scale-105 group-hover:border-accent-primary/50 transition-all duration-300">
                        🎓 Engineering Excellence
                      </div>
                    </div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary/20 to-accent-secondary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-r from-accent-secondary/20 to-accent-secondary/10 text-accent-secondary px-8 py-4 rounded-2xl text-lg font-medium border border-accent-secondary/30 group-hover:scale-105 group-hover:border-accent-secondary/50 transition-all duration-300">
                        🚀 Innovation Hub
                      </div>
                    </div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 text-accent-primary px-8 py-4 rounded-2xl text-lg font-medium border border-accent-primary/30 group-hover:scale-105 group-hover:border-accent-primary/50 transition-all duration-300">
                        🌟 Future Leaders
                      </div>
                    </div>
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
