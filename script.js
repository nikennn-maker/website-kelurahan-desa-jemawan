// ================================
// FORCE DOWNLOAD
// ================================

function downloadFile(fileURL, fileName) {
  fetch(fileURL)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobURL;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobURL);
      alert("File berhasil didownload!");
    });
}

// ==========================
// TOGGLE MENU NAVBAR MOBILE
// ==========================
const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector("nav ul");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// ================================
// REVEAL ANIMATION
// ================================

function revealElements() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);
