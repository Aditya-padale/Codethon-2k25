import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Award, GraduationCap, Building, Users, Trophy, Star, Sparkles, MapPin, BookOpen, Target, Zap, Rocket, Code, Cpu } from "lucide-react";

const InstituteJourney = () => {
  // Organized milestones in proper chronological order with better data structure
  const milestones = [
    { 
      year: "1999", 
      event: "Foundation Established", 
      detail: "ADCET founded with 180 student intake - The Beginning of Excellence", 
      icon: Building, 
      category: "establishment"
    },
    { 
      year: "2001", 
      event: "Computer Science Department", 
      detail: "CSE Department added - 240 total intake - Tech Revolution begins", 
      icon: Code, 
      category: "expansion"
    },
    { 
      year: "2004", 
      event: "Electrical Engineering", 
      detail: "Electrical Department launched - 300 total intake - Power Engineering", 
      icon: Zap, 
      category: "expansion"
    },
    { 
      year: "2010", 
      event: "Major Infrastructure Expansion", 
      detail: "Civil & Mechanical Departments added - 540 total intake", 
      icon: Target, 
      category: "expansion"
    },
    { 
      year: "2010", 
      event: "ISO 9001:2008 Certification", 
      detail: "International Quality Management System Certification", 
      icon: Award, 
      category: "achievement"
    },
    { 
      year: "2011", 
      event: "Continued Growth", 
      detail: "Student intake increased to 600 - Scaling Excellence", 
      icon: Users, 
      category: "expansion"
    },
    { 
      year: "2013", 
      event: "Aeronautical Engineering", 
      detail: "Aeronautical Department launched - 660 total intake - Sky High Dreams", 
      icon: Rocket, 
      category: "expansion"
    },
    { 
      year: "2014", 
      event: "NBA Accreditation", 
      detail: "First NBA Accreditation for 3 Engineering Programs - National Recognition", 
      icon: Trophy, 
      category: "achievement"
    },
    { 
      year: "2015", 
      event: "NAAC A Grade", 
      detail: "First NAAC Accreditation with A Grade - Academic Excellence", 
      icon: Award, 
      category: "achievement"
    },
    { 
      year: "2017", 
      event: "Autonomous Status Granted", 
      detail: "Achieved Autonomous Status - Independent Academic Excellence", 
      icon: Star, 
      category: "achievement"
    },
    { 
      year: "2019", 
      event: "Food Technology & NBA Extension", 
      detail: "Food Technology Department added & NBA Accreditation for Aeronautical", 
      icon: BookOpen, 
      category: "expansion"
    },
    { 
      year: "2021", 
      event: "Technology Revolution", 
      detail: "AI&DS, CSE, IoT, Computer Science & BCT Departments - Future Ready", 
      icon: Cpu, 
      category: "expansion"
    },
    { 
      year: "2022", 
      event: "Engineering Excellence", 
      detail: "Enhanced NBA Accreditation for Aeronautical Engineering", 
      icon: Trophy, 
      category: "achievement"
    },
    { 
      year: "2023", 
      event: "NAAC A++ Grade", 
      detail: "Highest NAAC A++ Grade Achieved - Pinnacle of Excellence", 
      icon: Award, 
      category: "achievement"
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

        {/* Snake Timeline Section */}
        <div className="mb-32">
          <div className="text-center mb-24">
            <div className="relative inline-block p-[1px] rounded-full mb-8 bg-gradient-to-r from-accent-primary to-accent-secondary">
              <div className="inline-flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 text-accent-primary text-sm">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">1999 - 2025 • Journey of Excellence</span>
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
            </div>
            <h3 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              Institute <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent">Journey</span>
            </h3>
            <p className="text-xl text-neutral-400 max-w-4xl mx-auto font-light leading-relaxed mb-12">
              Every milestone represents our <span className="text-accent-primary font-medium">unwavering commitment</span> to educational excellence, 
              innovation, and shaping the engineers of tomorrow
            </p>
          </div>

          {/* Snake-like Timeline */}
          <div className="relative max-w-[1400px] mx-auto">
            {/* Timeline Container */}
            <div className="relative min-h-[900px]">
              {/* SVG Path for Snake Timeline */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="snakePath" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:"#f97316", stopOpacity:0.8}} />
                    <stop offset="50%" style={{stopColor:"#ef4444", stopOpacity:0.8}} />
                    <stop offset="100%" style={{stopColor:"#f97316", stopOpacity:0.8}} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Snake Path - Multiple horizontal rows with curves */}
                <path
                  d="M 100 200 
                     L 1300 200 
                     Q 1350 200 1350 250
                     L 1350 300
                     Q 1350 350 1300 350
                     L 100 350
                     Q 50 350 50 400
                     L 50 450
                     Q 50 500 100 500
                     L 1300 500
                     Q 1350 500 1350 550
                     L 1350 600
                     Q 1350 650 1300 650
                     L 100 650
                     Q 50 650 50 700
                     L 50 750
                     Q 50 800 100 800
                     L 700 800"
                  stroke="url(#snakePath)"
                  strokeWidth="6"
                  fill="none"
                  filter="url(#glow)"
                  className="drop-shadow-lg"
                />
              </svg>

              {/* Milestone Points */}
              <div className="relative z-10">
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  
                  // Calculate positions for snake pattern following the SVG path exactly
                  const positions = [
                    // First row (left to right) - following the top horizontal line at y=200
                    { x: '7%', y: '22%' },     // 1999 - Start of path
                    { x: '18%', y: '22%' },    // 2001
                    { x: '29%', y: '22%' },    // 2004
                    { x: '40%', y: '22%' },    // 2010 - Infrastructure
                    { x: '51%', y: '22%' },    // 2010 - ISO
                    { x: '62%', y: '22%' },    // 2011
                    { x: '73%', y: '22%' },    // 2013
                    { x: '84%', y: '22%' },    // 2014
                    
                    // Second row (right to left) - following the second horizontal line at y=350
                    { x: '93%', y: '39%' },    // 2015 - After curve down
                    { x: '82%', y: '39%' },    // 2017
                    { x: '71%', y: '39%' },    // 2019
                    { x: '60%', y: '39%' },    // 2021
                    { x: '49%', y: '39%' },    // 2022
                    { x: '38%', y: '39%' },    // 2023
                  ];
                  
                  const position = positions[index] || { x: '50%', y: '50%' };
                  const isFirstRow = index < 8;
                  
                  return (
                    <div
                      key={index}
                      className="absolute group cursor-pointer"
                      style={{
                        left: position.x,
                        top: position.y,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {/* Milestone Marker */}
                      <div className="relative flex flex-col items-center">
                        
                        {/* Year Badge */}
                        <div className={`relative mb-4 group-hover:scale-110 transition-all duration-300 ${isFirstRow ? 'order-1' : 'order-3'}`}>
                          <div className="absolute -inset-2 bg-gradient-to-r from-accent-primary/30 to-red-500/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative bg-gradient-to-r from-accent-primary to-red-500 text-white font-bold text-base px-3 py-1 rounded-xl border-2 border-white/20 shadow-lg">
                            {milestone.year}
                          </div>
                        </div>

                        {/* Milestone Marker Circle */}
                        <div className={`relative ${isFirstRow ? 'order-2' : 'order-2'}`}>
                          <div className="absolute -inset-3 bg-gradient-to-r from-accent-primary/40 to-red-500/40 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative w-12 h-12 bg-gradient-to-r from-accent-primary to-red-500 rounded-full border-3 border-white shadow-2xl flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Event Name Badge */}
                        <div className={`text-center mt-2 ${isFirstRow ? 'order-3' : 'order-1'}`}>
                          <div className="bg-card/90 backdrop-blur-sm border border-accent-primary/30 rounded-lg px-2 py-1 shadow-lg">
                            <div className="text-xs font-medium text-white truncate max-w-[100px]">
                              {milestone.event.split(' ').slice(0, 2).join(' ')}
                            </div>
                          </div>
                        </div>

                        {/* Event Details Card */}
                        <div className={`absolute ${isFirstRow ? 'top-full mt-16' : 'bottom-full mb-16'} left-1/2 transform -translate-x-1/2 w-80 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none group-hover:pointer-events-auto`}>
                          <Card className="bg-card/95 border border-accent-primary/30 backdrop-blur-sm shadow-2xl">
                            <div className="h-1 bg-gradient-to-r from-accent-primary to-red-500" />
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-accent-primary to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <h5 className="text-lg font-semibold text-white mb-1">
                                    {milestone.event}
                                  </h5>
                                  <div className="text-sm text-accent-primary font-medium">
                                    {milestone.year}
                                  </div>
                                </div>
                              </div>
                              <p className="text-neutral-300 text-sm leading-relaxed">
                                {milestone.detail}
                              </p>
                              <div className="mt-4 pt-4 border-t border-neutral-700/50">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                                  milestone.category === 'achievement' 
                                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                }`}>
                                  {milestone.category === 'achievement' ? '🏆 Achievement' : '📈 Growth'}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Timeline Summary */}
        <div className="mb-32">
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-3xl blur-3xl"></div>
              
              <Card className="relative max-w-6xl mx-auto bg-card/95 border border-accent-primary/30 backdrop-blur-sm overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"></div>
                
                <CardContent className="py-16 px-12">
                  <div className="text-center mb-12">
                    <h4 className="text-3xl md:text-4xl font-light mb-6">
                      <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Journey Impact</span>
                    </h4>
                    <p className="text-xl text-neutral-300 font-light max-w-4xl mx-auto leading-relaxed">
                      From <span className="text-accent-primary font-medium">180 students to 1200+</span> • 
                      From <span className="text-accent-secondary font-medium">1 department to 10+</span> • 
                      From <span className="text-accent-primary font-medium">regional to national recognition</span>
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="text-4xl font-light text-accent-primary mb-3 group-hover:scale-110 transition-transform duration-300">14</div>
                      <div className="text-sm text-neutral-400 font-light">Major Milestones</div>
                    </div>
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="text-4xl font-light text-accent-secondary mb-3 group-hover:scale-110 transition-transform duration-300">26</div>
                      <div className="text-sm text-neutral-400 font-light">Years of Excellence</div>
                    </div>
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="text-4xl font-light text-accent-primary mb-3 group-hover:scale-110 transition-transform duration-300">7x</div>
                      <div className="text-sm text-neutral-400 font-light">Growth Multiplier</div>
                    </div>
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="text-4xl font-light text-accent-secondary mb-3 group-hover:scale-110 transition-transform duration-300">∞</div>
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
