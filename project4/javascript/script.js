const userForm = document.getElementById("userForm");

if (userForm) {
    userForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("username").value;

        document.getElementById("message").textContent =
            "Welcome to the Demon Slayer Corps, " + name + "!";
    });
}




const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const interest = document.getElementById("interest").value;

        const response = document.getElementById("formResponse");

        response.textContent = "Thank you, " + name + "! GreenTech Solutions will contact you soon about " + interest + ".";
    });
}