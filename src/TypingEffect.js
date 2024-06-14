import React, { useEffect, useState } from 'react';
import './Typingeffect.css';

const TypingEffect = () => {
    const messages = [
        "Let's Get Started",
        "Write it down, make it happen.",
        "Notes today, achievements tomorrow"
    ];
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const typingSpeed = 50;
    const erasingSpeed = 50;
    const delayBetweenMessages = 2000;

    useEffect(() => {
        const handleType = () => {
            if (!isDeleting && charIndex < messages[messageIndex].length) {
                setText(prev => prev + messages[messageIndex].charAt(charIndex));
                setCharIndex(prev => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setText(prev => prev.slice(0, -1));
                setCharIndex(prev => prev - 1);
            } else if (!isDeleting && charIndex === messages[messageIndex].length) {
                setTimeout(() => setIsDeleting(true), delayBetweenMessages);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setMessageIndex((prev) => (prev + 1) % messages.length);
            }
        };

        const timer = setTimeout(handleType, isDeleting ? erasingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, messages, messageIndex]);

    return (
        <h1 className="typing-text">{text}</h1>
    );
};

export default TypingEffect;
