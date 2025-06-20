
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdsContextType {
  adsEnabled: boolean;
  toggleAds: () => void;
  showInterstitial: () => void;
  isSDKSecure: boolean;
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
    validateStartAppSDK?: () => boolean;
  }
}

export const AdsProvider: React.FC<AdsProviderProps> = ({ children }) => {
  const [adsEnabled, setAdsEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('adsEnabled');
      return saved !== null ? JSON.parse(saved) : true;
    } catch (error) {
      console.error('Error reading adsEnabled from localStorage:', error);
      return true;
    }
  });
  const [isReady, setIsReady] = useState(false);
  const [isSDKSecure, setIsSDKSecure] = useState(false);

  // Security validation for the SDK
  const validateSDKSecurity = (): boolean => {
    try {
      // Check if SDK is loaded from expected domain
      const scripts = document.querySelectorAll('script[src*="startapp.com"]');
      if (scripts.length === 0) {
        console.warn('Start.io SDK not found');
        return false;
      }

      // Validate SDK functionality
      if (window.validateStartAppSDK) {
        return window.validateStartAppSDK();
      }

      return typeof window.StartAppAds !== 'undefined';
    } catch (error) {
      console.error('SDK security validation failed:', error);
      return false;
    }
  };

  // Initialize the SDK when component mounts
  useEffect(() => {
    const initializeAds = () => {
      if (window.StartAppAds && validateSDKSecurity()) {
        setIsSDKSecure(true);
        
        // Initialize with your app ID
        try {
          window.StartAppAds.init('203165507', () => {
            console.log('Start.io SDK initialized successfully');
            setIsReady(true);
            
            // Show banner if ads are enabled
            if (adsEnabled) {
              setTimeout(() => {
                if (window.StartAppAds && validateSDKSecurity()) {
                  window.StartAppAds.showBanner();
                }
              }, 1000);
            }
          });
        } catch (error) {
          console.error('Failed to initialize Start.io SDK:', error);
          setIsSDKSecure(false);
        }
      } else {
        console.warn('Start.io SDK security validation failed');
        setIsSDKSecure(false);
      }
    };

    // Check if SDK is already loaded
    if (window.StartAppAds) {
      initializeAds();
    } else {
      // Wait for SDK to load with timeout
      const handleStartAppReady = () => {
        initializeAds();
      };
      
      const timeoutId = setTimeout(() => {
        console.warn('Start.io SDK loading timeout');
        setIsSDKSecure(false);
      }, 10000); // 10 second timeout
      
      window.addEventListener('startAppReady', handleStartAppReady);
      
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('startAppReady', handleStartAppReady);
      };
    }
  }, []);

  // Show/hide banner based on adsEnabled state
  useEffect(() => {
    if (isReady && isSDKSecure && window.StartAppAds) {
      try {
        if (adsEnabled) {
          window.StartAppAds.showBanner();
        } else {
          window.StartAppAds.hideBanner();
        }
      } catch (error) {
        console.error('Error controlling banner display:', error);
      }
    }
    
    // Save preference to localStorage securely
    try {
      localStorage.setItem('adsEnabled', JSON.stringify(adsEnabled));
    } catch (error) {
      console.error('Error saving adsEnabled to localStorage:', error);
    }
  }, [adsEnabled, isReady, isSDKSecure]);

  const toggleAds = () => {
    setAdsEnabled(prev => !prev);
  };

  const showInterstitial = () => {
    if (adsEnabled && isReady && isSDKSecure && window.StartAppAds) {
      try {
        window.StartAppAds.showInterstitial();
      } catch (error) {
        console.error('Error showing interstitial ad:', error);
      }
    }
  };

  const value = {
    adsEnabled,
    toggleAds,
    showInterstitial,
    isSDKSecure
  };

  return <AdsContext.Provider value={value}>{children}</AdsContext.Provider>;
};
