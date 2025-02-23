const socket = io("http://localhost:3000");
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");

// Listen for messages
socket.on("message", (data) => {
    const messageElement = document.createElement("p");
    messageElement.textContent = data;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
});

// Send message function
function sendMessage() {
    const message = messageInput.value;
    if (message.trim() === "") return;
    
    socket.emit("message", message);
    messageInput.value = "";
}