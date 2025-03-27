
import emailjs from 'emailjs-com';

// EmailJS configuration keys
const EMAILJS_SERVICE_ID = 'service_cuwylkq'; 
const EMAILJS_TEMPLATE_ID = 'template_99n0qgj'; 
const EMAILJS_PUBLIC_KEY = 'jFvnRKWTtGZXw5ZGN'; 

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

export type FeedbackFormData = {
  name: string;
  email: string;
  message: string;
  type: 'suggestion' | 'complaint';
};

export const sendFeedbackEmail = async (data: FeedbackFormData) => {
  try {
    const { name, email, message, type } = data;
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: name,
      reply_to: email || 'لا يوجد بريد إلكتروني',
      message: message,
      type: type === 'suggestion' ? 'اقتراح' : 'شكوى',
      to_name: 'الإدارة',
    };
    
    // Initialize EmailJS before sending
    initEmailJS();
    
    // Send the email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // رمي الخطأ مرة أخرى ليتم التعامل معه في المكون
  }
};
