const images = [
    "clock_0.png", // Relógio com 0 luzes acesas
    "clock_1.png", // Relógio com 1 luz acesa
    "clock_2.png", // Relógio com 2 luzes acesas
    "clock_3.png", // Relógio com 3 luzes acesas
    "clock_4.png", // Relógio com 4 luzes acesas
    "clock_5.png", // Relógio com 5 luzes acesas
    "clock_6.png"  // Relógio com todas as luzes acesas
];

let currentIndex = 0;
const clockImg = document.getElementById("clock");

document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        clockImg.src = images[currentIndex];
    }
});

document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        clockImg.src = images[currentIndex];
    }
});
