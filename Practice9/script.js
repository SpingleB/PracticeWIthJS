const svgInButtonElement = document.getElementById(`share-button-svg`);
const svgPathElement = document.getElementById(`svg-path`);
const buttonElement = document.getElementById(`share-btn`);
const sharingDivElement = document.querySelector(`.sharing-div`);
const sharingDivMobileElement = document.querySelector(`.sharing-div-mobile`);

buttonElement.addEventListener("click", () => {
  svgPathElement.classList.toggle(`change-fill-in-btn`);
  buttonElement.classList.toggle(`change-color-in-btn`);
  if(innerWidth <= 768) {
      sharingDivMobileElement.classList.toggle(`visible`);
  } else if (innerWidth > 768){
      sharingDivElement.classList.toggle(`visible`);
  }
});


