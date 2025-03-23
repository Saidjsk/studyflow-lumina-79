
import { HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuiz } from '@/hooks/useQuiz';
import { QuizTimer } from '@/components/quiz/QuizTimer';
import { QuizOptions } from '@/components/quiz/QuizOptions';
import { QuizResults } from '@/components/quiz/QuizResults';
import { LevelIndicator } from '@/components/quiz/LevelIndicator';

export default function Quiz() {
  const { 
    questions, 
    state, 
    handleOptionClick, 
    handleNextQuestion, 
    handleTimeOut, 
    resetQuiz,
    TIMER_DURATION,
    QUESTIONS_PER_LEVEL
  } = useQuiz();
  
  const currentQuestionData = questions[state.currentQuestion];
  const isAnswered = state.answeredQuestions.includes(state.currentQuestion);
  
  return (
    <div className="animate-fade-in max-w-2xl mx-auto px-4">
      <div className="text-center mb-4">
        <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-300 mb-2">
          كويز الأسئلة
        </div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          اختبر معلوماتك
        </h1>
      </div>

      {!state.showResult && questions.length > 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
          {/* Level and Score Progress */}
          <div className="mb-3">
            <LevelIndicator 
              level={state.level}
              maxLevel={state.maxLevel}
              score={state.score}
              questionsPerLevel={QUESTIONS_PER_LEVEL}
            />
          </div>
          
          {/* Progress and Timer */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="w-full">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  السؤال {state.currentQuestion + 1} من {questions.length}
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  المستوى {state.level}
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300"
                  style={{ width: `${((state.currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="w-full">
              <QuizTimer 
                timer={state.timer} 
                maxTime={TIMER_DURATION} 
                onTimeOut={handleTimeOut}
                isAnswered={isAnswered}
              />
            </div>
          </div>
          
          {/* Question Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={state.currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={cn(
                "p-3 rounded-lg mb-4 transition-all duration-300",
                isAnswered && state.answeredCorrectly 
                  ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800" 
                  : isAnswered || state.isTimeOut
                    ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                    : "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
              )}>
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "p-1.5 rounded-full flex-shrink-0",
                    isAnswered && state.answeredCorrectly 
                      ? "bg-green-100 dark:bg-green-900/30" 
                      : isAnswered || state.isTimeOut
                        ? "bg-red-100 dark:bg-red-900/30"
                        : "bg-blue-100 dark:bg-blue-900/30"
                  )}>
                    <HelpCircle size={18} className={cn(
                      isAnswered && state.answeredCorrectly 
                        ? "text-green-600 dark:text-green-400" 
                        : isAnswered || state.isTimeOut
                          ? "text-red-600 dark:text-red-400"
                          : "text-blue-600 dark:text-blue-400"
                    )} />
                  </div>
                  <h2 className="text-md font-medium text-gray-900 dark:text-white">
                    {currentQuestionData?.text}
                  </h2>
                </div>
              </div>
              
              {/* Options Grid */}
              {currentQuestionData && (
                <QuizOptions 
                  options={currentQuestionData.options}
                  selectedOption={state.selectedOption}
                  correctAnswer={currentQuestionData.correctAnswer}
                  isAnswered={isAnswered}
                  isTimeOut={state.isTimeOut}
                  onSelectOption={handleOptionClick}
                />
              )}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => {}}
              disabled={true}
              className="flex items-center gap-1 py-1.5 px-3 rounded-lg text-gray-400 dark:text-gray-600 cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              <span className="text-sm">السابق</span>
            </button>
            
            <button
              onClick={handleNextQuestion}
              className={cn(
                "flex items-center gap-1 py-1.5 px-4 rounded-lg text-sm",
                "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-colors"
              )}
              disabled={!isAnswered && !state.isTimeOut}
            >
              <span>
                {state.currentQuestion === questions.length - 1 ? 'عرض النتيجة' : 'التالي'}
              </span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      ) : (
        <QuizResults 
          score={state.score}
          totalQuestions={state.answeredQuestions.length}
          level={state.level}
          maxLevel={state.maxLevel}
          onReset={resetQuiz}
        />
      )}
    </div>
  );
}
