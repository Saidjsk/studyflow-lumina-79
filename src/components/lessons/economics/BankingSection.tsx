
import { Building, CreditCard, PiggyBank, Landmark, LockKeyhole, Coins, Receipt, Wallet, BarChart4, ArrowRightLeft, BanknoteIcon, CircleDollarSign } from 'lucide-react';

const BankingSection = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6 text-purple-700 dark:text-purple-400 border-b-2 border-purple-200 dark:border-purple-800 pb-2">
        <div className="flex items-center">
          <Building className="mr-2 h-6 w-6" />
          <span>النظام المصرفي</span>
        </div>
      </h2>

      {/* 1. Banking System */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center">
          <Landmark className="mr-2 h-5 w-5" />
          1- النظام المصرفي
        </h3>

        <div className="pr-5">
          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">1-1- تعريف النظام المصرفي</h4>
          <p className="mb-4 leading-relaxed">
            يقصد بالنظام المصرفي مجموعة المؤسسات المصرفية التي تتعامل بالائتمان في بلد ما، ويختلف النظام المصرفي من بلد إلى آخر ويعود هذا الاختلاف إلى نوع النظام الاقتصادي السائد. وبصفة عامة يمكن للنظام المصرفي أن يشتمل على: المصارف التجارية، والمصارف المتخصصة، والمصرف المركزي، حيث يقف هذا الأخير على قمة النظام المصرفي لأي بلد.
          </p>

          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">1-2- أهمية النظام المصرفي</h4>
          <p className="mb-4 leading-relaxed">
            لدى النظام المصرفي أهمية بالغة حيث يعتبر الركيزة الأساسية في اقتصاد أي بلد من البلدان، فعن طريقه يتم تجميع المدخرات من مختلف الأعوان الاقتصاديين ومنح التسهيلات الائتمانية والقروض بمختلف أنواعها وآجالها لمن يطلبها.
          </p>
        </div>
      </section>

      {/* 2. Banks */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center">
          <PiggyBank className="mr-2 h-5 w-5" />
          2- البنوك (المصارف)
        </h3>

        <div className="pr-5">
          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">2-1- تعريف البنوك</h4>
          
          <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">أ- أصل كلمة بنك</h5>
          <p className="mb-4 leading-relaxed pr-4">
            هي كلمة غير عربية مشتقة من كلمة إيطالية (Banco) بانكو وتعني المصطبة التي يجلس عليها الصرافون لتبادل العملات. ثم بعد ذلك أصبح المقصود بها المنضدة التي فوقها عد وتبادل العملات. وفي الأخير أصبحت كلمة بنك تشير إلى المكان الذي تتم فيه المتاجرة بالنقود.
          </p>

          <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">ب- أصل كلمة مصرف</h5>
          <p className="mb-4 leading-relaxed pr-4">
            هي الكلمة العربية المقابلة لكلمة بنك. والمصرف هو اسم للمكان الذي يتم فيه الصرف، وجمعها مصارف.
          </p>

          <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">ج- تعريف البنك (المصرف)</h5>
          <p className="mb-4 leading-relaxed pr-4">
            هو عبارة عن مؤسسة هدفها التعامل في النقود والائتمان، حيث تقوم بتجميع النقود الفائضة عن حاجة مختلف الأعوان الاقتصاديين بغرض إقراضها وفق أسس معينة أو استثمارها في اوجه متعددة.
          </p>

          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">2-2- أنواع البنوك</h4>
          
          <div className="mb-5 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <h5 className="text-md font-medium text-purple-600 dark:text-purple-400 mb-2 flex items-center">
              <Landmark className="mr-2 h-4 w-4" />
              بنك الجزائر (البنك المركزي)
            </h5>
            <p className="mb-2 leading-relaxed pr-4">
              وفقا للأمر 03/11 المؤرخ في جمادى الثانية 1424 هـ الموافق 26 أوت 2003 المتعلق بالنقد والقرض، فإن بنك الجزائر هو مؤسسة وطنية تتمتع بالشخصية المعنوية والاستقلال المالي.
            </p>
            <p className="mb-2 leading-relaxed pr-4">
              ويعد تاجرا في علاقته مع الغير، ويحكمه التشريع التجاري. تمتلك الدولة رأسمال بنك الجزائر كله. يقع مقره في مدينة الجزائر، ويمكن له فتح فروع أو وكالات في كل المدن حيث يرى ضرورة لذلك.
            </p>
            <p className="mb-2 leading-relaxed pr-4">
              لا يهدف البنك المركزي إلى تحقيق الربح وإنما هدفه الرئيسي هو خدمة الصالح الاقتصادي العام (من وجهة نظر الحكومة)، ولا يتعامل مع الأفراد.
            </p>
            
            <p className="mt-3 font-medium">يتولى أمور بنك الجزائر مجلسان:</p>
            <ul className="list-disc list-inside pr-5 mt-2 space-y-1">
              <li>مجلس الإدارة الذي يتولى الشؤون الإدارية للبنك ويتكون من محافظ ويساعده في ذلك ثلاث نواب محافظ.</li>
              <li>مجلس النقد والقرض الذي يتولى السلطة النقدية في البلاد ويتكون من أعضاء مجلس إدارة بنك الجزائر وشخصيتان تختاران بحكم كفاءتهما في المسائل الاقتصادية والنقدية.</li>
            </ul>
            
            <p className="mt-3 font-medium">لبنك الجزائر وظائف أساسية تتمثل في:</p>
            <ul className="list-disc list-inside pr-5 mt-2 space-y-2">
              <li>الحق في إصدار العملة النقدية، لذا يدعى ببنك الإصدار</li>
              <li>يعتبر بنك البنوك، ويقدم للبنوك التجارية عند الحاجة قروض مقابل فائدة، ويقوم بإعادة خصم الأوراق التجارية التي تقع في حوزتها والتي سبق وأن خصمتها مقابل فائدة معينة تدعى بسعر إعادة الخصم وأيضا يقوم بتسوية الحسابات بين المصارف التجارية عن طريق المقاصة.</li>
              <li>الترخيص بفتح البنوك والمؤسسات المالية، وتعديل قوانينها الأساسية وسحب الاعتماد، وكذلك الترخيص بفتح مكاتب تمثيل البنوك والمؤسسات المالية الأجنبية في الجزائر.</li>
              <li>حماية زبائن البنوك والمؤسسات المالية لا سيما في مجال العمليات مع هؤلاء الزبائن.</li>
              <li>هو بنك الحكومة حيث يقوم المصرف بمختلف الأعمال المصرفية الخاصة بالإدارة الحكومية حيث أن هذه الأخيرة تودع ما لديها من أموال في هذا المصرف، وهو بدوره يقدم لها ما تحتاجه من قروض مختلفة الآجال، ويتولى البنك المركزي تنفيذ السياسة الاقتصادية للحكومة وذلك عن طريق الرقابة على الائتمان.</li>
            </ul>
          </div>
          
          <div className="mb-5 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <h5 className="text-md font-medium text-purple-600 dark:text-purple-400 mb-2 flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              البنوك التجارية (بنوك الودائع)
            </h5>
            <p className="leading-relaxed pr-4">
              تعتبر البنوك التجارية أقدم المصارف نشأة، وهي أساس أي نظام مصرفي، وهي تلك المصارف التي تقوم بصفة معتادة بقبول الودائع من الأفراد والهيئات، وتلتزم بدفعها عند الطلب أو في موعد متفق عليه، وهي تقوم بعمليات القرض، وكذا وضع وسائل الدفع تحت تصرف الزبائن وإدارة هذه الوسائل. ويقصد بوسائل الدفع كل الأدوات التي تمكن كل شخص من تحويل الأموال مهما يكن السند أو الأسلوب التقني المستعمل مثل: النقود، الصك، السند لأمر، السفتجة... الخ.
            </p>
          </div>
          
          <div className="mb-5 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <h5 className="text-md font-medium text-purple-600 dark:text-purple-400 mb-2 flex items-center">
              <LockKeyhole className="mr-2 h-4 w-4" />
              البنوك المتخصصة (بنوك الأعمال)
            </h5>
            <p className="leading-relaxed pr-4">
              هي بنوك حديثة النشأة نسبيا، حيث ظهرت لتلبية حاجات التطور الاقتصادي في مجالات مختلفة مثل الزراعة والصناعة والسكن، وهذه المجالات تحتاج إلى استثمار طويل الأجل. لذا فهذه البنوك تعتمد على أموالها في المقام الأول، وعلى الودائع طويلة الأجل، والاقتراض من الغير في شكل سندات مقابل فائدة يتحملها المصرف. وتقتصر معاملاتها على إقراض المؤسسات قروضا متوسطة وطويلة الأجل مقابل الحصول على فائدة، وكذلك تمويل المشاريع المختلفة عن طريق الاشتراك في رأسمالها.
            </p>
          </div>
          
          <div className="mb-5 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <h5 className="text-md font-medium text-purple-600 dark:text-purple-400 mb-2 flex items-center">
              <Coins className="mr-2 h-4 w-4" />
              المؤسسات المالية
            </h5>
            <p className="leading-relaxed pr-4">
              المؤسسات المالية هي عبارة عن أشخاص معنوية مهمتها العادية والرئيسية القيام بالأعمال المصرفية ما عدا تلقي الأموال من الجمهور (الودائع). وهي تعتمد أساسا على رأسمالها، وعلى المدخرات طويلة الأجل، والاقتراض من الغير مقابل فوائد تتحملها هذه المؤسسات.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">2-3- البنوك المعتمدة في الجزائر</h4>
          
          <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">البنوك العمومية الجزائرية (مملوكة من طرف الدولة)</h5>
          <ul className="list-disc list-inside pr-5 mt-2 space-y-2 mb-4">
            <li>بنك الجزائر للتنمية: تأسس سنة 1963 وهو بنك متخصص في تمويل الاستثمارات حيث يمنح قروض متوسطة وطويلة الأجل.</li>
            <li>الصندوق الوطني للتوفير والاحتياط: تأسس سنة 1964 تتمثل وظيفته الأساسية في تجميع مدخرات الأفراد وتمويل الإسكان.</li>
            <li>البنك الوطني الجزائري: تأسس سنة 1966 وهو بنك ودائع واستثمارات حيث يقدم القروض للمؤسسات الوطنية.</li>
            <li>القرض الشعبي الجزائري: تأسس سنة 1967 وهو بنك ودائع حيث يقوم بمنح القروض للمؤسسات الصغيرة والمتوسطة.</li>
            <li>بنك الجزائر الخارجي: تأسس سنة 1967 وهو بنك ودائع تتمثل وظيفته الأساسية في تمويل التجارة الخارجية.</li>
            <li>بنك الفلاحة والتنمية الريفية: تأسس سنة 1982 وهو بنك متخصص يقوم بتقديم القروض للقطاع الفلاحي.</li>
            <li>بنك التنمية المحلية: تأسس سنة 1985 وهو بنك ودائع تتمثل وظيفته الأساسية في التعامل مع الهيئات العمومية المحلية.</li>
          </ul>
          
          <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">البنوك والمؤسسات المالية الأجنبية</h5>
          <p className="mb-4 leading-relaxed pr-4">
            أصبح بإمكان البنوك والمؤسسات المالية الأجنبية بعد صدور القانون 90/10 المتعلق بالنقد والقرض فتح فروع لها بالجزائر يحكمها القانون الجزائري، ويتعين عليها أن تخصص لفروعها مبلغا مساويا على الأقل للرأسمال الأدنى المطلوب حسب الحالة من البنوك والمؤسسات المالية التي يحكمها القانون الجزائري.
          </p>
        </div>
      </section>

      {/* 3. Banking Operations */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center">
          <CreditCard className="mr-2 h-5 w-5" />
          3- العمليات المصرفية
        </h3>

        <div className="pr-5">
          <p className="mb-4 leading-relaxed">
            تقوم المصارف التجارية بمجموعة من المعاملات يمكن تصنيفها إلى ثلاثة أنواع رئيسية وذلك كما يلي:
          </p>
          
          <div className="mb-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-3 flex items-center">
              <Wallet className="mr-2 h-5 w-5" />
              3-1- قبول الودائع
            </h4>
            
            <p className="mb-4 leading-relaxed">
              تعتبر الودائع المصدر الرئيسي لأموال البنوك التجارية، وهي تشكل الجانب الأكبر من خصوم البنك. ويمكن تصنيف الودائع إلى:
            </p>
            
            <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">أ- الودائع تحت الطلب (الودائع الجارية)</h5>
            <p className="mb-4 leading-relaxed pr-4">
              هي المبالغ التي يودعها الأفراد والمؤسسات في حساباتهم الجارية لدى البنك، ويمكن سحبها في أي وقت دون إشعار مسبق، عن طريق الشيكات، أو أوامر التحويل أو البطاقات الإلكترونية. وعادة لا تمنح البنوك فوائد على هذا النوع من الودائع.
            </p>
            
            <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">ب- ودائع التوفير</h5>
            <p className="mb-4 leading-relaxed pr-4">
              وهي حسابات التوفير التي يضعها الأفراد في البنك بهدف الادخار، ويمكن السحب منها في أي وقت مقابل عائد بسيط. ويتم السحب من هذه الحسابات بواسطة دفتر التوفير أو البطاقات الإلكترونية.
            </p>
            
            <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">ج- الودائع لأجل (الودائع بإشعار)</h5>
            <p className="mb-4 leading-relaxed pr-4">
              هي المبالغ التي يودعها الأفراد والمؤسسات لفترة زمنية محددة متفق عليها مسبقاً مع البنك، ولا يمكن سحبها قبل انتهاء المدة إلا بشروط خاصة. وتتميز هذه الودائع بأنها تحقق عائداً أكبر من الودائع تحت الطلب وودائع التوفير.
            </p>
            
            <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">د- شهادات الإيداع</h5>
            <p className="leading-relaxed pr-4">
              هي عبارة عن أوراق مالية قابلة للتداول تصدرها البنوك بفئات معينة وآجال مختلفة مقابل مبالغ مودعة لديها، وتمنح البنوك فوائد على هذه الشهادات.
            </p>
          </div>
          
          <div className="mb-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-3 flex items-center">
              <BarChart4 className="mr-2 h-5 w-5" />
              3-2- توظيف الأموال
            </h4>
            
            <p className="mb-4 leading-relaxed">
              يعد منح القروض الوظيفة الأساسية للبنوك التجارية، حيث تقوم باستخدام الأموال المودعة لديها في منح قروض مختلفة الآجال والأنواع، بالإضافة إلى استثمارها في شراء أوراق مالية مختلفة. وتقسم القروض التي تمنحها البنوك حسب المدة إلى:
            </p>
            
            <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">أ- القروض قصيرة الأجل</h5>
            <p className="mb-4 leading-relaxed pr-4">
              هي القروض التي لا تتجاوز مدتها السنة الواحدة، وتمنح عادة لتمويل رأس المال العامل للشركات وتغطية النفقات الجارية. ومن أمثلتها:
            </p>
            <ul className="list-disc list-inside pr-5 mt-2 space-y-2 mb-4">
              <li>القروض بضمان بضائع: حيث يقدم العميل بضائع كضمان للقرض.</li>
              <li>القروض بضمان أوراق مالية: حيث يقدم العميل أوراقاً مالية كضمان للقرض.</li>
              <li>خصم الأوراق التجارية: حيث يقوم البنك بشراء الأوراق التجارية (كالكمبيالات) قبل موعد استحقاقها مقابل خصم جزء من قيمتها.</li>
              <li>السحب على المكشوف: وهو السماح للعميل بسحب مبالغ تزيد عن رصيده الفعلي في حدود معينة ولفترة قصيرة.</li>
            </ul>
            
            <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">ب- القروض متوسطة الأجل</h5>
            <p className="mb-4 leading-relaxed pr-4">
              هي القروض التي تتراوح مدتها بين سنة وخمس سنوات، وتستخدم عادة لتمويل المشاريع الإنتاجية المتوسطة، وشراء الآلات والمعدات. وتمنح هذه القروض عادة للمؤسسات الصغيرة والمتوسطة.
            </p>
            
            <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">ج- القروض طويلة الأجل</h5>
            <p className="mb-4 leading-relaxed pr-4">
              هي القروض التي تزيد مدتها عن خمس سنوات، وتستخدم لتمويل المشاريع الاستثمارية الكبيرة كبناء العقارات وإنشاء المصانع وشراء الأصول الثابتة. وقد يقوم البنك بتقديم هذه القروض منفرداً أو بالمشاركة مع بنوك أخرى.
            </p>
            
            <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">د- الاستثمار في الأوراق المالية</h5>
            <p className="leading-relaxed pr-4">
              تقوم البنوك باستثمار جزء من أموالها في شراء الأوراق المالية مثل السندات الحكومية والأسهم وسندات الشركات. وتهدف البنوك من ذلك إلى تحقيق عوائد مناسبة مع الاحتفاظ بدرجة عالية من السيولة، حيث يمكن بيع هذه الأوراق بسهولة عند الحاجة.
            </p>
          </div>
          
          <div className="mb-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-3 flex items-center">
              <CircleDollarSign className="mr-2 h-5 w-5" />
              3-3- معاملات مصرفية أخرى
            </h4>
            
            <p className="mb-4 leading-relaxed">
              بالإضافة إلى قبول الودائع ومنح القروض، تقدم البنوك العديد من الخدمات المصرفية الأخرى، منها:
            </p>
            
            <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">أ- خدمات الدفع والتحويل</h5>
            <ul className="list-disc list-inside pr-5 mt-2 space-y-2 mb-4">
              <li>تحصيل الشيكات والأوراق التجارية.</li>
              <li>إصدار الحوالات المصرفية والشيكات السياحية.</li>
              <li>التحويلات الداخلية والخارجية.</li>
              <li>توفير البطاقات المصرفية بأنواعها (الخصم المباشر، الائتمان).</li>
              <li>خدمات الصراف الآلي والخدمات المصرفية الإلكترونية.</li>
            </ul>
            
            <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">ب- خدمات الصرف الأجنبي</h5>
            <ul className="list-disc list-inside pr-5 mt-2 space-y-2 mb-4">
              <li>شراء وبيع العملات الأجنبية.</li>
              <li>فتح الاعتمادات المستندية للتجارة الخارجية.</li>
              <li>إصدار خطابات الضمان للتعاملات الدولية.</li>
            </ul>
            
            <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">ج- الخدمات الاستشارية</h5>
            <ul className="list-disc list-inside pr-5 mt-2 space-y-2 mb-4">
              <li>تقديم المشورة المالية والاستثمارية للعملاء.</li>
              <li>إدارة المحافظ الاستثمارية.</li>
              <li>دراسة الجدوى الاقتصادية للمشاريع.</li>
            </ul>
            
            <h5 className="text-md font-medium text-teal-600 dark:text-teal-400 mb-2">د- خدمات مالية أخرى</h5>
            <ul className="list-disc list-inside pr-5 mt-2 space-y-2">
              <li>تأجير الخزائن الحديدية لحفظ المستندات والمقتنيات الثمينة.</li>
              <li>إدارة الممتلكات والتركات.</li>
              <li>التأمين المصرفي وخدمات التأمين بالتعاون مع شركات التأمين.</li>
              <li>خدمات التمويل التأجيري (الإيجار التمويلي).</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankingSection;
