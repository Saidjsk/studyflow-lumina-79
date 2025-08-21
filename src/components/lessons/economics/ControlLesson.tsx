import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ControlLesson = () => {
  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <Card className="w-full mb-6">
        <div className="border-b border-border p-4 bg-card/50">
          <h1 className="text-xl font-bold text-foreground">المجال المفاهيمي الثاني: التسيير والتنمية</h1>
          <p className="text-sm text-muted-foreground mt-1">الوحدة العاشرة: الرقابة — المادة: الإقتصاد والمناجمنت</p>
        </div>
        <CardContent className="p-5 space-y-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1 - مفهوم الرقابة</h2>
              <p className="text-muted-foreground">
                الرقابة هي عملية قياس الأداء الفعلي ومقارنته بالمعايير المحددة مسبقاً، واتخاذ الإجراءات التصحيحية اللازمة لضمان تحقيق الأهداف المرسومة.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">2 - أنواع الرقابة</h2>
              <h3 className="mt-4 font-semibold text-foreground">2 - 1 - الرقابة المسبقة</h3>
              <p className="text-muted-foreground">
                تتم قبل بدء تنفيذ الأنشطة للتأكد من توفر الموارد والإمكانيات اللازمة.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">2 - 2 - الرقابة الجارية</h3>
              <p className="text-muted-foreground">
                تتم أثناء تنفيذ الأنشطة للتأكد من سير العمل وفقاً للخطة المحددة.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">2 - 3 - الرقابة اللاحقة</h3>
              <p className="text-muted-foreground">
                تتم بعد انتهاء الأنشطة لتقييم النتائج والاستفادة من التجربة.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">3 - خطوات عملية الرقابة</h2>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>وضع المعايير والمقاييس</li>
                <li>قياس الأداء الفعلي</li>
                <li>مقارنة الأداء بالمعايير</li>
                <li>تحليل الانحرافات</li>
                <li>اتخاذ الإجراءات التصحيحية</li>
              </ul>
            </section>
          </article>
        </CardContent>
      </Card>
    </div>
  );
};

export default ControlLesson;