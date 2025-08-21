import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ExchangeLesson = () => {
  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <Card className="w-full mb-6">
        <div className="border-b border-border p-4 bg-card/50">
          <h1 className="text-xl font-bold text-foreground">المجال المفاهيمي الأول: الميكانيزمات الإقتصادية</h1>
          <p className="text-sm text-muted-foreground mt-1">الوحدة الخامسة: الصرف — المادة: الإقتصاد والمناجمنت</p>
        </div>
        <CardContent className="p-5 space-y-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1 - مفهوم سعر الصرف</h2>
              <p className="text-muted-foreground">
                سعر الصرف هو السعر الذي تتبادل به عملة دولة معينة مقابل عملة دولة أخرى، أو هو عدد الوحدات من العملة المحلية اللازمة للحصول على وحدة واحدة من العملة الأجنبية.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">1 - 1 - أنواع أسعار الصرف</h3>
              <h4 className="mt-2 font-medium text-foreground">أ - سعر الصرف الاسمي</h4>
              <p className="text-muted-foreground">
                هو السعر المعلن والمتداول في السوق، والذي يعبر عن قيمة العملة المحلية مقابل العملة الأجنبية.
              </p>

              <h4 className="mt-2 font-medium text-foreground">ب - سعر الصرف الحقيقي</h4>
              <p className="text-muted-foreground">
                هو سعر الصرف الاسمي معدلاً بمستوى الأسعار في البلدين، ويعكس القوة الشرائية الحقيقية للعملة.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">2 - أنظمة أسعار الصرف</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">2 - 1 - نظام سعر الصرف الثابت</h3>
              <p className="text-muted-foreground">
                يتم تحديد سعر الصرف من قبل السلطات النقدية (البنك المركزي) ويبقى ثابتاً لفترات طويلة نسبياً.
              </p>
              
              <h4 className="mt-2 font-medium text-foreground">مزايا النظام الثابت:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>استقرار في التجارة الخارجية</li>
                <li>تسهيل التخطيط الاقتصادي</li>
                <li>تقليل المخاطر في المعاملات الدولية</li>
              </ul>

              <h4 className="mt-2 font-medium text-foreground">عيوب النظام الثابت:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>قد لا يعكس القيمة الحقيقية للعملة</li>
                <li>يتطلب احتياطيات كبيرة من العملة الأجنبية</li>
                <li>صعوبة في التكيف مع التغيرات الاقتصادية</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">2 - 2 - نظام سعر الصرف المرن (العائم)</h3>
              <p className="text-muted-foreground">
                يتحدد سعر الصرف بحرية في السوق وفقاً لقوى العرض والطلب على العملة دون تدخل من السلطات النقدية.
              </p>

              <h4 className="mt-2 font-medium text-foreground">مزايا النظام المرن:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>يعكس القيمة الحقيقية للعملة</li>
                <li>تلقائية التكيف مع التغيرات الاقتصادية</li>
                <li>استقلالية السياسة النقدية</li>
              </ul>

              <h4 className="mt-2 font-medium text-foreground">عيوب النظام المرن:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>عدم الاستقرار والتقلبات الحادة</li>
                <li>زيادة المخاطر في التجارة الدولية</li>
                <li>صعوبة في التخطيط طويل الأجل</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">3 - العوامل المؤثرة في سعر الصرف</h2>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>ميزان المدفوعات: فائض أو عجز في الميزان التجاري</li>
                <li>معدلات التضخم: التضخم المرتفع يضعف العملة</li>
                <li>معدلات الفائدة: فروقات أسعار الفائدة بين الدول</li>
                <li>النمو الاقتصادي: قوة الاقتصاد تعزز العملة</li>
                <li>الاستقرار السياسي: عدم الاستقرار يضعف العملة</li>
                <li>التدفقات الرأسمالية: الاستثمارات الأجنبية</li>
                <li>السياسة النقدية: تدخل البنك المركزي</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">4 - آثار تغير سعر الصرف</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">4 - 1 - انخفاض قيمة العملة (التخفيض)</h3>
              <h4 className="mt-2 font-medium text-foreground">الآثار الإيجابية:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>تحسن القدرة التنافسية للصادرات</li>
                <li>زيادة حجم الصادرات</li>
                <li>تحفيز السياحة الوافدة</li>
                <li>تشجيع الاستثمار الأجنبي</li>
              </ul>

              <h4 className="mt-2 font-medium text-foreground">الآثار السلبية:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>ارتفاع تكلفة الواردات</li>
                <li>ضغوط تضخمية</li>
                <li>زيادة عبء المديونية الخارجية</li>
                <li>انخفاض القوة الشرائية</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">4 - 2 - ارتفاع قيمة العملة (التقوية)</h3>
              <h4 className="mt-2 font-medium text-foreground">الآثار الإيجابية:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>انخفاض تكلفة الواردات</li>
                <li>تخفيف الضغوط التضخمية</li>
                <li>زيادة القوة الشرائية</li>
                <li>تقليل عبء المديونية الخارجية</li>
              </ul>

              <h4 className="mt-2 font-medium text-foreground">الآثار السلبية:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>انخفاض القدرة التنافسية للصادرات</li>
                <li>تراجع حجم الصادرات</li>
                <li>تراجع السياحة الوافدة</li>
                <li>فقدان فرص العمل في القطاعات التصديرية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">5 - سياسات سعر الصرف</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">5 - 1 - التدخل في سوق الصرف</h3>
              <p className="text-muted-foreground">
                يمكن للبنك المركزي التدخل في سوق الصرف عن طريق شراء أو بيع العملات الأجنبية لتحقيق الاستقرار أو تحقيق أهداف اقتصادية معينة.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">5 - 2 - السياسة النقدية وسعر الصرف</h3>
              <p className="text-muted-foreground">
                يمكن استخدام أدوات السياسة النقدية مثل تغيير أسعار الفائدة للتأثير على سعر الصرف بطريقة غير مباشرة.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">5 - 3 - ضوابط الصرف</h3>
              <p className="text-muted-foreground">
                فرض قيود على تحويل العملة أو تداولها، وتحديد أولويات استخدام العملة الأجنبية وفقاً للأهمية الاقتصادية.
              </p>
            </section>
          </article>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExchangeLesson;