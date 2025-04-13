
import { ClipboardCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ControlSection from './economics/ControlSection';

const ControlLesson = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800">
          <div className="flex items-center">
            <div className="bg-blue-500 p-2 rounded-full mr-3">
              <ClipboardCheck className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-blue-800 dark:text-blue-300">الوحدة العاشرة: الرقابة</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none leading-relaxed">
            {/* Table of Contents */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-3">فهرس المحتويات:</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>1. مراحل الرقابة
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>1-1. مرحلة تحديد المعايير الرقابية</li>
                    <li>1-2. مرحلة قياس الأداء (المردودية)</li>
                    <li>1-3. مرحلة المقارنة بين الأداء الفعلي والمخطط</li>
                    <li>1-4. مرحلة تحليل أسباب الانحرافات واتخاذ القرارات اللازمة</li>
                  </ul>
                </li>
                <li className="mt-2">2. خصائص عملية الرقابة الفعالة</li>
                <li className="mt-2">3. أنواع الرقابة
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>3-1. الرقابة المسبقة</li>
                    <li>3-2. الرقابة أثناء التنفيذ (المتابعة)</li>
                    <li>3-3. الرقابة اللاحقة</li>
                  </ul>
                </li>
                <li className="mt-2">4. أساليب الرقابة
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>4-1. الرقابة التقليدية</li>
                    <li>4-2. الرقابة المتخصصة</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Lesson Content */}
            <ControlSection />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ControlLesson;
