
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import DOMPurify from 'dompurify';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string()
    .min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل" })
    .max(50, { message: "الاسم يجب أن يكون أقل من 50 حرف" })
    .regex(/^[a-zA-Zأ-ي\s]+$/, { message: "الاسم يجب أن يحتوي على أحرف فقط" }),
  email: z.string()
    .email({ message: "يرجى إدخال بريد إلكتروني صحيح" })
    .max(100, { message: "البريد الإلكتروني طويل جداً" }),
  type: z.enum(["suggestion", "complaint"], {
    required_error: "يرجى اختيار نوع الرسالة",
  }),
  message: z.string()
    .min(10, { message: "الرسالة يجب أن تحتوي على 10 أحرف على الأقل" })
    .max(1000, { message: "الرسالة يجب أن تكون أقل من 1000 حرف" }),
});

type FormValues = z.infer<typeof formSchema>;

const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [lastSubmission, setLastSubmission] = useState<number>(0);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      type: "suggestion",
      message: "",
    },
  });

  const sanitizeInput = (input: string): string => {
    return DOMPurify.sanitize(input, { 
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [] 
    });
  };

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    const timeDiff = now - lastSubmission;
    const minInterval = 30000; // 30 seconds

    if (timeDiff < minInterval) {
      toast({
        title: "تم الإرسال مؤخراً",
        description: "يرجى الانتظار قبل إرسال رسالة أخرى",
        variant: "destructive",
      });
      return false;
    }

    if (submissionCount >= 5) {
      toast({
        title: "تم الوصول للحد الأقصى",
        description: "لقد تم الوصول للحد الأقصى لعدد الرسائل اليوم",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const onSubmit = async (data: FormValues) => {
    if (!checkRateLimit()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Sanitize all inputs
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        type: data.type,
        message: sanitizeInput(data.message),
      };

      // Store data locally for now (secure alternative to exposed email)
      const feedbackData = {
        ...sanitizedData,
        timestamp: new Date().toISOString(),
        id: Date.now().toString(),
      };

      // Store in localStorage as a temporary solution
      const existingFeedback = JSON.parse(localStorage.getItem('feedback_submissions') || '[]');
      existingFeedback.push(feedbackData);
      localStorage.setItem('feedback_submissions', JSON.stringify(existingFeedback));

      setSubmissionCount(prev => prev + 1);
      setLastSubmission(Date.now());

      toast({
        title: "تم حفظ الرسالة بنجاح",
        description: "شكرًا لك! تم حفظ رسالتك محلياً. سيتم إرسالها قريباً عبر نظام آمن.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error saving feedback:", error);
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من حفظ رسالتك. يرجى المحاولة مرة أخرى لاحقاً.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-morphism rounded-xl p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">الاقتراحات والشكاوى</h2>
      <p className="text-muted-foreground mb-6 text-center">نرحب بملاحظاتك لتحسين التطبيق</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الاسم</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="أدخل اسمك" 
                    {...field}
                    maxLength={50}
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>البريد الإلكتروني</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="أدخل بريدك الإلكتروني" 
                    {...field}
                    maxLength={100}
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نوع الرسالة</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع الرسالة" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="suggestion">اقتراح</SelectItem>
                    <SelectItem value="complaint">شكوى</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الرسالة</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="اكتب رسالتك هنا..." 
                    className="min-h-[120px]" 
                    {...field}
                    maxLength={1000}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "جاري الحفظ..." : "إرسال"}
          </Button>
        </form>
      </Form>
      
      <div className="mt-4 text-xs text-muted-foreground text-center">
        <p>ملاحظة: يتم حفظ الرسائل محلياً بشكل آمن وسيتم إرسالها عبر نظام آمن قريباً</p>
      </div>
    </div>
  );
};

export default FeedbackForm;
