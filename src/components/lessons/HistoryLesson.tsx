
import { useState } from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import PoliticalFiguresSection from './history/PoliticalFiguresSection';
import HistoricalEventsSection from './history/HistoricalEventsSection';

const HistoryLesson = () => {
  const [activeTab, setActiveTab] = useState("figures");

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
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Tabs 
                  value={activeTab} 
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="w-full mb-4 bg-gray-100 dark:bg-gray-700/70">
                    <TabsTrigger value="figures" className="flex-1">الشخصيات السياسية</TabsTrigger>
                    <TabsTrigger value="events" className="flex-1">الأحداث التاريخية</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="figures" className="mt-0">
                    <ul className="list-disc list-inside space-y-1 pr-4">
                      <li>وودرو ويلسون (1856-1924)</li>
                      <li>جمال عبد الناصر (1918-1970)</li>
                      <li>شارل ديغول (1890-1970)</li>
                      <li>هواري بومدين (1932-1978)</li>
                      <li>محمد الخامس (1909-1961)</li>
                      <li>أحمد بن بلة (1916-2012)</li>
                      <li>الحبيب بورقيبة (1903-2000)</li>
                      <li>فرحات عباس (1899-1985)</li>
                      <li>جوزيف ستالين (1878-1953)</li>
                      <li>هاري ترومان (1884-1972)</li>
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="events" className="mt-0">
                    <ul className="list-disc list-inside space-y-1 pr-4">
                      <li>الثورة الجزائرية (1954-1962)</li>
                      <li>حرب السويس 1956</li>
                      <li>أزمة الصواريخ الكوبية 1962</li>
                      <li>حرب أكتوبر 1973</li>
                      <li>الحرب العالمية الأولى (1914-1918)</li>
                      <li>الحرب العالمية الثانية (1939-1945)</li>
                      <li>خطة مارشال (1947-1952)</li>
                      <li>حركة عدم الانحياز</li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm">
                    <span>انتقل إلى قسم</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <DropdownMenuItem onClick={() => document.getElementById('politicalFigures')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer">
                      الشخصيات السياسية
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => document.getElementById('historicalEvents')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer">
                      الأحداث التاريخية
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Lesson Content */}
            <div id="politicalFigures">
              <PoliticalFiguresSection />
            </div>
            
            <div id="historicalEvents">
              <HistoricalEventsSection />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryLesson;
