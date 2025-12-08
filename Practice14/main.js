import { resizePresets } from "./resize.js";
resizePresets();

var defaultInnerHTML = document.querySelector(`body`).innerHTML;

function changeBtn () {
    const btn = document.querySelector(`#btn`);
    btn.classList.toggle(`theme-btn-active`);
}

function changeColorsInTheme () {
    const body = document.querySelector(`body`);
    body.classList.toggle(`theme-dark`);
}

async function replaceSvg(id, svgPath, div, newId) {
    const target = document.getElementById(id);
    if (!target) return;
    const response = await fetch(svgPath);
    const svgText = await response.text();

    const wrapper = document.getElementById(div);
    wrapper.innerHTML = svgText.trim();

    let newElement = wrapper.querySelector("svg");

    if (!newElement) {
        newElement = wrapper.querySelector("img");
    }

    if (!newElement) return; 
    newElement.id = newId;
    target.replaceWith(newElement);
}

document.getElementById(`btn`).addEventListener(`click`, async (e) => {
    const isDark = document.getElementById(`dark-sun`) !== null;
    if ( isDark ) {
        changeBtn();
        await replaceSvg(`dark-sun`, `/assets/images/icon-sun-light.svg`, `div-for-svg-first`, `light-sun`);
        await replaceSvg(`dark-moon`, `/assets/images/icon-moon-light.svg`, `div-for-svg-second`, `light-moon`);
        if (window.innerWidth < 600) {
          await replaceSvg(`picture`, `/assets/images/pattern-background-mobile-dark.svg`, `div-for-main-svg`, `picture`);
        } else if ( window.innerWidth > 600 && window.innerWidth < 900) {
          await replaceSvg(`picture`, `/assets/images/pattern-background-tablet-dark.svg`, `div-for-main-svg`, `picture`);
        } else if ( window.innerWidth > 900 ) {
          await replaceSvg(`picture`, `/assets/images/pattern-background-desktop-dark.svg`, `div-for-main-svg`, `picture`);
        }
        changeColorsInTheme ();
    }else {
        changeBtn();
        await replaceSvg(`light-sun`, `/assets/images/icon-sun-dark.svg`, `div-for-svg-first`, `dark-sun`);
        await replaceSvg(`light-moon`, `/assets/images/icon-moon-dark.svg`, `div-for-svg-second`, `dark-moon`);
        if (window.innerWidth < 600) {
        await replaceSvg(`picture`, `/assets/images/pattern-background-mobile-light.svg`, `div-for-main-svg`, `picture`);
        } else if ( window.innerWidth > 600 && window.innerWidth <= 900) {
          await replaceSvg(`picture`, `/assets/images/pattern-background-tablet-light.svg`, `div-for-main-svg`, `picture`);
        } else if ( window.innerWidth > 900 ) {
          await replaceSvg(`picture`, `/assets/images/pattern-background-desktop-light.svg`, `div-for-main-svg`, `picture`);
        }
        changeColorsInTheme();
    }
})



const categriesArr = document.getElementsByClassName(`categorie`);
for ( let i = 0; i < categriesArr.length; i++) {
    categriesArr[i].addEventListener(`click`, async (e)=> {
        const data = await fetch(`data.json`);
        const response = await data.json();
        var type = null;
        let typeSvg = null;
        let childElement = e.target
        var correctAnswerNumber = 0;

        if ( e.target === categriesArr[0] || categriesArr[0].contains(childElement)) {
            type = response.quizzes[0];
        } else if ( e.target === categriesArr[1] || categriesArr[1].contains(childElement) ) {
            type = response.quizzes[1];
        }  else if ( e.target === categriesArr[2] || categriesArr[2].contains(childElement) ) {
            type = response.quizzes[2];
        }  else if ( e.target === categriesArr[3] || categriesArr[3].contains(childElement) ) {
            type = response.quizzes[3];
        }

        

        function getTypeLogo () {
            const svgDiv = document.querySelector(`.categorie-div__svg-div`);
            const categorieName = document.querySelector(`.categorie-div__h2`);
            categorieName.textContent = type.title;
            svgDiv.innerHTML = `
            <img src="${type.icon}" class="new-svg-in-div" alt="categorie">
            `;

            function chooseBG () {
                let bgColor = null;
                if ( type === response.quizzes[1] ) {
                   bgColor = `css-background`;
                } else if ( type === response.quizzes[3] ) {
                    bgColor = `acessebility-background`;
                } else if ( type === response.quizzes[2] ) {
                    bgColor = `js-background`;
                } else if ( type === response.quizzes[0] ) {
                    bgColor = `html-background`;
                }
                return bgColor;
            }

            svgDiv.classList.add(chooseBG());
            
        }
        getTypeLogo();

        function titleToQuestion() {
          const div = document.querySelector(`.main-text-div`);
          const section = document.querySelector(`.categories`);

          let iter = 0;
          let selectedIndex = null;
          let isAnswerValid = null;
          let questionNumber = 0;
          let numberOfCorrectAnswers = 0;
          let postBgColor = null;
          const nameOfCategorie = type.title;
          const limit = type.questions.length;

          const answerHandlers = []; 

          function renderQuestionContainer() {
            div.innerHTML = `
            <span class="question-count rubik-preset-5-mobile">
                Question ${questionNumber + 1} of ${limit}
            </span>
            <p class="question rubik-preset-3-mobile"></p>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
        `;
            section.innerHTML = `
            <div class="questions">
                ${["A", "B", "C", "D"]
                  .map(
                    (letter, i) => `
                    <div class="answer">
                        <div class="option rubik-preset-4-mobile op"><h2 class="rubik-preset-4-mobile op-title">${letter}</h2></div>
                        <span class="answer-span rubik-preset-4-mobile" id="option-${letter}"></span>
                    </div>
                `
                  )
                  .join("")}
                <button type="button" class="next rubik-preset-4-mobile">Submit Answer</button>
            </div>
        `;
          }

          function showQuestion(index) {
            const questionEl = document.querySelector(".question");
            const count = document.querySelector(`.question-count`);
            const answersArr = document.querySelectorAll(".answer");
            const optionsArr = document.querySelectorAll(".answer-span");

            const question = type.questions[index];

            questionEl.textContent = question.question;
            count.textContent = `Question ${questionNumber + 1} of ${limit}`;

            question.options.forEach((opt, i) => {
              optionsArr[i].textContent = opt;
            });

            answersArr.forEach((a) =>
              a.classList.remove(
                "active-answer",
                "correct-answer",
                "incorrect-answer"
              )
            );

            return { answersArr, optionsArr };
          }

          async function addSvgOfValidity(inner, isCorrect) {
            const path = isCorrect
              ? "/assets/images/icon-correct.svg"
              : "/assets/images/icon-error.svg";
            const data = await fetch(path);
            const svg = await data.text();
            inner.innerHTML += svg;
            inner.querySelector(`svg`).classList.add(`validity-svg`);
            inner.classList.add(
              isCorrect ? `correct-answer` : `incorrect-answer`
            );
          }

          function removeSvgOfValidity(arr) {
            arr.forEach((el) => {
              const svg = el.querySelector(`svg`);
              if (svg) svg.remove();
            });
          }

          function createAnswerHandler(index, ans, answersArr, nextBtn) {
            return function () {
              selectedIndex = index;
              const correctIndex = type.questions[iter].options.findIndex(
                (opt) => opt === type.questions[iter].answer
              );
              answersArr.forEach((a) => a.classList.remove("active-answer"));
              ans.classList.add("active-answer");
              isAnswerValid = selectedIndex === correctIndex;
              nextBtn.disabled = false;
              nextBtn.classList.remove("disabled-btn");
            };
          }

          renderQuestionContainer();
          const { answersArr } = showQuestion(iter);
          const nextBtn = document.querySelector(".next");

          nextBtn.disabled = true;
          nextBtn.classList.add("disabled-btn");


          answersArr.forEach((ans, index) => {
            const handler = createAnswerHandler(
              index,
              ans,
              answersArr,
              nextBtn
            );
            answerHandlers.push(handler);
            ans.addEventListener("click", handler);
          });

          function showProgress () {
            const progressBar = document.querySelector(`.progress`);
            let precent = 0;
            precent = ( questionNumber !== 0 ) ? ( questionNumber  / type.questions.length ) * 100 : 0;
            progressBar.style.width = precent + `%`;
          }

          nextBtn.addEventListener("click", async () => {
            if (nextBtn.textContent === `Submit Answer`) {
              await addSvgOfValidity(answersArr[selectedIndex], isAnswerValid);
              answersArr[selectedIndex].classList.remove("active-answer");
              nextBtn.textContent = `Next Question`;
            } else if (nextBtn.textContent === `Next Question`) {
              removeSvgOfValidity(answersArr);

              answersArr.forEach((ans, index) => {
                ans.removeEventListener("click", answerHandlers[index]);
              });
              answerHandlers.length = 0;

              if (isAnswerValid) numberOfCorrectAnswers++;

              iter++;
              questionNumber++;
              showProgress();
              if (iter >= limit) {
                div.innerHTML = ``;
                section.innerHTML = `<div class="score-div">
                    <div class="type">
                    <div class="categorie-div__svg-div post-div">
                        <img src="${type.icon}" alt="Quiz">
                    </div>
                    <h2 class="rubik-preset-4-mobile categorie-div__h2" id="score-type">${nameOfCategorie}</h2>
                    </div>
                        <h1 class="rubik-preset-1-mobile" id="score">${numberOfCorrectAnswers}</h1>
                        <span id="of" class="rubik-preset-4-mobile">out of ${limit}</span>
                </div>  
                <button type="button" class="next rubik-preset-4-mobile" id="again">Play Again</button>`;

                div.innerHTML = `
                <div class="titles">
                    <h2 class="rubik-preset-2-mobile-light" id="completed">Quiz completed</h2>
                    <h2 class="rubik-preset-2-mobile-medium" id="you-scored">You scored...</h2>
                </div>
                `;
                resizePresets();
                function chooseBG() {
                  let bgColor = null;
                  if (type === response.quizzes[1]) {
                    bgColor = `css-background`;
                  } else if (type === response.quizzes[3]) {
                    bgColor = `acessebility-background`;
                  } else if (type === response.quizzes[2]) {
                    bgColor = `js-background`;
                  } else if (type === response.quizzes[0]) {
                    bgColor = `html-background`;
                  }
                  return bgColor;
                }
                postBgColor = chooseBG();
                document.querySelector(`.post-div`).classList.add(postBgColor);
                const btn = document.querySelector(`#again`);
                btn.addEventListener(`click`, (e) => {
                    location.reload();
                })
                return;
              }

              showQuestion(iter);

              answersArr.forEach((ans, index) => {
                const handler = createAnswerHandler(
                  index,
                  ans,
                  answersArr,
                  nextBtn
                );
                answerHandlers.push(handler);
                ans.addEventListener("click", handler);
              });

              nextBtn.textContent = `Submit Answer`;
              nextBtn.disabled = true;
              nextBtn.classList.add("disabled-btn");
            }
          });
        }
        titleToQuestion();
        resizePresets();
    })
}
