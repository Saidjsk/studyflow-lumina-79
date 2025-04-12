
import { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const MarketSection = () => {
  return (
    <div className="space-y-10 my-6">
      {/* السوق */}
      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 w-8 h-8 rounded-full flex items-center justify-center mr-2">1</span>
          السوق
        </h2>
        
        <div className="space-y-6 pr-4">
          {/* تعريف السوق */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center">
              <span className="bg-blue-50 dark:bg-blue-900/20 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">1-1</span>
              تعريف السوق
            </h3>
            <div className="pr-4 text-gray-700 dark:text-gray-300">
              <p>السوق هو المكان الذي يلتقي فيه البائعون والمشترون سواء بصفة مباشرة أو عن طريق وسطاء لتبادل سلعة أو خدمة معينة.</p>
              <p className="mt-2">ولا يشترط أن يكون السوق حيزًا جغرافيًا، ففي الوقت الحالي تُستخدم شبكة الإنترنت كسوق افتراضي.</p>
            </div>
          </div>
          
          {/* أنواع الأسواق */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center">
              <span className="bg-blue-50 dark:bg-blue-900/20 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">1-2</span>
              أنواع الأسواق
            </h3>
            <div className="pr-4 text-gray-700 dark:text-gray-300">
              <p>تتعدد أنواع الأسواق حسب طبيعة ما يُتبادل فيها:</p>
              
              <div className="mt-3 space-y-4">
                <div>
                  <h4 className="font-bold mb-1">أ- سوق السلع والخدمات:</h4>
                  <div className="pr-4">
                    <p>ويقصد به المكان الذي يلتقي فيه عارضو سلعة أو خدمة معينة مع طالبيها.</p>
                    <p className="mt-1">لكل سلعة أو خدمة سوق خاص بها مثل:</p>
                    <ul className="list-disc pr-6 mt-1 space-y-1">
                      <li>سوق النفط</li>
                      <li>سوق السيارات</li>
                      <li>سوق خدمات النقل الجوي</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-1">ب- سوق العمل:</h4>
                  <div className="pr-4">
                    <p>هو المكان الذي يلتقي فيه عارضو خدمة العمل (الأفراد الذين يبحثون عن عمل) مع طالبي هذه الخدمة (المؤسسات، الإدارات...).</p>
                    <p className="mt-1">ومن أنواعه:</p>
                    <ul className="list-disc pr-6 mt-1 space-y-1">
                      <li>سوق العمل الزراعي</li>
                      <li>سوق العمل في البناء</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-1">ج- سوق الأوراق المالية:</h4>
                  <div className="pr-4">
                    <p>هو مكان يتم فيه بيع وشراء الأوراق المالية (أسهم وسندات)، ويتم ذلك عن طريق البورصة أو مؤسسات متخصصة في المجال.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* أشكال السوق */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center">
              <span className="bg-blue-50 dark:bg-blue-900/20 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">1-3</span>
              أشكال السوق
            </h3>
            <div className="pr-4 text-gray-700 dark:text-gray-300">
              <p>يمكن التمييز بين سوق المنافسة الكاملة وسوق المنافسة غير الكاملة:</p>
              
              <div className="mt-3 space-y-4">
                <div>
                  <h4 className="font-bold mb-1">أ- المنافسة الكاملة (التماثل):</h4>
                  <div className="pr-4">
                    <p>هي السوق التي تتحقق فيها جميع شروط المنافسة التامة، وتتميز بـ:</p>
                    <ul className="list-disc pr-6 mt-1 space-y-1">
                      <li>وجود عدد كبير جدًا من البائعين والمشترين</li>
                      <li>صغر حجم عرض كل بائع وكذلك صغر حجم طلب كل مشترٍ</li>
                      <li>المعرفة التامة بظروف السوق من حيث العرض والطلب والأسعار</li>
                      <li>تجانس السلعة ووجود سعر موحد</li>
                      <li>حرية الدخول والخروج من السوق بدون عوائق</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-1">ب- المنافسة غير الكاملة:</h4>
                  <div className="pr-4">
                    <p>وتشمل ثلاثة أشكال:</p>
                    
                    <div className="mt-2 space-y-3">
                      <div>
                        <h5 className="font-medium mb-1">1. المنافسة الاحتكارية:</h5>
                        <ul className="list-disc pr-6 space-y-1">
                          <li>وجود عدد من البائعين والمشترين</li>
                          <li>وجود سلع غير متجانسة وأسعار مختلفة</li>
                          <li>نقص المعرفة التامة بظروف السوق</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-1">2. احتكار القلة:</h5>
                        <ul className="list-disc pr-6 space-y-1">
                          <li>وجود عدد قليل من البائعين أو المشترين</li>
                          <li>سلع متشابهة أو غير متجانسة وأسعار مختلفة</li>
                          <li>يتأثر كل بائع أو مشتري برد فعل الآخرين</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-1">3. الاحتكار:</h5>
                        <ul className="list-disc pr-6 space-y-1">
                          <li>وجود بائع أو منتج واحد يتحكم في عرض السلعة وسعرها</li>
                          <li>أو وجود مشترٍ واحد يتحكم في الطلب والسعر</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* الأسعار */}
      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 w-8 h-8 rounded-full flex items-center justify-center mr-2">2</span>
          الأسعار
        </h2>
        
        <div className="space-y-6 pr-4">
          {/* تعريف السعر */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center">
              <span className="bg-blue-50 dark:bg-blue-900/20 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">2-1</span>
              تعريف السعر
            </h3>
            <div className="pr-4 text-gray-700 dark:text-gray-300">
              <p>السعر هو التعبير النقدي عن قيمة سلعة أو خدمة معينة.</p>
            </div>
          </div>
          
          {/* العناصر المحددة للسعر */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center">
              <span className="bg-blue-50 dark:bg-blue-900/20 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">2-2</span>
              العناصر المحددة للسعر
            </h3>
            
            {/* الطلب */}
            <div className="mt-4">
              <h4 className="font-bold mb-2 pr-2">2-2-1- الطلب:</h4>
              <div className="pr-6 space-y-3">
                <div>
                  <h5 className="font-medium mb-1">تعريف الطلب:</h5>
                  <p className="pr-4">هو الكمية المطلوبة من سلعة معينة عند سعر معين خلال فترة زمنية محددة.</p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">قانون الطلب:</h5>
                  <p className="pr-4">يعبر عن العلاقة العكسية بين الكمية المطلوبة من سلعة ما وسعرها.</p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">منحنى الطلب:</h5>
                  <div className="pr-4">
                    <p>يتمثل في محور عمودي يمثل سعر السلعة، ومحور أفقي يمثل الكميات المطلوبة منها.</p>
                    <p className="mt-1">يكون منحنى الطلب مائلًا من اليسار إلى اليمين للأسفل، مما يدل على العلاقة العكسية بين السعر والطلب.</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">العوامل المؤثرة في الطلب:</h5>
                  <ul className="list-disc pr-6 space-y-1">
                    <li>سعر السلعة المعنية</li>
                    <li>أسعار السلع الأخرى البديلة أو المكملة</li>
                    <li>الدخل النقدي للمستهلك</li>
                    <li>الأوضاع الاجتماعية والثقافية مثل العادات والتقاليد والتفضيلات</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">مرونة الطلب:</h5>
                  <div className="pr-4">
                    <p>يمكن التمييز بين ثلاثة أنواع من مرونة الطلب:</p>
                    <ul className="list-disc pr-6 mt-1 space-y-1">
                      <li>مرونة الطلب السعرية</li>
                      <li>مرونة الطلب التقاطعية</li>
                      <li>مرونة الطلب الدخلية</li>
                    </ul>
                    
                    <div className="mt-3">
                      <h6 className="font-medium">مرونة الطلب السعرية:</h6>
                      <p>هي درجة استجابة الطلب على سلعة معينة للتغير الذي يطرأ على سعرها، ويُعبر عنها بالعلاقة التالية:</p>
                      <div className="bg-blue-50 dark:bg-blue-900/10 p-2 rounded mt-1 text-center">
                        المرونة السعرية = (نسبة التغير في الكمية المطلوبة) / (نسبة التغير في السعر)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* العرض */}
            <div className="mt-6">
              <h4 className="font-bold mb-2 pr-2">2-2-2- العرض:</h4>
              <div className="pr-6 space-y-3">
                <div>
                  <h5 className="font-medium mb-1">تعريف العرض:</h5>
                  <p className="pr-4">هو الكمية المعروضة من سلعة معينة عند سعر معين خلال فترة زمنية محددة.</p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">قانون العرض:</h5>
                  <p className="pr-4">يعبر عن العلاقة الطردية بين الكمية المعروضة من سلعة ما وسعرها، أي كلما ارتفع السعر زاد العرض، والعكس صحيح.</p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">منحنى العرض:</h5>
                  <div className="pr-4">
                    <p>يتمثل في محور عمودي يمثل السعر، ومحور أفقي يمثل الكميات المعروضة.</p>
                    <p className="mt-1">يكون منحنى العرض مائلًا من اليسار إلى اليمين للأعلى، مما يدل على العلاقة الطردية بين السعر والعرض.</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">العوامل المؤثرة في العرض:</h5>
                  <ul className="list-disc pr-6 space-y-1">
                    <li>سعر السلعة</li>
                    <li>أسعار السلع الأخرى</li>
                    <li>تكاليف الإنتاج</li>
                    <li>التكنولوجيا المستخدمة</li>
                    <li>السياسات الحكومية (ضرائب، إعانات...)</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">مرونة العرض:</h5>
                  <p className="pr-4">هي درجة استجابة الكمية المعروضة من سلعة معينة للتغير الذي يطرأ على سعرها.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* توازن السوق */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center">
              <span className="bg-blue-50 dark:bg-blue-900/20 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">2-3</span>
              توازن السوق
            </h3>
            <div className="pr-4 space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-medium mb-1">تعريف توازن السوق:</h4>
                <p className="pr-4">هو الحالة التي يتساوى فيها العرض مع الطلب عند سعر معين وكمية معينة، بحيث لا يكون هناك فائض أو عجز في السوق.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">سعر التوازن:</h4>
                <p className="pr-4">هو السعر الذي تكون عنده الكمية المطلوبة مساوية للكمية المعروضة.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">كمية التوازن:</h4>
                <p className="pr-4">هي الكمية التي يتم تبادلها فعليًا في السوق عند سعر التوازن.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">حالة عدم التوازن:</h4>
                <ul className="list-disc pr-6 space-y-1">
                  <li>فائض العرض: يحدث عندما تكون الكمية المعروضة أكبر من الكمية المطلوبة عند سعر معين.</li>
                  <li>عجز العرض: يحدث عندما تكون الكمية المطلوبة أكبر من الكمية المعروضة عند سعر معين.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* التمثيل البياني للتوازن */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400 flex items-center">
              <span className="bg-blue-50 dark:bg-blue-900/20 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">2-4</span>
              التمثيل البياني للتوازن
            </h3>
            <div className="pr-4 space-y-2 text-gray-700 dark:text-gray-300">
              <h4 className="font-medium mb-1">الرسم البياني:</h4>
              <ul className="list-disc pr-6 space-y-1">
                <li>يتقاطع منحنى الطلب مع منحنى العرض في نقطة تمثل حالة التوازن.</li>
                <li>المحور العمودي: السعر</li>
                <li>المحور الأفقي: الكمية</li>
                <li>نقطة التقاطع: تمثل سعر وكمية التوازن</li>
              </ul>
              
              <div className="mt-4 flex justify-center">
                <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded shadow-sm max-w-md">
                  <div className="relative h-60 w-full">
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                      <p className="text-gray-500 dark:text-gray-400">رسم توضيحي لتقاطع منحنى العرض والطلب</p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-full w-full">
                      {/* Y-Axis (Price) */}
                      <div className="absolute bottom-0 left-10 h-full w-0.5 bg-gray-300"></div>
                      <div className="absolute bottom-0 left-5 transform rotate-90 origin-bottom-left text-xs text-gray-600 dark:text-gray-400">السعر</div>
                      
                      {/* X-Axis (Quantity) */}
                      <div className="absolute bottom-10 left-10 w-full h-0.5 bg-gray-300"></div>
                      <div className="absolute bottom-5 right-5 text-xs text-gray-600 dark:text-gray-400">الكمية</div>
                      
                      {/* Supply Curve */}
                      <div className="absolute bottom-10 left-10 w-40 h-40 border-t-2 border-blue-500 rounded-tl-full transform -rotate-45"></div>
                      <div className="absolute bottom-32 right-20 text-xs text-blue-500">منحنى العرض</div>
                      
                      {/* Demand Curve */}
                      <div className="absolute bottom-50 left-10 w-40 h-40 border-t-2 border-red-500 rounded-tr-full transform rotate-45"></div>
                      <div className="absolute top-10 right-20 text-xs text-red-500">منحنى الطلب</div>
                      
                      {/* Equilibrium Point */}
                      <div className="absolute bottom-30 left-30 w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="absolute bottom-32 left-32 text-xs text-green-600">نقطة التوازن</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSection;
