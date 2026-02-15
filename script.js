/* ================= HAMBURGER MENU ================= */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* ================= SCROLL REVEAL ================= */

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if(sectionTop < trigger){
            section.classList.add("show");
        }

    });

});


/* ================= NAVBAR ACTIVE LINK ================= */

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){
            link.classList.add("active");
        }
    });

});


/* ================= LIGHTBOX GALERI ================= */

const galleryImages = document.querySelectorAll(".galeri-img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});


/* ================= PARALLAX HOME ================= */

const home = document.querySelector(".home");

window.addEventListener("scroll", () => {

    let offset = window.pageYOffset;
    home.style.backgroundPositionY = offset * 0.5 + "px";

});
