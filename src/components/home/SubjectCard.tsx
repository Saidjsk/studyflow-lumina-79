
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
    animationDelay: `${delay * 0.05}s`,
  };

  return (
    <Link
      to={`/subject/${id}`}
      className={cn(
        "group relative overflow-hidden rounded-xl p-3",
        "bg-card border border-border shadow-md",
        "hover-lift hover:shadow-xl",
        "transition-all duration-300 ease-in-out",
        "animate-scale-in flex flex-col justify-between",
        "min-h-[100px]"
      )}
      style={animationStyle}
    >
      <div 
        className={cn(
          "absolute -right-12 -top-12 opacity-10 group-hover:opacity-20 transition-opacity",
          "rounded-full h-20 w-20 flex items-center justify-center"
        )}
        style={{ backgroundColor: color }}
      >
        <Icon size={30} className="text-foreground" />
      </div>
      
      <div className="flex flex-col items-start">
        <div 
          className={cn(
            "p-1.5 rounded-lg",
            "transition-transform duration-300 group-hover:scale-110",
          )}
          style={{ backgroundColor: color }}
        >
          <Icon size={16} className="text-white" />
        </div>
        
        <div className="z-10 mt-2">
          <h3 className="text-sm font-bold text-foreground">
            {name}
          </h3>
        </div>
      </div>
      
      <div className="absolute bottom-2 left-3 w-8 h-1 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full w-0 group-hover:w-full transition-all duration-700 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </Link>
  );
}
