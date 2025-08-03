import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Award, GraduationCap, Building, Users, Trophy, Star, Sparkles, MapPin, BookOpen, Target, Zap, Rocket, Code, Cpu, ArrowRight, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LogoImage from "@/img/logo.png";
import Dock from "@/components/Dock";

const CollegeInfo = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Custom Animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(249, 115, 22, 0.4); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl animate-pulse animate-float" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl animate-pulse animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-primary/3 to-accent-secondary/3 rounded-full blur-3xl animate-glow-pulse" />
      
      <div className="container mx-auto px-6 relative z-10 py-16">
        
        {/* College Header Section */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="relative group">
            {/* Background container with gradient */}
            <div className="relative bg-card/95 backdrop-blur-sm border border-border rounded-xl px-4 md:px-6 py-3 md:py-4 hover:border-accent-primary/30 transition-all duration-300 overflow-hidden">
              
              {/* Top and bottom accent lines */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary"></div>

              {/* Main content - responsive layout */}
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                
                {/* Logo */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-xl"></div>
                  <div className="relative w-16 h-16 md:w-24 md:h-24 bg-background border-2 border-accent-primary/40 hover:border-accent-primary/70 transition-all duration-300 shadow-lg rounded-full p-2 md:p-3">
                    <img 
                      src={LogoImage} 
                      alt="ADCET Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* College Information - Mobile View */}
                <div className="text-center flex-1 md:hidden">
                  <h3 className="text-red-400 text-xs font-medium mb-1">
                    Sant Dnyaneshwar Shikshan Sanstha's
                  </h3>
                  <h2 className="text-red-500 text-sm font-bold mb-1 leading-tight">
                    Annasaheb Dange College of Engineering and Technology (ADCET), Ashta
                  </h2>
                  <p className="text-muted-foreground text-xs mb-1 leading-relaxed">
                    An Empowered Autonomous Institute, affiliated to Shivaji University, Kolhapur
                  </p>
                </div>

                {/* College Information - Desktop View */}
                <div className="text-center flex-1 hidden md:block">
                  <h3 className="text-red-400 text-base font-medium mb-1">
                    Sant Dnyaneshwar Shikshan Sanstha's
                  </h3>
                  <h2 className="text-red-500 text-lg font-bold mb-2 leading-tight">
                    Annasaheb Dange College of Engineering and Technology (ADCET), Ashta
                  </h2>
                  <p className="text-muted-foreground text-sm mb-1 leading-relaxed">
                    An Empowered Autonomous Institute, affiliated to Shivaji University, Kolhapur
                  </p>
                  <p className="text-muted-foreground text-sm mb-1">
                    Approved by AICTE, New Delhi & Govt. of Maharashtra
                  </p>
                  <div className="flex flex-row justify-center items-center gap-4 mt-2">
                    <p className="text-muted-foreground/80 text-xs">
                      Accredited by NAAC 'A+' Grade, Bangalore
                    </p>
                    <span className="text-muted-foreground/60">•</span>
                    <p className="text-accent-secondary text-xs font-medium">
                      Eligible Programs Accredited by NBA, New Delhi
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-1 h-1 bg-accent-primary rounded-full"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-accent-secondary rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-1 h-1 bg-accent-primary rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-accent-secondary rounded-full"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

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
          <h1 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            Complete <span className="font-mono bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">College Information</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-4xl mx-auto font-light leading-relaxed">
            Comprehensive details about ADCET - From humble beginnings to becoming Western Maharashtra's premier engineering institution
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-8" />
        </div>

        {/* Clean Timeline Design - Matching Reference */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="relative inline-block p-[1px] rounded-full mb-6 bg-gradient-to-r from-blue-500 to-cyan-500">
              <div className="inline-flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 text-blue-500 text-sm">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Growth Timeline • 1999 - 2025</span>
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Journey of <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              From <span className="text-blue-500 font-medium">180 students to 1200+</span> • 
              A testament to <span className="text-green-500 font-medium">continuous innovation</span>
            </p>
          </div>

          {/* Simple Timeline matching reference image */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative">
              
              {/* Simple Timeline Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 transform -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 transform translate-y-20 z-0"></div>
              
              {/* Timeline Cards */}
              <div className="grid grid-cols-8 gap-4 relative z-10">
                {/* Top Row - First 8 milestones */}
                {milestones.slice(0, 8).map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  return (
                    <div key={index} className="flex flex-col items-center">
                      {/* Year Badge */}
                      <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 whitespace-nowrap">
                        {milestone.year}
                      </div>
                      
                      {/* Info Card */}
                      <Card className={`w-full bg-white/95 border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        milestone.category === 'achievement' 
                          ? 'border-orange-400' 
                          : 'border-blue-400'
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
                            <IconComponent className="w-5 h-5" />
                          </div>
                          
                          <div className={`text-xs px-2 py-1 rounded-full mb-2 ${
                            milestone.category === 'achievement' 
                              ? 'bg-orange-100 text-orange-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {milestone.category === 'achievement' ? '🏆 Achievement' : '📈 Growth'}
                          </div>
                          
                          <h5 className="text-xs font-semibold text-gray-800 mb-1 leading-tight">
                            {milestone.event.length > 20 ? milestone.event.substring(0, 20) + '...' : milestone.event}
                          </h5>
                          
                          <div className="text-sm font-bold text-blue-600 mb-1">
                            {milestone.students} Students
                          </div>
                          
                          <div className={`text-xs ${
                            milestone.category === 'achievement' ? 'text-orange-600' : 'text-blue-600'
                          }`}>
                            {milestone.highlight}
                          </div>
                        </CardContent>
                      </Card>
                      
                      {/* Timeline Node */}
                      <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg mt-2 ${
                        milestone.category === 'achievement' 
                          ? 'bg-orange-500' 
                          : 'bg-blue-500'
                      }`}></div>
                    </div>
                  );
                })}
              </div>
              
              {/* Bottom Row - Remaining milestones */}
              <div className="grid grid-cols-6 gap-4 mt-16 relative z-10">
                {milestones.slice(8).map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  return (
                    <div key={index} className="flex flex-col items-center">
                      {/* Timeline Node */}
                      <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg mb-2 ${
                        milestone.category === 'achievement' 
                          ? 'bg-orange-500' 
                          : 'bg-blue-500'
                      }`}></div>
                      
                      {/* Info Card */}
                      <Card className={`w-full bg-white/95 border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        milestone.category === 'achievement' 
                          ? 'border-orange-400' 
                          : 'border-blue-400'
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
                            <IconComponent className="w-5 h-5" />
                          </div>
                          
                          <div className={`text-xs px-2 py-1 rounded-full mb-2 ${
                            milestone.category === 'achievement' 
                              ? 'bg-orange-100 text-orange-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {milestone.category === 'achievement' ? '🏆 Achievement' : '📈 Growth'}
                          </div>
                          
                          <h5 className="text-xs font-semibold text-gray-800 mb-1 leading-tight">
                            {milestone.event.length > 20 ? milestone.event.substring(0, 20) + '...' : milestone.event}
                          </h5>
                          
                          <div className="text-sm font-bold text-blue-600 mb-1">
                            {milestone.students} Students
                          </div>
                          
                          <div className={`text-xs ${
                            milestone.category === 'achievement' ? 'text-orange-600' : 'text-blue-600'
                          }`}>
                            {milestone.highlight}
                          </div>
                        </CardContent>
                      </Card>
                      
                      {/* Year Badge */}
                      <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mt-2 whitespace-nowrap">
                        {milestone.year}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Compact Growth Trajectory */}
        <div className="mb-16">
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-2xl blur-2xl"></div>
              
              <Card className="relative max-w-5xl mx-auto bg-card/95 border border-accent-primary/30 backdrop-blur-sm overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"></div>
                
                <CardContent className="py-8 px-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-light mb-4">
                      <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Growth Trajectory</span>
                    </h3>
                    <p className="text-lg text-neutral-300 font-light max-w-3xl mx-auto leading-relaxed">
                      A visual representation of our <span className="text-accent-primary font-medium">exponential growth</span>
                    </p>
                  </div>
                  
                  {/* Compact Growth Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="relative mb-3">
                        <div className="absolute -inset-2 bg-accent-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-10 h-10 mx-auto bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border border-accent-primary/30 rounded-xl flex items-center justify-center">
                          <Building className="w-5 h-5 text-accent-primary" />
                        </div>
                      </div>
                      <div className="text-3xl font-light text-accent-primary mb-1 group-hover:scale-110 transition-transform duration-300">26</div>
                      <div className="text-xs text-neutral-400 font-light">Years of Excellence</div>
                    </div>
                    
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="relative mb-3">
                        <div className="absolute -inset-2 bg-accent-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-10 h-10 mx-auto bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 border border-accent-secondary/30 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-accent-secondary" />
                        </div>
                      </div>
                      <div className="text-3xl font-light text-accent-secondary mb-1 group-hover:scale-110 transition-transform duration-300">7x</div>
                      <div className="text-xs text-neutral-400 font-light">Student Growth</div>
                    </div>
                    
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="relative mb-3">
                        <div className="absolute -inset-2 bg-accent-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-10 h-10 mx-auto bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border border-accent-primary/30 rounded-xl flex items-center justify-center">
                          <Award className="w-5 h-5 text-accent-primary" />
                        </div>
                      </div>
                      <div className="text-3xl font-light text-accent-primary mb-1 group-hover:scale-110 transition-transform duration-300">14</div>
                      <div className="text-xs text-neutral-400 font-light">Major Milestones</div>
                    </div>
                    
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="relative mb-3">
                        <div className="absolute -inset-2 bg-accent-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-10 h-10 mx-auto bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 border border-accent-secondary/30 rounded-xl flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-accent-secondary animate-pulse" />
                        </div>
                      </div>
                      <div className="text-3xl font-light text-accent-secondary mb-1 group-hover:scale-110 transition-transform duration-300">∞</div>
                      <div className="text-xs text-neutral-400 font-light">Future Potential</div>
                    </div>
                  </div>

                  {/* Compact Student Growth Visualization */}
                  <div className="max-w-3xl mx-auto">
                    <h4 className="text-lg font-light text-center mb-6 text-neutral-200">
                      Student Growth Over Time
                    </h4>
                    <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
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
                            <div className="w-full bg-neutral-800 rounded-full h-1.5 mb-2">
                              <div 
                                className="bg-gradient-to-r from-accent-primary to-accent-secondary h-1.5 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${data.percentage}%` }}
                              />
                            </div>
                          </div>
                          <div className="text-xs text-neutral-400 mb-1">
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
          </div>
        </div>

        {/* Compact Achievements Section */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-2xl blur-2xl"></div>
          
          <Card className="relative max-w-5xl mx-auto bg-card/95 border border-accent-primary/30 backdrop-blur-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary"></div>
            
            <CardContent className="py-12 px-8">
              <div className="text-center mb-10">
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-2xl blur-xl"></div>
                  <h3 className="relative text-3xl md:text-4xl font-light mb-4">
                    Our <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Legacy</span>
                  </h3>
                </div>
                <p className="text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
                  Numbers that define our journey of <span className="text-accent-primary font-medium">excellence and innovation</span>
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                      <div className="relative mb-4">
                        <div className={`absolute -inset-2 ${achievement.color === 'text-accent-primary' ? 'bg-accent-primary/20' : 'bg-accent-secondary/20'} rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        
                        <div className={`relative w-12 h-12 mx-auto mb-3 rounded-xl ${achievement.color === 'text-accent-primary' ? 'bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border-accent-primary/30' : 'bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/10 border-accent-secondary/30'} border flex items-center justify-center group-hover:rotate-6 transition-all duration-300`}>
                          <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                        </div>
                        
                        <div className={`text-2xl font-light ${achievement.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                          {achievement.number}
                        </div>
                      </div>
                      <div className="text-xs text-neutral-400 font-light leading-tight">
                        {achievement.label}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Compact Call to action */}
              <div className="pt-8 border-t border-neutral-700/50">
                <p className="text-xl text-neutral-200 font-light mb-4">
                  Be part of this <span className="text-accent-primary font-medium">extraordinary legacy</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dock />
    </div>
  );
};

export default CollegeInfo;
