import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6">
      <button onClick={() => setOpen(!open)} className="bg-yellow-500 p-4 rounded-full shadow-lg">
        💬
      </button>
      {open && (
        <div className="bg-white p-4 rounded shadow-lg w-72 mt-2">
          <p>Chatbot placeholder</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;