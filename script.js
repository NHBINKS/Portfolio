// ------------------ Scroll animation sections ------------------
const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if(position < screenPosition){
      el.classList.add("show");
    }
  });

  // ------------------ Parallax logo hero ------------------
  const heroLogo = document.querySelector(".logo-dev");
  if(heroLogo){
    let scrollY = window.scrollY;
    heroLogo.style.transform = `translateY(${scrollY * 0.2}px)`;
  }

  // ------------------ Animation compétences ------------------
  const skills = document.querySelectorAll(".progress");
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if(skillTop < screenPosition){
      skill.style.width = skill.getAttribute("style").match(/width:\s*(\d+)%/)[1] + "%";
    }
  });

  // ------------------ Logo hero qui remonte à droite du header ------------------
  const headerLogo = document.querySelector(".header-logo");
  if(heroLogo && headerLogo){
    const heroTop = heroLogo.getBoundingClientRect().top;

    if(heroTop < 80){ // ajuste selon la hauteur du header
      headerLogo.style.opacity = "1";  // logo du header apparaît
      heroLogo.style.opacity = "0";    // logo hero disparaît
    } else {
      headerLogo.style.opacity = "0";
      heroLogo.style.opacity = "1";
    }
  }
});