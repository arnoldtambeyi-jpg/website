var current = null;
var savedUser = sessionStorage.getItem("loggedIn");

for (var i = 0; i < students.length; i++) {
    if (students[i].username === savedUser) {
        current = students[i];
    }
}
if (current === null) {
    window.location.href = "login.html";
}
else {
    document.getElementById("studentName").textContent = current.name;
    document.getElementById("studentGrade").textContent = current.grade;
    var body = document.getElementById("resultsBody");
    for (var subject in current.results) {
        body.innerHTML += "<tr><td>" + subject + "</td><td>s" + current.results[subject] + "</td</tr>";
    }
}
function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}