const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  menuBtn.addEventListener('click', handleMenu);

  menu.addEventListener('click', (e) => {
    if (
      e.target.closest('.menu') ||
      (!e.target.closest('menu') &&
        document.querySelector('menu').classList.contains('active-menu'))
    ) {
      handleMenu();
    } else if (e.target.closest('menu') && e.target.closest('[href^="#"]')) {
      handleMenu();
    } else {
      return;
    }
  });
};
export default menu;
