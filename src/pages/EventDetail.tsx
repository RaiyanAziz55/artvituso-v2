// src/pages/EventDetail.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

interface EventDetail {
  name: string;
  description: string;
  video: string;
}

const eventDetails: { [key: string]: EventDetail } = {
  '1': {
    name: 'WATCH LIVE EVENT 1',
    description: 'Description of first event',
    video: 'video_placeholder.mp4', // Placeholder video
  },
  // Add more event items here
};

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id || !eventDetails[id]) {
    return <div>Event not found</div>;
  }

  const event = eventDetails[id];

  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 h-3/4 ">
      <h1 className="text-3xl font-bold mb-6">{event.name}</h1>
      <div className="flex">
        <div className="w-3/4 pr-4">
          <div className="aspect-w-16 aspect-h-9 bg-black flex items-center justify-center h-full">
            {/* Placeholder for video */}
            <button className="text-white text-3xl">Play Video</button>
          </div>
        </div>
        <div className="w-1/4 pl-4">
          <div className="bg-gray-100 p-4 rounded">
            <div className="h-64 overflow-y-scroll mb-4">
              {messages.map((message, index) => (
                <div key={index} className="mb-2">
                  <strong>anon:</strong> {message}
                </div>
              ))}
            </div>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="w-full border border-gray-400 rounded py-2 px-4 mb-2"
              placeholder="chat as anon"
            />
            <button
              onClick={handleSendMessage}
              className="w-full bg-gray-800 text-white py-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
