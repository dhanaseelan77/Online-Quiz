
document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "student" && password === "12345") {

        localStorage.setItem("login", "true");

        window.location.href = "home.html";

    } else {

        document.getElementById("error").textContent = "Invalid Username or Password";

    }

});
