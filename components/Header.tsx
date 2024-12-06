'use client';
import { useState } from 'react';
import { useAuth } from './AuthProvider';
import LoginModal from './LoginModal';
import UserMenu from './UserMenu';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user } = useAuth();

  return (
    <header className="absolute top-0 right-0 p-4 z-10">
      {user ? (
        <UserMenu />
      ) : (
        <button
          onClick={() => setShowLoginModal(true)}
          className="px-4 py-2 text-white bg-transparent border border-gray-600 rounded-lg hover:bg-gray-700"
        >
          登录
        </button>
      )}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </header>
  );
};

export default Header; 