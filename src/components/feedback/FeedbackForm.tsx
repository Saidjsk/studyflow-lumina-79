
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { sendFeedbackEmail, FeedbackFormData } from '@/services/emailService';

interface FeedbackFormProps {
  type: 'suggestion' | 'complaint';
  title: string;
  description: string;
  placeholderMessage: string;
  buttonText: string;
}

export default function FeedbackForm({ type, title, description, placeholderMessage, buttonText }: FeedbackFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error state
    setError(null);
    
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
      const formData: FeedbackFormData = {
        name,
        email,
        message,
        type
      };

      await sendFeedbackEmail(formData);
      
      // Reset the form
      setName('');
      setEmail('');
      setMessage('');
      
      toast({
        title: "تم الإرسال بنجاح",
        description: "شكراً لك، سيتم مراجعة رسالتك في أقرب وقت وسنرد عليك من خلال بريدك الإلكتروني إذا قمت بتزويدنا به.",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setError("لم نتمكن من إرسال رسالتك، يرجى المحاولة مرة أخرى لاحقاً");
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إرسال رسالتك، يرجى المحاولة مرة أخرى لاحقاً",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const idPrefix = type === 'suggestion' ? '' : 'complaint-';

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      
      {error && (
        <div className="px-6">
          <Alert variant="destructive">
            <AlertTitle>حدث خطأ</AlertTitle>
            <AlertDescription>
              {error}
            </AlertDescription>
          </Alert>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}name`}>الاسم <span className="text-red-500">*</span></Label>
            <Input 
              id={`${idPrefix}name`} 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="أدخل اسمك"
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}email`}>البريد الإلكتروني (اختياري)</Label>
            <Input 
              id={`${idPrefix}email`} 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="أدخل بريدك الإلكتروني"
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}message`}>{type === 'suggestion' ? 'اقتراحك' : 'شكواك'} <span className="text-red-500">*</span></Label>
            <Textarea 
              id={`${idPrefix}message`} 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder={placeholderMessage}
              className="min-h-[150px]"
              dir="rtl"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'جاري الإرسال...' : buttonText}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
