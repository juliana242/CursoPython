const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);


function validateForm() {
    var nombre = document.forms["contactForm"]["nombre"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    var errorMessage = "";
    
    if (nombre == "") {
        errorMessage += "El campo 'nombre' es obligatorio.\n";
    }
    if (email == "") {
        errorMessage += "El campo 'correo electrónico' es obligatorio.\n";
    }
    if (message == "") {
        errorMessage += "El campo 'mensaje' es obligatorio.\n";
    }
    
    if (errorMessage !== "") {
        alert(errorMessage);
        return false;
    }
}
