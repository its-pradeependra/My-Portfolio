function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    const ham_nav=document.querySelector(".hamburger-nav");
    const ham_logo=document.querySelector(".hamburger-logo");
    const ham_menu=document.querySelector(".hamburger-menu");
    const profile=document.querySelector(".profile");
    const about=document.querySelector(".about");
    const experience=document.querySelector(".experience");
    const projects=document.querySelector(".projects");
    const contact=document.querySelector(".contact");
    const footer=document.querySelector(".footer");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    ham_nav.classList.toggle("open");
    ham_logo.classList.toggle("open");
    ham_menu.classList.toggle("open");
    profile.classList.toggle("open");
    about.classList.toggle("open");
    experience.classList.toggle("open");
    projects.classList.toggle("open");
    contact.classList.toggle("open");
    footer.classList.toggle("open");
}