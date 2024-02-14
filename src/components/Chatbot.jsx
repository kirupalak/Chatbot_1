import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    // Dummy logic to get response for the message
    let response;
    switch (message.toLowerCase()) {
      case 'hello':
        response = 'Hi there!';
        break;
      case 'how are you?':
        response = 'I am doing well, thank you!';
        break;
      default:
        response = 'I am sorry, I did not understand that.';
        break;
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'user', text: message },
      { type: 'bot', text: response },
    ]);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      {/* Nav bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">ChatBot</div>
      </nav>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto bg-gray-900 px-4 py-8">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`rounded-lg p-4 inline-block ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-800'}`} style={{ maxWidth: '80%' }}>
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center">
          <textarea
            id="messageInput"
            placeholder="Type a message..."
            className="flex-1 p-2 rounded-l border border-gray-700 bg-gray-700 text-white focus:outline-none resize-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(e.target.value.trim());
                e.target.value = '';
              }
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 p-2 rounded-r focus:outline-none transform skew-x-12"
            onClick={() => {
              const messageInput = document.getElementById('messageInput');
              handleSendMessage(messageInput.value.trim());
              messageInput.value = '';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
