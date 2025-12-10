var value = null;
function activateInput () {
    const inputsArr = document.querySelectorAll(`.rate-num`);
    inputsArr.forEach((el)=>{
        el.addEventListener(`click`,(e)=> {
            inputsArr.forEach((element)=>{
                element.classList.remove(`active-rating-num`);
            })
            el.classList.add(`active-rating-num`);
            value = el.value;
        })
    })
}
activateInput();

function addPreset ( el, num, type ) {
    el.classList.add(`overpass-preset-${num}-${type}`);
}
function removePreset ( el, num, type ) {
    el.classList.remove(`overpass-preset-${num}-${type}`);
}

function resezePresets () {
    const title = document.querySelector(`.rate-form__title`);
    const paragraph = document.querySelector(`.rate-form__paragraph`);
    const inputsArr = document.querySelectorAll(`input`);
    const btn = document.getElementById(`submit-btn`);
    const selectedP = document.querySelector(`.selected p`);
    const thanksTitle = document.querySelector(`.thanks h1`);
    const description = document.getElementById(`description`);
    if(window.innerWidth >= 600) 
    {
    addPreset(title, `1`, `bold`);
    removePreset(title, `2`, `bold`);

    addPreset(paragraph, `4`, `regular`);
    removePreset(paragraph, `5`, `regular`);

    inputsArr.forEach((el)=>{
      addPreset(el, `3`, `bold`);
      removePreset(el, `5`, `bold`);  
    })
    
    addPreset(selectedP, `4`, `regular`);
    removePreset(selectedP, `5`, `regular`);  

    addPreset(thanksTitle, `1`, `bold`);
    removePreset(thanksTitle, `2`, `bold`);  

    addPreset(description, `4`, `regular`);
    removePreset(description, `5`, `regular`);  
    } 
    else 
    {
    addPreset(title, `2`, `bold`);
    removePreset(title, `1`, `bold`);

    addPreset(paragraph, `5`, `regular`);
    removePreset(paragraph, `3`, `regular`);

    inputsArr.forEach((el) => {
      addPreset(el, `5`, `bold`);
      removePreset(el, `3`, `bold`);
    });

    addPreset(btn, `5`, `bold`);
    removePreset(btn, `5`, `semiBold`); 

    addPreset(selectedP, `5`, `regular`);
    removePreset(selectedP, `4`, `regular`);

    addPreset(thanksTitle, `2`, `bold`);
    removePreset(thanksTitle, `1`, `bold`);

    addPreset(description, `5`, `regular`);
    removePreset(description, `4`, `regular`); 
    }
}
resezePresets();
window.addEventListener(`resize`, resezePresets)

function hideRateSec () {
    const section = document.querySelector(`.rate`);
    section.classList.add(`hidden`);
    setTimeout( () => {
       section.classList.add(`none`); 
    },200)
}

function showThanksSec () {
    const thanks = document.querySelector(`.thanks`);
    thanks.classList.remove(`invisible-thanks`);
}

function showSelectedRate () {
    const inputsArr = document.querySelectorAll(`input`);
    const selected = document.getElementById(`selected`);
    const total = document.getElementById(`of`);
    selected.textContent = `${value}`;
    total.textContent = `${inputsArr.length}`;
}

const form = document.querySelector(`form`);
form.addEventListener(`submit`, (e)=>{
    e.preventDefault();
    const inputsArr = document.querySelectorAll(`.rate-num`);
    if ( value && value !== null && value !== undefined) {
        hideRateSec();
        setTimeout(()=>{
            showThanksSec();
            showSelectedRate();
        },150)
    }
})