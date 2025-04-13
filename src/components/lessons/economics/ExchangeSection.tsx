
import React from 'react';
import { Separator } from "@/components/ui/separator";

const ExchangeSection = () => {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">1- تعريف الصرف:</h2>
        <p className="leading-7 text-justify">
          يعرف الصرف بأنه مبادلة عملة دولة ما مقابل عملة دولة أخرى، مثل مبادلة الدينار الجزائري بالدولار الأمريكي أو غيره من العملات.
        </p>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">2- أنواع الصرف:</h2>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">2-1- الصرف اليدوي والصرف المسحوب:</h3>
          
          <div className="mr-6 space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">الصرف اليدوي:</h4>
              <p className="leading-7 text-justify">
                هو عبارة عن مبادلة أوراق نقدية من عملة ما يقابل أوراق نقدية من عملة أخرى مثل مبادلة مبلغ نقدي بالدينار الجزائري مقابل الدولار الأمريكي أو أي عملة أخرى (اليورو، الجنيه الإسترليني، الين).
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">الصرف المسحوب:</h4>
              <p className="leading-7 text-justify">
                وهو عبارة عن سحب الأوراق التجارية المقومة بالعملة الأجنبية. مثل السفتجة الخارجية والشيكات... وتجدر الإشارة إلى أن الصرف المسحوب هو النوع المستخدم في التجارة الخارجية.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">2-2- الصرف العاجل والصرف الآجل:</h3>
          
          <div className="mr-6 space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">الصرف العاجل:</h4>
              <p className="leading-7 text-justify">
                يكون الصرف العاجل عندما تتم عمليتي تسليم واستلام العملات لحظة إبرام العقد، أو قبل مرور يومين من أيام العمل (دون حساب أيام العطل) من تاريخ إبرام العقد. وتتم هذه العملية على أساس سعر الصرف العاجل، أي السعر السائد لحظة إبرام العقد.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">الصرف الآجل:</h4>
              <p className="leading-7 text-justify">
                يكون الصرف الآجل عندما تتم عمليتي تسليم واستلام العملات بعد مرور يومين من أيام العمل من تاريخ إبرام العقد، وتتم هذه العملية على أساس الصرف الآجل، أي السعر الذي تم الاتفاق عليه لحظة إبرام العقد.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">3- أسباب الصرف:</h2>
        <p className="leading-7 text-justify">
          تنشأ الحاجة إلى الصرف الأجنبي عندما تنشأ تعاملات تتطلب استعمال العملات الأجنبية. مثل التجارة الخارجية، زيارة الأراضي المقدسة، البعثات التعليمية بالخارج... الخ.
        </p>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">4- سوق الصرف:</h2>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">4-1- تعريف سوق الصرف:</h3>
          <p className="leading-7 text-justify">
            سوق الصرف هو السوق الذي تتم فيه عملية مبادلة العملات الأجنبية المختلفة، ويقصد به أيضا شبكة العلاقات التي تربط مختلف الأطراف المشاركة في مجال الصرف. هذه الأطراف هي:
          </p>
          <ul className="list-disc mr-8 mt-2 space-y-1">
            <li>المصدرون، المستوردون، السياح... الخ.</li>
            <li>البنوك التجارية.</li>
            <li>سماسرة الصرف الأجنبي.</li>
            <li>البنك المركزي.</li>
          </ul>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">4-2- أنواع سوق الصرف:</h3>
          
          <div className="mr-6 space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">سوق الصرف بين البنوك:</h4>
              <p className="leading-7 text-justify">
                هو عبارة عن السوق المحلي للصرف الذي يتشكل من مختلف البنوك المحلية التي تقوم ببيع وشراء العملات الأجنبية داخل البلد الواحد.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">سوق الصرف العالمي:</h4>
              <p className="leading-7 text-justify">
                هو عبارة عن مختلف مراكز الصرف الأجنبي المنتشرة عبر أرجاء العالم والمرتبطة ببعضها البعض بشكل مستمر بواسطة مختلف شبكات الاتصال الحديثة، وهذه المراكز تعتبر بمثابة سوق عالمي واحد للصرف، وأهم هذه المراكز نجد مركز نيويورك، لندن، زيوريخ، طوكيو، فرانكفورت، هونغ كونغ...
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">5- سعر (معدل) الصرف:</h2>
        <p className="leading-7 text-justify">
          يعرف سعر الصرف بأنه سعر إحدى العملتين بدلالة الأخرى، وبمعنى آخر هو عدد الوحدات من عملة دولة ما مقابل وحدة من عملة دولة أخرى، فمثلا سعر صرف الدولار الأمريكي الواحد يساوي 120 دينار جزائري.
        </p>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">6- أنظمة الصرف:</h2>
        <p className="leading-7 text-justify mb-4">
          لا يوجد نظام صرف واحد يناسب جميع الدول ويتماشى مع مختلف الظروف، ولذلك يوجد نوعان من أنظمة الصرف.
        </p>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">6-1- نظام الصرف الثابت:</h3>
          <p className="leading-7 text-justify">
            في ظل نظام الصرف الثابت تتدخل السلطة النقدية بربط قيمة العملة الوطنية بقيمة عملة أجنبية واحدة (التي تعقد بها معظم صفقات هذا البلد)، أو بالقيمة المتوسطة لعدد من العملات الرئيسية في العالم (عادة تتكون من: الدولار الأمريكي، اليورو، الجنيه الإسترليني، الين الياباني) ويطلق عليها مصطلح (سلة العملات).
          </p>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">6-2- نظام الصرف المرن (المتغير):</h3>
          <p className="leading-7 text-justify">
            في ظل نظام الصرف المرن تتحدد قيمة العملة الأجنبية في السوق بتفاعل قوى العرض والطلب على هذه العملة، دون تدخل السلطة النقدية في سوق الصرف.
          </p>
        </div>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">7- سياسة سعر الصرف:</h2>
        <p className="leading-7 text-justify mb-4">
          هي مجموعات الإجراءات والتدابير والوسائل التي تتخذها السلطات النقدية للبلد في مجال الصرف بغية تحقيق أهداف معينة.
        </p>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">7-1- أهداف سياسة الصرف:</h3>
          <p className="leading-7 text-justify">
            من بين أهداف سياسة الصرف نذكر ما يلي:
          </p>
          <ul className="list-disc mr-8 mt-2 space-y-1">
            <li>تنمية الصناعات المحلية.</li>
            <li>تشجيع الصادرات.</li>
            <li>التحكم في الواردات.</li>
            <li>معالجة التضخم.</li>
            <li>تحقيق التوازن في ميزان المدفوعات.</li>
          </ul>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">7-2- وسائل سياسة الصرف:</h3>
          
          <div className="mr-6 space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">تعديل سعر الصرف:</h4>
              <p className="leading-7 text-justify">
                المقصود بتعديل سعر الصرف هو خفض أو رفع قيمة العملة الوطنية تجاه العملات الأجنبية. ففي حالة التخفيض تزداد الصادرات نحو الخارج وتنخفض الواردات، وهذا ما يشجع قيام الصناعات المحلية وتنميتها. وفي حالة رفع قيمة العملة الوطنية تجاه العملات الأجنبية تصبح أسعار الواردات منخفضة مما يؤدي إلى زيادة الواردات، الأمر الذي يؤدي إلى زيادة الضغط التنافسي بين أسعار المنتجات المستوردة وأسعار المنتجات المحلية، فتميل الأسعار نحو الانخفاض أي التقليل من حدة التضخم.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">استخدام احتياطات الصرف:</h4>
              <p className="leading-7 text-justify">
                يقصد باحتياطات الصرف في بلد ما بأنها مجموعة العملات الأجنبية التي بحوزة السلطة النقدية والتي تقوم باستخدامها عند التدخل في سوق الصرف. ففي حالة انخفاض سعر صرف العملة الوطنية عن المستوى المرغوب، تتدخل السلطة النقدية في سوق الصرف طالبة شراء العملة الوطنية مقابل التخلي عن العملات الأجنبية الموجودة بحوزتها الأمر الذي يؤدي إلى الرفع من سعر صرف العملة الوطنية. أما في حالة ارتفاع سعر صرف العملة الوطنية عن المستوى المرغوب، تتدخل السلطة النقدية في سوق الصرف عارضة بيع العملة الوطنية مقابل الحصول على العملات الأجنبية الأمر الذي يؤدي إلى الخفض من سعر صرف العملة الوطنية.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">مراقبة الصرف:</h4>
              <p className="leading-7 text-justify">
                يقصد بها مجموعة القيود التي تضعها السلطات النقدية للبلد على استخدام الصرف الأجنبي بغية الحد من خروج رؤوس الأموال والمحافظة على استقرار سعر صرف العملة الوطنية وبالتالي العمل على تحقيق التوازن في ميزان المدفوعات.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExchangeSection;
