
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const PoliticalFiguresSection = () => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 w-8 h-8 rounded-full flex items-center justify-center mr-2">1</span>
        شخصيات سياسية
      </h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <Accordion type="single" collapsible className="w-full">
          {/* وودرو ويلسون */}
          <AccordionItem value="wilson" className="border-b border-gray-200 dark:border-gray-700">
            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center text-right w-full">
                <div className="ml-auto flex items-center">
                  <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                  <h3 className="text-lg font-semibold">وودرو ويلسون (1856-1924)</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-gray-700 dark:text-gray-300">
              <div className="pr-5 space-y-3">
                <p>الرئيس الثامن والعشرون للولايات المتحدة الأمريكية (1913-1921)، وهو سياسي وأكاديمي أمريكي. اشتهر بمبادئه الأربعة عشر التي قدمها في خطاب أمام الكونغرس الأمريكي في 8 يناير 1918 كأساس للسلام بعد الحرب العالمية الأولى.</p>
                
                <div>
                  <h4 className="font-bold mb-2">النقاط الرئيسية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>قاد الولايات المتحدة خلال الحرب العالمية الأولى (1914-1918).</li>
                    <li>طرح مبادئه الأربعة عشر كأساس للسلام العالمي بعد الحرب العالمية الأولى.</li>
                    <li>كان مؤيدًا لفكرة تقرير المصير للشعوب المستعمَرة.</li>
                    <li>دعا إلى إنشاء "عصبة الأمم" كمنظمة دولية لمنع الحروب في المستقبل.</li>
                    <li>حصل على جائزة نوبل للسلام عام 1919 تقديراً لجهوده في إنهاء الحرب.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">المبادئ الأربعة عشر:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>الدبلوماسية المفتوحة ونبذ المعاهدات السرية.</li>
                    <li>حرية الملاحة في البحار في أوقات السلم والحرب.</li>
                    <li>إزالة الحواجز الاقتصادية بين الدول.</li>
                    <li>تخفيض التسلح إلى الحد الأدنى المتوافق مع الأمن الداخلي.</li>
                    <li>تسوية النزاعات الاستعمارية مع مراعاة مصالح السكان المحليين.</li>
                    <li>حق الشعوب في تقرير مصيرها.</li>
                    <li>إنشاء منظمة دولية (عصبة الأمم) للحفاظ على السلام العالمي.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">تأثيره على النظام الدولي:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>ساهم في تغيير مفهوم العلاقات الدولية بعد الحرب العالمية الأولى.</li>
                    <li>أسس لمبدأ حق تقرير المصير للشعوب المستعمَرة.</li>
                    <li>قاد الجهود لإنشاء عصبة الأمم كأول منظمة دولية للأمن الجماعي.</li>
                    <li>أثّر على مبادئ ميثاق الأمم المتحدة لاحقاً.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* جمال عبد الناصر */}
          <AccordionItem value="nasser" className="border-b border-gray-200 dark:border-gray-700">
            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center text-right w-full">
                <div className="ml-auto flex items-center">
                  <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                  <h3 className="text-lg font-semibold">جمال عبد الناصر (1918-1970)</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-gray-700 dark:text-gray-300">
              <div className="pr-5 space-y-3">
                <p>ثاني رؤساء مصر وأحد أبرز الشخصيات السياسية في تاريخ العالم العربي الحديث. قاد ثورة 23 يوليو 1952 مع مجموعة من الضباط الأحرار، وتولى رئاسة مصر من 1954 إلى 1970.</p>
                
                <div>
                  <h4 className="font-bold mb-2">أهم إنجازاته:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>تأميم قناة السويس في 26 يوليو 1956، واسترجاع السيادة المصرية عليها.</li>
                    <li>قيادة مصر خلال العدوان الثلاثي (فرنسا، بريطانيا، إسرائيل) عام 1956.</li>
                    <li>تنفيذ الإصلاح الزراعي وإعادة توزيع الأراضي على الفلاحين.</li>
                    <li>بناء السد العالي الذي ساهم في تنظيم مياه النيل وتوليد الكهرباء.</li>
                    <li>تأسيس حركة عدم الانحياز مع تيتو ونهرو وسوكارنو.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">مواقفه من القضايا الدولية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>دعم حركات التحرر العربية والإفريقية، خاصة الثورة الجزائرية.</li>
                    <li>اتخاذ سياسة الحياد الإيجابي ورفض الأحلاف العسكرية خلال الحرب الباردة.</li>
                    <li>الدعوة إلى الوحدة العربية، وتحقيق الوحدة مع سوريا (1958-1961).</li>
                    <li>مساندة القضية الفلسطينية وتقديم الدعم للفلسطينيين.</li>
                    <li>رفض مشروع أيزنهاور (1957) الذي كان يهدف إلى توسيع النفوذ الأمريكي في المنطقة.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">دوره في الثورة الجزائرية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>قدم دعماً سياسياً ودبلوماسياً للثورة الجزائرية في المحافل الدولية.</li>
                    <li>سمح بإنشاء إذاعة "صوت الجزائر" من القاهرة.</li>
                    <li>قدم الدعم العسكري واللوجستي للثوار الجزائريين.</li>
                    <li>فتح مصر كملاذ آمن لقيادة الثورة الجزائرية.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* شارل ديغول */}
          <AccordionItem value="degaulle" className="border-b border-gray-200 dark:border-gray-700">
            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center text-right w-full">
                <div className="ml-auto flex items-center">
                  <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                  <h3 className="text-lg font-semibold">شارل ديغول (1890-1970)</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-gray-700 dark:text-gray-300">
              <div className="pr-5 space-y-3">
                <p>جنرال وسياسي فرنسي، قاد المقاومة الفرنسية خلال الاحتلال النازي في الحرب العالمية الثانية. أسس الجمهورية الفرنسية الخامسة، وكان رئيسًا لفرنسا من 1958 إلى 1969.</p>
                
                <div>
                  <h4 className="font-bold mb-2">خلفيته العسكرية والسياسية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>شارك في الحرب العالمية الأولى، وأسر من قبل الألمان.</li>
                    <li>قاد قوات فرنسا الحرة خلال الحرب العالمية الثانية بعد سقوط فرنسا عام 1940.</li>
                    <li>ترأس الحكومة الفرنسية المؤقتة بعد تحرير باريس (1944-1946).</li>
                    <li>عاد للسلطة عام 1958 خلال أزمة الجزائر، وأسس الجمهورية الخامسة.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">موقفه من الثورة الجزائرية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>عند توليه السلطة عام 1958، طرح مشروع "سلم الشجعان" وزار الجزائر معلناً "جزائر فرنسية".</li>
                    <li>تطور موقفه تدريجياً مع استمرار الثورة وتصاعد الضغط الدولي.</li>
                    <li>اقترح مشروع "الجزائر الجزائرية" ثم "مشروع قسنطينة" للتنمية الاقتصادية.</li>
                    <li>اعترف في خطاب 16 سبتمبر 1959 بحق تقرير المصير للشعب الجزائري.</li>
                    <li>واجه تمرد المنظمة العسكرية السرية (OAS) المعارضة لاستقلال الجزائر.</li>
                    <li>وقّع اتفاقيات إيفيان في 18 مارس 1962 التي مهدت لاستقلال الجزائر.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">سياسته الخارجية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>سعى لاستعادة مكانة فرنسا الدولية واستقلالها عن المعسكرين في الحرب الباردة.</li>
                    <li>طور القوة النووية الفرنسية ("قوة الردع").</li>
                    <li>انسحب من الهيكل العسكري لحلف الناتو عام 1966 مع بقاء فرنسا في الحلف.</li>
                    <li>عمل على تنمية العلاقات الفرنسية-الألمانية وتأسيس النواة الأولى للاتحاد الأوروبي.</li>
                    <li>عمل على تصفية الاستعمار الفرنسي في إفريقيا ومنح الاستقلال لمستعمرات فرنسية عديدة.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* هواري بومدين */}
          <AccordionItem value="boumediene" className="border-b border-gray-200 dark:border-gray-700">
            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center text-right w-full">
                <div className="ml-auto flex items-center">
                  <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                  <h3 className="text-lg font-semibold">هواري بومدين (1932-1978)</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-gray-700 dark:text-gray-300">
              <div className="pr-5 space-y-3">
                <p>قائد ثوري وسياسي جزائري، شغل منصب رئيس الجزائر من عام 1965 إلى 1978. اسمه الحقيقي محمد بوخروبة، وعرف بدوره في بناء الجزائر المستقلة وسياسته التنموية الشاملة.</p>
                
                <div>
                  <h4 className="font-bold mb-2">دوره في الثورة الجزائرية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>انضم للثورة الجزائرية في مرحلة مبكرة وتدرج في المناصب القيادية.</li>
                    <li>أصبح قائداً للولاية الخامسة التاريخية (1957-1958).</li>
                    <li>عين قائداً لهيئة الأركان العامة للجيش (1960-1962).</li>
                    <li>ساهم في تسوية أزمة صيف 1962 والخلافات بين قيادات الثورة.</li>
                    <li>شغل منصب وزير الدفاع في حكومة أحمد بن بلة (1962-1965).</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">رئاسته للجزائر:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>قاد التصحيح الثوري في 19 جوان 1965 وأطاح بنظام أحمد بن بلة.</li>
                    <li>أمّم المحروقات في 24 فيفري 1971 واسترجع السيادة الوطنية على الثروات الطبيعية.</li>
                    <li>طبق الثورة الزراعية سنة 1971 وأعاد توزيع الأراضي.</li>
                    <li>أطلق المخططات التنموية الرباعية وبنى القاعدة الصناعية للجزائر.</li>
                    <li>أنشأ الشركة الوطنية سوناطراك وطورها.</li>
                    <li>عمل على تعريب التعليم والإدارة وأطلق ميثاق 1976.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">دوره في السياسة الدولية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>كان من رواد حركة عدم الانحياز ودعم الحركات التحررية في العالم.</li>
                    <li>دعا إلى نظام اقتصادي عالمي جديد في خطابه الشهير بالأمم المتحدة (أبريل 1974).</li>
                    <li>ساهم في تأسيس منظمة الوحدة الإفريقية والدفاع عن قضايا القارة.</li>
                    <li>دعم القضية الفلسطينية ووقف إلى جانب الدول العربية في حرب أكتوبر 1973.</li>
                    <li>عمل على تحقيق المصالحة بين البلدان المغاربية وحل النزاعات الحدودية.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* محمد الخامس */}
          <AccordionItem value="mohamed5" className="border-b border-gray-200 dark:border-gray-700">
            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center text-right w-full">
                <div className="ml-auto flex items-center">
                  <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                  <h3 className="text-lg font-semibold">محمد الخامس (1909-1961)</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-gray-700 dark:text-gray-300">
              <div className="pr-5 space-y-3">
                <p>سلطان ثم ملك المغرب، قاد النضال الوطني المغربي ضد الاستعمار الفرنسي والإسباني. ارتبط اسمه بمقاومة الاستعمار وتحقيق استقلال المغرب.</p>
                
                <div>
                  <h4 className="font-bold mb-2">دوره في الحركة الوطنية المغربية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>تولى العرش سنة 1927 في سن 18 عاماً، وكان في البداية تحت تأثير سلطات الحماية الفرنسية.</li>
                    <li>تدرج موقفه ليصبح رمزاً للمقاومة الوطنية المغربية بعد الحرب العالمية الثانية.</li>
                    <li>رفض التوقيع على قرارات سلطات الحماية الفرنسية المجحفة في حق المغرب.</li>
                    <li>تبنى مطالب الحركة الوطنية المغربية ودعا للاستقلال.</li>
                    <li>ألقى خطاب طنجة التاريخي سنة 1947 الذي أكد فيه على وحدة المغرب العربي.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">نفيه وعودته:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>نفي من طرف السلطات الفرنسية في 20 أغسطس 1953 إلى كورسيكا ثم مدغشقر.</li>
                    <li>أدى نفيه إلى تصاعد المقاومة المسلحة في المغرب وتوحد الشعب المغربي.</li>
                    <li>اضطرت فرنسا للتفاوض معه وإعادته للمغرب في نوفمبر 1955.</li>
                    <li>وقع إعلان لاسيل سانت كلود الذي يقر بمبدأ استقلال المغرب.</li>
                    <li>أعلن استقلال المغرب رسمياً في 2 مارس 1956.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">دوره بعد الاستقلال:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>قاد بناء المغرب المستقل وأسس مؤسساته الوطنية.</li>
                    <li>أسس الجيش الملكي المغربي عام 1956.</li>
                    <li>دعم حركات التحرر في شمال إفريقيا، خاصة الثورة الجزائرية.</li>
                    <li>ساهم في تأسيس اتحاد المغرب العربي والعمل المغاربي المشترك.</li>
                    <li>توفي في 26 فبراير 1961 وخلفه ابنه الحسن الثاني.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">دعمه للثورة الجزائرية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>فتح المغرب كقاعدة خلفية للثورة الجزائرية وقدم الدعم اللوجستي للثوار.</li>
                    <li>سمح بإنشاء مكاتب جبهة التحرير الوطني في المغرب.</li>
                    <li>دعم القضية الجزائرية سياسياً ودبلوماسياً.</li>
                    <li>المساهمة في تدويل القضية الجزائرية ومساندتها في المحافل الدولية.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* أحمد بن بلة */}
          <AccordionItem value="benbella" className="border-b border-gray-200 dark:border-gray-700">
            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center text-right w-full">
                <div className="ml-auto flex items-center">
                  <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                  <h3 className="text-lg font-semibold">أحمد بن بلة (1916-2012)</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-gray-700 dark:text-gray-300">
              <div className="pr-5 space-y-3">
                <p>أول رئيس للجزائر المستقلة (1962-1965)، ومن أبرز قادة الثورة الجزائرية. كان أحد مؤسسي جبهة التحرير الوطني والمنظمة الخاصة.</p>
                
                <div>
                  <h4 className="font-bold mb-2">دوره في الثورة الجزائرية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>كان عضواً في المنظمة الخاصة للحركة من أجل انتصار الحريات الديمقراطية.</li>
                    <li>أحد مؤسسي اللجنة الثورية للوحدة والعمل (CRUA) التي أصبحت لاحقاً جبهة التحرير الوطني.</li>
                    <li>أحد أعضاء مجموعة الـ22 التاريخية التي قررت تفجير الثورة.</li>
                    <li>كان من "التاريخيين الستة" الذين اختطفتهم فرنسا في 22 أكتوبر 1956 عند اختطاف طائرتهم.</li>
                    <li>ظل معتقلاً في السجون الفرنسية حتى وقف إطلاق النار (1962).</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">رئاسته للجزائر:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>انتخب أول رئيس للجمهورية الجزائرية في سبتمبر 1962.</li>
                    <li>تبنى النهج الاشتراكي في التنمية والتسيير الذاتي للمؤسسات.</li>
                    <li>أطلق مشاريع التصنيع والإصلاح الزراعي والتعليم المجاني.</li>
                    <li>وضع أول دستور للجزائر المستقلة عام 1963.</li>
                    <li>أطيح به في 19 جوان 1965 في انقلاب قاده هواري بومدين.</li>
                    <li>بقي معتقلاً حتى 1979، ثم أُطلق سراحه وعاش في المنفى قبل أن يعود للجزائر عام 1990.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">مواقفه السياسية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>كان من دعاة القومية العربية والوحدة المغاربية.</li>
                    <li>أيد حركات التحرر في إفريقيا وآسيا.</li>
                    <li>كان من رواد حركة عدم الانحياز ومؤيدي العالم الثالث.</li>
                    <li>دافع عن القضية الفلسطينية وقضايا التحرر العالمية.</li>
                    <li>اتخذ مواقف مناهضة للإمبريالية والاستعمار.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* الحبيب بورقيبة */}
          <AccordionItem value="bourguiba" className="border-b border-gray-200 dark:border-gray-700">
            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center text-right w-full">
                <div className="ml-auto flex items-center">
                  <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">7</span>
                  <h3 className="text-lg font-semibold">الحبيب بورقيبة (1903-2000)</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-gray-700 dark:text-gray-300">
              <div className="pr-5 space-y-3">
                <p>أول رئيس لتونس المستقلة (1957-1987). زعيم الحركة الوطنية التونسية ومؤسس الحزب الدستوري الجديد. عرف بلقب "المجاهد الأكبر" لدوره في نضال تونس من أجل الاستقلال.</p>
                
                <div>
                  <h4 className="font-bold mb-2">نضاله ضد الاستعمار:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>انضم للحزب الدستوري التونسي في العشرينيات وأصبح من قياداته.</li>
                    <li>أسس صحيفة "العمل" كمنبر للحركة الوطنية التونسية.</li>
                    <li>اعتقل عدة مرات من قبل السلطات الاستعمارية الفرنسية.</li>
                    <li>أسس الحزب الدستوري الجديد عام 1934 بعد انشقاقه عن الحزب الدستوري القديم.</li>
                    <li>قاد الكفاح السياسي والدبلوماسي لتحرير تونس.</li>
                    <li>تفاوض مع فرنسا حول استقلال تونس وحصل على الحكم الذاتي (1955) ثم الاستقلال الكامل (1956).</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">بناء الدولة التونسية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>أعلن الجمهورية التونسية في 25 يوليو 1957 وألغى النظام الملكي.</li>
                    <li>تبنى سياسات تحديثية في التعليم والصحة وحقوق المرأة.</li>
                    <li>أصدر مجلة الأحوال الشخصية التي منعت تعدد الزوجات وأقرت المساواة بين الرجل والمرأة.</li>
                    <li>شجع التعليم الإلزامي ومجانيته وتحديث الاقتصاد التونسي.</li>
                    <li>اتبع سياسة التونسة لمختلف القطاعات واستعادة الأراضي من المعمرين.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">مواقفه السياسية الخارجية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>تبنى سياسة خارجية براغماتية منفتحة على الغرب مع الحفاظ على استقلالية القرار.</li>
                    <li>دعم فكرة الوحدة المغاربية والتكامل الإقليمي.</li>
                    <li>كان له موقف متحفظ من القومية العربية في نسختها الناصرية.</li>
                    <li>ساند القضية الفلسطينية مع تبني خط معتدل.</li>
                    <li>تحفظ على أسلوب الكفاح المسلح للثورة الجزائرية في بداياتها قبل أن يدعمها لاحقاً.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">نهاية حكمه:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>تحول نظامه تدريجياً نحو الحكم الفردي ونظام الحزب الواحد.</li>
                    <li>واجه اضطرابات اقتصادية واجتماعية في الثمانينات.</li>
                    <li>أُزيح من السلطة في "انقلاب طبي" قاده زين العابدين بن علي في 7 نوفمبر 1987.</li>
                    <li>بقي تحت الإقامة الجبرية في منزله حتى وفاته عام 2000.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* فرحات عباس */}
          <AccordionItem value="abbes" className="border-b border-gray-200 dark:border-gray-700">
            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center text-right w-full">
                <div className="ml-auto flex items-center">
                  <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">8</span>
                  <h3 className="text-lg font-semibold">فرحات عباس (1899-1985)</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-gray-700 dark:text-gray-300">
              <div className="pr-5 space-y-3">
                <p>سياسي جزائري ورئيس أول حكومة مؤقتة للجمهورية الجزائرية (1958-1961) خلال الثورة الجزائرية. يعتبر من رموز النضال السياسي الجزائري ضد الاستعمار الفرنسي.</p>
                
                <div>
                  <h4 className="font-bold mb-2">مساره السياسي قبل الثورة:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>بدأ نشاطه السياسي في العشرينيات مؤمناً بفكرة الاندماج مع فرنسا ومنح الجزائريين الحقوق المدنية.</li>
                    <li>اشتهر بمقولته في 1936: "لو كنت وجدت الأمة الجزائرية لكنت وطنياً"، قبل أن يتحول لاحقاً للمطالبة بالاستقلال.</li>
                    <li>أسس حركة "أحباب البيان والحرية" بعد الحرب العالمية الثانية.</li>
                    <li>أسس حزب "الاتحاد الديمقراطي للبيان الجزائري" عام 1946.</li>
                    <li>دعا إلى قيام جمهورية جزائرية متحدة مع فرنسا قبل أن يتطور موقفه نحو الاستقلال التام.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">دوره في الثورة الجزائرية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>انضم رسمياً إلى جبهة التحرير الوطني في أبريل 1956 بعد اقتناعه بأن الاستقلال هو الحل الوحيد.</li>
                    <li>عين رئيساً للحكومة المؤقتة للجمهورية الجزائرية (GPRA) في سبتمبر 1958.</li>
                    <li>قاد الجهود الدبلوماسية للثورة الجزائرية وسعى لكسب التأييد الدولي.</li>
                    <li>حصل على اعتراف العديد من الدول بالحكومة المؤقتة.</li>
                    <li>شارك في المراحل الأولى من مفاوضات إيفيان مع فرنسا.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">دوره بعد الاستقلال:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>عارض بعض التوجهات السياسية في الجزائر المستقلة.</li>
                    <li>عارض الانقلاب العسكري في 1965 الذي قاده هواري بومدين.</li>
                    <li>انتقد النظام السياسي أحادي الحزب والتوجه الاشتراكي في الجزائر.</li>
                    <li>دعا للديمقراطية والتعددية السياسية وحقوق الإنسان.</li>
                    <li>كتب مذكراته "ليل الاستعمار" التي وثق فيها مراحل النضال الجزائري.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">إسهاماته الفكرية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>أكد على دور الثقافة والتعليم في بناء الدولة الحديثة.</li>
                    <li>دافع عن فكرة الدولة المدنية الديمقراطية ورفض التطرف.</li>
                    <li>طرح رؤية متوازنة للعلاقة بين الأصالة والمعاصرة.</li>
                    <li>دعا إلى التعايش بين مختلف التيارات السياسية والثقافية.</li>
                    <li>مثل تياراً وسطياً وعقلانياً في الفكر السياسي الجزائري.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* جوزيف ستالين */}
          <AccordionItem value="stalin" className="border-b border-gray-200 dark:border-gray-700">
            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center text-right w-full">
                <div className="ml-auto flex items-center">
                  <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">9</span>
                  <h3 className="text-lg font-semibold">جوزيف ستالين (1878-1953)</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-gray-700 dark:text-gray-300">
              <div className="pr-5 space-y-3">
                <p>زعيم الاتحاد السوفييتي من 1924 حتى وفاته عام 1953. قاد الاتحاد السوفييتي خلال فترة التصنيع السريع، والحرب العالمية الثانية، وبداية الحرب الباردة.</p>
                
                <div>
                  <h4 className="font-bold mb-2">وصوله إلى السلطة:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>انضم إلى الحزب البلشفي بقيادة لينين وشارك في الثورة البلشفية عام 1917.</li>
                    <li>تولى منصب الأمين العام للحزب الشيوعي عام 1922.</li>
                    <li>بعد وفاة لينين عام 1924، تغلب على منافسيه في صراع على السلطة.</li>
                    <li>أقصى معارضيه، بما فيهم ليون تروتسكي، وانفرد بالسلطة بحلول أواخر العشرينيات.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">التصنيع والتحولات الاقتصادية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>أطلق خطط التصنيع الخمسية السريعة لتحويل الاتحاد السوفييتي إلى قوة صناعية.</li>
                    <li>فرض تجميع المزارع في مزارع جماعية (الكولخوز)، مما أدى إلى مجاعة واسعة.</li>
                    <li>حول الاتحاد السوفييتي من دولة زراعية متخلفة إلى قوة صناعية كبرى.</li>
                    <li>تسببت سياساته في مقتل الملايين من المزارعين والمعارضين.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">دوره في الحرب العالمية الثانية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>وقع اتفاقية عدم اعتداء مع النازيين (ميثاق مولوتوف-ريبنتروب) في 1939.</li>
                    <li>فوجئ بالغزو النازي للاتحاد السوفييتي في يونيو 1941.</li>
                    <li>قاد المقاومة السوفييتية ضد الغزو النازي في ما يسمى "الحرب الوطنية العظمى".</li>
                    <li>تحالف مع الولايات المتحدة وبريطانيا ضمن قوات الحلفاء.</li>
                    <li>كان له دور محوري في هزيمة ألمانيا النازية على الجبهة الشرقية.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">سياسته الخارجية بعد الحرب العالمية الثانية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>أسس المعسكر الاشتراكي في أوروبا الشرقية.</li>
                    <li>خاض الحرب الباردة ضد الولايات المتحدة وحلفائها.</li>
                    <li>طور القدرات النووية السوفييتية لموازنة القوة الأمريكية.</li>
                    <li>دعم الثورة الشيوعية في الصين وكوريا الشمالية.</li>
                    <li>وضع أساس سياسة المواجهة مع الغرب التي استمرت طوال فترة الحرب الباردة.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* هاري ترومان */}
          <AccordionItem value="truman" className="border-b border-gray-200 dark:border-gray-700">
            <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center text-right w-full">
                <div className="ml-auto flex items-center">
                  <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-3 text-sm">10</span>
                  <h3 className="text-lg font-semibold">هاري ترومان (1884-1972)</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 text-gray-700 dark:text-gray-300">
              <div className="pr-5 space-y-3">
                <p>الرئيس الثالث والثلاثون للولايات المتحدة الأمريكية (1945-1953). تولى الرئاسة بعد وفاة روزفلت في أبريل 1945، وقاد الولايات المتحدة في نهاية الحرب العالمية الثانية وبداية الحرب الباردة.</p>
                
                <div>
                  <h4 className="font-bold mb-2">دوره في نهاية الحرب العالمية الثانية:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>اتخذ قرار إلقاء القنبلتين الذريتين على هيروشيما وناغازاكي في أغسطس 1945.</li>
                    <li>شارك في مؤتمر بوتسدام مع تشرشل وستالين لتحديد مصير ألمانيا المهزومة.</li>
                    <li>أشرف على بداية احتلال اليابان وإعادة إعمارها بعد الحرب.</li>
                    <li>دعم إنشاء الأمم المتحدة كمنظمة دولية لحفظ السلام.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">سياسته في بداية الحرب الباردة:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>أعلن "مبدأ ترومان" عام 1947 الذي تعهد بتقديم الدعم للدول التي تواجه التهديد الشيوعي.</li>
                    <li>أطلق "خطة مارشال" لإعادة إعمار أوروبا الغربية بعد الحرب.</li>
                    <li>أسس حلف شمال الأطلسي (الناتو) عام 1949 كتحالف عسكري ضد النفوذ السوفييتي.</li>
                    <li>واجه الأزمة البرلينية (1948-1949) وأمر بإقامة جسر جوي لتزويد برلين الغربية بالإمدادات.</li>
                    <li>قاد الولايات المتحدة خلال الحرب الكورية (1950-1953) لمواجهة انتشار الشيوعية في شرق آسيا.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">سياسته تجاه الشرق الأوسط:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>كان أول رئيس أمريكي يعترف بدولة إسرائيل عام 1948.</li>
                    <li>دعم الاستقرار في المنطقة لضمان تدفق النفط إلى الغرب.</li>
                    <li>بدأ العلاقات الاستراتيجية مع المملكة العربية السعودية.</li>
                    <li>تدخل في أزمة إيران النفطية وساهم في الإطاحة بحكومة مصدق.</li>
                    <li>حاول موازنة الدعم لإسرائيل مع الحفاظ على العلاقات مع الدول العربية.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">إرثه السياسي:</h4>
                  <ul className="list-disc list-inside space-y-1 pr-4">
                    <li>أسس سياسة "الاحتواء" للحد من التوسع السوفييتي.</li>
                    <li>وضع أسس النظام الدولي لفترة ما بعد الحرب العالمية الثانية.</li>
                    <li>ساهم في إعادة هيكلة الاقتصاد العالمي من خلال مؤسسات بريتون وودز.</li>
                    <li>بدأ عملية تحديث القوات المسلحة الأمريكية وأسس وكالة المخابرات المركزية (CIA).</li>
                    <li>شكلت قراراته هيكل السياسة الأمريكية الخارجية طوال فترة الحرب الباردة.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default PoliticalFiguresSection;
