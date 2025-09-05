
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex items-center justify-start gap-2 rounded-md p-2 transition-colors",
        theme === 'dark' 
          ? "bg-gray-800 hover:bg-gray-700 text-yellow-400" 
          : "bg-blue-100 hover:bg-blue-200 text-blue-900",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <>
          <Sun size={18} />
          {showLabel && <span>الوضع النهاري</span>}
        </>
      ) : (
        <>
          <Moon size={18} />
          {showLabel && <span>الوضع الليلي</span>}
        </>
      )}
    </button>
  );
}
