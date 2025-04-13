
import { Coins } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ExchangeSection from './economics/ExchangeSection';

const ExchangeLesson = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800">
          <div className="flex items-center">
            <div className="bg-blue-500 p-2 rounded-full mr-3">
              <Coins className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-blue-800 dark:text-blue-300">الوحدة الخامسة: الصرف</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none leading-relaxed">
            {/* Table of Contents */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-3">فهرس المحتويات:</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>1. تعريف الصرف</li>
                <li>2. أنواع الصرف
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>2-1. الصرف اليدوي والصرف المسحوب</li>
                    <li>2-2. الصرف العاجل والصرف الآجل</li>
                  </ul>
                </li>
                <li className="mt-2">3. أسباب الصرف</li>
                <li className="mt-2">4. سوق الصرف
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>4-1. تعريف سوق الصرف</li>
                    <li>4-2. أنواع سوق الصرف</li>
                  </ul>
                </li>
                <li className="mt-2">5. سعر (معدل) الصرف</li>
                <li className="mt-2">6. أنظمة الصرف
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>6-1. نظام الصرف الثابت</li>
                    <li>6-2. نظام الصرف المرن (المتغير)</li>
                  </ul>
                </li>
                <li className="mt-2">7. سياسة سعر الصرف
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>7-1. أهداف سياسة الصرف</li>
                    <li>7-2. وسائل سياسة الصرف</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Lesson Content */}
            <ExchangeSection />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExchangeLesson;
