
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, BookOpen, DollarSign, Banknote, Coins } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Lessons() {
  const { subjectId } = useParams<{ subjectId: string }>();
  
  // Get subject name from the subjects object in Subject.tsx
  const getSubjectName = () => {
    const subjects: Record<string, { name: string, color: string }> = {
      'accounting': { name: 'المحاسبة', color: '#10B981' },
      'economics': { name: 'الإقتصاد', color: '#3B82F6' },
      'mathematics': { name: 'الرياضيات', color: '#EF4444' },
      'history': { name: 'التاريخ والجغرافيا', color: '#F97316' },
      'arabic': { name: 'اللغة العربية', color: '#6366F1' },
      'french': { name: 'اللغة الفرنسية', color: '#EC4899' },
      'amazigh': { name: 'اللغة الأمازيغية', color: '#8B5CF6' },
      'english': { name: 'اللغة الإنجليزية', color: '#0EA5E9' },
      'islamic': { name: 'العلوم الإسلامية', color: '#14B8A6' },
      'philosophy': { name: 'الفلسفة', color: '#9333EA' },
      'law': { name: 'القانون', color: '#F59E0B' }
    };
    
    return subjectId && subjectId in subjects ? subjects[subjectId].name : 'المادة';
  };

  // Display economics lesson about money if we're on the economics subject page
  const renderEconomicsLesson = () => {
    if (subjectId !== 'economics') {
      return null;
    }

    return (
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800">
            <div className="flex items-center">
              <div className="bg-blue-500 p-2 rounded-full mr-3">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-blue-800 dark:text-blue-300">الوحدة الأولى: النقود</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="prose dark:prose-invert max-w-none leading-relaxed">
              {/* Table of Contents */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-bold mb-3">فهرس المحتويات:</h3>
                <ul className="list-disc list-inside space-y-1 pr-4">
                  <li>1. المبادلة
                    <ul className="list-inside pr-5 space-y-1 mt-1">
                      <li>1-1. تعريف المبادلة</li>
                      <li>1-2. أشكال المبادلة</li>
                    </ul>
                  </li>
                  <li className="mt-2">2. النقود
                    <ul className="list-inside pr-5 space-y-1 mt-1">
                      <li>2-1. تعريف النقود</li>
                      <li>2-2. خصائص النقود</li>
                      <li>2-3. وظائف النقود</li>
                      <li>2-4. أشكال النقود</li>
                      <li>2-5. إصدار النقود</li>
                      <li>2-6. الكتلة النقدية</li>
                      <li>2-7. التوازن النقدي</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Lesson Content */}
              <section>
                <h2 className="text-xl font-bold mb-3 flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 w-8 h-8 rounded-full flex items-center justify-center mr-2">1</span>
                  المبادلة
                </h2>
                <p className="mb-4">كان النشاط الاقتصادي في المجتمعات البدائية يتم بغرض الاستهلاك الذاتي. وبتطور المجتمعات ظهر تقسيم العمل في مرحلته الأولى، وكنتيجة لهذا التقسيم ظهر الفائض في الإنتاج، مما أدى إلى ظهور الحاجة إلى مبادلته. فما المقصود بالمبادلة؟ وما هي أشكالها؟</p>
                
                <div className="pr-4 mb-6">
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">1-1</span>
                    تعريف المبادلة
                  </h3>
                  <p className="mb-4">المبادلة هي عملية التنازل عن شيء مقابل الحصول على شيء آخر، وهي بمثابة همزة الوصل التي تربط بين منتج السلعة ومستهلكها. كما يمكن أن تتم هذه العملية من خلال وسطاء (تجار الجملة وتجار التجزئة).</p>
                
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">1-2</span>
                    أشكال المبادلة
                  </h3>
                  
                  <div className="mb-4 pr-4">
                    <h4 className="font-bold mb-2">أ - المقايضة:</h4>
                    <p className="mb-2"><strong>تعريف المقايضة:</strong> المقايضة هي أول شكل من أشكال المبادلة، وهي تعني مبادلة سلعة بسلعة أو خدمة بخدمة أو سلعة بخدمة، وذلك بدون استخدام النقود (سلعة بسلعة).</p>
                    
                    <p className="mb-2"><strong>عيوب المقايضة:</strong> للمقايضة مجموعة من العيوب نوجزها في ما يلي:</p>
                    <ul className="list-disc list-inside pr-5 mb-4">
                      <li>صعوبة توافر التوافق المتبادل بين الطرفين، أي صعوبة إيجاد شخصن يرغب كل منهما في سلعة الآخر.</li>
                      <li>صعوبة تجزئة بعض السلع التي لا تقبل التجزئة من حيث طبيعتها أو حجمها مثل الماشية.</li>
                      <li>صعوبة وجود معدل موحد للتبادل بين سلعة وأخرى.</li>
                      <li>عدم امكانية مقايضة الخدمات بالسلع.</li>
                      <li>إن المقايضة لا تسمح بالادخار وذلك أن المخزون السلعي يتطلب تكلفة لتخزينه من جهة، وهو معرض للتلف والضياع من جهة ثانية.</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4 pr-4">
                    <h4 className="font-bold mb-2">ب - المبادلة بواسطة النقود:</h4>
                    <p>هي استخدام النقود كوسيط في عملية التبادل (سلعة – نقود – سلعة). وتجدر الإشارة بأن هذه العملية قد مرت بعدة مراحل، ففي المرحلة الأولى استخدمت بعض السلع مثل الملح والجلود كوسيط للمبادلة للتغلب على بعض عيوب المقايضة، ثم في مرحلة لاحقة تم استخدام النقود المعدنية، وبعد ذلك ظهرت تدريجيا أشكال أخرى للنقود سنتطرق إليها لاحقا.</p>
                  </div>
                </div>
              </section>
              
              <section className="mt-8">
                <h2 className="text-xl font-bold mb-3 flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 w-8 h-8 rounded-full flex items-center justify-center mr-2">2</span>
                  النقود
                </h2>
                
                <div className="pr-4 mb-6">
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-1</span>
                    تعريف النقود
                  </h3>
                  <p className="mb-4">يمكن تعريف النقود وظيفيا بأنها: (النقود هي كل ما تفعله النقود). وهذا يعني أي وسيط يمكن أن يصبح نقودا بحيث يكون قادرا على القيام بوظائف النقود ويحظى بالقبول العام.</p>
                
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-2</span>
                    خصائص النقود
                  </h3>
                  <p className="mb-2">للنقود عدة خصائص نذكرها في ما يلي:</p>
                  <ul className="list-disc list-inside pr-5 mb-4">
                    <li>تتمتع بالقبول العام من كافة أفراد المجتمع.</li>
                    <li>نادرة نسبيا.</li>
                    <li>أن تتمتع بثبات نسبي في قيمتها.</li>
                    <li>قابلة للتجزئة دون انخفاض لقيمتها.</li>
                    <li>وحداتها متماثلة.</li>
                    <li>سهلة الحمل والاحتفاظ بها.</li>
                    <li>لا تبلى بسهولة أي لا تتلف نتيجة تداولها.</li>
                  </ul>
                
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-3</span>
                    وظائف النقود
                  </h3>
                  <p className="mb-2">للنقود وظائف متعددة نوجزها في ما يلي:</p>
                  <ul className="pr-5 mb-4 space-y-2">
                    <li>
                      <strong>وسيط للمبادلة:</strong> ليس الهدف من النقود استهلاكها مباشرة (لا تطلب النقود لذاتها)، بل هي الوسيلة المستخدمة للحصول على السلع والخدمات والأصول المالية دون اللجوء إلى المقايضة. لذلك يقال أن للنقود قدرة شرائية عامة.
                    </li>
                    <li>
                      <strong>مقياس للقيمة:</strong> تستخدم النقود كوحدة حساب أو معيار مثله في ذلك مثل المتر واللتر. فالنقود تستعمل لقياس قيم السلع والخدمات ونسبة قيمة كل سلعة إلى غيرها من السلع الأخرى. فهي إذن أداة محاسبية، ومن أجل ذلك تحدد في كل بلد وحدة معينة للتحاسب كالدينار مثلا.
                    </li>
                    <li>
                      <strong>مستودع (مخزن) للقيم:</strong> تتميز النقود المعاصرة بخفة وزنها وسهولة حفظها، كما أنها تجنب حائزها تكاليف التخزين والتلف، ويحتفظ الأشخاص بالنقود لا لذاتها بل بغرض ادخارها من أجل إنفاقها في المستقبل في شراء السلع الاستهلاكية أو الاستثمارية.
                    </li>
                    <li>
                      <strong>وسيلة للمدفوعات الآجلة:</strong> تستخدم النقود كأداة لتسديد كافة الالتزامات (دفع جميع المستحقات في المستقبل) سواء نتيجة لاقتراض معين أو ناشئة عن عمليات البيع على الحساب ... الخ.
                    </li>
                  </ul>
                
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-4</span>
                    أشكال النقود
                  </h3>
                  <p className="mb-2">للنقود عدة أشكال تتمثل في:</p>
                  
                  <div className="pr-5 space-y-4 mb-4">
                    <div>
                      <h4 className="font-bold mb-2">أ - النقود المعدنية:</h4>
                      <p className="mb-2">ظهرت النقود المعدنية بعدما عجزت النقود السلعية عن مجاراة متطلبات ذلك العصر. والنقود المعدنية هي تلك النقود المسكوكة من المعدن كالذهب أو الفضة أو البرونز. وللنقود المعدنية شكلان هما:</p>
                      <ul className="list-disc list-inside pr-5">
                        <li>نقود معدنية كاملة وفيها تتعادل قيمتها القانونية من قيمتها كمعدن.</li>
                        <li>نقود معدنية مساعدة وفيها تتفوق قيمتها القانونية على قيمة المعدن الذي تحتويه مثل قطع 50 دج، 100 دج ... الخ.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">ب - النقود الورقية:</h4>
                      <p>هي نقود قانونية (إلزامية) يصدرها البنك المركزي، حيث أن الدولة تلزم الأشخاص بقبولها للتداول دون أن يكون لهم الحق في تحويلها إلى ذهب أو فضة.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">ج - النقود المصرفية (الخطية):</h4>
                      <p>هي نقود يصدرها المصرف (البنك) التجاري، وهي عبارة عن أرصدة في حسابات المودعين في المصرف. ويلتزم المصرف بدفع مبلغ معين من النقود للمودع أو لأمره عند الطلب. وينشأ هذا الالتزام نتيجة لإيداع مبالغ من النقود القانونية من طرف المودعين، أو نتيجة لقيام المصرف بإقراض أحد عملائه ووضع مبلغ القرض في حساب العميل بالمصرف. وتستعمل الصكوك (الشيكات) أو أوامر الدفع الأخرى في تداول هذا النوع من النقود. وهذه النقود لا تعتبر نقودا إلزامية، لأنه يحق لأي شخص أن يمتنع عن قبول هذه الصكوك.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">د - البطاقة الائتمانية:</h4>
                      <p>هذه البطاقة يصدرها المصرف التجاري، ولا يشترط أن يكون لحامل هذه البطاقة رصيد دائن في المصرف. أي أن الأمر يتعلق بقرض له سقف ائتماني معين ممنوح لحامل البطاقة، والذي يسمح له بالسحب نقدا أو لشراء السلع. وعلى حامل هذه البطاقة دفع فوائد على المبالغ المسحوبة فقط. وعند قيام حامل البطاقة بشراء شيء ما بواسطة هذه البطاقة يقوم المصرف المصدر للبطاقة بسداد فواتير المشتري ويقوم المصرف بعد ذلك بإرسال كشف المشتريات لحامل البطاقة.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">هـ - النقود الالكترونية:</h4>
                      <p className="mb-2">ويطلق عليها أيضا (النقود الرقمية) وهي عبارة عن أرصدة نقدية مسبقة الدفع مسجلة على وسائط الكترونية (البطاقات الممغنطة، الهواتف المحمولة المبرمجة لهذا النوع من التعامل). ومن خصائص النقود الالكترونية أنها تسمح بالتمويل عن بعد بواسطة شبكة الانترنت مثلا. وتسمح كذلك بتحويل القيمة من شخص لآخر تسديدا لثمن المشتريات المختلفة (دفع ثمن وجبة طعام أو ثمن تذكرة وسيلة نقل أو ثمن حذاء ... الخ). وللعمل بهذا النوع من النقود يجب أن تتوفر ثلاثة عناصر أو أطراف هي:</p>
                      <ul className="list-disc list-inside pr-5">
                        <li>الزبون أو العميل.</li>
                        <li>البائع.</li>
                        <li>البنك الذي يتعامل إلكترونيا عبر الانترنت.</li>
                      </ul>
                      <p className="mt-2">وبالإضافة إلى ذلك، يجب أن يكون لدى كل طرف من هذه الأطراف نفس برنامج النقود الالكترونية.</p>
                    </div>
                  </div>
                
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-5</span>
                    إصدار النقود
                  </h3>
                  <ul className="list-disc list-inside pr-5 mb-4 space-y-2">
                    <li><strong>إصدار النقود الورقية والمعدنية:</strong> يعود للدولة وحدها حق إصدار النقود الورقية والمعدنية عبر التراب الوطني. ويفوض ممارسة هذا الحق لبنك الجزائر (البنك المركزي) دون سواه.</li>
                    <li><strong>إصدار النقود المصرفية الالكترونية وبطاقات الائتمان:</strong> تقوم البنوك التجارية بإصدار هذه الأنواع من النقود وذلك تحت رقابة البنك المركزي التي سنتطرق إليها لاحقا بشيء من التفصيل.</li>
                  </ul>
                
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-6</span>
                    الكتلة النقدية
                  </h3>
                  <div className="pr-5 mb-4">
                    <p className="mb-2"><strong>تعريف الكتلة النقدية:</strong> هي مجموعة الوحدات النقدية أو الوحدات القائمة بوظائف النقود التي هي في حيازة مختلف الأعوان الاقتصاديين.</p>
                    <p className="mb-2"><strong>مكونات الكتلة النقدية:</strong> تتكون الكتلة النقدية من:</p>
                    <ul className="list-disc list-inside pr-5">
                      <li><strong>النقود القانونية:</strong> وتشمل الأوراق النقدية والنقود المعدنية المساعدة، وتسمى نقودا قانونية لأن القانون يصبغ عليها صفة الشرعية والقدرة على تسوية الديون والإبراء منها، وهي كذلك تمثل قمة السيولة.</li>
                      <li><strong>النقود الائتمانية:</strong> هي نقود غير قانونية، وهي عبارة عن التزام من المصارف التجارية لدفع مبالغ معينة من النقود القانونية لصالح مختلف الأعوان الاقتصاديين عند الطلب، وهي تشمل جميع الودائع الجارية، أما الودائع الادخارية والودائع لأجل فلا تدخل ضمن الكتلة النقدية.</li>
                    </ul>
                  </div>
                
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-7</span>
                    التوازن النقدي
                  </h3>
                  <div className="pr-5 mb-4">
                    <p className="mb-4">يحدث التوازن النقدي عندما يتحقق التعادل بين الطلب على النقود وبين كمية النقود المعروضة من طرف السلطات النقدية في زمن معين. وبعبارة أخرى يتحقق التوازن عند النقطة التي يتقاطع فيها منحنى عرض النقود من منحنى الطلب عليها. ونقطة التقاطع هذه تسمى نقطة التوازن والتي يتحدد عندها سعر الفائدة التوازني.</p>
                    
                    <p className="mb-2">ويمكن توضيح حالة التوازن النقدي من خلال الشكل التالي:</p>
                    
                    <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 text-center mb-4">
                      <div className="w-full h-48 rounded-lg flex items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="border-b border-gray-400 w-3/4 relative">
                            <div className="absolute bottom-0 left-0 h-36 border-l border-gray-400"></div>
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                              <span className="text-sm font-bold">عرض النقود</span>
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                              <span className="text-sm font-bold">كمية النقود (ك)</span>
                            </div>
                            <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                              <span className="text-sm font-bold">سعر الفائدة (ع)</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="absolute h-36 w-3/4">
                          {/* Supply curve (horizontal) */}
                          <div className="absolute right-0 top-1/3 w-full border-t border-blue-500"></div>
                          
                          {/* Demand curve (diagonal) */}
                          <div className="absolute right-0 top-0 h-full w-full overflow-hidden">
                            <div className="absolute top-0 right-0 h-full w-full bg-transparent" style={{ borderRight: '2px solid #ef4444', transform: 'rotate(30deg)', transformOrigin: 'top right' }}></div>
                          </div>
                          
                          {/* Equilibrium point */}
                          <div className="absolute right-1/2 top-1/3 h-3 w-3 bg-green-500 rounded-full"></div>
                          <div className="absolute right-1/2 top-1/3 translate-x-4 translate-y-4">
                            <span className="text-sm font-bold">(ت)</span>
                          </div>
                          
                          <div className="absolute right-1/2 top-0 h-full border-dashed border-l border-gray-400"></div>
                          <div className="absolute right-0 top-1/3 w-full border-dashed border-t border-gray-400"></div>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-4 space-y-1">
                        <p>(ع) تمثل سعر الفائدة التوازني.</p>
                        <p>(ك) يمثل كمية التوازن من النقود.</p>
                        <p>(ت) تشير إلى نقطة التوازن.</p>
                      </div>
                    </div>
                    
                    <p>يشير منحنى الطلب على النقود إلى العلاقة العكسية بين الكمية المطلوبة من النقود وسعر الفائدة. ويشير منحنى عرض النقود إلى استقلال الكمية المعروضة من النقود عن سعر الفائدة.</p>
                  </div>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  // Display history lesson about historical figures if we're on the history subject page
  const renderHistoryLesson = () => {
    if (subjectId !== 'history') {
      return null;
    }

    return (
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader className="bg-orange-50 dark:bg-orange-900/20 border-b border-orange-100 dark:border-orange-800">
            <div className="flex items-center">
              <div className="bg-orange-500 p-2 rounded-full mr-3">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-orange-800 dark:text-orange-300">الشخصيات والأحداث الأكثر تداولاً في البكالوريا</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="prose dark:prose-invert max-w-none leading-relaxed">
              {/* Table of Contents */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-bold mb-3">فهرس المحتويات:</h3>
                <ul className="list-disc list-inside space-y-1 pr-4">
                  <li>1. شخصيات سياسية
                    <ul className="list-inside pr-5 space-y-1 mt-1">
                      <li>1-1. جمال عبد الناصر</li>
                      <li>1-2. هواري بومدين</li>
                      <li>1-3. شارل ديغول</li>
                      <li>1-4. محمد الخامس</li>
                      <li>1-5. وودرو ويلسون</li>
                    </ul>
                  </li>
                  <li className="mt-2">2. أحداث تاريخية
                    <ul className="list-inside pr-5 space-y-1 mt-1">
                      <li>2-1. الثورة الجزائرية</li>
                      <li>2-2. حرب السويس 1956</li>
                      <li>2-3. أزمة الصواريخ الكوبية</li>
                      <li>2-4. حرب أكتوبر 1973</li>
                      <li>2-5. الحرب العالمية الأولى</li>
                      <li>2-6. الحرب العالمية الثانية</li>
                      <li>2-7. خطة مارشال</li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Lesson Content */}
              <section>
                <h2 className="text-xl font-bold mb-3 flex items-center">
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 w-8 h-8 rounded-full flex items-center justify-center mr-2">1</span>
                  شخصيات سياسية
                </h2>
                
                <div className="pr-4 mb-6">
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">1-1</span>
                    جمال عبد الناصر (1918-1970)
                  </h3>
                  <div className="mb-4">
                    <p className="mb-3">شخصية عربية قومية حكم مصر من عام 1954 إلى عام 1970، وهو أحد قادة ثورة 23 يوليو 1952. اتخذ مبدأ الحياد الإيجابي وعدم الانحياز في سياسته الخارجية ودعم حركات التحرر عبر العالم.</p>
                    
                    <p className="mb-2"><strong>أهم إنجازاته:</strong></p>
                    <ul className="list-disc list-inside pr-5 mb-3">
                      <li>تأميم قناة السويس في 26 جويلية 1956</li>
                      <li>إقامة السد العالي</li>
                      <li>تبني سياسة الإصلاح الزراعي والصناعي</li>
                      <li>المساهمة في تأسيس حركة عدم الانحياز</li>
                      <li>دعم القضية الفلسطينية والثورة الجزائرية</li>
                    </ul>
                    
                    <p className="mb-2"><strong>مواقفه من القضايا الدولية:</strong></p>
                    <ul className="list-disc list-inside pr-5">
                      <li>دعم القضية الجزائرية ماديًا ومعنويًا</li>
                      <li>دعم حركات التحرر في إفريقيا وآسيا</li>
                      <li>كان من مؤسسي حركة عدم الانحياز وتنظيم مؤتمر باندونغ سنة 1955</li>
                      <li>رفض مشروع أيزنهاور ومشروعات الأحلاف الغربية</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">1-2</span>
                    هواري بومدين (1932-1978)
                  </h3>
                  <div className="mb-4">
                    <p className="mb-3">قائد ثوري وسياسي جزائري، شغل منصب رئيس الجزائر من عام 1965 إلى 1978. قاد التصحيح الثوري في 19 جوان 1965، وتبنى سياسة التنمية الشاملة في البلاد.</p>
                    
                    <p className="mb-2"><strong>أهم إنجازاته:</strong></p>
                    <ul className="list-disc list-inside pr-5 mb-3">
                      <li>تأميم المحروقات في 24 فيفري 1971</li>
                      <li>تطبيق الثورة الزراعية سنة 1971</li>
                      <li>بناء القاعدة الصناعية (المصانع الكبرى)</li>
                      <li>القرارات المتعلقة بالسيادة الوطنية على الثروات الطبيعية</li>
                      <li>إنشاء الشركة الوطنية سوناطراك</li>
                    </ul>
                    
                    <p className="mb-2"><strong>دوره في السياسة الدولية:</strong></p>
                    <ul className="list-disc list-inside pr-5">
                      <li>دعم القضية الفلسطينية وحركات التحرر العالمية</li>
                      <li>الدعوة لإقامة نظام اقتصادي عالمي جديد خلال الجمعية العامة للأمم المتحدة عام 1974</li>
                      <li>دوره في تأسيس منظمة الوحدة الإفريقية</li>
                      <li>دعم القضايا العربية وخاصة في حرب أكتوبر 1973</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">1-3</span>
                    شارل ديغول (1890-1970)
                  </h3>
                  <div className="mb-4">
                    <p className="mb-3">جنرال وسياسي فرنسي، قاد المقاومة الفرنسية خلال الحرب العالمية الثانية. أسس الجمهورية الفرنسية الخامسة وكان رئيسًا لفرنسا من 1958 إلى 1969.</p>
                    
                    <p className="mb-2"><strong>مواقفه وسياساته:</strong></p>
                    <ul className="list-disc list-inside pr-5 mb-3">
                      <li>تبنى سياسة الاستقلال النسبي عن المعسكرين في الحرب الباردة</li>
                      <li>سعى إلى بناء قوة فرنسا النووية</li>
                      <li>عمل على تصفية الاستعمار في معظم المستعمرات الفرنسية</li>
                      <li>وقع اتفاقيات إيفيان 1962 التي أنهت حرب الجزائر</li>
                      <li>انسحب من الهيكل العسكري لحلف الناتو عام 1966</li>
                    </ul>
                    
                    <p className="mb-2"><strong>موقفه من الجزائر:</strong></p>
                    <ul className="list-disc list-inside pr-5">
                      <li>رفض مبدئياً استقلال الجزائر في بداية حكمه وطرح مشروع "سلم الشجعان" عام 1958</li>
                      <li>حاول تنفيذ مشروع "الجزائر الجزائرية" ثم مشروع "قسنطينة" للتنمية الاقتصادية</li>
                      <li>في النهاية اعترف بحق تقرير المصير للشعب الجزائري عام 1961</li>
                      <li>واجه تمرد المنظمة العسكرية السرية (OAS) المعارضة لاستقلال الجزائر</li>
                      <li>وقّع اتفاقيات إيفيان في 18 مارس 1962 التي مهدت لاستقلال الجزائر</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">1-4</span>
                    محمد الخامس (1909-1961)
                  </h3>
                  <div className="mb-4">
                    <p className="mb-3">سلطان ثم ملك المغرب، قاد النضال الوطني المغربي ضد الاستعمار الفرنسي. تم نفيه من طرف فرنسا سنة 1953 إلى جزيرة كورسيكا ثم إلى مدغشقر، ليعود سنة 1955 ويقود المغرب إلى الاستقلال سنة 1956.</p>
                    
                    <p className="mb-2"><strong>نضاله ضد الاستعمار:</strong></p>
                    <ul className="list-disc list-inside pr-5 mb-3">
                      <li>رفض التوقيع على قرارات الإقامة العامة الفرنسية المجحفة في حق المغرب</li>
                      <li>خطاب طنجة التاريخي سنة 1947 والذي أكد فيه على وحدة المغرب العربي</li>
                      <li>دعم الحركة الوطنية المغربية ودعوته للاستقلال</li>
                      <li>تمسكه بالوحدة الوطنية بين جميع مكونات الشعب المغربي</li>
                    </ul>
                    
                    <p className="mb-2"><strong>دوره بعد الاستقلال:</strong></p>
                    <ul className="list-disc list-inside pr-5">
                      <li>بناء الدولة المغربية الحديثة بعد الاستقلال</li>
                      <li>تأسيس الجيش الملكي المغربي</li>
                      <li>دعم حركات التحرر في المنطقة المغاربية</li>
                      <li>دعم القضية الجزائرية ومساندة جبهة التحرير الوطني</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">1-5</span>
                    وودرو ويلسون (1856-1924)
                  </h3>
                  <div className="mb-4">
                    <p className="mb-3">الرئيس الثامن والعشرين للولايات المتحدة الأمريكية (1913-1921). اشتهر بمبادئه الأربعة عشر التي طرحها في نهاية الحرب العالمية الأولى، والتي شكلت أساساً لمعاهدة فرساي وإنشاء عصبة الأمم.</p>
                    
                    <p className="mb-2"><strong>المبادئ الأربعة عشر:</strong></p>
                    <ul className="list-disc list-inside pr-5 mb-3">
                      <li>الدبلوماسية المفتوحة ونبذ المعاهدات السرية</li>
                      <li>حرية الملاحة في البحار في أوقات السلم والحرب</li>
                      <li>إزالة الحواجز الاقتصادية بين الدول قدر الإمكان</li>
                      <li>تخفيض التسلح إلى المستوى اللازم للأمن الداخلي فقط</li>
                      <li>تسوية المطالب الاستعمارية مع مراعاة مصالح الشعوب المستعمرة بقدر مساو لمصالح الحكومات</li>
                      <li>حق تقرير المصير للشعوب</li>
                      <li>إنشاء منظمة دولية لضمان الأمن الجماعي (عصبة الأمم)</li>
                    </ul>
                    
                    <p className="mb-2"><strong>تأثيره على النظام الدولي:</strong></p>
                    <ul className="list-disc list-inside pr-5">
                      <li>المساهمة في إنشاء عصبة الأمم كأول منظمة دولية للأمن الجماعي</li>
                      <li>التأسيس لمبدأ حق تقرير المصير للشعوب</li>
                      <li>الدعوة للدبلوماسية المفتوحة بدلاً من الدبلوماسية السرية</li>
                      <li>حصل على جائزة نوبل للسلام سنة 1919 تقديراً لجهوده في إنهاء الحرب العالمية الأولى</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section className="mt-8">
                <h2 className="text-xl font-bold mb-3 flex items-center">
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 w-8 h-8 rounded-full flex items-center justify-center mr-2">2</span>
                  أحداث تاريخية
                </h2>
                
                <div className="pr-4 mb-6">
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-1</span>
                    الثورة الجزائرية (1954-1962)
                  </h3>
                  <div className="mb-4">
                    <p className="mb-3">ثورة التحرير الجزائرية هي حرب الاستقلال التي خاضها الشعب الجزائري ضد الاستعمار الفرنسي. اندلعت في الفاتح من نوفمبر 1954 وانتهت باتفاقيات إيفيان في 18 مارس 1962.</p>
                    
                    <p className="mb-2"><strong>المراحل الكبرى للثورة:</strong></p>
                    <ul className="list-disc list-inside pr-5 mb-3">
                      <li>اندلاع الثورة في 1 نوفمبر 1954 (ليلة الفاتح من نوفمبر)</li>
                      <li>مؤتمر الصومام في 20 أوت 1956 وتنظيم هياكل الثورة</li>
                      <li>إنشاء الحكومة المؤقتة للجمهورية الجزائرية في 19 سبتمبر 1958</li>
                      <li>مظاهرات 11 ديسمبر 1960 التي أظهرت التفاف الشعب حول الثورة</li>
                      <li>مفاوضات إيفيان وإعلان وقف إطلاق النار في 19 مارس 1962</li>
                      <li>استفتاء تقرير المصير في 1 جويلية 1962</li>
                      <li>إعلان الاستقلال في 5 جويلية 1962</li>
                    </ul>
                    
                    <p className="mb-2"><strong>الأبعاد الدولية للثورة الجزائرية:</strong></p>
                    <ul className="list-disc list-inside pr-5">
                      <li>تدويل القضية الجزائرية في الأمم المتحدة ومؤتمر باندونغ 1955</li>
                      <li>دعم الدول العربية والإفريقية والاشتراكية للثورة</li>
                      <li>تأثيرها في دعم حركات التحرر في العالم</li>
                      <li>تسببها في أزمات سياسية داخلية في فرنسا وسقوط الجمهورية الرابعة</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-2</span>
                    أزمة السويس 1956
                  </h3>
                  <div className="mb-4">
                    <p className="mb-3">أزمة دولية نشأت بعد قيام الرئيس المصري جمال عبد الناصر بتأميم قناة السويس في 26 جويلية 1956، مما أدى إلى عدوان ثلاثي (بريطانيا، فرنسا، إسرائيل) على مصر.</p>
                    
                    <p className="mb-2"><strong>أسباب الأزمة:</strong></p>
                    <ul className="list-disc list-inside pr-5 mb-3">
                      <li>رفض الولايات المتحدة وبريطانيا تمويل السد العالي</li>
                      <li>تأميم قناة السويس كرد على هذا الرفض</li>
                      <li>رغبة بريطانيا وفرنسا في استعادة نفوذهما في المنطقة</li>
                      <li>التعاون المصري-السوفييتي وشراء الأسلحة من الكتلة الشرقية</li>
                    </ul>
                    
                    <p className="mb-2"><strong>نتائج الأزمة:</strong></p>
                    <ul className="list-disc list-inside pr-5">
                      <li>فشل العدوان الثلاثي وانسحاب القوات المعتدية</li>
                      <li>نجاح مصر في الاحتفاظ بملكية القناة</li>
                      <li>ارتفاع مكانة جمال عبد الناصر عربياً وعالمياً</li>
                      <li>تراجع النفوذ البريطاني والفرنسي في المنطقة</li>
                      <li>ظهور الدور السوفييتي والأمريكي بشكل أكبر في الشرق الأوسط</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-3</span>
                    أزمة الصواريخ الكوبية 1962
                  </h3>
                  <div className="mb-4">
                    <p className="mb-3">مواجهة خطيرة بين الولايات المتحدة والاتحاد السوفييتي حول نشر صواريخ سوفييتية نووية في كوبا. تعتبر أخطر أزمة في تاريخ الحرب الباردة حيث اقترب العالم من حافة حرب نووية.</p>
                    
                    <p className="mb-2"><strong>أسباب الأزمة:</strong></p>
                    <ul className="list-disc list-inside pr-5 mb-3">
                      <li>نجاح الثورة الكوبية وتوجه كوبا نحو المعسكر الشرقي</li>
                      <li>محاولة أمريكية للإطاحة بنظام فيدل كاسترو في خليج الخنازير 1961</li>
                      <li>نشر الولايات المتحدة لصواريخ نووية في تركيا قرب الحدود السوفييتية</li>
                      <li>قرار الاتحاد السوفييتي بنشر صواريخ نووية في كوبا</li>
                    </ul>
                    
                    <p className="mb-2"><strong>تطورات الأزمة ونهايتها:</strong></p>
                    <ul className="list-disc list-inside pr-5">
                      <li>اكتشاف الصواريخ السوفييتية في كوبا من خلال طائرات التجسس الأمريكية U-2 في أكتوبر 1962</li>
                      <li>فرض حصار بحري أمريكي على كوبا</li>
                      <li>تبادل الرسائل بين خروتشوف وكينيدي وإجراء مفاوضات سرية</li>
                      <li>التوصل إلى حل للأزمة: سحب الصواريخ السوفييتية من كوبا مقابل تعهد أمريكي بعدم غزو كوبا وسحب صواريخها من تركيا</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-4</span>
                    حرب أكتوبر 1973
                  </h3>
                  <div className="mb-4">
                    <p className="mb-3">حرب شنتها مصر وسوريا ضد إسرائيل لاستعادة الأراضي المحتلة عام 1967. بدأت في 6 أكتوبر 1973 (10 رمضان) وكانت نقطة تحول في الصراع العربي الإسرائيلي.</p>
                    
                    <p className="mb-2"><strong>أسباب الحرب:</strong></p>
                    <ul className="list-disc list-inside pr-5 mb-3">
                      <li>استمرار احتلال إسرائيل للأراضي العربية بعد حرب 1967</li>
                      <li>فشل الجهود السلمية والدبلوماسية في استعادة الأراضي المحتلة</li>
                      <li>رفض إسرائيل الانسحاب من الأراضي المحتلة وتنفيذ قرار مجلس الأمن 242</li>
                    </ul>
                    
                    <p className="mb-2"><strong>نتائج الحرب:</strong></p>
                    <ul className="list-disc list-inside pr-5">
                      <li>تحطيم أسطورة "الجيش الإسرائيلي الذي لا يُقهر"</li>
                      <li>استعادة الثقة العربية بالقدرة على مواجهة إسرائيل</li>
                      <li>قرار الدول العربية النفطية استخدام "سلاح النفط" ضد الدول المؤيدة لإسرائيل</li>
                      <li>توقيع اتفاقية فصل القوات بين مصر وإسرائيل عام 1974</li>
                      <li>فتح باب المفاوضات السلمية التي أدت لاحقاً إلى اتفاقية كامب ديفيد 1978</li>
                      <li>إبراز التضامن العربي والدعم الجزائري القوي لمصر وسوريا</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-5</span>
                    الحرب العالمية الأولى (1914-1918)
                  </h3>
                  <div className="mb-4">
                    <p className="mb-3">نزاع عسكري عالمي بدأ في 28 جويلية 1914 وانتهى في 11 نوفمبر 1918. مثّل أحد أكبر النزاعات العسكرية في التاريخ وشارك فيه أكثر من 70 مليون جندي من مختلف أنحاء العالم.</p>
                    
                    <p className="mb-2"><strong>أسباب الحرب:</strong></p>
                    <ul className="list-disc list-inside pr-5 mb-3">
                      <li>اغتيال ولي عهد النمسا فرانز فرديناند في 28 جوان 1914 (الشرارة المباشرة)</li>
                      <li>التنافس الاستعماري بين القوى الأوروبية الكبرى</li>
                      <li>السباق نحو التسلح وخاصة البحري بين ألمانيا وبريطانيا</li>
                      <li>تنامي النزعات القومية في أوروبا</li>
                      <li>نظام التحالفات العسكرية (دول الوفاق الثلاثي ودول التحالف الثلاثي)</li>
                    </ul>
                    
                    <p className="mb-2"><strong>نتائج الحرب:</strong></p>
                    <ul className="list-disc list-inside pr-5">
                      <li>سقوط أربع إمبراطوريات: الألمانية، النمساوية المجرية، العثمانية والروسية</li>
                      <li>توقيع معاهدات السلام وفرض شروط قاسية على ألمانيا في معاهدة فرساي 1919</li>
                      <li>ظهور الولايات المتحدة كقوة عالمية كبرى</li>
                      <li>إنشاء عصبة الأمم كأول منظمة دولية للأمن الجماعي</li>
                      <li>إعادة تشكيل خريطة أوروبا واستقلال العديد من الدول الجديدة</li>
                      <li>خسائر بشرية هائلة (حوالي 10 مليون قتيل و20 مليون جريح)</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-6</span>
                    الحرب العالمية الثانية (1939-1945)
                  </h3>
                  <div className="mb-4">
                    <p className="mb-3">أكبر نزاع عسكري في التاريخ البشري، بدأ في 1 سبتمبر 1939 بغزو ألمانيا لبولندا وانتهى في 2 سبتمبر 1945 باستسلام اليابان. شاركت فيها معظم دول العالم في تحالفين عسكريين متعارضين: الحلفاء ودول المحور.</p>
                    
                    <p className="mb-2"><strong>أسباب الحرب:</strong></p>
                    <ul className="list-disc list-inside pr-5 mb-3">
                      <li>فشل معاهدة فرساي وصعود النازية في ألمانيا بقيادة أدولف هتلر</li>
                      <li>ظهور الأنظمة الفاشية والديكتاتورية في أوروبا</li>
                      <li>سياسة المهادنة (التخاذل) التي اتبعتها بريطانيا وفرنسا تجاه هتلر</li>
                      <li>الأزمة الاقتصادية العالمية لسنة 1929 وتداعياتها</li>
                      <li>فشل عصبة الأمم في تحقيق الأمن الجماعي ومنع العدوان</li>
                    </ul>
                    
                    <p className="mb-2"><strong>نتائج الحرب:</strong></p>
                    <ul className="list-disc list-inside pr-5">
                      <li>انقسام العالم إلى معسكرين: رأسمالي بقيادة الولايات المتحدة واشتراكي بقيادة الاتحاد السوفييتي</li>
                      <li>إنشاء منظمة الأمم المتحدة في 1945 كبديل لعصبة الأمم</li>
                      <li>بداية تفكك النظام الاستعماري وانطلاق حركات التحرر في آسيا وإفريقيا</li>
                      <li>ظهور الأسلحة النووية واستخدامها في هيروشيما وناغازاكي</li>
                      <li>خسائر بشرية ومادية هائلة (أكثر من 60 مليون قتيل)</li>
                      <li>بداية الحرب الباردة بين المعسكرين الشرقي والغربي</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2-7</span>
                    خطة مارشال (1947-1952)
                  </h3>
                  <div className="mb-4">
                    <p className="mb-3">برنامج أمريكي لإعادة إعمار أوروبا بعد الحرب العالمية الثانية، سُمي نسبة إلى وزير الخارجية الأمريكي جورج مارشال. قدمت الولايات المتحدة بموجبه مساعدات اقتصادية بقيمة 13 مليار دولار (ما يعادل 140 مليار دولار بالقيمة الحالية) لدول أوروبا الغربية.</p>
                    
                    <p className="mb-2"><strong>أهداف الخطة:</strong></p>
                    <ul className="list-disc list-inside pr-5 mb-3">
                      <li>إعادة بناء اقتصاديات أوروبا المدمرة بعد الحرب العالمية الثانية</li>
                      <li>فتح أسواق جديدة أمام المنتجات الأمريكية</li>
                      <li>احتواء المد الشيوعي في أوروبا (سياسة الاحتواء)</li>
                      <li>تعزيز النفوذ الأمريكي والنظام الرأسمالي في أوروبا الغربية</li>
                      <li>إنشاء سوق مشتركة من أجل تكامل اقتصادي أوروبي</li>
                    </ul>
                    
                    <p className="mb-2"><strong>نتائج الخطة:</strong></p>
                    <ul className="list-disc list-inside pr-5">
                      <li>ساهمت في تحقيق انتعاش اقتصادي سريع في بلدان أوروبا الغربية</li>
                      <li>قادت إلى بداية التكامل الاقتصادي الأوروبي وتأسيس المجموعة الاقتصادية الأوروبية لاحقاً</li>
                      <li>ساعدت على ترسيخ النفوذ الأمريكي في أوروبا الغربية</li>
                      <li>عززت من انقسام أوروبا إلى شرقية وغربية (الستار الحديدي)</li>
                      <li>أدت إلى رد فعل سوفييتي تمثل في إنشاء "الكوميكون" كبديل اشتراكي</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link 
          to="/" 
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>الرئيسية</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <Link 
          to={`/subject/${subjectId}`}
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>{getSubjectName()}</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <span className="text-gray-900 dark:text-white font-medium">الدروس والملخصات</span>
      </div>
      
      {/* Economics Lesson or History Lesson or Under Development Alert */}
      {subjectId === 'economics' ? (
        renderEconomicsLesson()
      ) : subjectId === 'history' ? (
        renderHistoryLesson()
      ) : (
        <div className="max-w-4xl mx-auto mt-16">
          <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 mb-6">
            <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-800 dark:text-blue-300 text-lg">قيد التطوير</AlertTitle>
            <AlertDescription className="text-blue-700 dark:text-blue-300">
              هذا القسم قيد التطوير حاليًا. سيتم إضافة دروس وملخصات مفصلة لمادة {getSubjectName()} قريبًا.
            </AlertDescription>
          </Alert>
          
          <div className="flex flex-col items-center justify-center text-center p-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <BookOpen size={64} className="text-blue-500 dark:text-blue-400 mb-6 opacity-50" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              دروس وملخصات {getSubjectName()}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg">
              نعمل حاليًا على إعداد محتوى تعليمي شامل لهذه المادة. سيتضمن المحتوى دروسًا مفصلة، ملخصات، وتمارين تطبيقية لمساعدتك في فهم المادة وتحقيق أفضل النتائج.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
