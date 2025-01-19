// script.js

// Add a hover effect to buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.2s";
    });
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

// Interactive navigation menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
        link.classList.add("active");
    });
});

// Play background music
function playMusic() {
    const audio = new Audio("./music/ENG].mp3");
    audio.loop = true;
    audio.play();
    alert("🎵 Música de fundo tocando!");
}
function playMuusic() {
    const audio = new Audio("./gllo.mp3");
    audio.loop = true;
    audio.play();
    alert("🎵 Música de fundo tocando!");
}

