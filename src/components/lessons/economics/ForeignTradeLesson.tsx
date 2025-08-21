import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ForeignTradeLesson = () => {
  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <Card className="w-full mb-6">
        <div className="border-b border-border p-4 bg-card/50">
          <h1 className="text-xl font-bold text-foreground">المجال المفاهيمي الأول: الميكانيزمات الإقتصادية</h1>
          <p className="text-sm text-muted-foreground mt-1">الوحدة الرابعة: التجارة الخارجية — المادة: الإقتصاد والمناجمنت</p>
        </div>
        <CardContent className="p-5 space-y-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1 - مفهوم التجارة الخارجية</h2>
              <p className="text-muted-foreground">
                التجارة الخارجية هي تبادل السلع والخدمات بين الدول المختلفة، وتشمل عمليات الاستيراد والتصدير التي تتم عبر الحدود الوطنية.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">1 - 1 - الاستيراد</h3>
              <p className="text-muted-foreground">
                الاستيراد هو شراء السلع والخدمات من الخارج (الدول الأجنبية) لتلبية الحاجات المحلية التي لا يمكن إنتاجها محلياً أو يمكن إنتاجها بتكلفة أعلى.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">1 - 2 - التصدير</h3>
              <p className="text-muted-foreground">
                التصدير هو بيع السلع والخدمات المنتجة محلياً إلى الدول الأجنبية، وهو مصدر مهم للعملة الصعبة ولتحقيق التوازن في ميزان المدفوعات.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">2 - أسباب قيام التجارة الخارجية</h2>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>اختلاف الموارد الطبيعية بين الدول</li>
                <li>اختلاف المناخ والظروف الجغرافية</li>
                <li>التخصص وتقسيم العمل الدولي</li>
                <li>اختلاف مستوى التقدم التكنولوجي</li>
                <li>اختلاف تكلفة الإنتاج</li>
                <li>اختلاف الأذواق والثقافات</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">3 - نظريات التجارة الخارجية</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">3 - 1 - نظرية الميزة المطلقة (آدم سميث)</h3>
              <p className="text-muted-foreground">
                تقوم على أن كل دولة يجب أن تتخصص في إنتاج السلع التي تنتجها بتكلفة مطلقة أقل من الدول الأخرى، وتستورد السلع التي تنتجها دول أخرى بتكلفة أقل.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">3 - 2 - نظرية الميزة النسبية (ديفيد ريكاردو)</h3>
              <p className="text-muted-foreground">
                حتى لو كانت دولة ما تنتج جميع السلع بتكلفة أقل من دولة أخرى، فإن التجارة مازالت مفيدة إذا تخصصت كل دولة في إنتاج السلع التي لها فيها ميزة نسبية أكبر.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">4 - السياسة التجارية</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">4 - 1 - سياسة التجارة الحرة</h3>
              <p className="text-muted-foreground">
                تقوم على إزالة جميع القيود على التجارة الدولية والسماح بحرية انتقال السلع والخدمات بين الدول دون عوائق.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">4 - 2 - سياسة الحماية التجارية</h3>
              <p className="text-muted-foreground">
                تقوم على فرض قيود على الواردات لحماية الصناعات المحلية من المنافسة الأجنبية، وتشمل:
              </p>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الرسوم الجمركية</li>
                <li>الحصص الكمية</li>
                <li>القيود غير التعريفية</li>
                <li>الإعانات للمنتجين المحليين</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">5 - ميزان المدفوعات</h2>
              <p className="text-muted-foreground">
                هو سجل منتظم ومفصل لجميع المعاملات الاقتصادية بين دولة ما وبقية العالم خلال فترة زمنية معينة (سنة عادة).
              </p>

              <h3 className="mt-4 font-semibold text-foreground">5 - 1 - مكونات ميزان المدفوعات</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الحساب الجاري: يسجل تجارة السلع والخدمات والتحويلات</li>
                <li>حساب رأس المال: يسجل الاستثمارات والقروض</li>
                <li>الاحتياطات الرسمية: يسجل تغيرات احتياطي البنك المركزي</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">6 - أسعار الصرف في التجارة الخارجية</h2>
              <p className="text-muted-foreground">
                سعر الصرف هو سعر عملة دولة معينة مقوماً بعملة دولة أخرى، وهو عامل مهم في تحديد القدرة التنافسية للصادرات والواردات.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">6 - 1 - تأثير سعر الصرف على التجارة</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>انخفاض سعر الصرف يشجع الصادرات ويثبط الواردات</li>
                <li>ارتفاع سعر الصرف يثبط الصادرات ويشجع الواردات</li>
              </ul>
            </section>
          </article>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForeignTradeLesson;