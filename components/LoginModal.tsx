'use client';
import { useState } from 'react';
import { useAuth } from './AuthProvider';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login, register } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        await login(username, password);
      } else {
        await register(username, email, password);
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : '操作失败');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#343541] rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">{isLogin ? '登录' : '注册'}</h2>
        {error && (
          <div className="mb-4 p-2 bg-red-500 bg-opacity-10 border border-red-500 rounded text-red-500">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="用户名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 bg-[#40414f] rounded border border-gray-600 text-white"
          />
          {!isLogin && (
            <input
              type="email"
              placeholder="邮箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 bg-[#40414f] rounded border border-gray-600 text-white"
            />
          )}
          <input
            type="password"
            placeholder="密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 bg-[#40414f] rounded border border-gray-600 text-white"
          />
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
              }}
              className="text-blue-400 hover:text-blue-300"
            >
              {isLogin ? '没有账号？注册' : '已有账号？登录'}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {isLogin ? '登录' : '注册'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal; 