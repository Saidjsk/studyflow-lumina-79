
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
        "flex items-center justify-start gap-2 rounded-lg p-2 glass-icon transition-all duration-300",
        theme === 'dark' 
          ? "text-yellow-400" 
          : "text-blue-600",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <>
          <Sun size={18} className="drop-shadow-sm" />
          {showLabel && <span className="drop-shadow-sm">الوضع النهاري</span>}
        </>
      ) : (
        <>
          <Moon size={18} className="drop-shadow-sm" />
          {showLabel && <span className="drop-shadow-sm">الوضع الليلي</span>}
        </>
      )}
    </button>
  );
}
