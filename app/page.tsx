'use client';
import { useState } from 'react';
import { useAuth } from '../components/AuthProvider';

interface Message {
  id: number;
  content: string;
  role: 'user' | 'assistant';
}

export default function Home() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // 添加用户消息
    const userMessage: Message = {
      id: Date.now(),
      content: message,
      role: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // 模拟AI响应
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        content: `这是对 "${message}" 的回答...`,
        role: 'assistant'
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);

    setMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-[#343541]">
      {/* 消息列表 */}
      <div className="flex-1 overflow-auto">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-20">
            <h1 className="text-2xl mb-2">有什么可以帮忙的？</h1>
          </div>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`py-8 ${
              msg.role === 'assistant' ? 'bg-[#444654]' : ''
            }`}
          >
            <div className="max-w-3xl mx-auto px-4 flex gap-4">
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                {msg.role === 'assistant' ? (
                  <div className="bg-green-600 rounded-full w-full h-full flex items-center justify-center">AI</div>
                ) : (
                  <div className="bg-gray-600 rounded-full w-full h-full flex items-center justify-center">你</div>
                )}
              </div>
              <div className="flex-1 space-y-2 overflow-hidden">
                {msg.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 输入框 */}
      <div className="border-t border-gray-700 p-4 bg-[#343541]">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="给 ChatGPT 发送消息"
              className="w-full p-4 pr-24 bg-[#40414f] rounded-lg text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 px-4 py-2 text-gray-400 hover:text-white"
            >
              发送
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 