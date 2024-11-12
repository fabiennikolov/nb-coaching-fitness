import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../Components/ChatMessage';
import { ChatInput } from '../Components/ChatInput';
import { QuickActions } from '../Components/QuickActions';
import { UserProfile } from '../Components/UserProfile';
import { db } from '../utils/db';
import { Bot } from 'lucide-react';

function App({ userProfile }) {
    const [messages, setMessages] = useState([]);
    const [profile, setProfile] = useState(userProfile || null);
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        const loadData = async () => {
          const dbInstance = await db;  // Open the database
          const allMessages = await dbInstance.getAllFromIndex('messages', 'by-timestamp');
          setMessages(allMessages);
          const storedProfile = await dbInstance.get('profile', 'user-profile');
          if (storedProfile) setProfile(storedProfile);
        };
        loadData();
    }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async (content) => {
        const userMessage = {
            id: Date.now().toString(),
            content,
            sender: 'user',
            timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);

        const dbInstance = await db;
        await dbInstance.put('messages', userMessage);

        setTimeout(async () => {
            const botMessage = {
                id: (Date.now() + 1).toString(),
                content: getBotResponse(content),
                sender: 'bot',
                timestamp: Date.now(),
            };

            setMessages((prev) => [...prev, botMessage]);
            setLoading(false);

            await dbInstance.put('messages', botMessage);
        }, 1000);
    };

    const getBotResponse = (message) => {
        const responses = {
            workout: "Based on your profile, I recommend starting with a 3-day full-body workout routine. Would you like to see the detailed plan?",
            nutrition: "For your fitness goals, I suggest focusing on protein-rich foods and complex carbohydrates. Would you like specific meal recommendations?",
            progress: "I can help you track your progress. Would you like to log your current weight and workout completion?",
            goals: "Let's set some achievable fitness goals together. What specific areas would you like to focus on?",
        };

        const lowercaseMsg = message.toLowerCase();
        for (const [key, response] of Object.entries(responses)) {
            if (lowercaseMsg.includes(key)) return response;
        }

        return "I'm here to help with your fitness journey! Ask me about workouts, nutrition, progress tracking, or setting goals.";
    };

    const handleQuickAction = (action) => {
        const actionMessages = {
            workout: "Show me a workout plan",
            nutrition: "I need nutrition advice",
            progress: "Check my progress",
            goals: "Help me set fitness goals",
        };
        handleSend(actionMessages[action]);
    };

    return (
        <div className="flex flex-col bg-gray-50">

            <UserProfile
                profile={profile}
                onEditProfile={() => {}}
            />

            <div className=" px-4 py-6 space-y-6 sm:px-8 sm:py-8">
                {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                ))}
                {loading && (
                    <div className="flex items-center gap-2 text-gray-500">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                    </div>
                )}
                <div ref={chatEndRef} />
            </div>

            <QuickActions onAction={handleQuickAction} />
            <ChatInput onSend={handleSend} disabled={loading} />
        </div>
    );
}

export default App;