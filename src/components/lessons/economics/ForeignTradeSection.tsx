
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
              <span className="font-medium">حالة وجود فائض:</span> وهي تعني أن حقوق الدولة على العالم الخارجي أكبر من التزاماتها تجاه العالم الخارجي. وهي حالة غير مرغوب فيها وخاصة عندما يكون الفائض مستمرا (إلا أنها أقل خطورة بكثير من حالة العجز). وهذا يدل على أن الدولة لم تنجح في تحقيق هدف التوازن الخارجي، ومن جهة أخرى يدل على وجود أموال معطلة أي غير مستثمرة. ولإعادة التوازن للميزان تقوم الدولة بزيادة الأصول من الاحتياطات الرسمية للبد بالخارج بمقدار قيمة الفائض (ويتم هذا في ظل نظام سعر الصرف الثابت).
            </li>
            <li>
              <span className="font-medium">حالة وجود عجز:</span> أي أن حقوق الدولة على العالم الخارجي أصغر من التزاماتها تجاه العالم الخارجي. وهي الحالة الأخطر والأكثر شيوعا في العالم، وهذا يدل على أن الدولة لم تنجح في تحقيق هدف التوازن الخارجي، ومن جهة أخرى تدل على أنها تستورد سلعا وخدمات أكبر مما تسمح به مواردها. ولإعادة التوازن للميزان تقوم الدولة بتخفيض الأصول من الاحتياطات الرسمية للبند بالخارج بمقدار قيمة العجز (ويتم هذا في ظل نظام سعر الصرف الثابت).
            </li>
          </ul>
        </div>
      </section>

      {/* 3. World Trade Organization */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">
          <Globe className="h-7 w-7" />
          <span>3. المنظمة العالمية للتجارة</span>
        </h2>

        {/* 3.1 Definition */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-300 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <span>3-1. تعريف المنظمة العالمية للتجارة</span>
          </h3>
          <p className="pr-6 leading-relaxed">
            هي المنظمة العالمية الوحيدة التي تعنى بتنظيم التجارة ما بين الدول الأعضاء وتعتبر منبرا للمفاوضات التجارية الدولية، وتقوم بالإشراف على تنفيذ جميع الاتفاقيات ذات الصلة، وتفصل في المنازعات التجارية. تأسست هذه المنظمة بتاريخ 01 جانفي 1995، وقد حلت محل الاتفاقية العامة للتعريفات الجمركية والتجارة وعززت عملها.
          </p>
        </div>

        {/* 3.2 Role */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-300 flex items-center gap-2">
            <List className="h-5 w-5" />
            <span>3-2. دور المنظمة العالمية للتجارة</span>
          </h3>
          <p className="pr-6 mb-3 leading-relaxed">
            للمنظمة العالمية للتجارة مهام متعددة نذكر منها:
          </p>
          <ul className="list-disc pr-10 space-y-2 leading-relaxed">
            <li>
              <span className="font-medium">تحرير التجارة الدولية:</span> تعمل على ضمان انسياب التجارة بأكبر قدر من السلامة واليسر والحرية، ومعاونة الدول النامية في المواضيع المتعلقة بالسياسات التجارية من خلال المساعدات وبرامج التدريب.
            </li>
            <li>
              <span className="font-medium">مراقبة مدى تنفيذ الاتفاقيات التجارية بين الدول:</span> ويتم ذلك عن طريق إدارة الاتفاقيات الدولية ذات الصلة، ومراجعة السياسات الوطنية المتعلقة بالتجارة الدولية.
            </li>
            <li>
              <span className="font-medium">الفصل في النزاعات التجارية الدولية:</span> في حالة حدوث نزاع تجاري بين طرفين (ناتج عن مخالفات أو خرق للاتفاقيات التجارية) في بداية الأمر يتم حل النزاع عن طريق المشاورات ومساعي الوساطة. وفي حالة عدم التوصل إلى حل يقوم الطرف المتضرر برفع شكوى إلى المنظمة العالمية للتجارة، وبعد ذلك يتم تعيين فريق خاص بموضوع الخلافات ويتم تكليفه من طرف جهاز تسوية المنازعات، حيث يقوم بالاستماع إلى جميع الأطراف بما فيهم الخبراء المستقلين، وبعدها يقوم الفريق المكلف بموضوع الخلاف بإعداد تقرير أولي يرفع إلى جهاز تسوية المنازعات الذي يقوم باعتماده، ويتم وضع ذلك موضع التنفيذ. وفي حالة رفض تقرير الفريق المكلف من أحد الأطراف تتم إحالته على جهاز تسوية المنازعات وقد يرفضه. وفي حالة رفض الطرف المدان للحكم الصادر، يصبح للطرف المتضرر الحق في طلب التعويض عن الأضرار أو توقيع عقوبات تجارية على الطرف المدان، وتجدر الإشارة إلى أن المنظمة لا تتولى توقيع العقوبات وإنما تفوض الأمر للطرف المتضرر. وماذام الأمر كذلك، فإن فرض العقوبات من طرف الدول الضعيفة على الأقوياء (الدول المتقدمة) شبه مستحيلة.
            </li>
          </ul>
        </div>

        {/* 3.3 Organizational Structure */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-300 flex items-center gap-2">
            <Layers className="h-5 w-5" />
            <span>3-3. الهيكل التنظيمي للمنظمة العالمية للتجارة</span>
          </h3>
          <ul className="list-disc pr-10 space-y-4 leading-relaxed">
            <li>
              <span className="font-medium">المؤتمر الوزاري:</span> يتكون المؤتمر الوزاري للمنظمة العالمية للتجارة من ممثلي البلدان الأعضاء، ويعتبر أعلى هيئة للمنظمة. يعقد اجتماعاته مرة كل سنتين، ويقوم باتخاذ القرارات في جميع الأمور ذات الصلة بتنظيم التجارة الدولية وفقا لما تنص عليه الاتفاقيات التجارية متعددة الأطراف. وللمؤتمر الوزاري الحق في تعديل مواد الاتفاقية إذا تطلب الأمر ذلك.
            </li>
            <li>
              <span className="font-medium">المجلس العام:</span> يتكون المجلس العام للمنظمة العالمية للتجارة من ممثلي البلدان الأعضاء، ويقوم بمهام المؤتمر الوزاري بين الدورتين. ويقوم بالإشراف على التنفيذ المباشر لمهام المنظمة العالمية للتجارة، ويقوم بإعداد القواعد التنظيمية والإشراف على جهاز تسوية المنازعات ومراجعة السياسات التجارية للبلدان الأعضاء والإشراف على المجالس المتخصصة. بالإضافة إلى ذلك، يقوم المجلس العام بوضع الترتيبات والأسس المتعلقة بالتعاون مع المنظمات والهيئات الدولية الأخرى.
            </li>
            <li>
              <span className="font-medium">المجالس المتخصصة:</span> المجالس المتخصصة التابعة للمنظمة العالمية للتجارة هي: مجلس التجارة في السلع، مجلس التجارة في الخدمات، مجلس حقوق الملكية. يقوم كل مجلس من هذه المجالس بالإشراف المباشر على تنفيذ الاتفاقيات التي تقع في دائرة اختصاصه ويتم ذلك من خلال اللجان الفرعية المتخصصة ومجموعات التفاوض التابعة للمجلس.
            </li>
            <li>
              <span className="font-medium">اللجان الفرعية:</span> تتكون اللجان الفرعية من مجموعة اللجان التابعة للمؤتمر الوزاري مثل لجنة التجارة والبيئة، لجنة التجارة والتنمية، لجنة ميزان المدفوعات، لجنة الميزانية والإدارة، بالإضافة إلى اللجان الفرعية المتخصصة لمجلس التجارة في السلع و مجلس التجارة في الخدمات ومجلس حقوق الملكية الفكرية.
            </li>
            <li>
              <span className="font-medium">المدير العام:</span> يتم تعيين المدير العام للمنظمة العالمية للتجارة من طرف المؤتمر الوزاري. وتوضع تحت تصرفه أمانة عامة يوجد مقرها بمدينة جنيف السويسرية. يقوم المدير العام بأداء واجباته وممارسة صلاحيته خلال المدة المحددة في إطار القرارات والأنظمة التي يعتمدها المؤتمر الوزاري، ويساعده في مهامه أربعة (4) مدراء عامين مساعدين كنواب له.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ForeignTradeSection;
