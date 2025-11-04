function logout() {
  // Show logout message
  alert("Successfully logged out");

  // Redirect to login page
  window.location.href = "loginpage.html";
}

function main()
{
  alert("Welcome to word world");
  window.location.href = "Main page.html";
}

function About()
{
  alert("Behind the AtTech Titans");
  window.location.href = "ABOUT US.html";
}
var toggle = "on";
function night ()
{
  
  const body = document.querySelector("body");
  const hed = document.querySelector("header");


  if (toggle=="on")
  {
  body.style.background = " darkblue";
  hed.style.background ="darkgreen";
  hed.style.transition ="2s";
  body.style.transition = "2s";
  toggle = "off";
  }

  else if (toggle=="off")
  {
    body.style.background = "lightblue";
    body.style.transition = "2s";
    hed.style.background ="white";
    hed.style.transition ="2s";
    toggle = "on";
  }

}
