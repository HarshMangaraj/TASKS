document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (password.length < 4 || password.length > 8 || password.includes(" ")) {
        alert("Password must be 4-8 characters long and contain no spaces.");
    } else {
        window.location.href = "weather.html"
    }
});