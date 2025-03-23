
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

interface QuizOptionsProps {
  options: string[];
  selectedOption: number | null;
  correctAnswer: number;
  isAnswered: boolean;
  isTimeOut: boolean;
  onSelectOption: (optionIndex: number) => void;
}

export const QuizOptions = ({
  options,
  selectedOption,
  correctAnswer,
  isAnswered,
  isTimeOut,
  onSelectOption,
}: QuizOptionsProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
  const renderOption = (option: string, index: number) => {
    const isSelected = selectedOption === index;
    const isCorrect = index === correctAnswer;
    
    let bgColor = "bg-white dark:bg-gray-800";
    let borderColor = "border-gray-200 dark:border-gray-700";
    let textColor = "text-gray-800 dark:text-gray-200";
    
    if (isAnswered || isTimeOut) {
      if (isCorrect) {
        bgColor = "bg-green-50 dark:bg-green-900/20";
        borderColor = "border-green-200 dark:border-green-800";
        textColor = "text-green-800 dark:text-green-300";
      } else if (isSelected && !isCorrect) {
        bgColor = "bg-red-50 dark:bg-red-900/20";
        borderColor = "border-red-200 dark:border-red-800";
        textColor = "text-red-800 dark:text-red-300";
      }
    } else if (isSelected) {
      bgColor = "bg-blue-50 dark:bg-blue-900/20";
      borderColor = "border-blue-200 dark:border-blue-800";
      textColor = "text-blue-800 dark:text-blue-300";
    }
    
    return (
      <motion.button
        key={index}
        variants={item}
        onClick={() => onSelectOption(index)}
        disabled={isAnswered || isTimeOut}
        className={cn(
          "flex items-center justify-between w-full p-4 rounded-lg border-2 shadow-sm transition-all duration-200",
          "hover:translate-y-[-2px]",
          bgColor,
          borderColor,
          textColor,
          (isAnswered || isTimeOut) ? "cursor-default" : "hover:border-blue-300 dark:hover:border-blue-700",
        )}
      >
        <span className="font-medium">{option}</span>
        
        {isAnswered && isCorrect && (
          <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
            <Check size={16} className="text-green-600 dark:text-green-400" />
          </div>
        )}
        
        {isAnswered && isSelected && !isCorrect && (
          <div className="p-1 bg-red-100 dark:bg-red-900/30 rounded-full">
            <X size={16} className="text-red-600 dark:text-red-400" />
          </div>
        )}
      </motion.button>
    );
  };
  
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 gap-3 mt-4"
    >
      {options.map((option, index) => (
        <div key={index} className="w-full">
          {renderOption(option, index)}
        </div>
      ))}
    </motion.div>
  );
};
