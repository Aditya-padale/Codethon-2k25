import { useEffect } from "react";

export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Allow users to navigate sections with keyboard
      if (event.ctrlKey || event.metaKey) {
        const sections = ['hero', 'institute-journey', 'rounds', 'benefits', 'rules', 'gallery', 'calendar', 'faq', 'registration'];
        const currentIndex = sections.findIndex(id => {
          const element = document.getElementById(id);
          return element && element.getBoundingClientRect().top <= 100;
        });

        let targetIndex = currentIndex;
        
        switch (event.key) {
          case 'ArrowDown':
          case 'j':
            event.preventDefault();
            targetIndex = Math.min(currentIndex + 1, sections.length - 1);
            break;
          case 'ArrowUp':
          case 'k':
            event.preventDefault();
            targetIndex = Math.max(currentIndex - 1, 0);
            break;
          case 'Home':
            event.preventDefault();
            targetIndex = 0;
            break;
          case 'End':
            event.preventDefault();
            targetIndex = sections.length - 1;
            break;
        }

        if (targetIndex !== currentIndex) {
          const targetElement = document.getElementById(sections[targetIndex]);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            targetElement.focus({ preventScroll: true });
          }
        }
      }

      // Escape key closes modals
      if (event.key === 'Escape') {
        const activeModal = document.querySelector('[role="dialog"]');
        if (activeModal) {
          const closeButton = activeModal.querySelector('[aria-label="Close"]') as HTMLButtonElement;
          closeButton?.click();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
};

export const useReducedMotion = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.style.removeProperty('--animation-duration');
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    handleMotionChange(prefersReducedMotion as any);
    prefersReducedMotion.addEventListener('change', handleMotionChange);
    
    return () => prefersReducedMotion.removeEventListener('change', handleMotionChange);
  }, []);
};

export const useFocusTrap = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = document.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isActive]);
};
