function openGift() {
  document.querySelector(".gift-container").style.display = "none";

  const card = document.getElementById("surprise");
  card.classList.remove("hidden");

  setTimeout(() => {
    card.classList.add("show");

    // 🎊 CONFETTI TIME
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });

    // 🎵 MUSIC STARTS HERE
    const music = document.getElementById("bgMusic");
    music.volume = 0.2;
    music.play();

  }, 100);

  function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  heart.style.fontSize = (16 + Math.random() * 20) + "px";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// keep spawning hearts
setInterval(createHeart, 400);

}

