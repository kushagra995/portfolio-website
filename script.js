// Typewriter effect
const typingElement = document.getElementById("typing");
const textArray = ["Web Developer", "Frontend Designer", "JavaScript Enthusiast"];
let i = 0, j = 0, isDeleting = false;

function type() {
  if (i < textArray.length) {
    if (!isDeleting && j <= textArray[i].length) {
      typingElement.textContent = textArray[i].slice(0, j++);
    } else if (isDeleting && j >= 0) {
      typingElement.textContent = textArray[i].slice(0, j--);
    }

    if (j === textArray[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % textArray.length;
    }
  }
  setTimeout(type, isDeleting ? 80 : 120);
}
type();

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
