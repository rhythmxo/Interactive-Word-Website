var count = 2;

function validate() {
  var user = document.loginForm.username.value;
  var password = document.loginForm.password.value;
  var valid = false;
  var userData = [
    { username: "Zian", password: "219068113" },
    { username: "John", password: "219995273" },
    { username: "Ilia", password: "219577857" },
    { username: "Dinal", password: "218978270" }
  ];
  
  for (var i = 0; i < userData.length; i++) {
    if (user == userData[i].username && password == userData[i].password) {
      valid = true;
      break;
    }
  }
  
  if (valid) {
    alert("Login was successful");
    window.location.href = "frontpage.html"; // Update with the front page file name or URL
    return false;
  }
  
  var again = "tries";
  if (count == 1) {
    again = "try";
  }
  
  if (count >= 1) {
    alert("Wrong password or username");
    count--;
  }
}
