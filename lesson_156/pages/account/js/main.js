(function () {
  const sidebar = document.querySelector('.sidebar');
  const burgerIcon = document.querySelector('.burger-icon');
  const overlay = document.querySelector('.overlay');
  const sidebarText = document.querySelectorAll('.sidebar__text');

  burgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--open');
    sidebarText.forEach(item => {
      item.classList.toggle('sidebar__text--show')
    });
    overlay.classList.toggle('overlay--show');
  });
  
})();

  // document.addEventListener('click', event => {
  //   if (event.target === 'overlay--show') {
  //     sidebar.classList.remove('sidebar--open')
  //   }
  // }
  // )
