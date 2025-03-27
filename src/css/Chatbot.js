import styled from "styled-components";

export const  ChatContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    width: 30%;
    background: white;
    margin: auto auto;
    padding: 0px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    flex-direction: column;

`;

export const ChatHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding: 10px;
    background: #007bff;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const StatusDot = styled.span`
width: 13px;
height: 13px;
background: #4caf50; 
border-radius: 50%;
margin-left: auto; 
box-shadow: 0 0 5px #4caf50;
`;

export const  ChatBox = styled.div`
    height: 300px;
    overflow-y: auto;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const  Message = styled.p`
    padding: 8px;
    max-width: 70%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    border-radius: 10px;
    color: ${({ isUser }) => (isUser ? "white" : "black")};
    background: ${({ isUser }) => (isUser ? "#007bff" : "#e5e5e5")};
    align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
`;

export const  InputContainer = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 15px;
`;

export const  Input = styled.input`
    flex-grow: 1;
    padding: 5px;
    margin: 0 9px;
`;

export const Button = styled.button`
width: 60px;
height: 40px;
background-color: #007bff;  
color: white;
border: none;
border-radius: 20px;  
font-size: 16px;
font-weight: bold;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
transition: background-color 0.3s ease, transform 0.2s ease; 


box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);

&:hover {
    background-color: #0056b3;  
    transform: translateY(-2px); 
}

&:active {
    background-color: #00408d;  
    transform: translateY(2px); 
}
`;
