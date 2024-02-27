const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  menuBtn.addEventListener('click', handleMenu);

  menu.addEventListener('click', (e) => {
    console.log(e.target.closest('menu'));
    if (e.target.closest('menu') && !e.target.classList.contains('active-menu')) {
      handleMenu();
    } else {
      return;
    }
  });
};
export default menu;

