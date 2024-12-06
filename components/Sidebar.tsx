'use client';
import { useState } from 'react';
import { useAuth } from './AuthProvider';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className={`bg-[#202123] transition-all duration-300 ${isCollapsed ? 'w-0' : 'w-64'}`}>
      {/* 顶部工具栏 */}
      <div className="h-12 flex items-center px-2 border-b border-gray-700">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-700 rounded"
        >
          {isCollapsed ? '→' : '←'}
        </button>
        <div className="flex-1 flex gap-2 px-2">
          <input
            type="text"
            placeholder="搜索消息..."
            className="flex-1 bg-[#40414f] rounded px-3 py-1 text-sm"
          />
          <button
            className="p-2 hover:bg-gray-700 rounded"
            onClick={() => {/* 处理新建对话 */}}
          >
            ＋
          </button>
        </div>
      </div>

      {/* 对话列表 */}
      <div className="flex-1 overflow-auto py-2">
        {/* 示例对话项 */}
        {['对话1', '对话2', '对话3'].map((chat, index) => (
          <div
            key={index}
            className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
          >
            {chat}
          </div>
        ))}
      </div>

      {/* 底部用户信息 */}
      <div className="border-t border-gray-700 p-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
            {user.name?.[0] || '用户'}
          </div>
          <span className="text-sm text-gray-300">{user.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 