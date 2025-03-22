
import { useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

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
      // Simulated search function
      const searchData = async () => {
        // In a real app, you would fetch results from an API
        // This is just a placeholder
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Sample results
        setResults([
          { id: 1, title: 'دروس الرياضيات', type: 'درس', subject: 'رياضيات' },
          { id: 2, title: 'تمارين الفيزياء', type: 'تمرين', subject: 'فيزياء' },
          { id: 3, title: 'دروس العلوم الطبيعية', type: 'درس', subject: 'علوم طبيعية' },
        ]);
        setIsSearching(false);
      };
      
      searchData();
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
