const svgInButtonElement = document.getElementById(`share-button-svg`);
const svgPathElement = document.getElementById(`svg-path`);
const buttonElement = document.getElementById(`share-btn`);
const sharingDivElement = document.querySelector(`.sharing-div`);

buttonElement.addEventListener("click", () => {
  svgPathElement.classList.toggle(`change-fill-in-btn`);
});

buttonElement.addEventListener("click", () => {
  buttonElement.classList.toggle(`change-color-in-btn`);
  console.log(sharingDivElement);
});

buttonElement.addEventListener("click", () => {
  sharingDivElement.classList.toggle(`visible`);
});