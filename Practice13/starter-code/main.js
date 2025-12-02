const copy = document.getElementById(`copy`);
var passLength = 0;
function shinePass() {
  const word = document.getElementById(`copied`);
  const pass = document.getElementById(`pass`);
  pass.classList.add(`pass-active`);
  word.textContent = `copied`.toUpperCase();
  word.classList.add(`word-active`);
  setTimeout(() => {
    pass.classList.remove(`pass-active`);
    word.textContent = ``.toUpperCase();
    word.classList.remove(`word-active`);
  }, 2000);

}

function  errorOfCopy() {
    const word = document.getElementById(`copied`);
    const pass = document.getElementById(`pass`);

    word.textContent = `not copied`.toUpperCase();
    word.style.color = `#FF4D4D`;
    pass.style.color = `#FF4D4D`;
}

document.addEventListener(`click`, (e) => {
  if (e.target === copy) {
    shinePass();

  } 

});

function rangeValues () {
    const range = document.querySelector("#range");
    const lengthElement = document.getElementById(`length`);
    range.addEventListener("input", () => {
      const value = ((range.value - range.min) / (range.max - range.min)) * 100;
      range.style.background = `linear-gradient(to right, var(--green-200) ${value}%, var(--grey-850) ${value}%)`;
      lengthElement.textContent = range.value;
      passLength = range.value;
    });

}
rangeValues();   

function checkStrength() {
  const checkboxes = document.querySelectorAll(".checkbox");
  const strengthBoxes = document.querySelectorAll(".strength-div");
  const desc = document.querySelector(`.strength-desc`);

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("input", () => {
      const boxNum = Array.from(checkboxes).filter((cb) => cb.checked).length;

      switch (boxNum) {
        case 1:
          desc.style.opacity = 1;
          desc.textContent = `easy`.toUpperCase();
          break;
        case 2:
          desc.style.opacity = 1;
          desc.textContent = `medium`.toUpperCase();
          break;
        case 3:
          desc.style.opacity = 1;
          desc.textContent = `medium`.toUpperCase();
          break;
        case 4:
          desc.style.opacity = 1;
          desc.textContent = `hard`.toUpperCase();
          break;
      }

      if (boxNum === `` || boxNum === 0) {
        desc.textContent = ``;
       desc.style.opacity = 0;
      }
       
        strengthBoxes.forEach((box) =>
          box.classList.remove("strength-div-active")
        );

      for (let i = 0; i < boxNum; i++) {
        strengthBoxes[i].classList.add("strength-div-active");
      }
    });
  });
}
checkStrength();

const form = document.querySelector(`.password-generator`);

function copyPass ( text ) {
        navigator.clipboard.writeText(text)
    .then( () => {
        shinePass();
    })
    .catch( () => {
        errorOfCopy();
    })
}

function choosePreset ( preset ) {
    return `jetbrains-preset-${preset}`;
}

function getLastPreset ( text ) {
  for ( let i = 1; i <= 4; i++) {
    let cls = `jetbrains-preset-${i}`;
    if (text.classList.contains(cls)) return cls;
  }
  return ``;
}

function resizePresets ( text, preset ) {
  let lastClass = getLastPreset(text);
  let choosenClass = choosePreset(preset);
  if( window.innerWidth > 600) {
    if (lastClass) text.classList.remove(lastClass);
    text.classList.add(choosenClass);
  } else {
    if (text.classList.contains(choosenClass)) text.classList.remove(choosenClass);
    if (lastClass) text.classList.add(lastClass);
  } ;
}

const originalClasses = new Map();

function addResizes(element, preset) {
  if (!originalClasses.has(element)) {
    originalClasses.set(element, getLastPreset(element));
  }

  window.addEventListener("resize", () => resizePresets(element, preset));
  resizePresets(element, preset);
}

const legend = document.getElementById(`legend`);
addResizes(legend, 2);
const pass = document.getElementById(`pass`);
addResizes(pass, 1);
addResizes(copy, 3);
const length = document.getElementById(`length`);
addResizes(length, 1);
const lengthLabel = document.getElementById(`length-label`);
addResizes(lengthLabel, 3);
const uppercase = document.getElementById(`uppercase`);
addResizes(uppercase, 3);
const lowercase = document.getElementById(`lowercase`);
addResizes(lowercase, 3);
const numbers = document.getElementById(`numbers`);
addResizes(numbers, 3);
const symbols = document.getElementById(`symbols`);
addResizes(symbols, 3);
const h2Strength = document.getElementById(`h2-strength`);
addResizes(h2Strength, 3);
const strengthDesc = document.querySelector(`.strength-desc`);
addResizes(strengthDesc, 2);
const generate = document.getElementById(`generate`);
addResizes(generate, 3);



function randomPass() {
  const uppercaseElement = document.getElementById("uppercase");
  const lowercaseElement = document.getElementById("lowercase");
  const numbersElement = document.getElementById("numbers");
  const symbolsElement = document.getElementById("symbols");
  var mainString = "";

  function updateMainString() {

    if (uppercaseElement.checked) mainString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercaseElement.checked) mainString += "abcdefghijklmnopqrstuvwxyz";
    if (numbersElement.checked) mainString += "0123456789";
    if (symbolsElement.checked) mainString += "!@#$%^&*()_+-={}[]|:;'<>,.?/";
    if (!uppercaseElement.checked) mainString = mainString = mainString.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
    if (!lowercaseElement.checked) mainString = mainString = mainString.replace("abcdefghijklmnopqrstuvwxyz", "");
    if (!numbersElement.checked) mainString = mainString = mainString.replace("0123456789", "");
    if (!symbolsElement.checked) mainString = mainString = mainString.replace("!@#$%^&*()_+-={}[]|:;'<>,.?/", "");
    return mainString;
  }


  [uppercaseElement, lowercaseElement, numbersElement, symbolsElement].forEach(
    (cb) => {
      cb.addEventListener("change", updateMainString);
    }
  );

  let password = ``;

  for( let i = 0; i <= passLength; i++) {
    let randomString = updateMainString();
    let randomIndex = Math.floor(Math.random() * randomString.length);
    let randomChar = randomString[randomIndex];

    password += randomChar;
  }


  return password;
}

form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const pass = document.getElementById(`pass`);
    pass.textContent = randomPass();
    pass.style.color = `#E6E5EA`;
    copy.addEventListener(`click`, (e) => {
        copyPass(pass.textContent);
    });
})