import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProductionLesson = () => {
  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <Card className="w-full mb-6">
        <div className="border-b border-border p-4 bg-card/50">
          <h1 className="text-xl font-bold text-foreground">المجال المفاهيمي الثاني: التسيير والتنمية</h1>
          <p className="text-sm text-muted-foreground mt-1">الوحدة الثانية عشر: الإنتاج — المادة: الإقتصاد والمناجمنت</p>
        </div>
        <CardContent className="p-5 space-y-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1 - مفهوم الإنتاج</h2>
              <p className="text-muted-foreground">
                الإنتاج هو عملية تحويل المدخلات (المواد الخام، العمل، رأس المال) إلى مخرجات (سلع وخدمات) لإشباع حاجات المستهلكين.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">2 - عناصر الإنتاج</h2>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الموارد الطبيعية (الأرض، المواد الخام)</li>
                <li>العمل (القوى العاملة والمهارات)</li>
                <li>رأس المال (الآلات والمعدات)</li>
                <li>التنظيم والإدارة</li>
                <li>التكنولوجيا والمعرفة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">3 - أنواع الإنتاج</h2>
              <h3 className="mt-4 font-semibold text-foreground">3 - 1 - الإنتاج الأولي</h3>
              <p className="text-muted-foreground">
                استخراج الموارد الطبيعية مثل الزراعة والتعدين.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">3 - 2 - الإنتاج الثانوي</h3>
              <p className="text-muted-foreground">
                تحويل المواد الخام إلى منتجات صناعية.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">3 - 3 - الإنتاج الثالثي</h3>
              <p className="text-muted-foreground">
                تقديم الخدمات مثل التعليم والصحة والنقل.
              </p>
            </section>
          </article>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductionLesson;