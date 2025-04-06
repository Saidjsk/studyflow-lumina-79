
import { useState } from 'react';
import { 
  Lightbulb, BookOpen, Brain, Compass, Target, Clock, 
  Zap, Coffee, Moon, CheckCircle, BarChart, HeartPulse,
  Search, Book, PenTool, Award, Battery, Leaf, Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface Tip {
  id: number;
  title: string;
  description: string;
  icon: any;
  category: 'study' | 'exam' | 'wellness';
}

// بيانات النصائح المصنفة حسب الفئة
const tipsData: Tip[] = [
  // نصائح للدراسة
  {
    id: 1,
    title: "جدول دراسة ثابت",
    description: "خصص وقتاً محدداً للدراسة كل يوم واجعله روتيناً ثابتاً. تعزز هذه العادة الانضباط وتحسن التركيز.",
    icon: Clock,
    category: 'study'
  },
  {
    id: 2,
    title: "تقنية بومودورو",
    description: "قسّم وقت الدراسة إلى فترات من 25 دقيقة مع استراحات قصيرة من 5 دقائق بينها. بعد 4 دورات، خذ استراحة أطول من 15-30 دقيقة.",
    icon: Zap,
    category: 'study'
  },
  {
    id: 3,
    title: "المراجعة المتباعدة",
    description: "راجع المواد على فترات متباعدة بدلاً من المراجعة المكثفة في جلسة واحدة. هذا يحسن الاحتفاظ بالمعلومات على المدى الطويل.",
    icon: Calendar,
    category: 'study'
  },
  {
    id: 4,
    title: "الخرائط الذهنية",
    description: "استخدم الخرائط الذهنية لتنظيم المعلومات وربطها. هذه التقنية تساعد في فهم العلاقات بين المفاهيم المختلفة.",
    icon: Brain,
    category: 'study'
  },
  {
    id: 5,
    title: "التعلم النشط",
    description: "لا تكتفي بالقراءة فقط. اشرح المفاهيم بصوت عالٍ، علّم الآخرين، اكتب ملخصات، وحل أسئلة تطبيقية.",
    icon: PenTool,
    category: 'study'
  },
  {
    id: 6,
    title: "تحديد الأهداف",
    description: "ضع أهدافاً واقعية وقابلة للقياس لكل جلسة دراسية. مثلاً: 'سأحل 10 مسائل رياضية' أو 'سأفهم الفصل الثالث كاملاً'.",
    icon: Target,
    category: 'study'
  },
  {
    id: 7,
    title: "توظيف حواس متعددة",
    description: "استخدم أكثر من حاسة أثناء التعلم: اقرأ، استمع، اكتب، ارسم. كلما استخدمت حواس أكثر، زادت قدرتك على تذكر المعلومات.",
    icon: Compass,
    category: 'study'
  },
  {
    id: 8,
    title: "بيئة دراسة مناسبة",
    description: "اختر مكاناً هادئاً، مريحاً، جيد الإضاءة، وخالياً من المشتتات. نظم المكان وأبقِ كل ما تحتاجه في متناول يدك.",
    icon: BookOpen,
    category: 'study'
  },

  // نصائح للامتحان
  {
    id: 9,
    title: "حل امتحانات سابقة",
    description: "تدرب على امتحانات السنوات السابقة في ظروف مشابهة للامتحان الحقيقي، بما في ذلك الوقت المحدد.",
    icon: Book,
    category: 'exam'
  },
  {
    id: 10,
    title: "إدارة الوقت",
    description: "خصص وقتاً محدداً لكل سؤال حسب درجته. لا تتوقف طويلاً عند الأسئلة الصعبة، وعد إليها لاحقاً.",
    icon: Clock,
    category: 'exam'
  },
  {
    id: 11,
    title: "قراءة متأنية للأسئلة",
    description: "اقرأ جميع الأسئلة بعناية قبل البدء بالإجابة. ضع خطاً تحت الكلمات المفتاحية والمصطلحات المهمة.",
    icon: Search,
    category: 'exam'
  },
  {
    id: 12,
    title: "البدء بالأسئلة السهلة",
    description: "ابدأ بالإجابة على الأسئلة التي تعرفها جيداً. هذا يعزز ثقتك ويمنحك دفعة إيجابية لبقية الامتحان.",
    icon: CheckCircle,
    category: 'exam'
  },
  {
    id: 13,
    title: "تنظيم الإجابات",
    description: "نظّم إجاباتك بطريقة واضحة ومرتبة. استخدم الترقيم والنقاط البارزة لتسهيل قراءة إجاباتك.",
    icon: BarChart,
    category: 'exam'
  },
  {
    id: 14,
    title: "مراجعة الإجابات",
    description: "خصص وقتاً في نهاية الامتحان لمراجعة إجاباتك، والتحقق من عدم ترك أي سؤال دون إجابة.",
    icon: Award,
    category: 'exam'
  },
  {
    id: 15,
    title: "تجنب الغش",
    description: "لا تلجأ للغش مهما كانت الظروف. الغش يعرضك لفقدان الامتحان بالكامل ويمكن أن يؤثر على مستقبلك الدراسي.",
    icon: Battery,
    category: 'exam'
  },
  {
    id: 16,
    title: "الاسترخاء قبل الامتحان",
    description: "خذ قسطاً كافياً من الراحة في الليلة السابقة للامتحان. تجنب المراجعة المكثفة في اللحظات الأخيرة.",
    icon: Moon,
    category: 'exam'
  },

  // نصائح للصحة النفسية والجسدية
  {
    id: 17,
    title: "نوم كافٍ ومنتظم",
    description: "احرص على النوم لمدة 7-8 ساعات يومياً. النوم الجيد ضروري لاستيعاب المعلومات وتعزيز القدرة على التركيز.",
    icon: Moon,
    category: 'wellness'
  },
  {
    id: 18,
    title: "التغذية السليمة",
    description: "تناول وجبات متوازنة غنية بالفيتامينات والمعادن. الأطعمة الغنية بأوميغا 3 مفيدة للدماغ.",
    icon: Coffee,
    category: 'wellness'
  },
  {
    id: 19,
    title: "النشاط البدني",
    description: "مارس التمارين الرياضية بانتظام، ولو لمدة 20-30 دقيقة يومياً. النشاط البدني يحسن تدفق الدم للدماغ ويعزز القدرة على التركيز.",
    icon: HeartPulse,
    category: 'wellness'
  },
  {
    id: 20,
    title: "إدارة التوتر",
    description: "تعلم تقنيات الاسترخاء كالتنفس العميق والتأمل. لا تتردد في التحدث مع شخص تثق به إذا شعرت بالضغط الزائد.",
    icon: Leaf,
    category: 'wellness'
  },
  {
    id: 21,
    title: "فترات راحة منتظمة",
    description: "خذ استراحات قصيرة أثناء الدراسة للحفاظ على تركيزك. يمكنك المشي قليلاً أو ممارسة تمارين التمدد.",
    icon: Coffee,
    category: 'wellness'
  },
  {
    id: 22,
    title: "الحد من المشتتات",
    description: "ضع هاتفك بعيداً أثناء الدراسة وعطل الإشعارات. استخدم تطبيقات حظر مواقع التواصل الاجتماعي إذا لزم الأمر.",
    icon: Search,
    category: 'wellness'
  },
  {
    id: 23,
    title: "الدعم الاجتماعي",
    description: "لا تعزل نفسك. تواصل مع زملائك وشارك في مجموعات الدراسة. الدعم المتبادل يخفف من ضغط الامتحانات.",
    icon: HeartPulse,
    category: 'wellness'
  },
  {
    id: 24,
    title: "المكافآت الصغيرة",
    description: "كافئ نفسك بعد إنجاز أهداف الدراسة. مشاهدة برنامج مفضل أو قضاء وقت مع الأصدقاء يمكن أن يكون محفزاً.",
    icon: Award,
    category: 'wellness'
  }
];

// تعريف أنواع فئات النصائح
const categories = [
  { value: 'all', label: 'كل النصائح', icon: Lightbulb },
  { value: 'study', label: 'مهارات الدراسة', icon: BookOpen },
  { value: 'exam', label: 'استراتيجيات الامتحان', icon: PenTool },
  { value: 'wellness', label: 'الصحة النفسية والجسدية', icon: HeartPulse }
];

export default function Tips() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const { toast } = useToast();

  // نسخ النصيحة إلى الحافظة
  const copyTipToClipboard = (tip: Tip) => {
    const tipText = `${tip.title}: ${tip.description}`;
    navigator.clipboard.writeText(tipText).then(() => {
      toast({
        title: "تم النسخ",
        description: "تم نسخ النصيحة إلى الحافظة",
      });
    });
  };

  // تصفية النصائح حسب الفئة والبحث
  const filteredTips = tipsData.filter((tip) => {
    const matchesCategory = activeCategory === 'all' || tip.category === activeCategory;
    const matchesSearch = tip.title.includes(searchTerm) || tip.description.includes(searchTerm);
    return matchesCategory && (searchTerm === '' || matchesSearch);
  });

  return (
    <div className="animate-fade-in pb-20">
      <div className="text-center mb-6">
        <div className="inline-block rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 text-sm font-medium text-yellow-800 dark:text-yellow-300 mb-4">
          نصائح للتفوق
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          نصائح وإرشادات للنجاح في البكالوريا
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          مجموعة من النصائح المفيدة لمساعدتك على التفوق في دراستك واجتياز امتحانات البكالوريا بنجاح
        </p>
      </div>

      {/* قسم البحث والتصفية */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث عن نصيحة..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* تبويبات الفئات */}
      <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full max-w-4xl mx-auto mb-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value} className="flex items-center gap-2">
              <category.icon className="h-4 w-4" />
              <span>{category.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* محتوى التبويبات */}
        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTips.map((tip) => (
              <Card 
                key={tip.id} 
                className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => copyTipToClipboard(tip)}
              >
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className={`p-1.5 rounded-full 
                      ${tip.category === 'study' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 
                        tip.category === 'exam' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' : 
                          'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'}`}>
                      <tip.icon className="h-4 w-4" />
                    </div>
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription>{tip.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* محتوى باقي التبويبات */}
        {['study', 'exam', 'wellness'].map((category) => (
          <TabsContent key={category} value={category} className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTips.map((tip) => (
                <Card 
                  key={tip.id} 
                  className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => copyTipToClipboard(tip)}
                >
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className={`p-1.5 rounded-full 
                        ${tip.category === 'study' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 
                          tip.category === 'exam' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' : 
                            'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'}`}>
                        <tip.icon className="h-4 w-4" />
                      </div>
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardDescription>{tip.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* نصيحة اليوم */}
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          نصيحة اليوم
        </h2>
        <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-none animate-scale-in">
          <CardContent className="p-6">
            <blockquote className="text-lg italic border-r-4 border-blue-600 dark:border-blue-400 pr-4">
              "النجاح ليس نتيجة للصدفة. إنه نتيجة للعمل الجاد، المثابرة، التعلم، التضحية، وقبل كل شيء، حب ما تفعله أو تتعلم القيام به."
            </blockquote>
            <footer className="mt-4 text-right text-gray-600 dark:text-gray-400">- بيليه</footer>
          </CardContent>
        </Card>
      </div>

      {/* استراتيجية الدراسة المثالية */}
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
          <Target className="h-5 w-5 text-green-500" />
          استراتيجية الدراسة المثالية للبكالوريا
        </h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-medium mb-1">التخطيط والتنظيم (3-4 أشهر قبل البكالوريا)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ضع خطة دراسية شاملة تغطي جميع المواد. قسّم المحتوى إلى أجزاء صغيرة يمكن التحكم فيها. حدد الأولويات بناءً على نقاط ضعفك.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-medium mb-1">المراجعة المنهجية (2-3 أشهر قبل البكالوريا)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    اتبع خطتك بانتظام. ركز على فهم المفاهيم الأساسية. استخدم أساليب دراسة متنوعة: تلخيص، خرائط ذهنية، شرح المفاهيم بصوت عالٍ.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-medium mb-1">التدريب على الأسئلة (1-2 شهر قبل البكالوريا)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    حل أكبر عدد ممكن من الاختبارات السابقة. تدرب على كتابة الإجابات في الوقت المحدد. حلل أخطاءك وتعلم منها.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-medium mb-1">المراجعة النهائية (أسبوعان قبل البكالوريا)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    راجع الملخصات والنقاط الرئيسية. تركيز على المواضيع الصعبة. لا تحاول تعلم مفاهيم جديدة تماماً. الحفاظ على الراحة الكافية.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  5
                </div>
                <div>
                  <h3 className="font-medium mb-1">يوم الامتحان</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    استيقظ مبكراً. تناول وجبة خفيفة ومغذية. خذ معك كل ما تحتاجه للامتحان. اقرأ الأسئلة بتمعن. ابدأ بالأسئلة السهلة. راجع إجاباتك قبل التسليم.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
