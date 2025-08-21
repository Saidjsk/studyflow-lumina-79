import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const InflationLesson = () => {
  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <Card className="w-full mb-6">
        <div className="border-b border-border p-4 bg-card/50">
          <h1 className="text-xl font-bold text-foreground">المجال المفاهيمي الأول: الميكانيزمات الإقتصادية</h1>
          <p className="text-sm text-muted-foreground mt-1">الوحدة السابعة: التضخم — المادة: الإقتصاد والمناجمنت</p>
        </div>
        <CardContent className="p-5 space-y-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1 - مفهوم التضخم</h2>
              <p className="text-muted-foreground">
                التضخم هو الارتفاع المستمر والعام في مستوى الأسعار في الاقتصاد خلال فترة زمنية معينة، مما يؤدي إلى انخفاض القوة الشرائية للنقود.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">1 - 1 - خصائص التضخم</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الارتفاع المستمر وليس المؤقت في الأسعار</li>
                <li>الارتفاع العام وليس في أسعار سلع معينة فقط</li>
                <li>انخفاض القوة الشرائية للنقود</li>
                <li>توقعات الجمهور بارتفاع الأسعار مستقبلاً</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">1 - 2 - الانكماش</h3>
              <p className="text-muted-foreground">
                الانكماش هو عكس التضخم، ويعني الانخفاض المستمر والعام في مستوى الأسعار، مما يؤدي إلى زيادة القوة الشرائية للنقود.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">2 - قياس التضخم</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">2 - 1 - الرقم القياسي لأسعار المستهلك (IPC)</h3>
              <p className="text-muted-foreground">
                هو مؤشر يقيس التغير في تكلفة سلة من السلع والخدمات التي يشتريها المستهلك العادي.
              </p>
              <p className="text-muted-foreground">
                معدل التضخم = ((الرقم القياسي للسنة الحالية - الرقم القياسي للسنة السابقة) ÷ الرقم القياسي للسنة السابقة) × 100
              </p>

              <h3 className="mt-4 font-semibold text-foreground">2 - 2 - مؤشرات أخرى</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الرقم القياسي لأسعار المنتجين</li>
                <li>مؤشر أسعار الناتج المحلي الإجمالي</li>
                <li>التضخم الأساسي (بدون الطعام والطاقة)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">3 - أنواع التضخم</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">3 - 1 - حسب المعدل</h3>
              <h4 className="mt-2 font-medium text-foreground">أ - التضخم الزاحف</h4>
              <p className="text-muted-foreground">
                معدل تضخم منخفض (أقل من 3% سنوياً)، وهو مستوى مقبول اقتصادياً ولا يشكل تهديداً كبيراً.
              </p>

              <h4 className="mt-2 font-medium text-foreground">ب - التضخم المعتدل</h4>
              <p className="text-muted-foreground">
                معدل تضخم متوسط (3% - 10% سنوياً)، يتطلب متابعة وقد يحتاج تدخل السياسات الاقتصادية.
              </p>

              <h4 className="mt-2 font-medium text-foreground">ج - التضخم الجامح</h4>
              <p className="text-muted-foreground">
                معدل تضخم مرتفع جداً (أكثر من 50% شهرياً)، يؤدي إلى انهيار النظام النقدي وعدم استقرار الاقتصاد.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">3 - 2 - حسب السبب</h3>
              <h4 className="mt-2 font-medium text-foreground">أ - تضخم جذب الطلب</h4>
              <p className="text-muted-foreground">
                ينتج عن زيادة الطلب الكلي بمعدل أكبر من زيادة العرض الكلي، مما يؤدي إلى ارتفاع الأسعار.
              </p>

              <h4 className="mt-2 font-medium text-foreground">ب - تضخم دفع التكاليف</h4>
              <p className="text-muted-foreground">
                ينتج عن ارتفاع تكاليف الإنتاج (المواد الخام، الأجور، الطاقة)، مما يدفع المنتجين لرفع الأسعار.
              </p>

              <h4 className="mt-2 font-medium text-foreground">ج - التضخم البنيوي</h4>
              <p className="text-muted-foreground">
                ينتج عن مشاكل هيكلية في الاقتصاد مثل الاختناقات في الإنتاج أو ضعف البنية التحتية.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">4 - أسباب التضخم</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">4 - 1 - الأسباب النقدية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>زيادة المعروض النقدي بمعدل أكبر من نمو الإنتاج</li>
                <li>انخفاض أسعار الفائدة</li>
                <li>التوسع في الائتمان المصرفي</li>
                <li>طباعة النقود لتمويل العجز في الميزانية</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">4 - 2 - الأسباب الحقيقية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>زيادة الطلب الكلي (الاستهلاك، الاستثمار، الإنفاق الحكومي)</li>
                <li>نقص العرض بسبب كوارث طبيعية أو حروب</li>
                <li>ارتفاع أسعار المواد الخام والطاقة</li>
                <li>زيادة الأجور بمعدل أكبر من زيادة الإنتاجية</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">4 - 3 - العوامل الخارجية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>التضخم المستورد عبر ارتفاع أسعار الواردات</li>
                <li>انخفاض سعر صرف العملة المحلية</li>
                <li>الصدمات الخارجية (أزمات عالمية)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">5 - آثار التضخم</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">5 - 1 - الآثار على توزيع الدخل</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>تضرر أصحاب الدخول الثابتة (الموظفين، المتقاعدين)</li>
                <li>استفادة المدينين على حساب الدائنين</li>
                <li>زيادة التفاوت في توزيع الدخل</li>
                <li>تآكل القوة الشرائية للطبقات الفقيرة</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">5 - 2 - الآثار على الإنتاج والاستثمار</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>عدم اليقين يقلل الاستثمار طويل الأجل</li>
                <li>تحويل الاستثمار من الإنتاج إلى المضاربة</li>
                <li>صعوبة التخطيط الاقتصادي</li>
                <li>انخفاض الكفاءة الاقتصادية</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">5 - 3 - الآثار على التجارة الخارجية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>انخفاض القدرة التنافسية للصادرات</li>
                <li>زيادة جاذبية الواردات</li>
                <li>تدهور ميزان المدفوعات</li>
                <li>ضغوط على سعر صرف العملة</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">5 - 4 - الآثار الاجتماعية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>انخفاض مستوى المعيشة</li>
                <li>زيادة معدلات الفقر</li>
                <li>عدم الاستقرار الاجتماعي</li>
                <li>فقدان الثقة في النظام النقدي</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">6 - سياسات مكافحة التضخم</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">6 - 1 - السياسة النقدية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>رفع أسعار الفائدة لتقليل الطلب</li>
                <li>تقليل المعروض النقدي</li>
                <li>رفع نسبة الاحتياطي الإجباري</li>
                <li>بيع السندات الحكومية (عمليات السوق المفتوحة)</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">6 - 2 - السياسة المالية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>تقليل الإنفاق الحكومي</li>
                <li>زيادة الضرائب</li>
                <li>تحقيق فائض في الميزانية</li>
                <li>إلغاء الدعم غير المبرر</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">6 - 3 - السياسات الهيكلية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>زيادة الإنتاجية والكفاءة</li>
                <li>تحسين البنية التحتية</li>
                <li>تطوير القطاعات الإنتاجية</li>
                <li>تحرير الأسواق وزيادة المنافسة</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">6 - 4 - السياسات المباشرة</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>مراقبة الأسعار (مؤقتاً)</li>
                <li>الدعم الموجه للطبقات الفقيرة</li>
                <li>تحسين آليات التوزيع</li>
                <li>مكافحة الاحتكار والمضاربة</li>
              </ul>
            </section>
          </article>
        </CardContent>
      </Card>
    </div>
  );
};

export default InflationLesson;