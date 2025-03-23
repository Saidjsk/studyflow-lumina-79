
import { Progress } from "@/components/ui/progress";
import { TrophyIcon } from "lucide-react";

interface LevelIndicatorProps {
  level: number;
  maxLevel: number;
  score: number;
  questionsPerLevel: number;
}

export const LevelIndicator = ({ level, maxLevel, score, questionsPerLevel }: LevelIndicatorProps) => {
  const nextLevelScore = level * questionsPerLevel;
  const progressToNextLevel = ((score % questionsPerLevel) / questionsPerLevel) * 100;
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          المستوى {level}/{maxLevel}
        </span>
        <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400">
          <TrophyIcon size={18} />
          <span className="font-semibold">{score} نقطة</span>
        </div>
      </div>
      <Progress 
        value={progressToNextLevel} 
        className="h-2.5 bg-gray-200 dark:bg-gray-700"
        indicatorClassName="bg-purple-600 dark:bg-purple-500"
      />
      <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-left">
        {score % questionsPerLevel}/{questionsPerLevel} للمستوى التالي
      </div>
    </div>
  );
};
