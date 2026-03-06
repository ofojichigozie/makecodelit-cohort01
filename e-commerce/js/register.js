const formElem = document.getElementById("regForm");
const fullnameInput = document.getElementById("regFullname");
const emailInput = document.getElementById("regEmail");
const phoneNumberInput = document.getElementById("regPhoneNumber");
const passwordInput = document.getElementById("regPassword");
const businessNameInput = document.getElementById("regBusinessName");

formElem.addEventListener("submit", async function (e) {
  e.preventDefault();

  let fullname = fullnameInput.value;
  let email = emailInput.value;
  let phoneNumber = phoneNumberInput.value;
  let password = passwordInput.value;
  let businessName = businessNameInput.value;

  if (fullname.trim().length === 0) {
    alert("You must enter full name");
    return; // Early return
  }

  if (email.trim().length === 0) {
    alert("You must enter email");
    return; // Early return
  }

  if (phoneNumber.trim().length === 0) {
    alert("You must enter phone numner");
    return; // Early return
  }

  if (password.trim().length === 0) {
    alert("You must enter password");
    return; // Early return
  }

  if (businessName.trim().length === 0) {
    alert("You must enter business name");
    return; // Early return
  }

  const userData = {
    fullName: fullname,
    email,
    phoneNumber,
    password,
    businessName
  };

  console.log("Before API request");

  const requestApiUrl = "https://igronchain.onrender.com/auth/register";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  };

  fetch(requestApiUrl, requestOptions)
  .then(function (response) {
    console.log("Inside API request - RESPONSE");
    return response.json();
  }).then(function (data) {
    console.log("Inside API request - DATA");
    console.log("Actual data from backend: ", data)
    return data;
  }).catch(function (err) {
    console.log("Something went bad!");
    console.error(err)
  });

  // try {
  //   const response = await fetch("https://igronchain.onrender.com/auth/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(userData)
  //   })
  //   console.log("Inside API request - RESPONSE");
  //   const data = await response.json();
  //   console.log("Inside API request - DATA");
  //   console.log("Actual data from backend: ", data);
  // } catch (err) {
  //   console.log("Something went bad!");
  //   console.error(err)
  // }

  console.log("AFter API request");
});