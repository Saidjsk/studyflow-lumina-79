
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function Lessons() {
  const { subjectId } = useParams<{ subjectId: string }>();
  
  // Get subject name from the subjects object in Subject.tsx
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
      
      {/* Under Development Alert */}
      <div className="max-w-4xl mx-auto mt-16">
        <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 mb-6">
          <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <AlertTitle className="text-blue-800 dark:text-blue-300 text-lg">قيد التطوير</AlertTitle>
          <AlertDescription className="text-blue-700 dark:text-blue-300">
            هذا القسم قيد التطوير حاليًا. سيتم إضافة دروس وملخصات مفصلة لمادة {getSubjectName()} قريبًا.
          </AlertDescription>
        </Alert>
        
        <div className="flex flex-col items-center justify-center text-center p-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <BookOpen size={64} className="text-blue-500 dark:text-blue-400 mb-6 opacity-50" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            دروس وملخصات {getSubjectName()}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg">
            نعمل حاليًا على إعداد محتوى تعليمي شامل لهذه المادة. سيتضمن المحتوى دروسًا مفصلة، ملخصات، وتمارين تطبيقية لمساعدتك في فهم المادة وتحقيق أفضل النتائج.
          </p>
        </div>
      </div>
    </div>
  );
}
