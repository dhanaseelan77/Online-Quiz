
document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "student" && password === "12345") {

        localStorage.setItem("login", "true");
        window.location.href = "home.html";

    } else {

        document.getElementById("error").innerHTML = "Invalid Username or Password";
    }

});
