// Use the saved list if there is one, otherwise the list in data.js
var saved = localStorage.getItem("students");
if (saved) {
  students = JSON.parse(saved);
}

function addStudent() {
  var name = document.getElementById("name").value.trim();
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();
  var grade = Number(document.getElementById("grade").value);
  var msg = document.getElementById("msg");

  // Conditional: stop if any box is empty
  if (name === "" || username === "" || password === "") {
    msg.textContent = "Please fill in all boxes";
    return;
  }

  // Loop: stop if the username is already used
  for (var i = 0; i < students.length; i++) {
    if (students[i].username === username) {
      msg.textContent = "That username is already used";
      return;
    }
  }

  students.push({
    name: name,
    username: username,
    password: password,
    grade: grade,
    results: {}
  });
  localStorage.setItem("students", JSON.stringify(students));

  document.getElementById("name").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  msg.textContent = "Student added";
  showStudents();
}

function showStudents() {
  var list = document.getElementById("list");
  list.innerHTML = "";
  for (var i = 0; i < students.length; i++) {
    var li = document.createElement("li");
    li.textContent = students[i].name + " (Grade " + students[i].grade + ")";
    list.appendChild(li);
  }
}

showStudents();
