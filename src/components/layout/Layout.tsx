
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
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
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Sidebar />
      
      <main className="flex-1 transition-all duration-300 w-full pb-16">
        <div className="container mx-auto px-3 py-6 sm:px-4 sm:py-8 md:pr-16 lg:pr-20">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
