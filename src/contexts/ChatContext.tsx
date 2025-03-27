
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// استخدام معرّف عشوائي لكل مستخدم
const generateUserId = () => {
  const storedUserId = localStorage.getItem('chat_user_id');
  if (storedUserId) return storedUserId;
  
  const newUserId = Math.random().toString(36).substring(2, 10);
  localStorage.setItem('chat_user_id', newUserId);
  return newUserId;
};

// استخدام اسم مستخدم عشوائي
const generateUsername = () => {
  const storedUsername = localStorage.getItem('chat_username');
  if (storedUsername) return storedUsername;
  
  const randomNames = ['زائر', 'مستخدم', 'طالب', 'معلم', 'باحث'];
  const randomNumber = Math.floor(Math.random() * 1000);
  const newUsername = `${randomNames[Math.floor(Math.random() * randomNames.length)]}_${randomNumber}`;
  
  localStorage.setItem('chat_username', newUsername);
  return newUsername;
};

type Message = {
  id: string;
  content: string;
  sender: string; // اسم المستخدم
  userId: string; // معرّف المستخدم
  timestamp: Date;
};

type ChatContextType = {
  messages: Message[];
  sendMessage: (content: string) => void;
  clearMessages: () => void;
  unreadCount: number;
  markAsRead: () => void;
  navigateToSection: (code: string) => void;
  username: string;
  changeUsername: (newName: string) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// محاكاة قاعدة بيانات للرسائل
const MOCK_MESSAGES = [
  {
    id: '1',
    content: 'مرحبًا بكم في غرفة الدردشة المشتركة!',
    sender: 'النظام',
    userId: 'system',
    timestamp: new Date(Date.now() - 86400000) // بالأمس
  },
  {
    id: '2',
    content: 'يمكنكم التواصل هنا مع جميع المستخدمين',
    sender: 'النظام',
    userId: 'system',
    timestamp: new Date(Date.now() - 86400000) // بالأمس
  }
];

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [unreadCount, setUnreadCount] = useState(0);
  const [userId] = useState(generateUserId);
  const [username, setUsername] = useState(generateUsername);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Define isChatOpen variable to check if we're on the chat page
  const isChatOpen = location.pathname === '/chat';

  // محاكاة لجلب الرسائل من قاعدة البيانات
  useEffect(() => {
    // هنا يمكن إضافة طلب API لجلب الرسائل السابقة
    // fetch('/api/messages').then(...)
    
    // محاكاة رسائل جديدة من مستخدمين آخرين
    const interval = setInterval(() => {
      if (Math.random() > 0.8) { // 20% احتمالية لرسالة جديدة
        const randomUsers = [
          { name: 'أحمد', id: 'user1' },
          { name: 'سارة', id: 'user2' },
          { name: 'محمد', id: 'user3' }
        ];
        const randomUser = randomUsers[Math.floor(Math.random() * randomUsers.length)];
        const randomMessages = [
          'مرحبًا، كيف حالكم؟',
          'هل يمكن أحد مساعدتي في حل مسألة رياضية؟',
          'موضوع اليوم ممتاز!',
          'متى موعد الامتحان القادم؟',
          'شكرًا للجميع على المساعدة'
        ];
        
        if (randomUser.id !== userId) {
          const newMsg = {
            id: Date.now().toString(),
            content: randomMessages[Math.floor(Math.random() * randomMessages.length)],
            sender: randomUser.name,
            userId: randomUser.id,
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, newMsg]);
          
          if (!isChatOpen) {
            setUnreadCount(prev => prev + 1);
            toast({
              title: "رسالة جديدة",
              description: `${randomUser.name}: ${newMsg.content.substring(0, 30)}${newMsg.content.length > 30 ? '...' : ''}`,
            });
          }
        }
      }
    }, 45000); // كل 45 ثانية
    
    return () => clearInterval(interval);
  }, [isChatOpen, userId, toast]);

  // Mark messages as read when on chat page
  useEffect(() => {
    if (isChatOpen) {
      markAsRead();
    }
  }, [location.pathname, messages]);

  // وظيفة للتنقل بين الأقسام
  const navigateToSection = (code: string) => {
    toast({
      title: "التنقل للقسم",
      description: `محاولة الانتقال إلى القسم: ${code}`,
    });
    
    if (code === 'jsk') {
      navigate('/subject/accounting');
    }
  };

  const sendMessage = (content: string) => {
    // التحقق من أوامر التنقل بصيغة go:code
    if (content.toLowerCase().includes('go:')) {
      const match = content.match(/go:(\w+)/i);
      if (match && match[1]) {
        const code = match[1];
        navigateToSection(code);
        return;
      }
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: username,
      userId,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    
    // هنا يمكن إضافة طلب API لحفظ الرسالة
    // fetch('/api/messages', { method: 'POST', body: JSON.stringify(newMessage) })
  };

  const clearMessages = () => {
    setMessages(MOCK_MESSAGES);
  };

  const markAsRead = () => {
    setUnreadCount(0);
  };

  const changeUsername = (newName: string) => {
    if (newName && newName.trim()) {
      setUsername(newName.trim());
      localStorage.setItem('chat_username', newName.trim());
      toast({
        title: "تم تغيير الاسم",
        description: `تم تغيير اسمك إلى: ${newName.trim()}`,
      });
    }
  };

  return (
    <ChatContext.Provider value={{
      messages,
      sendMessage,
      clearMessages,
      unreadCount,
      markAsRead,
      navigateToSection,
      username,
      changeUsername
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
