
import React from 'react';
import { Separator } from "@/components/ui/separator";

const InflationSection = () => {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">1- تعريف التضخم:</h2>
        <p className="leading-7 text-justify">
          يعرف التضخم بأنه حركة صعودية للأسعار تتميز بالاستمرار الذاتي، وهي ناتجة عن فائض الطلب الزائد على قدرة العرض.
        </p>
        <p className="leading-7 text-justify mt-4">
          من التعريف السابق نلاحظ أنه يجب توفر عناصر معينة حتى يقال أن هناك تضخم. ومن بين هذه العناصر ما يلي:
        </p>
        <ul className="list-disc mr-8 mt-2 space-y-1">
          <li>وجود ارتفاع مستمر للأسعار، أي لا يكون هذا الارتفاع وقتيا (ظرفيا).</li>
          <li>أن يكون هذا الارتفاع ذاتيا، بمعنى أن لا يكون ناتجا عن ظرف طارئ مثل الكوارث الطبيعية.</li>
          <li>وجود فائض في الطلب الكلي على العرض الكلي، أي أن الطلب على مختلف السلع والخدمات يفوق بكثير ما هو معروض منها.</li>
        </ul>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">2- أنواع التضخم:</h2>
        <p className="leading-7 text-justify">
          للتضخم أنواع متعددة نذكر منها:
        </p>
        
        <div className="mr-5 space-y-4 mt-3">
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">التضخم الظاهر (الطليق):</h3>
            <p className="leading-7 text-justify">
              هو الذي يظهر أثره بشكل مباشر وجلي في ارتفاع الأسعار، وينعكس ذلك في ارتفاع الأجور وغيرها من النفقات التي تتميز بالمرونة، الأمر الذي يؤدي إلى ارتفاع مختلف المداخيل بصفة عامة.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">التضخم المكبوت:</h3>
            <p className="leading-7 text-justify">
              هو تضخم خفي ومستتر، وتكون الأسعار غير مرتفعة بسبب تدخل الدولة في تحديد أسعار السلع والخدمات بصفة إدارية. الأمر الذي يؤدي إلى اختفاء بعض السلع وظهور ما يسمى بالسوق السوداء التي تتميز بوجود السلع المفقودة ولكن بأسعار مرتفعة.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">التضخم الكامن:</h3>
            <p className="leading-7 text-justify">
              يظهر التضخم الكامن عندما تكون هناك زيادة كبيرة غير طبيعية في الدخل الوطني النقدي دون أن تصاحبها زيادة في الإنفاق الكلي، ويحدث هذا عندما تلجأ الدولة إلى نظام توزيع السلع (نظام البطاقات) التي يتم فيها تحديد كمية معينة من السلع لكل فرد، ولا يجوز له أن يشتري أكثر من هذه الكمية. وينتشر هذا النوع من التضخم في حالات الحرب.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">التضخم الجامح:</h3>
            <p className="leading-7 text-justify">
              يعتبر هذا النوع أخطر أنواع التضخم وأكثرها ضررا بالاقتصاد الوطني. ويتميز بارتفاع التضخم بمعدلات عالية تصاحبها سرعة في تداول النقود في السوق. وفي هذه الحالة يتم طبع المزيد من الأوراق النقدية بكميات كبيرة جدا تفوق متطلبات النشاط الاقتصادي للبلد، فتزداد الأسعار ارتفاعا بصورة مذهلة تؤدي إلى انخفاض مستمر لقيمة العملة الوطنية، مما يؤدي في النهاية إلى انهيارها بعد فقدان الثقة فيها.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">التضخم الزاحف:</h3>
            <p className="leading-7 text-justify">
              وهو أقل أنواع التضخم خطورة على الاقتصاد الوطني، حيث يتسم هذا النوع من التضخم بارتفاع الأسعار بمعدلات بطيئة.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">3- أسباب التضخم:</h2>
        <div className="mr-5 space-y-4 mt-3">
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">التضخم الناشئ عن زيادة التكاليف:</h3>
            <p className="leading-7 text-justify">
              ينشأ هذا النوع من التضخم بسبب ارتفاع تكاليف الاستغلال في المؤسسات الاقتصادية، كرفع أجور ومرتبات العاملين، والذي يأتي بسبب مطالبة العاملين برفع الأجور.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">التضخم الناشئ عن الطلب:</h3>
            <p className="leading-7 text-justify">
              ينشأ هذا النوع من التضخم عن زيادة حجم الطلب الكلي والذي يصاحبه عرض ثابت من السلع والخدمات، إذ أن ارتفاع الطلب الكلي لا تقابله زيادة مماثلة في العرض الكلي، مما يؤدي إلى ارتفاع الأسعار.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">التضخم الناشئ عن إصدار النقود بكميات تفوق متطلبات الاقتصاد الوطني:</h3>
            <p className="leading-7 text-justify">
              إن الإفراط في إصدار النقود من طرف الجهاز المصرفي يؤدي إلى حدوث اختلال التوازن بين كمية النقود المتداولة في السوق والكمية المعروضة من السلع والخدمات، الأمر الذي يؤدي إلى ارتفاع الأسعار.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">4- آثار التضخم:</h2>
        <p className="leading-7 text-justify">
          للتضخم آثار متعددة منها ما هو اقتصادي ومنها ما هو اجتماعي.
        </p>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">4-1- آثار التضخم الاقتصادية:</h3>
          <p className="leading-7 text-justify">
            للتضخم آثار اقتصادية نقتصر على ذكر ما يلي:
          </p>
          
          <div className="mr-6 space-y-4 mt-3">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">انخفاض قيمة العملة:</h4>
              <p className="leading-7 text-justify">
                بفعل التضخم تزداد الأسعار ارتفاعا بصورة كبيرة ومستمرة، مما يؤدي إلى انخفاض مستمر لقيمة العملة الوطنية وبالتالي انخفاض قدرتها الشرائية.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">انخفاض معدل الفائدة:</h4>
              <p className="leading-7 text-justify">
                في حالة التضخم يكون عرض النقود أكبر من الطلب على النقود، الأمر الذي يؤدي بسعر الفائدة إلى الانخفاض.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">انخفاض الادخار وزيادة الاستهلاك:</h4>
              <p className="leading-7 text-justify">
                عندما تنخفض قيمة العملة بفعل التضخم، تفقد النقود إحدى وظائفها الأساسية وهي كونها مخزنا للقيمة أي كأداة ادخار. فارتفاع الأسعار من جهة، وانخفاض سعر الفائدة من جهة ثانية، والخوف من المستقبل من جهة ثالثة، كلها عوامل تعمل على تخفيض الميل للادخار وزيادة الميل للاستهلاك.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">انخفاض الإنتاج:</h4>
              <p className="leading-7 text-justify">
                بسبب ارتفاع أسعار السلع المنتجة محليا مقارنة بالسلع المستوردة يقل الطلب على المنتجات المحلية الأمر الذي يؤدي بالمنتجين المحليين إلى تخفيض حجم الإنتاج.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">محدودية الاستثمارات:</h4>
              <p className="leading-7 text-justify">
                في حالة التضخم تقل الاستثمارات بسبب ارتفاع التكاليف بصفة عامة والأجور بصفة خاصة.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">4-2- آثار التضخم الاجتماعية:</h3>
          <p className="leading-7 text-justify">
            للتضخم آثار اجتماعية نقتصر على ذكر ما يلي:
          </p>
          
          <div className="mr-6 space-y-4 mt-3">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">ارتفاع نسبة البطالة:</h4>
              <p className="leading-7 text-justify">
                كلما يقوم المنتجون المحليون بتخفيض الإنتاج فإنهم يقومون بتسريح عدد من العمال ليصبحوا في تعداد البطالين.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">ارتفاع معدل الفقر:</h4>
              <p className="leading-7 text-justify">
                بفعل نسبة البطالة من جهة، وبفعل الارتفاع المستمر للأسعار من جهة أخرى يزداد عدد الفقراء في المجتمع.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">التأثير السلبي على أصحاب الدخول الثابتة والمحدودة:</h4>
              <p className="leading-7 text-justify">
                إن أكثر المتضررين من التضخم هم أصحاب الأجور والمرتبات، حيث إن مداخيلهم عادة ما تكون ثابتة، وحتى لو تغيرت فإنها تتغير ببطء شديد وبمعدل أقل من معدل ارتفاع الأسعار، وبهذا تكون مداخيلهم الحقيقية في حالة تدهور مستمر.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">ظهور الآفات الاجتماعية:</h4>
              <p className="leading-7 text-justify">
                مثل تفشي الرشوة والفساد الإداري والكسب غير المشروع... الخ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">5- وسائل معالجة التضخم:</h2>
        <p className="leading-7 text-justify">
          لعلاج التضخم وللحد من تفاقمه تتبع الدولة السياسات الاقتصادية التالية:
        </p>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">5-1- سياسة تجميد الأجور ومراقبة الأسعار:</h3>
          <p className="leading-7 text-justify">
            للحد من تفاقم ظاهرة التضخم، تعمل الدولة بالاشتراك مع النقابات وأرباب العمل على تجميد الأجور لفترة زمنية معينة، هذا من جهة، ومن جهة أخرى تعمل الدولة على مراقبة الأسعار بهدف الحفاظ على ثبات القدرة الشرائية للأجراء خلال نفس الفترة.
          </p>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">5-2- مراقبة الإصدار النقدي:</h3>
          <p className="leading-7 text-justify">
            يقوم البنك المركزي بوضع وتنفيذ السياسة النقدية باعتماد مجموعة من الأدوات من اجل مجابهة ظاهرة التضخم نذكر منها:
          </p>
          
          <div className="mr-6 space-y-4 mt-3">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">رفع سعر إعادة الخصم:</h4>
              <p className="leading-7 text-justify">
                يقوم البنك المركزي برفع سعر إعادة الخصم بهدف التأثير في القدرة الائتمانية للمصارف من اجل تقليل حجم السيولة المتداولة في السوق.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">سياسة السوق المفتوحة:</h4>
              <p className="leading-7 text-justify">
                يقوم البنك المركزي ببيع الأوراق المالية وذلك من أجل سحب جزء من السيولة المتداولة في السوق.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">رفع نسبة الاحتياطي القانوني:</h4>
              <p className="leading-7 text-justify">
                المصارف التجارية ملزمة بإيداع جزء من الودائع (التي تستلمها من الجمهور) لدى البنك المركزي ويسمى هذا الجزء بالاحتياطي القانوني. ففي حالة التضخم يقوم البنك المركزي برفع نسبة الاحتياطي القانوني من أجل تخفيض القدرة الائتمانية لدى المصارف التجارية.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">رفع سعر الفائدة:</h4>
              <p className="leading-7 text-justify">
                يقوم البنك المركزي برفع سعر الفائدة لتشجيع الادخار بهدف امتصاص الفائض من الكتلة النقدية.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">5-3- تحقيق التوازن في الميزانية (الموازنة) العامة:</h3>
          <p className="leading-7 text-justify">
            في حالة وجود عجز في الميزانية العامة للدولة تقوم الدولة بما يلي:
          </p>
          
          <div className="mr-6 space-y-4 mt-3">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">تخفيض الإنفاق الحكومي:</h4>
              <p className="leading-7 text-justify">
                يؤدي الإنفاق الحكومي إلى زيادة الطلب الكلي من جهة، وإلى زيادة كمية النقود المتداولة في السوق من جهة أخرى، وبالتالي فإن التخفيض من هذا الإنفاق سوف يؤدي إلى تخفيض الطلب الكلي وكمية النقود المتداولة.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">زيادة الضرائب على السلع الكمالية:</h4>
              <p className="leading-7 text-justify">
                لأن هذا يؤدي إلى تخفيض الطلب الكلي وكمية النقود المتداولة من جهة، وزيادة إيرادات الميزانية العامة للدولة من جهة أخرى.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">اللجوء إلى الدين (القرض) العام:</h4>
              <p className="leading-7 text-justify">
                إن سحب كمية النقود الفائضة من السوق تؤدي إلى تخفيض الطلب الكلي وكمية النقود المتداولة وزيادة إيرادات الميزانية العامة للدولة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InflationSection;
