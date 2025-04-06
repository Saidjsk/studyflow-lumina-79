
import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownDisplay() {
  const [countdown, setCountdown] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [animateSeconds, setAnimateSeconds] = useState(false);

  useEffect(() => {
    const examDate = new Date('2025-06-15T00:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = examDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setCountdown({
          days,
          hours,
          minutes,
          seconds
        });
        
        // Add a pulse animation when seconds change
        setAnimateSeconds(true);
        setTimeout(() => setAnimateSeconds(false), 500);
      } else {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="md:col-span-2 animate-scale-in overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <h3 className="font-bold">العد التنازلي للبكالوريا</h3>
            </div>
            <p className="text-sm">15 جوان 2025</p>
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
              <span className={`text-2xl font-bold ${animateSeconds ? 'animate-pulse' : ''}`}>
                {countdown.seconds}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">ثانية</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
