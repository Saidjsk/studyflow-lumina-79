
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Calculator, Book, FileText, Search, 
  BarChart2, PieChart, Globe, Pencil, CheckCircle
} from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

// تعريف نوع نتائج البحث
interface SearchResult {
  id: string | number;
  title: string;
  type: string;
  path: string;
  excerpt?: string;
  icon?: React.ElementType;
}

// قاعدة بيانات البحث المحسنة
const searchDatabase: SearchResult[] = [
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

export function SearchCommand() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const navigate = useNavigate();

  // استمع لاختصارات لوحة المفاتيح لفتح/إغلاق مربع البحث
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // تنفيذ وظيفة البحث عند تغيير الاستعلام
  React.useEffect(() => {
    if (debouncedQuery.length === 0) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // محاكاة تأخير الشبكة لتجربة بحث واقعية
    const timer = setTimeout(() => {
      const searchResults = performSearch(debouncedQuery);
      setResults(searchResults);
      setIsSearching(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [debouncedQuery]);

  // خوارزمية البحث المحسنة
  const performSearch = (searchQuery: string): SearchResult[] => {
    if (!searchQuery.trim()) return [];
    
    const normalizedQuery = searchQuery.trim().toLowerCase();
    
    // البحث في قاعدة البيانات وحساب درجة الملاءمة
    return searchDatabase
      .map(item => {
        const titleLower = item.title.toLowerCase();
        const excerptLower = item.excerpt?.toLowerCase() || '';
        const typeLower = item.type.toLowerCase();
        
        // حساب درجة الملاءمة
        let score = 0;
        
        // تطابق العنوان بالضبط
        if (titleLower === normalizedQuery) {
          score += 100;
        }
        
        // العنوان يبدأ بالاستعلام
        if (titleLower.startsWith(normalizedQuery)) {
          score += 50;
        }
        
        // العنوان يحتوي على الاستعلام
        if (titleLower.includes(normalizedQuery)) {
          score += 30;
        }
        
        // النوع يطابق الاستعلام
        if (typeLower.includes(normalizedQuery)) {
          score += 20;
        }
        
        // المحتوى يحتوي على الاستعلام
        if (excerptLower.includes(normalizedQuery)) {
          score += 10;
        }
        
        // التطابق الضبابي للكلمات المكتوبة بشكل خاطئ
        if (levenshteinDistance(titleLower, normalizedQuery) <= 2) {
          score += 5;
        }
        
        return { ...item, relevance: score };
      })
      .filter(item => (item.relevance || 0) > 0) // استبعاد النتائج غير المتطابقة
      .sort((a, b) => (b.relevance || 0) - (a.relevance || 0)) // ترتيب حسب الملاءمة
      .slice(0, 10); // تحديد النتائج للأفضل 10
  };

  // تنفيذ مسافة ليفنشتاين للتطابق الضبابي
  const levenshteinDistance = (a: string, b: string): number => {
    // الحالات الأساسية
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    
    // إنشاء مصفوفة المسافات
    const matrix = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(null));
    
    // تهيئة الحواف
    for (let i = 0; i <= a.length; i++) {
      matrix[i][0] = i;
    }
    
    for (let j = 0; j <= b.length; j++) {
      matrix[0][j] = j;
    }
    
    // حساب المسافات
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,      // حذف
          matrix[i][j - 1] + 1,      // إدخال
          matrix[i - 1][j - 1] + cost // استبدال
        );
      }
    }
    
    return matrix[a.length][b.length];
  };
  
  // معالجة اختيار نتيجة
  const handleSelect = (result: SearchResult) => {
    navigate(result.path);
    setOpen(false);
    toast({
      title: "انتقال إلى",
      description: result.title,
    });
  };

  // الحصول على أيقونة النتيجة
  const getResultIcon = (result: SearchResult) => {
    if (result.icon) {
      const Icon = result.icon;
      return <Icon className="ml-2 h-4 w-4 text-muted-foreground" />;
    }
    return <Search className="ml-2 h-4 w-4 text-muted-foreground" />;
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center sm:justify-start w-full px-4 py-2 text-sm font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      >
        <Search className="ml-2 h-4 w-4" />
        <span className="hidden sm:inline-flex">بحث في التطبيق...</span>
        <kbd className="mr-auto hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="ابحث في المواد، السنوات، الدروس..." 
          value={query}
          onValueChange={setQuery}
          className="text-right" 
        />
        <CommandList className="max-h-[calc(100vh-180px)]">
          {isSearching && (
            <div className="py-6 text-center text-sm">
              <div className="animate-pulse">جاري البحث...</div>
            </div>
          )}
          
          {results.length === 0 && !isSearching && debouncedQuery && (
            <CommandEmpty>لا توجد نتائج للبحث "{debouncedQuery}"</CommandEmpty>
          )}

          {!debouncedQuery && !isSearching && (
            <CommandGroup heading="الاقتراحات" className="text-right">
              <CommandItem onSelect={() => handleSelect({ id: 1, title: 'مادة المحاسبة', type: 'مادة', path: '/subject/accounting' })}>
                <Calculator className="ml-2 h-4 w-4" />
                <span>مادة المحاسبة</span>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect({ id: 10, title: 'السنة الأولى', type: 'سنة دراسية', path: '/year/1' })}>
                <Book className="ml-2 h-4 w-4" />
                <span>السنة الأولى</span>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect({ id: 20, title: 'حاسبة المعدل', type: 'أداة', path: '/calculator' })}>
                <Calculator className="ml-2 h-4 w-4" />
                <span>حاسبة المعدل</span>
              </CommandItem>
            </CommandGroup>
          )}

          {results.length > 0 && (
            <>
              <CommandGroup heading="نتائج البحث" className="text-right">
                {results.map((result) => (
                  <CommandItem
                    key={result.id}
                    onSelect={() => handleSelect(result)}
                    className="flex flex-col items-start text-right"
                  >
                    <div className="flex w-full items-center">
                      {getResultIcon(result)}
                      <span>{result.title}</span>
                      <Badge className="mr-auto text-xs" variant="outline">
                        {result.type}
                      </Badge>
                    </div>
                    {result.excerpt && (
                      <span className="mr-6 text-xs text-muted-foreground line-clamp-1">
                        {result.excerpt}
                      </span>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup>
                <div className="py-2 px-2 text-xs text-muted-foreground text-right">
                  {results.length} نتيجة • اضغط <kbd className="px-1 rounded bg-muted">↵</kbd> للانتقال
                </div>
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
