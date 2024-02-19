const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const closeBtn = modal.querySelector('.popup-close');
  const modalContent = modal.querySelector('.popup-content');

  if (screen.width > 768) {
    modal.style.display = 'block';
    modal.style.zIndex = '-1';
    modal.style.opacity = '0';
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (screen.width > 768) {
        modal.style.transition = 'opacity 2s';
        modal.style.opacity = '1';
        modal.style.zIndex = '9';
      } else {
        modal.style.display = 'block';
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    if (screen.width > 768) {
      modal.style.opacity = '0';
    } else {
      modal.style.display = 'none';
    }
  });
};

export default modal;
