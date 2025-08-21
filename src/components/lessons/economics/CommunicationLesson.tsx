import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CommunicationLesson = () => {
  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <Card className="w-full mb-6">
        <div className="border-b border-border p-4 bg-card/50">
          <h1 className="text-xl font-bold text-foreground">المجال المفاهيمي الثاني: التسيير والتنمية</h1>
          <p className="text-sm text-muted-foreground mt-1">الوحدة التاسعة: الاتصال — المادة: الإقتصاد والمناجمنت</p>
        </div>
        <CardContent className="p-5 space-y-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1 - مفهوم الاتصال</h2>
              <p className="text-muted-foreground">
                الاتصال هو عملية تبادل المعلومات والأفكار والمشاعر بين طرفين أو أكثر بهدف التفاهم والتأثير المتبادل. وهو عملية ديناميكية تتضمن إرسال واستقبال الرسائل.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">1 - 1 - أهمية الاتصال</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>تحقيق التفاهم والتنسيق بين الأفراد</li>
                <li>نقل المعلومات والتعليمات</li>
                <li>بناء العلاقات الإنسانية</li>
                <li>حل المشكلات واتخاذ القرارات</li>
                <li>تحفيز وتوجيه السلوك</li>
                <li>تحقيق أهداف المنظمة</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">1 - 2 - خصائص الاتصال الفعال</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الوضوح والبساطة</li>
                <li>الصدق والشفافية</li>
                <li>التوقيت المناسب</li>
                <li>الاكتمال والدقة</li>
                <li>الملاءمة للمستقبل</li>
                <li>التغذية الراجعة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">2 - عناصر عملية الاتصال</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">2 - 1 - المرسل (المصدر)</h3>
              <p className="text-muted-foreground">
                هو الشخص أو الجهة التي تبدأ عملية الاتصال وترسل الرسالة. ويجب أن يتمتع بالمصداقية والوضوح في التعبير.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">2 - 2 - الرسالة</h3>
              <p className="text-muted-foreground">
                هي المحتوى أو المعلومات التي يريد المرسل إيصالها للمستقبل. ويجب أن تكون واضحة ومفهومة ومناسبة للهدف.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">2 - 3 - قناة الاتصال (الوسيلة)</h3>
              <p className="text-muted-foreground">
                هي الطريقة أو الوسيلة المستخدمة لنقل الرسالة من المرسل إلى المستقبل، مثل:
              </p>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الاتصال الشفهي (المحادثة المباشرة، الهاتف)</li>
                <li>الاتصال المكتوب (الرسائل، التقارير، البريد الإلكتروني)</li>
                <li>الاتصال البصري (الصور، الرسوم البيانية)</li>
                <li>الاتصال الرقمي (وسائل التواصل الاجتماعي)</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">2 - 4 - المستقبل</h3>
              <p className="text-muted-foreground">
                هو الشخص أو الجهة التي تستقبل الرسالة وتفسرها. ونجاح الاتصال يعتمد على فهمه واستيعابه للرسالة.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">2 - 5 - التغذية الراجعة</h3>
              <p className="text-muted-foreground">
                هي رد فعل المستقبل على الرسالة، وتساعد المرسل على معرفة مدى وصول وفهم الرسالة بالشكل المطلوب.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">2 - 6 - المشوشات (العوائق)</h3>
              <p className="text-muted-foreground">
                هي العوامل التي تحول دون وصول الرسالة بشكل صحيح، مثل الضوضاء أو سوء الفهم أو الحواجز اللغوية.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">3 - أنواع الاتصال</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">3 - 1 - حسب طبيعة الاتصال</h3>
              <h4 className="mt-2 font-medium text-foreground">أ - الاتصال اللفظي</h4>
              <p className="text-muted-foreground">
                يتم باستخدام الكلمات المنطوقة أو المكتوبة، ويشمل المحادثات والعروض التقديمية والرسائل.
              </p>

              <h4 className="mt-2 font-medium text-foreground">ب - الاتصال غير اللفظي</h4>
              <p className="text-muted-foreground">
                يتم بدون استخدام الكلمات، ويشمل لغة الجسد والإيماءات وتعبيرات الوجه ونبرة الصوت.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">3 - 2 - حسب الاتجاه</h3>
              <h4 className="mt-2 font-medium text-foreground">أ - الاتصال الهابط</h4>
              <p className="text-muted-foreground">
                من الإدارة العليا إلى المستويات الأدنى، مثل التعليمات والسياسات والقرارات.
              </p>

              <h4 className="mt-2 font-medium text-foreground">ب - الاتصال الصاعد</h4>
              <p className="text-muted-foreground">
                من المستويات الأدنى إلى الإدارة العليا، مثل التقارير والشكاوى والاقتراحات.
              </p>

              <h4 className="mt-2 font-medium text-foreground">ج - الاتصال الأفقي</h4>
              <p className="text-muted-foreground">
                بين الأقسام والإدارات في نفس المستوى التنظيمي لتحقيق التنسيق والتعاون.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">3 - 3 - حسب الرسمية</h3>
              <h4 className="mt-2 font-medium text-foreground">أ - الاتصال الرسمي</h4>
              <p className="text-muted-foreground">
                يتم وفقاً للهيكل التنظيمي الرسمي ويتبع القنوات المحددة مسبقاً.
              </p>

              <h4 className="mt-2 font-medium text-foreground">ب - الاتصال غير الرسمي</h4>
              <p className="text-muted-foreground">
                يحدث خارج القنوات الرسمية ويشمل المحادثات الشخصية والشبكات الاجتماعية.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">4 - مهارات الاتصال</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">4 - 1 - مهارات الاستماع</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الاستماع الفعال والإنصات بتركيز</li>
                <li>عدم المقاطعة</li>
                <li>طرح الأسئلة المناسبة</li>
                <li>إبداء الاهتمام والتفاعل</li>
                <li>تلخيص ما سُمع للتأكد من الفهم</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">4 - 2 - مهارات التحدث</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الوضوح في النطق والتعبير</li>
                <li>استخدام لغة مناسبة للجمهور</li>
                <li>تنظيم الأفكار بشكل منطقي</li>
                <li>استخدام نبرة صوت مناسبة</li>
                <li>التحكم في سرعة الكلام</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">4 - 3 - مهارات الكتابة</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الوضوح والبساطة في الأسلوب</li>
                <li>التنظيم المنطقي للمحتوى</li>
                <li>استخدام قواعد اللغة الصحيحة</li>
                <li>الإيجاز وتجنب الحشو</li>
                <li>مراجعة وتصحيح النص</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">4 - 4 - مهارات لغة الجسد</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>التواصل البصري المناسب</li>
                <li>استخدام الإيماءات المعبرة</li>
                <li>الحفاظ على وضعية جسد إيجابية</li>
                <li>احترام المساحة الشخصية</li>
                <li>التناسق بين الكلام ولغة الجسد</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">5 - معوقات الاتصال</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">5 - 1 - المعوقات الشخصية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>اختلاف الخبرات والثقافات</li>
                <li>العواطف والحالة النفسية</li>
                <li>الأحكام المسبقة والتحيزات</li>
                <li>ضعف المهارات اللغوية</li>
                <li>الخوف والقلق</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">5 - 2 - المعوقات التنظيمية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>طول السلسلة الهرمية</li>
                <li>تعدد المستويات الإدارية</li>
                <li>ضعف أنظمة المعلومات</li>
                <li>كثرة الأعباء الإدارية</li>
                <li>ضعف الثقة بين الأطراف</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">5 - 3 - المعوقات التقنية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الضوضاء والتشويش</li>
                <li>أعطال في وسائل الاتصال</li>
                <li>ضعف شبكات الاتصال</li>
                <li>عدم ملاءمة الوسيلة للرسالة</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">5 - 4 - المعوقات اللغوية والثقافية</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>اختلاف اللغات واللهجات</li>
                <li>استخدام المصطلحات التقنية</li>
                <li>الاختلافات الثقافية</li>
                <li>عدم الوضوح في التعبير</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">6 - تحسين فعالية الاتصال</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">6 - 1 - على مستوى المرسل</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>وضوح الهدف من الاتصال</li>
                <li>اختيار الوقت والمكان المناسبين</li>
                <li>استخدام لغة بسيطة ومفهومة</li>
                <li>التأكد من استقبال الرسالة</li>
                <li>طلب التغذية الراجعة</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">6 - 2 - على مستوى المستقبل</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>الاستماع الفعال والتركيز</li>
                <li>طرح الأسئلة للتوضيح</li>
                <li>تجنب الأحكام المسبقة</li>
                <li>إعطاء تغذية راجعة واضحة</li>
                <li>التأكد من فهم الرسالة</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">6 - 3 - على مستوى المنظمة</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>إنشاء قنوات اتصال فعالة</li>
                <li>تدريب الموظفين على مهارات الاتصال</li>
                <li>استخدام تكنولوجيا الاتصالات الحديثة</li>
                <li>بناء ثقافة تنظيمية داعمة للاتصال</li>
                <li>وضع سياسات واضحة للاتصال</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">7 - الاتصال في العصر الرقمي</h2>
              
              <h3 className="mt-4 font-semibold text-foreground">7 - 1 - وسائل الاتصال الحديثة</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>البريد الإلكتروني والرسائل الفورية</li>
                <li>منصات التواصل الاجتماعي</li>
                <li>تطبيقات الفيديو كونفرنس</li>
                <li>منصات العمل التشاركي</li>
                <li>تطبيقات الهواتف الذكية</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">7 - 2 - تحديات الاتصال الرقمي</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>فقدان التفاعل الشخصي المباشر</li>
                <li>صعوبة نقل العواطف والمشاعر</li>
                <li>مخاطر الأمن والخصوصية</li>
                <li>كثرة المعلومات وصعوبة الفلترة</li>
                <li>الحاجة لمهارات تقنية</li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">7 - 3 - قواعد الاتصال الرقمي (آداب الإنترنت)</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>احترام الوقت والخصوصية</li>
                <li>استخدام لغة مهذبة ومناسبة</li>
                <li>التأكد من المعلومات قبل نشرها</li>
                <li>احترام حقوق الملكية الفكرية</li>
                <li>الرد في الوقت المناسب</li>
              </ul>
            </section>
          </article>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunicationLesson;