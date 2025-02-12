document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".bento-grid-item");
    
    boxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add("active"); // Add active class with delay
      }, index * 200); // Staggered delay: 200ms per box
    });
  });
  