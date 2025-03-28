
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Lightbulb, Brain, Clock, Book, Calendar } from "lucide-react";

const Tips = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tips = {
    general: [
      {
        title: "التخطيط الجيد",
        description: "قم بإعداد جدول دراسي منظم مع تخصيص وقت كافٍ لكل مادة حسب صعوبتها.",
        icon: Calendar
      },
      {
        title: "تنظيم المراجعة",
        description: "قسّم المواد إلى أجزاء صغيرة وراجع جزءًا واحدًا كل يوم بدلاً من تجميع كل شيء في آخر لحظة.",
        icon: Clock
      },
      {
        title: "الاستراحة المناسبة",
        description: "خذ فترات استراحة قصيرة بين الحصص الدراسية لتجديد نشاطك الذهني.",
        icon: Brain
      },
      {
        title: "التنويع في طرق الدراسة",
        description: "استخدم وسائل متعددة للدراسة مثل تلخيص الدروس، رسم خرائط ذهنية، وحل تمارين متنوعة.",
        icon: Book
      },
      {
        title: "مجموعات الدراسة",
        description: "الدراسة مع زملاء متفوقين يمكن أن تساعدك على فهم المفاهيم الصعبة وتبادل المعلومات.",
        icon: Lightbulb
      }
    ],
    exams: [
      {
        title: "قراءة الأسئلة بتمعن",
        description: "خصص وقتًا كافيًا لقراءة أسئلة الامتحان بعناية قبل البدء بالإجابة."
      },
      {
        title: "إدارة الوقت",
        description: "وزع وقت الإجابة على جميع الأسئلة حسب الدرجات المخصصة لكل سؤال."
      },
      {
        title: "البدء بالأسئلة السهلة",
        description: "ابدأ بالإجابة على الأسئلة التي تعرفها جيدًا، ثم انتقل إلى الأصعب."
      },
      {
        title: "المراجعة",
        description: "اترك وقتًا كافيًا في نهاية الامتحان لمراجعة إجاباتك والتأكد من عدم وجود أخطاء."
      },
      {
        title: "الكتابة بخط واضح",
        description: "احرص على الكتابة بخط واضح ومقروء وتنظيم إجاباتك بطريقة مرتبة."
      }
    ],
    mental: [
      {
        title: "التركيز على التقدم",
        description: "ركز على تحسن مستواك الدراسي تدريجيًا، وليس على الوصول إلى الكمال فورًا."
      },
      {
        title: "التفكير الإيجابي",
        description: "حافظ على نظرة متفائلة تجاه قدرتك على النجاح والتفوق في الامتحانات."
      },
      {
        title: "تقليل التوتر",
        description: "مارس تقنيات الاسترخاء مثل التنفس العميق والتأمل للتخفيف من التوتر قبل الامتحانات."
      },
      {
        title: "النوم الكافي",
        description: "احصل على قسط كافٍ من النوم، خاصة قبل الامتحانات، لتحسين التركيز والذاكرة."
      },
      {
        title: "الثقة بالنفس",
        description: "ثق بقدراتك وتذكر أن الجهد المستمر والمنظم هو مفتاح النجاح في البكالوريا."
      }
    ]
  };

  return (
    <div className="animate-fade-in pb-20">
      <h1 className="text-2xl font-bold mb-6 text-center">نصائح للتفوق في البكالوريا</h1>
      
      <Tabs 
        defaultValue="general" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="mb-6"
      >
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="general">نصائح عامة</TabsTrigger>
          <TabsTrigger value="exams">الامتحانات</TabsTrigger>
          <TabsTrigger value="mental">الصحة النفسية</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          {tips.general.map((tip, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                  <tip.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{tip.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="exams" className="space-y-4">
          {tips.exams.map((tip, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tip.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="mental" className="space-y-4">
          {tips.mental.map((tip, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tip.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
      
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 p-4 rounded-lg">
        <h3 className="font-bold mb-2 flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-amber-500" />
          نصيحة اليوم
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          تذكر أن الاستمرارية في الدراسة أفضل من المذاكرة المكثفة قبل الامتحان مباشرة. خطط لدراستك بحكمة وحافظ على جدول منتظم.
        </p>
      </div>
    </div>
  );
};

export default Tips;
