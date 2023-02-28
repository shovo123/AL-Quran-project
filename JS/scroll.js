window.addEventListener("scroll", handleScroll);

function handleScroll() {
  const section1 = document.querySelector("#section1");
  const section2 = document.querySelector("#section2");
  const section3 = document.querySelector("#section3");
  const targetSection = document.querySelector(".relative");

  if (targetSection && targetSection.classList.contains("fixed")) {
    // Check if target section is touching a higher z-index section
    if (
      section3.getBoundingClientRect().top <= 0 &&
      section3.classList.contains("z-40")
    ) {
      targetSection.classList.remove("fixed");
    }
  } else {
    // Check if target section should be fixed
    if (
      section1.getBoundingClientRect().bottom <= 0 &&
      section2.getBoundingClientRect().top > 0
    ) {
      targetSection.classList.add("fixed");
    }
  }
}
