
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopNav from './TopNav';
import Footer from './Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [countdown, setCountdown] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Countdown timer effect
  useEffect(() => {
    const examDate = new Date('2024-06-15T00:00:00');
    
    const calculateTimeLeft = () => {
      const difference = +examDate - +new Date();
      
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-950 dark:to-gray-900">
      <TopNav />
      <main className="flex-1">
        <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
          {/* Countdown Timer */}
          <Card className="mb-6 animate-scale-in overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <h3 className="font-bold">العد التنازلي للبكالوريا</h3>
                  </div>
                  <p className="text-sm">15 جوان 2024</p>
                </div>
              </div>
              <div className="flex justify-center items-center p-4">
                <div className="grid grid-cols-4 gap-3 text-center w-full max-w-md">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">{countdown.days}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">يوم</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">{countdown.hours}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">ساعة</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">{countdown.minutes}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">دقيقة</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">{countdown.seconds}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">ثانية</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
