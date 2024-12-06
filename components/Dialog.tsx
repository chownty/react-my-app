'use client';
import { useState } from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dialog = ({ isOpen, onClose }: DialogProps) => {
  const [question, setQuestion] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    // 处理提交逻辑
    console.log('提交问题:', question);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">请输入您的问题</h2>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
          placeholder="在这里输入您的问题..."
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            取消
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            提交
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog; 