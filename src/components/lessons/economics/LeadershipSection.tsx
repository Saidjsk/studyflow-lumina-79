
import React from 'react';
import { Separator } from "@/components/ui/separator";

const LeadershipSection = () => {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">1- تعريف القيادة:</h2>
        <p className="leading-7 text-justify">
          القيادة هي القدرة على التأثير في المرؤوسين لتوجيه جهودهم لتحقيق أهداف المنظمة. وحتى تكون هناك قيادة يجب توفر ثلاثة عناصر أساسية:
        </p>
        <ul className="list-disc mr-8 mt-2 space-y-1">
          <li>وجود قائد يتصف بقدرات ومهارات عالية.</li>
          <li>وجود هدف يسعى القائد لتحقيقه.</li>
          <li>وجود أفراد مطالبين بتحقيق هذا الهدف من خلال تأثير القائد عليهم.</li>
        </ul>
        <p className="leading-7 text-justify mt-4">
          وتجدر الإشارة إلى أنه ليس بالضرورة أن يكون كل مسير فعال قائدا، وذلك لوجود اختلافات بين دور القائد ودور المسير، فالمسير يتعامل مع الحاضر يوما بيوم، بينما القائد يتعامل مع الحاضر والمستقبل، أي يكون لديه رؤية مستقبلية إبداعية للأشياء التي ترغب المنظمة الوصول إليها.
        </p>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">2- أساليب القيادة:</h2>
        <div className="mr-5 space-y-4 mt-3">
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">القيادة الفردية:</h3>
            <p className="leading-7 text-justify">
              وهي تلك التي يحتكر فيها القائد السلطة، حيث يقوم باتخاذ قراراته دون استشارة مرؤوسيه (الاستبداد بالسلطة).
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">القيادة الديمقراطية:</h3>
            <p className="leading-7 text-justify">
              وهي تلك التي يشرك فيها القائد مرؤوسيه في اتخاذ قراراته، وذلك عن طريق الاستماع إلى آرائهم واقتراحاتهم وتشجيع الاتصال وتبادل المعلومات. وفي جميع الأحوال يحتفظ القائد بالسلطة النهائية في اتخاذ القرارات.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">القيادة البيروقراطية:</h3>
            <p className="leading-7 text-justify">
              وهي تلك التي يحتكر فيها الإداريون السلطة، أي حكم الموظفين الذين تحد سلطاتهم من حرية المرؤوسين، ويغلب على هذا الأسلوب من القيادة الرغبة الشديدة إلى اللجوء إلى الطرق الرسمية في الإدارة من أجل تنفيذ التعليمات، وكذلك البطء في اتخاذ القرارات.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">القيادة التكنوقراطية:</h3>
            <p className="leading-7 text-justify">
              وهي تلك التي تسند فيها مهمة القيادة إلى الخبراء للاستفادة من خبراتهم لأنه يفترض أن يملك التكنوقراطي المعرفة أكثر من غيره، والتي تعتبر مفتاح الحلول في كثير من الأمور.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">3- العوامل المؤثرة في اختيار أسلوب القيادة:</h2>
        <p className="leading-7 text-justify">
          إن تحديد أسلوب القيادة يتأثر بمجموعة من العوامل:
        </p>
        
        <div className="mr-5 space-y-4 mt-3">
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">المواصفات الشخصية للقائد:</h3>
            <p className="leading-7 text-justify">
              تلعب المواصفات الشخصية التي يتصف بها القائد دورا أساسيا في تحديد أسلوب القيادة المتبع.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">عوامل تخص المرؤوسين:</h3>
            <p className="leading-7 text-justify">
              للأفراد تأثير كبير على طبيعة أسلوب القيادة المتبع. فمثلاً عندما تكون مجموعة العمل غير متجانسة أو قليلة الخبرة، فإن القيادة الفردية هي التي تحقق أفضل النتائج. أما عندما تكون مجموعة العمل متجانسة ومستقرة ولديها الخبرة المناسبة، فإن القيادة الديمقراطية هي التي تحقق أفضل النتائج.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">عوامل البيئة:</h3>
            <p className="leading-7 text-justify">
              إن فعالية القيادة تتطلب تطابق أسلوبها مع معطيات الحالات والظروف المحيطة، حيث يلعب كل من الزمان والمكان دورا هاما في تحديد طبيعة أسلوب القيادة، ففي حالة وقوع حادث ما، فإنه يكون من الأفضل استخدام أسلوب القيادة الفردية لأن الوقت لا يسمح بإجراء مشاورات ومناقشة الآراء. وعندما نكون بصدد منظمة لها فروع في مختلف أنحاء الوطن، فإن أسلوب القيادة الفردية لا يكون هو الأفضل حتما.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-6" />

      <section>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">4- الدافعية (التحفيز):</h2>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">4-1- تعريف الدافعية:</h3>
          <p className="leading-7 text-justify">
            المقصود بها تشجيع الأفراد وتحفيزهم واستنهاض هممهم لدفعهم للعمل أكثر وكسب إصرارهم من أجل تحقيق أهداف المنظمة بأقصى درجة من الكفاءة. هذه العملية تبدأ بالتأثير الخارجي على الفرد عن طريق رفع أجره مثلاً. إلا أن نجاح هذه العملية يتوقف على جملة من العوامل الداخلية تتعلق بوضعية الفرد ونفسيته.
          </p>
        </div>
        
        <div className="mr-5 mb-6">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3">4-2- العوامل المؤثرة في الدافعية:</h3>
          <p className="leading-7 text-justify">
            هناك مجموعة من العوامل تؤثر في الدافعية هي:
          </p>
          
          <div className="mr-6 space-y-4 mt-3">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">العوامل التنظيمية:</h4>
              <p className="leading-7 text-justify">
                وتتمثل في الأوامر والتوجيهات التي تصدر من طرف القيادة تجاه المرؤوسين والتي يجب أن تتصف بالدقة والوضوح. وإن للمرؤوسين (منطقة قبول)، أي لديهم مجال محدد لقبول هذه الأوامر والتوجيهات، لذا يجب أن تكون هذه الأوامر والتوجيهات ضمن منطقة القبول حتى يتم تنفيذها دون أي اعتراض أو مقاطعة. وعلى القيادة أن تقوم بتوسيع منطقة القبول قدر الإمكان حتى يتم تنفيذ الأوامر والتوجيهات بأقصى درجة من الكفاءة، وذلك باستخدام الأساليب الفعالة للدافعية.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">العوامل الاجتماعية:</h4>
              <p className="leading-7 text-justify">
                إن المرؤوس باعتباره فردا في المجتمع فهو يتأثر بمحيطه الاجتماعي: في السكن، وفي المدرسة، وفي العمل، أو بأي رابطة أخرى تولد له الإحساس بالانتماء للجماعة. ويكون هذا الانتماء مصدرا رئيسيا في الكثير من معتقداته واتجاهاته. وفي الكثير من الأحيان يبلغ تأثير الجماعة في سلوك أفرادها درجة يشعر عندها الفرد بأن استمراره كعضو مقبول في الجماعة أهم عنده من الحفاظ على وظيفته. وبالتالي عند إصدار الأوامر يجب على القائد أن يأخذ العوامل الاجتماعية للمرؤوسين بعين الاعتبار حتى يتم تنفيذ الأوامر والتوجيهات بأقصى درجة من الكفاءة.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">العوامل النفسية:</h4>
              <p className="leading-7 text-justify">
                إن الأحاسيس والتوقعات والمخاوف... الخ تعلب دورا هاما في توجيه سلوك الأفراد، لذا على القيادة أن تدرس ردود الفعل المتوقعة قبل إصدار الأوامر والتوجيهات، وأن تراعي الحالة النفسية للأفراد أثناء تنفيذها.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipSection;
