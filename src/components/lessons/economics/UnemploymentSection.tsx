
import React from 'react';
import { Separator } from "@/components/ui/separator";

const UnemploymentSection = () => {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">1- تعريف البطالة:</h2>
        <p className="leading-7 text-justify">
          تعرف البطالة حسب تعريف المكتب الدولي للعمل أن البطال هو كل شخص يقدر على العمل، ويرغب فيه، ويبحث عنه، ويقبله عند مستوى الأجر السائد، ولكن دون جدوى.
        </p>
        <p className="leading-7 text-justify mt-4">
          من التعريف السابق نستنتج أن هناك عدد من الصفات يجب أن تتوفر في الفرد حتى يعتبر بطالاً وهذه الصفات هي:
        </p>
        <ul className="list-disc mr-8 mt-2 space-y-1">
          <li>أن يكون قادرا على العمل.</li>
          <li>يرغب في العمل.</li>
          <li>يبحث عن العمل.</li>
          <li>أن يقبل العمل عند مستوى الأجر السائد.</li>
          <li>لم يجد العمل الملائم.</li>
        </ul>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">2- أسباب البطالة:</h2>
        <p className="leading-7 text-justify">
          أسباب البطالة متعددة، تختلف من مجتمع إلى آخر، نذكر منها:
        </p>
        <ul className="list-disc mr-8 mt-2 space-y-1">
          <li>التباين المستمر والمتنامي بين معدل النمو السكاني ومعدل النمو الاقتصادي.</li>
          <li>قلة الاستثمارات تؤدي إلى عدم فتح مناصب شغل كافية لمجابهة عرض العمل المتزايد.</li>
          <li>حالة الكساد (عرض المنتجات أكبر من الطلب عليها) تؤدي إلى غلق بعض المصانع وتسريح العمال.</li>
          <li>إعادة هيكلة المؤسسات الاقتصادية يؤدي إلى تسريح عدد من العمال الذين لا تتوافق مؤهلاتهم مع احتياجات المؤسسة، أو الذين لا يقبلون تغيير مكان عملهم.</li>
          <li>التطور التقني يؤدي إلى زيادة استخدام الآلات بكثافة عوضا عن العمال الأمر الذي يؤدي إلى الاستغناء عن بعضهم.</li>
          <li>فشل بعض السياسات التنموية المنتهجة.</li>
          <li>تفاقم المديونية الخارجية التي تؤثر على حجم الاستثمارات.</li>
        </ul>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">3- أنواع البطالة:</h2>
        <p className="leading-7 text-justify">
          للبطالة أنواع متعددة نذكر منها:
        </p>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">البطالة الدورية:</h3>
          <p className="leading-7 text-justify">
            يمر النشاط الاقتصادي في ظل اقتصاد السوق بفترات صعود وهبوط بصفة دورية. تسمى فترة الصعود بمرحلة الانتعاش (الرواج) وتسمى فترة الهبوط بمرحلة الانكماش (الكساد)، ويطلق على المرحلتين معا مصطلح (الدورة الاقتصادية).
          </p>
          <p className="leading-7 text-justify mt-3">
            ففي مرحلة الانتعاش نقترب من حالة التشغيل الكامل، وفي ذروة الانتعاش تكون البطالة في أدنى مستوياتها. وبعد ذلك ندخل مرحلة الهبوط أي مرحلة الانكماش، وفي بداية هذه المرحلة يكون عرض المنتجات أكبر من الطلب عليها فيضطر أرباب العمل إلى تخفيض الإنتاج الأمر الذي يؤدي إلى تسريح بعض العمال الذين يصبحون في تعداد البطالين، وتزداد البطالة حدة كلما انتقلنا نحو الأسفل إلى أن نصل إلى قاع الانكماش الذي تكون عنده البطالة في أعلى مستوياتها. وبعدها تبدأ مرحلة الانتعاش من جديد.
          </p>
          
          <div className="flex justify-center mt-4">
            <div className="max-w-md p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-center mb-3 font-bold">دورة اقتصادية نموذجية</div>
              <div className="h-60 relative border-b border-l border-gray-400">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-blue-500"></div>
                  <div className="absolute top-3/4 left-0 w-full border-t border-dashed border-red-500"></div>
                  
                  <div className="absolute top-0 left-1/4 h-full border-l border-dashed border-gray-400"></div>
                  <div className="absolute top-0 left-3/4 h-full border-l border-dashed border-gray-400"></div>
                  
                  <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                    <div className="w-5/6 h-24">
                      <svg viewBox="0 0 100 30" className="w-full h-full">
                        <path d="M0,15 Q25,5 50,15 Q75,25 100,15" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-600 dark:text-blue-400" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 text-xs">ذروة الانكماش</div>
                  <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 text-xs">مرحلة الانتعاش</div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs">ذروة الانتعاش</div>
                  <div className="absolute bottom-0 left-3/4 transform -translate-x-1/2 text-xs">مرحلة الانكماش</div>
                  <div className="absolute bottom-0 right-0 transform -translate-x-full text-xs">ذروة الانكماش</div>
                  
                  <div className="absolute top-0 right-0 transform translate-y-2 -translate-x-2 text-xs">الناتج</div>
                  <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-6 text-xs">السنوات</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">البطالة الاحتكاكية:</h3>
          <p className="leading-7 text-justify">
            تظهر البطالة الاحتكاكية خلال فترة تنقلات الأفراد بين المهن والمناطق المختلفة، والسبب في ذلك يرجع إلى نقص المعلومات المتعلقة بعرض العمل والطلب عليه خلال نفس الفترة، وكلما توفرت هذه المعلومات ينقص مستوى هذا النوع من البطالة.
          </p>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">البطالة الهيكلية:</h3>
          <p className="leading-7 text-justify">
            تظهر البطالة الهيكلية نتيجة للتغيرات الهيكلية في بنية الاقتصاد الوطني، والتي تؤدي إلى عدم التوافق بين فرص العمل المتوفرة وبين مؤهلات وخبرات الباحثين عن العمل. هذه التغيرات الهيكلية قد ترجع إلى التغير في هيكل الطلب على بعض المنتجات، أو التغير الهيكلي في سوق العمل، أو التغير في التكنولوجيا المستخدمة.
          </p>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">البطالة الفنية (التقنية):</h3>
          <p className="leading-7 text-justify">
            تظهر البطالة الفنية نتيجة لتعطل سير الإنتاج بسبب التعطل المفاجئ للآلات أو التذبذب في التموين بالمواد الأولية.. الخ.
          </p>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">البطالة الجزئية:</h3>
          <p className="leading-7 text-justify">
            في بعض الأحيان تقدم المؤسسة لسبب ما على تخفيض الإنتاج بصفة مؤقتة، فتقوم بتخفيض عدد ساعات العمل لكل عامل مقابل تخفيض نسبة الأجر، وفي هذه الحالة تظهر البطالة الجزئية.
          </p>
        </div>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">4- آثار البطالة:</h2>
        <p className="leading-7 text-justify">
          للبطالة آثار متعددة اقتصادية واجتماعية بل وحتى سياسية:
        </p>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">4-1- آثار البطالة الاقتصادية:</h3>
          <p className="leading-7 text-justify">
            للبطالة آثار اقتصادية متعددة، نقتصر على ذكر ما يلي:
          </p>
          
          <div className="mr-6 space-y-4 mt-3">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">ضعف الإنتاج:</h4>
              <p className="leading-7 text-justify">
                عندما تقوم المؤسسات الاقتصادية التي تعتمد بشكل كبير على العمل بتسريح عدد من العمال فإن ذلك يؤدي إلى انخفاض في حجم الإنتاج.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">ضعف الاستهلاك:</h4>
              <p className="leading-7 text-justify">
                البطالة تؤدي إلى ضعف القدرة الشرائية لفئة البطالين، وكلما زادت البطالة كلما ضعف الاستهلاك على المستوى الوطني، وبتفاقم هذه الظاهرة نصل إلى الكساد.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">4-2- آثار البطالة الاجتماعية:</h3>
          <p className="leading-7 text-justify">
            للبطالة آثار اجتماعية متعددة، نقتصر على ذكر ما يلي:
          </p>
          
          <div className="mr-6 space-y-4 mt-3">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">تفشي الآفات الاجتماعية:</h4>
              <p className="leading-7 text-justify">
                تؤدي إلى ظهور فئة من الناس عديمي الدخل الأمر الذي يؤدي إلى فقرهم وانزواء البعض منهم وشعورهم بفقدان كرامتهم نتيجة استمرارهم في الاعتماد على أسرهم وانحدارهم مع أسرهم إلى هوة الفقر، أو دخول البعض في صراعات أسرية قد تؤدي إلى تدمير الأسرة، وظهور المحسوبية والتمييز بين أبناء الوطن الواحد وفقا لفئاتهم الاجتماعية وعلاقات ذويهم بأصحاب النفوذ، وتفشي ظاهرة السرقة والانحلال الخلقي والمتاجرة في الممنوعات.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">الهجرة:</h4>
              <p className="leading-7 text-justify">
                وكنتيجة للبطالة والفقر يقوم البعض بالهجرة إلى الخارج بغية العمل حتى ولو كانت بشروط غير لائقة أو مهينة وفي ظروف أقرب للعبودية. وبلا شك فإن للهجرة آثارا نفسية واجتماعية سيئة على المهاجر وعلى ذويه.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">4-3- آثار البطالة السياسية:</h3>
          <p className="leading-7 text-justify">
            كنتيجة للبطالة يقوم البطالون والمهددون بالتسريح من العمل بالاحتجاجات والمظاهرات للمطالبة بتحسين وضعيتهم.
          </p>
        </div>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">5- إجراءات التخفيف من البطالة:</h2>
        <p className="leading-7 text-justify">
          للتخفيف من حدة البطالة تقوم الدولة ببعض الإجراءات نذكر منها:
        </p>
        <ul className="list-disc mr-8 mt-2 space-y-1">
          <li>تشجيع الاستثمارات الوطنية والأجنبية عن طريق منحهم بعض الامتيازات المادية والمالية لحثهم على فتح مناصب شغل جديدة.</li>
          <li>إتباع سياسة تخفيض ساعات العمل مع المحافظة على نفس الأجر من جهة، وتشجيع التقاعد المسبق من جهة أخرى، بهدف خلق مناصب شغل إضافية.</li>
          <li>إنشاء صندوق التأمين على البطالة لتقديم منح للبطالين لتأمين الحد الأدنى من القدرة الشرائية.</li>
        </ul>
      </section>
    </div>
  );
};

export default UnemploymentSection;
