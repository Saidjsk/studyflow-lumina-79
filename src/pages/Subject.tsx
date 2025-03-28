
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, 
  BarChart, Calculator, PieChart, Globe, BookMarked, 
  Pencil, BookOpen, Database, FileText, Building, Scale, Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const years = [
  '2013', '2014', '2015', '2016', '2017', 
  '2018', '2019', '2020', '2021', '2022'
];

const subjects = {
  'accounting': {
    name: 'المحاسبة',
    icon: Calculator,
    color: '#10B981'
  },
  'economics': {
    name: 'الإقتصاد',
    icon: BarChart,
    color: '#3B82F6'
  },
  'mathematics': {
    name: 'الرياضيات',
    icon: PieChart,
    color: '#EF4444'
  },
  'history': {
    name: 'التاريخ والجغرافيا',
    icon: Globe,
    color: '#F97316'
  },
  'arabic': {
    name: 'اللغة العربية',
    icon: Pencil,
    color: '#6366F1'
  },
  'french': {
    name: 'اللغة الفرنسية',
    icon: BookMarked,
    color: '#EC4899'
  },
  'amazigh': {
    name: 'اللغة الأمازيغية',
    icon: Building,
    color: '#8B5CF6'
  },
  'english': {
    name: 'اللغة الإنجليزية',
    icon: Globe,
    color: '#0EA5E9'
  },
  'islamic': {
    name: 'العلوم الإسلامية',
    icon: BookOpen,
    color: '#14B8A6'
  },
  'philosophy': {
    name: 'الفلسفة',
    icon: Lightbulb,
    color: '#9333EA'
  },
  'law': {
    name: 'القانون',
    icon: Scale,
    color: '#F59E0B'
  }
};

export default function Subject() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [subject, setSubject] = useState<any>(null);
  
  useEffect(() => {
    if (subjectId && subjectId in subjects) {
      setSubject({
        id: subjectId,
        ...subjects[subjectId as keyof typeof subjects]
      });
    }
  }, [subjectId]);
  
  if (!subject) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">المادة غير موجودة</h2>
          <Link to="/" className="text-blue-600 dark:text-blue-400 mt-4 inline-block">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    );
  }
  
  const SubjectIcon = subject.icon;
  
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
        <span className="text-gray-900 dark:text-white font-medium">{subject.name}</span>
      </div>
      
      {/* Subject Info */}
      <div className="flex items-center mb-8">
        <div 
          className="p-4 rounded-xl mr-4"
          style={{ backgroundColor: subject.color }}
        >
          <SubjectIcon size={32} className="text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {subject.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            مواضيع وحلول البكالوريا للسنوات السابقة
          </p>
        </div>
      </div>
      
      {/* Lessons Section Button */}
      <div className="flex mb-8">
        <Link to={`/subject/${subject.id}/lessons`}>
          <Button 
            variant="outline" 
            className="flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 hover:border-blue-300"
          >
            <BookOpen size={18} />
            <span>الدروس والملخصات</span>
          </Button>
        </Link>
      </div>
      
      {/* Years Grid */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">بكالوريا سنوات سابقة</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {years.map((year, index) => (
          <Link
            key={year}
            to={`/subject/${subject.id}/${year}`}
            className={cn(
              "group relative p-6 flex flex-col items-center justify-center",
              "bg-white dark:bg-gray-800 rounded-xl shadow-sm",
              "border border-gray-100 dark:border-gray-700",
              "hover-lift hover:border-blue-200 dark:hover:border-blue-900/50",
              "transition duration-300 ease-in-out",
              "animate-scale-in"
            )}
            style={{ 
              animationDelay: `${index * 0.05}s`,
            }}
          >
            <div 
              className="w-full h-1 absolute top-0 left-0 right-0 rounded-t-xl opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: subject.color }}
            ></div>
            
            <span className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {year}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              بكالوريا
            </span>
            
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 dark:group-hover:bg-blue-500/10 rounded-xl transition-colors duration-300"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
