import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sanitizeInput, validateEmail, validateArabicText, createRateLimiter } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
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
    .max(100, { message: "الاسم طويل جداً" })
    .refine(validateArabicText, { message: "الاسم يحتوي على أحرف غير مسموحة" }),
  email: z.string()
    .email({ message: "يرجى إدخال بريد إلكتروني صحيح" })
    .refine(validateEmail, { message: "البريد الإلكتروني غير صحيح" }),
  type: z.enum(["suggestion", "complaint"], {
    required_error: "يرجى اختيار نوع الرسالة",
  }),
  message: z.string()
    .min(10, { message: "الرسالة يجب أن تحتوي على 10 أحرف على الأقل" })
    .max(500, { message: "الرسالة طويلة جداً" })
    .refine(validateArabicText, { message: "الرسالة تحتوي على أحرف غير مسموحة" }),
  // Honeypot field for bot protection
  website: z.string().max(0, { message: "حقل غير صحيح" }).optional(),
});

type FormValues = z.infer<typeof formSchema>;

// Rate limiter: max 3 attempts per 5 minutes
const rateLimiter = createRateLimiter(3, 5 * 60 * 1000);

const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
    // Check rate limiting
    const userIdentifier = data.email || 'anonymous';
    if (!rateLimiter(userIdentifier)) {
      toast({
        title: "تم تجاوز الحد المسموح",
        description: "يرجى الانتظار قبل إرسال رسالة أخرى.",
        variant: "destructive",
      });
      return;
    }

    // Check honeypot
    if (data.website) {
      // Silent fail for bots
      return;
    }

    setIsSubmitting(true);
    
    try {
      // This would normally connect to a backend service
      // For a frontend-only solution, we'll use a free email service
      const response = await fetch("https://formsubmit.co/ajax/saidsaifi276@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: sanitizeInput(data.name),
          email: sanitizeInput(data.email),
          type: data.type === "suggestion" ? "اقتراح" : "شكوى",
          message: sanitizeInput(data.message),
          _subject: `${data.type === "suggestion" ? "اقتراح" : "شكوى"} جديد من تطبيق البكالوريا`,
          _captcha: false, // Disable formsubmit's captcha since we have our own protection
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "تم الإرسال بنجاح",
          description: "شكرًا لك! تم استلام رسالتك وسيتم مراجعتها قريبًا.",
        });
        form.reset();
      } else {
        throw new Error("فشل في إرسال النموذج");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقًا.",
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
                  <Input placeholder="أدخل اسمك" {...field} />
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
                  <Input placeholder="أدخل بريدك الإلكتروني" {...field} />
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Honeypot field - hidden from users but visible to bots */}
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem className="hidden">
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input {...field} tabIndex={-1} autoComplete="off" />
                </FormControl>
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "جاري الإرسال..." : "إرسال"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FeedbackForm;
