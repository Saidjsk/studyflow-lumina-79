import { useParams, Link } from 'react-router-dom';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Lessons() {
  const { subjectId } = useParams<{ subjectId: string }>();
  
  // Get subject name from the subjects object
  const getSubjectName = () => {
    const subjects: Record<string, { name: string, color: string }> = {
      'accounting': { name: 'المحاسبة', color: '#10B981' },
      'economics': { name: 'الإقتصاد', color: '#3B82F6' },
      'mathematics': { name: 'الرياضيات', color: '#EF4444' },
      'history': { name: 'التاريخ والجغرافيا', color: '#F97316' },
      'arabic': { name: 'اللغة العربية', color: '#6366F1' },
      'french': { name: 'اللغة الفرنسية', color: '#EC4899' },
      'amazigh': { name: 'اللغة الأمازيغية', color: '#8B5CF6' },
      'english': { name: 'اللغة الإنجليزية', color: '#0EA5E9' },
      'islamic': { name: 'العلوم الإسلامية', color: '#14B8A6' },
      'philosophy': { name: 'الفلسفة', color: '#9333EA' },
      'law': { name: 'القانون', color: '#F59E0B' }
    };
    
    return subjectId && subjectId in subjects ? subjects[subjectId].name : 'المادة';
  };

  const getSubjectColor = () => {
    const subjects: Record<string, { name: string, color: string }> = {
      'accounting': { name: 'المحاسبة', color: '#10B981' },
      'economics': { name: 'الإقتصاد', color: '#3B82F6' },
      'history': { name: 'التاريخ والجغرافيا', color: '#F97316' },
      'arabic': { name: 'اللغة العربية', color: '#6366F1' },
      'french': { name: 'اللغة الفرنسية', color: '#EC4899' },
      'amazigh': { name: 'اللغة الأمازيغية', color: '#8B5CF6' },
      'english': { name: 'اللغة الإنجليزية', color: '#0EA5E9' },
      'islamic': { name: 'العلوم الإسلامية', color: '#14B8A6' },
      'philosophy': { name: 'الفلسفة', color: '#9333EA' },
      'law': { name: 'القانون', color: '#F59E0B' },
      'mathematics': { name: 'الرياضيات', color: '#EF4444' }
    };
    
    return subjectId && subjectId in subjects ? subjects[subjectId].color : '#3B82F6';
  };

  // Get lessons available for the subject
  const getLessonsForSubject = () => {
    if (subjectId === 'economics') {
      return [
        { id: 'money', title: 'الوحدة الأولى: النقود', description: 'المبادلة، النقود، خصائصها، وظائفها، أنواعها، إصدارها، الكتلة النقدية، التوازن النقدي' },
        { id: 'market', title: 'الوحدة الثانية: السوق والأسعار', description: 'تعريف السوق، أنواع الأسواق، أشكال السوق، الأسعار، العرض والطلب، التوازن' },
        { id: 'banks', title: 'الوحدة الثالثة: النظام المصرفي', description: 'تعريف النظام المصرفي، أهميته، البنوك وأنواعها، العمليات المصرفية' },
        { id: 'trade', title: 'الوحدة الرابعة: التجارة الدولية', description: 'مفهوم التجارة الدولية، الميزان التجاري، سياسات التجارة الخارجية' }
      ];
    } else if (subjectId === 'history') {
      return [
        { id: 'world-wars', title: 'الوحدة الأولى: الحروب العالمية', description: 'شخصيات سياسية، أحداث تاريخية هامة' },
        { id: 'algeria-revolution', title: 'الوحدة الثانية: الثورة الجزائرية', description: 'قادة الثورة، المراحل التاريخية للثورة، المواثيق' }
      ];
    } else {
      return [
        { id: 'lesson1', title: 'الوحدة الأولى', description: 'هذا الدرس قيد التطوير' }
      ];
    }
  };
  
  const lessons = getLessonsForSubject();
  const subjectColor = getSubjectColor();
  
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link 
          to="/" 
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>الرئيسية</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <Link 
          to={`/subject/${subjectId}`}
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>{getSubjectName()}</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <span className="text-gray-900 dark:text-white font-medium">الدروس والملخصات</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {lessons.map(lesson => (
          <Link key={lesson.id} to={`/subject/${subjectId}/lesson/${lesson.id}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardHeader style={{ backgroundColor: `${subjectColor}15` }} className="border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center">
                  <div className="p-2 rounded-full mr-3" style={{ backgroundColor: subjectColor }}>
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg" style={{ color: subjectColor }}>
                    {lesson.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {lesson.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
