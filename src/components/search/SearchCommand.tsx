
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Calculator, Book, FileText, BarChart2, PieChart, BookOpen,
  Search, Building, Pencil, Globe, Scale, Lightbulb, CheckCircle
} from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";
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

interface SearchResult {
  id: string | number;
  title: string;
  type: string;
  path: string;
  excerpt?: string;
  relevance?: number;
  icon?: any;
}

// Enhanced search database with more practical information and application content
const searchDatabase: SearchResult[] = [
  // Main Subjects
  { id: 1, title: 'مادة المحاسبة', type: 'مادة', path: '/subject/accounting', icon: Calculator, 
    excerpt: 'دروس وتمارين في المحاسبة العامة وأساسيات المراجعة المالية' },
  { id: 2, title: 'مادة الاقتصاد', type: 'مادة', path: '/subject/economics', icon: BarChart2,
    excerpt: 'أساسيات الاقتصاد الكلي والجزئي مع الدراسات النقدية' },
  { id: 3, title: 'مادة الرياضيات', type: 'مادة', path: '/subject/mathematics', icon: PieChart,
    excerpt: 'الجبر، التحليل، الاحصاء، الإحتمالات والرياضيات المالية' },
  { id: 4, title: 'مادة التاريخ والجغرافيا', type: 'مادة', path: '/subject/history', icon: Globe,
    excerpt: 'التاريخ المعاصر والجغرافيا الاقتصادية والبشرية' },
  { id: 5, title: 'مادة اللغة العربية', type: 'مادة', path: '/subject/arabic', icon: Pencil,
    excerpt: 'النحو والصرف والبلاغة والأدب العربي والنصوص' },
  
  // Academic Years
  { id: 30, title: 'السنة الأولى', type: 'سنة دراسية', path: '/subject/accounting/1st', icon: Book,
    excerpt: 'محتوى ودروس السنة الأولى' },
  { id: 31, title: 'السنة الثانية', type: 'سنة دراسية', path: '/subject/accounting/2nd', icon: Book,
    excerpt: 'محتوى ودروس السنة الثانية' },
  { id: 32, title: 'السنة الثالثة', type: 'سنة دراسية', path: '/subject/accounting/3rd', icon: Book,
    excerpt: 'محتوى ودروس السنة الثالثة' },
  
  // Core features
  { id: 12, title: 'حاسبة المعدل', type: 'أداة', path: '/calculator', icon: Calculator,
    excerpt: 'حساب وتقدير المعدل الفصلي والسنوي بطريقة سهلة ودقيقة' },
  { id: 13, title: 'اختبارات', type: 'أداة', path: '/quiz', icon: CheckCircle,
    excerpt: 'اختبارات تفاعلية متنوعة الصعوبة لتقييم مستوى التحصيل' },
  { id: 14, title: 'تمارين', type: 'أداة', path: '/exercises', icon: FileText,
    excerpt: 'مجموعة متنوعة من التمارين والتطبيقات العملية لكل المواد' },
  
  // Specific subject sections
  { id: 40, title: 'أقسام المحاسبة - نظري', type: 'قسم', path: '/subject/accounting?section=theory', icon: Book,
    excerpt: 'الأقسام النظرية لمادة المحاسبة' },
  { id: 41, title: 'أقسام المحاسبة - عملي', type: 'قسم', path: '/subject/accounting?section=practical', icon: FileText,
    excerpt: 'التطبيقات العملية والتمارين لمادة المحاسبة' },
  { id: 42, title: 'أقسام الاقتصاد - نظري', type: 'قسم', path: '/subject/economics?section=theory', icon: Book,
    excerpt: 'الأقسام النظرية لمادة الاقتصاد' },
  { id: 43, title: 'أقسام الاقتصاد - عملي', type: 'قسم', path: '/subject/economics?section=practical', icon: FileText,
    excerpt: 'التطبيقات العملية والتمارين لمادة الاقتصاد' },
  
  // Course content samples
  { id: 21, title: 'الميزانية المالية', type: 'درس', path: '/subject/accounting/1st?lesson=balance', icon: Book,
    excerpt: 'شرح مفصل للميزانية المالية وعناصرها ومبادئ إعدادها' },
  { id: 22, title: 'نظريات الاستهلاك', type: 'درس', path: '/subject/economics/2nd?lesson=consumption', icon: Book,
    excerpt: 'تحليل سلوك المستهلك ونظريات الاستهلاك في الاقتصاد' },
  { id: 23, title: 'الدوال والمشتقات', type: 'درس', path: '/subject/mathematics/1st?lesson=functions', icon: Book,
    excerpt: 'تطبيقات الدوال والتفاضل في النمذجة الاقتصادية' },
];

export function SearchCommand() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const navigate = useNavigate();

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

  // Search function implementation
  React.useEffect(() => {
    if (debouncedQuery.length === 0) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // Simulate network delay for realistic search experience
    const timer = setTimeout(() => {
      const searchResults = performSearch(debouncedQuery);
      console.log("Search results for:", debouncedQuery, searchResults);
      setResults(searchResults);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [debouncedQuery]);

  // Search algorithm with fuzzy matching and relevance scoring
  const performSearch = (searchQuery: string): SearchResult[] => {
    if (!searchQuery.trim()) return [];
    
    const normalizedQuery = searchQuery.toLowerCase();
    const queryTerms = normalizedQuery.split(/\s+/).filter(term => term.length > 0);
    
    // Score and filter results
    return searchDatabase
      .map(item => {
        // Calculate relevance score based on multiple factors
        let score = 0;
        const titleLower = item.title.toLowerCase();
        const excerptLower = item.excerpt?.toLowerCase() || '';
        const typeLower = item.type.toLowerCase();
        
        // Exact title match (highest relevance)
        if (titleLower === normalizedQuery) {
          score += 100;
        }
        
        // Title starts with query
        if (titleLower.startsWith(normalizedQuery)) {
          score += 50;
        }
        
        // Title contains query
        if (titleLower.includes(normalizedQuery)) {
          score += 30;
        }
        
        // Type matches query
        if (typeLower.includes(normalizedQuery)) {
          score += 20;
        }
        
        // Content/excerpt contains query
        if (excerptLower.includes(normalizedQuery)) {
          score += 10;
        }
        
        // Individual word matching for multi-word queries
        for (const term of queryTerms) {
          if (titleLower.includes(term)) {
            score += 5;
          }
          if (excerptLower.includes(term)) {
            score += 3;
          }
        }
        
        // Fuzzy matching for misspelled words
        const maxDistance = Math.floor(normalizedQuery.length / 3);
        if (levenshteinDistance(titleLower, normalizedQuery) <= maxDistance) {
          score += 15;
        }
        
        return { ...item, relevance: score };
      })
      .filter(item => item.relevance > 0) // Only keep items with some relevance
      .sort((a, b) => (b.relevance || 0) - (a.relevance || 0)) // Sort by relevance score
      .slice(0, 10); // Limit results to top 10
  };
  
  // Levenshtein distance implementation for fuzzy matching (handles typos)
  const levenshteinDistance = (a: string, b: string): number => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    
    const matrix = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(null));
    
    for (let i = 0; i <= a.length; i++) {
      matrix[i][0] = i;
    }
    
    for (let j = 0; j <= b.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }
    
    return matrix[a.length][b.length];
  };
  
  const handleSelect = (result: SearchResult) => {
    navigate(result.path);
    setOpen(false);
    toast({
      title: "انتقال إلى",
      description: result.title,
    });
  };

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
          placeholder="ابحث في المواد، السنوات، الدروس، الأقسام..." 
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
              <CommandItem onSelect={() => handleSelect({ id: 30, title: 'السنة الأولى', type: 'سنة دراسية', path: '/subject/accounting/1st' })}>
                <Book className="ml-2 h-4 w-4" />
                <span>السنة الأولى</span>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect({ id: 12, title: 'حاسبة المعدل', type: 'أداة', path: '/calculator' })}>
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
                  عرض {results.length} من النتائج • اضغط <kbd className="px-1 rounded bg-muted">↵</kbd> للانتقال
                </div>
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
