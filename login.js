function showPassword() {
    var box = document.getElementById("password");
    if (box.type === "password") {
        box.type = "text";
    } else {
        box.type = "password";
    }
}
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var user = document.getElementById("username").value.trim();
    var pass = document.getElementById("password").value;
    var found = null;

    for (var i = 0; i < students.length; i++) {
        if (students[i].username === user && students[i].password === pass) {
            found = students[i];
        }
    }
    if (found) {
        sessionStorage.setItem("loggedIn", found.username);
        window.location.href = "portal.html";
    }
    else {
        document.getElementById("error").textContent = "Wrong username or password";
    }
});