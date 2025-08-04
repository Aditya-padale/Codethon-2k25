import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'light' 
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
        return savedTheme;
      }
      
      // If no saved theme, detect system preference and set it as the theme
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    
    return defaultTheme;
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove preload class to enable transitions after initial render
    document.body.classList.remove('preload');
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add new theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Add preload class on initial render to prevent flash
  useEffect(() => {
    document.body.classList.add('preload');
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const setTheme = (newTheme: Theme) => {
    if (newTheme === theme) return; // Prevent unnecessary updates
    
    setIsTransitioning(true);
    
    // Use requestAnimationFrame for smooth transition
    requestAnimationFrame(() => {
      setThemeState(newTheme);
      
      // End transition after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200); // Match CSS transition duration
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const value = {
    theme,
    toggleTheme,
    setTheme,
    isTransitioning,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
