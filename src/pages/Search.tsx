import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Calculator, Book, FileText, BarChart2, PieChart, BookOpen, Clock,
  Search, Building, Pencil, Globe, Scale, Lightbulb, CheckCircle, Filter, Sparkles
} from 'lucide-react';
import { useDebounce } from '@/hooks/use-debounce';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card, CardContent, CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const searchDatabase = [
  // Subjects
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
  { id: 6, title: 'مادة اللغة الفرنسية', type: 'مادة', path: '/subject/french', icon: BookOpen,
    excerpt: 'قواعد اللغة الفرنسية والتعبير والمطالعة' },
  { id: 7, title: 'مادة اللغة الأمازيغية', type: 'مادة', path: '/subject/amazigh', icon: Building,
    excerpt: 'القواعد الأساسية للغة الأمازيغية مع نصوص متنوعة' },
  { id: 8, title: 'مادة اللغة الإنجليزية', type: 'مادة', path: '/subject/english', icon: Globe,
    excerpt: 'قواعد اللغة الإنجليزية والمحادثة والنصوص' },
  { id: 9, title: 'مادة العلوم الإسلامية', type: 'مادة', path: '/subject/islamic', icon: Book,
    excerpt: 'العقيدة والحديث والقرآن والفقه والسيرة النبوية' },
  { id: 10, title: 'مادة الفلسفة', type: 'مادة', path: '/subject/philosophy', icon: Lightbulb,
    excerpt: 'المدارس الفلسفية المختلفة ومنهجية التفكير الفلسفي' },
  { id: 11, title: 'مادة القانون', type: 'مادة', path: '/subject/law', icon: Scale,
    excerpt: 'القانون المدني والتجاري والإداري وأساسيات القانون الدستوري' },
  
  // Core features
  { id: 12, title: 'حاسبة المعدل', type: 'أداة', path: '/calculator', icon: Calculator,
    excerpt: 'حساب وتقدير المعدل الفصلي والسنوي بطريقة سهلة ودقيقة' },
  { id: 13, title: 'اختبارات', type: 'أداة', path: '/quiz', icon: CheckCircle,
    excerpt: 'اختبارات تفاعلية متنوعة الصعوبة لتقييم مستوى التحصيل' },
  { id: 14, title: 'تمارين', type: 'أداة', path: '/exercises', icon: FileText,
    excerpt: 'مجموعة متنوعة من التمارين والتطبيقات العملية لكل المواد' },
  
  // Exercises content samples
  { id: 15, title: 'تمارين في المحاسبة العامة', type: 'تمرين', path: '/exercises?category=accounting', icon: FileText,
    excerpt: 'سلسلة تمارين تغطي أساسيات المحاسبة العامة مع حلول مفصلة' },
  { id: 16, title: 'سلسلة تمارين في التسيير المالي', type: 'تمرين', path: '/exercises?category=management', icon: FileText,
    excerpt: 'مجموعة متقدمة من التمارين في التسيير المالي للشركات' },
  { id: 17, title: 'تمارين متقدمة في المحاسبة التحليلية', type: 'تمرين', path: '/exercises?category=accounting', icon: FileText,
    excerpt: 'مفاهيم متقدمة في المحاسبة التحليلية وحساب التكاليف' },
  { id: 18, title: 'سلسلة تمارين في الاقتصاد الكلي', type: 'تمرين', path: '/exercises?category=economics', icon: FileText,
    excerpt: 'تحليل النماذج الاقتصادية الكلية مع تطبيقات' },
  { id: 19, title: 'أساسيات الرياضيات المالية', type: 'تمرين', path: '/exercises?category=mathematics', icon: FileText,
    excerpt: 'تطبيقات الرياضيات في المجال المالي والاستثماري' },
  { id: 20, title: 'تمارين في الإحصاء التطبيقي', type: 'تمرين', path: '/exercises?category=mathematics', icon: FileText,
    excerpt: 'تقنيات متقدمة في الإحصاء مع تطبيقات اقتصادية' },
  
  // Course content samples
  { id: 21, title: 'الميزانية المالية', type: 'درس', path: '/subject/accounting/1st', icon: Book,
    excerpt: 'شرح مفصل للميزانية المالية وعناصرها ومبادئ إعدادها' },
  { id: 22, title: 'نظريات الاستهلاك', type: 'درس', path: '/subject/economics/2nd', icon: Book,
    excerpt: 'تحليل سلوك المستهلك ونظريات الاستهلاك في الاقتصاد' },
  { id: 23, title: 'الدوال والمشتقات', type: 'درس', path: '/subject/mathematics/1st', icon: Book,
    excerpt: 'تطبيقات الدوال والتفاضل في النمذجة الاقتصادية' },
  { id: 24, title: 'مقدمة في القانون التجاري', type: 'درس', path: '/subject/law/3rd', icon: Book,
    excerpt: 'الأحكام العامة والخاصة في القانون التجاري' },
];

const categoryFilters = [
  { id: 'all', label: 'الكل' },
  { id: 'subject', label: 'المواد الدراسية', matchType: 'مادة' },
  { id: 'tool', label: 'الأدوات', matchType: 'أداة' },
  { id: 'exercise', label: 'التمارين', matchType: 'تمرين' },
  { id: 'lesson', label: 'الدروس', matchType: 'درس' },
];

interface Result {
  id: string | number;
  title: string;
  type: string;
  path: string;
  excerpt?: string;
  relevance?: number;
  icon?: any;
}

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [results, setResults] = useState<Result[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedQuery = useDebounce(searchQuery, 300);
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim(), category: selectedCategory });
    }
  };
  
  const handleResultClick = (path: string) => {
    navigate(path);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSearchParams({ q: searchQuery, category: value });
  };

  const generateSuggestions = (query: string): string[] => {
    if (!query || query.length < 2) return [];
    
    const wordBank = new Set<string>();
    searchDatabase.forEach(item => {
      item.title.split(' ').forEach(word => {
        if (word.length > 2) wordBank.add(word);
      });
      
      if (item.excerpt) {
        item.excerpt.split(' ').forEach(word => {
          if (word.length > 2) wordBank.add(word);
        });
      }
    });
    
    return Array.from(wordBank)
      .filter(word => word.toLowerCase().startsWith(query.toLowerCase()))
      .slice(0, 5);
  };

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

  useEffect(() => {
    if (debouncedQuery) {
      setIsSearching(true);
      
      const newSuggestions = generateSuggestions(debouncedQuery);
      setSuggestions(newSuggestions);
      
      const timer = setTimeout(() => {
        const searchResults = searchDatabase
          .map(item => {
            let score = 0;
            const titleLower = item.title.toLowerCase();
            const excerptLower = item.excerpt?.toLowerCase() || '';
            const typeLower = item.type.toLowerCase();
            const queryLower = debouncedQuery.toLowerCase();
            
            if (titleLower === queryLower) {
              score += 100;
            }
            
            if (titleLower.startsWith(queryLower)) {
              score += 50;
            }
            
            if (titleLower.includes(queryLower)) {
              score += 30;
            }
            
            if (typeLower.includes(queryLower)) {
              score += 20;
            }
            
            if (excerptLower.includes(queryLower)) {
              score += 10;
            }
            
            const queryTerms = queryLower.split(/\s+/).filter(term => term.length > 0);
            for (const term of queryTerms) {
              if (titleLower.includes(term)) {
                score += 5;
              }
              if (excerptLower.includes(term)) {
                score += 3;
              }
            }
            
            const maxDistance = Math.floor(debouncedQuery.length / 3);
            if (levenshteinDistance(titleLower, queryLower) <= maxDistance) {
              score += 15;
            }
            
            return { ...item, relevance: score };
          })
          .filter(item => {
            if (selectedCategory !== 'all') {
              const categoryFilter = categoryFilters.find(c => c.id === selectedCategory);
              if (categoryFilter?.matchType && item.type !== categoryFilter.matchType) {
                return false;
              }
            }
            
            return item.relevance > 0;
          })
          .sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
        
        setResults(searchResults);
        setIsSearching(false);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setSuggestions([]);
    }
  }, [debouncedQuery, selectedCategory]);

  const applySuggestion = (suggestion: string) => {
    setSearchQuery(suggestion);
    setSearchParams({ q: suggestion, category: selectedCategory });
  };

  const getIconComponent = (iconName: any) => {
    if (!iconName) return <FileText className="h-6 w-6 text-blue-500" />;
    
    const Icon = iconName;
    return <Icon className="h-6 w-6 text-blue-500" />;
  };
  
  return (
    <div className="container mx-auto py-6 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-4">
          البحث المتقدم
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          ابحث في جميع محتويات التطبيق بسهولة وسرعة
        </p>
      </div>
      
      <Card className="mb-8 border shadow-md">
        <CardContent className="p-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في المواد، الدروس، التمارين..."
                className="text-right pl-10 py-6 text-lg"
                autoFocus
              />
              {suggestions.length > 0 && (
                <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
                  <ul className="py-1 text-right">
                    {suggestions.map((suggestion, index) => (
                      <li 
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-end"
                        onClick={() => applySuggestion(suggestion)}
                      >
                        <Sparkles className="ml-2 h-4 w-4 text-blue-500" />
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-end justify-between">
              <div className="w-full sm:w-auto">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-right">
                  تصفية حسب النوع
                </label>
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="اختر التصنيف" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryFilters.map(filter => (
                      <SelectItem key={filter.id} value={filter.id}>
                        {filter.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Button type="submit" className="w-full sm:w-auto">
                <Search className="ml-2 h-4 w-4" />
                بحث
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      {query && (
        <div className="text-right mb-6">
          <p className="text-muted-foreground">
            نتائج البحث عن: <span className="font-semibold">{query}</span>
            {results.length > 0 ? ` (${results.length} نتيجة)` : ''}
          </p>
        </div>
      )}
      
      {isSearching ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-pulse flex flex-col items-center">
            <Search className="h-12 w-12 mb-4 text-blue-500" />
            <p className="text-lg font-medium">جاري البحث...</p>
          </div>
        </div>
      ) : query && results.length > 0 ? (
        <Tabs defaultValue="cards" className="mb-10">
          <div className="flex justify-end mb-4">
            <TabsList>
              <TabsTrigger value="cards" className="flex items-center gap-1">
                <div>بطاقات</div>
              </TabsTrigger>
              <TabsTrigger value="table" className="flex items-center gap-1">
                <div>جدول</div>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="cards" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result) => (
                <Card
                  key={result.id}
                  className={cn(
                    "border hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/50 transition-all cursor-pointer"
                  )}
                  onClick={() => handleResultClick(result.path)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <div className="inline-flex items-center justify-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        {getIconComponent(result.icon)}
                      </div>
                      <div className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full">
                        {result.type}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {result.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {result.excerpt}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="pt-2 border-t text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>تم التحديث مؤخرًا</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="table" className="mt-0">
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">العنوان</TableHead>
                    <TableHead className="text-right">النوع</TableHead>
                    <TableHead className="text-right">الوصف</TableHead>
                    <TableHead className="text-right w-[100px]">الإجراء</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((result) => (
                    <TableRow 
                      key={result.id}
                      className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                      onClick={() => handleResultClick(result.path)}
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {getIconComponent(result.icon)}
                          <span>{result.title}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                          {result.type}
                        </span>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        <p className="truncate">{result.excerpt}</p>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline" onClick={(e) => {
                          e.stopPropagation();
                          handleResultClick(result.path);
                        }}>
                          عرض
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      ) : query ? (
        <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-dashed">
          <Search className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            لم يتم العثور على نتائج
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
            لم نعثر على أي محتوى يطابق "{query}". حاول تغيير مصطلحات البحث أو استخدام كلمات رئيسية مختلفة.
          </p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchQuery('');
              setSearchParams({});
            }}
          >
            مسح البحث
          </Button>
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-dashed">
          <Search className="h-16 w-16 mx-auto mb-4 text-blue-500" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            ابدأ البحث في المحتوى
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md mx-auto">
            اكتب في مربع البحث للعثور على المواد، الدروس، التمارين، وأكثر من ذلك.
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
            <Button variant="outline" size="sm" onClick={() => applySuggestion("المحاسبة")}>المحاسبة</Button>
            <Button variant="outline" size="sm" onClick={() => applySuggestion("الاقتصاد")}>الاقتصاد</Button>
            <Button variant="outline" size="sm" onClick={() => applySuggestion("الرياضيات")}>الرياضيات</Button>
            <Button variant="outline" size="sm" onClick={() => applySuggestion("القانون")}>القانون</Button>
            <Button variant="outline" size="sm" onClick={() => applySuggestion("تمارين")}>تمارين</Button>
          </div>
        </div>
      )}
      
      <Card className="mt-10 bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800/20">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300 flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            نصائح للبحث المتقدم
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-right">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-blue-100 dark:border-blue-800/20 bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-blue-700 dark:text-blue-300">البحث عن عبارات محددة</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                استخدم علامات الاقتباس للبحث عن عبارة دقيقة، مثل "المحاسبة المالية"
              </p>
            </div>
            <div className="border border-blue-100 dark:border-blue-800/20 bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-blue-700 dark:text-blue-300">استخدام المرشحات</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                حدد نوع المحتوى من القائمة المنسدلة للحصول على نتائج أكثر دقة
              </p>
            </div>
            <div className="border border-blue-100 dark:border-blue-800/20 bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-blue-700 dark:text-blue-300">البحث بالموضوع</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                يمكنك البحث باستخدام أسماء المواد مثل "الرياضيات" أو "الاقتصاد"
              </p>
            </div>
            <div className="border border-blue-100 dark:border-blue-800/20 bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-blue-700 dark:text-blue-300">الاختصارات</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                اضغط على ⌘ + K أو Ctrl + K لفتح شريط البحث السريع من أي مكان في التطبيق
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
