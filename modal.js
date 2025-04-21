fetch("contact-modal.html")
  .then((res) => res.text())
  .then((data) => {
    document.body.insertAdjacentHTML("beforeend", data);
  });

// Wait until the modal is loaded before using it
function openContact() {
  const modal = document.getElementById("contactOverlay");
  if (modal) {
    modal.style.display = "flex";
  } else {
    // Modal not loaded yet — retry after a short delay
    setTimeout(openContact, 100);
  }
}

function closeContact() {
  const modal = document.getElementById("contactOverlay");
  if (modal) {
    modal.style.display = "none";
  }
}