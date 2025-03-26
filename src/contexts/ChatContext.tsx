import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'system';
  timestamp: Date;
};

type ChatContextType = {
  messages: Message[];
  sendMessage: (content: string) => void;
  clearMessages: () => void;
  unreadCount: number;
  markAsRead: () => void;
  isChatOpen: boolean;
  toggleChat: () => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Process section navigation links in messages
  const processNavigationLinks = (content: string): string => {
    // Replace links with format <a href="go:S123">text</a> with clickable spans
    return content.replace(
      /<a href="go:([A-Za-z0-9]{3})">(.+?)<\/a>/g,
      '<span class="chat-link cursor-pointer text-blue-500 hover:underline" data-section="$1">$2</span>'
    );
  };

  const handleLinkClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('chat-link')) {
      const section = target.getAttribute('data-section');
      if (section) {
        // Here you would navigate to the appropriate section
        // For now, we'll just show a toast
        toast({
          title: "التنقل إلى القسم",
          description: `تم الانتقال إلى القسم ${section}`,
        });
        
        // You can add actual navigation logic here based on your app structure
        // For example:
        // navigate(`/section/${section}`);
      }
    }
  };

  useEffect(() => {
    // Add event listener for link clicks in chat messages
    document.addEventListener('click', handleLinkClick);
    
    // Add system welcome message when chat first opens
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: `مرحبًا بك في الدردشة! يمكنك الانتقال إلى أقسام التطبيق المختلفة من هنا.<br><br>على سبيل المثال: <a href="go:S01">الرياضيات</a> | <a href="go:S02">الفيزياء</a>`,
        sender: 'system',
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Update unread count when new messages arrive while chat is closed
  useEffect(() => {
    if (!isChatOpen && messages.length > 0) {
      const systemMessages = messages.filter(msg => msg.sender === 'system');
      setUnreadCount(systemMessages.length);
    }
  }, [messages, isChatOpen]);

  const sendMessage = (content: string) => {
    // Check for navigation links
    if (content.includes('go:')) {
      const match = content.match(/go:([A-Za-z0-9]{3})/);
      if (match && match[1]) {
        const section = match[1];
        toast({
          title: "التنقل إلى القسم",
          description: `تم الانتقال إلى القسم ${section}`,
        });
        // Add actual navigation logic here
      }
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);

    // Simulate response (in a real app, this would be from an API)
    setTimeout(() => {
      const responseContent = "شكرًا لرسالتك! هذا رد تلقائي من النظام.";
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        sender: 'system',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, responseMessage]);
      
      if (!isChatOpen) {
        setUnreadCount(prev => prev + 1);
        // Show notification
        toast({
          title: "رسالة جديدة",
          description: "لديك رسالة جديدة في الدردشة",
        });
      }
    }, 1000);
  };

  const clearMessages = () => {
    // Keep only the welcome message
    const welcomeMessage = messages.find(msg => msg.sender === 'system' && msg.content.includes('مرحبًا بك في الدردشة'));
    setMessages(welcomeMessage ? [welcomeMessage] : []);
  };

  const markAsRead = () => {
    setUnreadCount(0);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      markAsRead();
    }
  };

  return (
    <ChatContext.Provider value={{
      messages,
      sendMessage,
      clearMessages,
      unreadCount,
      markAsRead,
      isChatOpen,
      toggleChat
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
