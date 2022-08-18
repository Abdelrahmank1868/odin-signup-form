const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".errorMessage");

const inputs = [email, phone, password, confirmPassword];

inputs.forEach((item) => {
  item.addEventListener("focusin", () => {
    errorMessage.textContent = "";
    item.classList.remove("error");
    if (item == password || item == confirmPassword) {
      password.classList.remove("error");
      confirmPassword.classList.remove("error");
    }
  });
});

function submit(e) {
  e.preventDefault();
  if (
    !phone.value.match(
      /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
    )
  ) {
    phone.classList.add("error");
    errorMessage.textContent = "Phone number needs to be exactly 10 numbers";
    return;
  }

  if (password.value.length < 8) {
    password.classList.add("error");
    errorMessage.textContent = "Password must be atleast 8 characters long";
    return;
  }

  if (!password.value.match(/[a-z]/)) {
    password.classList.add("error");
    errorMessage.textContent =
      "Password needs to have atleast one lower case letter";
    return;
  }

  if (!password.value.match(/[A-Z]/)) {
    password.classList.add("error");
    errorMessage.textContent =
      "Password needs to have atleast one upper case letter";
    return;
  }

  if (!password.value.match(/\d+/g)) {
    password.classList.add("error");
    errorMessage.textContent = "Password needs to have atleast one number";
    return;
  }
  errorMessage.textContent = "Form added successfully";
  errorMessage.style.color = "green";
  setTimeout(() => {
    window.location.reload();
  }, 5000);
}

const form = document.querySelector("form");
form.addEventListener("submit", submit);
