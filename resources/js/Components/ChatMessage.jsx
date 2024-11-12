import React from 'react';
import { format } from 'date-fns';
import { Bot, User } from 'lucide-react';

export const ChatMessage = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex gap-3 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
        ${isBot ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
        {isBot ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}>
        <div className={`rounded-2xl px-4 py-2 ${
          isBot ? 'bg-gray-100 text-gray-900' : 'bg-blue-200 text-black font-bold'
        }`}>
          <p className="text-sm">{message.content}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1">
          {format(message.timestamp, 'HH:mm')}
        </span>
      </div>
    </div>
  );
};