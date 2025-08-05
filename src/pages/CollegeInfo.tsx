import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, Award, GraduationCap, Building, Users, Trophy, Star, 
  Sparkles, MapPin, BookOpen, Target, Zap, Rocket, Code, Cpu, 
  TrendingUp, ExternalLink
} from "lucide-react";
import LogoImage from "@/img/logo.png";
import Dock from "@/components/Dock";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Header from '../components/Header'

const CollegeInfo = () => {
  // Scroll to top when component mounts (page loads)
  useScrollToTop();

  // Organized milestones data
  const milestones = [
    { 
      year: "1999", 
      event: "Foundation Established", 
      detail: "ADCET founded with 180 student intake", 
      icon: Building, 
      category: "establishment",
      students: "180",
      highlight: "Genesis"
    },
    { 
      year: "2001", 
      event: "Computer Science Added", 
      detail: "CSE Department launched", 
      icon: Code, 
      category: "expansion",
      students: "240",
      highlight: "Tech Era"
    },
    { 
      year: "2004", 
      event: "Electrical Engineering", 
      detail: "Electrical Department launched", 
      icon: Zap, 
      category: "expansion",
      students: "300",
      highlight: "Power Up"
    },
    { 
      year: "2010", 
      event: "Major Expansion", 
      detail: "Civil & Mechanical added", 
      icon: Target, 
      category: "expansion",
      students: "540",
      highlight: "Growth"
    },
    { 
      year: "2010", 
      event: "ISO 9001:2008", 
      detail: "Quality Certification", 
      icon: Award, 
      category: "achievement",
      students: "540",
      highlight: "Quality"
    },
    { 
      year: "2011", 
      event: "600 Students", 
      detail: "Continued growth", 
      icon: Users, 
      category: "expansion",
      students: "600",
      highlight: "Scale"
    },
    { 
      year: "2013", 
      event: "Aeronautical Added", 
      detail: "Aerospace Engineering", 
      icon: Rocket, 
      category: "expansion",
      students: "660",
      highlight: "Sky High"
    },
    { 
      year: "2014", 
      event: "NBA Accreditation", 
      detail: "3 Programs Accredited", 
      icon: Trophy, 
      category: "achievement",
      students: "660",
      highlight: "Recognition"
    },
    { 
      year: "2015", 
      event: "NAAC A Grade", 
      detail: "Academic Excellence", 
      icon: Award, 
      category: "achievement",
      students: "660",
      highlight: "Excellence"
    },
    { 
      year: "2017", 
      event: "Autonomous Status", 
      detail: "Independent Excellence", 
      icon: Star, 
      category: "achievement",
      students: "720",
      highlight: "Autonomy"
    },
    { 
      year: "2019", 
      event: "Food Technology", 
      detail: "New Department & NBA Extension", 
      icon: BookOpen, 
      category: "expansion",
      students: "780",
      highlight: "Innovation"
    },
    { 
      year: "2021", 
      event: "AI & Data Science", 
      detail: "Future Technology Programs", 
      icon: Cpu, 
      category: "expansion",
      students: "1000",
      highlight: "Future"
    },
    { 
      year: "2022", 
      event: "Enhanced NBA", 
      detail: "Extended Accreditation", 
      icon: Trophy, 
      category: "achievement",
      students: "1100",
      highlight: "Enhanced"
    },
    { 
      year: "2023", 
      event: "NAAC A++", 
      detail: "Highest Grade Achieved", 
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent-secondary/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 md:py-16">
        
        {/* College Header Section */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16 mt-20">
          <Card className="bg-card/95 backdrop-blur-sm border border-border hover:border-accent-primary/30 transition-all duration-300 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary" />
            
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-xl" />
                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-background border-2 border-accent-primary/40 hover:border-accent-primary/70 transition-all duration-300 shadow-lg rounded-full p-2 md:p-3">
                      <img 
                        src={LogoImage} 
                        alt="ADCET Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* College Information */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-red-400 text-sm md:text-base font-medium mb-1">
                    Sant Dnyaneshwar Shikshan Sanstha's
                  </h3>
                  <h2 className="text-red-500 text-lg md:text-xl font-bold mb-2 leading-tight">
                    Annasaheb Dange College of Engineering and Technology (ADCET), Ashta
                  </h2>
                  <p className="text-muted-foreground text-sm mb-1 leading-relaxed">
                    An Empowered Autonomous Institute, affiliated to Shivaji University, Kolhapur
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    Approved by AICTE, New Delhi & Govt. of Maharashtra
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2 sm:gap-4 text-xs">
                    <span className="text-muted-foreground/80">
                      Accredited by NAAC 'A++' Grade, Bangalore
                    </span>
                    <span className="hidden sm:block text-muted-foreground/60">•</span>
                    <span className="text-accent-secondary font-medium">
                      NBA Accredited Programs
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Header */}
        <div className="text-center mb-16 md:mb-20">
          <button 
            onClick={() => window.open('https://maps.google.com/?q=Annasaheb+Dange+College+of+Engineering+and+Technology+Ashta+Sangli+Maharashtra', '_blank')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary p-[1px] rounded-full mb-6 hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 text-accent-primary text-sm group-hover:bg-background/95 transition-all duration-300">
              <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Ashta, Sangli, Maharashtra</span>
              <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 tracking-tight">
            Complete <span className="font-mono bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">College Information</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed mb-6">
            Comprehensive details about ADCET - From humble beginnings to becoming Western Maharashtra's premier engineering institution
          </p>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto" />
        </div>

        {/* College Vision & Mission Section */}
        <div className="mb-16 md:mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-full mb-6">
                <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 text-blue-500 text-sm">
                  <Target className="w-4 h-4" />
                  <span className="font-medium">Vision & Mission</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
                Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Purpose</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <Card className="bg-card/95 backdrop-blur-sm border border-border hover:border-blue-500/30 transition-all duration-300 group">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Target className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a Leader in producing professionally competent engineers.
                  </p>
                </CardContent>
              </Card>

              {/* Mission Card */}
              <Card className="bg-card/95 backdrop-blur-sm border border-border hover:border-purple-500/30 transition-all duration-300 group">
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <Rocket className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p><span className="font-medium text-purple-500">M1.</span> Imparting effective outcome based education.</p>
                    <p><span className="font-medium text-purple-500">M2.</span> Preparing students through skill oriented courses to excel in their profession with ethical values.</p>
                    <p><span className="font-medium text-purple-500">M3.</span> Promoting research to benefit the society.</p>
                    <p><span className="font-medium text-purple-500">M4.</span> Strengthening relationship with all the stakeholders.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="mb-16 md:mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 p-[1px] rounded-full mb-6">
                <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 text-orange-500 text-sm">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">Leadership Team</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
                Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Desk</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Visionary leaders driving excellence in technical education and rural development
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Founder */}
              <Card className="bg-card/95 backdrop-blur-sm border border-border hover:border-orange-500/30 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="h-1 bg-gradient-to-r from-orange-500 to-yellow-500" />
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-yellow-500/30 transition-all duration-300">
                    <Users className="w-10 h-10 text-orange-500" />
                  </div>
                  <div className="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
                    Shri. Annasaheb Dange
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Founder</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Visionary founder of Sant Dnyaneshwar Shikshan Sanstha, dedicated to bringing quality technical education to rural Maharashtra.
                  </p>
                  <button 
                    onClick={() => window.open('https://www.adcet.ac.in/message-by-founder-chairman', '_blank')}
                    className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center gap-1 mx-auto transition-colors group-hover:gap-2"
                  >
                    Read More
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </CardContent>
              </Card>

              {/* Secretary */}
              <Card className="bg-card/95 backdrop-blur-sm border border-border hover:border-blue-500/30 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                    <BookOpen className="w-10 h-10 text-blue-500" />
                  </div>
                  <div className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
                    Adv. Rajendra R. Dange
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Secretary</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Committed to student-centric policies and creating a nurturing academic environment for all students.
                  </p>
                  <button 
                    onClick={() => window.open('https://www.adcet.ac.in/message-by-secretary', '_blank')}
                    className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1 mx-auto transition-colors group-hover:gap-2"
                  >
                    Read More
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </CardContent>
              </Card>

              {/* Joint Secretary */}
              <Card className="bg-card/95 backdrop-blur-sm border border-border hover:border-green-500/30 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                    <Award className="w-10 h-10 text-green-500" />
                  </div>
                  <div className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
                    Shri. Vishwanath R. Dange
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Joint Secretary</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Focused on academic excellence and fostering innovation in engineering education and research.
                  </p>
                  <button 
                    onClick={() => window.open('https://www.adcet.ac.in/message-by-joint-secretary', '_blank')}
                    className="text-green-500 hover:text-green-600 text-sm font-medium flex items-center gap-1 mx-auto transition-colors group-hover:gap-2"
                  >
                    Read More
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </CardContent>
              </Card>

              {/* Director */}
              <Card className="bg-card/95 backdrop-blur-sm border border-border hover:border-purple-500/30 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                    <GraduationCap className="w-10 h-10 text-purple-500" />
                  </div>
                  <div className="bg-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
                    Dr. Laxman Y Waghmode
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Director</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Leading the institute towards global excellence in technical education and industry collaboration.
                  </p>
                  <button 
                    onClick={() => window.open('https://www.adcet.ac.in/message-by-director', '_blank')}
                    className="text-purple-500 hover:text-purple-600 text-sm font-medium flex items-center gap-1 mx-auto transition-colors group-hover:gap-2"
                  >
                    Read More
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Key Highlights Section */}
        <div className="mb-16 md:mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 p-[1px] rounded-full mb-6">
                <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 text-indigo-500 text-sm">
                  <Star className="w-4 h-4" />
                  <span className="font-medium">Key Highlights</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
                Our <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Achievements</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={index} className="bg-card/95 backdrop-blur-sm border border-border hover:border-indigo-500/30 transition-all duration-300 text-center group hover:transform hover:scale-105">
                    <CardContent className="p-4">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300`}>
                        <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                      </div>
                      <div className="text-lg md:text-xl font-bold text-foreground mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {achievement.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modern Timeline Section */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 p-[1px] rounded-full mb-6">
              <div className="flex items-center gap-3 bg-background/90 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 text-blue-500 text-sm">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">Growth Timeline • 1999 - 2025</span>
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
              Journey of <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Excellence</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-8">
              From <span className="text-blue-500 font-medium">180 students to 1200+</span> • 
              A testament to <span className="text-green-500 font-medium">continuous innovation</span>
            </p>
          </div>

          {/* Responsive Timeline */}
          <div className="max-w-7xl mx-auto">
            {/* Mobile Timeline - Vertical */}
            <div className="block md:hidden space-y-6">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index !== milestones.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-accent-primary to-accent-secondary opacity-30" />
                    )}
                    
                    <div className="flex items-start gap-4">
                      {/* Timeline node */}
                      <div className={`w-12 h-12 rounded-full border-2 border-white shadow-lg flex items-center justify-center flex-shrink-0 ${
                        milestone.category === 'achievement' ? 'bg-orange-500' : 'bg-blue-500'
                      }`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      
                      {/* Content card */}
                      <Card className={`flex-1 border-2 hover:shadow-lg transition-all duration-300 ${
                        milestone.category === 'achievement' ? 'border-orange-400' : 'border-blue-400'
                      }`}>
                        <div className={`h-1 ${
                          milestone.category === 'achievement' 
                            ? 'bg-gradient-to-r from-orange-400 to-yellow-400' 
                            : 'bg-gradient-to-r from-blue-400 to-cyan-400'
                        }`} />
                        
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              {milestone.year}
                            </div>
                            <div className={`text-xs px-2 py-1 rounded-full ${
                              milestone.category === 'achievement' 
                                ? 'bg-orange-100 text-orange-700' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {milestone.category === 'achievement' ? '🏆 Achievement' : '📈 Growth'}
                            </div>
                          </div>
                          
                          <h5 className="text-sm font-semibold text-foreground mb-1">
                            {milestone.event}
                          </h5>
                          
                          <p className="text-xs text-muted-foreground mb-2">
                            {milestone.detail}
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <div className="text-sm font-bold text-blue-600">
                              {milestone.students} Students
                            </div>
                            <div className={`text-xs font-medium ${
                              milestone.category === 'achievement' ? 'text-orange-600' : 'text-blue-600'
                            }`}>
                              {milestone.highlight}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Timeline - Horizontal Grid */}
            <div className="hidden md:block">
              {/* Top Row */}
              <div className="relative mb-16">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 transform -translate-y-1/2 z-0" />
                
                <div className="grid grid-cols-7 gap-4 relative z-10">
                  {milestones.slice(0, 7).map((milestone, index) => {
                    const IconComponent = milestone.icon;
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-3 whitespace-nowrap">
                          {milestone.year}
                        </div>
                        
                        <Card className={`w-full border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                          milestone.category === 'achievement' ? 'border-orange-400' : 'border-blue-400'
                        }`}>
                          <div className={`h-1 ${
                            milestone.category === 'achievement' 
                              ? 'bg-gradient-to-r from-orange-400 to-yellow-400' 
                              : 'bg-gradient-to-r from-blue-400 to-cyan-400'
                          }`} />
                          
                          <CardContent className="p-3 text-center">
                            <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full mb-2 ${
                              milestone.category === 'achievement' 
                                ? 'bg-orange-100 text-orange-600' 
                                : 'bg-blue-100 text-blue-600'
                            }`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            
                            <div className={`text-xs px-2 py-1 rounded-full mb-2 ${
                              milestone.category === 'achievement' 
                                ? 'bg-orange-100 text-orange-700' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {milestone.category === 'achievement' ? '🏆' : '📈'}
                            </div>
                            
                            <h5 className="text-xs font-semibold text-foreground mb-1 leading-tight">
                              {milestone.event.length > 18 ? milestone.event.substring(0, 15) + '...' : milestone.event}
                            </h5>
                            
                            <div className="text-sm font-bold text-blue-600 mb-1">
                              {milestone.students}
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              milestone.category === 'achievement' ? 'text-orange-600' : 'text-blue-600'
                            }`}>
                              {milestone.highlight}
                            </div>
                          </CardContent>
                        </Card>
                        
                        <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg mt-3 ${
                          milestone.category === 'achievement' ? 'bg-orange-500' : 'bg-blue-500'
                        }`} />
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Bottom Row */}
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 transform -translate-y-1/2 z-0" />
                
                <div className="grid grid-cols-7 gap-4 relative z-10">
                  {milestones.slice(7).map((milestone, index) => {
                    const IconComponent = milestone.icon;
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg mb-3 ${
                          milestone.category === 'achievement' ? 'bg-orange-500' : 'bg-blue-500'
                        }`} />
                        
                        <Card className={`w-full border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                          milestone.category === 'achievement' ? 'border-orange-400' : 'border-blue-400'
                        }`}>
                          <div className={`h-1 ${
                            milestone.category === 'achievement' 
                              ? 'bg-gradient-to-r from-orange-400 to-yellow-400' 
                              : 'bg-gradient-to-r from-blue-400 to-cyan-400'
                          }`} />
                          
                          <CardContent className="p-3 text-center">
                            <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full mb-2 ${
                              milestone.category === 'achievement' 
                                ? 'bg-orange-100 text-orange-600' 
                                : 'bg-blue-100 text-blue-600'
                            }`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            
                            <div className={`text-xs px-2 py-1 rounded-full mb-2 ${
                              milestone.category === 'achievement' 
                                ? 'bg-orange-100 text-orange-700' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {milestone.category === 'achievement' ? '🏆' : '📈'}
                            </div>
                            
                            <h5 className="text-xs font-semibold text-foreground mb-1 leading-tight">
                              {milestone.event.length > 18 ? milestone.event.substring(0, 15) + '...' : milestone.event}
                            </h5>
                            
                            <div className="text-sm font-bold text-blue-600 mb-1">
                              {milestone.students}
                            </div>
                            
                            <div className={`text-xs font-medium ${
                              milestone.category === 'achievement' ? 'text-orange-600' : 'text-blue-600'
                            }`}>
                              {milestone.highlight}
                            </div>
                          </CardContent>
                        </Card>
                        
                        <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-3 whitespace-nowrap">
                          {milestone.year}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Trajectory Section */}
        <div className="mb-16 md:mb-20">
          <Card className="max-w-6xl mx-auto bg-card/95 border border-accent-primary/30 backdrop-blur-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary" />
            
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Growth Trajectory</span>
                </h3>
                <p className="text-lg text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                  A visual representation of our <span className="text-accent-primary font-medium">exponential growth</span>
                </p>
              </div>
              
              {/* Growth Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="relative mb-3">
                    <div className="absolute -inset-2 bg-accent-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-10 h-10 mx-auto bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border border-accent-primary/30 rounded-xl flex items-center justify-center">
                      <Building className="w-5 h-5 text-accent-primary" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-light text-accent-primary mb-1 group-hover:scale-110 transition-transform duration-300">26</div>
                  <div className="text-xs text-muted-foreground font-light">Years of Excellence</div>
                </div>
                
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="relative mb-3">
                    <div className="absolute -inset-2 bg-accent-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-10 h-10 mx-auto bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 border border-accent-secondary/30 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-accent-secondary" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-light text-accent-secondary mb-1 group-hover:scale-110 transition-transform duration-300">7x</div>
                  <div className="text-xs text-muted-foreground font-light">Student Growth</div>
                </div>
                
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="relative mb-3">
                    <div className="absolute -inset-2 bg-accent-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-10 h-10 mx-auto bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border border-accent-primary/30 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent-primary" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-light text-accent-primary mb-1 group-hover:scale-110 transition-transform duration-300">14</div>
                  <div className="text-xs text-muted-foreground font-light">Major Milestones</div>
                </div>
                
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="relative mb-3">
                    <div className="absolute -inset-2 bg-accent-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-10 h-10 mx-auto bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 border border-accent-secondary/30 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent-secondary animate-pulse" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-light text-accent-secondary mb-1 group-hover:scale-110 transition-transform duration-300">∞</div>
                  <div className="text-xs text-muted-foreground font-light">Future Potential</div>
                </div>
              </div>

              {/* Student Growth Visualization */}
              <div className="max-w-4xl mx-auto">
                <h4 className="text-lg font-light text-center mb-6 text-foreground">
                  Student Growth Over Time
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-3">
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
                      <div className="relative mb-2">
                        <div className="w-full bg-muted rounded-full h-1.5 mb-2">
                          <div 
                            className="bg-gradient-to-r from-accent-primary to-accent-secondary h-1.5 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${data.percentage}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">
                        {data.year}
                      </div>
                      <div className="text-xs font-medium text-accent-primary">
                        {data.students}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Section */}
        <div className="text-center">
          <Card className="max-w-6xl mx-auto bg-card/95 border border-accent-primary/30 backdrop-blur-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary" />
            
            <CardContent className="p-6 md:p-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-light mb-4">
                  Our <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Legacy</span>
                </h3>
                <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                  Numbers that define our journey of <span className="text-accent-primary font-medium">excellence and innovation</span>
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-10">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                      <div className="relative mb-4">
                        <div className={`absolute -inset-2 ${achievement.color === 'text-accent-primary' ? 'bg-accent-primary/20' : 'bg-accent-secondary/20'} rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        
                        <div className={`relative w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-xl ${achievement.color === 'text-accent-primary' ? 'bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border-accent-primary/30' : 'bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 border-accent-secondary/30'} border flex items-center justify-center group-hover:rotate-6 transition-all duration-300`}>
                          <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${achievement.color}`} />
                        </div>
                        
                        <div className={`text-xl md:text-2xl font-light ${achievement.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                          {achievement.number}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground font-light leading-tight">
                        {achievement.label}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Call to action */}
              <div className="pt-8 border-t border-border/50">
                <p className="text-xl text-foreground font-light mb-4">
                  Be part of this <span className="text-accent-primary font-medium">extraordinary legacy</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dock />
      <Footer />
    </div>
  );
};

export default CollegeInfo;
