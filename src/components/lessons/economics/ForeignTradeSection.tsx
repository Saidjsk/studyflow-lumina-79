
import React from 'react';
import { Globe, FileText, List, TrendingUp, Gavel, BarChart, Layers, Scale } from 'lucide-react';

const ForeignTradeSection = () => {
  return (
    <div>
      {/* 1. Foreign Trade */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">
          <Globe className="h-7 w-7" />
          <span>1. التجارة الخارجية</span>
        </h2>

        {/* 1.1 Definition */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-300 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <span>1-1. تعريف التجارة الخارجية</span>
          </h3>
          <p className="pr-6 leading-relaxed">
            التجارة الخارجية تعني مبادلة السلع والخدمات بين أشخاص طبيعيين معنويين يقيمون في دول مختلفة.
          </p>
        </div>

        {/* 1.2 Reasons */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-300 flex items-center gap-2">
            <List className="h-5 w-5" />
            <span>1-2. أسباب قيام التجارة الخارجية</span>
          </h3>
          <ul className="list-disc pr-10 space-y-2 leading-relaxed">
            <li>عدم استطاعة أي دولة تحقيق الاكتفاء الذاتي من جميع السلع والخدمات.</li>
            <li>إن توسع المؤسسات الاقتصادية أدى إلى زيادة حجم الإنتاج الأمر الذي أدى إلى البحث عن أسواق جديدة لتصريف منتجاتها عن طريق التصدير، والحصول على منتجات الدول الأخرى عن طريق الاستيراد.</li>
            <li>إن تقسيم العمل الدولي أدى إلى ظهور دول متخصصة في الإنتاج الزراعي وأخرى متخصصة في الإنتاج الصناعي.</li>
            <li>من مصلحة الدولة أن تتخصص في إنتاج المنتج الذي يتميز بتكاليف نسبية أقل وتصدير الفائض منه، وتقوم باستيراد المنتجات التي يمكن إنتاجها محليا بتكاليف نسبية أعلى. ويقصد بالتكاليف النسبية لإنتاج سلعة ما، تكاليف إنتاج هذه السلعة في بلد ما منسوبة إلى تكاليف إنتاج سلعة أخرى في نفس البلد، أو منسوبة إلى تكاليف إنتاج نفس السلعة في بلد آخر.</li>
          </ul>
        </div>

        {/* 1.3 Importance */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-300 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            <span>1-3. أهمية التجارة الخارجية</span>
          </h3>
          <p className="pr-6 leading-relaxed">
            تأتي أهمية التجارة الخارجية من المزايا التي يستفيد منها كل بلد يقيم علاقات تجارية مع بلدان أخرى من جهة، ومن صعوبة أو استحالة انعزال أي دولة عن العالم الخارجي من جهة أخرى.
          </p>
        </div>

        {/* 1.4 Foreign Trade Policy */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-300 flex items-center gap-2">
            <Gavel className="h-5 w-5" />
            <span>1-4. سياسة التجارة الخارجية</span>
          </h3>
          <p className="pr-6 mb-4 leading-relaxed">
            هي مجموعة الإجراءات والوسائل التي تتخذها الدولة لتعظيم العائد من علاقاتها التجارية مع العالم الخارجي بغية تحقيق مجموعة من الأهداف الاقتصادية خلال فترة زمنية معينة. تستند السياسات التجارية الخارجية إلى مبدأين أساسيين هما:
          </p>

          <div className="pr-8 mb-4">
            <h4 className="font-semibold text-lg mb-2 text-blue-500 dark:text-blue-300">مبدأ حرية التجارة:</h4>
            <p className="mb-3 leading-relaxed">
              يدعو هذا المبدأ إلى إلغاء كافة أشكال القيود على التجارة الخارجية، وعدم التمييز في المعاملة بين السلع المنتجة في الخارج وبين السلع المماثلة المنتجة محليا، أي معاملة كلا النوعين من السلع على أساس واحد. لتحقيق أهداف معينة يمكن إيجاز بعضها في النقاط التالية:
            </p>
            <ul className="list-disc pr-10 space-y-2 leading-relaxed">
              <li>الحد من الاحتكار، ففي حالة الحماية تصبح بعض الشركات التي لا تتمتع بأي كفاءة إنتاجية في وضع احتكاري يمكنها من رفع الأسعار وبيع منتجاتها مهما كانت درجة جودتها.</li>
              <li>الاستغلال الأمثل والعقلاني للثروات.</li>
              <li>انخفاض أسعار مختلف السلع والخدمات.</li>
              <li>إنعاش التجارة الخارجية بين دول العالم مما يؤدي إلى زيادة التنافس الدولي مما يتيح للدولة التي تتمتع بميزة نسبية وميزة تنافسية في إنتاج سلعة معينة من أن تتوسع في إنتاج هذه السلعة بما يفوق احتياجاتها المحلية على أن تقوم بمبادلة الفائض مع بلدان أخرى بسلع تحتاجها وليس فيها أي ميزة نسبية.</li>
            </ul>
          </div>

          <div className="pr-8">
            <h4 className="font-semibold text-lg mb-2 text-blue-500 dark:text-blue-300">مبدأ الحماية:</h4>
            <p className="mb-3 leading-relaxed">
              يدعو هذا المبدأ إلى تدخل الدولة عن طريق مجموعة من الإجراءات التي تتضمن جملة من القيود المختلفة على التجارة الخارجية لتحقيق أهداف معينة يمكن إيجاز بعضها في النقاط التالية:
            </p>
            <ul className="list-disc pr-10 space-y-2 leading-relaxed">
              <li>حماية الصناعات المحلية الناشئة.</li>
              <li>حماية الأسواق المحلية من سياسة الإغراق التي تتبعها بعض الدول المصدرة لسلع رخيصة.</li>
              <li>زيادة إيرادات الخزينة العمومية.</li>
              <li>تقليل الواردات بهدف تخفيف العجز في ميزان المدفوعات.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Balance of Payments */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">
          <BarChart className="h-7 w-7" />
          <span>2. ميزان المدفوعات</span>
        </h2>

        {/* 2.1 Definition */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-300 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <span>2-1. تعريف ميزان المدفوعات</span>
          </h3>
          <p className="pr-6 leading-relaxed">
            ميزان المدفوعات هو سجل تسجل فيه القيم النقدية لمختلف المعاملات الاقتصادية التي تتم بين الأعوان في دولة ما وغير المقيمين فيها (العالم الخارجي) خلال فترة معينة عادة ما تكون سنة.
            ويقوم ميزان المدفوعات على مبدأ القيد المزدوج، مما يجعله متوازنا من الناحية المحاسبية. يتكون هذا الميزان من جانبين أحدهما تسجل فيه حقوق الدولة على العالم الخارجي، والآخر مدين تسجل فيه التزامات الدولة تجاه العالم الخارجي.
          </p>
        </div>

        {/* 2.2 Components */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-300 flex items-center gap-2">
            <Layers className="h-5 w-5" />
            <span>2-2. مكونات ميزان المدفوعات</span>
          </h3>
          <p className="pr-6 mb-4 leading-relaxed">
            يتكون ميزان المدفوعات من الحسابات التالية:
          </p>

          <div className="pr-8 mb-4">
            <h4 className="font-semibold text-lg mb-2 text-blue-500 dark:text-blue-300">الحساب الجاري:</h4>
            <p className="mb-2 leading-relaxed">ويتضمن ثلاثة عناصر هي:</p>
            <ul className="list-disc pr-10 space-y-2 leading-relaxed">
              <li>
                <span className="font-medium">ميزان التجارة المنظورة (الميزان التجاري):</span> ويتضمن حركة الصادرات من السلع والتي ينتج عنها استلام الأموال من الخارج (معاملات دائنة)، والواردات من السلع والتي ينتج عنها دفع الأموال إلى الخارج (معاملات مدينة).
              </li>
              <li>
                <span className="font-medium">ميزان التجارة غير المنظورة (ميزان الخدمات):</span> ويتضمن حركة الصادرات من الخدمات (معاملات دائنة)، والواردات من الخدمات (معاملات مدينة). ومن أمثلة الخدمات: النقل والتأمين والاتصالات.. الخ.
              </li>
              <li>
                <span className="font-medium">ميزان التحويلات من طرف واحد (تحويلات دون مقابل):</span> ويتضمن التحويلات الآتية من الخارج التي تسجل في جانبه الدائن، والتحويلات نحو الخارج التي تسجل في الجانب المدين. قد تكون هذه التحويلات خاصة مثل تحويلات المهاجرين والعاملين في الخارج إلى ذويهم، وقد تكون رسمية مثل المعاشات والتعويضات المقدمة من الحكومات.
              </li>
            </ul>
          </div>

          <div className="pr-8 mb-4">
            <h4 className="font-semibold text-lg mb-2 text-blue-500 dark:text-blue-300">حساب رأس المال:</h4>
            <p className="mb-2 leading-relaxed">ويتضمن العناصر التالية:</p>
            <ul className="list-disc pr-10 space-y-2 leading-relaxed">
              <li>تغيرات أصول البلد في الخارج، وتغيرات الأصول الأجنبية في البلد.</li>
              <li>الاستثمارات المباشرة الأجنبية في الداخل واستثمارات البلد المباشرة في الخارج.</li>
              <li>المشتريات والمبيعات من الأوراق المالية.</li>
              <li>استثمارات المحفظة في الخارج.</li>
            </ul>
          </div>

          <div className="pr-8">
            <h4 className="font-semibold text-lg mb-2 text-blue-500 dark:text-blue-300">حساب الاحتياطات الرسمية:</h4>
            <p className="mb-2 leading-relaxed">
              يتضمن هذا الحساب التغير في أصول الاحتياطات الرسمية للبلد في الخارج، والتغير في أصول الاحتياطات الرسمية للأجانب في البلد. وتتضمن الاحتياطات الرسمية العناصر التالية:
            </p>
            <ul className="list-disc pr-10 space-y-2 leading-relaxed">
              <li>ممتلكات الأجهزة النقدية المحلية من الذهب.</li>
              <li>الحيازة الرسمية من العملات الأجنبية لدى البلد.</li>
              <li>حقوق السحب الخاصة.</li>
              <li>احتياطات البلد لدى صندوق النقد الدولي.</li>
            </ul>
          </div>
        </div>

        {/* 2.3 Equilibrium */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-300 flex items-center gap-2">
            <Scale className="h-5 w-5" />
            <span>2-3. توازن ميزان المدفوعات</span>
          </h3>
          <p className="pr-6 mb-4 leading-relaxed">
            يكون ميزان المدفوعات دائما متوازنا من الناحية المحاسبية، لكن هذا التوازن المحاسبي لا يعني بالضرورة توازنا من الناحية الاقتصادية. فقد يكون الخلل في أحد عناصر الميزان، وعادة ما يكون العجز في الحساب الجاري. وبناء على ذلك يمكن التمييز بين ثلاث حالات هي:
          </p>
          <ul className="list-disc pr-10 space-y-2 leading-relaxed">
            <li>
              <span className="font-medium">حالة التوازن:</span> معناها أن حقوق الدولة على العالم الخارجي مساوية لالتزاماتها تجاه العالم الخارجي. وهذا يدل على كفاءة الأداء الاقتصادي للبلد.
            </li>
            <li>
              <span className="font-medium">حالة الفائض:</span> معناها أن حقوق الدولة على العالم الخارجي أكبر من التزاماتها تجاهه. وهذا يدل على قوة الأداء الاقتصادي للبلد.
            </li>
            <li>
              <span className="font-medium">حالة العجز:</span> معناها أن حقوق الدولة على العالم الخارجي أقل من التزاماتها تجاهه. وهذا يدل على ضعف الأداء الاقتصادي للبلد.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ForeignTradeSection;
