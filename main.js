const form = document.getElementById("form");
const submitButton = document.getElementById("submit-button");
const emailInput = document.getElementById("email");
const inputWrapper = document.getElementById("input-wrapper");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const errorMessage = document.getElementById("error-message");
  const emailValue = emailInput.value;

  if (emailValue === "") {
    errorMessage.textContent = `This field is required`;
    inputWrapper.classList.add("error-state");
  } else if (!isEmail(emailValue)) {
    errorMessage.textContent = `Please provide a valid email`;
    inputWrapper.classList.add("error-state");
  } else {
    errorMessage.textContent = "";
    inputWrapper.classList.remove("error-state");
    form.submit();
  }
});

isEmail = (emailValue) => {
  return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(emailValue);
};
