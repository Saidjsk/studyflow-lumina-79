
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { MessageSquare, HelpCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

// تكوين مفاتيح EmailJS
// يجب إنشاء حساب على EmailJS.com وإعداد خدمة وقالب بريد إلكتروني
const EMAILJS_SERVICE_ID = 'service_cuwylkq'; // رمز الخدمة من لوحة تحكم EmailJS
const EMAILJS_TEMPLATE_ID = 'template_99n0qgj'; // رمز القالب من لوحة تحكم EmailJS
const EMAILJS_PUBLIC_KEY = 'jFvnRKWTtGZXw5ZGN'; // المفتاح العام من إعدادات حسابك

export default function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('suggestion');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !message) {
      toast({
        title: "معلومات ناقصة",
        description: "يرجى تعبئة جميع الحقول المطلوبة",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // إعداد البيانات التي سيتم إرسالها
      const templateParams = {
        from_name: name,
        reply_to: email || 'لا يوجد بريد إلكتروني',
        message: message,
        type: type === 'suggestion' ? 'اقتراح' : 'شكوى',
        to_name: 'الإدارة',
        to_email: 'saidsaifi276@gmail.com'
      };
      
      // أولاً نقوم بتهيئة EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      // ثم نرسل البريد الإلكتروني
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      console.log('Email sent successfully:', response);
      
      // إعادة تعيين النموذج
      setName('');
      setEmail('');
      setMessage('');
      
      toast({
        title: "تم الإرسال بنجاح",
        description: "شكراً لك، سيتم مراجعة رسالتك في أقرب وقت وسنرد عليك من خلال بريدك الإلكتروني إذا قمت بتزويدنا به.",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إرسال رسالتك، يرجى المحاولة مرة أخرى لاحقاً",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">الاقتراحات والشكاوى</h1>
      
      <Tabs defaultValue="suggestion" className="w-full" onValueChange={(value) => setType(value)}>
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="suggestion" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            <span>اقتراح</span>
          </TabsTrigger>
          <TabsTrigger value="complaint" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>شكوى</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="suggestion">
          <Card>
            <CardHeader>
              <CardTitle>تقديم اقتراح</CardTitle>
              <CardDescription>
                شاركنا باقتراحاتك لتحسين التطبيق وخدماته
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم <span className="text-red-500">*</span></Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="أدخل اسمك"
                    dir="rtl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني (اختياري)</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="أدخل بريدك الإلكتروني"
                    dir="rtl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">اقتراحك <span className="text-red-500">*</span></Label>
                  <Textarea 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="اكتب اقتراحك هنا..."
                    className="min-h-[150px]"
                    dir="rtl"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الاقتراح'}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="complaint">
          <Card>
            <CardHeader>
              <CardTitle>تقديم شكوى</CardTitle>
              <CardDescription>
                يرجى وصف المشكلة التي واجهتها بالتفصيل
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="complaint-name">الاسم <span className="text-red-500">*</span></Label>
                  <Input 
                    id="complaint-name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="أدخل اسمك"
                    dir="rtl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="complaint-email">البريد الإلكتروني (اختياري)</Label>
                  <Input 
                    id="complaint-email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="أدخل بريدك الإلكتروني"
                    dir="rtl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="complaint-message">شكواك <span className="text-red-500">*</span></Label>
                  <Textarea 
                    id="complaint-message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="اكتب شكواك هنا..."
                    className="min-h-[150px]"
                    dir="rtl"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الشكوى'}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
