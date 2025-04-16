
import React, { useState } from 'react';
import { BookOpen, FileText, Download, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PdfViewer from '@/components/pdf/PdfViewer';

// These will be our local PDF files - we'll need to add them to the project
const historyLessons = [
  { 
    id: 'colonization', 
    title: 'الاستعمار في إفريقيا', 
    description: 'درس حول الاستعمار الأوروبي في إفريقيا وآثاره', 
    pdfPath: '/pdfs/history/colonization.pdf' 
  },
  { 
    id: 'world-wars', 
    title: 'الحروب العالمية', 
    description: 'محطات بارزة من الحرب العالمية الأولى والثانية', 
    pdfPath: '/pdfs/history/world-wars.pdf' 
  },
  { 
    id: 'algeria-revolution', 
    title: 'الثورة الجزائرية', 
    description: 'مراحل الثورة الجزائرية وأهم الأحداث والشخصيات', 
    pdfPath: '/pdfs/history/algeria-revolution.pdf' 
  },
  { 
    id: 'cold-war', 
    title: 'الحرب الباردة', 
    description: 'الصراع بين المعسكرين الشرقي والغربي', 
    pdfPath: '/pdfs/history/cold-war.pdf' 
  }
];

const geographyLessons = [
  { 
    id: 'natural-resources', 
    title: 'الموارد الطبيعية', 
    description: 'توزيع الموارد الطبيعية في العالم وأهميتها الاقتصادية', 
    pdfPath: '/pdfs/geography/natural-resources.pdf' 
  },
  { 
    id: 'population', 
    title: 'السكان والديموغرافيا', 
    description: 'توزيع السكان في العالم والتركيبة الديموغرافية', 
    pdfPath: '/pdfs/geography/population.pdf' 
  },
  { 
    id: 'sustainable-development', 
    title: 'التنمية المستدامة', 
    description: 'مفهوم التنمية المستدامة وتحدياتها العالمية', 
    pdfPath: '/pdfs/geography/sustainable-development.pdf' 
  }
];

const HistoryGeographyLesson = () => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [activePdf, setActivePdf] = useState<string | null>(null);

  const handleLessonClick = (id: string, pdfPath: string) => {
    setSelectedLesson(id);
    setActivePdf(pdfPath);
  };

  const downloadPdf = (pdfPath: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader className="bg-orange-50 dark:bg-orange-900/20 border-b border-orange-100 dark:border-orange-800">
          <div className="flex items-center">
            <div className="bg-orange-500 p-2 rounded-full ml-3"> {/* RTL-friendly margin */}
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-orange-800 dark:text-orange-300">دروس التاريخ والجغرافيا</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none leading-relaxed">
            <p className="mb-6">
              مجموعة شاملة من دروس التاريخ والجغرافيا لطلاب البكالوريا شعبة التسيير والاقتصاد. اضغط على أي درس لعرض محتواه.
            </p>
            
            {/* قسم التاريخ */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-1.5 rounded-full ml-2">
                  <BookOpen className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                دروس التاريخ
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {historyLessons.map((lesson) => (
                  <AccordionItem key={lesson.id} value={lesson.id}>
                    <AccordionTrigger className="py-3 px-4 bg-gray-50 dark:bg-gray-800/40 rounded-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-800/60">
                      <div className="flex items-center text-right w-full"> {/* RTL text alignment */}
                        <FileText className="h-5 w-5 text-orange-500 ml-2" />
                        <div>
                          <h3 className="font-medium text-base">{lesson.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{lesson.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="py-2 space-y-4">
                        <div className="flex justify-between items-center mb-2">
                          <Button 
                            variant="outline" 
                            className="flex items-center text-orange-600 border-orange-200 hover:bg-orange-50 hover:text-orange-700"
                            onClick={() => downloadPdf(lesson.pdfPath, lesson.title)}
                          >
                            <Download className="ml-2 h-4 w-4" /> {/* RTL icon placement */}
                            تحميل الملف
                          </Button>
                          <Button 
                            variant="default" 
                            className="bg-orange-500 hover:bg-orange-600"
                            onClick={() => handleLessonClick(lesson.id, lesson.pdfPath)}
                          >
                            عرض الدرس
                          </Button>
                        </div>
                        
                        {selectedLesson === lesson.id && activePdf && (
                          <div className="mt-4">
                            <PdfViewer 
                              pdfUrl={activePdf}
                              title={lesson.title}
                            />
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            {/* قسم الجغرافيا */}
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-full ml-2">
                  <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                دروس الجغرافيا
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {geographyLessons.map((lesson) => (
                  <AccordionItem key={lesson.id} value={lesson.id}>
                    <AccordionTrigger className="py-3 px-4 bg-gray-50 dark:bg-gray-800/40 rounded-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-800/60">
                      <div className="flex items-center text-right w-full"> {/* RTL text alignment */}
                        <FileText className="h-5 w-5 text-blue-500 ml-2" />
                        <div>
                          <h3 className="font-medium text-base">{lesson.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{lesson.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="py-2 space-y-4">
                        <div className="flex justify-between items-center mb-2">
                          <Button 
                            variant="outline" 
                            className="flex items-center text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                            onClick={() => downloadPdf(lesson.pdfPath, lesson.title)}
                          >
                            <Download className="ml-2 h-4 w-4" /> {/* RTL icon placement */}
                            تحميل الملف
                          </Button>
                          <Button 
                            variant="default" 
                            className="bg-blue-500 hover:bg-blue-600"
                            onClick={() => handleLessonClick(lesson.id, lesson.pdfPath)}
                          >
                            عرض الدرس
                          </Button>
                        </div>
                        
                        {selectedLesson === lesson.id && activePdf && (
                          <div className="mt-4">
                            <PdfViewer 
                              pdfUrl={activePdf}
                              title={lesson.title}
                            />
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryGeographyLesson;
