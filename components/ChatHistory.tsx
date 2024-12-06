'use client';
import { useAuth } from '../components/AuthProvider';

const ChatHistory = () => {
  const { user } = useAuth();

  // 模拟聊天记录数据
  const messages = [
    { id: 1, text: '你好！', sender: 'user' },
    { id: 2, text: '你好！我是AI助手，很高兴为您服务。', sender: 'ai' },
  ];

  return (
    <div className="flex-1 overflow-auto p-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-4 ${
            message.sender === 'user' ? 'text-right' : 'text-left'
          }`}
        >
          <div
            className={`inline-block p-3 rounded-lg ${
              message.sender === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory; 