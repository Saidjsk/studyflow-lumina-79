
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubjectCardProps {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

export default function SubjectCard({ id, name, icon: Icon, color, delay = 0 }: SubjectCardProps) {
  const animationStyle = {
    animationDelay: `${delay * 0.1}s`,
  };

  return (
    <Link
      to={`/subject/${id}`}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6",
        "bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-900/30",
        "hover-lift hover:shadow-xl dark:hover:shadow-gray-900/40",
        "border border-gray-100 dark:border-gray-700",
        "transition-all duration-300 ease-in-out",
        "animate-scale-in"
      )}
      style={animationStyle}
    >
      <div 
        className={cn(
          "absolute -right-20 -top-20 opacity-10 group-hover:opacity-20 transition-opacity",
          "rounded-full h-40 w-40 flex items-center justify-center"
        )}
        style={{ backgroundColor: color }}
      >
        <Icon size={80} className="text-gray-900 dark:text-white" />
      </div>
      
      <div className="flex flex-col items-start gap-4">
        <div 
          className={cn(
            "p-3 rounded-xl",
            "transition-transform duration-300 group-hover:scale-110",
          )}
          style={{ backgroundColor: color }}
        >
          <Icon size={28} className="text-white" />
        </div>
        
        <div className="z-10">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            {name}
          </h3>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-6 w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full w-0 group-hover:w-full transition-all duration-700 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </Link>
  );
}
