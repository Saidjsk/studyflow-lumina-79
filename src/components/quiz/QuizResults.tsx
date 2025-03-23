
import { Button } from "@/components/ui/button";
import { Check, X, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  level: number;
  maxLevel: number;
  onReset: () => void;
}

export const QuizResults = ({ score, totalQuestions, level, maxLevel, onReset }: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isSuccess = percentage >= 50;
  
  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const filled = i < Math.ceil(percentage / 20);
    stars.push(
      <motion.div 
        key={i}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ delay: 0.3 + (i * 0.1), duration: 0.4 }}
      >
        <Star 
          size={36} 
          className={cn(
            "transition-all duration-300",
            filled 
              ? "fill-yellow-400 text-yellow-400" 
              : "fill-gray-200 text-gray-300 dark:fill-gray-700 dark:text-gray-600"
          )}
        />
      </motion.div>
    );
  }
  
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 text-center"
    >
      <motion.div 
        variants={item}
        className="mb-6"
      >
        <div 
          className={cn(
            "mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4",
            isSuccess
              ? "bg-green-100 dark:bg-green-900/30"
              : "bg-red-100 dark:bg-red-900/30"
          )}
        >
          {isSuccess ? (
            <Check size={40} className="text-green-600 dark:text-green-400" />
          ) : (
            <X size={40} className="text-red-600 dark:text-red-400" />
          )}
        </div>
        
        <motion.h2 
          variants={item}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
        >
          {isSuccess ? 'أحسنت!' : 'حاول مرة أخرى!'}
        </motion.h2>
        
        <motion.p 
          variants={item}
          className="text-gray-600 dark:text-gray-400 mb-6"
        >
          لقد أجبت على <span className="font-bold">{score}</span> من <span className="font-bold">{totalQuestions}</span> أسئلة بشكل صحيح.
        </motion.p>
        
        <motion.div 
          variants={item}
          className="flex justify-center space-x-1 space-x-reverse mb-4"
        >
          {stars}
        </motion.div>
        
        <motion.div 
          variants={item}
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl inline-block mb-6"
        >
          <div className="text-5xl font-bold text-white">
            {percentage}%
          </div>
          <div className="text-sm text-white/90 mt-1">
            وصلت إلى المستوى {level} من {maxLevel}
          </div>
        </motion.div>
        
        <motion.div variants={item}>
          <Button
            onClick={onReset}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            إعادة الاختبار
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
