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
  };

// ========================Модальное окно=======================

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


// ==========================TAB CONTROLS=============================

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
  };

// ==================ACCORDION===========================

const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

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
        });
    });

// =======================SLIDER=====================================

new Swiper('.gallery__slider', {

  spaceBetween: 15,
  slidesPerView: 1.5,

  pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
  },

  navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
  },
  breakpoints: {
    451: {
      slidesPerView: 2,         
    },
    601: {
      spaceBetween: 32,
      slidesPerView: 3,     
    },
    801: {
      spaceBetween: 32,          
    },
    1101: {
      slidesPerView: 4,
      spaceBetween: 32,    
    },
  }
});
// ==========СЛАЙДЕР ОТЗЫВЫ===================
new Swiper('.testimonials__slider', {

  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,

  navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
  }, 
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    901: {
      slidesPerView: 1.5,
    },

    1201: {
      slidesPerView: 2.1,         
    },
    
  },
});

})();



