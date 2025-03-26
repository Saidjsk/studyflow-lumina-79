
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useChat } from '@/contexts/ChatContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Chat() {
  const { 
    messages, 
    sendMessage, 
    clearMessages, 
    username,
    changeUsername 
  } = useChat();
  const [inputValue, setInputValue] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [isUsernameDialogOpen, setIsUsernameDialogOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom of messages when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
      
      // Focus input after sending
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleUsernameChange = () => {
    if (newUsername.trim()) {
      changeUsername(newUsername);
      setIsUsernameDialogOpen(false);
    }
  };
  
  const handleUsernameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleUsernameChange();
    }
  };

  return (
    <div className="container max-w-4xl mx-auto">
      <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center">
            <MessageCircle className="mr-2 h-5 w-5" />
            <h2 className="text-xl font-bold">الدردشة الجماعية</h2>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearMessages}
          >
            مسح المحادثة
          </Button>
        </div>

        <div className="flex justify-between p-2 border-b border-border">
          <Dialog open={isUsernameDialogOpen} onOpenChange={setIsUsernameDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-sm flex items-center gap-1"
              >
                <span>اسم المستخدم: {username}</span>
                <Edit2 className="h-3 w-3" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>تغيير اسم المستخدم</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 pt-2">
                <Input
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  onKeyDown={handleUsernameKeyDown}
                  placeholder="أدخل اسمك الجديد"
                />
                <Button onClick={handleUsernameChange}>تغيير</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <ScrollArea className="h-[calc(100vh-300px)] p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.userId === 'system' ? 'justify-center' : (message.userId === localStorage.getItem('chat_user_id') ? 'justify-end' : 'justify-start')}`}
              >
                {message.userId === 'system' ? (
                  <div className="max-w-[90%] text-center bg-muted py-2 px-4 rounded-lg text-xs text-muted-foreground">
                    <div>{message.content}</div>
                  </div>
                ) : (
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.userId === localStorage.getItem('chat_user_id')
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {message.userId !== localStorage.getItem('chat_user_id') && (
                      <div className={`text-xs font-bold mb-1 ${
                        message.userId === localStorage.getItem('chat_user_id') 
                          ? 'text-primary-foreground' 
                          : 'text-primary'
                      }`}>
                        {message.sender}
                      </div>
                    )}
                    <div className="text-sm">{message.content}</div>
                    <div className={`text-xs mt-1 ${
                      message.userId === localStorage.getItem('chat_user_id') 
                        ? 'text-primary-foreground/70' 
                        : 'text-muted-foreground'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-2">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="اكتب رسالتك هنا..."
              className="flex h-10 w-full"
            />
            <Button size="icon" onClick={handleSendMessage} disabled={!inputValue.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
