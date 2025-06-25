
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, BarChart, Calculator, PieChart, Globe, BookMarked, 
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
          <h2 className="text-2xl font-bold text-foreground">المادة غير موجودة</h2>
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
      {/* Header - Navigation */}
      <div className="flex items-center mb-8 text-muted-foreground">
        <Link 
          to="/" 
          className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>الرئيسية</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <span className="text-foreground font-medium">{subject.name}</span>
      </div>
      
      {/* Subject Header */}
      <div className="flex flex-col mb-8">
        <div className="flex items-center mb-2">
          <div 
            className="p-4 rounded-xl mr-4"
            style={{ backgroundColor: subject.color }}
          >
            <SubjectIcon size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            {subject.name}
          </h1>
        </div>
        <p className="text-muted-foreground mt-1">
          دروس ومواضيع البكالوريا للسنوات السابقة
        </p>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex mb-8 gap-4">
        <Link to={`/subject/${subject.id}`} className="w-full">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 bg-card hover:bg-accent text-foreground border-border"
          >
            <FileText size={18} />
            <span>مواضيع البكالوريا</span>
          </Button>
        </Link>
        <Link to={`/subject/${subject.id}/lessons`} className="w-full">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 bg-blue-50 dark:bg-blue-500/20 hover:bg-blue-100 dark:hover:bg-blue-500/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800"
          >
            <BookOpen size={18} />
            <span>الدروس</span>
          </Button>
        </Link>
      </div>
      
      {/* Years Grid */}
      <div className="grid grid-cols-2 gap-4">
        {years.map((year, index) => (
          <Link
            key={year}
            to={`/subject/${subject.id}/${year}`}
            className={cn(
              "group relative p-6 flex flex-col items-center justify-center",
              "bg-card rounded-xl",
              "border border-border",
              "hover:border-blue-300 dark:hover:border-blue-900/70",
              "transition duration-300 ease-in-out",
              "animate-scale-in shadow-sm hover:shadow-md"
            )}
            style={{ 
              animationDelay: `${index * 0.05}s`,
            }}
          >
            <div 
              className="w-full h-1 absolute top-0 left-0 right-0 rounded-t-xl opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: subject.color }}
            ></div>
            
            <span className="text-2xl font-bold text-foreground mb-2">
              {year}
            </span>
            <span className="text-sm text-muted-foreground">
              بكالوريا
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
