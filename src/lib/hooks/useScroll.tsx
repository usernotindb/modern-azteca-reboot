
import { useState, useEffect } from 'react';

/**
 * Hook to detect scroll position
 * @param threshold The scroll position at which to trigger
 * @returns Whether the user has scrolled past the threshold
 */
export function useScroll(threshold: number = 100): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}

/**
 * Smoothly scrolls to an element by ID
 * @param elementId The ID of the element to scroll to
 * @param offset Optional offset from the top of the element
 */
export function scrollToElement(elementId: string, offset: number = 0): void {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/**
 * Smoothly scrolls to the top of the page
 * @param smooth Whether to use smooth scrolling
 */
export function scrollToTop(smooth: boolean = true): void {
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto'
  });
}

/**
 * Hook to scroll to the top of the page when the component mounts
 * Useful for page navigation
 */
export function useScrollToTopOnMount(): void {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

