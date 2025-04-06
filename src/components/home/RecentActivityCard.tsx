
import { useState } from 'react';
import { Clock, BookOpen, CheckCircle, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Activity {
  id: number;
  subject: string;
  icon: React.ElementType;
  color: string;
  activity: string;
  timestamp: string;
  type: 'lesson' | 'exercise' | 'quiz' | 'note';
}

interface RecentActivityCardProps {
  activities: Activity[];
}

export default function RecentActivityCard({ activities }: RecentActivityCardProps) {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredActivities = filter 
    ? activities.filter(activity => activity.type === filter)
    : activities;

  const getActivityIcon = (type: string) => {
    switch(type) {
      case 'lesson':
        return <BookOpen className="h-4 w-4" />;
      case 'exercise':
        return <CheckCircle className="h-4 w-4" />;
      case 'quiz':
        return <Brain className="h-4 w-4" />;
      case 'note':
        return <Clock className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="h-5 w-5 text-blue-500 mr-2" />
          آخر الأنشطة
        </CardTitle>
        <CardDescription>آخر الأنشطة التي قمت بها مؤخراً</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Button 
            variant={filter === null ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter(null)}
            className="text-xs"
          >
            الكل
          </Button>
          <Button 
            variant={filter === 'lesson' ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter('lesson')}
            className="text-xs"
          >
            الدروس
          </Button>
          <Button 
            variant={filter === 'exercise' ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter('exercise')}
            className="text-xs"
          >
            التمارين
          </Button>
          <Button 
            variant={filter === 'quiz' ? "default" : "outline"} 
            size="sm" 
            onClick={() => setFilter('quiz')}
            className="text-xs"
          >
            الاختبارات
          </Button>
        </div>
        
        <div className="space-y-4">
          {filteredActivities.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              لا توجد أنشطة حاليًا
            </div>
          ) : (
            filteredActivities.map(activity => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <div 
                    className="p-2 rounded-md mt-1"
                    style={{ backgroundColor: activity.color }}
                  >
                    <ActivityIcon size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{activity.subject}</h4>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {activity.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{activity.activity}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs flex items-center gap-1 text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                        {getActivityIcon(activity.type)}
                        {activity.type === 'lesson' ? 'درس' : 
                          activity.type === 'exercise' ? 'تمرين' : 
                          activity.type === 'quiz' ? 'اختبار' : 'ملاحظة'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="w-full">
          عرض جميع الأنشطة
        </Button>
      </CardFooter>
    </Card>
  );
}
