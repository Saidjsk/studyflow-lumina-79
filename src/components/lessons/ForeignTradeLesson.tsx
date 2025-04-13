
import { Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ForeignTradeSection from './economics/ForeignTradeSection';

const ForeignTradeLesson = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800">
          <div className="flex items-center">
            <div className="bg-blue-500 p-2 rounded-full mr-3">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-blue-800 dark:text-blue-300">الوحدة الرابعة: التجارة الخارجية</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none leading-relaxed">
            {/* Table of Contents */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-3">فهرس المحتويات:</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>1. التجارة الخارجية
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>1-1. تعريف التجارة الخارجية</li>
                    <li>1-2. أسباب قيام التجارة الخارجية</li>
                    <li>1-3. أهمية التجارة الخارجية</li>
                    <li>1-4. سياسة التجارة الخارجية</li>
                  </ul>
                </li>
                <li className="mt-2">2. ميزان المدفوعات
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>2-1. تعريف ميزان المدفوعات</li>
                    <li>2-2. مكونات ميزان المدفوعات</li>
                    <li>2-3. توازن ميزان المدفوعات</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Lesson Content */}
            <ForeignTradeSection />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForeignTradeLesson;
