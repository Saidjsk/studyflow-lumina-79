
import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PoliticalFiguresSection from './history/PoliticalFiguresSection';
import HistoricalEventsSection from './history/HistoricalEventsSection';

const HistoryLesson = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader className="bg-orange-50 dark:bg-orange-900/20 border-b border-orange-100 dark:border-orange-800">
          <div className="flex items-center">
            <div className="bg-orange-500 p-2 rounded-full mr-3">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-orange-800 dark:text-orange-300">الشخصيات والأحداث الأكثر تداولاً في البكالوريا</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none leading-relaxed">
            {/* Table of Contents */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-3">فهرس المحتويات:</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>1. شخصيات سياسية
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>1-1. جمال عبد الناصر</li>
                    <li>1-2. هواري بومدين</li>
                    <li>1-3. شارل ديغول</li>
                    <li>1-4. محمد الخامس</li>
                    <li>1-5. وودرو ويلسون</li>
                  </ul>
                </li>
                <li className="mt-2">2. أحداث تاريخية
                  <ul className="list-inside pr-5 space-y-1 mt-1">
                    <li>2-1. الثورة الجزائرية</li>
                    <li>2-2. حرب السويس 1956</li>
                    <li>2-3. أزمة الصواريخ الكوبية</li>
                    <li>2-4. حرب أكتوبر 1973</li>
                    <li>2-5. الحرب العالمية الأولى</li>
                    <li>2-6. الحرب العالمية الثانية</li>
                    <li>2-7. خطة مارشال</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Lesson Content */}
            <PoliticalFiguresSection />
            <HistoricalEventsSection />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryLesson;
