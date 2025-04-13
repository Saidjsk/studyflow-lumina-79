
import { DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FinanceSection from './economics/FinanceSection';

const FinanceLesson = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800">
          <div className="flex items-center">
            <div className="bg-blue-500 p-2 rounded-full mr-3">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-blue-800 dark:text-blue-300">الوحدة الحادية عشر: التمويل</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none leading-relaxed">
            {/* Table of Contents */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-3">فهرس المحتويات:</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>1. تعريف وظيفة التمويل</li>
                <li>2. المهام الأساسية لوظيفة التمويل
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>2-1. تحديد احتياجات المؤسسة لرؤوس الأموال</li>
                    <li>2-2. إعداد برنامج التمويل</li>
                    <li>2-3. تنظيم الخزينة</li>
                    <li>2-4. تسيير رؤوس الأموال المتاحة</li>
                  </ul>
                </li>
                <li className="mt-2">3. مصادر تمويل المؤسسة
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>3-1. التمويل الذاتي</li>
                    <li>3-2. التمويل الخارجي</li>
                  </ul>
                </li>
                <li className="mt-2">4. عمليات تمويل المؤسسة الاقتصادية
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>4-1. التمويل قصير المدى (الأجل)</li>
                    <li>4-2. التمويل المتوسط وطويل المدى (عمليات الاستثمار)</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Lesson Content */}
            <FinanceSection />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinanceLesson;
