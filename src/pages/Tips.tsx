
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, Brain, Clock, Book, Calendar, CheckCircle2, Target, ListTodo, 
  BrainCircuit, Coffee, SunMedium, Moon, BarChart2, School, BookOpen, 
  Pencil, Timer, AlertCircle, ThumbsUp, Heart, Zap
} from "lucide-react";

const Tips = () => {
  const [activeTab, setActiveTab] = useState("general");
  
  // نصائح موسعة مع أيقونات ووصف مفصل
  const tips = {
    general: [
      {
        title: "التخطيط الاستراتيجي",
        description: "قم بإعداد خطة دراسية شاملة لكل الفصل الدراسي مع تحديد أهداف أسبوعية وشهرية واضحة. استخدم تطبيقات تنظيم المهام أو مخططات ورقية لتتبع تقدمك وتعديل خطتك حسب الحاجة.",
        icon: Calendar,
        badge: "أساسي"
      },
      {
        title: "الدراسة المركزة",
        description: "استخدم تقنية بومودورو (25 دقيقة دراسة متواصلة ثم استراحة 5 دقائق) لتحسين التركيز وتجنب الإرهاق الذهني. حدد أهدافًا صغيرة لكل جلسة دراسية وكافئ نفسك عند تحقيقها.",
        icon: Clock,
        badge: "تقنية فعالة"
      },
      {
        title: "التعلم النشط",
        description: "لا تكتفِ بقراءة المواد الدراسية، بل قم بشرح المفاهيم بصوت عالٍ، وصياغتها بأسلوبك الخاص، وربطها بمعلوماتك السابقة. استخدم الخرائط الذهنية والملخصات المرئية لترسيخ المعلومات.",
        icon: Brain,
        badge: "استراتيجية متقدمة"
      },
      {
        title: "التعلم بالممارسة",
        description: "خصص وقتًا كافيًا لحل تمارين وأسئلة متنوعة من امتحانات سابقة. تدرب على الإجابة ضمن الوقت المحدد للامتحان وقم بتصحيح أخطائك لتجنب تكرارها في الامتحان الحقيقي.",
        icon: Target,
        badge: "مهارة أساسية"
      },
      {
        title: "تدوين الملاحظات بفعالية",
        description: "استخدم تقنيات تدوين متقدمة مثل طريقة كورنيل أو خريطة المفاهيم. نظّم ملاحظاتك بألوان مختلفة واستخدم رموزًا واختصارات لتسهيل المراجعة السريعة قبل الامتحانات.",
        icon: Pencil,
        badge: "مهارة متقدمة"
      },
      {
        title: "بيئة دراسية مثالية",
        description: "أنشئ مساحة دراسية مخصصة خالية من المشتتات، مع إضاءة جيدة وتهوية مناسبة. جرّب أنواع مختلفة من الموسيقى الهادئة أو الضوضاء البيضاء إذا كانت تساعدك على التركيز.",
        icon: SunMedium,
        badge: "نمط حياة"
      },
      {
        title: "استخدام التكنولوجيا بذكاء",
        description: "وظّف التطبيقات والمواقع التعليمية لتعزيز فهمك للمواد الصعبة، واستخدم تطبيقات حظر مواقع التواصل الاجتماعي أثناء فترات الدراسة لتجنب تشتت الانتباه.",
        icon: BrainCircuit,
        badge: "أدوات رقمية"
      },
      {
        title: "مجموعات الدراسة التفاعلية",
        description: "شارك في مجموعات دراسية مع زملاء متحمسين وملتزمين. قم بتقسيم المواضيع وتبادل الشرح، وطرح الأسئلة الصعبة، ومناقشة وجهات النظر المختلفة لتعميق الفهم.",
        icon: School,
        badge: "تعلم تعاوني"
      }
    ],
    exams: [
      {
        title: "فهم نمط الأسئلة",
        description: "ادرس بعناية نماذج الامتحانات السابقة للتعرف على أنماط الأسئلة المتكررة والموضوعات الأكثر أهمية. تعرّف على معايير التصحيح وتوزيع الدرجات لكل قسم من الامتحان.",
        icon: ListTodo,
        badge: "تحليل"
      },
      {
        title: "استراتيجية قراءة الأسئلة",
        description: "خصص أول 5-10 دقائق لقراءة ورقة الامتحان كاملة. ضع خطًا تحت الكلمات المفتاحية وتأكد من فهم المطلوب تمامًا قبل الشروع في الإجابة.",
        icon: BookOpen,
        badge: "أولوية قصوى"
      },
      {
        title: "إدارة وقت الامتحان",
        description: "قسّم وقت الامتحان بناءً على عدد الأسئلة ودرجاتها، وخصص دقائق معدودة للمراجعة. استخدم ساعة لتتبع الوقت المتبقي لكل سؤال والتزم بالتوقيت المخصص.",
        icon: Timer,
        badge: "مهارة حاسمة"
      },
      {
        title: "التعامل مع الأسئلة الصعبة",
        description: "لا تضيع وقتًا طويلاً على سؤال صعب. ضع علامة عليه وانتقل للأسئلة التالية، ثم عد إليه لاحقًا إذا سمح الوقت بذلك. اكتب أي أفكار جزئية قد تساعدك في كسب بعض النقاط.",
        icon: AlertCircle,
        badge: "حل المشكلات"
      },
      {
        title: "تنظيم الإجابات",
        description: "استخدم نقاطًا مرقمة وفقرات واضحة لتنظيم إجابتك. ابدأ بالنقاط الأساسية، ثم وسّع فيها، واستخدم المصطلحات العلمية المناسبة. اترك مساحات بين الإجابات للإضافات المحتملة.",
        icon: CheckCircle2,
        badge: "وضوح"
      },
      {
        title: "المراجعة الاستراتيجية",
        description: "خصص 10-15 دقيقة على الأقل في نهاية الامتحان للمراجعة المنهجية. تحقق من الأرقام والحسابات والأخطاء الإملائية. تأكد من الإجابة على جميع الأسئلة المطلوبة.",
        icon: ThumbsUp,
        badge: "ضروري"
      },
      {
        title: "التقديم المتميز",
        description: "اكتب بخط واضح ومقروء، واستخدم القلم الأزرق أو الأسود. حافظ على نظافة ورقة الإجابة واستخدم المساطر للجداول والرسومات. قدّم إجابتك بشكل يسهل على المصحح قراءتها وفهمها.",
        icon: Zap,
        badge: "انطباع أول"
      },
      {
        title: "استراتيجيات الكتابة المقالية",
        description: "خصص وقتًا للتخطيط قبل الكتابة. ضع مخططًا سريعًا للأفكار الرئيسية والأدلة الداعمة. اكتب مقدمة واضحة، واعرض أفكارك بتسلسل منطقي، واختم بخلاصة قوية.",
        icon: Book,
        badge: "مهارة التعبير"
      }
    ],
    mental: [
      {
        title: "تقنيات التنفس للتركيز",
        description: "مارس تقنية التنفس 4-7-8 (شهيق لمدة 4 ثوانٍ، حبس النفس لمدة 7 ثوانٍ، زفير لمدة 8 ثوانٍ) للتحكم في القلق قبل وأثناء الامتحانات. كرر التمرين 3-4 مرات عندما تشعر بالتوتر.",
        icon: Brain,
        badge: "تهدئة"
      },
      {
        title: "نظام غذائي داعم للدماغ",
        description: "تناول أطعمة غنية بأوميغا 3 والفيتامينات مثل المكسرات، الأسماك، والفواكه والخضروات الملونة. تجنب الإفراط في الكافيين والسكريات التي قد تسبب تقلبات في الطاقة والمزاج.",
        icon: Coffee,
        badge: "تغذية"
      },
      {
        title: "نوم عميق ومنتظم",
        description: "التزم بجدول نوم منتظم من 7-8 ساعات ليلاً، حتى خلال فترة الامتحانات. تجنب الشاشات قبل النوم بساعة على الأقل، واستخدم تقنيات الاسترخاء كالتنفس العميق أو اليوغا البسيطة.",
        icon: Moon,
        badge: "ضروري للذاكرة"
      },
      {
        title: "ممارسة النشاط البدني المنتظم",
        description: "خصص 30 دقيقة يومياً للتمارين البدنية المتوسطة كالمشي السريع أو ركوب الدراجة. حتى فترات قصيرة من النشاط البدني تحسن الدورة الدموية للدماغ وتقلل التوتر وتعزز التركيز.",
        icon: Zap,
        badge: "تنشيط"
      },
      {
        title: "تحويل القلق إلى حافز",
        description: "تعلّم التمييز بين القلق المُعيق والقلق المُحفّز. استخدم مشاعر التوتر كإشارة للتحضير الجيد وليس للخوف. اكتب مخاوفك على ورقة ثم حوّلها إلى خطوات عملية يمكنك اتخاذها.",
        icon: BarChart2,
        badge: "ذكاء عاطفي"
      },
      {
        title: "التأمل وتقنيات اليقظة الذهنية",
        description: "مارس اليقظة الذهنية لمدة 10 دقائق يومياً للتركيز على اللحظة الحالية. استخدم تطبيقات التأمل الموجه أو تمارين المسح الجسدي لتقليل التوتر وتحسين الانتباه والتركيز.",
        icon: BrainCircuit,
        badge: "ممارسة يومية"
      },
      {
        title: "توازن العمل والراحة",
        description: "طبق قاعدة 52/17 (52 دقيقة من العمل المركز تليها 17 دقيقة من الراحة الحقيقية). احرص على فترات راحة كاملة بعيداً عن الشاشات والدراسة لتجديد طاقتك الذهنية.",
        icon: Heart,
        badge: "استدامة"
      },
      {
        title: "الحديث الإيجابي مع الذات",
        description: "استبدل العبارات السلبية ('لن أنجح') بعبارات إيجابية وواقعية ('أنا مستعد ومجتهد'). اكتب عبارات تحفيزية على بطاقات صغيرة وضعها في أماكن تراها يومياً لتعزيز ثقتك بنفسك.",
        icon: Lightbulb,
        badge: "قوة العقل"
      }
    ]
  };

  // إنشاء نصيحة عشوائية للعرض في قسم "نصيحة اليوم"
  const getAllTips = () => {
    return [
      ...tips.general,
      ...tips.exams,
      ...tips.mental
    ];
  };
  
  // اختيار نصيحة عشوائية من جميع النصائح
  const getRandomTip = () => {
    const allTips = getAllTips();
    const randomIndex = Math.floor(Math.random() * allTips.length);
    return allTips[randomIndex];
  };
  
  const dailyTip = getRandomTip();

  return (
    <div className="animate-fade-in pb-20">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mb-2">
          نصائح للتفوق في البكالوريا
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          مجموعة من النصائح والإرشادات المنتقاة بعناية لمساعدتك في تحقيق أفضل النتائج في اختبارات البكالوريا
        </p>
      </div>
      
      <Tabs 
        defaultValue="general" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="mb-8"
      >
        <TabsList className="grid grid-cols-3 mb-8 mx-auto max-w-md">
          <TabsTrigger value="general" className="text-sm">نصائح عامة</TabsTrigger>
          <TabsTrigger value="exams" className="text-sm">استراتيجيات الامتحانات</TabsTrigger>
          <TabsTrigger value="mental" className="text-sm">الصحة النفسية</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.general.map((tip, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border-t-4 animate-scale-in" style={{borderTopColor: '#3B82F6', animationDelay: `${index * 0.05}s`}}>
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                    <tip.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {tip.title}
                      <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px]">
                        {tip.badge}
                      </Badge>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {tip.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="exams" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.exams.map((tip, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border-t-4 animate-scale-in" style={{borderTopColor: '#F97316', animationDelay: `${index * 0.05}s`}}>
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full">
                    <tip.icon className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {tip.title}
                      <Badge variant="outline" className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-[10px]">
                        {tip.badge}
                      </Badge>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {tip.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="mental" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.mental.map((tip, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border-t-4 animate-scale-in" style={{borderTopColor: '#10B981', animationDelay: `${index * 0.05}s`}}>
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full">
                    <tip.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {tip.title}
                      <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px]">
                        {tip.badge}
                      </Badge>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {tip.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 p-6 rounded-xl shadow-sm mt-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-blue-200 dark:bg-blue-700/20 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <h3 className="font-bold text-xl mb-4 flex items-center gap-2 relative z-10">
          <Lightbulb className="h-6 w-6 text-amber-500" />
          نصيحة اليوم
        </h3>
        
        <div className="flex items-start gap-4 relative z-10">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm">
            <dailyTip.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
              {dailyTip.title}
              <Badge className="bg-blue-500">{dailyTip.badge}</Badge>
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {dailyTip.description}
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-blue-200 dark:border-blue-700/30 text-sm text-gray-600 dark:text-gray-400 italic relative z-10">
          "النجاح ليس نتيجة للصدفة... بل هو نتيجة العمل الجاد، المثابرة، التعلم، الدراسة، والأهم من ذلك، الشغف بما تفعله"
        </div>
      </div>
    </div>
  );
};

export default Tips;
