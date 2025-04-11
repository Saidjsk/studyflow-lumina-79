
const ExchangeSection = () => {
  return (
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
  );
};

export default ExchangeSection;
