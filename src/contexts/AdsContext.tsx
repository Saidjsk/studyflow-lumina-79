
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdsContextType {
  adsEnabled: boolean;
  toggleAds: () => void;
  showInterstitial: () => void;
}

const AdsContext = createContext<AdsContextType | undefined>(undefined);

export const useAds = (): AdsContextType => {
  const context = useContext(AdsContext);
  if (context === undefined) {
    throw new Error('useAds must be used within an AdsProvider');
  }
  return context;
};

interface AdsProviderProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    StartAppAds?: {
      init: (appId: string, callback?: () => void) => void;
      showBanner: () => void;
      showInterstitial: () => void;
      hideBanner: () => void;
    };
  }
}

export const AdsProvider: React.FC<AdsProviderProps> = ({ children }) => {
  const [adsEnabled, setAdsEnabled] = useState<boolean>(() => {
    // Get from localStorage or default to true
    const saved = localStorage.getItem('adsEnabled');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [isReady, setIsReady] = useState(false);

  // Initialize the SDK when component mounts
  useEffect(() => {
    const initializeAds = () => {
      if (window.StartAppAds) {
        // Initialize with your app ID
        window.StartAppAds.init('203165507', () => {
          console.log('Start.io SDK initialized successfully');
          setIsReady(true);
          
          // Show banner if ads are enabled
          if (adsEnabled) {
            setTimeout(() => {
              window.StartAppAds?.showBanner();
            }, 1000);
          }
        });
      }
    };

    // Check if SDK is already loaded
    if (window.StartAppAds) {
      initializeAds();
    } else {
      // Wait for SDK to load
      const handleStartAppReady = () => {
        initializeAds();
      };
      
      window.addEventListener('startAppReady', handleStartAppReady);
      
      return () => {
        window.removeEventListener('startAppReady', handleStartAppReady);
      };
    }
  }, []);

  // Show/hide banner based on adsEnabled state
  useEffect(() => {
    if (isReady && window.StartAppAds) {
      if (adsEnabled) {
        window.StartAppAds.showBanner();
      } else {
        window.StartAppAds.hideBanner();
      }
    }
    
    // Save preference to localStorage
    localStorage.setItem('adsEnabled', JSON.stringify(adsEnabled));
  }, [adsEnabled, isReady]);

  const toggleAds = () => {
    setAdsEnabled(prev => !prev);
  };

  const showInterstitial = () => {
    if (adsEnabled && isReady && window.StartAppAds) {
      window.StartAppAds.showInterstitial();
    }
  };

  const value = {
    adsEnabled,
    toggleAds,
    showInterstitial
  };

  return <AdsContext.Provider value={value}>{children}</AdsContext.Provider>;
};
