import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const LeadershipLesson = () => {
  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <Card className="w-full mb-6">
        <div className="border-b border-border p-4 bg-card/50">
          <h1 className="text-xl font-bold text-foreground">المجال المفاهيمي الثاني: التسيير والتنمية</h1>
          <p className="text-sm text-muted-foreground mt-1">الوحدة الثامنة: القيادة — المادة: الإقتصاد والمناجمنت</p>
        </div>
        <CardContent className="p-5 space-y-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1 - مفهوم القيادة</h2>
              <p className="text-muted-foreground">
                القيادة هي عملية التأثير على الآخرين وحفزهم لتحقيق أهداف مشتركة، وهي القدرة على توجيه وإرشاد الأفراد والجماعات نحو تحقيق النتائج المرغوبة.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">1 - 1 - تعريف القائد</h3>
              <p className="text-muted-foreground">
                القائد هو الشخص الذي يؤثر على سلوك الآخرين ويوجههم نحو تحقيق أهداف معينة، ويتمتع بالقدرة على إقناع الآخرين واستمالتهم للعمل بحماس وإخلاص.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">1 - 2 - الفرق بين القيادة والإدارة</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="font-medium text-foreground">القيادة</h4>
                  <ul className="list-disc ps-6 space-y-1 text-foreground">
                    <li>التأثير والإلهام</li>
                    <li>التركيز على الرؤية والاتجاه</li>
                    <li>إحداث التغيير</li>
                    <li>التعامل مع الأشخاص</li>
                    <li>الإبداع والابتكار</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">الإدارة</h4>
                  <ul className="list-disc ps-6 space-y-1 text-foreground">
                    <li>التخطيط والتنظيم</li>
                    <li>التركيز على المهام والعمليات</li>
                    <li>الحفاظ على الوضع الراهن</li>
                    <li>التعامل مع الأنظمة</li>
                    <li>الكفاءة والفعالية</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">2 - خصائص القائد الفعال</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">2 - 1 - الخصائص الشخصية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الثقة بالنفس والجرأة</li>
                <li>النزاهة والصدق</li>
                <li>الذكاء العاطفي</li>
                <li>القدرة على اتخاذ القرارات</li>
                <li>المرونة والتكيف</li>
                <li>الحماس والطاقة الإيجابية</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">2 - 2 - المهارات القيادية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>مهارات الاتصال والتواصل</li>
                <li>القدرة على التحفيز والإلهام</li>
                <li>مهارات التفاوض وحل المشكلات</li>
                <li>القدرة على بناء الفرق</li>
                <li>التفكير الاستراتيجي</li>
                <li>إدارة الوقت والأولويات</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">2 - 3 - المعرفة والخبرة</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>المعرفة التخصصية في مجال العمل</li>
                <li>فهم بيئة العمل والسوق</li>
                <li>الخبرة العملية والممارسة</li>
                <li>التعلم المستمر والتطوير الذاتي</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">3 - أنماط القيادة</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">3 - 1 - القيادة الأوتوقراطية (التسلطية)</h3>
              <p className="text-muted-foreground">
                يتخذ القائد جميع القرارات بمفرده ويطلب من المرؤوسين تنفيذها دون مشاورة أو مناقشة.
              </p>
              <h4 className="mt-2 font-medium text-foreground">المزايا:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>سرعة اتخاذ القرارات</li>
                <li>وضوح في التوجيهات</li>
                <li>مناسب في حالات الطوارئ</li>
              </ul>
              <h4 className="mt-2 font-medium text-foreground">العيوب:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>قلة الإبداع والابتكار</li>
                <li>انخفاض معنويات الموظفين</li>
                <li>الاعتماد الكامل على القائد</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">3 - 2 - القيادة الديمقراطية (التشاركية)</h3>
              <p className="text-muted-foreground">
                يشارك القائد مرؤوسيه في عملية صنع القرار ويأخذ بآرائهم ومقترحاتهم.
              </p>
              <h4 className="mt-2 font-medium text-foreground">المزايا:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>زيادة الرضا الوظيفي</li>
                <li>تحفيز الإبداع والابتكار</li>
                <li>تطوير مهارات المرؤوسين</li>
              </ul>
              <h4 className="mt-2 font-medium text-foreground">العيوب:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>بطء في اتخاذ القرارات</li>
                <li>قد تحدث خلافات في الآراء</li>
                <li>تحتاج لوقت أكثر للمناقشة</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">3 - 3 - القيادة التساهلية (المتحررة)</h3>
              <p className="text-muted-foreground">
                يترك القائد للمرؤوسين حرية كاملة في العمل واتخاذ القرارات مع الحد الأدنى من التدخل.
              </p>
              <h4 className="mt-2 font-medium text-foreground">المزايا:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>حرية كاملة للموظفين</li>
                <li>تشجيع الإبداع والمبادرة</li>
                <li>مناسب للخبراء والمختصين</li>
              </ul>
              <h4 className="mt-2 font-medium text-foreground">العيوب:</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>قد يؤدي للفوضى</li>
                <li>صعوبة في التنسيق</li>
                <li>عدم وضوح المسؤوليات</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">4 - نظريات القيادة</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">4 - 1 - نظرية السمات</h3>
              <p className="text-muted-foreground">
                تركز على أن القادة يولدون بسمات وخصائص شخصية معينة تميزهم عن غيرهم وتجعلهم قادرين على القيادة.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">4 - 2 - النظرية السلوكية</h3>
              <p className="text-muted-foreground">
                تركز على سلوكيات القائد وأفعاله، وتعتبر أن القيادة مهارة يمكن تعلمها وتطويرها من خلال التدريب.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">4 - 3 - النظرية الموقفية</h3>
              <p className="text-muted-foreground">
                تؤكد على أن فعالية القيادة تعتمد على الموقف والظروف، ولا يوجد نمط قيادي واحد مناسب لجميع المواقف.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">4 - 4 - النظرية التحويلية</h3>
              <p className="text-muted-foreground">
                تركز على قدرة القائد على إلهام وتحفيز المرؤوسين لتحقيق أداء يفوق التوقعات من خلال الرؤية والكاريزما.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">5 - وظائف القيادة</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">5 - 1 - وضع الرؤية والاتجاه</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>تحديد الرؤية المستقبلية</li>
                <li>وضع الأهداف الاستراتيجية</li>
                <li>توضيح الاتجاه للفريق</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">5 - 2 - التحفيز والإلهام</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>رفع معنويات الفريق</li>
                <li>تحفيز الأداء المتميز</li>
                <li>إشعال روح الحماس</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">5 - 3 - تطوير الأفراد</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>تنمية مهارات المرؤوسين</li>
                <li>التوجيه والإرشاد</li>
                <li>إعداد القادة المستقبليين</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">5 - 4 - اتخاذ القرارات</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>اتخاذ القرارات الصعبة</li>
                <li>حل المشكلات والصراعات</li>
                <li>إدارة الأزمات</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">6 - القيادة في العصر الحديث</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">6 - 1 - القيادة الرقمية</h3>
              <p className="text-muted-foreground">
                التكيف مع التكنولوجيا الحديثة وقيادة الفرق الافتراضية والعمل عن بُعد.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">6 - 2 - القيادة المتنوعة والشاملة</h3>
              <p className="text-muted-foreground">
                تقدير التنوع والشمولية في مكان العمل والاستفادة من الاختلافات الثقافية والفكرية.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">6 - 3 - القيادة المستدامة</h3>
              <p className="text-muted-foreground">
                التركيز على المسؤولية الاجتماعية والبيئية وتحقيق التوازن بين الربح والتأثير الاجتماعي.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">6 - 4 - تطوير المهارات القيادية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>التعلم المستمر والتطوير الذاتي</li>
                <li>الحصول على التغذية الراجعة</li>
                <li>التدريب والإرشاد</li>
                <li>التجربة والممارسة العملية</li>
                <li>القراءة ودراسة أفضل الممارسات</li>
              </ul>
            </section>
          </article>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadershipLesson;