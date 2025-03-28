
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, HelpCircle, ShieldAlert } from 'lucide-react';
import FeedbackForm from '@/components/feedback/FeedbackForm';

export default function Feedback() {
  const [type, setType] = useState<'suggestion' | 'complaint'>('suggestion');

  // تحديد نوع الرسالة عند تغيير التبويب
  const handleTabChange = (value: string) => {
    setType(value as 'suggestion' | 'complaint');
  };

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">الاقتراحات والشكاوى</h1>
      
      <div className="flex items-center justify-center gap-2 mb-4 text-sm text-muted-foreground">
        <ShieldAlert className="h-4 w-4" />
        <span>جميع البيانات المرسلة مشفرة ومحمية</span>
      </div>
      
      <Tabs defaultValue="suggestion" className="w-full" onValueChange={handleTabChange}>
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
          <FeedbackForm />
        </TabsContent>
        
        <TabsContent value="complaint">
          <FeedbackForm />
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 text-center text-xs text-muted-foreground">
        <p>يتم تخزين البيانات بشكل آمن ولا يتم مشاركتها مع أي طرف ثالث</p>
      </div>
    </div>
  );
}
