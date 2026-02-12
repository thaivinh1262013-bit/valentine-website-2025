const CONFIG = {
    introTitle: "Bạn có một bức thư mới! ✨",
    introSubtitle: "(Chạm vào trái tim để mở nhé)",
    background: "linear-gradient(-45deg, #ffafbd, #ffc3a0, #ffafbd, #ffc3a0)",
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        textColor: "#ff4757"
    }
};
window.CONFIG = CONFIG;
const CONFIG = {
    // ... các phần trước giữ nguyên
    musicUrl: "https://www.youtube.com/watch?v=znvky0Uq8qc", // Link bài Until I Found You
    showMusic: true
};
function startExperience() {
    const intro = document.getElementById('intro-overlay');
    intro.classList.add('fade-out');
    
    // Tạo phần tử nhạc ẩn và phát
    const audio = new Audio('https://files.catbox.moe/k3v7n4.mp3'); // Link file nhạc cho web
    audio.loop = true;
    audio.play().catch(e => console.log("Trình duyệt chặn tự động phát, cần tương tác trước"));

    setTimeout(() => {
        intro.style.display = 'none';
    }, 1000);
}
