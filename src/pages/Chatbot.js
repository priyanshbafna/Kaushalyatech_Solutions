import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

const Chatbot = () => {
    const [chatActive, setChatActive] = useState(false);
    const [chatStep, setChatStep] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [thankYouVisible, setThankYouVisible] = useState(false);

    const handleChatClick = () => {
        setChatActive(!chatActive);
        setChatStep(0);
        setName('');
        setEmail('');
        setMobile('');
        setThankYouVisible(false);
    };

    const handleChatSubmit = async () => {
        if ( chatStep === 0 ) setChatStep(1);
        else if (chatStep === 1 ) setChatStep(2);
        else if (chatStep === 2 ) {
            setChatStep(3)
            // Save chat details
            const chatDetails = { name, email, mobile, services: ['we will Discuss on call'], message: 'Please contact us for more info' };
            try {
                const response = await fetch('http://localhost:8080/api/save-Chatbot', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(chatDetails)
                });
                if (response.ok) {
                    setChatStep(2);
                    setThankYouVisible(true);
                    alert('Chat details send successfully!');
                    setTimeout(() => {
                        setThankYouVisible(false);
                        setChatActive(false);
                    }, 3000); // Hide thank you message after 3 seconds
                } else {
                    alert('Failed to save chat details.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error saving chat details.');
            }
        }
    };
    return (
        <div className="chat-service">
            <button onClick={handleChatClick}>Chat with Us</button>
            {chatActive && (
                <div className="chat-box">
                   
                
                    <button className="close-button" onClick={handleChatClick}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    {thankYouVisible ? (
                        <p className="thank-you-message">Thank you! We will get back to you soon.</p>
                    ) : (
                        <>
                            {chatStep === 0 && <p>Thank you for visiting. Please enter your name:</p>}
                            {chatStep === 1 && <p>Please enter your email:</p>}
                            {chatStep === 2 && <p>Please enter your mobile number:</p>}
                            <input
                                type="text"
                                value={chatStep === 0 ? name : chatStep === 1 ? email : mobile}
                                onChange={(e) => chatStep === 0 ? setName(e.target.value) : chatStep === 1 ? setEmail(e.target.value) : setMobile(e.target.value)}
                            />
                            <button onClick={handleChatSubmit}>Submit</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Chatbot;