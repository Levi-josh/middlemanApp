import React, { createContext, useContext } from 'react';

interface ChatContextType {
  isfromChat: () => void;
  fromChat:Boolean
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: React.ReactNode;
  isfromChat: () => void;
  fromChat:Boolean
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children, isfromChat,fromChat }) => {
  return (
    <ChatContext.Provider value={{ isfromChat,fromChat}}>
      {children}
    </ChatContext.Provider>
  );
};