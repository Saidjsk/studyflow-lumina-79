
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify';

// يتم توفير هذه المفاتيح عبر متغيرات بيئية أو يمكن استخدام مصدر آمن آخر
// في بيئة الإنتاج، يجب تخزين هذه المفاتيح بشكل آمن وعدم تضمينها في الكود المصدري
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cuwylkq'; 
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_99n0qgj'; 
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'jFvnRKWTtGZXw5ZGN'; 

// تخزين الوقت الأخير لإرسال النموذج لكل مستخدم
const lastSubmissionTime = new Map<string, number>();
const THROTTLE_TIME_MS = 60000; // دقيقة واحدة بين الإرسال

// تهيئة EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

export type FeedbackFormData = {
  name: string;
  email: string;
  message: string;
  type: 'suggestion' | 'complaint';
  recaptchaToken?: string;
};

// التحقق من صحة البريد الإلكتروني مع تحقق أكثر صرامة
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// تنظيف المدخلات من أكواد HTML محتملة خطيرة
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] }); // إزالة جميع العلامات
};

// التحقق من حد معدل الإرسال
export const checkRateLimit = (identifier: string): boolean => {
  const now = Date.now();
  const lastSubmission = lastSubmissionTime.get(identifier);
  
  if (lastSubmission && (now - lastSubmission) < THROTTLE_TIME_MS) {
    return false; // تم تجاوز الحد
  }
  
  lastSubmissionTime.set(identifier, now);
  return true; // مسموح بالإرسال
};

export const sendFeedbackEmail = async (data: FeedbackFormData) => {
  try {
    // التحقق من صحة البريد الإلكتروني
    if (data.email && !validateEmail(data.email)) {
      throw new Error('البريد الإلكتروني غير صالح');
    }

    // التحقق من حد معدل الإرسال (استخدام البريد الإلكتروني أو IP في بيئة حقيقية)
    if (!checkRateLimit(data.email || 'anonymous')) {
      throw new Error('يرجى الانتظار قبل إرسال طلب آخر');
    }

    // تنظيف المدخلات
    const { name, email, message, type } = data;
    
    // إعداد معلمات القالب لـ EmailJS
    const templateParams = {
      from_name: sanitizeInput(name),
      reply_to: email ? sanitizeInput(email) : 'لا يوجد بريد إلكتروني',
      message: sanitizeInput(message),
      type: type === 'suggestion' ? 'اقتراح' : 'شكوى',
      to_name: 'الإدارة',
    };
    
    // تهيئة EmailJS قبل الإرسال
    initEmailJS();
    
    // إرسال البريد الإلكتروني مع تشفير HTTPS (EmailJS يستخدم HTTPS تلقائيًا)
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
    
    console.log('تم إرسال البريد الإلكتروني بنجاح:', response);
    return response;
  } catch (error) {
    console.error('خطأ في إرسال البريد الإلكتروني:', error);
    throw error;
  }
};
