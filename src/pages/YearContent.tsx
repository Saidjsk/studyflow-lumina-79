
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, FileText, Download, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const subjects = {
  'economics': { name: 'الإقتصاد', color: '#3B82F6' },
  'management': { name: 'التسيير', color: '#8B5CF6' },
  'accounting': { name: 'المحاسبة', color: '#10B981' },
  'law': { name: 'القانون', color: '#F59E0B' },
  'mathematics': { name: 'الرياضيات', color: '#EF4444' },
  'arabic': { name: 'اللغة العربية', color: '#6366F1' },
  'french': { name: 'اللغة الفرنسية', color: '#EC4899' },
  'english': { name: 'اللغة الإنجليزية', color: '#0EA5E9' },
  'islamic': { name: 'العلوم الإسلامية', color: '#14B8A6' },
  'history': { name: 'التاريخ والجغرافيا', color: '#F97316' }
};

export default function YearContent() {
  const { subjectId, year } = useParams<{ subjectId: string; year: string }>();
  const [activeTab, setActiveTab] = useState<'exams' | 'solutions'>('exams');
  
  if (!subjectId || !subjects[subjectId as keyof typeof subjects] || !year) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            المحتوى غير موجود
          </h2>
          <Link to="/" className="text-blue-600 dark:text-blue-400 mt-4 inline-block">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    );
  }
  
  const subject = {
    id: subjectId,
    ...subjects[subjectId as keyof typeof subjects]
  };
  
  const documents = [
    {
      id: 1,
      title: `باكالوريا ${year} - الموضوع الأصلي`,
      type: 'exams',
      fileSize: '2.4 MB',
      fileType: 'PDF'
    },
    {
      id: 2,
      title: `باكالوريا ${year} - الدورة الإستدراكية`,
      type: 'exams',
      fileSize: '2.1 MB',
      fileType: 'PDF'
    },
    {
      id: 3,
      title: `حل باكالوريا ${year} - الموضوع الأصلي`,
      type: 'solutions',
      fileSize: '3.2 MB',
      fileType: 'PDF'
    },
    {
      id: 4,
      title: `حل باكالوريا ${year} - الدورة الإستدراكية`,
      type: 'solutions',
      fileSize: '2.8 MB',
      fileType: 'PDF'
    }
  ];
  
  const filteredDocuments = documents.filter(doc => doc.type === activeTab);
  
  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center mb-8">
        <Link 
          to="/" 
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>الرئيسية</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <Link 
          to={`/subject/${subject.id}`} 
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>{subject.name}</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <span className="text-gray-900 dark:text-white font-medium">
          بكالوريا {year}
        </span>
      </div>
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {subject.name} - بكالوريا <span style={{ color: subject.color }}>{year}</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          مواضيع وحلول باكالوريا {year} لمادة {subject.name}
        </p>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-1">
        <button 
          onClick={() => setActiveTab('exams')}
          className={cn(
            "flex-1 py-2 px-4 rounded-md text-center transition-colors",
            activeTab === 'exams' 
              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" 
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          )}
        >
          المواضيع
        </button>
        <button 
          onClick={() => setActiveTab('solutions')}
          className={cn(
            "flex-1 py-2 px-4 rounded-md text-center transition-colors",
            activeTab === 'solutions' 
              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" 
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          )}
        >
          الحلول
        </button>
      </div>
      
      {/* Files */}
      <div className="grid gap-4">
        {filteredDocuments.length > 0 ? (
          filteredDocuments.map((doc) => (
            <div 
              key={doc.id}
              className="flex items-center justify-between bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover-lift hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  <FileText size={24} className="text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {doc.fileType} • {doc.fileSize}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button 
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Download"
                >
                  <Download size={20} />
                </button>
                <button 
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Open"
                >
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              لا توجد ملفات متوفرة حاليًا
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
