import React from 'react';

interface ToastProps {
  message: string;
  type: 'info' | 'success';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  return (
    <div className={`p-4 rounded shadow-lg ${type === 'success' ? 'bg-green-500' : 'bg-blue-500'} text-white`}>
      {message}
      <button onClick={onClose} className="ml-4">✕</button>
    </div>
  );
};

export default Toast;