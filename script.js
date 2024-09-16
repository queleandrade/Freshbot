function toggleChatbot() {
    var chatbot = document.getElementById("chatbotContainer");
    var openBtn = document.getElementById("openChatbotBtn");
    if (chatbot.classList.contains("hidden")) {
        chatbot.classList.remove("hidden");
        openBtn.style.display = "none";
    } else {
        chatbot.classList.add("hidden");
        openBtn.style.display = "block";
    }
}
