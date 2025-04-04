
import { useEffect, useState } from 'react';
import { 
  BookOpen, Calculator, BarChart, Globe, PieChart, 
  Database, FileText, BookMarked, Pencil, Building, Clock, Scale, Lightbulb
} from 'lucide-react';
import SubjectCard from '@/components/home/SubjectCard';
import { Card, CardContent } from "@/components/ui/card";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const subjects = [
  {
    id: 'accounting',
    name: 'المحاسبة',
    icon: Calculator,
    color: '#10B981'
  },
  {
    id: 'economics',
    name: 'الإقتصاد',
    icon: BarChart,
    color: '#3B82F6'
  },
  {
    id: 'mathematics',
    name: 'الرياضيات',
    icon: PieChart,
    color: '#EF4444'
  },
  {
    id: 'history',
    name: 'التاريخ والجغرافيا',
    icon: Globe,
    color: '#F97316'
  },
  {
    id: 'arabic',
    name: 'اللغة العربية',
    icon: Pencil,
    color: '#6366F1'
  },
  {
    id: 'french',
    name: 'اللغة الفرنسية',
    icon: BookMarked,
    color: '#EC4899'
  },
  {
    id: 'amazigh',
    name: 'اللغة الأمازيغية',
    icon: Building,
    color: '#8B5CF6'
  },
  {
    id: 'english',
    name: 'اللغة الإنجليزية',
    icon: Globe,
    color: '#0EA5E9'
  },
  {
    id: 'islamic',
    name: 'العلوم الإسلامية',
    icon: BookOpen,
    color: '#14B8A6'
  },
  {
    id: 'philosophy',
    name: 'الفلسفة',
    icon: Lightbulb,
    color: '#9333EA'
  },
  {
    id: 'law',
    name: 'القانون',
    icon: Scale,
    color: '#F59E0B'
  }
];

export default function Index() {
  const [countdown, setCountdown] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // تحديث العد التنازلي ليستهدف 15 جوان 2025
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
      } else {
        // في حالة انتهاء الوقت
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };
    
    // حساب الوقت المتبقي فورًا ثم إعداد الفاصل الزمني
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in pb-20">
      {/* العد التنازلي */}
      <Card className="mb-6 animate-scale-in overflow-hidden">
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
                <span className="text-2xl font-bold">{countdown.seconds}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">ثانية</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-3 mb-24">
        {subjects.map((subject, index) => (
          <SubjectCard
            key={subject.id}
            id={subject.id}
            name={subject.name}
            icon={subject.icon}
            color={subject.color}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
}
