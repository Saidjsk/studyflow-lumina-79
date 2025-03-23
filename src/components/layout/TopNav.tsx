
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Search, Home } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ThemeToggle } from '../ui/ThemeToggle';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function TopNav() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  }

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 sm:w-80">
            <SheetHeader className="text-right mb-4">
              <SheetTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                بكالوريا
              </SheetTitle>
            </SheetHeader>
            
            <div className="space-y-6 py-4">
              <div className="space-y-1">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-right"
                  onClick={() => navigate('/')}
                >
                  <Home className="ml-2 h-5 w-5" />
                  الرئيسية
                </Button>
              </div>
              
              <div className="py-2">
                <ThemeToggle className="w-full justify-start" showLabel={true} />
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mr-2">بكالوريا</h1>
      </div>

      <div className="flex items-center gap-2">
        {searchOpen ? (
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن..."
              className="w-full max-w-xs ml-2 text-right"
              autoFocus
            />
            <Button type="submit" size="icon" variant="ghost">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              size="sm" 
              onClick={() => setSearchOpen(false)}
              className="text-sm"
            >
              إلغاء
            </Button>
          </form>
        ) : (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
