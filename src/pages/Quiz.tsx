
import { useState } from 'react';
import { HelpCircle, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const quizData: Question[] = [
  {
    id: 1,
    text: "ما هو الفرق بين التكلفة الثابتة والتكلفة المتغيرة؟",
    options: [
      "التكلفة الثابتة تتغير مع حجم الإنتاج والمتغيرة ثابتة",
      "التكلفة الثابتة لا تتغير مع حجم الإنتاج والمتغيرة تتغير",
      "التكلفة الثابتة والمتغيرة كلاهما ثابت",
      "التكلفة الثابتة والمتغيرة كلاهما متغير"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "ما هو مفهوم التضخم الاقتصادي؟",
    options: [
      "انخفاض المستوى العام للأسعار",
      "ثبات المستوى العام للأسعار",
      "ارتفاع المستوى العام للأسعار",
      "تذبذب المستوى العام للأسعار"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    text: "ما هي الميزانية العمومية؟",
    options: [
      "قائمة تبين أرباح وخسائر الشركة",
      "قائمة تبين أصول وخصوم الشركة في تاريخ محدد",
      "قائمة تبين التدفقات النقدية للشركة",
      "قائمة تبين مصاريف الشركة"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    text: "ما هو السوق الاحتكاري؟",
    options: [
      "سوق به عدد كبير من البائعين والمشترين",
      "سوق به بائع واحد وعدد كبير من المشترين",
      "سوق به عدد قليل من البائعين وعدد كبير من المشترين",
      "سوق به عدد قليل من البائعين والمشترين"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    text: "ما هو المقصود بالناتج المحلي الإجمالي (GDP)؟",
    options: [
      "القيمة السوقية لكل السلع والخدمات النهائية المنتجة في بلد ما خلال فترة زمنية",
      "مجموع الضرائب المحصلة في بلد ما",
      "مجموع الصادرات ناقص الواردات لبلد ما",
      "مجموع الاستثمارات الأجنبية في بلد ما"
    ],
    correctAnswer: 0
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  
  const handleOptionClick = (optionIndex: number) => {
    if (answeredQuestions.includes(currentQuestion)) return;
    
    setSelectedOption(optionIndex);
    
    const updatedAnsweredQuestions = [...answeredQuestions, currentQuestion];
    setAnsweredQuestions(updatedAnsweredQuestions);
    
    if (optionIndex === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answeredQuestions.includes(currentQuestion - 1) 
        ? quizData[currentQuestion - 1].correctAnswer 
        : null
      );
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };
  
  const isAnswered = answeredQuestions.includes(currentQuestion);
  const isCorrect = selectedOption === quizData[currentQuestion].correctAnswer;
  
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-300 mb-4">
          كويز الأسئلة
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          اختبر معلوماتك في الإقتصاد والتسيير
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          أجب على الأسئلة التالية واكتشف مستوى فهمك للمفاهيم الأساسية
        </p>
      </div>

      {!showResult ? (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                السؤال {currentQuestion + 1} من {quizData.length}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                النتيجة: {score}/{answeredQuestions.length}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Question */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <HelpCircle size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-medium text-gray-900 dark:text-white">
                {quizData[currentQuestion].text}
              </h2>
            </div>
            
            {/* Options */}
            <div className="space-y-3 mt-6">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full text-right p-4 rounded-xl border transition-all duration-200",
                    "flex items-center justify-between",
                    isAnswered && index === quizData[currentQuestion].correctAnswer
                      ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                      : isAnswered && index === selectedOption && !isCorrect
                        ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                        : selectedOption === index
                          ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                          : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <span className={cn(
                    "font-medium",
                    isAnswered && index === quizData[currentQuestion].correctAnswer
                      ? "text-green-800 dark:text-green-300"
                      : isAnswered && index === selectedOption && !isCorrect
                        ? "text-red-800 dark:text-red-300"
                        : selectedOption === index
                          ? "text-blue-800 dark:text-blue-300"
                          : "text-gray-800 dark:text-gray-200"
                  )}>
                    {option}
                  </span>
                  
                  {isAnswered && index === quizData[currentQuestion].correctAnswer && (
                    <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <Check size={16} className="text-green-600 dark:text-green-400" />
                    </div>
                  )}
                  
                  {isAnswered && index === selectedOption && !isCorrect && (
                    <div className="p-1 bg-red-100 dark:bg-red-900/30 rounded-full">
                      <X size={16} className="text-red-600 dark:text-red-400" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className={cn(
                "flex items-center gap-2 py-2 px-4 rounded-lg transition-colors",
                currentQuestion === 0
                  ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              )}
            >
              <ChevronLeft size={18} />
              <span>السابق</span>
            </button>
            
            <button
              onClick={handleNextQuestion}
              className={cn(
                "flex items-center gap-2 py-2 px-6 rounded-lg",
                "bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              )}
              disabled={!isAnswered}
            >
              <span>{currentQuestion === quizData.length - 1 ? 'عرض النتيجة' : 'التالي'}</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 text-center animate-scale-in">
          <div className="mb-6">
            <div 
              className={cn(
                "mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4",
                score >= quizData.length / 2
                  ? "bg-green-100 dark:bg-green-900/30"
                  : "bg-red-100 dark:bg-red-900/30"
              )}
            >
              {score >= quizData.length / 2 ? (
                <Check size={40} className="text-green-600 dark:text-green-400" />
              ) : (
                <X size={40} className="text-red-600 dark:text-red-400" />
              )}
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {score >= quizData.length / 2 ? 'أحسنت!' : 'حاول مرة أخرى!'}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              لقد أجبت على <span className="font-bold">{score}</span> من <span className="font-bold">{quizData.length}</span> أسئلة بشكل صحيح.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl inline-block">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                {Math.round((score / quizData.length) * 100)}%
              </div>
            </div>
          </div>
          
          <button
            onClick={resetQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            إعادة الإختبار
          </button>
        </div>
      )}
    </div>
  );
}
