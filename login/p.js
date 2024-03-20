document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get username and password values from the form
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulate authentication (replace with your actual authentication logic)
        if (username === "user" && password === "password") {
            alert("Login successful!");
            // You can redirect the user to another page here
        } else {
            alert("Login failed. Please check your credentials.");
        }
    });
});
