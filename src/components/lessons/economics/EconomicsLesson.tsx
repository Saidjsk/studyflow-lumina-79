import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import UnderDevelopmentLesson from '@/components/lessons/UnderDevelopmentLesson';
import MarketLesson from '@/components/lessons/economics/MarketLesson';
import BankingSection from '@/components/lessons/economics/BankingSection';

const EconomicsLesson = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { theme } = useTheme();

  if (lessonId === 'market') {
    return <MarketLesson />;
  }

  if (lessonId === 'banks') {
    return (
      <div className="max-w-4xl mx-auto" dir="rtl">
        <Card className="w-full mb-6">
          <div className="border-b border-border p-4 bg-card/50">
            <h1 className="text-xl font-bold text-foreground">المجال المفاهيمي الأول: الميكانيزمات الإقتصادية</h1>
            <p className="text-sm text-muted-foreground mt-1">الوحدة الثالثة: النظام المصرفي — المادة: الإقتصاد والمناجمنت</p>
          </div>
          <CardContent className="p-5">
            <BankingSection />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (lessonId !== 'money') {
    return <UnderDevelopmentLesson subjectName="الإقتصاد" />;
  }

  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <Card className="w-full mb-6">
        <div className="border-b border-border p-4 bg-card/50">
          <h1 className="text-xl font-bold text-foreground">المجال المفاهيمي الأول: الميكانيزمات الإقتصادية</h1>
          <p className="text-sm text-muted-foreground mt-1">الوحدة الأولى: النقود — المادة: الإقتصاد والمناجمنت</p>
        </div>
        <CardContent className="p-5 space-y-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1 - المبادلة</h2>
              <p className="text-muted-foreground">
                كان النشاط الاقتصادي في المجتمعات البدائية يتم بغرض الاستهلاك الذاتي. وبتطور المجتمعات ظهر تقسيم العمل في مرحلته الأولى، وكنتيجة لهذا التقسيم ظهر الفائض في الإنتاج، مما أدى إلى ظهور الحاجة إلى مبادلته. فما المقصود بالمبادلة؟ وما هي أشكالها؟
              </p>

              <h3 className="mt-4 font-semibold text-foreground">1 - 1 - تعريف المبادلة</h3>
              <p className="text-muted-foreground">
                المبادلة هي عملية التنازل عن شيء مقابل الحصول على شيء آخر، وهي همزة وصل تربط بين منتِج السلعة ومستهلكها، وقد تتم من خلال وسطاء مثل تجّار الجملة وتجار التجزئة.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">1 - 2 - أشكال المبادلة</h3>
              <h4 className="mt-2 font-medium text-foreground">أ - المقايضة</h4>
              <p className="text-muted-foreground">
                المقايضة هي أول أشكال المبادلة وتعني مبادلة سلعة بسلعة أو خدمة بخدمة أو سلعة بخدمة دون استخدام النقود.
              </p>
              <p className="font-medium text-foreground mt-2">عيوب المقايضة:</p>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>صعوبة توافر التوافق المتبادل بين الطرفين.</li>
                <li>صعوبة تجزئة بعض السلع التي لا تقبل التجزئة بطبيعتها (كالماشية).</li>
                <li>صعوبة وجود معدل موحد للتبادل بين السلع.</li>
                <li>صعوبة مقايضة الخدمات بالسلع.</li>
                <li>عدم السماح بالادخار نظراً لتكاليف التخزين واحتمال التلف والضياع.</li>
              </ul>

              <h4 className="mt-3 font-medium text-foreground">ب - المبادلة بواسطة النقود</h4>
              <p className="text-muted-foreground">
                هي استخدام النقود كوسيط في عملية التبادل (سلعة - نقود - سلعة). وقد مرت بعدة مراحل بدءاً من سلع مثل الملح والجلود كوسيط، ثم النقود المعدنية، ثم أشكال أخرى للنقود ظهرت لاحقاً.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">2 - النقود</h2>

              <h3 className="mt-3 font-semibold text-foreground">2 - 1 - تعريف النقود</h3>
              <p className="text-muted-foreground">
                تعريف وظيفي: النقود هي كل ما يفعله دور النقود. أي وسيط يحظى بالقبول العام ويؤدي وظائف النقود يمكن اعتباره نقوداً.
              </p>

              <h3 className="mt-3 font-semibold text-foreground">2 - 2 - خصائص النقود</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>القبول العام.</li>
                <li>الندرة النسبية.</li>
                <li>الثبات النسبي في القيمة.</li>
                <li>قابليتها للتجزئة دون انخفاض القيمة.</li>
                <li>تماثل وحداتها.</li>
                <li>سهولة الحمل والاحتفاظ.</li>
                <li>مقاومة البِلى بسهولة.</li>
              </ul>

              <h3 className="mt-3 font-semibold text-foreground">2 - 3 - وظائف النقود</h3>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>
                  وسيط للمبادلة: ليست مطلوبة لذاتها بل للحصول على السلع والخدمات والأصول المالية، ولها قدرة شرائية عامة.
                </li>
                <li>
                  مقياس للقيمة: تُستخدم كوحدة حساب لقياس قيم السلع والخدمات، وتُحدد وحدة للتحاسب في كل بلد كالدينار مثلاً.
                </li>
                <li>
                  مستودع للقيم: خفيفة وسهلة الحفظ وتجنّب تكاليف التخزين، ما يجعلها وسيلة للادخار للإنفاق المستقبلي.
                </li>
                <li>
                  وسيلة للمدفوعات الآجلة: تُسدد بها الالتزامات المستقبلية الناشئة عن الاقتراض أو البيع على الحساب.
                </li>
              </ul>

              <h3 className="mt-3 font-semibold text-foreground">2 - 4 - أشكال النقود</h3>
              <h4 className="mt-2 font-medium text-foreground">أ - النقود المعدنية</h4>
              <p className="text-muted-foreground">
                هي النقود المسكوكة من الذهب أو الفضة أو البرونز. وتنقسم إلى:
              </p>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>نقود معدنية كاملة: تتعادل قيمتها القانونية مع قيمتها كمعدن.</li>
                <li>نقود معدنية مساعدة: تتفوّق قيمتها القانونية على قيمة معدنها (مثل 50 دج، 100 دج).</li>
              </ul>

              <h4 className="mt-3 font-medium text-foreground">ب - النقود الورقية</h4>
              <p className="text-muted-foreground">
                نقود قانونية إلزامية يصدرها البنك المركزي وتُلزم الدولة بقبولها دون حق تحويلها إلى ذهب أو فضة.
              </p>

              <h4 className="mt-3 font-medium text-foreground">ج - النقود المصرفية (الخطية)</h4>
              <p className="text-muted-foreground">
                أرصدة في حسابات المودعين لدى المصارف التجارية تنشأ عن الإيداع أو الإقراض، وتتداول عبر الشيكات وأوامر الدفع، ولا تُعد نقوداً إلزامية.
              </p>

              <h4 className="mt-3 font-medium text-foreground">د - البطاقة الائتمانية</h4>
              <p className="text-muted-foreground">
                بطاقة يصدرها المصرف التجاري تُمنح ضمن سقف ائتماني، يُسدَّد بها ثمن المشتريات أو يُسحب بها نقد، وتُدفع فوائد على المبالغ المسحوبة.
              </p>

              <h4 className="mt-3 font-medium text-foreground">هـ - النقود الإلكترونية</h4>
              <p className="text-muted-foreground">
                أرصدة مسبقة الدفع مسجلة على وسائط إلكترونية كالبطاقات أو الهواتف، وتسمح بالمدفوعات والتحويلات عن بعد عبر الإنترنت بين ثلاثة أطراف: الزبون، البائع، والبنك.
              </p>
            </section>

            <section>
              <h3 className="mt-6 font-semibold text-foreground">2 - 5 - إصدار النقود</h3>
              <p className="text-muted-foreground">
                إصدار النقود الورقية والمعدنية حقٌ للدولة ويفوَّض لبنك الجزائر (البنك المركزي).
              </p>
              <p className="text-muted-foreground">
                إصدار النقود المصرفية والإلكترونية وبطاقات الائتمان تقوم به البنوك التجارية تحت رقابة البنك المركزي.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">2 - 6 - الكتلة النقدية</h3>
              <p className="text-muted-foreground">
                تعريف: هي مجموعة الوحدات القائمة بوظائف النقود في حيازة مختلف الأعوان الاقتصاديين.
              </p>
              <p className="font-medium text-foreground mt-2">مكوناتها:</p>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>
                  النقود القانونية: الأوراق النقدية والنقود المعدنية المساعدة، ذات صفة الشرعية والقدرة على الإبراء وتمثل قمة السيولة.
                </li>
                <li>
                  النقود الائتمانية: التزامات المصارف التجارية بدفع مبالغ من النقود القانونية عند الطلب (الودائع الجارية فقط دون الادخارية ولأجل).
                </li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">2 - 7 - التوازن النقدي</h3>
              <p className="text-muted-foreground">
                يتحقق عندما يتعادل الطلب على النقود مع الكمية المعروضة منها، عند نقطة تقاطع منحنى العرض والطلب والتي يتحدد عندها سعر الفائدة التوازني.
              </p>
            </section>
          </article>
        </CardContent>
      </Card>
    </div>
  );
};

export default EconomicsLesson;
