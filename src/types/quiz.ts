
export interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  category?: string;
  difficulty?: "easy" | "medium" | "hard";
}

export interface QuizState {
  currentQuestion: number;
  selectedOption: number | null;
  showResult: boolean;
  score: number;
  answeredQuestions: number[];
  timer: number;
  level: number;
  maxLevel: number;
  isTimeOut: boolean;
  answeredCorrectly: boolean;
}
