
import { UserMinus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PdfViewer from '@/components/pdf/PdfViewer';

const UnemploymentLesson = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6 bg-gray-900 border-gray-800">
        <CardHeader className="bg-blue-900/20 border-b border-blue-800">
          <div className="flex items-center">
            <div className="bg-blue-500 p-2 rounded-full mr-3">
              <UserMinus className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-blue-300">الوحدة السادسة: البطالة</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <PdfViewer 
            pdfUrl="https://drive.google.com/file/d/18n6Mfqwqrn7KAmpS8RUUGpgUOBhRSqfb/view"
            title="البطالة"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default UnemploymentLesson;
