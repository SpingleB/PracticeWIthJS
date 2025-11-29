const tipButtonsElements = document.querySelectorAll(`.tip`);
const resetButtonElement = document.getElementById(`reset-btn`);
const customPercentElement = document.getElementById(`custom-tip`);
resetButtonElement.classList.add(`disabled`);

var percent = null;

function disableBtn () {
    const resetButtonElement = document.getElementById(`reset-btn`);
    const moneyInput = document.getElementById(`bill-input`);
    const peopleInput = document.getElementById(`people`);

    moneyInput.addEventListener(`input`, (e) => {
        ( moneyInput.value  === `` )
        ? resetButtonElement.classList.add(`disabled`) 
        : resetButtonElement.classList.remove(`disabled`);
    })

    peopleInput.addEventListener(`input`, (e) => {
        ( peopleInput.value === `` )
        ? resetButtonElement.classList.add(`disabled`)
        : resetButtonElement.classList.remove(`disabled`);
    });
}

function tipColor (arr) {
    for ( let i = 0; i < arr.length; i++) {
        arr[i].classList.remove(`tip-active`);
    }
}

function inputEventForCustom() {
    const custom = document.getElementById(`custom-tip`);
    custom.addEventListener(`input`, (e) => {
      percent = Number( custom.value.trim() );
      console.log(percent);
    });
}

function validateCustomPrecent ( percent, tip ) {
  if ( percent > 100 ) {
    tip.classList.add(`custom-tip-error`);
    tip.value = ``;
    tip.placeholder = `max 100%`;
  } else {
    tip.classList.remove(`custom-tip-error`);
    tip.value = ``;
    tip.placeholder = `Custom`;
  }

  return percent;
}

async function tipRecolor(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === `custom-tip`) continue;
    arr[i].addEventListener(`click`, (e) => {
      tipColor(tipButtonsElements);
      arr[i].classList.add(`tip-active`);

      switch (arr[i]) {
        case arr[0]:
          percent = 5;
          break;
        case arr[1]:
          percent = 10;
          break;
        case arr[2]:
          percent = 15;
          break;
        case arr[3]:
          percent = 25;
          break;
        case arr[4]:
          percent = 50;
          break;
        case arr[5]:
            percent = arr[5].value.trim();
      }
    });
    arr[i].addEventListener(`blur`, (e) => {
      arr[i].classList.remove(`tip-active`);
    });
  }
}

function delErrorBorder ( item ) {
    item.classList.remove(`error-border`);
}

function checkRemainder ( number ) {
  if ( number % 1 !== 0 ) return Number( number.toFixed( 2 ) );
  return number;
}

async function blur () {
    const moneyErrorMessageElement = document.getElementById(`money-error`);
    const peopleErrorMessageElement = document.getElementById(`people-error`);
    const inputs = [ money = document.getElementById(`bill-input`), people = document.getElementById(`people`) ];
    
    inputs.forEach( ( input ) => { 
        input.addEventListener( `focus`, (e) => {
            delErrorBorder( input );
            if ( input === inputs[0] ) moneyErrorMessageElement.textContent = ``;
            if ( input === inputs[1] ) peopleErrorMessageElement.textContent = ``;
        })
    })
}

function clearValues () {
  let values = [
    document.getElementById(`bill-input`),
    document.getElementById(`people`),
    document.getElementById(`tip-result`),
    document.getElementById(`total-result`),
    document.getElementById(`custom-tip`),
  ];

  values.forEach ( (value) => {
    value.value = ``;
    value.textContent = `$0.00`;
    value.value.trim();
  })
}

resetButtonElement.addEventListener(`click`, clearValues);

inputEventForCustom();
disableBtn();
blur();
tipRecolor(tipButtonsElements);

function validateMoney( money ) {
    const moneyErrorMessageElement = document.getElementById(`money-error`);
    const moneyInput = document.getElementById(`bill-input`);
        if ( !money ) {
          moneyInput.value = ``;
          moneyInput.classList.add(`error-border`);
          moneyErrorMessageElement.style.opacity = 1;
          return `Enter the amount`;
        } else if (money < 0) {
          moneyInput.value = ``; 
          moneyInput.classList.add(`error-border`);
          moneyErrorMessageElement.style.opacity = 1;
          return `Enter the correct amount`;
        } 
        if ( Number ( money ) === 0 ) {
          moneyInput.value = ``;
          moneyInput.classList.add(`error-border`);
          moneyErrorMessageElement.style.opacity = 1;
          return `Cant be zero`
        }
}

function validatePeople( people ) {
    const peopleInput = document.getElementById(`people`);
    const peopleErrorMessageElement = document.getElementById(`people-error`);
        if ( !people ) {
          peopleInput.value = ``;
          peopleInput.classList.add(`error-border`);
          peopleErrorMessageElement.style.opacity = 1;
          return `Enter the number of people`;
        }
        else if ( people < 0) {
          peopleInput.value = ``;
          peopleInput.classList.add(`error-border`);
          peopleErrorMessageElement.style.opacity = 1;
          return `Enter the correct number of people`;
        } 
        else if ( Number ( people ) === 0 ) {
          peopleInput.value = ``;
          peopleInput.classList.add(`error-border`);
          peopleErrorMessageElement.style.opacity = 1;
          return `Cant be zero`;
        }
}

const form = document.querySelector(`.calc`);

function showResult () {
    const moneyErrorMessageElement = document.getElementById(`money-error`);
    const peopleErrorMessageElement = document.getElementById(`people-error`);
    const tipAmountElement = document.getElementById(`tip-result`);
    const totalAmuontElement = document.getElementById(`total-result`);

    let result = `0`;
    let percentFromAmount = `0`;

    const formDataEntries = new FormData ( form ).entries ();
    const { money, people } = Object.fromEntries ( formDataEntries );

    const moneyErrorMessage = validateMoney ( money );
    const peopleErrorMessage = validatePeople ( people );

    moneyErrorMessageElement.textContent = moneyErrorMessage;
    peopleErrorMessageElement.textContent = peopleErrorMessage;

    percent = validateCustomPrecent( percent, customPercentElement );

    if ( !moneyErrorMessage && !peopleErrorMessage ) {
        result = money * (percent / 100);
        percentFromAmount = result / people;
    }

    tipAmountElement.textContent = `$${ checkRemainder ( percentFromAmount ) }`;
    totalAmuontElement.textContent = `$${ checkRemainder ( result ) }`;
}

customPercentElement.addEventListener(`blur`, (e) => {
  form.requestSubmit();
})

form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    showResult();
});