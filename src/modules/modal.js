import { animate } from './helpers';

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      if (screen.width > 768) {
        console.log('Click');
        animate({
          duration: 1000,
          timing(timeFraction) {
            return Math.pow(timeFraction, 3);
          },
          draw(progress) {
            modalContent.style.left = 38 * progress + '%';
            modalContent.style.top = 10 * progress + '%';
            modalContent.style.opacity = progress;
          },
        });
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if (
      !e.target.closest('.popup-content') ||
      e.target.classList.contains('popup-close')
    ) {
      modal.style.display = 'none';
    }
  });
};

export default modal;
