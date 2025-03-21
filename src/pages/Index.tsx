
import { 
  BookOpen, Calculator, BarChart, Globe, PieChart, 
  Database, FileText, BookMarked, Pencil, Building
} from 'lucide-react';
import SubjectCard from '@/components/home/SubjectCard';

const subjects = [
  {
    id: 'economics',
    name: 'الإقتصاد',
    icon: BarChart,
    color: '#3B82F6'
  },
  {
    id: 'management',
    name: 'التسيير',
    icon: Building,
    color: '#8B5CF6'
  },
  {
    id: 'accounting',
    name: 'المحاسبة',
    icon: Calculator,
    color: '#10B981'
  },
  {
    id: 'law',
    name: 'القانون',
    icon: FileText,
    color: '#F59E0B'
  },
  {
    id: 'mathematics',
    name: 'الرياضيات',
    icon: PieChart,
    color: '#EF4444'
  },
  {
    id: 'arabic',
    name: 'اللغة العربية',
    icon: Pencil,
    color: '#6366F1'
  },
  {
    id: 'french',
    name: 'اللغة الفرنسية',
    icon: BookMarked,
    color: '#EC4899'
  },
  {
    id: 'english',
    name: 'اللغة الإنجليزية',
    icon: Globe,
    color: '#0EA5E9'
  },
  {
    id: 'islamic',
    name: 'العلوم الإسلامية',
    icon: BookOpen,
    color: '#14B8A6'
  },
  {
    id: 'history',
    name: 'التاريخ والجغرافيا',
    icon: Database,
    color: '#F97316'
  }
];

export default function Index() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-10 mt-4">
        <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 mb-4">
          بكالوريا تسيير واقتصاد
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-600 text-transparent bg-clip-text">
            المواد الدراسية
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          اختر إحدى المواد للاطلاع على مواضيع البكالوريا السابقة، التمارين، والحلول النموذجية
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <SubjectCard
            key={subject.id}
            id={subject.id}
            name={subject.name}
            icon={subject.icon}
            color={subject.color}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
}
