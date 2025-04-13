
import { Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LeadershipSection from './economics/LeadershipSection';

const LeadershipLesson = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800">
          <div className="flex items-center">
            <div className="bg-blue-500 p-2 rounded-full mr-3">
              <Users className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-blue-800 dark:text-blue-300">الوحدة الثامنة: القيادة</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none leading-relaxed">
            {/* Table of Contents */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-3">فهرس المحتويات:</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>1. تعريف القيادة</li>
                <li>2. أساليب القيادة</li>
                <li>3. العوامل المؤثرة في اختيار أسلوب القيادة</li>
                <li>4. الدافعية (التحفيز)
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>4-1. تعريف الدافعية</li>
                    <li>4-2. العوامل المؤثرة في الدافعية</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Lesson Content */}
            <LeadershipSection />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadershipLesson;
