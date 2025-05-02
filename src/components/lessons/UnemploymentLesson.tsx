
import { UserMinus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UnemploymentSection from './economics/UnemploymentSection';

const UnemploymentLesson = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader className="bg-blue-900/20 border-b border-blue-800">
          <div className="flex items-center">
            <div className="bg-blue-500 p-2 rounded-full mr-3">
              <UserMinus className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-blue-300">الوحدة السادسة: البطالة</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none leading-relaxed">
            {/* Table of Contents */}
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-3 text-white">فهرس المحتويات:</h3>
              <ul className="list-disc list-inside space-y-1 pr-4 text-gray-300">
                <li>1. تعريف البطالة</li>
                <li>2. أسباب البطالة</li>
                <li>3. أنواع البطالة</li>
                <li>4. آثار البطالة
                  <ul className="list-inside pr-5 space-y-1 mt-1 text-gray-400">
                    <li>4-1. آثار البطالة الاقتصادية</li>
                    <li>4-2. آثار البطالة الاجتماعية</li>
                    <li>4-3. آثار البطالة السياسية</li>
                  </ul>
                </li>
                <li className="mt-2">5. إجراءات التخفيف من البطالة</li>
              </ul>
            </div>

            {/* Lesson Content */}
            <UnemploymentSection />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnemploymentLesson;
