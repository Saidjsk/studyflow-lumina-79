
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Calculator, HelpCircle, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

export default function Footer() {
  const location = useLocation();
  const { theme } = useTheme();
  
  const menuItems = [
    { 
      path: '/', 
      name: 'الرئيسية', 
      icon: Home,
      active: location.pathname === '/'
    },
    { 
      path: '/exercises', 
      name: 'التمارين', 
      icon: BookOpen,
      active: location.pathname === '/exercises'
    },
    { 
      path: '/calculator', 
      name: 'الحاسبة', 
      icon: Calculator,
      active: location.pathname === '/calculator'
    },
    { 
      path: '/quiz', 
      name: 'الاختبار', 
      icon: HelpCircle,
      active: location.pathname === '/quiz'
    },
    { 
      path: '/tips', 
      name: 'نصائح', 
      icon: Lightbulb,
      active: location.pathname === '/tips'
    },
  ];

  return (
    <footer className={`fixed bottom-0 left-0 right-0 z-30 glass shadow-lg border-t ${
      theme === 'dark' 
        ? 'bg-gray-900/90 border-gray-800' 
        : 'bg-white/90 border-gray-200'
    }`}>
      <div className="flex justify-around items-center h-14 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center w-14 h-full transition-colors",
              item.active 
                ? theme === 'dark' ? "text-blue-400" : "text-blue-600" 
                : theme === 'dark' ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
            )}
          >
            <item.icon size={20} className="mb-0.5" />
            <span className="text-[10px]">{item.name}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
}
