
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Calculator, BarChart, Globe, PieChart, 
  Database, FileText, BookMarked, Pencil, Building, Clock, Scale, Lightbulb,
  TrendingUp, Calendar, CheckCircle, AlertTriangle, Trophy, BookOpenCheck, GraduationCap, 
  LineChart, Award, Star, Target, Sparkles
} from 'lucide-react';
import SubjectCard from '@/components/home/SubjectCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import CountdownDisplay from '@/components/home/CountdownDisplay';
import DailyTipCard from '@/components/home/DailyTipCard';
import StudyGoalsSection from '@/components/home/StudyGoalsSection';
import RecentActivityCard from '@/components/home/RecentActivityCard';

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
  const [recentActivities, setRecentActivities] = useState([
    {
      id: 1,
      subject: 'الرياضيات',
      icon: PieChart,
      color: '#EF4444',
      activity: 'اكملت درس المشتقات',
      timestamp: '1 ساعة',
      type: 'lesson' as 'lesson' | 'exercise' | 'quiz' | 'note'
    },
    {
      id: 2,
      subject: 'اللغة العربية',
      icon: Pencil,
      color: '#6366F1',
      activity: 'حل تمارين البلاغة',
      timestamp: '3 ساعات',
      type: 'exercise' as 'lesson' | 'exercise' | 'quiz' | 'note'
    },
    {
      id: 3,
      subject: 'الفيزياء',
      icon: LineChart,
      color: '#10B981',
      activity: 'اجتياز اختبار الميكانيكا',
      timestamp: 'اليوم',
      type: 'quiz' as 'lesson' | 'exercise' | 'quiz' | 'note'
    }
  ]);

  const [badges, setBadges] = useState([
    {
      id: 1,
      title: 'متقن المشتقات',
      icon: Award,
      color: '#EF4444',
      date: 'حصلت عليها منذ يومين'
    },
    {
      id: 2,
      title: '7 أيام متتالية',
      icon: Star,
      color: '#F59E0B',
      date: 'حصلت عليها بالأمس'
    },
    {
      id: 3,
      title: 'متفوق في الفيزياء',
      icon: Target,
      color: '#10B981',
      date: 'حصلت عليها اليوم'
    }
  ]);

  const [featuredCourses, setFeaturedCourses] = useState([
    {
      id: 1,
      title: 'أساسيات المشتقات',
      subject: 'الرياضيات',
      icon: PieChart,
      color: '#EF4444',
      completion: 75,
      path: '/subject/mathematics/lessons'
    },
    {
      id: 2,
      title: 'البلاغة العربية',
      subject: 'اللغة العربية',
      icon: Pencil,
      color: '#6366F1',
      completion: 40,
      path: '/subject/arabic/lessons'
    },
    {
      id: 3,
      title: 'قوانين نيوتن',
      subject: 'الفيزياء',
      icon: LineChart,
      color: '#10B981',
      completion: 60,
      path: '/subject/physics/lessons'
    }
  ]);

  // تحديث العد التنازلي ليستهدف 15 جوان 2025
  useEffect(() => {
    // Simulate loading user data from backend
    const timer = setTimeout(() => {
      // In a real app, this would be an API call
      console.log("User data loaded");
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animate-fade-in pb-20">
      <div className="relative mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-2">مرحبًا بك في منصة التحضير للبكالوريا</h1>
          <p className="text-blue-100 mb-4">منصة متكاملة للمذاكرة والتحضير للامتحان النهائي</p>
          <div className="flex flex-wrap gap-2">
            <Link to="/exercises">
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                <BookOpen className="mr-2 h-4 w-4" />
                ابدأ المذاكرة
              </Button>
            </Link>
            <Link to="/calculator">
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                <Calculator className="mr-2 h-4 w-4" />
                الحاسبة
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 opacity-10">
          <Sparkles className="h-64 w-64 text-white" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <CountdownDisplay />
        <DailyTipCard />
      </div>

      <StudyGoalsSection />

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <RecentActivityCard activities={recentActivities} />
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              الدروس المميزة
            </CardTitle>
            <CardDescription>الدروس الأكثر أهمية للمراجعة قبل الامتحان</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {featuredCourses.map(course => {
              const CourseIcon = course.icon;
              return (
                <div key={course.id} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: course.color }}
                    >
                      <CourseIcon size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-xs text-gray-500">{course.subject}</p>
                    </div>
                    <Badge className="ml-auto">{course.completion}%</Badge>
                  </div>
                  <Progress value={course.completion} className="h-2 mb-3" />
                  <div className="flex justify-end">
                    <Link to={course.path}>
                      <Button variant="ghost" size="sm">
                        متابعة الدرس
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </CardContent>
          <CardFooter>
            <Link to="/exercises" className="w-full">
              <Button variant="outline" className="w-full">عرض جميع الدروس</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 text-yellow-500 mr-2" />
            إنجازاتك
          </CardTitle>
          <CardDescription>الشارات التي حصلت عليها مؤخراً</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {badges.map(badge => {
              const BadgeIcon = badge.icon;
              return (
                <div key={badge.id} className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: badge.color }}
                  >
                    <BadgeIcon size={24} className="text-white" />
                  </div>
                  <h4 className="font-medium mb-1">{badge.title}</h4>
                  <p className="text-xs text-gray-500">{badge.date}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button variant="ghost" className="text-sm">عرض جميع الإنجازات</Button>
        </CardFooter>
      </Card>

      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">المواد الدراسية</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
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

      <div className="flex justify-center mb-24">
        <Link to="/tips">
          <Button className="bg-blue-600 hover:bg-blue-700">
            اكتشف المزيد من النصائح والموارد
          </Button>
        </Link>
      </div>
    </div>
  );
}
