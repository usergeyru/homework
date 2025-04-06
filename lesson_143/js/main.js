// ========================Бургер меню=========================
(function () {

  document.addEventListener('click', burgerInit)

  function burgerInit(event) {
    const target = event.target
    const burgerIcon = target.closest('.burger-icon')
    const burgerNavLink = target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else document.body.classList.remove('body--opened-menu')
  }
})();

// ========================Модальное окно=======================
(function () {
  const btnOpen = document.querySelector('.about__badge-button')
  const modal = document.querySelector('.modal')
  const closeBtn = document.querySelector('.modal__close-btn')

  if (!btnOpen || !modal || !closeBtn) return

  function closeModal() {
    document.body.classList.remove('body--modal-opened')
  }

  // Кнопка открытия модального окна
  btnOpen.addEventListener('click', function (event) {
    event.preventDefault()
    document.body.classList.add('body--modal-opened')
  })

  // Кнопка закрытия модального окна
  closeBtn.addEventListener('click', function (event) {
    event.preventDefault()
    closeModal();
  })

  // Закрытие модального окна на затемненную область
  document.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  })

  // Закрытие модального окна на клавишу Escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.body.classList.contains('body--modal-opened')) {
      closeModal();
    }
  });
})();

// ==========================TAB CONTROLS=============================
(function () {

  const tabControls = document.querySelector('.tab__controls');

  tabControls.addEventListener('click', toggleTab);

  function toggleTab(event) {
  const tabControl = event.target.closest('.tab__controls-link');

  if (!tabControl) return
  event.preventDefault()
  if (tabControl.classList.contains('tab__controls-link--active')) return

  const tabContentID = tabControl.getAttribute('href');
  const tabContent = document.querySelector(tabContentID);
  const activeControl = document.querySelector('.tab__controls-link--active');
  const activeContent = document.querySelector('.tab-content--show');

  if(tabControl) {
    activeControl.classList.remove('tab__controls-link--active');
  }

  if(tabControl) {
    activeContent.classList.remove('tab-content--show');
  }

  tabControl.classList.add('tab__controls-link--active');
  tabContent.classList.add('tab-content--show'); 
  }
})();
// ==================ACCORDION===========================
(function() {
  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {

      const accordionList = e.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__control');
      
      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling; 

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      } 
      accordionItem.classList.toggle('accordion-list__item--opened');

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    })
  })
})();





