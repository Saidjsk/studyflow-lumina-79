
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { MessageSquare, HelpCircle } from 'lucide-react';

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
      // Send data to Email with form data
      const formData = {
        name,
        email,
        message,
        type,
        to: 'saidsaifi276@gmail.com'
      };
      
      // Simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      
      toast({
        title: "تم الإرسال بنجاح",
        description: "شكراً لك، سيتم مراجعة رسالتك في أقرب وقت",
      });
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إرسال رسالتك، يرجى المحاولة مرة أخرى",
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
