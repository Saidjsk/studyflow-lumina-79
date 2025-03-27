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
const subjectsConfig: Record<SubjectStreams, Subject[]> = {
  management: [
    { id: 'accounting', name: 'التسيير المحاسبي و المالي', coefficient: 6 },
    { id: 'economics', name: 'الاقتصاد', coefficient: 5 },
    { id: 'math', name: 'الرياضيات', coefficient: 5 },
    { id: 'history', name: 'التاريخ و الجغرافيا', coefficient: 4 },
    { id: 'arabic', name: 'اللغة العربية', coefficient: 3 },
    { id: 'law', name: 'القانون', coefficient: 2 },
    { id: 'islamic', name: 'العلوم الإسلامية', coefficient: 2 },
    { id: 'french', name: 'اللغة الفرنسية', coefficient: 2 },
    { id: 'english', name: 'اللغة الإنجليزية', coefficient: 2 },
    { id: 'philosophy', name: 'الفلسفة', coefficient: 2 },
    { id: 'amazigh', name: 'اللغة الأمازيغية', coefficient: 1 },
  ],
  economy: [],
  accountingFinance: [],
};

export default function Calculator() {
  const [selectedStream, setSelectedStream] = useState<SubjectStreams>('management');
  const [subjects, setSubjects] = useState<Subject[]>(subjectsConfig.management);
  const [grades, setGrades] = useState<Record<string, string>>({});
  const [average, setAverage] = useState<number | null>(null);
  const [mention, setMention] = useState<string>('');
  const [totalCoefficients, setTotalCoefficients] = useState<number>(0);

  // Initialize grades and total coefficients when stream changes
  useEffect(() => {
    const selectedSubjects = subjectsConfig[selectedStream];
    setSubjects(selectedSubjects);
    
    const initialGrades = selectedSubjects.reduce((acc, subject) => ({ ...acc, [subject.id]: '' }), {});
    setGrades(initialGrades);
    setAverage(null);
    setMention('');
    
    const total = selectedSubjects.reduce((sum, subject) => sum + subject.coefficient, 0);
    setTotalCoefficients(total);
  }, [selectedStream]);

  const handleStreamChange = (stream: SubjectStreams) => {
    setSelectedStream(stream);
  };

  const handleGradeChange = (subjectId: string, value: string) => {
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
      [subjectId]: newValue,
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
        <h1 className="text-2xl font-bold">حساب المعدل التقديري للبكالوريا</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex gap-2 mb-6 justify-center">
          <button
            onClick={() => handleStreamChange('management')}
            className={`px-3 py-2 rounded-md font-medium transition ${
              selectedStream === 'management' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            شعبة تسيير واقتصاد
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3">المادة</th>
              <th className="py-2 px-3 text-center">المعامل</th>
              <th className="py-2 px-3 text-center">العلامة / 20</th>
              <th className="py-2 px-3 text-center">النقاط</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => {
              const grade = parseFloat(grades[subject.id]) || 0;
              const points = grade * subject.coefficient;

              return (
                <tr key={subject.id} className="border-b">
                  <td className="py-3 px-3">{subject.name}</td>
                  <td className="py-3 px-3 text-center">{subject.coefficient}</td>
                  <td className="py-3 px-3 text-center">
                    <input
                      type="number"
                      min="0"
                      max="20"
                      step="0.25"
                      value={grades[subject.id]}
                      onChange={(e) => handleGradeChange(subject.id, e.target.value)}
                      className="w-20 px-2 py-1 text-center border rounded"
                    />
                  </td>
                  <td className="py-3 px-3 text-center">{grades[subject.id] ? points.toFixed(2) : '-'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex justify-center gap-4 my-6">
          <button onClick={calculateAverage} className="px-4 py-2 bg-blue-600 text-white rounded">
            حساب المعدل
          </button>
          <button onClick={resetForm} className="px-4 py-2 bg-gray-300 rounded">
            إعادة ضبط
          </button>
        </div>

        {average !== null && (
          <div className="text-center">
            <h3 className="text-lg font-medium">المعدل التقديري:</h3>
            <div className="text-3xl font-bold">{average.toFixed(2)}</div>
            <div className="mt-2 px-4 py-1 rounded-full bg-gray-200">{mention}</div>
          </div>
        )}
      </div>
    </div>
  );
}
