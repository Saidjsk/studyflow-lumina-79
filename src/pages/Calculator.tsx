
import { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon, Info } from 'lucide-react';

// Define the subject types
type SubjectStreams = 'management' | 'economy' | 'accountingFinance';

interface Subject {
  id: string;
  name: string;
  coefficient: number;
}

// Define subjects for each stream
const subjectsConfig = {
  management: [
    { id: 'mgmt', name: 'التسيير و المناجمنت', coefficient: 6 },
    { id: 'accounting', name: 'المحاسبة', coefficient: 5 },
    { id: 'economics', name: 'الاقتصاد', coefficient: 4 },
    { id: 'law', name: 'القانون', coefficient: 2 },
    { id: 'math', name: 'الرياضيات', coefficient: 3 },
    { id: 'arabic', name: 'اللغة العربية', coefficient: 3 },
    { id: 'islamic', name: 'العلوم الإسلامية', coefficient: 2 },
    { id: 'history', name: 'التاريخ و الجغرافيا', coefficient: 2 },
    { id: 'french', name: 'اللغة الفرنسية', coefficient: 2 },
    { id: 'english', name: 'اللغة الإنجليزية', coefficient: 2 },
    { id: 'philosophy', name: 'الفلسفة', coefficient: 2 },
  ]
};

export default function Calculator() {
  const [grades, setGrades] = useState<Record<string, string>>({});
  const [average, setAverage] = useState<number | null>(null);
  const [mention, setMention] = useState<string>('');
  const [totalCoefficients, setTotalCoefficients] = useState<number>(0);
  const [selectedStream, setSelectedStream] = useState<SubjectStreams>('management');
  const subjects = subjectsConfig.management;

  // Initialize grades when component mounts
  useEffect(() => {
    const initialGrades = subjects.reduce((acc, subject) => ({ ...acc, [subject.id]: '' }), {});
    setGrades(initialGrades);
    setAverage(null);
    setMention('');
    
    // Calculate total coefficients
    const total = subjects.reduce((sum, subject) => sum + subject.coefficient, 0);
    setTotalCoefficients(total);
  }, []);

  const handleStreamChange = (stream: SubjectStreams) => {
    setSelectedStream(stream);
    // Reset grades when changing stream
    const initialGrades = subjectsConfig[stream].reduce(
      (acc, subject) => ({ ...acc, [subject.id]: '' }), 
      {}
    );
    setGrades(initialGrades);
    setAverage(null);
    setMention('');
    
    // Calculate total coefficients for selected stream
    const total = subjectsConfig[stream].reduce(
      (sum, subject) => sum + subject.coefficient, 
      0
    );
    setTotalCoefficients(total);
  };

  const handleGradeChange = (subjectId: string, value: string) => {
    // Allow empty string or values between 0 and 20
    let newValue = '';
    if (value === '') {
      newValue = '';
    } else {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        newValue = Math.min(Math.max(numValue, 0), 20).toString();
      }
    }
    
    setGrades(prev => ({
      ...prev,
      [subjectId]: newValue
    }));
  };

  const calculateAverage = () => {
    let totalPoints = 0;
    let validCoefficients = 0;
    
    subjects.forEach(subject => {
      const grade = parseFloat(grades[subject.id]);
      if (!isNaN(grade)) {
        totalPoints += grade * subject.coefficient;
        validCoefficients += subject.coefficient;
      }
    });
    
    if (validCoefficients === 0) {
      setAverage(null);
      setMention('');
      return;
    }
    
    const calculatedAverage = totalPoints / validCoefficients;
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
      <div className="text-center mb-6">
        <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 mb-4">
          أداة حساب المعدل
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          حساب المعدل التقديري للبكالوريا
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          أدخل علاماتك في المواد المختلفة لحساب معدلك التقديري في البكالوريا
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 md:p-6 max-w-4xl mx-auto">
        {/* Stream selection */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          <button
            onClick={() => handleStreamChange('management')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedStream === 'management' 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            شعبة تسيير واقتصاد
          </button>
        </div>

        {/* Subject grades table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900 text-right">
                <th className="py-2 px-3 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">المادة</th>
                <th className="py-2 px-3 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 text-center">المعامل</th>
                <th className="py-2 px-3 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 text-center">العلامة / 20</th>
                <th className="py-2 px-3 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 text-center">النقاط</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject) => {
                const grade = parseFloat(grades[subject.id]) || 0;
                const points = grade * subject.coefficient;
                
                return (
                  <tr key={subject.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-3 text-sm font-medium">{subject.name}</td>
                    <td className="py-3 px-3 text-center text-sm">{subject.coefficient}</td>
                    <td className="py-3 px-3">
                      <input
                        type="number"
                        min="0"
                        max="20"
                        step="0.25"
                        value={grades[subject.id]}
                        onChange={(e) => handleGradeChange(subject.id, e.target.value)}
                        placeholder="0 - 20"
                        className="w-20 px-2 py-1 mx-auto block text-center bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                      />
                    </td>
                    <td className="py-3 px-3 text-center text-sm font-medium">
                      {grades[subject.id] ? points.toFixed(2) : '-'}
                    </td>
                  </tr>
                );
              })}
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="py-3 px-3 text-sm font-medium">المجموع</td>
                <td className="py-3 px-3 text-center text-sm font-medium">{totalCoefficients}</td>
                <td className="py-3 px-3"></td>
                <td className="py-3 px-3 text-center text-sm font-medium">
                  {average !== null ? (average * totalCoefficients).toFixed(2) : '-'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center my-6">
          <button
            onClick={calculateAverage}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            <CalculatorIcon size={18} />
            <span>حساب المعدل</span>
          </button>
          
          <button
            onClick={resetForm}
            className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            <span>إعادة ضبط</span>
          </button>
        </div>
        
        {average !== null && (
          <div className="mt-6 text-center animate-scale-in">
            <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl inline-block max-w-sm mx-auto">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                المعدل التقديري:
              </h3>
              
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mb-2">
                  {average.toFixed(2)}
                </div>
                
                <div 
                  className={`mt-2 px-4 py-1 rounded-full text-sm font-medium ${
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
        
        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 border-t border-gray-200 dark:border-gray-700 pt-4">
          <Info size={14} />
          <span>يُحسب المعدل بناءً على العلامات والمعاملات المعتمدة في شهادة البكالوريا</span>
        </div>
      </div>
    </div>
  );
}
