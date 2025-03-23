
import { useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

// Improved search database with only core elements of the application
const searchDatabase = [
  // Subjects
  { id: 1, title: 'مادة المحاسبة', type: 'مادة', path: '/subject/accounting' },
  { id: 2, title: 'مادة الاقتصاد', type: 'مادة', path: '/subject/economics' },
  { id: 3, title: 'مادة الرياضيات', type: 'مادة', path: '/subject/mathematics' },
  { id: 4, title: 'مادة التاريخ والجغرافيا', type: 'مادة', path: '/subject/history' },
  { id: 5, title: 'مادة اللغة العربية', type: 'مادة', path: '/subject/arabic' },
  { id: 6, title: 'مادة اللغة الفرنسية', type: 'مادة', path: '/subject/french' },
  { id: 7, title: 'مادة اللغة الأمازيغية', type: 'مادة', path: '/subject/amazigh' },
  { id: 8, title: 'مادة اللغة الإنجليزية', type: 'مادة', path: '/subject/english' },
  { id: 9, title: 'مادة العلوم الإسلامية', type: 'مادة', path: '/subject/islamic' },
  { id: 10, title: 'مادة الفلسفة', type: 'مادة', path: '/subject/philosophy' },
  { id: 11, title: 'مادة القانون', type: 'مادة', path: '/subject/law' },
  
  // Core features
  { id: 12, title: 'حاسبة المعدل', type: 'أداة', path: '/calculator' },
  { id: 13, title: 'اختبارات', type: 'أداة', path: '/quiz' },
  { id: 14, title: 'تمارين', type: 'أداة', path: '/exercises' },
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
  
  const handleResultClick = (path: string) => {
    window.location.href = path;
  };

  useEffect(() => {
    if (query) {
      setIsSearching(true);
      
      // Enhanced search function
      const searchData = async () => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Search algorithm focusing on application elements
        const filteredResults = searchDatabase.filter(item => {
          const searchLower = query.toLowerCase();
          return (
            item.title.toLowerCase().includes(searchLower) ||
            item.type.toLowerCase().includes(searchLower)
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
    <div className="container mx-auto py-6">
      <form onSubmit={handleSearch} className="mb-6 flex items-center justify-end">
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="ابحث عن المواد، التمارين، الاختبارات..."
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
        <div className="flex justify-center items-center py-8">
          <div className="animate-pulse text-center">
            <p>جاري البحث...</p>
          </div>
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-3">
          {results.map((result) => (
            <div
              key={result.id}
              onClick={() => handleResultClick(result.path)}
              className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer text-right"
            >
              <h3 className="text-lg font-medium">{result.title}</h3>
              <div className="flex justify-end gap-2 mt-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  {result.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-10">
          <p className="text-lg">لم يتم العثور على نتائج للبحث.</p>
          <p className="text-muted-foreground mt-2">حاول استخدام كلمات بحث مختلفة.</p>
        </div>
      ) : null}
    </div>
  );
}
