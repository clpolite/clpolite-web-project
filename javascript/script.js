const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const interest = document.getElementById("interest").value;

        const response = document.getElementById("formResponse");

        response.textContent =
            "Thank you, " + name +
            "! GreenTech Solutions will contact you soon about " +
            interest + ".";
    });
}