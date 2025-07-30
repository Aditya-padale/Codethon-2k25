import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, ExternalLink, Home, Search, Plus, Bell, User, Trophy, Target, Gift, BookOpen, Users } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#institute-journey" },
    { name: "Rounds", href: "#rounds" },
    { name: "Benefits", href: "#benefits" },
    { name: "Rules", href: "#rules" },
    { name: "Register", href: "#registration" },
  ];

  // Bottom navigation items
  const bottomNavItems = [
    { 
      id: "home", 
      label: "Home", 
      icon: Home, 
      href: "#hero",
      ariaLabel: "Navigate to home section" 
    },
    { 
      id: "rounds", 
      label: "Rounds", 
      icon: Trophy, 
      href: "#rounds",
      ariaLabel: "View competition rounds" 
    },
    { 
      id: "register", 
      label: "Register", 
      icon: Plus, 
      href: "#registration",
      ariaLabel: "Register for competition",
      isMainAction: true 
    },
    { 
      id: "benefits", 
      label: "Benefits", 
      icon: Gift, 
      href: "#benefits",
      ariaLabel: "View competition benefits" 
    },
    { 
      id: "about", 
      label: "About", 
      icon: Users, 
      href: "#institute-journey",
      ariaLabel: "Learn about ADCET" 
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleBottomNavClick = (item: typeof bottomNavItems[0]) => {
    setActiveTab(item.id);
    
    if (item.id === "register" && item.isMainAction) {
      // Main action - open registration link
      window.open('https://unstop.com/p/code-marathon-2k24-annasaheb-dange-college-of-engineering-and-technology-1151369', '_blank');
    } else {
      // Regular navigation
      scrollToSection(item.href);
    }
  };

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = bottomNavItems.map(item => ({
        id: item.id,
        element: document.querySelector(item.href) as HTMLElement
      }));

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          const offsetHeight = section.element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <>
      {/* Desktop Navigation (Top) */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:block hidden ${
        isScrolled 
          ? 'bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800/50' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30">
                <Code className="w-6 h-6 text-accent-primary" />
              </div>
              <div>
                <h1 className="text-xl font-light text-foreground">
                  <span className="font-mono text-accent-primary">Codathon</span>
                </h1>
                <p className="text-xs text-accent-secondary font-medium">2k25</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-neutral-300 hover:text-accent-primary transition-colors duration-300 font-light"
                >
                  {item.name}
                </button>
              ))}
              
              <Button 
                variant="default"
                size="sm"
                className="bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-medium"
                onClick={() => window.open('https://unstop.com/p/code-marathon-2k24-annasaheb-dange-college-of-engineering-and-technology-1151369', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Register
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Header (Simplified) */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800/50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30">
              <Code className="w-5 h-5 text-accent-primary" />
            </div>
            <div>
              <h1 className="text-lg font-light text-foreground">
                <span className="font-mono text-accent-primary">Codathon</span>
              </h1>
            </div>
          </div>
          
          <div className="text-xs text-accent-secondary font-medium bg-accent-secondary/20 px-2 py-1 rounded-full">
            2k25
          </div>
        </div>
      </nav>

      {/* Modern Mobile Bottom Navigation */}
      <nav 
        role="navigation"
        aria-label="Main navigation"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-neutral-200 shadow-2xl"
      >
        {/* Background blur overlay */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-md"></div>
        
        <div className="relative flex justify-around items-center px-2 py-2 safe-area-pb">
          {bottomNavItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            const isMainAction = item.isMainAction;
            
            if (isMainAction) {
              // Center Action Button (Register)
              return (
                <button
                  key={item.id}
                  onClick={() => handleBottomNavClick(item)}
                  className="relative flex flex-col items-center justify-center p-2 -translate-y-3 group"
                  aria-label={item.ariaLabel}
                  title={item.label}
                >
                  {/* Main action button background */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary shadow-lg flex items-center justify-center group-active:scale-95 transition-all duration-200 border-4 border-white">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Main action label */}
                  <span className="text-xs font-semibold text-accent-primary mt-1 group-active:scale-95 transition-transform duration-200">
                    {item.label}
                  </span>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary opacity-20 blur-lg -translate-y-0"></div>
                </button>
              );
            }
            
            // Regular navigation items
            return (
              <button
                key={item.id}
                onClick={() => handleBottomNavClick(item)}
                className={`relative flex flex-col items-center justify-center p-3 min-w-[60px] group transition-all duration-200 ${
                  isActive ? 'text-accent-primary' : 'text-neutral-500'
                }`}
                aria-label={item.ariaLabel}
                title={item.label}
              >
                {/* Icon */}
                <div className={`transition-all duration-200 ${
                  isActive ? 'scale-110 -translate-y-0.5' : 'group-active:scale-95'
                }`}>
                  <IconComponent className={`w-6 h-6 transition-colors duration-200 ${
                    isActive ? 'text-accent-primary' : 'text-neutral-500 group-hover:text-neutral-700'
                  }`} />
                </div>
                
                {/* Label */}
                <span className={`text-xs mt-1 transition-all duration-200 ${
                  isActive 
                    ? 'font-semibold text-accent-primary scale-105' 
                    : 'font-medium text-neutral-500 group-hover:text-neutral-700'
                }`}>
                  {item.label}
                </span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-primary rounded-full animate-pulse"></div>
                )}
                
                {/* Ripple effect on active */}
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl bg-accent-primary/5 scale-110 animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>
        
        {/* Safe area for devices with home indicator */}
        <div className="h-safe-area-inset-bottom bg-white"></div>
      </nav>

      {/* Content padding for bottom navigation */}
      <div className="md:hidden h-20"></div>
    </>
  );
};

export default Navigation;
