
import { useState, useRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
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
import ReCAPTCHA from "react-google-recaptcha";
import { sendFeedbackEmail, sanitizeInput } from "@/services/emailService";

// إنشاء مخطط التحقق بزود مع قواعد أكثر صرامة
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل" })
    .max(50, { message: "الاسم يجب ألا يتجاوز 50 حرفًا" })
    .refine(val => !/[<>]/.test(val), { 
      message: "الاسم يحتوي على أحرف غير مسموح بها" 
    }),
  email: z
    .string()
    .email({ message: "يرجى إدخال بريد إلكتروني صحيح" })
    .max(100, { message: "البريد الإلكتروني طويل جدًا" }),
  type: z.enum(["suggestion", "complaint"], {
    required_error: "يرجى اختيار نوع الرسالة",
  }),
  message: z
    .string()
    .min(10, { message: "الرسالة يجب أن تحتوي على 10 أحرف على الأقل" })
    .max(1000, { message: "الرسالة يجب ألا تتجاوز 1000 حرف" })
    .refine(val => !/(<script|javascript:|onclick|onerror)/.test(val.toLowerCase()), { 
      message: "الرسالة تحتوي على محتوى غير مسموح به" 
    }),
});

type FormValues = z.infer<typeof formSchema>;

// يمكنك الحصول على المفتاح من خلال متغيرات البيئة في النسخة النهائية
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // مفتاح اختبار

const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      type: "suggestion",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setError(null);
      setIsSubmitting(true);
      
      // التحقق من reCAPTCHA
      if (!recaptchaToken) {
        setError("يرجى التحقق من أنك لست روبوتًا");
        setIsSubmitting(false);
        return;
      }
      
      // إرسال النموذج باستخدام خدمة البريد المحسّنة
      await sendFeedbackEmail({
        ...data,
        // تنظيف البيانات قبل الإرسال لمنع هجمات XSS
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        message: sanitizeInput(data.message),
        recaptchaToken
      });

      toast({
        title: "تم الإرسال بنجاح",
        description: "شكرًا لك! تم استلام رسالتك وسيتم مراجعتها قريبًا.",
      });

      // إعادة تعيين النموذج والتحقق
      form.reset();
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      let errorMessage = "لم نتمكن من إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقًا.";
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
      
      toast({
        title: "حدث خطأ",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
    <div className="glass-morphism rounded-xl p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">الاقتراحات والشكاوى</h2>
      <p className="text-muted-foreground mb-6 text-center">نرحب بملاحظاتك لتحسين التطبيق</p>
      
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>خطأ</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الاسم</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل اسمك" {...field} maxLength={50} />
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
                    type="email"
                    autoComplete="email"
                    {...field} 
                    maxLength={100}
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
          
          <div className="flex justify-center my-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaChange}
              hl="ar" // اللغة العربية
            />
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || !recaptchaToken}
          >
            {isSubmitting ? "جاري الإرسال..." : "إرسال"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FeedbackForm;
