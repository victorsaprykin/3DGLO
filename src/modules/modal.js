const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const closeBtn = modal.querySelector('.popup-close');
  const modalContent = modal.querySelector('.popup-content');

  const popupData = {
    count: -445,
    speed: 6,
    startPos: -445,
    endPos: 0,
  };

  const showPopup = () => {
    popupData.startPos > popupData.endPos
      ? (popupData.count -= popupData.speed)
      : (popupData.count += popupData.speed);
    modalContent.style.transform = `translateX(${popupData.count}px)`;

    if (
      popupData.startPos > popupData.endPos
        ? popupData.count > popupData.endPos
        : popupData.count < popupData.endPos
    ) {
      requestAnimationFrame(showPopup);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      if (screen.width > 768) {
        popupData.count = popupData.startPos;
        requestAnimationFrame(showPopup);
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

export default modal;

