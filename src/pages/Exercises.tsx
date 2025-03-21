
import { useState } from 'react';
import { BookOpen, Search, Filter, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const exercisesData = [
  {
    id: 1,
    title: 'تمارين في المحاسبة العامة',
    category: 'accounting',
    difficulty: 'medium',
    pages: 12,
    downloads: 458
  },
  {
    id: 2,
    title: 'سلسلة تمارين في التسيير المالي',
    category: 'management',
    difficulty: 'hard',
    pages: 24,
    downloads: 687
  },
  {
    id: 3,
    title: 'تمارين أساسية في القانون التجاري',
    category: 'law',
    difficulty: 'easy',
    pages: 8,
    downloads: 325
  },
  {
    id: 4,
    title: 'سلسلة تمارين في الاقتصاد الكلي',
    category: 'economics',
    difficulty: 'medium',
    pages: 16,
    downloads: 512
  },
  {
    id: 5,
    title: 'تمارين متقدمة في المحاسبة التحليلية',
    category: 'accounting',
    difficulty: 'hard',
    pages: 18,
    downloads: 276
  },
  {
    id: 6,
    title: 'تمارين تطبيقية في الضرائب والرسوم',
    category: 'law',
    difficulty: 'medium',
    pages: 10,
    downloads: 342
  },
  {
    id: 7,
    title: 'سلسلة تمارين أساسيات التسويق',
    category: 'management',
    difficulty: 'easy',
    pages: 14,
    downloads: 389
  },
  {
    id: 8,
    title: 'تمارين في تحليل السوق والمنافسة',
    category: 'economics',
    difficulty: 'hard',
    pages: 22,
    downloads: 298
  }
];

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'accounting', name: 'المحاسبة' },
  { id: 'management', name: 'التسيير' },
  { id: 'economics', name: 'الإقتصاد' },
  { id: 'law', name: 'القانون' }
];

const difficulties = [
  { id: 'all', name: 'الكل' },
  { id: 'easy', name: 'سهل', color: 'bg-green-500' },
  { id: 'medium', name: 'متوسط', color: 'bg-yellow-500' },
  { id: 'hard', name: 'صعب', color: 'bg-red-500' }
];

export default function Exercises() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  
  const filteredExercises = exercisesData.filter(exercise => {
    const matchesSearch = exercise.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || exercise.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });
  
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'easy':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      case 'medium':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      case 'hard':
        return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
    }
  };
  
  const getDifficultyText = (difficulty: string) => {
    switch(difficulty) {
      case 'easy':
        return 'سهل';
      case 'medium':
        return 'متوسط';
      case 'hard':
        return 'صعب';
      default:
        return '';
    }
  };
  
  const getCategoryText = (category: string) => {
    switch(category) {
      case 'accounting':
        return 'المحاسبة';
      case 'management':
        return 'التسيير';
      case 'economics':
        return 'الإقتصاد';
      case 'law':
        return 'القانون';
      default:
        return '';
    }
  };
  
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 mb-4">
          تمارين وسلاسل
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          مكتبة التمارين والتطبيقات
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          تصفح مجموعة من التمارين والسلاسل المتنوعة لتعزيز فهمك ومهاراتك في مختلف المواد
        </p>
      </div>
      
      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8">
        {/* Search */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="ابحث عن تمارين..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full p-4 ps-10 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 outline-none transition-all"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Categories */}
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
              <Filter size={16} />
              <span>المادة</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                    category.id === selectedCategory
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Difficulty */}
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
              <Filter size={16} />
              <span>المستوى</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map(difficulty => (
                <button
                  key={difficulty.id}
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                    difficulty.id === selectedDifficulty
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  )}
                >
                  {difficulty.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Exercises Grid */}
      {filteredExercises.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise, index) => (
            <div
              key={exercise.id}
              className={cn(
                "bg-white dark:bg-gray-800 rounded-xl shadow-sm",
                "border border-gray-100 dark:border-gray-700",
                "hover-lift hover:border-blue-200 dark:hover:border-blue-900/50",
                "transition-all duration-300 ease-in-out",
                "animate-scale-in overflow-hidden"
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <BookOpen size={24} className="text-blue-700 dark:text-blue-400" />
                  </div>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    getDifficultyColor(exercise.difficulty)
                  )}>
                    {getDifficultyText(exercise.difficulty)}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {exercise.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md">
                    {getCategoryText(exercise.category)}
                  </span>
                  <span>{exercise.pages} صفحة</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {exercise.downloads} تحميل
                </span>
                <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <FileText size={16} />
                  <span className="text-sm font-medium">تحميل</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-10 text-center border border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            لا توجد تمارين تطابق معايير البحث
          </p>
        </div>
      )}
    </div>
  );
}
