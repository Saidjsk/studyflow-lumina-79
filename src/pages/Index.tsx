
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
      <div className="grid grid-cols-2 gap-4">
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
