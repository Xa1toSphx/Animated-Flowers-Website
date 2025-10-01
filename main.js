window.onload = () => {
  document.body.classList.remove("container");

  // Show button after bloom animation finishes
  setTimeout(() => {
    const button = document.getElementById("show-letter");
    button.classList.add("show"); // triggers animation
  }, 8000); // adjust to flower bloom duration

  const button = document.getElementById("show-letter");
  const letter = document.getElementById("letter-container");
  const textElement = document.getElementById("letter-text");

  button.addEventListener("click", () => {
    letter.style.display = "block";
    button.style.display = "none";

    // Typing effect
    const text = textElement.innerHTML;
    textElement.innerHTML = "";
    let index = 0;

    const typing = setInterval(() => {
      textElement.innerHTML += text.charAt(index);
      index++;
      if (index >= text.length) {
        clearInterval(typing);
      }
    }, 40); // speed of typing (ms per character)
  });
};
