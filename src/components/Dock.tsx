import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/ThemeProvider";
import { 
  Home, 
  GraduationCap, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Sun, 
  Moon
} from "lucide-react";

const Dock = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="w-max p-2 rounded-full border pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        
        {/* Home Button */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{width: "40px"}}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full size-12 hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a href="/">
              <Home className="size-4" />
            </a>
          </Button>
        </div>

        {/* About College Button */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{width: "40px"}}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full size-12 hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a href="/college-info">
              <GraduationCap className="size-4" />
            </a>
          </Button>
        </div>

        {/* Separator */}
        <Separator orientation="vertical" className="h-full mx-2" />

        {/* Instagram Button */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{width: "40px"}}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full size-12 hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a href="https://instagram.com/adcet_official" target="_blank" rel="noopener noreferrer">
              <Instagram className="size-4" />
            </a>
          </Button>
        </div>

        {/* Facebook Button */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{width: "40px"}}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full size-12 hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a href="https://facebook.com/adcet.official" target="_blank" rel="noopener noreferrer">
              <Facebook className="size-4" />
            </a>
          </Button>
        </div>

        {/* LinkedIn Button */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{width: "40px"}}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full size-12 hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a href="https://linkedin.com/school/adcet" target="_blank" rel="noopener noreferrer">
              <Linkedin className="size-4" />
            </a>
          </Button>
        </div>

        {/* Separator */}
        <Separator orientation="vertical" className="h-full mx-2" />

        {/* Theme Toggle Button */}
        <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{width: "40px"}}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-9 w-9 px-2 hover:bg-accent hover:text-accent-foreground transition-colors"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
            <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Dock;
