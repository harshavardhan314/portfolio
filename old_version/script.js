
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('open');
  });

function toggleRead() {
  const dots = document.getElementById("dots");
  const more = document.getElementById("more");
  const btn = document.getElementById("readbtn");

  if (more.style.display === "none") {
    more.style.display = "inline";
    dots.style.display = "none";
    btn.innerText = "Read Less";
  } else {
    more.style.display = "none";
    dots.style.display = "inline";
    btn.innerText = "Read More";
  }
}

 const roles = ["Web Developer ", "Competitive Programmer "];
    let current = 0;
    let letter = 0;
    let isDeleting = false;
    const speed = 100;
    const deletingSpeed = 250;   
    const delay = 1500;
    const target = document.getElementById("typing");

    function typeWriter() {
      const currentText = roles[current];
      if (isDeleting) {
        target.textContent = currentText.substring(0, letter--);
      } else {
        target.textContent = currentText.substring(0, letter++);
      }

      if (!isDeleting && letter === currentText.length) {
        isDeleting = true;
        setTimeout(typeWriter, delay);
        return;
      }

      if (isDeleting && letter === 0) {
        isDeleting = false;
        current = (current + 1) % roles.length;
      }

      setTimeout(typeWriter, isDeleting ? 60 : speed);
    }

    window.onload = typeWriter;