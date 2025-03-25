
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import {
  CommandDialog,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { toast } from "@/hooks/use-toast";
import { SearchButton } from "./SearchButton";
import { SearchResults } from "./SearchResults";
import { searchDatabase, SearchResult } from "./searchData";
import { performSearch } from "./searchUtils";

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
      const searchResults = performSearch(searchDatabase, debouncedQuery);
      setResults(searchResults);
      setIsSearching(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [debouncedQuery]);
  
  // معالجة اختيار نتيجة
  const handleSelect = (result: SearchResult) => {
    navigate(result.path);
    setOpen(false);
    toast({
      title: "انتقال إلى",
      description: result.title,
    });
  };

  return (
    <>
      <SearchButton onClick={() => setOpen(true)} />
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="ابحث في المواد، السنوات، الدروس..." 
          value={query}
          onValueChange={setQuery}
          className="text-right" 
        />
        <CommandList className="max-h-[calc(100vh-180px)]">
          <SearchResults 
            results={results} 
            query={debouncedQuery} 
            isSearching={isSearching} 
            onSelect={handleSelect} 
          />
        </CommandList>
      </CommandDialog>
    </>
  );
}
