
import { Link } from 'react-router-dom';
import { 
  BarChart, Calculator, PieChart, Globe, BookMarked, 
  Pencil, BookOpen, Database, FileText, Building, Clock,
  Home
} from 'lucide-react';

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

export function SidebarNav() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          <Home size={18} />
          <span>الرئيسية</span>
        </Link>
      </div>
      
      <div className="py-2">
        <h3 className="mb-2 px-4 text-lg font-semibold">المواد الدراسية</h3>
        <div className="space-y-1">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <Link
                key={subject.id}
                to={`/subject/${subject.id}`}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-md"
                  style={{ backgroundColor: subject.color }}
                >
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <span>{subject.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
