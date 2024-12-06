'use client';
import { useState } from 'react';
import { useAuth } from '../../components/AuthProvider';
import ChatHistory from '../../components/ChatHistory';

export default function AiAssistant() {
  const [message, setMessage] = useState('');
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">请先登录</h1>
        <p>您需要登录后才能使用AI助手功能。</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="输入您的问题..."
        />
      </div>
      <ChatHistory />
      <div className="p-4">
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
          发送
        </button>
      </div>
    </div>
  );
} 