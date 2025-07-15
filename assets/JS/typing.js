document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I'm Théo 👨‍💻";
  const typingTarget = document.getElementById("typing");

  let i = 0;

  function type() {
    if (i < text.length) {
      typingTarget.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 90);
    }
  }

  type();
});
