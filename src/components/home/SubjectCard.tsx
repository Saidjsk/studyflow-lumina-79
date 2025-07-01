
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
        "group relative overflow-hidden rounded-xl p-4",
        "bg-card border border-border shadow-sm",
        "hover:shadow-lg hover:border-primary/20",
        "transition-all duration-300 ease-out",
        "animate-scale-in flex flex-col justify-between",
        "min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary/50",
        "touch-manipulation" // Better touch response on mobile
      )}
      style={animationStyle}
      aria-label={`انتقال إلى مادة ${name}`}
    >
      <div 
        className={cn(
          "absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300",
          "rounded-full h-16 w-16 flex items-center justify-center"
        )}
        style={{ backgroundColor: color }}
      >
        <Icon size={24} className="text-foreground" />
      </div>
      
      <div className="flex flex-col items-start relative z-10">
        <div 
          className={cn(
            "p-2 rounded-lg mb-3",
            "transition-transform duration-300 group-hover:scale-110",
            "shadow-sm"
          )}
          style={{ backgroundColor: color }}
        >
          <Icon size={18} className="text-white" />
        </div>
        
        <h3 className="text-sm font-bold text-foreground leading-snug">
          {name}
        </h3>
      </div>
      
      <div className="absolute bottom-3 left-4 w-10 h-1 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full w-0 group-hover:w-full transition-all duration-500 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </Link>
  );
}
