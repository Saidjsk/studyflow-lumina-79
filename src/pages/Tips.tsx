import React from 'react';
import { Lightbulb, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdsSettings from '@/components/settings/AdsSettings';

const Tips = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <Lightbulb className="mr-2 h-6 w-6 text-amber-500" />
        نصائح وإعدادات
      </h1>

      <Tabs defaultValue="tips" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="tips">نصائح للدراسة</TabsTrigger>
          <TabsTrigger value="settings">الإعدادات</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tips">
          <div className="grid gap-4">
            <Card>
              <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
                <CardTitle className="text-blue-800 dark:text-blue-300">نصائح للنجاح في البكالوريا</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">1. نظم وقتك</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    ضع جدولاً دراسياً واضحاً مع تخصيص وقت كافٍ لكل مادة حسب أهميتها وصعوبتها.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">2. التركيز على الفهم</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    حاول فهم المفاهيم بدلاً من الحفظ. ربط المعلومات ببعضها يساعد على التذكر.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">3. حل التمارين السابقة</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    حل أسئلة السنوات السابقة يعطيك فكرة عن نمط الأسئلة وطريقة التعامل معها.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">4. الراحة مهمة</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    خذ فترات راحة قصيرة بين جلسات الدراسة. النوم الكافي ضروري لتثبيت المعلومات.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">5. طلب المساعدة</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    لا تتردد في طلب المساعدة من المعلمين أو الزملاء عندما تواجه صعوبة.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="grid gap-4">
            <AdsSettings />
            
            <Card>
              <CardHeader className="bg-gray-50 dark:bg-gray-800/50">
                <CardTitle className="text-gray-800 dark:text-gray-200">حول التطبيق</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 dark:text-gray-400">
                  تطبيق دراسي لطلاب البكالوريا شعبة تسيير واقتصاد. يحتوي على دروس وملخصات وتمارين لمختلف المواد.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  الإصدار 1.0.0
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tips;
