document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("username").value;

    document.getElementById("message").textContent =
        "Welcome to the Demon Slayer Corps, " + name + "!";
});