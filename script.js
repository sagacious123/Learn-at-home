const toggleBtn = document.querySelector(".header-mbmenu-trigger");
const navContent = document.querySelector(".nav-content");
const svvg = document.querySelector(".svvg");
const header = document.querySelector("header");



toggleBtn.addEventListener("click", function() {
	navContent.classList.toggle("responsive");
	this.classList.toggle("change");
})

window.addEventListener("scroll", function() {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ) {
        svvg.classList.add("logo-scroll");
        header.classList.add("header-scroll");
    } else {
        svvg.classList.remove("logo-scroll");
        header.classList.remove("header-scroll");
    }
})