
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import HistoryLesson from '@/components/lessons/HistoryLesson';
import UnderDevelopmentLesson from '@/components/lessons/UnderDevelopmentLesson';
import AccountingLesson from '@/components/lessons/accounting/AccountingLesson';
import EconomicsLesson from '@/components/lessons/economics/EconomicsLesson';
import ColdWarChapter1 from '@/components/lessons/history/ColdWarChapter1';
import ColdWarChapter2 from '@/components/lessons/history/ColdWarChapter2';
import ColdWarChapter3 from '@/components/lessons/history/ColdWarChapter3';
import ColdWarChapter4 from '@/components/lessons/history/ColdWarChapter4';

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
      if (lessonId === 'trade') return 'الوحدة الرابعة: التجارة الخارجية';
      if (lessonId === 'exchange') return 'الوحدة الخامسة: الصرف';
      if (lessonId === 'unemployment') return 'الوحدة السادسة: البطالة';
      if (lessonId === 'inflation') return 'الوحدة السابعة: التضخم';
      if (lessonId === 'leadership') return 'الوحدة الثامنة: القيادة';
      if (lessonId === 'communication') return 'الوحدة التاسعة: الاتصال';
      if (lessonId === 'control') return 'الوحدة العاشرة: الرقابة';
      if (lessonId === 'finance') return 'الوحدة الحادية عشر: التمويل';
      if (lessonId === 'production') return 'الوحدة الثانية عشر: الإنتاج';
    } else if (subjectId === 'history') {
      if (lessonId === 'chapter1') return 'المبحث الأول: بروز الصراع وتشكل العالم';
      if (lessonId === 'chapter2') return 'المبحث الثاني: قيادة العالم بقطبية ثنائية';
      if (lessonId === 'chapter3') return 'المبحث الثالث: الأزمات الدولية في ظل الصراع بين المعسكرين';
      if (lessonId === 'chapter4') return 'المبحث الرابع: مساعي الانفراج الدولي';
    } else if (subjectId === 'accounting') {
      if (lessonId === 'lesson1') return 'الوحدة الأولى: المحاسبة';
    }
    return 'الدرس';
  };

  // Display appropriate lesson content based on subject and lesson ID
  const renderLessonContent = () => {
    if (subjectId === 'economics') {
      return <EconomicsLesson />;
    } else if (subjectId === 'history') {
      if (lessonId === 'chapter1') {
        return <ColdWarChapter1 />;
      } else if (lessonId === 'chapter2') {
        return <ColdWarChapter2 />;
      } else if (lessonId === 'chapter3') {
        return <ColdWarChapter3 />;
      } else if (lessonId === 'chapter4') {
        return <ColdWarChapter4 />;
      } else {
        return <UnderDevelopmentLesson subjectName={getSubjectName()} />;
      }
    } else if (subjectId === 'accounting') {
      if (lessonId === 'lesson1') {
        return <AccountingLesson />;
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
        <Link 
          to={`/subject/${subjectId}/lessons`}
          className="flex items-center hover:text-blue-400 transition-colors"
        >
          <span>الدروس والملخصات</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <span className="text-white font-medium">{getLessonTitle()}</span>
      </div>
      
      {/* Render appropriate lesson content */}
      {renderLessonContent()}
    </div>
  );
}
