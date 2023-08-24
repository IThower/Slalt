const logoImage = document.getElementById("logo-img");

const imageUrls = [
  "public/images/LOGO_SLALT_RECORDS_BRANCO.png",
  "public/images/LOGO_SLALT_RECORDS_ESCURO.png",
];

// Índice atual da URL da imagem
let currentImageIndex = 0;

function toggleImage() {
  console.log("toggleImage");
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length; // Alterna entre as URLs de imagens
  logoImage.src = imageUrls[currentImageIndex]; // Define a nova URL da imagem
}

function toggleSwitch() {}

function changeThemeAndImage() {
  toggleTheme();
  toggleImage();
  toggleSwitch();
}
function toggleTheme() {
  const body = document.body;
  const isDarkMode = body.dataset.bsTheme === "dark";

  if (isDarkMode) {
    body.dataset.bsTheme = "light";
    applyLightThemeStyles();
  } else {
    body.dataset.bsTheme = "dark";
    applyDarkThemeStyles();
  }
}

function applyDarkThemeStyles() {
  const links = document.querySelectorAll(".custom-link");
  let footerrecords = document.querySelector(".footer-records");
  let hr = document.querySelectorAll(".hr");
  const pathElement1 = document.getElementById("myPath1");
  const pathElement2 = document.getElementById("myPath2");
  const linksbrands = document.querySelectorAll(".custom-link-brands");
  let switchbg = document.querySelector(".switchjs");

  switchbg.classList.remove("switch-bg-dia");
  switchbg.classList.add("switch-bg-lua");

  linksbrands.forEach((linkbrands) => {
    console.log(linkbrands);
    linkbrands.classList.remove("green-bg", "white-text");
    linkbrands.classList.add("white-bg", "green-text");
  });

  pathElement1.setAttribute("fill", "white");
  pathElement2.setAttribute("fill", "006400");

  links.forEach((link) => {
    const icon = link.querySelector("div > i").parentNode;
    const iconi = link.querySelector("i");
    link.classList.remove("green-bg", "text-white");
    link.classList.add("white-bg", "green-text");
    iconi.classList.remove("green-text");
    iconi.classList.add("white-text");
    icon.classList.remove("white-bg");
    icon.classList.add("green-bg");
  });

  hr.forEach((hr) => {
    hr.classList.remove("hr-green");
    hr.classList.add("hr-white");
  });

  footerrecords.classList.remove("green-text");
  footerrecords.classList.add("white-text");
}

function applyLightThemeStyles() {
  const links = document.querySelectorAll(".custom-link");
  let hr = document.querySelectorAll(".hr");
  let footerrecords = document.querySelector(".footer-records");
  const pathElement1 = document.getElementById("myPath1");
  const pathElement2 = document.getElementById("myPath2");
  const linksbrands = document.querySelectorAll(".custom-link-brands");
  let switchbg = document.querySelector(".switchjs");

  switchbg.classList.remove("switch-bg-lua");
  switchbg.classList.add("switch-bg-dia");

  linksbrands.forEach((linksbrands) => {
    linksbrands.classList.remove("white-bg", "green-text");
    linksbrands.classList.add("green-bg", "white-text");
  });

  pathElement1.setAttribute("fill", "#006400");
  pathElement2.setAttribute("fill", "white");

  links.forEach((link) => {
    link.classList.remove("white-bg", "green-text");
    link.classList.add("green-bg", "text-white");

    const icon = link.querySelector("div > i").parentNode;
    const iconi = link.querySelector("i");

    iconi.classList.remove("white-text");
    iconi.classList.add("green-text");
    icon.classList.remove("green-bg");
    icon.classList.add("white-bg");
  });

  hr.forEach((hr) => {
    hr.classList.remove("hr-white");
    hr.classList.add("hr-green");
  });

  footerrecords.classList.remove("white-text");
  footerrecords.classList.add("green-text");
}
