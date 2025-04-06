
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, GraduationCap, Calendar, BookOpenCheck, PieChart, 
  Pencil, Globe, Calculator, BarChart 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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

export default function StudyGoalsSection() {
  const [selectedSubjects, setSelectedSubjects] = useState<SubjectGoal[]>(subjectGoals.slice(0, 3));
  const [dailyStreak, setDailyStreak] = useState<number>(0);
  const [dailyGoalProgress, setDailyGoalProgress] = useState<number>(0);

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

  return (
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
          {selectedSubjects.map(subject => {
            const SubjectIcon = subject.icon;
            return (
              <div key={subject.id} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: subject.color }}
                    >
                      <SubjectIcon size={18} className="text-white" />
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
                  <Link to={`/subject/${subject.id}/lessons`}>
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
            );
          })}
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
  );
}
