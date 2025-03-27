import React from "react";
import { ChatContainer, ChatBox, Message, InputContainer, Input, Button, ChatHeader, StatusDot } from "../css/Chatbot.js";
import {useChatbot} from "../Hooks/useChatbot.js";




export const Chatbot = () => {
    const { messages, input, setInput, sendMessage } = useChatbot();

    return (
        <ChatContainer>
            <ChatHeader>
            ChatBot 🤖
            <StatusDot /> 
        </ChatHeader>
            <ChatBox>
                {messages.map((msg, index) => (
                    <Message key={index} isUser={msg.isUser}>{msg.text}</Message>
                ))}
            </ChatBox>
            <InputContainer>
                <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Escribe un mensaje..."
                />
                <Button onClick={sendMessage}>Enviar</Button>
            </InputContainer>
        </ChatContainer>
    );
};


