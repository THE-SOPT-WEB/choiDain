import pic1 from "./assets/김규민.jpeg";
import pic2 from "./assets/전희선.jpeg";
import pic3 from "./assets/서혜은.jpg";
import pic4 from "./assets/황주희.jpeg";
import pic5 from "./assets/백지연.png";

const $ = (selector) => document.querySelector(selector); // 뒤에 사용할 때 $로 사용 가능

let currentStep = 0;

const quizList = [
  {
    src: pic1,
    answer: "김규민",
  },
  {
    src: pic2,
    answer: "전희선",
  },
  {
    src: pic3,
    answer: "서혜은",
  },
  {
    src: pic4,
    answer: "황주희",
  },
  {
    src: pic5,
    answer: "백지연",
  },
];

function initGame({score, answer, image}) {
  currentStep = 0;
  score.innerText = 0;

  image.src = quizList[currentStep].src;
}

function showModal(modalContents, keepOpen) {
  const modal = $('.modal');
  const modalBody = $('p.modal__body');
  modalBody.innerHTML = modalContents;
  modal.classList.remove('hide');
  if (keepOpen) return;
  setTimeout(() => {
    modal.classList.add('hide');
  }, 1500);
}

function goNextStep(score, image) {
  /*
    점수 올리기
    이미지 바꿔주기
  */
  currentStep++; // 다음 이미지를 띄우기 위해 증가

  if (currentStep === quizList.length) {
    // 게임이 끝난 상태
    showModal(`
    <a href="/">메인화면으로</a>
    `, true);
    return;
  }

  score.innerText = +score.innerText + 1;
  image.src = quizList[currentStep].src;
}

function attachEvent({ score, answer, image }) {
  answer.addEventListener('click', (e) => {
    if (e.target instanceof HTMLLIElement) {
      const currentAnswer = e.target.innerText;
      const realAnswer = quizList[currentStep].answer;
      if (currentAnswer === realAnswer) {
        // 정답
        goNextStep(score, image);
      } else {
        // 오답
        showModal(`땡땡!! 틀렸어!! 난 ${currentAnswer}(이)가 아니야!! 🤬`);
      }
    }
    // console.log(e.target.closest('.answer__list > li'));
  });
}

function gameManager(gameInfo) {
  initGame(gameInfo);
  attachEvent(gameInfo);
}

window.onload = () => {
  gameManager({
    score: $('.scoreBoard__score'),
    answer: $('ul.answer__list'),
    image: $('.imageBoard > img'),
  });
}
