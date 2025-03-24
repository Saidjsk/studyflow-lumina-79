
import { useState } from 'react';
import { 
  BookOpen, Search, Filter, FileText, BarChart2, Calculator, 
  PieChart, Download, Layers, BookCheck, ChevronDown, CheckCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Card, CardContent, CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const exercisesData = [
  {
    id: 1,
    title: 'تمارين في المحاسبة العامة',
    category: 'accounting',
    difficulty: 'medium',
    pages: 12,
    downloads: 458,
    description: 'سلسلة تمارين تغطي أساسيات المحاسبة العامة مع حلول مفصلة',
    date: '2023-12-10'
  },
  {
    id: 2,
    title: 'سلسلة تمارين في التسيير المالي',
    category: 'management',
    difficulty: 'hard',
    pages: 24,
    downloads: 687,
    description: 'مجموعة متقدمة من التمارين في التسيير المالي للشركات',
    date: '2023-11-15'
  },
  {
    id: 3,
    title: 'تمارين أساسية في القانون التجاري',
    category: 'law',
    difficulty: 'easy',
    pages: 8,
    downloads: 325,
    description: 'أساسيات القانون التجاري مع تطبيقات عملية',
    date: '2024-01-05'
  },
  {
    id: 4,
    title: 'سلسلة تمارين في الاقتصاد الكلي',
    category: 'economics',
    difficulty: 'medium',
    pages: 16,
    downloads: 512,
    description: 'تحليل النماذج الاقتصادية الكلية مع تطبيقات',
    date: '2023-10-22'
  },
  {
    id: 5,
    title: 'تمارين متقدمة في المحاسبة التحليلية',
    category: 'accounting',
    difficulty: 'hard',
    pages: 18,
    downloads: 276,
    description: 'مفاهيم متقدمة في المحاسبة التحليلية وحساب التكاليف',
    date: '2024-02-18'
  },
  {
    id: 6,
    title: 'تمارين تطبيقية في الضرائب والرسوم',
    category: 'law',
    difficulty: 'medium',
    pages: 10,
    downloads: 342,
    description: 'تطبيقات عملية على النظام الضريبي والرسوم المختلفة',
    date: '2023-09-30'
  },
  {
    id: 7,
    title: 'سلسلة تمارين أساسيات التسويق',
    category: 'management',
    difficulty: 'easy',
    pages: 14,
    downloads: 389,
    description: 'مبادئ التسويق وتطبيقاتها في عالم الأعمال',
    date: '2024-01-25'
  },
  {
    id: 8,
    title: 'تمارين في تحليل السوق والمنافسة',
    category: 'economics',
    difficulty: 'hard',
    pages: 22,
    downloads: 298,
    description: 'دراسة تحليلية للأسواق وآليات المنافسة',
    date: '2023-12-05'
  },
  {
    id: 9,
    title: 'أساسيات الرياضيات المالية',
    category: 'mathematics',
    difficulty: 'medium',
    pages: 16,
    downloads: 425,
    description: 'تطبيقات الرياضيات في المجال المالي والاستثماري',
    date: '2024-02-10'
  },
  {
    id: 10,
    title: 'تمارين في الإحصاء التطبيقي',
    category: 'mathematics',
    difficulty: 'hard',
    pages: 20,
    downloads: 310,
    description: 'تقنيات متقدمة في الإحصاء مع تطبيقات اقتصادية',
    date: '2023-11-28'
  },
  {
    id: 11,
    title: 'سلسلة تمارين في الجبر الخطي',
    category: 'mathematics',
    difficulty: 'easy',
    pages: 14,
    downloads: 267,
    description: 'أساسيات الجبر الخطي والمصفوفات مع تمارين محلولة',
    date: '2024-01-15'
  }
];

const categories = [
  { id: 'all', name: 'الكل', icon: BookOpen },
  { id: 'accounting', name: 'المحاسبة', icon: Calculator },
  { id: 'mathematics', name: 'الرياضيات', icon: PieChart },
  { id: 'economics', name: 'الإقتصاد', icon: BarChart2 },
  { id: 'management', name: 'التسيير', icon: Layers },
  { id: 'law', name: 'القانون', icon: BookCheck }
];

const difficulties = [
  { id: 'all', name: 'كل المستويات' },
  { id: 'easy', name: 'سهل', color: 'bg-green-500' },
  { id: 'medium', name: 'متوسط', color: 'bg-yellow-500' },
  { id: 'hard', name: 'صعب', color: 'bg-red-500' }
];

const sortOptions = [
  { id: 'newest', name: 'الأحدث' },
  { id: 'popular', name: 'الأكثر تحميلاً' },
  { id: 'pages', name: 'عدد الصفحات' }
];

export default function Exercises() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  // تطبيق الفلاتر والبحث
  const filteredExercises = exercisesData.filter(exercise => {
    const matchesSearch = exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || exercise.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });
  
  // ترتيب التمارين
  const sortedExercises = [...filteredExercises].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'popular') {
      return b.downloads - a.downloads;
    } else if (sortBy === 'pages') {
      return b.pages - a.pages;
    }
    return 0;
  });
  
  // التقسيم إلى صفحات
  const paginatedExercises = sortedExercises.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const totalPages = Math.ceil(sortedExercises.length / itemsPerPage);
  
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
  
  const getCategoryIcon = (category: string) => {
    const foundCategory = categories.find(cat => cat.id === category);
    const Icon = foundCategory ? foundCategory.icon : BookOpen;
    return <Icon size={24} className="text-blue-700 dark:text-blue-400" />;
  };
  
  const getCategoryText = (category: string) => {
    const foundCategory = categories.find(cat => cat.id === category);
    return foundCategory ? foundCategory.name : '';
  };
  
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 mb-4">
          مكتبة الموارد التعليمية
        </div>
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-4">
          التمارين والسلاسل التطبيقية
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          تصفح مجموعة متنوعة من التمارين والسلاسل لمساعدتك في تطوير مهاراتك واستعدادك للاختبارات
        </p>
      </div>
      
      {/* قسم الفلترة */}
      <Card className="mb-8 border-0 shadow-md dark:shadow-indigo-500/10">
        <CardContent className="p-6">
          {/* شريط البحث */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="ابحث عن التمارين والسلاسل..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full p-4 ps-10 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 outline-none transition-all"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* فلترة المواد */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <Filter size={16} />
                <span>تصفية حسب المادة</span>
              </label>
              <ToggleGroup 
                type="single" 
                className="justify-start flex-wrap mt-2"
                value={selectedCategory}
                onValueChange={(value) => value && setSelectedCategory(value)}
              >
                {categories.map(category => (
                  <ToggleGroupItem 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 rounded-lg border-0"
                  >
                    <category.icon size={16} />
                    <span>{category.name}</span>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
            
            {/* فلترة المستوى */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <Filter size={16} />
                <span>المستوى</span>
              </label>
              <Select 
                value={selectedDifficulty} 
                onValueChange={setSelectedDifficulty}
              >
                <SelectTrigger className="mt-2 w-full">
                  <SelectValue placeholder="اختر المستوى" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map(difficulty => (
                    <SelectItem key={difficulty.id} value={difficulty.id}>
                      <div className="flex items-center gap-2">
                        {difficulty.id !== 'all' && (
                          <span className={`h-2 w-2 rounded-full ${difficulty.color}`}></span>
                        )}
                        {difficulty.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* الترتيب */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <ChevronDown size={16} />
                <span>ترتيب حسب</span>
              </label>
              <Select 
                value={sortBy} 
                onValueChange={setSortBy}
              >
                <SelectTrigger className="mt-2 w-full">
                  <SelectValue placeholder="اختر طريقة الترتيب" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* إحصائيات النتائج */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          عرض {paginatedExercises.length} من أصل {filteredExercises.length} تمرين
        </p>
        
        {selectedCategory !== 'all' && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedCategory('all')}
            className="text-xs"
          >
            إعادة ضبط الفلتر
          </Button>
        )}
      </div>
      
      {/* عرض التمارين */}
      {paginatedExercises.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {paginatedExercises.map((exercise, index) => (
            <Card
              key={exercise.id}
              className={cn(
                "border border-gray-200 dark:border-gray-800",
                "hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50",
                "transition-all duration-300 ease-in-out group",
                "animate-scale-in overflow-hidden"
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="p-6 pb-3">
                <div className="flex justify-between items-start mb-3">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    {getCategoryIcon(exercise.category)}
                  </div>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    getDifficultyColor(exercise.difficulty)
                  )}>
                    {getDifficultyText(exercise.difficulty)}
                  </span>
                </div>
                
                <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {exercise.title}
                </CardTitle>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                  {exercise.description}
                </p>
              </CardHeader>
              
              <CardContent className="px-6 py-2">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md flex items-center gap-1">
                    {getCategoryText(exercise.category)}
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText size={14} />
                    {exercise.pages} صفحة
                  </span>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 bg-gray-50 dark:bg-gray-900/30 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                  <Download size={14} /> 
                  {exercise.downloads}
                </span>
                <Button size="sm" className="gap-1 rounded-xl">
                  <FileText size={16} />
                  <span>تحميل</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-10 text-center border">
          <div className="flex flex-col items-center justify-center gap-3">
            <Search className="h-10 w-10 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              لا توجد تمارين تطابق معايير البحث
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              حاول تغيير معايير البحث أو إعادة ضبط الفلتر
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              className="mt-2"
            >
              إعادة ضبط البحث
            </Button>
          </div>
        </Card>
      )}
      
      {/* ترقيم الصفحات */}
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink 
                  isActive={currentPage === i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
