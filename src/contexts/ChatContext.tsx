
import React, { createContext, useContext, useState, ReactNode } from 'react';
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
  navigateToSection: (code: string) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Function to handle section navigation
  const navigateToSection = (code: string) => {
    // We'll just show a toast for demonstration
    toast({
      title: "التنقل للقسم",
      description: `محاولة الانتقال إلى القسم: ${code}`,
    });
    
    // You can define your navigation logic here based on the JSK code
    // For example:
    if (code === 'jsk') {
      // Navigate to a specific route
      navigate('/subject/accounting');
    }
  };

  const sendMessage = (content: string) => {
    // Check for navigation links with format go:code
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
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);

    // Simple auto-response
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
        toast({
          title: "رسالة جديدة",
          description: "لديك رسالة جديدة في الدردشة",
        });
      }
    }, 1000);
  };

  const clearMessages = () => {
    setMessages([]);
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
      toggleChat,
      navigateToSection
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
