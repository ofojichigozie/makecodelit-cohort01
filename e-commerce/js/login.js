const emailInput = document.getElementById("email");
const emailErrorElem = document.getElementById("emailError");

const passwordInput = document.getElementById("password");
const passwordErrorElem = document.getElementById("passwordError");

const loginStatusElem = document.getElementById("loginStatus");

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Getting user inputs
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  let hasError = false;

  // Validating user inputs
  if (email.length === 0) {
    emailErrorElem.textContent = "You need an email";
    emailErrorElem.className = "error";
    emailInput.classList.add("input-error");

    hasError = true;
  }

  if (password.length === 0) {
    passwordErrorElem.textContent = "You need a password";
    passwordErrorElem.className = "error";
    passwordInput.classList.add("input-error");

    hasError = true;
  }

  if(hasError){
    return; // Early return;
  }

  // Making API request to login
  const requestApiUrl = "https://igronchain.onrender.com/auth/login";
  const requestApiOptions = {
    method: "POST",
    Headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  }

  try {
    const response = await fetch(requestApiUrl, requestApiOptions);
    const data = await response.json();

    if (!response.ok) {
      loginStatusElem.textContent = "Error login in";
      return;
    }

    console.log(data)
  } catch (error) {
    loginStatusElem.textContent = error.message;
  }

  loginForm.textContent = "Login Successfull";
});

emailInput.addEventListener("input", function () {
  emailErrorElem.textContent = "";
  emailErrorElem.className = "";
  emailInput.classList.remove("input-error");
});

passwordInput.addEventListener("input", function () {
  passwordErrorElem.textContent = "";
  passwordErrorElem.className = "";
  passwordInput.classList.remove("input-error");
});