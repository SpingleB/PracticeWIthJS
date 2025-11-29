const tipButtonsElements = document.querySelectorAll(`.tip`);
var percent = null;

function tipColor (arr) {
    for ( let i = 0; i < arr.length; i++) {
        arr[i].classList.remove(`tip-active`);
    }
}

async function tipRecolor (arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i].addEventListener(`click`, (e) => {
            tipColor(tipButtonsElements);
            arr[i].classList.add(`tip-active`);

            switch (arr[i]){
                case arr[0]:
                    percent = 5;
                    break;
                case arr[1]:
                    percent = 10;
                    break;
                case arr[2] :
                    percent = 15;
                    break;
                case arr[3]:
                    percent = 25;
                    break;
                case arr[4]:
                    percent = 50;
                    break;
                case arr[5]:
                    percent = arr[5].value;
                break;
            }

            console.log(percent);
        })
        arr[i].addEventListener(`blur`, (e) => {
          arr[i].classList.remove(`tip-active`);
        });
    }
}

async function blur () {
    const moneyErrorMessageElement = document.getElementById(`money-error`);
    const peopleErrorMessageElement = document.getElementById(`people-error`);
    const inputs = [ money = document.getElementById(`bill-input`), people = document.getElementById(`people`) ];
    const resetButtonElement = document.getElementById(`reset-btn`);

    if ( inputs[0].value === `` && inputs[1].value === `` ) {
        resetButtonElement.classList.add(`disabled`)
    } else {
        resetButtonElement.classList.remove(`disabled`);
    }

    inputs.forEach( (value) => { 
        value.addEventListener(`focus`, (e) => {
            if ( value === inputs [0] )  moneyErrorMessageElement.textContent = ``;
            if ( value === inputs[1] )  peopleErrorMessageElement.textContent = ``;
        })
        
    })
}

blur();
tipRecolor(tipButtonsElements);


function validateMoney( money ) {
    const moneyInput = document.getElementById(`bill-input`);
        if ( !money ) {
          moneyInput.value = ``;
          return `Enter the amount`;
        } else if (money <= 0) {
          moneyInput.value = ``; 
          return `Enter the correct amount`;
        } 
}

function validatePeople( people ) {
    const peopleInput = document.getElementById(`people`);
    
    if ( !people ){
        peopleInput.value = ``;
        return `Enter the number of people`;
    }
    else if ( people <= 0) {
       peopleInput.value = ``;
       return `Enter the correct number of people`;
    }
}

const form = document.querySelector(`.calc`);

function showResult () {
    const moneyInput = document.getElementById(`bill-input`);
    const peopleInput = document.getElementById(`people`);
    const resetButtonElement = document.getElementById(`reset-btn`);
    const moneyErrorMessageElement = document.getElementById(`money-error`);
    const peopleErrorMessageElement = document.getElementById(`people-error`);
    const tipAmountElement = document.getElementById(`tip-result`);
    const totalAmuontElement = document.getElementById(`total-result`);

    let result = null;
    let percentFromAmount = null;

    const formDataEntries = new FormData ( form ).entries ();
    const { money, people } = Object.fromEntries ( formDataEntries );

    const moneyErrorMessage = validateMoney ( money );
    const peopleErrorMessage = validatePeople ( people );

    moneyErrorMessageElement.textContent = moneyErrorMessage;
    peopleErrorMessageElement.textContent = peopleErrorMessage;

    if ( !moneyErrorMessage && !peopleErrorMessage ) {
        percentFromAmount = money * (percent / 100);
        result = percentFromAmount / people;
    }
}

form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    showResult();
});