// ChatComponent.tsx
import React, { useState } from 'react';
import './ChatComponent.css'; // Import the CSS file for styling

const ChatComponent: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      {!isChatOpen && (
        <div className="chat-icon" onClick={toggleChat}>
          💬
        </div>
      )}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Chat</span>
            <button onClick={toggleChat}>X</button>
          </div>
          <div className="chat-body">
            <p>Welcome to the chat!</p>
            {/* Add more chat content here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;