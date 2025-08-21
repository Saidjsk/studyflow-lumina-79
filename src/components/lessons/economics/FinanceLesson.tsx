import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FinanceLesson = () => {
  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <Card className="w-full mb-6">
        <div className="border-b border-border p-4 bg-card/50">
          <h1 className="text-xl font-bold text-foreground">المجال المفاهيمي الثاني: التسيير والتنمية</h1>
          <p className="text-sm text-muted-foreground mt-1">الوحدة الحادية عشر: التمويل — المادة: الإقتصاد والمناجمنت</p>
        </div>
        <CardContent className="p-5 space-y-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1 - مفهوم التمويل</h2>
              <p className="text-muted-foreground">
                التمويل هو توفير الأموال اللازمة لتشغيل المؤسسة وتحقيق أهدافها، سواء للأنشطة التشغيلية أو الاستثمارية.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">2 - مصادر التمويل</h2>
              <h3 className="mt-4 font-semibold text-foreground">2 - 1 - التمويل الذاتي</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الأرباح المحتجزة</li>
                <li>الاحتياطيات</li>
                <li>الاستهلاكات</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">2 - 2 - التمويل الخارجي</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>القروض المصرفية</li>
                <li>السندات</li>
                <li>زيادة رأس المال</li>
                <li>التمويل التشاركي</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">3 - أنواع التمويل</h2>
              <h3 className="mt-4 font-semibold text-foreground">3 - 1 - التمويل قصير الأجل</h3>
              <p className="text-muted-foreground">
                لتمويل الأنشطة التشغيلية اليومية ورأس المال العامل.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">3 - 2 - التمويل طويل الأجل</h3>
              <p className="text-muted-foreground">
                لتمويل الاستثمارات الثابتة والمشاريع الكبيرة.
              </p>
            </section>
          </article>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinanceLesson;