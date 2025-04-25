window.addEventListener("load", () => {
  const texts = ["Front-End Developer", "UI/UX Enthusiast", "Tech Enthusiast"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  (function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.getElementById("typing").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 2000);
    } else {
      setTimeout(type, 100);
    }
  })();
  const audio = document.getElementById("audio");
  const albumArt = document.getElementById("albumArt");
  if (audio && albumArt) {
    audio.addEventListener("play", () => {
      albumArt.classList.add("rotate");
    });
    audio.addEventListener("pause", () => {
      albumArt.classList.remove("rotate");
    });
  }
});
