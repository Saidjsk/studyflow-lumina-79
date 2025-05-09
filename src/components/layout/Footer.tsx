
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Calculator, HelpCircle, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Footer() {
  const location = useLocation();
  
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
    <footer className="fixed bottom-0 left-0 right-0 z-30 bg-white dark:bg-gray-900 glass shadow-lg border-t border-gray-200 dark:border-gray-800">
      <div className="flex justify-around items-center h-14 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center w-14 h-full transition-colors",
              item.active 
                ? "text-blue-600 dark:text-blue-400" 
                : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
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
