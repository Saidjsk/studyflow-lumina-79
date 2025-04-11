
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import EconomicsLesson from '@/components/lessons/EconomicsLesson';
import HistoryLesson from '@/components/lessons/HistoryLesson';
import UnderDevelopmentLesson from '@/components/lessons/UnderDevelopmentLesson';

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

  // Display appropriate lesson content based on subject
  const renderLessonContent = () => {
    if (subjectId === 'economics') {
      return <EconomicsLesson />;
    } else if (subjectId === 'history') {
      return <HistoryLesson />;
    } else {
      return <UnderDevelopmentLesson subjectName={getSubjectName()} />;
    }
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
      
      {/* Render appropriate lesson content */}
      {renderLessonContent()}
    </div>
  );
}
