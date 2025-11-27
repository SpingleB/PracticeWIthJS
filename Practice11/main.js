const timeElementsArr  =  [
workTimeElement = document.querySelector(`.cart-work__main__footer__work #work-time`),
playTimeElement = document.querySelector(`.cart-play__main__footer__play #play-time`),
studyTimeElement = document.querySelector(`.cart-study__main__footer__study #study-time`),
exerciseTimeElement = document.querySelector(`.cart-exercise__main__footer__exercise #exercise-time`),
socialTimeElement = document.querySelector(`.cart-social__main__footer__social #social-time`),
selfCareTimeElement = document.querySelector(`.cart-self-care__main__footer__self-care #self-care-time`),
userNameElement = document.querySelector(`.user-info__header__text-div #user-name`)
]

const dailyElement = document.getElementById(`daily`);
const weeklyElement = document.getElementById(`weekly`);
const monthlyElement = document.getElementById(`monthly`);

function updateTextPresets() {
  if (window.innerWidth >= 601) {
        workTimeElement.classList.remove(`rubik-preset-3`);
        workTimeElement.classList.add(`rubik-preset-1`);
    playTimeElement.classList.remove(`rubik-preset-3`);
    playTimeElement.classList.add(`rubik-preset-1`);
        studyTimeElement.classList.remove(`rubik-preset-3`);
        studyTimeElement.classList.add(`rubik-preset-1`);
    exerciseTimeElement.classList.remove(`rubik-preset-3`);
    exerciseTimeElement.classList.add(`rubik-preset-1`);
        socialTimeElement.classList.remove(`rubik-preset-3`);
        socialTimeElement.classList.add(`rubik-preset-1`);
    selfCareTimeElement.classList.remove(`rubik-preset-3`);
    selfCareTimeElement.classList.add(`rubik-preset-1`);
        userNameElement.classList.remove(`rubik-preset-4`);
        userNameElement.classList.add(`rubik-preset-2`);
  } else {
        workTimeElement.classList.remove(`rubik-preset-1`);
        workTimeElement.classList.add(`rubik-preset-3`);
    playTimeElement.classList.remove(`rubik-preset-1`);
    playTimeElement.classList.add(`rubik-preset-3`);
        studyTimeElement.classList.remove(`rubik-preset-1`);
        studyTimeElement.classList.add(`rubik-preset-3`);
    exerciseTimeElement.classList.remove(`rubik-preset-1`);
    exerciseTimeElement.classList.add(`rubik-preset-3`);
        socialTimeElement.classList.remove(`rubik-preset-1`);
        socialTimeElement.classList.add(`rubik-preset-3`);
    selfCareTimeElement.classList.remove(`rubik-preset-1`);
    selfCareTimeElement.classList.add(`rubik-preset-3`);
        userNameElement.classList.remove(`rubik-preset-2`);
        userNameElement.classList.add(`rubik-preset-4`);
  }
}

if (workTimeElement && playTimeElement && studyTimeElement && exerciseTimeElement && socialTimeElement && selfCareTimeElement && userNameElement) {
  updateTextPresets();
  window.addEventListener("resize", updateTextPresets);
} else {
  console.log(`Error related to time string styles`);
}

function updateMargins () {
    if (window.innerWidth >= 1200) {
        dailyElement.classList.remove(`m-1`);
        weeklyElement.classList.remove(`m-1`);
        monthlyElement.classList.remove(`m-1`);
    } else {
        dailyElement.classList.add(`m-1`);
        weeklyElement.classList.add(`m-1`);
        monthlyElement.classList.add(`m-1`);
    }
}

if (dailyElement && weeklyElement && monthlyElement) {
  updateMargins();
  window.addEventListener("resize", updateMargins);
} else {
  console.log(`Error related to time string styles`);
}

var hasErrorWindow = false;

document.addEventListener('click', async (e) => {

    if (e.target === dailyElement) {
        e.target.classList.add(`categorie-active`);
        weeklyElement.classList.remove(`categorie-active`);
        monthlyElement.classList.remove(`categorie-active`);
        
        await transitionText();

        try {

        let todos = await fetch(`data.json`);
        let response = await todos.json();

        let timesArr = [
          workTime = null,
          playTime = null,
          studyTime = null,
          exerciceTime = null,
          socialTime = null,
          selfCareTime = null,
        ];
        
        for ( let i = 0; i < 6; i++ ) {
          timesArr[i] = response[i].timeframes.daily.current;
        }

        for ( let i = 0; i < 6; i++ ) {
          timeElementsArr[i].textContent = `${timesArr[i]} hrs`;
        }

        let lastActivitiesArr = [
          workLastActivity = null,
          playLastActivity = null,
          studyLastActivity = null,
          exerciseLastActivity = null,
          socialLastActivity = null,
          selfCareLastActivity = null,
        ];

        for (let i = 0; i < 6; i++) {
          lastActivitiesArr[i] = response[i].timeframes.daily.previous;
        }

        let lastActivityArrElements = [
          workLastActivityElement = document.getElementById(`work-last-activity`),
          playLastActivityElement = document.getElementById(`play-last-activity`),
          studyLastActivityElement = document.getElementById(`study-last-activity`),
          exerciseLastActivityElement = document.getElementById(`exercise-last-activity`),
          socialLastActivityElement = document.getElementById(`social-last-activity`),
          selfCareLastActivityElement = document.getElementById(`self-care-last-activity`),
        ];

        for ( let i = 0; i < 6; i++ ) {
          lastActivityArrElements[i].textContent = `Yesterday - ${lastActivitiesArr[i]}hrs`;
        }

          const errorWindowElement =
            document.querySelector(`.error-modal-window`);

          if (hasErrorWindow && errorWindowElement) {
            errorWindowElement.classList.remove(`error-modal-window-active`);
            setTimeout(() => {
              errorWindowElement.classList.remove(`error-modal-window`);
            }, 300);
            setTimeout(() => {
              errorWindowElement.remove();
            }, 100);
            hasErrorWindow = false;
          }  

        } catch (error){
           const errorWindowElement = document.createElement(`div`);
          const bodyElement = document.querySelector(`body`);

          if ( hasErrorWindow ) {
                errorWindowElement.classList.add("error-modal-window-repeat-active");
            setTimeout(() => {
                errorWindowElement.classList.add("error-modal-window-repeat-hidden");
            setTimeout(() => {
                errorWindowElement.classList.remove("error-modal-window-repeat-active");
                errorWindowElement.classList.remove("error-modal-window-repeat-hidden");
              }, 300);
            }, 300);
          } else {
            errorWindowElement.classList.add(`error-modal-window`);
            setTimeout(() => {
              errorWindowElement.classList.add(`error-modal-window-active`);
            }, 300);
            errorWindowElement.textContent = `Error : ${error}`;
            bodyElement.append(errorWindowElement);
            hasErrorWindow = true;
          }
        }

    }else if(e.target === weeklyElement) {
        e.target.classList.add(`categorie-active`);
        dailyElement.classList.remove(`categorie-active`);
        monthlyElement.classList.remove(`categorie-active`);

        await transitionText();

        try {

        let todos = await fetch(`data.json`);
        let response = await todos.json();
        
        let timesArr = [
          workTime = null,
          playTime = null,
          studyTime = null,
          exerciseTime = null,
          socialTime = null,
          selfCareTime = null,
        ];

        for (let i = 0; i < 6; i++) {
          timesArr[i] = response[i].timeframes.weekly.current;
        }
        
        if ( timesArr[0] > 99 && (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          workTimeElement.classList.add(`rubik-preset-1-mini`);
          workTimeElement.classList.remove(`rubik-preset-1`);
        } else {
          workTimeElement.classList.remove(`rubik-preset-1-mini`);
          workTimeElement.classList.add(`rubik-preset-1`);
        }
        if ( timesArr[1] > 99 && (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          playTimeElement.classList.add(`rubik-preset-1-mini`);
          playTimeElement.classList.remove(`rubik-preset-1`);
        } else {
          playTimeElement.classList.remove(`rubik-preset-1-mini`);
          playTimeElement.classList.add(`rubik-preset-1`);
        }
        if ( timesArr[2] > 99 && (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          studyTimeElement.classList.add(`rubik-preset-1-mini`);
          studyTimeElement.classList.remove(`rubik-preset-1`);
        } else {
          studyTimeElement.classList.remove(`rubik-preset-1-mini`);
          studyTimeElement.classList.add(`rubik-preset-1`);
        }
        if ( timesArr[3] > 99 && (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          exerciseTimeElement.classList.add(`rubik-preset-1-mini`);
          exerciseTimeElement.classList.remove(`rubik-preset-1`);
        } else {
          exerciseTimeElement.classList.remove(`rubik-preset-1-mini`);
          exerciseTimeElement.classList.add(`rubik-preset-1`);
        }
        if ( timesArr[4] > 99 && (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          socialTimeElement.classList.add(`rubik-preset-1-mini`);
          socialTimeElement.classList.remove(`rubik-preset-1`);
        } else{
          socialTimeElement.classList.remove(`rubik-preset-1-mini`);
          socialTimeElement.classList.add(`rubik-preset-1`);
        }
          if ( timesArr[5] > 99 && (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          selfCareTimeElement.classList.add(`rubik-preset-1-mini`);
          selfCareTimeElement.classList.remove(`rubik-preset-1`);
        } else {
          selfCareTimeElement.classList.remove(`rubik-preset-1-mini`);
          selfCareTimeElement.classList.add(`rubik-preset-1`);
        }

        for (let i = 0; i < 6; i++) {
          timeElementsArr[i].textContent = `${timesArr[i]} hrs`;
        }

        let lastActivitiesArr = [
        workLastActivity = null,
        playyLastActivity = null,
        studyLastActivity = null,
        exerciseLastActivity = null,
        socialLastActivity = null,
        selfCareLastActivity = null,
        ]

        for(let i = 0; i < 6; i++) {
          lastActivitiesArr[i] = response[i].timeframes.weekly.previous;
        }
        
        let lastActivitiesElementsArr = [
        workLastActivityElement = document.getElementById(`work-last-activity`),
        playLastActivityElement = document.getElementById(`play-last-activity`),
        studyLastActivityElement = document.getElementById(`study-last-activity`),
        exerciseLastActivityElement = document.getElementById(`exercise-last-activity`),
        socialLastActivityElement = document.getElementById(`social-last-activity`),
        selfCareLastActivityElement = document.getElementById(`self-care-last-activity`),
        ]

        for (let i = 0; i < 6; i++){
          lastActivitiesElementsArr[i].textContent = `Last Week - ${lastActivitiesArr[i]}hrs`;
        }
        
          const errorWindowElement = document.querySelector(`.error-modal-window`);

          if ( hasErrorWindow && errorWindowElement ) {
            errorWindowElement.classList.remove(`error-modal-window-active`);
            setTimeout(() => {
              errorWindowElement.classList.remove(`error-modal-window`);
            }, 300);
            setTimeout(() => {
              errorWindowElement.remove();
            }, 100);
            hasErrorWindow = false;
          } 

        } catch( error ) {
          const errorWindowElement = document.createElement(`div`);
          const bodyElement = document.querySelector(`body`);

          if ( hasErrorWindow ) {
                errorWindowElement.classList.add("error-modal-window-repeat-active");
            setTimeout(() => {
                errorWindowElement.classList.add("error-modal-window-repeat-hidden");
            setTimeout(() => {
                errorWindowElement.classList.remove("error-modal-window-repeat-active");
                errorWindowElement.classList.remove("error-modal-window-repeat-hidden");
              }, 300);
            }, 300);
          } else {
            errorWindowElement.classList.add(`error-modal-window`);
            setTimeout(() => {
              errorWindowElement.classList.add(`error-modal-window-active`);
            }, 300);
            errorWindowElement.textContent = `Error : ${error}`;
            bodyElement.append(errorWindowElement);
            hasErrorWindow = true;
          }
        }

    }else if (e.target === monthlyElement) {
        e.target.classList.add(`categorie-active`);
        dailyElement.classList.remove(`categorie-active`);
        weeklyElement.classList.remove(`categorie-active`);

        await transitionText();

        try{
        let todos = await fetch(`data.json`);
        let response = await todos.json();

        let timesArr = [
          workTime = null,
          playTime = null,
          studyTime = null,
          exerciseTime = null,
          socialTime = null,
          selfCareTime = null,
        ];

        for( let i = 0; i < 6; i++) {
          timesArr[i] = response[i].timeframes.monthly.current;
        }

        if ( timesArr[0] > 99 && (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          workTimeElement.classList.add(`rubik-preset-1-mini`);
          workTimeElement.classList.remove(`rubik-preset-1`);
        } else {
          workTimeElement.classList.remove(`rubik-preset-1-mini`);
          workTimeElement.classList.add(`rubik-preset-1`);
        }
        if ( timesArr[1] > 99 && (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          playTimeElement.classList.add(`rubik-preset-1-mini`);
          playTimeElement.classList.remove(`rubik-preset-1`);
        } else {
          playTimeElement.classList.remove(`rubik-preset-1-mini`);
          playTimeElement.classList.add(`rubik-preset-1`);
        }
        if ( timesArr[2] > 99 && (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          studyTimeElement.classList.add(`rubik-preset-1-mini`);
          studyTimeElement.classList.remove(`rubik-preset-1`);
        } else {
          studyTimeElement.classList.remove(`rubik-preset-1-mini`);
          studyTimeElement.classList.add(`rubik-preset-1`);
        }
        if ( timesArr[3] > 99 && (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          exerciseTimeElement.classList.add(`rubik-preset-1-mini`);
          exerciseTimeElement.classList.remove(`rubik-preset-1`);
        } else {
          exerciseTimeElement.classList.remove(`rubik-preset-1-mini`);
          exerciseTimeElement.classList.add(`rubik-preset-1`);
        }
        if ( timesArr[4] > 99 && (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          socialTimeElement.classList.add(`rubik-preset-1-mini`);
          socialTimeElement.classList.remove(`rubik-preset-1`);
        } else{
          socialTimeElement.classList.remove(`rubik-preset-1-mini`);
          socialTimeElement.classList.add(`rubik-preset-1`);
        }
          if ( timesArr[5] > 99 && (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          selfCareTimeElement.classList.add(`rubik-preset-1-mini`);
          selfCareTimeElement.classList.remove(`rubik-preset-1`);
        } else {
          selfCareTimeElement.classList.remove(`rubik-preset-1-mini`);
          selfCareTimeElement.classList.add(`rubik-preset-1`);
        }

        for(let i = 0; i < 6; i++) {
          timeElementsArr[i].textContent = `${timesArr[i]} hrs`;
        }

        let lastActivitiesArr = [
          workLastActivity = null,
          playyLastActivity = null,
          studyLastActivity = null,
          exerciseLastActivity = null,
          socialLastActivity = null,
          selfCareLastActivity = null,
        ];
        
        for(let i = 0; i < 6; i++) {
          lastActivitiesArr[i] = response[i].timeframes.monthly.previous;
        }

        let lastActivityArrElements = [
        workLastActivityElement = document.getElementById(`work-last-activity`),
        playLastActivityElement = document.getElementById(`play-last-activity`),
        studyLastActivityElement = document.getElementById(`study-last-activity`),
        exerciseLastActivityElement = document.getElementById(`exercise-last-activity`),
        socialLastActivityElement = document.getElementById(`social-last-activity`),
        selfCareLastActivityElement = document.getElementById(`self-care-last-activity`),
        ];

        for (let i = 0; i < 6; i++) {
          lastActivityArrElements[i].textContent = `Last Month - ${lastActivitiesArr[i]}hrs`;
        }

        const errorWindowElement =
          document.querySelector(`.error-modal-window`);

        if (hasErrorWindow && errorWindowElement) {
          errorWindowElement.classList.remove(`error-modal-window-active`);
          setTimeout(() => {
            errorWindowElement.classList.remove(`error-modal-window`);
          }, 300);
          setTimeout(() => {
            errorWindowElement.remove();
          }, 100);
          hasErrorWindow = false;
        } 
        
        } catch ( error ) {
          const errorWindowElement = document.createElement(`div`);
          const bodyElement = document.querySelector(`body`);

          if ( hasErrorWindow ) {
                errorWindowElement.classList.add("error-modal-window-repeat-active");
            setTimeout(() => {
                errorWindowElement.classList.add("error-modal-window-repeat-hidden");
            setTimeout(() => {
                errorWindowElement.classList.remove("error-modal-window-repeat-active");
                errorWindowElement.classList.remove("error-modal-window-repeat-hidden");
              }, 300);
            }, 300);
          } else {
            errorWindowElement.classList.add(`error-modal-window`);
            setTimeout(() => {
              errorWindowElement.classList.add(`error-modal-window-active`);
            }, 300);
            errorWindowElement.textContent = `Error : ${error}`;
            bodyElement.append(errorWindowElement);
            hasErrorWindow = true;
          }
        }
    }
})

async function transitionText () {
    let timesArr = [
    workTimeElement,
    playTimeElement,
    studyTimeElement,
    exerciseTimeElement,
    socialTimeElement,
    selfCareTimeElement,
    ];

    let lastActivitiesArr = [
    workLastActivityElement = document.getElementById(`work-last-activity`),
    playLastActivityElement = document.getElementById(`play-last-activity`),
    studyLastActivityElement = document.getElementById(`study-last-activity`),
    exerciseLastActivityElement = document.getElementById(`exercise-last-activity`),
    socialLastActivityElement = document.getElementById(`social-last-activity`),
    selfCareLastActivityElement = document.getElementById(`self-care-last-activity`),
    ];

    for(time of timesArr) {
        time.classList.add(`transition-text`);
    }

    for(lastActivity of lastActivitiesArr) {
        lastActivity.classList.add(`transition-text`);
    }

    setTimeout(() => {
        for(time of timesArr){
            time.classList.remove(`transition-text`);
        }

        for(lastActivity of lastActivitiesArr) {
            lastActivity.classList.remove(`transition-text`);
        }
    },100)

}
