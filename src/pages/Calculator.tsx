
import { useState } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';

const subjects = [
  { id: 'economics', name: 'الإقتصاد', coefficient: 5 },
  { id: 'management', name: 'التسيير', coefficient: 4 },
  { id: 'accounting', name: 'المحاسبة', coefficient: 5 },
  { id: 'law', name: 'القانون', coefficient: 2 },
  { id: 'mathematics', name: 'الرياضيات', coefficient: 3 },
  { id: 'arabic', name: 'اللغة العربية', coefficient: 3 },
  { id: 'french', name: 'اللغة الفرنسية', coefficient: 2 },
  { id: 'english', name: 'اللغة الإنجليزية', coefficient: 2 },
  { id: 'islamic', name: 'العلوم الإسلامية', coefficient: 2 },
  { id: 'history', name: 'التاريخ والجغرافيا', coefficient: 2 }
];

export default function Calculator() {
  const [grades, setGrades] = useState<Record<string, string>>(
    subjects.reduce((acc, subject) => ({ ...acc, [subject.id]: '' }), {})
  );
  const [average, setAverage] = useState<number | null>(null);
  const [mention, setMention] = useState<string>('');

  const handleGradeChange = (subjectId: string, value: string) => {
    const newValue = value === '' ? '' : Math.min(Math.max(parseFloat(value) || 0, 0), 20).toString();
    
    setGrades(prev => ({
      ...prev,
      [subjectId]: newValue
    }));
  };

  const calculateAverage = () => {
    let totalPoints = 0;
    let totalCoefficients = 0;
    
    subjects.forEach(subject => {
      const grade = parseFloat(grades[subject.id]);
      if (!isNaN(grade)) {
        totalPoints += grade * subject.coefficient;
        totalCoefficients += subject.coefficient;
      }
    });
    
    if (totalCoefficients === 0) {
      setAverage(null);
      setMention('');
      return;
    }
    
    const calculatedAverage = totalPoints / totalCoefficients;
    setAverage(calculatedAverage);
    
    // Set mention based on average
    if (calculatedAverage >= 16) {
      setMention('ممتاز');
    } else if (calculatedAverage >= 14) {
      setMention('جيد جدًا');
    } else if (calculatedAverage >= 12) {
      setMention('جيد');
    } else if (calculatedAverage >= 10) {
      setMention('مقبول');
    } else {
      setMention('راسب');
    }
  };

  const resetForm = () => {
    setGrades(subjects.reduce((acc, subject) => ({ ...acc, [subject.id]: '' }), {}));
    setAverage(null);
    setMention('');
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 mb-4">
          أداة حساب المعدل
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          حساب المعدل التقديري للبكالوريا
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          أدخل علاماتك في المواد المختلفة لحساب معدلك التقديري في البكالوريا
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {subjects.map(subject => (
            <div key={subject.id} className="flex flex-col">
              <label 
                htmlFor={subject.id} 
                className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300 flex justify-between items-center"
              >
                <span>{subject.name}</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                  المعامل: {subject.coefficient}
                </span>
              </label>
              
              <input
                type="number"
                id={subject.id}
                min="0"
                max="20"
                step="0.25"
                value={grades[subject.id]}
                onChange={(e) => handleGradeChange(subject.id, e.target.value)}
                placeholder="0 - 20"
                className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 outline-none transition-all"
              />
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button
            onClick={calculateAverage}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <CalculatorIcon size={18} />
            <span>حساب المعدل</span>
          </button>
          
          <button
            onClick={resetForm}
            className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <span>إعادة ضبط</span>
          </button>
        </div>
        
        {average !== null && (
          <div className="mt-8 text-center animate-scale-in">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl inline-block">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                المعدل التقديري:
              </h3>
              
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mb-2">
                  {average.toFixed(2)}
                </div>
                
                <div 
                  className={`mt-2 px-4 py-1 rounded-full font-medium ${
                    mention === 'ممتاز' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' :
                    mention === 'جيد جدًا' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' :
                    mention === 'جيد' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                    mention === 'مقبول' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' :
                    'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  }`}
                >
                  {mention}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
