
import React from 'react';
import { BookOpen, FileText, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AccountingLesson = () => {
  // رابط مباشر للتنزيل
  const pdfUrl = "https://drive.google.com/uc?export=download&id=1Al7Pwfqpo6Iv1ztt-xZJSoejtjpsgRlJ";
  
  // روابط ملفات البكالوريا السابقة
  const bacExams = [
    { year: "2023", url: "https://drive.google.com/uc?export=download&id=1Al7Pwfqpo6Iv1ztt-xZJSoejtjpsgRlJ" },
    { year: "2022", url: "https://drive.google.com/uc?export=download&id=1Al7Pwfqpo6Iv1ztt-xZJSoejtjpsgRlJ" },
    { year: "2021", url: "https://drive.google.com/uc?export=download&id=1Al7Pwfqpo6Iv1ztt-xZJSoejtjpsgRlJ" },
    { year: "2020", url: "https://drive.google.com/uc?export=download&id=1Al7Pwfqpo6Iv1ztt-xZJSoejtjpsgRlJ" },
  ];
  
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader className="bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-800">
          <div className="flex items-center">
            <div className="bg-green-500 p-2 rounded-full mr-3">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-green-800 dark:text-green-300">الوحدة الأولى: المحاسبة</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none leading-relaxed">
            <p className="mb-4">
              في هذه الوحدة، سنتعلم أساسيات المحاسبة والمفاهيم المحاسبية الرئيسية. 
              يمكنك الاطلاع على الملفات المرفقة للحصول على معلومات مفصلة وكذلك نماذج امتحانات البكالوريا السابقة.
            </p>
            
            {/* ملف المحاسبة الرئيسي */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="flex items-center text-lg font-bold mb-2">
                <FileText className="mr-2 h-5 w-5 text-green-600" />
                ملف المحاسبة - الوحدة الأولى
              </h3>
              <p className="mb-2">ملف PDF يحتوي على شرح مفصل لمفاهيم المحاسبة الأساسية</p>
              <Button 
                variant="outline" 
                className="flex items-center text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700"
                onClick={() => window.open(pdfUrl, '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                تحميل الملف
              </Button>
            </div>
            
            {/* ملفات البكالوريا السابقة */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">ملفات البكالوريا السابقة</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {bacExams.map((exam, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                    <h4 className="flex items-center font-medium mb-2">
                      <FileText className="mr-2 h-4 w-4 text-green-600" />
                      بكالوريا {exam.year} - المحاسبة
                    </h4>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700"
                      onClick={() => window.open(exam.url, '_blank')}
                    >
                      <Download className="mr-2 h-3 w-3" />
                      تحميل الملف
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2">ملاحظات هامة:</h3>
              <ul className="list-disc pr-5 space-y-1">
                <li>يمكنك تحميل الملفات مباشرة بالضغط على زر التحميل</li>
                <li>جميع الملفات بصيغة PDF ويمكن فتحها بأي قارئ PDF</li>
                <li>احتفظ بالملفات على جهازك للرجوع إليها بدون الحاجة للإنترنت</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountingLesson;
