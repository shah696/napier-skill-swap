"use client";

import { useState } from "react";
import { Send, User } from "lucide-react";

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [messageInput, setMessageInput] = useState("");

  const chats = [
    {
      id: 1,
      user: "Alex Thompson",
      lastMessage: "Sure, I can help you with Python on Tuesday.",
      time: "10:30 AM",
      unread: 0,
      avatar: null,
    },
    {
      id: 2,
      user: "Sarah Jenkins",
      lastMessage: "Thanks for the CV review!",
      time: "Yesterday",
      unread: 2,
      avatar: null,
    },
  ];

  const messages = [
    {
      id: 1,
      text: "Hi, I'm interested in your Python tutoring.",
      sender: "me",
      time: "10:00 AM",
    },
    {
      id: 2,
      text: "Hello! Great. What specific topics do you need help with?",
      sender: "them",
      time: "10:05 AM",
    },
    {
      id: 3,
      text: "Mostly data structures and algorithms.",
      sender: "me",
      time: "10:15 AM",
    },
    {
      id: 4,
      text: "Sure, I can help you with Python on Tuesday.",
      sender: "them",
      time: "10:30 AM",
    },
  ];

  return (
    <div className="min-h-screen bg-[--pk-gray-soft] pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-160px)] min-h-[500px]">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex">
          {/* Sidebar */}
          <div className="w-1/3 border-r border-gray-100 flex flex-col">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-xl font-bold text-[--secondary]">Messages</h2>
            </div>
            <div className="overflow-y-auto flex-1">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChat(chat.id)}
                  className={`p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${
                    activeChat === chat.id ? "bg-blue-50/50" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User size={20} className="text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {chat.user}
                        </h3>
                        <span className="text-xs text-gray-400">
                          {chat.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">
                        {chat.lastMessage}
                      </p>
                    </div>
                    {chat.unread > 0 && (
                      <div className="w-5 h-5 bg-[--pk-red] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {activeChat ? (
              <>
                <div className="p-4 border-b border-gray-100 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <User size={20} className="text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Alex Thompson
                    </h3>
                    <span className="text-xs text-green-500 font-medium">
                      Online
                    </span>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm ${
                          msg.sender === "me"
                            ? "bg-[--pk-red] text-white rounded-br-none"
                            : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p
                          className={`text-[10px] mt-1 text-right ${
                            msg.sender === "me"
                              ? "text-white/80"
                              : "text-gray-400"
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-white border-t border-gray-100">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--pk-red] focus:border-transparent"
                      placeholder="Type a message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <button className="bg-[--pk-red] text-white p-2 rounded-full hover:bg-[--pk-red-hover] transition-colors">
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                Select a conversation to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
