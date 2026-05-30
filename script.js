console.log("Bienvenue sur LEO CREATION");

/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".navbar ul");

if(menuToggle && navbarMenu){

    menuToggle.addEventListener("click", () => {
        navbarMenu.classList.toggle("show");
    });

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbarMenu.classList.remove("show");
        });
    });

}


/* =========================
   NAVBAR ACTIVE
========================= */

const links = document.querySelectorAll(".navbar a");

links.forEach(link => {

    link.addEventListener("click", function(){

        links.forEach(l => {
            l.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* =========================
   NAVBAR SCROLL
========================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }

});


/* =========================
   ANIMATION AU SCROLL
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 300;

        if(top > offset){
            section.classList.add("show");
        }

    });

});


/* =========================
   BOUTON RETOUR EN HAUT
========================= */

const topBtn = document.querySelector(".top-btn");

if(topBtn){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){
            topBtn.style.display = "flex";
        }else{
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================
   MESSAGE DE CONFIRMATION
========================= */

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit", () => {

        alert(
            "Merci pour votre demande. Nous vous contacterons dans les plus brefs délais."
        );

    });

}

const contactBtn = document.getElementById("openContact");
const contactSection = document.getElementById("appointment");

contactBtn.addEventListener("click", () => {

    if(contactSection.style.display === "block"){

        contactSection.style.display = "none";

    }else{

        contactSection.style.display = "block";

        contactSection.scrollIntoView({
            behavior:"smooth"
        });

    }

});