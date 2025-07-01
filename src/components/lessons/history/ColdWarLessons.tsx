
import React, { useState } from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import ColdWarChapter1 from './ColdWarChapter1';
import ColdWarChapter2 from './ColdWarChapter2';
import ColdWarChapter3 from './ColdWarChapter3';
import ColdWarChapter4 from './ColdWarChapter4';
import { useTheme } from '@/contexts/ThemeContext';

const ColdWarLessons = () => {
  const [activeTab, setActiveTab] = useState("chapter1");
  const { theme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader className={`border-b ${
          theme === 'dark' 
            ? 'bg-orange-900/20 border-orange-800' 
            : 'bg-orange-50 border-orange-100'
        }`}>
          <div className="flex items-center">
            <div className="bg-orange-500 p-2 rounded-full mr-3">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <CardTitle className={theme === 'dark' ? 'text-orange-300' : 'text-orange-800'}>
              دروس الحرب الباردة - المباحث الأساسية
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose dark:prose-invert max-w-none leading-relaxed">
            {/* Table of Contents */}
            <div className={`rounded-lg p-4 mb-6 ${
              theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
            }`}>
              <h3 className="text-lg font-bold mb-3">فهرس دروس الحرب الباردة:</h3>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Tabs 
                  value={activeTab} 
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className={`w-full mb-4 ${
                    theme === 'dark' ? 'bg-gray-700/70' : 'bg-gray-100'
                  }`}>
                    <TabsTrigger value="chapter1" className="flex-1 text-xs sm:text-sm">المبحث الأول</TabsTrigger>
                    <TabsTrigger value="chapter2" className="flex-1 text-xs sm:text-sm">المبحث الثاني</TabsTrigger>
                    <TabsTrigger value="chapter3" className="flex-1 text-xs sm:text-sm">المبحث الثالث</TabsTrigger>
                    <TabsTrigger value="chapter4" className="flex-1 text-xs sm:text-sm">المبحث الرابع</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="chapter1" className="mt-0">
                    <ul className="list-disc list-inside space-y-1 pr-4">
                      <li>بروز الصراع وتشكل العالم</li>
                      <li>نهاية الحرب العالمية الثانية وبداية الصراع</li>
                      <li>تشكيل المعسكرين الشرقي والغربي</li>
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="chapter2" className="mt-0">
                    <ul className="list-disc list-inside space-y-1 pr-4">
                      <li>قيادة العالم بقطبية ثنائية</li>
                      <li>الولايات المتحدة والاتحاد السوفيتي</li>
                      <li>سياسات القطبين العظيمين</li>
                    </ul>
                  </TabsContent>

                  <TabsContent value="chapter3" className="mt-0">
                    <ul className="list-disc list-inside space-y-1 pr-4">
                      <li>الأزمات الدولية في ظل الصراع</li>
                      <li>أزمة برلين وأزمة الصواريخ الكوبية</li>
                      <li>حرب فيتنام والصراعات الإقليمية</li>
                    </ul>
                  </TabsContent>

                  <TabsContent value="chapter4" className="mt-0">
                    <ul className="list-disc list-inside space-y-1 pr-4">
                      <li>مساعي الانفراج الدولي</li>
                      <li>سياسة التعايش السلمي</li>
                      <li>نهاية الحرب الباردة</li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger className={`flex items-center transition-colors text-sm ${
                    theme === 'dark' 
                      ? 'text-blue-400 hover:text-blue-300' 
                      : 'text-blue-600 hover:text-blue-800'
                  }`}>
                    <span>انتقل إلى مبحث</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className={`w-56 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-700' 
                      : 'bg-white border-gray-200'
                  }`}>
                    <DropdownMenuItem onClick={() => document.getElementById('chapter1')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer">
                      المبحث الأول: بروز الصراع
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => document.getElementById('chapter2')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer">
                      المبحث الثاني: القطبية الثنائية
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => document.getElementById('chapter3')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer">
                      المبحث الثالث: الأزمات الدولية
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => document.getElementById('chapter4')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer">
                      المبحث الرابع: الانفراج الدولي
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Lesson Content */}
            <div id="chapter1" className="mb-8">
              <ColdWarChapter1 />
            </div>
            
            <div id="chapter2" className="mb-8">
              <ColdWarChapter2 />
            </div>

            <div id="chapter3" className="mb-8">
              <ColdWarChapter3 />
            </div>

            <div id="chapter4" className="mb-8">
              <ColdWarChapter4 />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ColdWarLessons;
