
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, HelpCircle } from 'lucide-react';
import FeedbackForm from '@/components/feedback/FeedbackForm';

export default function Feedback() {
  const [type, setType] = useState<'suggestion' | 'complaint'>('suggestion');

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">الاقتراحات والشكاوى</h1>
      
      <Tabs defaultValue="suggestion" className="w-full" onValueChange={(value) => setType(value as 'suggestion' | 'complaint')}>
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
          <FeedbackForm 
            type="suggestion"
            title="تقديم اقتراح"
            description="شاركنا باقتراحاتك لتحسين التطبيق وخدماته"
            placeholderMessage="اكتب اقتراحك هنا..."
            buttonText="إرسال الاقتراح"
          />
        </TabsContent>
        
        <TabsContent value="complaint">
          <FeedbackForm 
            type="complaint"
            title="تقديم شكوى"
            description="يرجى وصف المشكلة التي واجهتها بالتفصيل"
            placeholderMessage="اكتب شكواك هنا..."
            buttonText="إرسال الشكوى"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
