
import { 
  Calculator, Book, FileText, 
  BarChart2, PieChart, Globe, Pencil, CheckCircle
} from "lucide-react";

// تعريف نوع نتائج البحث
export interface SearchResult {
  id: string | number;
  title: string;
  type: string;
  path: string;
  excerpt?: string;
  icon?: React.ElementType;
  relevance?: number;
}

// قاعدة بيانات البحث المحسنة
export const searchDatabase: SearchResult[] = [
  // المواد الرئيسية
  { 
    id: 1, 
    title: 'مادة المحاسبة', 
    type: 'مادة', 
    path: '/subject/accounting', 
    icon: Calculator, 
    excerpt: 'دروس وتمارين في المحاسبة العامة والمراجعة المالية' 
  },
  { 
    id: 2, 
    title: 'مادة الاقتصاد', 
    type: 'مادة', 
    path: '/subject/economics', 
    icon: BarChart2,
    excerpt: 'أساسيات الاقتصاد الكلي والجزئي والدراسات النقدية' 
  },
  { 
    id: 3, 
    title: 'مادة الرياضيات', 
    type: 'مادة', 
    path: '/subject/mathematics', 
    icon: PieChart,
    excerpt: 'الجبر، التحليل، الاحصاء والرياضيات المالية' 
  },
  { 
    id: 4, 
    title: 'مادة التاريخ والجغرافيا', 
    type: 'مادة', 
    path: '/subject/history', 
    icon: Globe,
    excerpt: 'التاريخ المعاصر والجغرافيا الاقتصادية' 
  },
  { 
    id: 5, 
    title: 'مادة اللغة العربية', 
    type: 'مادة', 
    path: '/subject/arabic', 
    icon: Pencil,
    excerpt: 'النحو والصرف والبلاغة والأدب العربي' 
  },
  
  // السنوات الدراسية
  { 
    id: 10, 
    title: 'السنة الأولى', 
    type: 'سنة دراسية', 
    path: '/year/1', 
    icon: Book,
    excerpt: 'محتوى ودروس السنة الأولى' 
  },
  { 
    id: 11, 
    title: 'السنة الثانية', 
    type: 'سنة دراسية', 
    path: '/year/2', 
    icon: Book,
    excerpt: 'محتوى ودروس السنة الثانية' 
  },
  { 
    id: 12, 
    title: 'السنة الثالثة', 
    type: 'سنة دراسية', 
    path: '/year/3', 
    icon: Book,
    excerpt: 'محتوى ودروس السنة الثالثة' 
  },
  
  // الأدوات والميزات
  { 
    id: 20, 
    title: 'حاسبة المعدل', 
    type: 'أداة', 
    path: '/calculator', 
    icon: Calculator,
    excerpt: 'حساب وتقدير المعدل بطريقة سهلة ودقيقة' 
  },
  { 
    id: 21, 
    title: 'اختبارات', 
    type: 'أداة', 
    path: '/quiz', 
    icon: CheckCircle,
    excerpt: 'اختبارات تفاعلية متنوعة لتقييم المستوى' 
  },
  { 
    id: 22, 
    title: 'تمارين', 
    type: 'أداة', 
    path: '/exercises', 
    icon: FileText,
    excerpt: 'مجموعة متنوعة من التمارين والتطبيقات العملية' 
  },
  
  // دروس محددة
  { 
    id: 30, 
    title: 'الميزانية المالية', 
    type: 'درس', 
    path: '/subject/accounting?lesson=balance', 
    icon: Book,
    excerpt: 'شرح مفصل للميزانية المالية وعناصرها' 
  },
  { 
    id: 31, 
    title: 'نظريات الاستهلاك', 
    type: 'درس', 
    path: '/subject/economics?lesson=consumption', 
    icon: Book,
    excerpt: 'تحليل سلوك المستهلك ونظريات الاستهلاك' 
  },
  { 
    id: 32, 
    title: 'الدوال والمشتقات', 
    type: 'درس', 
    path: '/subject/mathematics?lesson=functions', 
    icon: Book,
    excerpt: 'تطبيقات الدوال والتفاضل في الاقتصاد' 
  },
];
