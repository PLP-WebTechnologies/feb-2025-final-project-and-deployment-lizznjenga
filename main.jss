document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleComment");
  const commentBox = document.getElementById("commentBox");

  toggleBtn?.addEventListener("click", () => {
    commentBox.classList.toggle("hidden");
  });
});
