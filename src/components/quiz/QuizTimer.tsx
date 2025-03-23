
import { useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Clock } from "lucide-react";

interface QuizTimerProps {
  timer: number;
  maxTime: number;
  onTimeOut: () => void;
  isAnswered: boolean;
}

export const QuizTimer = ({ timer, maxTime, onTimeOut, isAnswered }: QuizTimerProps) => {
  const percentage = (timer / maxTime) * 100;
  
  useEffect(() => {
    if (timer === 0 && !isAnswered) {
      onTimeOut();
    }
  }, [timer, onTimeOut, isAnswered]);
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
          <Clock size={18} />
          <span className="font-semibold">{timer > 0 ? timer : 0} ثانية</span>
        </div>
      </div>
      <Progress 
        value={percentage} 
        className="h-2 bg-gray-200 dark:bg-gray-700"
        indicatorClassName={`${
          percentage > 60 
            ? "bg-green-500" 
            : percentage > 30 
              ? "bg-amber-500" 
              : "bg-red-500"
        }`}
      />
    </div>
  );
};
