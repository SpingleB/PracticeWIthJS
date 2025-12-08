export function resizePresets () {
    const preset1Arr = document.querySelectorAll(`.rubik-preset-1-mobile`);
    const preset2MediumtArr = document.querySelectorAll(`.rubik-preset-2-mobile-medium`);
    const preset2LightArr = document.querySelectorAll(`.rubik-preset-2-mobile-light`);
    const preset3Arr = document.querySelectorAll(`.rubik-preset-3-mobile`);
    const preset4Arr = document.querySelectorAll(`.rubik-preset-4-mobile`);
    const preset5Arr = document.querySelectorAll(`.rubik-preset-5-mobile`);
    preset1Arr.forEach((e)=>{
        console.log(e)
    })

    if ( window.innerWidth > 600 ) {
        preset1Arr.forEach((element)=>{
            element.classList.remove(`rubik-preset-1-mobile`);
            element.classList.add(`rubik-preset-1`);
        })

        preset2MediumtArr.forEach((element)=>{
            element.classList.remove(`rubik-preset-2-mobile-medium`);
            element.classList.add(`rubik-preset-2-medium`);
        })

        preset2LightArr.forEach((element)=>{
            element.classList.remove(`rubik-preset-2-mobile-light`);
            element.classList.add(`rubik-preset-2-light`);
        })

        preset3Arr.forEach((element)=>{
            element.classList.remove(`rubik-preset-3-mobile`);
            element.classList.add(`rubik-preset-3`);
        })

        preset4Arr.forEach((element)=>{
            element.classList.remove(`rubik-preset-4-mobile`);
            element.classList.add(`rubik-preset-4`);
        })
        
        preset5Arr.forEach((element)=>{
            element.classList.remove(`rubik-preset-5-mobile`);
            element.classList.add(`rubik-preset-6`);
        })
    } else {
        preset1Arr.forEach((element) => {
          element.classList.add(`rubik-preset-1-mobile`);
          element.classList.remove(`rubik-preset-1`);
        });

        preset2MediumtArr.forEach((element) => {
          element.classList.add(`rubik-preset-2-mobile-medium`);
          element.classList.remove(`rubik-preset-2-medium`);
        });

        preset2LightArr.forEach((element) => {
          element.classList.add(`rubik-preset-2-mobile-light`);
          element.classList.remove(`rubik-preset-2-light`);
        });

        preset3Arr.forEach((element) => {
          element.classList.add(`rubik-preset-3-mobile`);
          element.classList.remove(`rubik-preset-3`);
        });

        preset4Arr.forEach((element) => {
          element.classList.add(`rubik-preset-4-mobile`);
          element.classList.remove(`rubik-preset-4`);
        });

        preset5Arr.forEach((element) => {
          element.classList.add(`rubik-preset-5-mobile`);
          element.classList.remove(`rubik-preset-6`);
        });
    }
}


window.addEventListener(`resize`, resizePresets);