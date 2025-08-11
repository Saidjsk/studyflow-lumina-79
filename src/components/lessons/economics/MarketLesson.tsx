import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MarketLesson = () => {
  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <Card className="w-full mb-6">
        <div className="border-b border-border p-4 bg-card/50">
          <h1 className="text-xl font-bold text-foreground">المجال المفاهيمي الأول: الميكانيزمات الاقتصادية</h1>
          <p className="text-sm text-muted-foreground mt-1">الوحدة الثانية: السوق والأسعار — المادة: الإقتصاد والمناجمنت</p>
        </div>
        <CardContent className="p-5 space-y-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            {/* 1 - السوق */}
            <section>
              <h2 className="text-lg font-semibold text-foreground">1 - السوق</h2>

              <h3 className="mt-4 font-semibold text-foreground">1 - 1 - تعريف السوق</h3>
              <p className="text-muted-foreground">
                هو المكان الذي يلتقي فيه البائعون والمشترون سواء بصفة مباشرة أو عن طريق الوسطاء لتبادل سلعة أو خدمة معينة. والمكان هنا ليس بالضرورة
                أن يكون حيزًا جغرافيًا، ففي الوقت الحالي تستخدم شبكة الإنترنت في عملية التسوق.
              </p>

              <h3 className="mt-4 font-semibold text-foreground">1 - 2 - أنواع الأسواق</h3>
              <p className="text-muted-foreground">توجد أنواع متعددة من الأسواق تختلف باختلاف موضوع التعامل فيها ومنها:</p>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>
                  <span className="font-medium">أ - سوق السلع والخدمات:</span> يقصد بسوق سلعة (أو خدمة) معينة المكان الذي يلتقي فيه عارضو هذه السلعة أو
                  الخدمة مع طالبيها. وتجدر الإشارة إلى أنه يوجد لكل سلعة أو خدمة سوق خاص بها مثل سوق النفط، سوق السيارات، سوق خدمات النقل الجوي ... إلخ.
                </li>
                <li>
                  <span className="font-medium">ب - سوق العمل:</span> سوق العمل هو المكان الذي يلتقي فيه عارضو خدمة العمل (الأفراد الذين هم في السن القانوني
                  للعمل ويرغبون في العمل) مع طالبي خدمة العمل (المؤسسات، الإدارات ... إلخ). وتجدر الإشارة إلى أنه توجد لكل نوع من العمل سوق خاص بها مثل:
                  سوق العمل الزراعي، سوق عمل البناء ... إلخ.
                </li>
                <li>
                  <span className="font-medium">ج - سوق الأوراق المالية:</span> يعرف سوق الأوراق المالية بأنه عبارة عن مكان يلتقي فيه البائعون والمشترون للأوراق
                  المالية (أسهم وسندات)، ويتم ذلك عن طريق السماسرة أو المؤسسات العاملة في هذا المجال.
                </li>
              </ul>

              <h3 className="mt-4 font-semibold text-foreground">1 - 3 - أشكال السوق</h3>
              <p className="text-muted-foreground">يمكن التمييز بين سوق المنافسة الكاملة وسوق المنافسة غير الكاملة:</p>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>
                  <span className="font-medium">المنافسة الكاملة أو التامة:</span> في الواقع لا يوجد هذا النوع من المنافسة لأنه لا يمكن أن تتحقق جميع شروط المنافسة
                  التامة والمتمثلة في ما يلي:
                  <ul className="list-[circle] ps-6 mt-1 space-y-1">
                    <li>وجود عدد كبير جدًا من البائعين والمشترين لنفس السلعة.</li>
                    <li>صِغَر حجم عرض كل بائع وكذلك صِغَر حجم طلب كل مشترٍ بحيث لا يمكن لأي فرد أن يؤثر على مجريات السوق.</li>
                    <li>المعرفة التامة بظروف السوق من عرض وطلب والأسعار السائدة.</li>
                    <li>تجانس السلع ووجود سعر موحد للسلعة.</li>
                    <li>حرية الدخول والخروج من السوق بدون أي عوائق.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">المنافسة غير الكاملة:</span> للمنافسة غير الكاملة ثلاثة أشكال هي:
                  <ul className="list-[circle] ps-6 mt-1 space-y-1">
                    <li>
                      <span className="font-medium">أ - المنافسة الاحتكارية:</span> تتميز بما يلي:
                      <ul className="list-[square] ps-6 mt-1 space-y-1">
                        <li>وجود عدد من البائعين والمشترين.</li>
                        <li>وجود سلع غير متجانسة وأسعار مختلفة.</li>
                        <li>عدم المعرفة التامة بظروف السوق من طرف البائعين والمشترين.</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">ب - احتكار القلة:</span> يتميز بما يلي:
                      <ul className="list-[square] ps-6 mt-1 space-y-1">
                        <li>وجود عدد قليل من البائعين أو من المشترين.</li>
                        <li>وجود سلع متشابهة وغير متجانسة وأسعار مختلفة.</li>
                        <li>في حالة احتكار القلة من البائعين يكون كل بائع على علم تقريبًا برد فعل باقي البائعين.</li>
                        <li>في حالة احتكار القلة من المشترين يكون كل مشتري على علم تقريبًا برد فعل باقي المشترين.</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">ج - الاحتكار:</span> وهي السوق التي يكون فيها منتج واحد أو بائع واحد يتحكم في عرض السلعة وسعرها، أو يكون فيها
                      مشتري واحد يتحكم في طلب السلعة وسعرها.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* 2 - الأسعار */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mt-6">2 - الأسعار</h2>

              <h3 className="mt-3 font-semibold text-foreground">2 - 1 - تعريف السعر</h3>
              <p className="text-muted-foreground">يعرف سعر سلعة (خدمة) معينة بأنه التعبير النقدي عن قيمة هذه السلعة (الخدمة).</p>

              <h3 className="mt-3 font-semibold text-foreground">2 - 2 - العناصر المحددة للسعر</h3>

              {/* الطلب */}
              <h4 className="mt-2 font-medium text-foreground">2 - 2 - 1 - الطلب</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>
                  <span className="font-medium">تعريف الطلب:</span> يعرف الطلب على سلعة ما بأنه عبارة عن الكمية المطلوبة من هذه السلعة عند سعر معين في وحدة زمنية
                  معينة.
                </li>
                <li>
                  <span className="font-medium">قانون الطلب:</span> يعبر قانون الطلب عن العلاقة العكسية التي تربط بين الكمية المطلوبة من سلعة ما وسعرها.
                </li>
                <li>
                  <span className="font-medium">منحنى الطلب:</span> لتمثيل منحنى الطلب نخصص المحور العمودي لسعر السلعة، بينما يخصص المحور الأفقي للكميات المطلوبة
                  من السلعة. من الشكل البياني نلاحظ انحدار منحنى الطلب من اليسار نحو اليمين (ميل سالب) وهو يدل على العلاقة العكسية الموجودة بين السعر والطلب.
                </li>
                <li>
                  <span className="font-medium">العوامل المؤثرة في الطلب:</span>
                  <ul className="list-[circle] ps-6 mt-1 space-y-1">
                    <li>سعر السلعة المعنية.</li>
                    <li>أسعار السلع الأخرى المكملة والبديلة (المنافسة).</li>
                    <li>الدخل النقدي للمستهلك.</li>
                    <li>الأوضاع الاجتماعية والثقافية مثل العادات والتقاليد المؤثرة على أذواق المستهلكين.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">مرونة الطلب:</span> ثلاثة أنواع: مرونة الطلب السعرية، مرونة الطلب التقاطعية، مرونة الطلب الدخلية.
                </li>
              </ul>

              {/* مرونة الطلب السعرية */}
              <h5 className="mt-3 font-medium text-foreground">أ - مرونة الطلب السعرية</h5>
              <p className="text-muted-foreground">
                هي درجة استجابة الطلب على سلعة معينة للتغير الذي يطرأ على سعرها؛ أي درجة التغير النسبي للكمية المطلوبة نتيجة للتغير النسبي لسعرها.
                الصيغة: مرونة الطلب السعرية = التغير النسبي للكمية المطلوبة ÷ التغير النسبي للسعر.
              </p>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>إشارة المرونة سالبة (علاقة عكسية)، لذا تؤخذ بالقيمة المطلقة.</li>
                <li>حالات المرونة: أكبر من 1 (كثيرة المرونة) — أصغر من 1 (قليلة المرونة) — تساوي 1 (متكافئة) — تساوي 0 (عديمة).</li>
              </ul>

              <div className="mt-3">
                <p className="font-medium text-foreground">تطبيق عددي رقم 1</p>
                <div className="overflow-x-auto border border-border rounded-md mt-2">
                  <table className="min-w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-foreground">
                        <th className="px-3 py-2 text-right">السعر</th>
                        <th className="px-3 py-2 text-right">1</th>
                        <th className="px-3 py-2 text-right">2</th>
                        <th className="px-3 py-2 text-right">4</th>
                        <th className="px-3 py-2 text-right">5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-foreground">
                        <td className="px-3 py-2 font-medium">الكمية المطلوبة</td>
                        <td className="px-3 py-2">35</td>
                        <td className="px-3 py-2">25</td>
                        <td className="px-3 py-2">15</td>
                        <td className="px-3 py-2">12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground mt-2">
                  عند تغير السعر من 2 إلى 4: التغير النسبي للكمية = (15 - 25) ÷ 25 = -0.4، التغير النسبي للسعر = (4 - 2) ÷ 2 = 1،
                  إذن مرونة الطلب السعرية = -0.4 ÷ 1 = -0.4 ⇒ بالقيمة المطلقة 0.4 (طلب قليل المرونة).
                </p>
              </div>

              {/* مرونة الطلب التقاطعية */}
              <h5 className="mt-4 font-medium text-foreground">ب - مرونة الطلب التقاطعية</h5>
              <p className="text-muted-foreground">
                هي درجة استجابة الطلب على سلعة معينة للتغير في سعر سلعة أخرى بديلة أو مكملة. الصيغة: مرونة الطلب التقاطعية = التغير النسبي للكمية
                المطلوبة من سلعة ما ÷ التغير النسبي لسعر سلعة أخرى.
              </p>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>موجبة للسلعتين البديلتين.</li>
                <li>سالبة للسلعتين المتكاملتين.</li>
                <li>معدومة للسلعتين المستقلتين.</li>
              </ul>
              <div className="mt-3">
                <p className="font-medium text-foreground">تطبيق عددي رقم 2</p>
                <div className="overflow-x-auto border border-border rounded-md mt-2">
                  <table className="min-w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-foreground">
                        <th className="px-3 py-2 text-right">البيان</th>
                        <th className="px-3 py-2 text-right">السعر</th>
                        <th className="px-3 py-2 text-right">الكمية</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-foreground">
                        <td className="px-3 py-2">القهوة</td>
                        <td className="px-3 py-2">1</td>
                        <td className="px-3 py-2">4</td>
                      </tr>
                      <tr className="text-foreground">
                        <td className="px-3 py-2">الشاي</td>
                        <td className="px-3 py-2">2</td>
                        <td className="px-3 py-2">5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground mt-2">
                  إذا ارتفع سعر الشاي من 2 إلى 3 وأصبحت كميات القهوة 5 والشاي 3: مرونة الطلب التقاطعية للقهوة = 0.25 ÷ 0.5 = 0.5.
                </p>
              </div>

              {/* مرونة الطلب الدخلية */}
              <h5 className="mt-4 font-medium text-foreground">ج - مرونة الطلب الدخلية</h5>
              <p className="text-muted-foreground">
                هي درجة استجابة الطلب على سلعة للتغير الذي يطرأ على الدخل النقدي للمستهلك. الصيغة: مرونة الطلب الدخلية = التغير النسبي للكمية
                المطلوبة ÷ التغير النسبي للدخل.
              </p>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>إذا كانت سالبة ⇒ سلعة دنيا.</li>
                <li>إذا كانت موجبة ⇒ سلعة عادية: كمالية إذا &gt; 1، ضرورية إذا &lt; 1.</li>
              </ul>
              <div className="mt-3">
                <p className="font-medium text-foreground">تطبيق عددي رقم 3</p>
                <div className="overflow-x-auto border border-border rounded-md mt-2">
                  <table className="min-w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-foreground">
                        <th className="px-3 py-2 text-right">الدخل</th>
                        <th className="px-3 py-2 text-right">1200</th>
                        <th className="px-3 py-2 text-right">1600</th>
                        <th className="px-3 py-2 text-right">2000</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-foreground">
                        <td className="px-3 py-2 font-medium">الكمية المطلوبة</td>
                        <td className="px-3 py-2">10</td>
                        <td className="px-3 py-2">15</td>
                        <td className="px-3 py-2">18</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground mt-2">مرونة الطلب الدخلية = 0.5 ÷ 0.33 ≈ 1.51 ⇒ سلعة كمالية.</p>
              </div>

              {/* العرض */}
              <h4 className="mt-6 font-medium text-foreground">2 - 2 - 2 - العرض</h4>
              <ul className="list-disc ps-6 space-y-1 text-foreground">
                <li>
                  <span className="font-medium">تعريف العرض:</span> الكمية المعروضة من سلعة عند سعر معين في وحدة زمنية معينة.
                </li>
                <li>
                  <span className="font-medium">قانون العرض:</span> علاقة طردية بين الكمية المعروضة والسعر.
                </li>
                <li>
                  <span className="font-medium">منحنى العرض:</span> للمحور العمودي السعر وللأفقي الكميات المعروضة (ميل موجب).
                </li>
                <li>
                  <span className="font-medium">العوامل المؤثرة في العرض:</span>
                  <ul className="list-[circle] ps-6 mt-1 space-y-1">
                    <li>سعر السلعة المعنية.</li>
                    <li>أسعار السلع الأخرى المكملة والبديلة (المنافسة).</li>
                    <li>أسعار عوامل الإنتاج.</li>
                    <li>توقعات المنتجين.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">مرونة العرض:</span> مرونة العرض = التغير النسبي للكمية المعروضة ÷ التغير النسبي للسعر.
                </li>
              </ul>
              <ul className="list-disc ps-6 space-y-1 text-foreground mt-2">
                <li>إشارة المرونة موجبة (علاقة طردية).</li>
                <li>حالات المرونة: أكبر من 1 (كثير المرونة) — أصغر من 1 (قليل المرونة) — يساوي 1 (متكافئ) — يساوي 0 (عديم).</li>
              </ul>

              <div className="mt-3">
                <p className="font-medium text-foreground">تطبيق عددي رقم 4</p>
                <div className="overflow-x-auto border border-border rounded-md mt-2">
                  <table className="min-w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-foreground">
                        <th className="px-3 py-2 text-right">السعر</th>
                        <th className="px-3 py-2 text-right">1</th>
                        <th className="px-3 py-2 text-right">2</th>
                        <th className="px-3 py-2 text-right">4</th>
                        <th className="px-3 py-2 text-right">5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-foreground">
                        <td className="px-3 py-2 font-medium">الكمية المعروضة</td>
                        <td className="px-3 py-2">5</td>
                        <td className="px-3 py-2">14</td>
                        <td className="px-3 py-2">25</td>
                        <td className="px-3 py-2">28</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground mt-2">
                  عند تغير السعر من 4 إلى 5: مرونة العرض = 0.12 ÷ 0.25 = 0.48 ⇒ عرض قليل المرونة.
                </p>
              </div>

              {/* سعر التوازن */}
              <h3 className="mt-6 font-semibold text-foreground">2 - 3 - سعر التوازن</h3>
              <p className="text-muted-foreground">
                سعر التوازن هو ذلك السعر الذي يتحقق عنده التعادل بين الكمية المعروضة من سلعة ما مع الكمية المطلوبة من نفس السلعة. ويحدد سعر التوازن
                بيانياً عندما يتقاطع منحنى العرض مع منحنى الطلب.
              </p>
              <div className="mt-3">
                <p className="font-medium text-foreground">تطبيق عددي رقم 5</p>
                <div className="overflow-x-auto border border-border rounded-md mt-2">
                  <table className="min-w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-foreground">
                        <th className="px-3 py-2 text-right">السعر</th>
                        <th className="px-3 py-2 text-right">1</th>
                        <th className="px-3 py-2 text-right">2</th>
                        <th className="px-3 py-2 text-right">4</th>
                        <th className="px-3 py-2 text-right">5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-foreground">
                        <td className="px-3 py-2 font-medium">الكمية المطلوبة</td>
                        <td className="px-3 py-2">35</td>
                        <td className="px-3 py-2">25</td>
                        <td className="px-3 py-2">15</td>
                        <td className="px-3 py-2">12</td>
                      </tr>
                      <tr className="text-foreground">
                        <td className="px-3 py-2 font-medium">الكمية المعروضة</td>
                        <td className="px-3 py-2">5</td>
                        <td className="px-3 py-2">14</td>
                        <td className="px-3 py-2">25</td>
                        <td className="px-3 py-2">28</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground mt-2">سعر التوازن 3 وحدات نقدية، وكمية التوازن 20 وحدة.</p>
              </div>
            </section>
          </article>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketLesson;
