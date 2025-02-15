document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".bento-grid-item");

  boxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add("active"); // Add active class with delay
    }, index * 200); // Staggered delay: 200ms per box
  });
});
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
