
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Calculator, HelpCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  
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
    <aside className={cn(
      "fixed top-0 right-0 h-full z-30 transition-all duration-300 ease-in-out",
      "bg-sidebar border-l border-sidebar-border dark:border-gray-800",
      "glass",
      expanded ? "w-64" : "w-16"
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
        <div className="p-4 border-t border-sidebar-border dark:border-gray-800">
          <ThemeToggle showLabel={expanded} className="w-full justify-start" />
        </div>
      </div>
    </aside>
  );
}
