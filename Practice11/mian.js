const workTimeElement = document.querySelector(`.cart-work__main__footer__work #work-time`);
const playTimeElement = document.querySelector(`.cart-play__main__footer__play #play-time`);
const studyTimeElement = document.querySelector(`.cart-study__main__footer__study #study-time`);
const exerciseTimeElement = document.querySelector(`.cart-exercise__main__footer__exercise #exercise-time`);
const socialTimeElement = document.querySelector(`.cart-social__main__footer__social #social-time`);
const selfCareTimeElement = document.querySelector(`.cart-self-care__main__footer__self-care #self-care-time`);
const userNameElement = document.querySelector(`.user-info__header__text-div #user-name`);

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

document.addEventListener('click', async (e) => {

    if (e.target === dailyElement) {
        e.target.classList.add(`categorie-active`);
        weeklyElement.classList.remove(`categorie-active`);
        monthlyElement.classList.remove(`categorie-active`);
        
        await transitionText();

        let todos = await fetch(`data.json`);
        let response = await todos.json();

        let workTime = response[0].timeframes.daily.current;
        let playTime = response[1].timeframes.daily.current;
        let studyTime = response[2].timeframes.daily.current;
        let exerciceTime = response[3].timeframes.daily.current;
        let socialTime = response[4].timeframes.daily.current;
        let selfCareTime = response[5].timeframes.daily.current;

        if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          workTimeElement.classList.add(`rubik-preset-1-mini`);
          workTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          playTimeElement.classList.add(`rubik-preset-1-mini`);
          playTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          studyTimeElement.classList.add(`rubik-preset-1-mini`);
          studyTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          exerciseTimeElement.classList.add(`rubik-preset-1-mini`);
          exerciseTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          socialTimeElement.classList.add(`rubik-preset-1-mini`);
          socialTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          selfCareTimeElement.classList.add(`rubik-preset-1-mini`);
          selfCareTimeElement.classList.remove(`rubik-preset-1`);
        }

        workTimeElement.textContent = `${workTime} hrs`;
        playTimeElement.textContent = `${playTime} hrs`;
        studyTimeElement.textContent = `${studyTime} hrs`;
        exerciseTimeElement.textContent = `${exerciceTime} hrs`;
        socialTimeElement.textContent = `${socialTime} hrs`;
        selfCareTimeElement.textContent = `${selfCareTime} hrs`;

        let workLastActivity = response[0].timeframes.daily.previous;
        let playLastActivity = response[1].timeframes.daily.previous;
        let studyLastActivity = response[2].timeframes.daily.previous;
        let exerciseLastActivity = response[3].timeframes.daily.previous;
        let socialLastActivity = response[4].timeframes.daily.previous;
        let selfCareLastActivity = response[5].timeframes.daily.previous;

        const workLastActivityElement = document.getElementById(`work-last-activity`);
        const playLastActivityElement = document.getElementById(`play-last-activity`);
        const studyLastActivityElement = document.getElementById(`study-last-activity`);
        const exerciseLastActivityElement = document.getElementById(`exercise-last-activity`);
        const socialLastActivityElement = document.getElementById(`social-last-activity`);
        const selfCareLastActivityElement = document.getElementById(`self-care-last-activity`);

        workLastActivityElement.textContent = `Yesterday - ${workLastActivity}hrs`;
        playLastActivityElement.textContent = `Yesterday - ${playLastActivity}hrs`;
        studyLastActivityElement.textContent = `Yesterday - ${studyLastActivity}hrs`;
        exerciseLastActivityElement.textContent = `Yesterday - ${exerciseLastActivity}hrs`;
        socialLastActivityElement.textContent = `Yesterday - ${socialLastActivity}hrs`;
        selfCareLastActivityElement.textContent = `Yesterday - ${selfCareLastActivity}hrs`;
    }else if(e.target === weeklyElement) {
        e.target.classList.add(`categorie-active`);
        dailyElement.classList.remove(`categorie-active`);
        monthlyElement.classList.remove(`categorie-active`);

        await transitionText();

        let todos = await fetch(`data.json`);
        let response = await todos.json();

        let workTime = response[0].timeframes.weekly.current;
        let playTime = response[1].timeframes.weekly.current;
        let studyTime = response[2].timeframes.weekly.current;
        let exerciseTime = response[3].timeframes.weekly.current;
        let socialTime = response[4].timeframes.weekly.current;
        let selfCareTime = response[5].timeframes.weekly.current;

        if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          workTimeElement.classList.add(`rubik-preset-1-mini`);
          workTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          playTimeElement.classList.add(`rubik-preset-1-mini`);
          playTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          studyTimeElement.classList.add(`rubik-preset-1-mini`);
          studyTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          exerciseTimeElement.classList.add(`rubik-preset-1-mini`);
          exerciseTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          socialTimeElement.classList.add(`rubik-preset-1-mini`);
          socialTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          selfCareTimeElement.classList.add(`rubik-preset-1-mini`);
          selfCareTimeElement.classList.remove(`rubik-preset-1`);
        }

        workTimeElement.textContent = `${workTime}hrs`;
        playTimeElement.textContent = `${playTime}hrs`;
        studyTimeElement.textContent = `${studyTime}hrs`;
        exerciseTimeElement.textContent = `${exerciseTime}hrs`;
        socialTimeElement.textContent = `${socialTime}hrs`;
        selfCareTimeElement.textContent = `${selfCareTime}hrs`;

        let workLastActivity = response[0].timeframes.weekly.previous;
        let playyLastActivity = response[1].timeframes.weekly.previous;
        let studyLastActivity = response[2].timeframes.weekly.previous;
        let exerciseLastActivity = response[3].timeframes.weekly.previous;
        let socialLastActivity = response[4].timeframes.weekly.previous;
        let selfCareLastActivity = response[5].timeframes.weekly.previous;

        const workLastActivityElement = document.getElementById(`work-last-activity`);
        const playLastActivityElement = document.getElementById(`play-last-activity`);
        const studyLastActivityElement = document.getElementById(`study-last-activity`);
        const exerciseLastActivityElement = document.getElementById(`exercise-last-activity`);
        const socialLastActivityElement = document.getElementById(`social-last-activity`);
        const selfCareLastActivityElement = document.getElementById(`self-care-last-activity`);

        workLastActivityElement.textContent = `Last Week - ${workLastActivity}hrs`;
        playLastActivityElement.textContent = `Last Week - ${playyLastActivity}hrs`;
        studyLastActivityElement.textContent = `Last Week - ${studyLastActivity}hrs`;
        exerciseLastActivityElement.textContent = `Last Week - ${exerciseLastActivity}hrs`;
        socialLastActivityElement.textContent = `Last Week - ${socialLastActivity}hrs`;
        selfCareLastActivityElement.textContent = `Last Week - ${selfCareLastActivity}hrs`;
    }else if (e.target === monthlyElement) {
        e.target.classList.add(`categorie-active`);
        dailyElement.classList.remove(`categorie-active`);
        weeklyElement.classList.remove(`categorie-active`);

        await transitionText();

        let todos = await fetch(`data.json`);
        let response = await todos.json();

        let workTime = response[0].timeframes.monthly.current;
        let playTime = response[1].timeframes.monthly.current;
        let studyTime = response[2].timeframes.monthly.current;
        let exerciseTime = response[3].timeframes.monthly.current;
        let socialTime = response[4].timeframes.monthly.current;
        let selfCareTime = response[5].timeframes.monthly.current;

        if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          workTimeElement.classList.add(`rubik-preset-1-mini`);
          workTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          playTimeElement.classList.add(`rubik-preset-1-mini`);
          playTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          studyTimeElement.classList.add(`rubik-preset-1-mini`);
          studyTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          exerciseTimeElement.classList.add(`rubik-preset-1-mini`);
          exerciseTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          socialTimeElement.classList.add(`rubik-preset-1-mini`);
          socialTimeElement.classList.remove(`rubik-preset-1`);
        } else if ( workTime > 99 || (window.innerWidth <= 1200 && window.innerWidth >= 601) ) {
          selfCareTimeElement.classList.add(`rubik-preset-1-mini`);
          selfCareTimeElement.classList.remove(`rubik-preset-1`);
        }

        

        workTimeElement.textContent = `${workTime} hrs`;
        playTimeElement.textContent = `${playTime} hrs`;
        studyTimeElement.textContent = `${studyTime} hrs`;
        exerciseTimeElement.textContent = `${exerciseTime} hrs`;
        socialTimeElement.textContent = `${socialTime} hrs`;
        selfCareTimeElement.textContent = `${selfCareTime} hrs`;

        let workLastActivity = response[0].timeframes.monthly.previous;
        let playyLastActivity = response[1].timeframes.monthly.previous;
        let studyLastActivity = response[2].timeframes.monthly.previous;
        let exerciseLastActivity = response[3].timeframes.monthly.previous;
        let socialLastActivity = response[4].timeframes.monthly.previous;
        let selfCareLastActivity = response[5].timeframes.monthly.previous;

        const workLastActivityElement = document.getElementById(`work-last-activity`);
        const playLastActivityElement = document.getElementById(`play-last-activity`);
        const studyLastActivityElement = document.getElementById(`study-last-activity`);
        const exerciseLastActivityElement = document.getElementById(`exercise-last-activity`);
        const socialLastActivityElement = document.getElementById(`social-last-activity`);
        const selfCareLastActivityElement = document.getElementById(`self-care-last-activity`);

        workLastActivityElement.textContent = `Last Month - ${workLastActivity}hrs`;
        playLastActivityElement.textContent = `Last Month - ${playyLastActivity}hrs`;
        studyLastActivityElement.textContent = `Last Month - ${studyLastActivity}hrs`;
        exerciseLastActivityElement.textContent = `Last Month - ${exerciseLastActivity}hrs`;
        socialLastActivityElement.textContent = `Last Month - ${socialLastActivity}hrs`;
        selfCareLastActivityElement.textContent = `Last Month - ${selfCareLastActivity}hrs`;
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
