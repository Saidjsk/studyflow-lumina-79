
import { useNavigate } from 'react-router-dom';
import { Menu, Home, Lightbulb, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function TopNav() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className={`sticky top-0 z-10 flex items-center justify-between p-4 border-b ${
      theme === 'dark' 
        ? 'border-gray-800 bg-gray-900' 
        : 'border-gray-200 bg-white'
    }`}>
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <SheetHeader className={`text-right p-4 border-b ${
              theme === 'dark' 
                ? 'border-gray-800' 
                : 'border-gray-200'
            }`}>
              <SheetTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                بكالوريا
              </SheetTitle>
            </SheetHeader>
            
            <div className="flex flex-col h-[calc(100vh-100px)]">
              <div className={`space-y-1 p-4 border-b ${
                theme === 'dark' 
                  ? 'border-gray-800' 
                  : 'border-gray-200'
              }`}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-right"
                  onClick={() => navigate('/')}
                >
                  <Home className="ml-2 h-5 w-5" />
                  الرئيسية
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-right"
                  onClick={() => navigate('/tips')}
                >
                  <Lightbulb className="ml-2 h-5 w-5" />
                  نصائح للتفوق
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-right"
                  onClick={() => navigate('/feedback')}
                >
                  <MessageSquare className="ml-2 h-5 w-5" />
                  الاقتراحات والشكاوى
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <h1 
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mr-2 cursor-pointer" 
          onClick={() => navigate('/')}
        >
          بكالوريا
        </h1>
      </div>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </div>
  );
}
