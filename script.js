const follower = document.querySelector(".cursor-follower");
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  follower.animate(
    { left: `${e.clientX}px`, top: `${e.clientY}px` },
    { duration: 450, fill: "forwards", easing: "cubic-bezier(.2,.8,.2,1)" }
  );
});

document.querySelectorAll(".magnetic").forEach((el) => {
  el.addEventListener("mouseenter", () => document.body.classList.add("hovering"));
  el.addEventListener("mouseleave", () => {
    document.body.classList.remove("hovering");
    el.style.transform = "";
  });
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.18;
    const y = (e.clientY - r.top - r.height / 2) * 0.18;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("in-view");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".project, .skill, .about-grid, .statement-text").forEach(el => observer.observe(el));
