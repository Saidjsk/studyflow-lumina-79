
import React from "react";
import { Search } from "lucide-react";
import {
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { SearchResult } from './searchData';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  isSearching: boolean;
  onSelect: (result: SearchResult) => void;
}

export function SearchResults({ results, query, isSearching, onSelect }: SearchResultsProps) {
  // الحصول على أيقونة النتيجة
  const getResultIcon = (result: SearchResult) => {
    if (result.icon) {
      const Icon = result.icon;
      return <Icon className="ml-2 h-4 w-4 text-muted-foreground" />;
    }
    return <Search className="ml-2 h-4 w-4 text-muted-foreground" />;
  };

  if (isSearching) {
    return (
      <div className="py-6 text-center text-sm">
        <div className="animate-pulse">جاري البحث...</div>
      </div>
    );
  }

  if (results.length === 0 && query) {
    return <CommandEmpty>لا توجد نتائج للبحث "{query}"</CommandEmpty>;
  }

  if (results.length > 0) {
    return (
      <>
        <CommandGroup heading="نتائج البحث" className="text-right">
          {results.map((result) => (
            <CommandItem
              key={result.id}
              onSelect={() => onSelect(result)}
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
    );
  }

  return null;
}
