
import React from 'react';
import { BookOpen, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PdfViewer from '@/components/pdf/PdfViewer';

const AccountingLesson = () => {
  const pdfUrl = "https://drive.google.com/file/d/1Al7Pwfqpo6Iv1ztt-xZJSoejtjpsgRlJ/view?usp=drive_open";
  
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
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="flex items-center text-lg font-bold mb-2">
                <FileText className="mr-2 h-5 w-5 text-green-600" />
                ملف المحاسبة - الوحدة الأولى
              </h3>
            </div>
            
            <PdfViewer 
              pdfUrl={pdfUrl} 
              title="المحاسبة - الوحدة الأولى" 
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountingLesson;
