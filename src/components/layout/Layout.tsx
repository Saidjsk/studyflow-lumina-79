
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopNav from './TopNav';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-950 dark:to-gray-900">
      <TopNav />
      <main className="flex-1 overflow-x-hidden">
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6 mb-16">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
