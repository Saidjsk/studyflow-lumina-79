
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, Clock, TrendingUp, CheckCircle, Calendar, AlertTriangle,
  Brain, Coffee, BookOpen, UserCheck
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuickTip {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

// Quick study tips data
const quickTips: QuickTip[] = [
  {
    id: 1,
    title: "استخدام تقنية بومودورو",
    description: "دراسة 25 دقيقة متواصلة ثم أخذ استراحة 5 دقائق",
    icon: Clock
  },
  {
    id: 2,
    title: "تعلم نشط",
    description: "اشرح المفاهيم بصوت عالٍ أو علّم شخصًا آخر ما تعلمته",
    icon: TrendingUp
  },
  {
    id: 3,
    title: "حل الاختبارات السابقة",
    description: "تدرب على اختبارات البكالوريا السابقة للتعرف على نمط الأسئلة",
    icon: CheckCircle
  },
  {
    id: 4,
    title: "خطة مراجعة",
    description: "ضع جدول زمني محدد لمراجعة جميع المواد قبل الامتحان",
    icon: Calendar
  },
  {
    id: 5,
    title: "تجنب المشتتات",
    description: "ابتعد عن مشتتات الانتباه مثل الهاتف والتلفاز أثناء الدراسة",
    icon: AlertTriangle
  },
  {
    id: 6,
    title: "خرائط ذهنية",
    description: "استخدم الخرائط الذهنية لتنظيم المعلومات وتحسين الاستدعاء",
    icon: Brain
  },
  {
    id: 7,
    title: "فترات راحة كافية",
    description: "خذ فترات راحة كافية بين جلسات المذاكرة وحافظ على ساعات نوم كافية",
    icon: Coffee
  },
  {
    id: 8,
    title: "تلخيص المعلومات",
    description: "لخص الدروس بأسلوبك الخاص لتعزيز الفهم والتذكر",
    icon: BookOpen
  },
  {
    id: 9,
    title: "مجموعات دراسة",
    description: "ادرس مع زملاء موثوقين لتبادل المعرفة وتحفيز بعضكم البعض",
    icon: UserCheck
  }
];

export default function DailyTipCard() {
  const [randomTipIndex, setRandomTipIndex] = useState<number>(Math.floor(Math.random() * quickTips.length));
  const [isNewTip, setIsNewTip] = useState(false);

  useEffect(() => {
    // Check if we need to update the tip (once per day)
    const lastTipUpdate = localStorage.getItem('lastTipUpdate');
    const now = new Date().toDateString();
    
    if (lastTipUpdate !== now) {
      const newIndex = Math.floor(Math.random() * quickTips.length);
      setRandomTipIndex(newIndex);
      localStorage.setItem('lastTipUpdate', now);
      setIsNewTip(true);
      
      // Remove the animation after a while
      setTimeout(() => setIsNewTip(false), 2000);
    }
  }, []);

  const handleNewTip = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quickTips.length);
    } while (newIndex === randomTipIndex);
    
    setRandomTipIndex(newIndex);
    setIsNewTip(true);
    setTimeout(() => setIsNewTip(false), 2000);
  };

  const CurrentTipIcon = quickTips[randomTipIndex].icon;

  return (
    <Card className={`animate-scale-in transition-all duration-300 ${isNewTip ? 'scale-105' : ''}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-1 text-lg font-semibold">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          نصيحة اليوم
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
              <CurrentTipIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="font-medium">{quickTips[randomTipIndex].title}</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {quickTips[randomTipIndex].description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant="ghost" size="sm" onClick={handleNewTip}>
          نصيحة أخرى
        </Button>
        <Link to="/tips">
          <Button variant="link" className="p-0 h-auto text-blue-600 dark:text-blue-400">
            المزيد من النصائح
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
