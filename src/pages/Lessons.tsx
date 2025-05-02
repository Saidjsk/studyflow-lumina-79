
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
        { id: 'trade', title: 'الوحدة الرابعة: التجارة الخارجية', description: 'مفهوم التجارة الخارجية، أسباب قيامها، أهميتها، سياسات التجارة الخارجية، ميزان المدفوعات' },
        { id: 'exchange', title: 'الوحدة الخامسة: الصرف', description: 'تعريف الصرف، أنواعه، أسبابه، سوق الصرف، سعر الصرف، أنظمة الصرف، سياسة سعر الصرف' },
        { id: 'unemployment', title: 'الوحدة السادسة: البطالة', description: 'تعريف البطالة، أسبابها، أنواعها، آثارها الاقتصادية والاجتماعية، إجراءات التخفيف منها' },
        { id: 'inflation', title: 'الوحدة السابعة: التضخم', description: 'تعريف التضخم، أنواعه، أسبابه، آثاره الاقتصادية والاجتماعية، وسائل معالجته' },
        { id: 'leadership', title: 'الوحدة الثامنة: القيادة', description: 'تعريف القيادة، أساليبها، العوامل المؤثرة في اختيار أسلوب القيادة، الدافعية (التحفيز)' },
        { id: 'communication', title: 'الوحدة التاسعة: الاتصال', description: 'تعريف الاتصال، أشكاله، مكونات عملية الاتصال، أغراض الاتصال، نجاح عملية الاتصال' },
        { id: 'control', title: 'الوحدة العاشرة: الرقابة', description: 'مراحل الرقابة، خصائص عملية الرقابة الفعالة، أنواع الرقابة، أساليب الرقابة' },
        { id: 'finance', title: 'الوحدة الحادية عشر: التمويل', description: 'تعريف وظيفة التمويل، المهام الأساسية لوظيفة التمويل، مصادر تمويل المؤسسة، عمليات تمويل المؤسسة الاقتصادية' }
      ];
    } else if (subjectId === 'history') {
      return [
        { id: 'colonization', title: 'الوحدة الأولى: الاستعمار في إفريقيا', description: 'درس حول الاستعمار الأوروبي في إفريقيا وآثاره' },
        { id: 'world-wars', title: 'الوحدة الثانية: الحروب العالمية', description: 'محطات بارزة من الحرب العالمية الأولى والثانية' },
        { id: 'algeria-revolution', title: 'الوحدة الثالثة: الثورة الجزائرية', description: 'مراحل الثورة الجزائرية وأهم الأحداث والشخصيات' },
        { id: 'cold-war', title: 'الوحدة الرابعة: الحرب الباردة', description: 'الصراع بين المعسكرين الشرقي والغربي' },
        { id: 'geography', title: 'الوحدة الخامسة: دروس الجغرافيا', description: 'الموارد الطبيعية، السكان، التنمية المستدامة' }
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
