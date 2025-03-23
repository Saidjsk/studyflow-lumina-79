
import { useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

// Mock database with all subjects and topics
const searchDatabase = [
  { id: 1, title: 'دروس المحاسبة الأساسية', type: 'درس', subject: 'محاسبة' },
  { id: 2, title: 'تمارين المحاسبة التحليلية', type: 'تمرين', subject: 'محاسبة' },
  { id: 3, title: 'مفاهيم الإقتصاد الكلي', type: 'درس', subject: 'اقتصاد' },
  { id: 4, title: 'تمارين الإقتصاد الجزئي', type: 'تمرين', subject: 'اقتصاد' },
  { id: 5, title: 'أساسيات الرياضيات المالية', type: 'درس', subject: 'رياضيات' },
  { id: 6, title: 'تمارين الإحصاء والاحتمالات', type: 'تمرين', subject: 'رياضيات' },
  { id: 7, title: 'دروس تاريخ الجزائر', type: 'درس', subject: 'تاريخ' },
  { id: 8, title: 'تمارين في الجغرافيا الإقتصادية', type: 'تمرين', subject: 'جغرافيا' },
  { id: 9, title: 'قواعد اللغة العربية', type: 'درس', subject: 'عربية' },
  { id: 10, title: 'تمارين البلاغة والأدب', type: 'تمرين', subject: 'عربية' },
  { id: 11, title: 'دروس قواعد اللغة الفرنسية', type: 'درس', subject: 'فرنسية' },
  { id: 12, title: 'تمارين التعبير الكتابي', type: 'تمرين', subject: 'فرنسية' },
  { id: 13, title: 'أساسيات اللغة الأمازيغية', type: 'درس', subject: 'أمازيغية' },
  { id: 14, title: 'تمارين المحادثة باللغة الإنجليزية', type: 'تمرين', subject: 'إنجليزية' },
  { id: 15, title: 'دروس أصول الفقه', type: 'درس', subject: 'علوم إسلامية' },
  { id: 16, title: 'تمارين في علوم القرآن', type: 'تمرين', subject: 'علوم إسلامية' },
  { id: 17, title: 'مدخل إلى الفلسفة', type: 'درس', subject: 'فلسفة' },
  { id: 18, title: 'تمارين المنطق والاستدلال', type: 'تمرين', subject: 'فلسفة' },
  { id: 19, title: 'أساسيات القانون التجاري', type: 'درس', subject: 'قانون' },
  { id: 20, title: 'تمارين في القانون المدني', type: 'تمرين', subject: 'قانون' },
];

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  useEffect(() => {
    if (query) {
      setIsSearching(true);
      
      // Improved search function with better performance
      const searchData = async () => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Enhanced search algorithm that searches in title, type, and subject
        const filteredResults = searchDatabase.filter(item => {
          const searchLower = query.toLowerCase();
          return (
            item.title.toLowerCase().includes(searchLower) ||
            item.type.toLowerCase().includes(searchLower) ||
            item.subject.toLowerCase().includes(searchLower)
          );
        });
        
        setResults(filteredResults);
        setIsSearching(false);
      };
      
      searchData();
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-right">نتائج البحث</h1>
      
      <form onSubmit={handleSearch} className="mb-8 flex items-center justify-end">
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="ابحث عن دروس، تمارين، أو مواضيع..."
          className="max-w-md text-right ml-2"
        />
        <Button type="submit">
          <Search className="h-4 w-4 ml-2" />
          بحث
        </Button>
      </form>
      
      {query && (
        <div className="text-right mb-4">
          <p className="text-muted-foreground">
            نتائج البحث عن: <span className="font-semibold">{query}</span>
            {results.length > 0 ? ` (${results.length} نتيجة)` : ''}
          </p>
        </div>
      )}
      
      {isSearching ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-pulse text-center">
            <p>جاري البحث...</p>
          </div>
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-4">
          {results.map((result) => (
            <div
              key={result.id}
              className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer text-right"
            >
              <h3 className="text-lg font-medium">{result.title}</h3>
              <div className="flex justify-end gap-2 mt-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  {result.subject}
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                  {result.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-12">
          <p className="text-lg">لم يتم العثور على نتائج للبحث.</p>
          <p className="text-muted-foreground mt-2">حاول استخدام كلمات بحث مختلفة.</p>
        </div>
      ) : null}
    </div>
  );
}
