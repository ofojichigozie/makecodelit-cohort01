const emailInput = document.getElementById("email");
const emailErrorElem = document.getElementById("emailError");

const passwordInput = document.getElementById("password");
const passwordErrorElem = document.getElementById("passwordError");

const loginButton = document.getElementById("loginButton");

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

  if (hasError) {
    return; // Early return;
  }

  // Making API request to login
  const requestApiUrl = "https://igronchain.onrender.com/auth/login";
  const requestApiOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  };

  try {
    loginButton.disabled = true;
    loginButton.textContent = "Please wait...";
    loginButton.style.backgroundColor = "#515151";

    const response = await fetch(requestApiUrl, requestApiOptions);
    const responseData = await response.json();

    loginButton.disabled = false;
    loginButton.textContent = "Login";
    loginButton.style.backgroundColor = "#000000";

    if (!response.ok) {
      loginStatusElem.textContent = "Error login in";
      return;
    }

    const accessToken = responseData.data.accessToken;
    const user = responseData.data.user;

    // Storing access token and user details in Local Storage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userDetails", JSON.stringify(user));
    
    // Redirecting to vendor page
    window.location.href = "vendor-dashboard/add-product.html";
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