
import React from 'react';
import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Tips = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <header>
        <h1 className="text-2xl font-bold mb-2 flex items-center">
          <Lightbulb className="mr-2 h-6 w-6 text-amber-500" />
          نصائح للدراسة
        </h1>
        <p className="text-muted-foreground">دليلك للنجاح في البكالوريا</p>
      </header>

      <div className="grid gap-6">
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <CardTitle className="text-blue-800 dark:text-blue-300 flex items-center">
              <Lightbulb className="mr-2 h-5 w-5" />
              نصائح للنجاح في البكالوريا
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-4">
              <div className="border-r-4 border-blue-500 pr-4">
                <h3 className="text-lg font-medium mb-2 text-foreground">1. نظم وقتك</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ضع جدولاً دراسياً واضحاً مع تخصيص وقت كافٍ لكل مادة حسب أهميتها وصعوبتها.
                </p>
              </div>
              
              <div className="border-r-4 border-green-500 pr-4">
                <h3 className="text-lg font-medium mb-2 text-foreground">2. التركيز على الفهم</h3>
                <p className="text-muted-foreground leading-relaxed">
                  حاول فهم المفاهيم بدلاً من الحفظ. ربط المعلومات ببعضها يساعد على التذكر.
                </p>
              </div>
              
              <div className="border-r-4 border-orange-500 pr-4">
                <h3 className="text-lg font-medium mb-2 text-foreground">3. حل التمارين السابقة</h3>
                <p className="text-muted-foreground leading-relaxed">
                  حل أسئلة السنوات السابقة يعطيك فكرة عن نمط الأسئلة وطريقة التعامل معها.
                </p>
              </div>
              
              <div className="border-r-4 border-purple-500 pr-4">
                <h3 className="text-lg font-medium mb-2 text-foreground">4. الراحة مهمة</h3>
                <p className="text-muted-foreground leading-relaxed">
                  خذ فترات راحة قصيرة بين جلسات الدراسة. النوم الكافي ضروري لتثبيت المعلومات.
                </p>
              </div>
              
              <div className="border-r-4 border-pink-500 pr-4">
                <h3 className="text-lg font-medium mb-2 text-foreground">5. طلب المساعدة</h3>
                <p className="text-muted-foreground leading-relaxed">
                  لا تتردد في طلب المساعدة من المعلمين أو الزملاء عندما تواجه صعوبة.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50">
            <CardTitle className="text-foreground">حول التطبيق</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                تطبيق دراسي شامل لطلاب البكالوريا شعبة تسيير واقتصاد. يحتوي على دروس وملخصات وتمارين لمختلف المواد.
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">الإصدار</span>
                <span className="text-sm font-medium text-foreground">2.0.0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tips;
