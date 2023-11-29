//Método dinámico para generar el contenido del footer
function fillFooter() {
    const FOOTER = document.querySelector("footer");
    FOOTER.id = "nosik-footer";
    const LOGO = document.createElement("img");
    LOGO.id = "nosik-footer-logo";
    LOGO.src = "../img/nosik_logo.svg";
    FOOTER.appendChild(LOGO);
    const CONTACT_DIV = document.createElement("div");
    CONTACT_DIV.id = "nosik-contact-div";
    FOOTER.appendChild(CONTACT_DIV);
    const TITLE_CONTACT = document.createElement("h3");
    TITLE_CONTACT.textContent = "Contacto";
    TITLE_CONTACT.id = "nosik-title-contact"
    CONTACT_DIV.appendChild(TITLE_CONTACT);
    const P1 = document.createElement("p");
    P1.textContent = "¿Tienes una idea de obra o proyecto?";
    P1.classList.add("nosik-p-contact");
    CONTACT_DIV.appendChild(P1);
    const P2 = document.createElement("p");
    P2.textContent = "¿Tienes una marca y te gustaría colaborar conmigo?";
    P2.classList.add("nosik-p-contact");
    CONTACT_DIV.appendChild(P2);
    const RRSS_DIV = document.createElement("div");
    RRSS_DIV.id = "nosik-rrss-div";
    CONTACT_DIV.appendChild(RRSS_DIV);
    const P3 = document.createElement("p");
    P3.textContent = "Escríbeme.";
    P3.classList.add("nosik-p-rrss");
    RRSS_DIV.appendChild(P3);
    const MAIL_DIV = document.createElement("div");
    MAIL_DIV.classList.add("nosik-mail-");
    RRSS_DIV.appendChild(MAIL_DIV);

}
fillFooter();