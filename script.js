// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("message").value;
  let error = document.getElementById("error");

  if(name === "" || email === "" || msg === ""){
    error.textContent = "All fields are required!";
    error.style.color = "red";
  } else {
    error.textContent = "Message Sent Successfully!";
    error.style.color = "green";
  }
});

// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function(){
  document.body.classList.toggle("dark");
});

// Scroll Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// Show hero immediately
window.addEventListener("load", () => {
  document.querySelectorAll(".section").forEach(sec => {
    sec.style.opacity = 1;
    sec.style.transform = "translateY(0)";
  });
});