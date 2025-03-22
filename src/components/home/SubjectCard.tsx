
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
        "group relative overflow-hidden rounded-xl p-4",
        "bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-900/30",
        "hover-lift hover:shadow-xl dark:hover:shadow-gray-900/40",
        "border border-gray-100 dark:border-gray-700",
        "transition-all duration-300 ease-in-out",
        "animate-scale-in h-[120px] flex flex-col justify-between"
      )}
      style={animationStyle}
    >
      <div 
        className={cn(
          "absolute -right-12 -top-12 opacity-10 group-hover:opacity-20 transition-opacity",
          "rounded-full h-24 w-24 flex items-center justify-center"
        )}
        style={{ backgroundColor: color }}
      >
        <Icon size={36} className="text-gray-900 dark:text-white" />
      </div>
      
      <div className="flex flex-col items-start">
        <div 
          className={cn(
            "p-2 rounded-lg",
            "transition-transform duration-300 group-hover:scale-110",
          )}
          style={{ backgroundColor: color }}
        >
          <Icon size={18} className="text-white" />
        </div>
        
        <div className="z-10 mt-2">
          <h3 className="text-md font-bold text-gray-900 dark:text-white">
            {name}
          </h3>
        </div>
      </div>
      
      <div className="absolute bottom-3 left-4 w-8 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full w-0 group-hover:w-full transition-all duration-700 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </Link>
  );
}
