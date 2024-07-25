document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const chatWindow = document.getElementById('chat-window');

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            appendMessage(messageText, 'sent');
            messageInput.value = '';
            setTimeout(() => {
                replyMessage(messageText);
            }, 1000); // Simulate receiving a reply after 1 second
        }
    }

    function appendMessage(text, messageType) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', messageType);
        messageElement.innerText = text;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function replyMessage(userMessage) {
        let replyText = '';
        if (userMessage.toLowerCase().includes('how are you')) {
            replyText = 'I am doing well, what about you?';
        } else if (userMessage.toLowerCase().includes(' i need counselling')) {
            replyText = 'Ok sure, I can help you. Come to my cabin.';
        } else {
            replyText = 'Marcus here whats up.';
        }
        appendMessage(replyText, 'received');
    }
});
