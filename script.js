function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openProjectPopup(projectTitle, projectDetails, projectVideo) {
  const popup = document.querySelector(".project-popup");
  const popupContent = document.querySelector(".project-popup-content");

  popupContent.innerHTML = `
    <h1>${projectTitle}</h1>    
    <div class="video-container">
      <video autoplay muted loop>
        <source src=${projectVideo} type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <p>${projectDetails}</p>
  `;

  popup.style.opacity = "1";
  popup.style.pointerEvents = "auto";
  popupContent.style.right = "0";

  popup.addEventListener("click", function (event) {
    if (!popupContent.contains(event.target)) {
      closeProjectPopup();
    }
  });
}

function closeProjectPopup() {
  const popup = document.querySelector(".project-popup");
  const popupContent = document.querySelector(".project-popup-content");

  popup.style.opacity = "0";
  popup.style.pointerEvents = "none";
  popupContent.style.right = "-100%";
}
