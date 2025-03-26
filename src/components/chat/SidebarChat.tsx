
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Bell, Edit2 } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
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

export function SidebarChat() {
  const { 
    messages, 
    sendMessage, 
    unreadCount, 
    markAsRead, 
    clearMessages, 
    navigateToSection,
    username,
    changeUsername 
  } = useChat();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [isUsernameDialogOpen, setIsUsernameDialogOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom of messages when new messages arrive
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Mark messages as read when chat is opened
  useEffect(() => {
    if (isOpen) {
      markAsRead();
    }
  }, [isOpen, markAsRead]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Check if this is a navigation command
      if (inputValue.toLowerCase().includes('go:')) {
        const match = inputValue.match(/go:(\w+)/i);
        if (match && match[1]) {
          navigateToSection(match[1]);
          setInputValue('');
          return;
        }
      }
      
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
    <div className="flex-1 flex flex-col">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex flex-col flex-1">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="font-medium flex items-center justify-between w-full">
              <div className="flex items-center">
                <MessageCircle className="ml-2 h-5 w-5" />
                <span>الدردشة الجماعية</span>
              </div>
              {unreadCount > 0 && (
                <Badge variant="destructive" className="mr-2 flex items-center gap-1">
                  <Bell className="h-3 w-3" />
                  {unreadCount}
                </Badge>
              )}
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="flex flex-col flex-1">
          <div className="flex justify-between p-2 border-b border-gray-200 dark:border-gray-800">
            <Dialog open={isUsernameDialogOpen} onOpenChange={setIsUsernameDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-xs flex items-center gap-1"
                >
                  <span>{username}</span>
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
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearMessages}
              className="text-xs text-muted-foreground"
            >
              مسح المحادثة
            </Button>
          </div>
          
          <ScrollArea className="flex-1 p-4">
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

          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="اكتب رسالتك هنا..."
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button size="icon" onClick={handleSendMessage} disabled={!inputValue.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
