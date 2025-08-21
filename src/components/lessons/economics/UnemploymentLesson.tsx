import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const UnemploymentLesson = () => {
  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <Card className="w-full mb-6">
        <div className="border-b border-border p-4 bg-card/50">
          <h1 className="text-xl font-bold text-foreground">المجال المفاهيمي الأول: الميكانيزمات الإقتصادية</h1>
          <p className="text-sm text-muted-foreground mt-1">الوحدة السادسة: البطالة — المادة: الإقتصاد والمناجمنت</p>
        </div>
        <CardContent className="p-5 space-y-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1 - مفهوم البطالة</h2>
              <p className="text-muted-foreground">
                البطالة هي الحالة التي يكون فيها الشخص قادراً على العمل وراغباً فيه ويبحث عنه، لكنه لا يجد فرصة عمل مناسبة. وتعتبر البطالة من أهم المشاكل الاقتصادية والاجتماعية في معظم دول العالم.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">1 - 1 - تعريف العاطل</h3>
              <p className="text-muted-foreground">
                العاطل هو كل شخص في سن العمل (عادة 15-64 سنة) وقادر على العمل وراغب فيه ويبحث عنه بنشاط، لكنه لا يجد عملاً مناسباً.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">1 - 2 - القوى العاملة</h3>
              <p className="text-muted-foreground">
                تشمل جميع الأشخاص في سن العمل القادرين والراغبين في العمل، وتنقسم إلى:
              </p>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>العاملون: الذين لديهم وظائف</li>
                <li>العاطلون: الذين يبحثون عن عمل</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">2 - قياس البطالة</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">2 - 1 - معدل البطالة</h3>
              <p className="text-muted-foreground">
                معدل البطالة = (عدد العاطلين ÷ إجمالي القوى العاملة) × 100
              </p>
              <p className="text-muted-foreground">
                حيث إجمالي القوى العاملة = العاملون + العاطلون
              </p>

              <h3 className="mt-4 font-semibold text-foreground">2 - 2 - معدل المشاركة في القوى العاملة</h3>
              <p className="text-muted-foreground">
                معدل المشاركة = (إجمالي القوى العاملة ÷ السكان في سن العمل) × 100
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">3 - أنواع البطالة</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">3 - 1 - البطالة الهيكلية</h3>
              <p className="text-muted-foreground">
                تنتج عن تغيرات في هيكل الاقتصاد أو التطور التكنولوجي، مما يجعل مهارات بعض العمال غير مطلوبة أو عفا عليها الزمن.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">3 - 2 - البطالة الاحتكاكية</h3>
              <p className="text-muted-foreground">
                بطالة مؤقتة تحدث عندما ينتقل العمال من وظيفة إلى أخرى أو عندما يدخلون سوق العمل لأول مرة. وهي طبيعية وحتمية في أي اقتصاد.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">3 - 3 - البطالة الدورية (الظرفية)</h3>
              <p className="text-muted-foreground">
                تحدث نتيجة لتقلبات الدورة الاقتصادية، خاصة في فترات الركود الاقتصادي عندما ينخفض الطلب الكلي على السلع والخدمات.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">3 - 4 - البطالة الموسمية</h3>
              <p className="text-muted-foreground">
                ترتبط بالتغيرات الموسمية في الطلب على العمالة، مثل البطالة في القطاع الزراعي أو السياحي خلال مواسم معينة.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">3 - 5 - البطالة المقنعة</h3>
              <p className="text-muted-foreground">
                حالة يعمل فيها عدد من الأشخاص أكبر من المطلوب لإنجاز العمل، بحيث يمكن سحب جزء منهم دون تأثير على الإنتاج.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">4 - أسباب البطالة</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">4 - 1 - الأسباب الاقتصادية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>انخفاض النمو الاقتصادي</li>
                <li>عدم كفاية الاستثمار</li>
                <li>التضخم المرتفع</li>
                <li>عدم توازن هيكل الاقتصاد</li>
                <li>ضعف القطاع الخاص</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">4 - 2 - الأسباب الديموغرافية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>النمو السكاني المرتفع</li>
                <li>الهجرة من الريف إلى المدن</li>
                <li>دخول أجيال جديدة لسوق العمل</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">4 - 3 - الأسباب التكنولوجية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الأتمتة والتقدم التكنولوجي</li>
                <li>استبدال العمالة بالآلات</li>
                <li>تطور تقنيات الإنتاج</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">4 - 4 - الأسباب التعليمية والمهارية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>عدم ملاءمة التعليم لسوق العمل</li>
                <li>نقص المهارات المطلوبة</li>
                <li>ضعف التدريب المهني</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">5 - آثار البطالة</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">5 - 1 - الآثار الاقتصادية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>انخفاض الناتج المحلي الإجمالي</li>
                <li>ضياع الموارد البشرية</li>
                <li>انخفاض مستوى المعيشة</li>
                <li>زيادة العبء على الميزانية العامة</li>
                <li>انخفاض الإيرادات الضريبية</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">5 - 2 - الآثار الاجتماعية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الفقر وانخفاض مستوى المعيشة</li>
                <li>التفكك الاجتماعي</li>
                <li>زيادة معدلات الجريمة</li>
                <li>الهجرة والنزوح</li>
                <li>انخفاض معدلات الزواج والإنجاب</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">5 - 3 - الآثار النفسية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>فقدان الثقة بالنفس</li>
                <li>الاكتئاب والقلق</li>
                <li>الشعور بالإحباط</li>
                <li>فقدان المهارات</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">6 - سياسات مكافحة البطالة</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">6 - 1 - السياسات النقدية والمالية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>خفض أسعار الفائدة لتشجيع الاستثمار</li>
                <li>زيادة الإنفاق الحكومي</li>
                <li>تخفيض الضرائب</li>
                <li>تحفيز الطلب الكلي</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">6 - 2 - السياسات الهيكلية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>تطوير التعليم والتدريب المهني</li>
                <li>تحسين مرونة سوق العمل</li>
                <li>دعم المشروعات الصغيرة والمتوسطة</li>
                <li>تطوير البنية التحتية</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">6 - 3 - برامج التشغيل المباشرة</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>برامج الأشغال العامة</li>
                <li>برامج التدريب وإعادة التأهيل</li>
                <li>إعانات البطالة</li>
                <li>خدمات التوظيف والإرشاد المهني</li>
              </ul>
            </section>
          </article>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnemploymentLesson;