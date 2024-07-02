const ws = new WebSocket("ws://localhost:3000"); // Set Server IP and port number
const chatLog = document.getElementById("chatLog");
const messageBox = document.getElementById("messageBox");
const sendButton = document.getElementById("btn-message");

document.addEventListener("DOMContentLoaded", function () {
  const savedChatLogLocal = localStorage.getItem("chatLog");
  const savedChatLogSession = sessionStorage.getItem("sessionChatLog");

  if (savedChatLogLocal) {
    chatLog.value = savedChatLogLocal;
  }

  if (savedChatLogSession) {
    chatLog.value += "\nSession Messages:\n" + savedChatLogSession;
  }
});

/*
 * 서버로부터 메시지를 받음
 */
ws.onmessage = function (event) {
  const data = JSON.parse(event.data);
  const timeStamp = new Date(data.timeStamp).toLocaleTimeString();
  const message = `${timeStamp} ${data.id}: ${data.message}\n`;

  // Update chat log
  chatLog.value += message; // Add ID and Message to textarea

  // [개발] Local Storage에 채팅 내용을 저장 구현

  
  

  // [개발] Session Storage에 채팅 내용을 저장 구현

};

sendButton.onclick = function () {
  if (messageBox.value.trim().length > 0) {
    // [개발] server로 메시지 전송 구현


  }
};
