
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
        { id: 'money', title: 'الوحدة الأولى: النقود', description: 'درس تفصيلي حول النقود ووظائفها وأنواعها' },
        { id: 'market', title: 'الوحدة الثانية: السوق والأسعار', description: 'درس تفصيلي حول السوق وتحديد الأسعار والعرض والطلب' },
        { id: 'banks', title: 'الوحدة الثالثة: النظام المصرفي', description: 'درس تفصيلي حول البنوك والنظام المصرفي' },
        { id: 'trade', title: 'الوحدة الرابعة: التجارة الخارجية', description: 'درس تفصيلي حول التجارة الخارجية والاستيراد والتصدير' },
        { id: 'exchange', title: 'الوحدة الخامسة: الصرف', description: 'درس تفصيلي حول الصرف وأسعار العملات' },
        { id: 'unemployment', title: 'الوحدة السادسة: البطالة', description: 'درس تفصيلي حول البطالة وأسبابها وحلولها' },
        { id: 'inflation', title: 'الوحدة السابعة: التضخم', description: 'درس تفصيلي حول التضخم وأسبابه وآثاره' },
        { id: 'leadership', title: 'الوحدة الثامنة: القيادة', description: 'درس تفصيلي حول القيادة وأنماطها' },
        { id: 'communication', title: 'الوحدة التاسعة: الاتصال', description: 'درس تفصيلي حول الاتصال ومهاراته' },
        { id: 'control', title: 'الوحدة العاشرة: الرقابة', description: 'درس تفصيلي حول الرقابة وأنواعها' },
        { id: 'finance', title: 'الوحدة الحادية عشر: التمويل', description: 'درس تفصيلي حول التمويل ومصادره' },
        { id: 'production', title: 'الوحدة الثانية عشر: الإنتاج', description: 'درس تفصيلي حول الإنتاج وعناصره' }
      ];
    } else if (subjectId === 'history') {
      return [
        { id: 'chapter1', title: 'المبحث الأول: بروز الصراع وتشكل العالم', description: 'نهاية الحرب العالمية الثانية وبداية الصراع وتشكيل المعسكرين' },
        { id: 'chapter2', title: 'المبحث الثاني: قيادة العالم بقطبية ثنائية', description: 'الولايات المتحدة والاتحاد السوفيتي وسياسات القطبين العظيمين' },
        { id: 'chapter3', title: 'المبحث الثالث: الأزمات الدولية في ظل الصراع بين المعسكرين', description: 'أزمة برلين وأزمة الصواريخ الكوبية وحرب فيتنام والصراعات الإقليمية' },
        { id: 'chapter4', title: 'المبحث الرابع: مساعي الانفراج الدولي', description: 'سياسة التعايش السلمي ونهاية الحرب الباردة' }
      ];
    } else if (subjectId === 'accounting') {
      return [
        { id: 'lesson1', title: 'الوحدة الأولى: المحاسبة', description: 'المحاسبة، مفاهيمها، أهدافها، مبادئها، عناصرها الأساسية' },
        { id: 'lesson2', title: 'الوحدة الثانية: الميزانية', description: 'هذا الدرس قيد التطوير' }
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
      <div className="flex items-center mb-8 text-gray-400">
        <Link 
          to="/" 
          className="flex items-center hover:text-blue-400 transition-colors"
        >
          <span>الرئيسية</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <Link 
          to={`/subject/${subjectId}`}
          className="flex items-center hover:text-blue-400 transition-colors"
        >
          <span>{getSubjectName()}</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <span className="text-white font-medium">الدروس والملخصات</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {lessons.map(lesson => (
          <Link key={lesson.id} to={`/subject/${subjectId}/lesson/${lesson.id}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full bg-gray-900 border-gray-800 hover:border-gray-700">
              <CardHeader className="border-b border-gray-800" style={{ backgroundColor: `${subjectColor}15` }}>
                <div className="flex items-center">
                  <div className="p-2 rounded-full ml-3" style={{ backgroundColor: subjectColor }}>
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg" style={{ color: subjectColor }}>
                    {lesson.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-300">
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
