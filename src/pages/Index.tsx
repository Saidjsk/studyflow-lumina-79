import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Calculator, BarChart, Globe, PieChart, 
  Database, FileText, BookMarked, Pencil, Building, Clock, Scale, Lightbulb,
  TrendingUp, Calendar, CheckCircle, AlertTriangle, Trophy, BookOpenCheck, GraduationCap
} from 'lucide-react';
import SubjectCard from '@/components/home/SubjectCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface QuickTip {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface SubjectGoal {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  progress: number;
  dailyGoal: number;
  weeklyGoal: number;
  completedToday: number;
  lastActivity: string;
}

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
  }
];

const subjectGoals: SubjectGoal[] = [
  {
    id: 'mathematics',
    name: 'الرياضيات',
    icon: PieChart,
    color: '#EF4444',
    progress: 60,
    dailyGoal: 3,
    weeklyGoal: 15,
    completedToday: 2,
    lastActivity: 'مشاهدة درس المشتقات'
  },
  {
    id: 'arabic',
    name: 'اللغة العربية',
    icon: Pencil,
    color: '#6366F1',
    progress: 75,
    dailyGoal: 2,
    weeklyGoal: 10,
    completedToday: 2,
    lastActivity: 'حل تمارين البلاغة'
  },
  {
    id: 'physics',
    name: 'الفيزياء',
    icon: Globe,
    color: '#10B981',
    progress: 45,
    dailyGoal: 2,
    weeklyGoal: 12,
    completedToday: 1,
    lastActivity: 'اختبار قصير في الميكانيكا'
  },
  {
    id: 'accounting',
    name: 'المحاسبة',
    icon: Calculator,
    color: '#10B981',
    progress: 55,
    dailyGoal: 2,
    weeklyGoal: 10,
    completedToday: 0,
    lastActivity: 'مراجعة الميزانية العمومية'
  },
  {
    id: 'economics',
    name: 'الإقتصاد',
    icon: BarChart,
    color: '#3B82F6',
    progress: 35,
    dailyGoal: 2,
    weeklyGoal: 8,
    completedToday: 1,
    lastActivity: 'قراءة عن العرض والطلب'
  }
];

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
  const [randomTipIndex, setRandomTipIndex] = useState<number>(Math.floor(Math.random() * quickTips.length));
  const [selectedSubjects, setSelectedSubjects] = useState<SubjectGoal[]>(subjectGoals.slice(0, 3));
  const [dailyStreak, setDailyStreak] = useState<number>(0);
  const [dailyGoalProgress, setDailyGoalProgress] = useState<number>(0);

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

  useEffect(() => {
    const lastTipUpdate = localStorage.getItem('lastTipUpdate');
    const now = new Date().toDateString();
    
    if (lastTipUpdate !== now) {
      const newIndex = Math.floor(Math.random() * quickTips.length);
      setRandomTipIndex(newIndex);
      localStorage.setItem('lastTipUpdate', now);
    }
  }, []);

  useEffect(() => {
    const totalDailyGoals = selectedSubjects.reduce((sum, subject) => sum + subject.dailyGoal, 0);
    const totalCompleted = selectedSubjects.reduce((sum, subject) => sum + subject.completedToday, 0);
    
    const progressPercent = totalDailyGoals > 0 ? Math.round((totalCompleted / totalDailyGoals) * 100) : 0;
    setDailyGoalProgress(progressPercent);
    
    const savedStreak = localStorage.getItem('dailyStudyStreak');
    if (savedStreak) {
      setDailyStreak(parseInt(savedStreak));
    } else {
      const randomStreak = Math.floor(Math.random() * 10) + 3;
      setDailyStreak(randomStreak);
      localStorage.setItem('dailyStudyStreak', randomStreak.toString());
    }
  }, [selectedSubjects]);

  const CurrentTipIcon = quickTips[randomTipIndex].icon;

  return (
    <div className="animate-fade-in pb-20">
      <div className="mb-6 grid gap-4 md:grid-cols-3">
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
                  <span className="text-2xl font-bold">{countdown.seconds}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">ثانية</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-scale-in">
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
          <CardFooter className="pt-0">
            <Link to="/tips">
              <Button variant="link" className="p-0 h-auto text-blue-600 dark:text-blue-400">
                المزيد من النصائح
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <Card className="mb-6 animate-scale-in">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" /> 
            أهدافك التعليمية
          </CardTitle>
          <CardDescription>تتبع تقدمك اليومي والأسبوعي في المواد</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="rounded-full bg-blue-100 dark:bg-blue-800 p-3">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">{dailyGoalProgress}%</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">من أهدافك اليومية</p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="rounded-full bg-green-100 dark:bg-green-800 p-3">
                  <Calendar className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-300">{dailyStreak}</h3>
              <p className="text-sm text-green-600 dark:text-green-400">أيام دراسة متتالية</p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="rounded-full bg-purple-100 dark:bg-purple-800 p-3">
                  <BookOpenCheck className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                {selectedSubjects.reduce((sum, subject) => sum + subject.completedToday, 0)}
              </h3>
              <p className="text-sm text-purple-600 dark:text-purple-400">دروس مكتملة اليوم</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {selectedSubjects.map(subject => (
              <div key={subject.id} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: subject.color }}
                    >
                      <subject.icon size={18} className="text-white" />
                    </div>
                    <h4 className="font-medium">{subject.name}</h4>
                  </div>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{subject.progress}%</span>
                </div>
                
                <Progress value={subject.progress} className="h-2 mb-3" />
                
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>آخر نشاط: {subject.lastActivity}</span>
                  <span>اليوم: {subject.completedToday}/{subject.dailyGoal}</span>
                </div>
                
                <div className="flex justify-end mt-2">
                  <Link to={`/subject/${subject.id}`}>
                    <Button variant="ghost" size="sm" className="text-xs">
                      متابعة الدروس
                    </Button>
                  </Link>
                  <Link to={`/exercises?subject=${subject.id}`}>
                    <Button variant="ghost" size="sm" className="text-xs">
                      التمارين
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/exercises">
            <Button variant="outline" size="sm">
              مواصلة التعلم
            </Button>
          </Link>
          
          <Button variant="ghost" size="sm" onClick={() => {
            const shuffled = [...subjectGoals].sort(() => 0.5 - Math.random());
            setSelectedSubjects(shuffled.slice(0, 3));
          }}>
            عرض مواد أخرى
          </Button>
        </CardFooter>
      </Card>

      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">المواد الدراسية</h2>
      <div className="grid grid-cols-2 gap-3 mb-8">
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

      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">نصائح سريعة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {quickTips.map((tip) => {
          const TipIcon = tip.icon;
          return (
            <Card key={tip.id} className="animate-scale-in hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2 mt-1">
                    <TipIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{tip.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{tip.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex justify-center mb-24">
        <Link to="/tips">
          <Button className="bg-blue-600 hover:bg-blue-700">
            اكتشف المزيد من النصائح
          </Button>
        </Link>
      </div>
    </div>
  );
}
