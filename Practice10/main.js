function showErrorInput() {
  const input = document.getElementById(`email`);
  if (input) input.classList.add(`input-error`);
  const errorMessage = document.getElementById(`error-comment`);
  if (errorMessage) errorMessage.classList.add(`error-comment-visible`);
}

function validateEmail(email) {
  if (!email) {
    showErrorInput();
    return `Email is required`;}

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!isValidEmail.test(email)) {
    showErrorInput();
    return `Please enter valid email`;
  }

  const emailView = email;
  const emailViewElement = document.getElementById(`user-email`);
  emailViewElement.textContent = emailView;

  return ``;
}

function addScaleClassToSignCart () {
  const signCartElement = document.querySelector(`.sign-cart`);
  if (signCartElement) signCartElement.classList.add(`signup-scale0`);
}

function hideSignCart() {
  addScaleClassToSignCart();
    setTimeout(() => {
      const signCartElement = document.querySelector(`.sign-cart`);
      if (signCartElement) signCartElement.classList.add(`sign-cart-hidden`);
    },200)
}

function visibleSuccess() {
  const successCartElement = document.querySelector(`.success`);
  if (successCartElement) successCartElement.classList.add(`success-visible`);
}
const signupFormElement = document.getElementById(`main-form`);

signupFormElement.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const formDataEntries = new FormData(signupFormElement).entries();
  const { email } = Object.fromEntries(formDataEntries);

  const emailErrorMessage = validateEmail(email);

  if (emailErrorMessage) {
    const emailErrorMessageElement = document.querySelector(`#error-comment`);
    emailErrorMessageElement.textContent = emailErrorMessage;
  } else {
    hideSignCart();
    setTimeout(visibleSuccess, 200);
  }

  console.log(signupFormElement);
});

function resetView() {
  const mainView = document.querySelector(`.sign-cart`);
  mainView
    ? mainView.classList.remove(`sign-cart-hidden`)
    : console.log(`Signup form is not found on the page`);
  mainView.classList.remove(`signup-scale0`);

  const secondView = document.querySelector(`.success`);
  secondView
    ? secondView.classList.remove(`success-visible`)
    : console.log(`Success message is not found on the page`);

  const emailError = document.querySelector(`#error-comment`);
  emailError 
  ? (emailError.textContent = ``) 
  : console.log(`No errors`);

  const input = document.getElementById(`email`);
  input
    ? input.classList.remove(`input-error`)
    : console.log(`Email input if not found on the page :(`);
  input.value = ``;
}

const dimissButtonElement = document.getElementById(`dimiss-btn`);
dimissButtonElement.addEventListener(`click`, resetView);

const inputElement = document.getElementById(`email`);
inputElement.addEventListener(`click`, () => {
  const errorField = document.getElementById(`error-comment`);
  errorField.textContent = ``;
  inputElement.classList.remove(`input-error`);
  errorField.classList.remove(`error-comment-visible`);
})


