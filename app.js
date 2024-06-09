let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let emailInput = document.getElementById("idEmail");
let passInput = document.getElementById("idPass");
let confirmPassInput = document.getElementById("idConfirmPass");

function logIn() {
  event.preventDefault();
  let emailValue = emailInput.value;
  let passValue = passInput.value;
  let confirmPassValue = confirmPassInput.value;

  if (emailRegex.test(emailValue)) {
    if (passwordRegex.test(passValue)) {
      if (confirmPassValue === passValue) {
        window.location.href = "./login.html";
      } else {
        console.log("Passwords do not match. Please try again.");
      }
    } else {
      console.log("Invalid Password");
    }
  } else {
    console.log("Invalid Email");
  }

  emailInput.value = "";
  passInput.value = "";
  confirmPassInput.value = "";
}

let getEye = document.querySelector("fa-regular");

let isOpen = false;
function toggleEye(type) {
  isOpen = !isOpen;
  if (isOpen) {
    getEye.className = "fa-regular fa-eye-slash";
    passInput.type = "text";
  }else{
    getEye.className = "fa-regular fa-eye";
    passInput.type = "password";
  }
}
