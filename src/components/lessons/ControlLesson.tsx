
import { ClipboardCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PdfViewer from '@/components/pdf/PdfViewer';

const ControlLesson = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6 bg-gray-900 border-gray-800">
        <CardHeader className="bg-blue-900/20 border-b border-blue-800">
          <div className="flex items-center">
            <div className="bg-blue-500 p-2 rounded-full mr-3">
              <ClipboardCheck className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-blue-300">الوحدة العاشرة: الرقابة</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <PdfViewer 
            pdfUrl="https://drive.google.com/file/d/18VTsa10_nD9TdndZDtMBmOabcvDGsBrY/view"
            title="الرقابة"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ControlLesson;
