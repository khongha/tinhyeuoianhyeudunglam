// Các lời tỏ tình
const messages = [
  "Em là ánh sáng trong cuộc đời anh. 🌟",
  "Mỗi lần em cười, thế giới của anh sáng rực lên. 😊",
  "Dù bao nhiêu thời gian trôi qua, anh vẫn yêu em như ngày đầu. ❤️",
  "Chỉ cần có em, anh đã có tất cả. 💖",
  "Anh yêu em, mãi mãi và hơn thế nữa. 💑"
];

const button = document.getElementById("reveal-button");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  message.textContent = randomMessage;
  message.style.display = "block";
});

// Phát nhạc tự động
const music = document.getElementById("background-music");
music.volume = 0.3;
