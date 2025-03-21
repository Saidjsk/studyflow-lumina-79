
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Calculator, HelpCircle, Moon, Sun, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  
  const menuItems = [
    { 
      path: '/', 
      name: 'الرئيسية', 
      icon: Home,
      active: location.pathname === '/'
    },
    { 
      path: '/exercises', 
      name: 'تمارين وسلاسل', 
      icon: BookOpen,
      active: location.pathname === '/exercises'
    },
    { 
      path: '/calculator', 
      name: 'حساب المعدل', 
      icon: Calculator,
      active: location.pathname === '/calculator'
    },
    { 
      path: '/quiz', 
      name: 'كويز الأسئلة', 
      icon: HelpCircle,
      active: location.pathname === '/quiz'
    },
  ];

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {expanded && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setExpanded(false)}
        />
      )}
      
      <aside className={cn(
        "fixed top-0 right-0 h-full z-30 transition-all duration-300 ease-in-out",
        "bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800",
        "shadow-lg",
        expanded ? "w-64" : "w-16",
        "md:translate-x-0",
        expanded ? "translate-x-0" : "translate-x-[calc(100%-4rem)]"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo and toggle button */}
          <div className="flex items-center justify-between p-4">
            {expanded && (
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">بكالوريا</h1>
            )}
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
            >
              {expanded ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-2 px-3">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200",
                      "hover:bg-gray-100 dark:hover:bg-gray-800",
                      item.active && "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    )}
                  >
                    <item.icon size={expanded ? 18 : 20} className={expanded ? "" : "mx-auto"} />
                    {expanded && <span className="text-sm font-medium">{item.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Bottom actions */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={toggleTheme}
              className={cn(
                "flex items-center justify-center gap-2 rounded-lg p-3 transition-colors w-full",
                theme === 'dark' 
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-400" 
                  : "bg-blue-100 hover:bg-blue-200 text-blue-900"
              )}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={18} />
                  {expanded && <span>الوضع النهاري</span>}
                </>
              ) : (
                <>
                  <Moon size={18} />
                  {expanded && <span>الوضع الليلي</span>}
                </>
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
