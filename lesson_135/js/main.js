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



