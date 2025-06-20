
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopNav from './TopNav';
import Footer from './Footer';
import PrivacyNotice from '../privacy/PrivacyNotice';
import { useAds } from '@/contexts/AdsContext';
import { useTheme } from '@/contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { showInterstitial } = useAds();
  const { theme } = useTheme();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Show interstitial ad on route change (not on first load)
    const isFirstLoad = sessionStorage.getItem('firstLoad') === null;
    if (isFirstLoad) {
      sessionStorage.setItem('firstLoad', 'false');
    } else {
      // Check privacy consent before showing ads
      const consent = localStorage.getItem('privacy_consent');
      if (consent === 'true') {
        // Show interstitial ad with 20% probability on navigation
        if (Math.random() < 0.2) {
          showInterstitial();
        }
      }
    }
  }, [location.pathname, showInterstitial]);

  return (
    <div className={`flex flex-col min-h-screen ${
      theme === 'dark' 
        ? 'bg-gray-950 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <TopNav />
      <main className="flex-1">
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 mb-20">
          {children}
        </div>
      </main>
      <Footer />
      <PrivacyNotice />
    </div>
  );
}
