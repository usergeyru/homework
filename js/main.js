// бургер меню===============================================
(function () {
  const burger = document.querySelector('.burger-icon');
  const link = document.querySelectorAll('.nav__item-link');

  burger.addEventListener('click', () => {
    if (document.body.classList.contains('body--opened-menu') == true) {
      document.body.classList.remove('body--opened-menu');
    } else {
      document.body.classList.add('body--opened-menu');
    }
  });
  link.forEach(function (item) {
    item.addEventListener('click', function() {
      if (document.body.classList.contains('body--opened-menu') == true) {
        document.body.classList.remove('body--opened-menu');
      } else {
        document.body.classList.add('body--opened-menu');
      }
    });
  });
})();


// выбор языка=================================================
(function () {
  const dropBtn = document.querySelector('.dropbtn');
  const dropDown = document.querySelector('.dropdown-content-link');

  dropBtn.addEventListener('click', () => {
    dropDown.classList.toggle('hidden');
  });
  dropDown.addEventListener('click', function () {
    dropDown.classList.add('hidden');
  });
})();


// таймер обратного отсчета==================================== 

// определяем действующие элементы на странице
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countDown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

// получаем текущий год 
const currentYear = new Date().getFullYear();

// получаем следующий год
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCounter() {
  // получаем текущее время
  const currentTime = new Date();
  // получаем сколько осталось времени до начала следующего года
  const diff = nextYear - currentTime;
  // переводим в дни
  // const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  // переводим в часы
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  // переводим в минуты
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  // переводим в секунды 
  const secondsLeft = Math.floor(diff / 1000) % 60;
  // записываем данные в элементы на странице
  // часы
  hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  // минуты
  minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  // секунды
  seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

updateCounter();
// запускаем расчет 1 раз в секунду (каждую секунду)
setInterval(updateCounter, 1000);

setTimeout(function () {
  preloader.remove();
  countDown.style.display = 'flex';
}, 1000);

// profit risc===========================================
const btnHight = document.querySelector('#btn-hight');
const btnLow = document.querySelector('#btn-low');
const riskText = document.querySelector('.portfolio__profit-risc');
const percent = document.querySelector('.portfolio__profit-title');
const progressFill = document.querySelector('.progress-bar--fill');
const progressBarSircle = document.querySelector('.progress-bar__sircle');
const arc = document.getElementById('progress-arc');


  setProgress(30);
  progressFill.style.width = '30%';

  btnHight.addEventListener('click', hightRisk);
  btnLow.addEventListener('click', lowRisk);

  function hightRisk() {
    riskText.innerText = 'Высокий риск';
    percent.innerText = 'до 10%'
    progressFill.style.width = '60%';
    progressBarSircle.style.left = '57%';
    setProgress(60);
  };
  function lowRisk() {
    riskText.innerText = 'Низкий риск';
    percent.innerText = 'до 5%'
    progressFill.style.width = '30%';
    progressBarSircle.style.left = '27%';
    setProgress(30);
  };
  function setProgress(percent) {
    const maxOffset = 930;
    const offset = maxOffset - (maxOffset * percent) / 100;
    arc.style.strokeDashoffset = offset;
  };


// accordeon ==========================================
const controls = document.querySelectorAll('.accordeon-list__control');

controls.forEach(control => {
  const content = control.nextElementSibling;

  // Закрываем всё при старте
  content.style.maxHeight = '0px';

  control.addEventListener('click', function () {
    const isOpen = content.style.maxHeight !== '0px';

    // Закрыть, если открыто
    if (isOpen) {
      content.style.maxHeight = '0px';
    } else {
      // Открыть, если закрыто
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});