
const MoneySection = () => {
  return (
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
  );
};

export default MoneySection;
