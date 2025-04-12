
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import EconomicsLesson from '@/components/lessons/EconomicsLesson';
import HistoryLesson from '@/components/lessons/HistoryLesson';
import UnderDevelopmentLesson from '@/components/lessons/UnderDevelopmentLesson';
import MarketLesson from '@/components/lessons/MarketLesson';
import BankingLesson from '@/components/lessons/BankingLesson';

export default function LessonDetail() {
  const { subjectId, lessonId } = useParams<{ subjectId: string; lessonId: string }>();
  
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

  const getLessonTitle = () => {
    if (subjectId === 'economics') {
      if (lessonId === 'money') return 'الوحدة الأولى: النقود';
      if (lessonId === 'market') return 'الوحدة الثانية: السوق والأسعار';
      if (lessonId === 'banks') return 'الوحدة الثالثة: النظام المصرفي';
      if (lessonId === 'trade') return 'الوحدة الرابعة: التجارة الدولية';
    } else if (subjectId === 'history') {
      if (lessonId === 'world-wars') return 'الوحدة الأولى: الحروب العالمية';
      if (lessonId === 'algeria-revolution') return 'الوحدة الثانية: الثورة الجزائرية';
    }
    return 'الدرس';
  };

  // Display appropriate lesson content based on subject and lesson ID
  const renderLessonContent = () => {
    if (subjectId === 'economics') {
      if (lessonId === 'money') {
        return <EconomicsLesson />;
      } else if (lessonId === 'market') {
        return <MarketLesson />;
      } else if (lessonId === 'banks') {
        return <BankingLesson />;
      } else {
        return <UnderDevelopmentLesson subjectName={getSubjectName()} />;
      }
    } else if (subjectId === 'history') {
      if (lessonId === 'world-wars') {
        return <HistoryLesson />;
      } else {
        return <UnderDevelopmentLesson subjectName={getSubjectName()} />;
      }
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
        <Link 
          to={`/subject/${subjectId}/lessons`}
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>الدروس والملخصات</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <span className="text-gray-900 dark:text-white font-medium">{getLessonTitle()}</span>
      </div>
      
      {/* Render appropriate lesson content */}
      {renderLessonContent()}
    </div>
  );
}
