// Reidrecting uer to login page is logged out already
const accessToken = localStorage.getItem("accessToken");
if(!accessToken){
  window.location.href = "../login.html";
}

const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function(e){
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userDetails");

  window.location.href = "../login.html";
});