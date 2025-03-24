
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface OnboardingContextType {
  hasOnboarded: boolean;
  setHasOnboarded: (value: boolean) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [hasOnboarded, setHasOnboarded] = useState<boolean>(true); // Default to true to prevent flash
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check localStorage on mount
    const onboardingStatus = localStorage.getItem('hasOnboarded');
    setHasOnboarded(onboardingStatus === 'true');
    setIsLoading(false);
  }, []);

  const value = {
    hasOnboarded,
    setHasOnboarded: (value: boolean) => {
      setHasOnboarded(value);
      localStorage.setItem('hasOnboarded', value.toString());
    }
  };

  if (isLoading) {
    return null; // Prevents flash of content during loading
  }

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
