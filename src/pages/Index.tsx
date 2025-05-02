
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Calculator, FileText, HelpCircle, Lightbulb } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const subjects = [
    { 
      id: 'economics', 
      name: 'الاقتصاد', 
      icon: <Book className="h-6 w-6" />,
      path: '/subject/economics',
      color: 'bg-blue-500'
    },
    { 
      id: 'management', 
      name: 'التسيير', 
      icon: <FileText className="h-6 w-6" />,
      path: '/subject/management',
      color: 'bg-green-500'
    },
    { 
      id: 'accounting', 
      name: 'المحاسبة', 
      icon: <Calculator className="h-6 w-6" />,
      path: '/subject/accounting',
      color: 'bg-purple-500'
    },
    { 
      id: 'history', 
      name: 'التاريخ والجغرافيا', 
      icon: <Book className="h-6 w-6" />,
      path: '/subject/history',
      color: 'bg-orange-500'
    }
  ];

  const tools = [
    { 
      id: 'calculator', 
      name: 'الآلة الحاسبة', 
      icon: <Calculator className="h-6 w-6" />,
      path: '/calculator',
      color: 'bg-yellow-500'
    },
    { 
      id: 'quiz', 
      name: 'اختبار قصير', 
      icon: <HelpCircle className="h-6 w-6" />,
      path: '/quiz',
      color: 'bg-red-500'
    },
    { 
      id: 'tips', 
      name: 'نصائح للتفوق', 
      icon: <Lightbulb className="h-6 w-6" />,
      path: '/tips',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          بكالوريا شعبة التسيير والاقتصاد
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          دروس، تمارين، اختبارات، وأدوات مفيدة لطلاب البكالوريا في شعبة التسيير والاقتصاد
        </p>
      </section>

      {/* Subjects Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-center">المواد الدراسية</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {subjects.map((subject) => (
            <Link 
              to={subject.path} 
              key={subject.id} 
              className="hover-lift"
            >
              <Card className="h-full bg-gray-900 border border-gray-800 overflow-hidden">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className={`${subject.color} p-3 rounded-full mb-3`}>
                    {subject.icon}
                  </div>
                  <h3 className="font-medium text-white">{subject.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-center">أدوات مفيدة</h2>
        
        <div className="grid grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link 
              to={tool.path} 
              key={tool.id}
              className="hover-lift"
            >
              <Card className="h-full bg-gray-900 border border-gray-800 overflow-hidden">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className={`${tool.color} p-2 rounded-full mb-2`}>
                    {tool.icon}
                  </div>
                  <h3 className="font-medium text-white text-sm">{tool.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
