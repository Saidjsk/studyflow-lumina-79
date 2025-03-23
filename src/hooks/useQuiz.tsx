
import { useState, useEffect, useCallback, useRef } from 'react';
import { QuizQuestion, QuizState } from '@/types/quiz';
import { getQuestionsByLevel } from '@/data/quizQuestions';

const TIMER_DURATION = 10; // seconds
const QUESTIONS_PER_LEVEL = 5;
const MAX_LEVEL = 3;

export const useQuiz = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    selectedOption: null,
    showResult: false,
    score: 0,
    answeredQuestions: [],
    timer: TIMER_DURATION,
    level: 1,
    maxLevel: MAX_LEVEL,
    isTimeOut: false,
    answeredCorrectly: false,
  });
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Load questions based on level
  useEffect(() => {
    const levelQuestions = getQuestionsByLevel(state.level);
    // Randomize and limit questions for each level
    const shuffled = [...levelQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, QUESTIONS_PER_LEVEL));
  }, [state.level]);
  
  // Timer logic
  useEffect(() => {
    // Only start timer if not answered and not showing results
    if (!state.answeredQuestions.includes(state.currentQuestion) && !state.showResult) {
      timerRef.current = setInterval(() => {
        setState(prev => {
          // If timer has reached 0, handle timeout
          if (prev.timer <= 1) {
            clearInterval(timerRef.current as NodeJS.Timeout);
            return {
              ...prev,
              timer: 0,
              isTimeOut: true,
              answeredQuestions: [...prev.answeredQuestions, prev.currentQuestion],
            };
          }
          return { ...prev, timer: prev.timer - 1 };
        });
      }, 1000);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [state.currentQuestion, state.answeredQuestions, state.showResult]);
  
  // Handle option selection
  const handleOptionClick = useCallback((optionIndex: number) => {
    if (state.answeredQuestions.includes(state.currentQuestion) || state.isTimeOut) return;
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    const isCorrect = optionIndex === questions[state.currentQuestion]?.correctAnswer;
    
    setState(prev => ({
      ...prev,
      selectedOption: optionIndex,
      score: isCorrect ? prev.score + 1 : prev.score,
      answeredQuestions: [...prev.answeredQuestions, prev.currentQuestion],
      answeredCorrectly: isCorrect,
    }));
    
    // Auto-advance to next question after a delay
    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  }, [state.currentQuestion, state.answeredQuestions, state.isTimeOut, questions]);
  
  // Handle time out
  const handleTimeOut = useCallback(() => {
    if (state.answeredQuestions.includes(state.currentQuestion)) return;
    
    setState(prev => ({
      ...prev,
      isTimeOut: true,
      answeredQuestions: [...prev.answeredQuestions, prev.currentQuestion],
    }));
    
    // Auto-advance to next question after a delay
    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  }, [state.currentQuestion, state.answeredQuestions]);
  
  // Handle next question
  const handleNextQuestion = useCallback(() => {
    // If current question is last one in the set, check for level up or show results
    if (state.currentQuestion >= questions.length - 1) {
      // Check if score is enough to advance to the next level
      const currentScore = state.score;
      const scoreThreshold = Math.floor(QUESTIONS_PER_LEVEL * 0.7); // 70% correct to advance
      
      if (currentScore >= scoreThreshold && state.level < MAX_LEVEL) {
        // Level up
        setState(prev => ({
          ...prev,
          level: prev.level + 1,
          currentQuestion: 0,
          selectedOption: null,
          answeredQuestions: [],
          timer: TIMER_DURATION,
          isTimeOut: false,
          answeredCorrectly: false,
        }));
      } else {
        // Show results
        setState(prev => ({
          ...prev,
          showResult: true,
        }));
      }
    } else {
      // Move to next question
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        selectedOption: null,
        timer: TIMER_DURATION,
        isTimeOut: false,
        answeredCorrectly: false,
      }));
    }
  }, [state.currentQuestion, state.level, state.score, questions.length]);
  
  // Reset quiz
  const resetQuiz = useCallback(() => {
    setState({
      currentQuestion: 0,
      selectedOption: null,
      showResult: false,
      score: 0,
      answeredQuestions: [],
      timer: TIMER_DURATION,
      level: 1,
      maxLevel: MAX_LEVEL,
      isTimeOut: false,
      answeredCorrectly: false,
    });
  }, []);
  
  return {
    questions,
    state,
    handleOptionClick,
    handleNextQuestion,
    handleTimeOut,
    resetQuiz,
    TIMER_DURATION,
    QUESTIONS_PER_LEVEL,
  };
};
