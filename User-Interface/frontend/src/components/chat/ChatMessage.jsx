import React from 'react';
import medibot_logo from '../../assets/medibot_logo.jpg';

const ChatMessage = ({ message, darkMode }) => {
  const isBot = message.role === 'bot';
  
  return (
    <div className={`flex items-start ${isBot ? '' : 'justify-end'}`}>
      {isBot && (
        <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 text-white mr-2">
          <img src={medibot_logo} alt="Medibot" className="h-8 w-8 rounded-full" />
        </div>
      )}
      
      <div className="max-w-[85%]">
        <div className={`rounded-lg px-4 py-2 shadow-sm ${
          isBot 
            ? (darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900 border border-gray-200') 
            : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
        }`}>
          <p className="whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600 text-white ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;