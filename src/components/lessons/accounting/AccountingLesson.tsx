
import React from 'react';
import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PdfViewer from '@/components/pdf/PdfViewer';

const AccountingLesson = () => {
  // هذا الرابط هو للعرض التوضيحي - يجب استبداله برابط مباشر للملف
  const pdfUrl = "https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?export=download&id=1Al7Pwfqpo6Iv1ztt-xZJSoejtjpsgRlJ";
  
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
              يمكنك الاطلاع على الملف المرفق للحصول على معلومات مفصلة.
            </p>
            
            <PdfViewer 
              pdfUrl={pdfUrl} 
              title="ملف المحاسبة - الوحدة الأولى" 
            />

            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2">ملاحظات هامة:</h3>
              <ul className="list-disc pr-5 space-y-1">
                <li>يمكنك تحميل الملف باستخدام زر التحميل في شريط أدوات عرض PDF</li>
                <li>استخدم أزرار التكبير والتصغير للتحكم في حجم العرض</li>
                <li>يمكنك تدوير الصفحة إذا كنت بحاجة إلى ذلك</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountingLesson;
