'use client';
import { useState } from 'react';
import { useAuth } from './AuthProvider';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white"
      >
        {user?.name?.[0] || '用户'}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#343541] rounded-lg shadow-lg py-1 border border-gray-700">
          <button
            className="block w-full text-left px-4 py-2 hover:bg-[#40414f]"
            onClick={() => {/* 处理我的信息 */}}
          >
            我的信息
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-[#40414f]"
            onClick={() => {/* 处理设置 */}}
          >
            设置
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-[#40414f] text-red-400"
            onClick={logout}
          >
            注销
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu; 