// darkModeToggle
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// image-modal
function openModal(imgElement) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";
  modalImg.src = imgElement.src;
}

function closeModal(event) {
  const modal = document.getElementById("image-modal");
  if (
    event.target.classList.contains("modal") ||
    event.target.classList.contains("close-btn")
  ) {
    modal.style.display = "none";
  }
}


//menu-toggle
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      const menuToggle = document.getElementById('menu-toggle');
      if (menuToggle.checked) {
        menuToggle.checked = false; // Uncheck to hide menu
      }
    });
  });

// scrollToTop
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

