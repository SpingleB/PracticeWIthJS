function showAnswer () {
    function changeSVGs() {
      const svgs = {
        shownSvg: `./assets/images/icon-minus.svg`,
        hiddenSvg: `./assets/images/icon-plus.svg`,
      };
      function changeSVG(inner, svg) {
        inner.innerHTML = `<img src="${svg}" alt="Show-hide asnwer">`;
      }
      const svgDivsArr = document.querySelectorAll(`.svg-div`);
      svgDivsArr.forEach((el) => {
        let isShown = false;
        el.addEventListener(`click`, (event) => {
          if (!isShown) {
            changeSVG(el, svgs.shownSvg);
            isShown = true;
            if ( isShown ) {
                event.currentTarget.parentElement.nextElementSibling.classList.remove(`hidden`);
                event.currentTarget.parentElement.nextElementSibling.classList.remove(`hide-ans`);
                event.currentTarget.parentElement.nextElementSibling.classList.add(`show-ans`);
            }
          } else {
            changeSVG(el, svgs.hiddenSvg);
            isShown = false;
            if ( !isShown ) {
                event.currentTarget.parentElement.nextElementSibling.classList.add(`hide-ans`);
            }
          }
        });
      });
      const titlesArr = document.querySelectorAll(`.question-div h2`);
      titlesArr.forEach((el)=>{
        let isShown = false;
        el.addEventListener(`click`, (event) => {
          if (!isShown) {
            changeSVG(el.parentElement.querySelector(`.svg-div`), svgs.shownSvg);
            isShown = true;
            if ( isShown ) {
                event.currentTarget.parentElement.nextElementSibling.classList.remove(`hidden`);
                event.currentTarget.parentElement.nextElementSibling.classList.remove(`hide-ans`);
                event.currentTarget.parentElement.nextElementSibling.classList.add(`show-ans`);
            }
          } else {
            changeSVG(el.parentElement.querySelector(`.svg-div`), svgs.hiddenSvg);
            isShown = false;
            if ( !isShown ) {
                event.currentTarget.parentElement.nextElementSibling.classList.add(`hide-ans`);
            }
          }
        });
      });
    }
    changeSVGs();
}
showAnswer();

function changeBG () {
    const body = document.querySelector(`body`);
    if (window.innerWidth >= 600) {
        body.style.backgroundImage = `url(./assets/images/background-pattern-desktop.svg)`;
    } else {
        body.style.backgroundImage = `url(./assets/images/background-pattern-mobile.svg)`;
    }
}
changeBG();
window.addEventListener(`resize`, changeBG);